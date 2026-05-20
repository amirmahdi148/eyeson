import React, { useEffect, useState } from 'react';
import { Clock, Settings, Bell, RefreshCcw } from 'lucide-react';

type ApiSetting = { enabled: boolean; value: number };

export default function SettingsPanel() {
  const [apiInterval, setApiInterval] = useState<ApiSetting>({ enabled: true, value: 60 });
  const [notifications, setNotifications] = useState(true);
  const [maintenance, setMaintenance] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem('admin-settings');
      if (raw) {
        const s = JSON.parse(raw);
        if (s.apiInterval) setApiInterval(s.apiInterval);
        if (typeof s.notifications === 'boolean') setNotifications(s.notifications);
        if (typeof s.maintenance === 'boolean') setMaintenance(s.maintenance);
      }
    } catch (e) {
      // ignore
    }
  }, []);

  useEffect(() => {
    const s = { apiInterval, notifications, maintenance };
    localStorage.setItem('admin-settings', JSON.stringify(s));
  }, [apiInterval, notifications, maintenance]);

  return (
    <div className="min-h-screen text-white">
      <div className="rounded-2xl p-6" style={{ background: 'linear-gradient(135deg, rgba(6,18,22,0.6), rgba(2,160,140,0.08))', border: '1px solid rgba(255,255,255,0.04)' }}>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <Settings />
            <h1 className="text-2xl font-bold">Settings</h1>
          </div>
          <button className="px-3 py-1 rounded-full bg-linear-to-r from-[#00E6D7] to-[#12ACB5] text-black">Save</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="backdrop-blur-xl bg-white/5 border border-white/6 rounded-xl p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Clock />
                <div>
                  <div className="font-semibold">API Request Interval</div>
                  <div className="text-sm text-white/70">How often the app polls the API (in seconds)</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <input type="number" value={apiInterval.value} min={5} onChange={(e) => setApiInterval(prev => ({ ...prev, value: Number(e.target.value) }))} className="w-20 p-1 rounded-md bg-white/5 text-white" />
                <label className="flex items-center gap-2 ml-2">
                  <input type="checkbox" checked={apiInterval.enabled} onChange={(e) => setApiInterval(prev => ({ ...prev, enabled: e.target.checked }))} />
                  <span className="text-sm">Enabled</span>
                </label>
              </div>
            </div>
          </div>

          <div className="backdrop-blur-xl bg-white/5 border border-white/6 rounded-xl p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Bell />
                <div>
                  <div className="font-semibold">Notifications</div>
                  <div className="text-sm text-white/70">Enable admin notifications for requests and errors</div>
                </div>
              </div>
              <label className="flex items-center gap-2">
                <input type="checkbox" checked={notifications} onChange={(e) => setNotifications(e.target.checked)} />
                <span className="text-sm">On</span>
              </label>
            </div>
          </div>

          <div className="backdrop-blur-xl bg-white/5 border border-white/6 rounded-xl p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <RefreshCcw />
                <div>
                  <div className="font-semibold">Auto Refresh</div>
                  <div className="text-sm text-white/70">Auto-refresh dashboard widgets</div>
                </div>
              </div>
              <label className="flex items-center gap-2">
                <input type="checkbox" defaultChecked />
                <span className="text-sm">On</span>
              </label>
            </div>
          </div>

          <div className="backdrop-blur-xl bg-white/5 border border-white/6 rounded-xl p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Clock />
                <div>
                  <div className="font-semibold">Maintenance Mode</div>
                  <div className="text-sm text-white/70">Put the site into maintenance mode</div>
                </div>
              </div>
              <label className="flex items-center gap-2">
                <input type="checkbox" checked={maintenance} onChange={(e) => setMaintenance(e.target.checked)} />
                <span className="text-sm">On</span>
              </label>
            </div>
          </div>
        </div>

        <div className="mt-4 text-sm text-white/70">Settings are stored locally for now. Integrate with backend to persist for all admins.</div>
      </div>
    </div>
  );
}
