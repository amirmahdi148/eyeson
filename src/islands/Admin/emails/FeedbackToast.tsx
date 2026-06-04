import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, AlertCircle, X } from "lucide-react";
import { LOG_PREFIX } from "./types";

interface FeedbackToastProps {
  feedback: { type: "success" | "error"; message: string } | null;
}

export default function FeedbackToast({ feedback }: FeedbackToastProps) {
  return (
    <AnimatePresence>
      {feedback && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className={`flex items-center gap-2 px-4 py-3 rounded-xl text-sm ${
            feedback.type === "success"
              ? "bg-emerald-500/15 text-emerald-400 border border-emerald-500/20"
              : "bg-red-500/15 text-red-400 border border-red-500/20"
          }`}
          onClick={() => console.log(`${LOG_PREFIX} [UI] Feedback toast clicked (dismiss not wired for auto-close)`)}
        >
          {feedback.type === "success" ? <CheckCircle2 size={16} /> : <AlertCircle size={16} />}
          {feedback.message}
          <X size={14} className="ml-auto opacity-50 cursor-pointer" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
