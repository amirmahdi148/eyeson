import React, { useState, useLayoutEffect } from 'react';
import { httpService } from '@/utils/httpService.ts';

const CACHE_KEY = 'admin_auth_cache';
const CACHE_TTL = 30_000; // 30 seconds

function getCachedAuth(): { role: string } | null {
  try {
    const raw = sessionStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (Date.now() - parsed.timestamp > CACHE_TTL) {
      sessionStorage.removeItem(CACHE_KEY);
      return null;
    }
    return { role: parsed.role };
  } catch {
    return null;
  }
}

function setCachedAuth(role: string) {
  try {
    sessionStorage.setItem(CACHE_KEY, JSON.stringify({ role, timestamp: Date.now() }));
  } catch { /* ignore quota errors */ }
}

export default function AdminGuard({ children }: { children: React.ReactNode }) {
  const [checked, setChecked] = useState(false);
  useLayoutEffect(() => {
    (async () => {
      const cached = getCachedAuth();
      if (cached) {
        try { (window as any).__userRole = cached.role; } catch { }
        setChecked(true);
        return;
      }

      try {
        const data: any = await httpService.get('/auth/me', { timeout: 5000 });
        const role = data?.role || data?.user?.role || data?.roleName || (data?.role?.name);
        if (!role || role === 'user' || role === 'guest') {
          window.location.href = '/';
          return;
        }
        setCachedAuth(role);
        try { (window as any).__userRole = role; } catch { }
      } catch {
        // Network hiccup or stale request — use cache as fallback
        const fallback = getCachedAuth();
        if (fallback) {
          try { (window as any).__userRole = fallback.role; } catch { }
          setChecked(true);
          return;
        }
        window.location.href = '/login';
        return;
      }
      setChecked(true);
    })();
  }, []);

  return <>{children}</>;
}