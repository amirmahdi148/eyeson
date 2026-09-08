import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import nodeAdapter from "@astrojs/node";


import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://eyesonstudio.com',
  output: 'server',
  // Strip whitespace/comments from rendered HTML
  compressHTML: true,
  adapter: nodeAdapter({ mode: 'standalone' }),
  integrations: [react(), sitemap({
    filter: (page) => !page.startsWith('https://eyesonstudio.com/admin/') && page !== 'https://eyesonstudio.com/login/',
  })],
  vite: {
    // NOTE: no Vite compression plugin here on purpose — with output: 'server'
    // Astro rearranges dist/ after Vite's closeBundle hooks run, so build-time
    // plugins compress the wrong directory. Pre-compression is handled instead
    // by scripts/compress-dist.mjs, which runs after `astro build` (see the
    // `build` script in package.json) and targets the final dist/client tree.
    // @astrojs/node does not negotiate precompressed files itself — serve
    // dist/client behind nginx/CDN with `gzip_static` / brotli_static
    // (or equivalent) so the .gz/.br files are actually used.
    plugins: [tailwindcss()],
    build: {
      minify: true,
      chunkSizeWarningLimit: 1000,
      reportCompressedSize: true,
    },
  },
});