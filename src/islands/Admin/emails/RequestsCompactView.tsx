import { motion, AnimatePresence } from "framer-motion";
import { CheckSquare, Square, ChevronUp, ChevronDown } from "lucide-react";
import type { EmailRequest } from "./types";
import { statusConfig, priorityColors } from "./types";

interface RequestsCompactViewProps {
  requests: EmailRequest[];
  selectedIds: Set<string>;
  onToggleSelect: (id: string) => void;
  expandedId: string | null;
  onSetExpandedId: (id: string | null) => void;
}

export default function RequestsCompactView({
  requests,
  selectedIds,
  onToggleSelect,
  expandedId,
  onSetExpandedId,
}: RequestsCompactViewProps) {
  return (
    <div className="rounded-2xl border border-white/5 bg-white/[0.03] backdrop-blur-xl overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-xs">
          <thead>
            <tr className="bg-white/5 border-b border-white/5">
              <th className="w-10 px-3 py-3"></th>
              <th className="text-left px-3 py-3 text-white/40 font-medium">Title / Name</th>
              <th className="text-left px-3 py-3 text-white/40 font-medium hidden sm:table-cell">Email</th>
              <th className="text-left px-3 py-3 text-white/40 font-medium hidden md:table-cell">Company</th>
              <th className="text-left px-3 py-3 text-white/40 font-medium hidden lg:table-cell">Type</th>
              <th className="text-left px-3 py-3 text-white/40 font-medium hidden xl:table-cell">Budget</th>
              <th className="text-left px-3 py-3 text-white/40 font-medium">Status</th>
              <th className="text-left px-3 py-3 text-white/40 font-medium hidden lg:table-cell">Priority</th>
              <th className="w-8 px-3 py-3"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            <AnimatePresence mode="popLayout">
              {requests.map((r, i) => {
                const isSelected = selectedIds.has(r.id);
                const status = statusConfig[r.status] || statusConfig.Pending;
                return (
                  <motion.tr
                    key={r.id}
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ delay: i * 0.01 }}
                    className={`hover:bg-white/[0.02] transition-colors cursor-pointer ${isSelected ? "bg-[#00E6D7]/5" : ""}`}
                    onClick={() => onToggleSelect(r.id)}
                  >
                    <td className="px-3 py-3">
                      <div className="text-white/40 hover:text-[#00E6D7] transition-colors">
                        {isSelected ? <CheckSquare size={16} className="text-[#00E6D7]" /> : <Square size={16} />}
                      </div>
                    </td>
                    <td className="px-3 py-3">
                      <div className="text-white font-medium truncate max-w-[180px]">{r.title || `${r.firstName} ${r.lastName}`}</div>
                      <div className="text-[10px] text-white/30 mt-0.5">{r.firstName} {r.lastName}</div>
                    </td>
                    <td className="px-3 py-3 text-white/50 hidden sm:table-cell">{r.email}</td>
                    <td className="px-3 py-3 text-white/50 hidden md:table-cell">{r.companyName || "-"}</td>
                    <td className="px-3 py-3 hidden lg:table-cell">
                      {r.projectType ? (
                        <span className="px-1.5 py-0.5 rounded bg-[#00E6D7]/10 text-[#00E6D7]/70 text-[10px]">{r.projectType}</span>
                      ) : "-"}
                    </td>
                    <td className="px-3 py-3 text-white/50 hidden xl:table-cell">{r.budget || "-"}</td>
                    <td className="px-3 py-3">
                      <span className={`px-2 py-0.5 rounded-full text-[10px] font-medium border inline-flex items-center gap-1 ${status.color}`}>
                        {status.icon}
                        {r.status}
                      </span>
                    </td>
                    <td className="px-3 py-3 hidden lg:table-cell">
                      <span className={`text-[10px] font-semibold uppercase ${priorityColors[r.priority] || "text-white/30"}`}>{r.priority}</span>
                    </td>
                    <td className="px-3 py-3">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={(e) => {
                          e.stopPropagation();
                          onSetExpandedId(expandedId === r.id ? null : r.id);
                        }}
                        className="text-white/20 hover:text-white/50 transition-colors cursor-pointer"
                      >
                        {expandedId === r.id ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                      </motion.button>
                    </td>
                  </motion.tr>
                );
              })}
            </AnimatePresence>
          </tbody>
        </table>
      </div>
    </div>
  );
}
