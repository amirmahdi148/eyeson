import React, { useState, useLayoutEffect } from 'react';
import { httpService } from '@/utils/httpService.ts';

export default function AdminGuard({ children }: { children: React.ReactNode }) {
  const [checked, setChecked] = useState(false);
  useLayoutEffect(() => {
    (async () => {
      try {
        const data: any = await httpService.get('/auth/me', { timeout: 5000 });
        const role = data?.role || data?.user?.role || data?.roleName || (data?.role?.name);
        if (!role || role === 'user' || role === 'guest') {
          window.location.href = '/';
          return;
        }
        try { (window as any).__userRole = role; } catch (e) { }
      } catch (err) {
        window.location.href = '/login';
        return;
      }
      setChecked(true);
    })();
  }, []);

  return <>{children}</>;
}