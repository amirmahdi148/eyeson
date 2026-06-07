import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, User, Mail, Phone, Building2, Calendar, Clock, DollarSign, Briefcase, FileText } from "lucide-react";
import { httpService } from "@/utils/httpService.ts";

export default function RequestDetail({ slug }: { slug?: string }) {
  const [requestData, setRequestData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!slug) return;
    const fetchDetail = async () => {
      try {
        setLoading(true);
        // Replace with actual endpoint to get request by slug/id
        const res = await httpService.get(`/contact/${slug}`);
        setRequestData(res);
      } catch (err: any) {
        console.error(err);
        setError(err.response?.data?.message || "Failed to load request details.");
      } finally {
        setLoading(false);
      }
    };
    fetchDetail();
  }, [slug]);

  if (loading) {
    return (
      <div className="flex h-64 items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-[#00E6D7] border-t-transparent" />
      </div>
    );
  }

  if (error || !requestData) {
    return (
      <div className="flex flex-col items-center justify-center h-64 space-y-4">
        <p className="text-red-400 font-medium">{error || "Request not found"}</p>
        <button onClick={() => window.history.back()} className="text-white hover:text-[#00E6D7] transition-colors">
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl space-y-6 pb-12 font-sans">
      {/* Header */}
      <div className="flex items-center gap-4 border-b border-white/10 pb-6">
        <button
          onClick={() => window.history.back()}
          className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-white/50 transition-colors hover:bg-white/10 hover:text-white"
        >
          <ArrowLeft size={20} />
        </button>
        <div>
          <h1 className="text-2xl font-bold text-white">Request Details</h1>
          <p className="text-sm text-white/50">Viewing information for request #{slug}</p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Client Info */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-2xl border border-white/10 bg-[#05151d]/50 p-6 backdrop-blur-xl"
        >
          <h2 className="mb-4 text-lg font-semibold text-white flex items-center gap-2">
            <User size={18} className="text-[#00E6D7]" /> Client Information
          </h2>
          <div className="space-y-4">
            <div>
              <p className="text-sm text-white/40">Full Name</p>
              <p className="text-base font-medium text-white">{requestData.firstName} {requestData.lastName}</p>
            </div>
            <div>
              <p className="text-sm text-white/40 flex items-center gap-1.5"><Mail size={14} /> Email Address</p>
              <p className="text-base font-medium text-white">{requestData.email}</p>
            </div>
            <div>
              <p className="text-sm text-white/40 flex items-center gap-1.5"><Phone size={14} /> Phone Number</p>
              <p className="text-base font-medium text-white">{requestData.phone || "N/A"}</p>
            </div>
            <div>
              <p className="text-sm text-white/40 flex items-center gap-1.5"><Building2 size={14} /> Company</p>
              <p className="text-base font-medium text-white">{requestData.companyName || "N/A"}</p>
            </div>
          </div>
        </motion.div>

        {/* Project Info */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="rounded-2xl border border-white/10 bg-[#05151d]/50 p-6 backdrop-blur-xl"
        >
          <h2 className="mb-4 text-lg font-semibold text-white flex items-center gap-2">
            <Briefcase size={18} className="text-[#00E6D7]" /> Project Details
          </h2>
          <div className="space-y-4">
            <div>
              <p className="text-sm text-white/40">Project Type</p>
              <span className="mt-1 inline-flex rounded-full border border-[#00E6D7]/30 bg-[#00E6D7]/10 px-3 py-1 text-sm font-medium text-[#00E6D7]">
                {requestData.projectType}
              </span>
            </div>
            <div>
              <p className="text-sm text-white/40 flex items-center gap-1.5"><DollarSign size={14} /> Budget</p>
              <p className="text-base font-medium text-emerald-400">{requestData.budget}</p>
            </div>
            <div>
              <p className="text-sm text-white/40 flex items-center gap-1.5"><Calendar size={14} /> Requested Date</p>
              <p className="text-base font-medium text-white">{requestData.date}</p>
            </div>
            <div>
              <p className="text-sm text-white/40 flex items-center gap-1.5"><Clock size={14} /> Time & Duration</p>
              <p className="text-base font-medium text-white">{requestData.time} ({requestData.duration})</p>
            </div>
          </div>
        </motion.div>

        {/* Description / Extra */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="md:col-span-2 rounded-2xl border border-white/10 bg-[#05151d]/50 p-6 backdrop-blur-xl"
        >
          <h2 className="mb-4 text-lg font-semibold text-white flex items-center gap-2">
            <FileText size={18} className="text-[#00E6D7]" /> Project Description
          </h2>
          <div className="rounded-xl bg-black/20 p-4">
            <p className="text-sm leading-relaxed text-white/80 whitespace-pre-wrap">
              {requestData.projectDetails || "No additional details provided."}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
