import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Search, Filter, ArrowUpRight, Clock, CheckCircle2, AlertCircle } from "lucide-react";

const sampleRequests = [
  { id: 101, title: "New hero video", client: "Client A", status: "Pending", date: "2 hours ago", priority: "High" },
  { id: 102, title: "Revisions to banner", client: "Client B", status: "Completed", date: "1 day ago", priority: "Medium" },
  { id: 103, title: "Add subtitles", client: "Client C", status: "In Progress", date: "3 days ago", priority: "Low" },
  { id: 104, title: "Logo redesign", client: "Client D", status: "Pending", date: "5 hours ago", priority: "High" },
  { id: 105, title: "Social media assets", client: "Client E", status: "Completed", date: "1 week ago", priority: "Medium" },
];

const statusConfig: Record<string, { color: string; icon: React.ReactNode }> = {
  Pending: { color: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30", icon: <AlertCircle size={14} /> },
  Completed: { color: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30", icon: <CheckCircle2 size={14} /> },
  "In Progress": { color: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30", icon: <Clock size={14} /> },
};

const priorityColors: Record<string, string> = {
  High: "text-red-400",
  Medium: "text-yellow-400",
  Low: "text-white/40",
};

export default function RequestsList() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");

  const filteredRequests = sampleRequests.filter((r) => {
    const matchesSearch = r.title.toLowerCase().includes(searchQuery.toLowerCase()) || r.client.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filterStatus === "All" || r.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const statuses = ["All", "Pending", "In Progress", "Completed"];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-white">Requests</h2>
          <p className="text-sm text-white/50 mt-0.5">{sampleRequests.length} total requests</p>
        </div>
      </div>

      {/* Toolbar */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/30" />
          <input
            type="text"
            placeholder="Search requests..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-[#00E6D7]/30 focus:border-[#00E6D7]/30 transition-all"
          />
        </div>
        <div className="flex gap-2 overflow-x-auto pb-1">
          {statuses.map((s) => (
            <motion.button
              key={s}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilterStatus(s)}
              className={`px-3 py-2 rounded-xl text-sm font-medium whitespace-nowrap transition-all cursor-pointer ${
                filterStatus === s
                  ? "bg-[#00E6D7]/15 text-[#00E6D7] border border-[#00E6D7]/30"
                  : "bg-white/5 text-white/50 border border-white/10 hover:text-white/70"
              }`}
            >
              {s}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Requests List */}
      <div className="rounded-2xl border border-white/5 bg-white/[0.03] backdrop-blur-xl divide-y divide-white/5">
        <AnimatePresence mode="popLayout">
          {filteredRequests.map((r, i) => {
            const status = statusConfig[r.status] || statusConfig.Pending;
            return (
              <motion.div
                key={r.id}
                layout
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ delay: i * 0.03 }}
                className="flex flex-col sm:flex-row sm:items-center justify-between p-4 sm:p-5 hover:bg-white/[0.02] transition-colors gap-3 sm:gap-0"
              >
                <div className="flex items-start gap-4 min-w-0">
                  <div className="p-2.5 rounded-xl bg-gradient-to-br from-[#00E6D7]/20 to-[#12ACB5]/10 shrink-0">
                    <Mail className="h-4 w-4 text-[#00E6D7]" />
                  </div>
                  <div className="min-w-0">
                    <div className="font-medium text-white truncate">{r.title}</div>
                    <div className="text-sm text-white/40 flex items-center gap-2 mt-0.5">
                      <span>From: {r.client}</span>
                      <span className="w-1 h-1 rounded-full bg-white/20" />
                      <span>{r.date}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 sm:ml-4 shrink-0">
                  <span className={`px-2.5 py-1 rounded-full text-xs font-medium border inline-flex items-center gap-1.5 ${status.color}`}>
                    {status.icon}
                    {r.status}
                  </span>
                  <span className={`text-xs font-medium ${priorityColors[r.priority] || "text-white/40"}`}>
                    {r.priority}
                  </span>
                  <a
                    href="#"
                    className="flex items-center gap-1 text-sm text-[#00E6D7] hover:text-[#00E6D7]/80 transition-colors"
                  >
                    <span className="hidden sm:inline">View</span>
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>

        {filteredRequests.length === 0 && (
          <div className="p-12 text-center">
            <Mail className="h-10 w-10 text-white/20 mx-auto mb-3" />
            <p className="text-white/40 text-sm">No requests found</p>
          </div>
        )}
      </div>
    </div>
  );
}