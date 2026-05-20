import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Layers, Eye, FileText, CheckCircle, Activity, Cpu, Database } from "lucide-react";

const quickStats = [
  { label: "Projects Count", value: 42, icon: Layers },
  { label: "Project Views", value: 1234, icon: Eye },
  { label: "Project Requests", value: 56, icon: FileText },
  { label: "Completed Requests", value: 38, icon: CheckCircle },
];

const recentProjects = [
  { id: 1, title: "Branding Refresh", owner: "Alice", updated: "2 days ago" },
  { id: 2, title: "Landing Page Redesign", owner: "Bob", updated: "5 days ago" },
];

const recentRequests = [
  { id: 101, title: "Request: New hero video", from: "Client A", status: "Pending" },
  { id: 102, title: "Request: Extra revisions", from: "Client B", status: "Completed" },
];

const statTransition = { type: "spring" as const, stiffness: 140, damping: 18, mass: 0.6 };

export default function DashboardOverview() {
  const [apiInterval, setApiInterval] = useState<number | null>(null);
  const [uptime] = useState("12 days 4 hrs");
  const [activeUsers] = useState(128);
  const [cpu] = useState(26);
  const [dbConnections] = useState(8);

  useEffect(() => {
    try {
      const raw = localStorage.getItem('admin-settings');
      if (raw) {
        const s = JSON.parse(raw);
        if (s.apiInterval && s.apiInterval.enabled) setApiInterval(Number(s.apiInterval.value));
      }
    } catch (e) {
      // ignore
    }
  }, []);

  const [role, setRole] = useState<string | null>(null);
  useEffect(() => {
    try {
      if (typeof window !== 'undefined') {
        const r = (window as any).__userRole;
        if (r) setRole(String(r));
      }
    } catch (e) {
      // ignore
    }
  }, []);

  const navItems = ["Dashboard", "Projects", "Requests", "Users", "Settings"].filter(item => !(item === 'Users' && role !== 'owner'));

  return (
    <div className="min-h-screen flex flex-col md:flex-row gap-6 text-white">
      <aside className="w-full md:w-72 backdrop-blur-xl bg-white/6 border border-white/6 rounded-2xl p-6 shadow-2xl">
        <h2 className="text-2xl font-semibold mb-6 text-white">Admin Panel</h2>
        <nav className="flex flex-col gap-2">
          {navItems.map((s) => (
            <a
              key={s}
              href={s === 'Projects' ? '/admin/projects' : s === 'Requests' ? '/admin/requests' : s === 'Settings' ? '/admin/settings' : '#'}
              className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/8 transition-colors text-white"
            >
              <span className="text-white"><Layers size={18} /></span>
              <span className="text-sm">{s}</span>
            </a>
          ))}
        </nav>
      </aside>

      <main className="flex-1">
        <section
          className="rounded-2xl p-6"
          style={{
            background: 'linear-gradient(135deg, rgba(4,18,20,0.6), rgba(6,180,166,0.12))',
            border: '1px solid rgba(255,255,255,0.04)',
            boxShadow: '0 15px 40px rgba(2,80,80,0.12)'
          }}
        >
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-bold">Dashboard Overview</h1>
            <div className="text-sm text-white/80">Welcome back, Admin</div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            {quickStats.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.label}
                  layout
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 6 }}
                  transition={{ ...statTransition, delay: i * 0.06 }}
                  whileHover={{ scale: 1.03 }}
                  className="backdrop-blur-xl bg-white/5 border border-white/6 rounded-xl p-5 flex flex-col items-center"
                >
                  <div className="p-3 rounded-full bg-linear-to-r from-[#00E6D7] to-[#12ACB5] shadow-[0_12px_40px_rgba(18,172,181,0.14)] mb-3">
                    <Icon color="#fff" size={18} />
                  </div>
                  <div className="text-2xl font-semibold text-white">{s.value}</div>
                  <div className="text-sm text-white/80 mt-1">{s.label}</div>
                </motion.div>
              );
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 backdrop-blur-xl bg-white/5 border border-white/6 rounded-2xl p-5">
              <div className="flex items-start justify-between">
                <h3 className="text-xl font-semibold mb-3">Recent Projects</h3>
                <div className="text-sm text-white/70">API Interval: {apiInterval ? `${apiInterval}s` : 'Not set'}</div>
              </div>

              <ul className="flex flex-col gap-3">
                {recentProjects.map((p) => (
                  <li key={p.id} className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold">{p.title}</div>
                      <div className="text-sm text-white/70">Owner: {p.owner} • {p.updated}</div>
                    </div>
                    <a className="px-3 py-1 rounded-full bg-linear-to-r from-[#00E6D7] to-[#12ACB5] text-black text-sm" href={`/projects/${p.id}`}>Open</a>
                  </li>
                ))}
              </ul>

              <div className="mt-4">
                <h4 className="text-sm font-medium mb-2">System Metrics</h4>
                <div className="grid grid-cols-2 gap-3">
                  <div className="text-sm">
                    <div className="text-white/80 text-xs">Uptime</div>
                    <div className="font-semibold">{uptime}</div>
                  </div>
                  <div className="text-sm">
                    <div className="text-white/80 text-xs">Active Users</div>
                    <div className="font-semibold">{activeUsers}</div>
                  </div>
                </div>

                <div className="mt-3">
                  <div className="flex items-center justify-between text-xs text-white/80">
                    <span>CPU</span>
                    <span>{cpu}%</span>
                  </div>
                  <div className="w-full bg-white/6 rounded-full h-2 mt-1">
                    <div className="bg-linear-to-r from-[#00E6D7] to-[#12ACB5] h-2 rounded-full" style={{ width: `${cpu}%` }} />
                  </div>

                  <div className="flex items-center justify-between text-xs text-white/80 mt-2">
                    <span>DB Connections</span>
                    <span>{dbConnections}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="backdrop-blur-xl bg-white/5 border border-white/6 rounded-2xl p-5">
              <h3 className="text-xl font-semibold mb-3">Recent Requests</h3>
              <ul className="flex flex-col gap-3 mb-4">
                {recentRequests.map((r) => (
                  <li key={r.id} className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold">{r.title}</div>
                      <div className="text-sm text-white/70">From: {r.from}</div>
                    </div>
                    <div className={`px-3 py-1 rounded-full text-sm ${r.status === 'Completed' ? 'bg-green-200 text-black' : 'bg-white/8 text-white'}`}>
                      {r.status}
                    </div>
                  </li>
                ))}
              </ul>

              <div className="text-sm text-white/70">
                <div className="flex items-center gap-2">
                  <Cpu size={14} /> <span>CPU: {cpu}%</span>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <Database size={14} /> <span>DB Connections: {dbConnections}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 text-sm text-white/60 flex items-center gap-3">
            <Activity size={16} /> Live system metrics and activity streams available in full admin.
          </div>
        </section>
      </main>
    </div>
  );
}
