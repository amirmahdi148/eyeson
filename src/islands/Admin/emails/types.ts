import type { EmailRequest, EmailLogItem } from "@/services/dashboardService.ts";
import React from "react";

export type { EmailRequest, EmailLogItem };

export const LOG_PREFIX = "[EmailsManager]";

export const statuses = ["All","Pending", "Approved", "In Progress", "Completed", "Cancelled"] as const;

export const priorities = ["All", "High", "Medium", "Low"] as const;

export const statusConfig: Record<string, { color: string; icon: React.ReactNode }> = {
  Pending: { color: "text-yellow-400 border-yellow-400/30 bg-yellow-400/10", icon: null },
  Approved: { color: "text-emerald-400 border-emerald-400/30 bg-emerald-400/10", icon: null },
  "In Progress": { color: "text-blue-400 border-blue-400/30 bg-blue-400/10", icon: null },
  Completed: { color: "text-white/40 border-white/10 bg-white/5", icon: null },
  Cancelled: { color: "text-red-400 border-red-400/30 bg-red-400/10", icon: null },
};

export const priorityColors: Record<string, string> = {
  High: "text-red-400",
  Medium: "text-yellow-400",
  Low: "text-white/40",
};
export type FilterStatus = (typeof statuses)[number];

export type FilterPriority = (typeof priorities)[number];

export type SortOrder = "newest" | "oldest";

export function formatDate(dateStr: string): string {
  try {
    const d = new Date(dateStr);
    return d.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  } catch {
    return dateStr;
  }
}
