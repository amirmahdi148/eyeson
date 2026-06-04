import { motion, AnimatePresence } from "framer-motion";
import {
  CheckSquare, Square, Mail, Building2, Phone, Wallet,
  ChevronUp, ChevronDown, FileText, Tag, Calendar, Clock, Timer, User,
} from "lucide-react";
import type { EmailRequest } from "./types";
import { LOG_PREFIX, statusConfig, priorityColors } from "./types";

interface RequestsListViewProps {
  requests: EmailRequest[];
  selectedIds: Set<string>;
  onToggleSelect: (id: string) => void;
  expandedId: string | null;
  onSetExpandedId: (id: string | null) => void;
}

export default function RequestsListView({
  requests,
  selectedIds,
  onToggleSelect,
  expandedId,
  onSetExpandedId,
}: RequestsListViewProps) {
  return (
    <div className="rounded-2xl border border-white/5 bg-white/[0.03] backdrop-blur-xl divide-y divide-white/5">
      <AnimatePresence mode="popLayout">
        {requests.map((r, i) => {
          const isSelected = selectedIds.has(r.id);
          const isExpanded = expandedId === r.id;
          const status = statusConfig[r.status] || statusConfig.Pending;
          return (
            <motion.div key={r.id} layout>
              <motion.div
                layout
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ delay: i * 0.02 }}
                className={`flex items-center gap-3 p-4 sm:p-5 hover:bg-white/[0.02] transition-colors cursor-pointer ${
                  isSelected ? "bg-[#00E6D7]/5" : ""
                }`}
                onClick={(e) => {
                  const target = e.target as HTMLElement;
                  if (target.closest("[data-expand-toggle]")) {
                    onSetExpandedId(isExpanded ? null : r.id);
                    return;
                  }
                  onToggleSelect(r.id);
                }}
              >
                <div className="shrink-0 text-white/40 hover:text-[#00E6D7] transition-colors">
                  {isSelected ? <CheckSquare size={18} className="text-[#00E6D7]" /> : <Square size={18} />}
                </div>

                <div className="p-2.5 rounded-xl bg-gradient-to-br from-[#00E6D7]/20 to-[#12ACB5]/10 shrink-0">
                  <Mail className="h-4 w-4 text-[#00E6D7]" />
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-medium text-white truncate max-w-[200px] sm:max-w-none">
                      {r.title || `${r.firstName} ${r.lastName}`}
                    </span>
                    {r.companyName && (
                      <span className="hidden sm:inline-flex items-center gap-1 text-xs text-white/40">
                        <Building2 size={11} />
                        {r.companyName}
                      </span>
                    )}
                    {r.projectType && (
                      <span className="px-2 py-0.5 rounded-full bg-gradient-to-r from-[#00E6D7]/10 to-[#12ACB5]/10 text-[10px] font-medium text-[#00E6D7]/80 border border-[#00E6D7]/20">
                        {r.projectType}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-2 mt-0.5 flex-wrap text-xs text-white/40">
                    <span>{r.firstName} {r.lastName}</span>
                    <span className="w-1 h-1 rounded-full bg-white/20" />
                    <span>{r.email}</span>
                    {r.phone && (
                      <>
                        <span className="w-1 h-1 rounded-full bg-white/20" />
                        <span className="flex items-center gap-1"><Phone size={10} />{r.phone}</span>
                      </>
                    )}
                    {r.budget && (
                      <>
                        <span className="w-1 h-1 rounded-full bg-white/20" />
                        <span className="flex items-center gap-1"><Wallet size={10} />{r.budget}</span>
                      </>
                    )}
                    <span className="w-1 h-1 rounded-full bg-white/20" />
                    <span>{r.createdAt}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <span className={`px-2.5 py-1 rounded-full text-xs font-medium border inline-flex items-center gap-1.5 ${status.color}`}>
                    {status.icon}
                    {r.status}
                  </span>
                  <span className={`text-[10px] font-semibold uppercase px-2 py-1 rounded-full border ${priorityColors[r.priority] || "text-white/30"} border-white/10`}>
                    {r.priority}
                  </span>
                  <motion.button
                    data-expand-toggle
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-white/30 hover:text-white/60 transition-colors cursor-pointer p-1"
                  >
                    {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </motion.button>
                </div>
              </motion.div>

              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="mx-4 sm:mx-5 mb-4 p-4 rounded-xl bg-white/5 border border-white/5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        <div className="space-y-2">
                          <h4 className="text-xs font-semibold text-white/40 uppercase tracking-wider">Contact</h4>
                          <div className="space-y-1.5 text-sm text-white/70">
                            <p className="flex items-center gap-2"><Mail size={12} className="text-white/30 shrink-0" />{r.email}</p>
                            {r.phone && <p className="flex items-center gap-2"><Phone size={12} className="text-white/30 shrink-0" />{r.phone}</p>}
                            {r.companyName && <p className="flex items-center gap-2"><Building2 size={12} className="text-white/30 shrink-0" />{r.companyName}</p>}
                          </div>
                        </div>
                        <div className="space-y-2">
                          <h4 className="text-xs font-semibold text-white/40 uppercase tracking-wider">Project</h4>
                          <div className="space-y-1.5 text-sm text-white/70">
                            {r.title && <p className="flex items-center gap-2"><FileText size={12} className="text-white/30 shrink-0" /><span className="text-white/80">{r.title}</span></p>}
                            <p className="flex items-center gap-2"><Tag size={12} className="text-white/30 shrink-0" />{r.projectType || "Not specified"}</p>
                            {r.budget && <p className="flex items-center gap-2"><Wallet size={12} className="text-white/30 shrink-0" />{r.budget}</p>}
                          </div>
                        </div>
                        <div className="space-y-2">
                          <h4 className="text-xs font-semibold text-white/40 uppercase tracking-wider">Schedule</h4>
                          <div className="space-y-1.5 text-sm text-white/70">
                            {r.date && <p className="flex items-center gap-2"><Calendar size={12} className="text-white/30 shrink-0" />{r.date}</p>}
                            {r.time && <p className="flex items-center gap-2"><Clock size={12} className="text-white/30 shrink-0" />{r.time}</p>}
                            {r.duration && <p className="flex items-center gap-2"><Timer size={12} className="text-white/30 shrink-0" />{r.duration}</p>}
                          </div>
                        </div>
                      </div>
                      {r.projectDetails && (
                        <div className="mt-4 pt-4 border-t border-white/5">
                          <h4 className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-2 flex items-center gap-1.5"><FileText size={12} />Project Details</h4>
                          <p className="text-sm text-white/60 whitespace-pre-wrap leading-relaxed">{r.projectDetails}</p>
                        </div>
                      )}
                      <div className="mt-4 pt-4 border-t border-white/5 flex flex-wrap items-center gap-3 text-[10px] text-white/30">
                        <span>ID: {r.id}</span>
                        <span>Created: {r.createdAt}</span>
                        <span>Status: {r.status}</span>
                        <span>Priority: {r.priority}</span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}
