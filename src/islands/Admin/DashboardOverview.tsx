import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Layers,
  Eye,
  FileText,
  CheckCircle,
  Activity,
  Cpu,
  Database,
  TrendingUp,
  Clock,
  ArrowUpRight,
  ArrowDownRight
} from "lucide-react";

const quickStats = [
  { label: "Projects", value: 42, change: "+12%", up: true, icon: Layers },
  { label: "Total Views", value: 1234, change: "+8%", up: true, icon: Eye },
  { label: "Requests", value: 56, change: "-3%", up: false, icon: FileText },
  { label: "Completed", value: 38, change: "+15%", up: true, icon: CheckCircle },
];

const recentProjects = [
  { id: 1, title: "Branding Refresh", owner: "Alice", updated: "2 days ago", views: 1240 },
  { id: 2, title: "Landing Page Redesign", owner: "Bob", updated: "5 days ago", views: 890 },
  { id: 3, title: "Ad Campaign Assets", owner: "Carol", updated: "1 week ago", views: 430 },
];

const recentRequests = [
  { id: 101, title: "New hero video", from: "Client A", status: "Pending" },
  { id: 102, title: "Extra revisions", from: "Client B", status: "Completed" },
  { id: 103, title: "Add subtitles", from: "Client C", status: "In Progress" },
];

const itemTransition = { type: "spring" as const, stiffness: 120, damping: 18 };

export default function DashboardOverview() {
  const [uptime] = useState("12 days 4 hrs");
  const [activeUsers] = useState(128);
  const [cpu] = useState(26);
  const [dbConnections] = useState(8);

  const statusColors: Record<string, string> = {
    Pending: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
    Completed: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
    "In Progress": "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
  };

  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {quickStats.map((s, i) => {
          const Icon = s.icon;
          return (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...itemTransition, delay: i * 0.06 }}
              className="relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.03] backdrop-blur-xl p-5"
            >
              <div className="flex items-start justify-between">
                <div className="p-2.5 rounded-xl bg-gradient-to-br from-[#00E6D7]/20 to-[#12ACB5]/10">
                  <Icon className="h-5 w-5 text-[#00E6D7]" />
                </div>
                <div className={`flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-full ${s.up ? "bg-emerald-500/15 text-emerald-400" : "bg-red-500/15 text-red-400"}`}>
                  {s.up ? <ArrowUpRight size={12} /> : <ArrowDownRight size={12} />}
                  {s.change}
                </div>
              </div>
              <div className="mt-4">
                <div className="text-2xl font-bold text-white">{s.value.toLocaleString()}</div>
                <div className="text-sm text-white/50 mt-0.5">{s.label}</div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Projects */}
        <div className="lg:col-span-2 rounded-2xl border border-white/5 bg-white/[0.03] backdrop-blur-xl">
          <div className="flex items-center justify-between p-5 border-b border-white/5">
            <h3 className="font-semibold text-white">Recent Projects</h3>
            <motion.a whileHover={{ x: 3 }} whileTap={{ scale: 0.97 }} href="/admin/projects" className="text-sm text-[#00E6D7] hover:text-[#00E6D7]/80 transition-colors cursor-pointer">
              View all
            </motion.a>
          </div>
          <div className="divide-y divide-white/5">
            {recentProjects.map((p, i) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ ...itemTransition, delay: i * 0.05 }}
                className="flex items-center justify-between p-5 hover:bg-white/[0.02] transition-colors"
              >
                <div className="flex items-center gap-4 min-w-0">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00E6D7]/20 to-[#12ACB5]/10 flex items-center justify-center shrink-0">
                    <span className="text-sm font-bold text-[#00E6D7]">{p.title.charAt(0)}</span>
                  </div>
                  <div className="min-w-0">
                    <div className="font-medium text-white truncate">{p.title}</div>
                    <div className="text-sm text-white/40 flex items-center gap-2">
                      <span>{p.owner}</span>
                      <span className="w-1 h-1 rounded-full bg-white/20" />
                      <span>{p.updated}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4 shrink-0 ml-4">
                  <div className="hidden sm:flex items-center gap-1.5 text-sm text-white/50">
                    <Eye size={14} />
                    <span>{p.views.toLocaleString()}</span>
                  </div>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={`/admin/project/${p.id}`}
                    className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-[#00E6D7] to-[#12ACB5] text-black text-sm font-medium hover:opacity-90 transition-opacity cursor-pointer"
                  >
                    Open
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Recent Requests */}
          <div className="rounded-2xl border border-white/5 bg-white/[0.03] backdrop-blur-xl">
            <div className="flex items-center justify-between p-5 border-b border-white/5">
              <h3 className="font-semibold text-white">Recent Requests</h3>
              <motion.a whileHover={{ x: 3 }} whileTap={{ scale: 0.97 }} href="/admin/requests" className="text-sm text-[#00E6D7] hover:text-[#00E6D7]/80 transition-colors cursor-pointer">
                View all
              </motion.a>
            </div>
            <div className="divide-y divide-white/5">
              {recentRequests.map((r, i) => (
                <motion.div
                  key={r.id}
                  initial={{ opacity: 0, x: 8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ ...itemTransition, delay: i * 0.05 }}
                  className="flex items-center justify-between p-4 hover:bg-white/[0.02] transition-colors"
                >
                  <div className="min-w-0">
                    <div className="font-medium text-white text-sm truncate">{r.title}</div>
                    <div className="text-xs text-white/40 mt-0.5">{r.from}</div>
                  </div>
                  <span className={`px-2.5 py-1 rounded-full text-xs font-medium border shrink-0 ml-2 ${statusColors[r.status] || "bg-white/10 text-white/60 border-white/10"}`}>
                    {r.status}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* System Metrics */}
          <div className="rounded-2xl border border-white/5 bg-white/[0.03] backdrop-blur-xl p-5">
            <h3 className="font-semibold text-white mb-4 flex items-center gap-2">
              <Activity size={16} className="text-[#00E6D7]" />
              System Metrics
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-white/60">
                  <Clock size={14} />
                  <span>Uptime</span>
                </div>
                <span className="text-sm font-medium text-white">{uptime}</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-white/60">
                  <Eye size={14} />
                  <span>Active Users</span>
                </div>
                <span className="text-sm font-medium text-white">{activeUsers}</span>
              </div>
              <div>
                <div className="flex items-center justify-between text-sm mb-1.5">
                  <div className="flex items-center gap-2 text-white/60">
                    <Cpu size={14} />
                    <span>CPU</span>
                  </div>
                  <span className="font-medium text-white">{cpu}%</span>
                </div>
                <div className="w-full bg-white/5 rounded-full h-1.5">
                  <div
                    className="bg-gradient-to-r from-[#00E6D7] to-[#12ACB5] h-1.5 rounded-full transition-all duration-500"
                    style={{ width: `${cpu}%` }}
                  />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between text-sm mb-1.5">
                  <div className="flex items-center gap-2 text-white/60">
                    <Database size={14} />
                    <span>DB Connections</span>
                  </div>
                  <span className="font-medium text-white">{dbConnections}</span>
                </div>
                <div className="w-full bg-white/5 rounded-full h-1.5">
                  <div
                    className="bg-gradient-to-r from-[#00E6D7] to-[#12ACB5] h-1.5 rounded-full transition-all duration-500"
                    style={{ width: `${(dbConnections / 20) * 100}%` }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}