// Pre-compress the final static output (dist/client) to .gz + .br.
//
// Why a script and not a Vite plugin: with `output: 'server'` Astro moves
// client assets into dist/client AFTER Vite's closeBundle hooks run, so
// vite-plugin-compression(-2) either crashes or compresses dist/server
// leftovers that are never served. Running after `astro build` avoids that.
//
// Usage: node ./scripts/compress-dist.mjs [distDir]
// Default distDir: dist/client
import { readdir, stat, readFile, writeFile } from 'node:fs/promises';
import { join, extname } from 'node:path';
import { gzip, brotliCompress, constants } from 'node:zlib';
import { promisify } from 'node:util';

const gzipAsync = promisify(gzip);
const brotliAsync = promisify(brotliCompress);

// Text-based formats only — images/video/fonts are already compressed.
const COMPRESSIBLE = new Set([
  '.js', '.mjs', '.cjs', '.css', '.html',
  '.svg', '.json', '.xml', '.txt', '.webmanifest',
]);
const THRESHOLD = 1024; // bytes — skip tiny files
const SKIP_DIRS = new Set(['.DS_Store']);

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    if (SKIP_DIRS.has(entry.name)) continue;
    const full = join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(full);
    else if (entry.isFile()) yield full;
  }
}

async function compressFile(file) {
  if (!COMPRESSIBLE.has(extname(file).toLowerCase())) return null;
  const content = await readFile(file);
  if (content.length < THRESHOLD) return null;

  const [gz, br] = await Promise.all([
    gzipAsync(content, { level: constants.Z_BEST_COMPRESSION }),
    brotliAsync(content, {
      params: {
        [constants.BROTLI_PARAM_QUALITY]: constants.BROTLI_MAX_QUALITY,
        [constants.BROTLI_PARAM_MODE]: constants.BROTLI_MODE_TEXT,
      },
    }),
  ]);

  const results = [];
  // Only keep the artifact if it actually shrinks the payload.
  if (gz.length < content.length) {
    await writeFile(`${file}.gz`, gz);
    results.push(['.gz', content.length, gz.length]);
  }
  if (br.length < content.length) {
    await writeFile(`${file}.br`, br);
    results.push(['.br', content.length, br.length]);
  }
  return results.length ? { file, results } : null;
}

const root = process.argv[2] ?? 'dist/client';
try {
  await stat(root);
} catch {
  console.error(`[compress-dist] directory not found: ${root} — run \`astro build\` first.`);
  process.exit(1);
}

const files = [];
for await (const file of walk(root)) files.push(file);

const CONCURRENCY = 16;
const total = files.length;
let cursor = 0;
let done = 0;
let artifacts = 0;
let savedBytes = 0;

async function worker() {
  while (true) {
    const i = cursor++;
    if (i >= total) return;
    const file = files[i];
    try {
      const res = await compressFile(file);
      if (res) {
        for (const [, orig, comp] of res.results) {
          artifacts += 1;
          savedBytes += orig - comp;
        }
      }
    } catch (err) {
      console.error(`[compress-dist] failed: ${file}`, err.message);
    }
    done += 1;
    if (done % 100 === 0) console.log(`[compress-dist] ${done}/${total} files…`);
  }
}

await Promise.all(
  Array.from({ length: Math.min(CONCURRENCY, total) }, () => worker()),
);

console.log(
  `[compress-dist] done — ${artifacts} artifacts, ` +
  `~${(savedBytes / 1024).toFixed(1)} KiB saved vs originals (root: ${root}).`,
);
