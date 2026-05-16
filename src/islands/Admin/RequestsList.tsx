import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail } from "lucide-react";

const sampleRequests = [
  { id: 101, title: "New hero video", client: "Client A", status: "Pending" },
  { id: 102, title: "Revisions to banner", client: "Client B", status: "Completed" },
  { id: 103, title: "Add subtitles", client: "Client C", status: "In Progress" },
];

const itemTransition = { type: "spring", stiffness: 120, damping: 18 };

export default function RequestsList() {
  return (
    <div className="min-h-screen text-white">
      <div className="rounded-2xl p-6" style={{ background: 'linear-gradient(135deg, rgba(6,18,22,0.6), rgba(2,160,140,0.08))', border: '1px solid rgba(255,255,255,0.04)' }}>
        <h1 className="text-3xl font-bold mb-6">Requests</h1>

        <div className="grid grid-cols-1 gap-4">
          <AnimatePresence>
            {sampleRequests.map((r, i) => (
              <motion.div key={r.id} initial={{ opacity: 0, y: 8, scale: 0.995 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 6 }} transition={{ ...itemTransition, delay: i * 0.03 }} className="backdrop-blur-xl bg-white/5 border border-white/6 rounded-xl p-4 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-full bg-gradient-to-r from-[#00E6D7] to-[#12ACB5]">
                    <Mail color="#fff" size={16} />
                  </div>
                  <div>
                    <div className="font-semibold text-white">{r.title}</div>
                    <div className="text-sm text-white/70">From: {r.client}</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="text-sm text-white/80">{r.status}</div>
                  <a className="px-3 py-1 rounded-full bg-gradient-to-r from-[#00E6D7] to-[#12ACB5] text-black text-sm" href="#">View</a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
