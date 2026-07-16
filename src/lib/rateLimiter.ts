interface RateLimitEntry {
  count: number;
  resetAt: number;
}

interface RateLimitConfig {
  windowMs: number;
  maxRequests: number;
}

const windows: RateLimitConfig[] = [
  { windowMs: 1_000, maxRequests: 5 },
  { windowMs: 10_000, maxRequests: 30 },
  { windowMs: 60_000, maxRequests: 100 },
  { windowMs: 3_600_000, maxRequests: 500 },
];

const store = new Map<string, RateLimitEntry[]>();

function cleanup() {
  const now = Date.now();
  for (const [key, entries] of store) {
    const valid = entries.filter((e) => e.resetAt > now);
    if (valid.length === 0) store.delete(key);
  }
}

setInterval(cleanup, 60_000);

function getClientKey(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  const ip = forwarded?.split(",")[0]?.trim()
    || request.headers.get("x-real-ip")
    || "unknown";
  return ip;
}

export function isRateLimited(request: Request): { limited: boolean; retryAfter?: number } {
  const key = getClientKey(request);
  const now = Date.now();

  let entries = store.get(key);
  if (!entries) {
    entries = windows.map(() => ({ count: 0, resetAt: now + 0 }));
    store.set(key, entries);
  }

  for (let i = 0; i < windows.length; i++) {
    const cfg = windows[i];
    const entry = entries[i];

    if (entry.resetAt <= now) {
      entry.count = 0;
      entry.resetAt = now + cfg.windowMs;
    }

    entry.count++;

    if (entry.count > cfg.maxRequests) {
      return { limited: true, retryAfter: Math.ceil((entry.resetAt - now) / 1000) };
    }
  }

  return { limited: false };
}

export function resetRateLimit(request: Request) {
  const key = getClientKey(request);
  store.delete(key);
}
