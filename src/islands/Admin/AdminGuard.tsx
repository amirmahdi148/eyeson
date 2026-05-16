import React, { useEffect, useState, useLayoutEffect } from 'react';
import { httpService } from '../../utils/httpService';

export default function AdminGuard({ children }: { children: React.ReactNode }) {
  const [isAuthorized, setIsAuthorized] = useState(false);
  useLayoutEffect(() => {
    (async () => {
      try {
        const data: any = await httpService.get('/auth/me');
        const role = data?.role || data?.user?.role || data?.roleName || (data?.role?.name);
        if (!role) {
          // no role -> redirect
          window.location.href = '/';
          return;
        }

        // deny simple users and guests
        if (role === 'user' || role === 'guest') {
          window.location.href = '/';
          return;
        }

        // expose role to other client islands
        try { (window as any).__userRole = role; } catch (e) { }
          setIsAuthorized(true);
      } catch (err) {
        // failed to fetch -> redirect to login
        try { window.location.href = '/login'; } catch (e) { }
      }
    })();
  }, []);

  return isAuthorized ? <>{children}</> : null;
}
