import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Upload, Plus, AlertCircle, CheckCircle2, Image as ImageIcon, FileVideo } from "lucide-react";
import { httpService } from "@/utils/httpService.ts";

const TYPE_CATEGORIES: Record<string, string[]> = {
  "Video types": ["Social media", "Training video", "Corporate video", "Product video", "Sizzle reel", "Explainer video"],
  "Animation Style": ["2D Animation", "3D Animation", "Lottie Animation", "UI Animation"],
  "Industries": ["SaaS Healthcare", "Ecommerce", "Finance"]
};

export default function PortfoliosManager() {
  const [type, setType] = useState("");
  const [category, setCategory] = useState("");

  const handleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setType(e.target.value);
    setCategory("");
  };
  const [file, setFile] = useState<File | null>(null);
  const [cover, setCover] = useState<File | null>(null);
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: 'idle' | 'success' | 'error', message: string }>({ type: 'idle', message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!type || !category || !file || !cover) {
      setStatus({ type: 'error', message: 'All fields are required.' });
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: 'idle', message: '' });

    try {
      const formData = new FormData();
      formData.append('type', type);
      formData.append('category', category);
      formData.append('file', file);
      formData.append('cover', cover);

      // using httpService to post formData. Note: httpService needs to pass the config for headers.
      await httpService.post('/portfolio/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setStatus({ type: 'success', message: 'Portfolio uploaded successfully!' });
      
      // Reset form
      setType("");
      setCategory("");
      setFile(null);
      setCover(null);
      
      // Clear file inputs
      const fileInput = document.getElementById('file-upload') as HTMLInputElement;
      if (fileInput) fileInput.value = '';
      const coverInput = document.getElementById('cover-upload') as HTMLInputElement;
      if (coverInput) coverInput.value = '';
      
    } catch (err: any) {
      console.error(err);
      setStatus({ type: 'error', message: err.response?.data?.message || 'Failed to upload portfolio. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold text-white">Add Portfolio</h2>
        <p className="text-sm text-white/50 mt-1">Upload a new portfolio item to showcase your work.</p>
      </div>

      {/* Status Messages */}
      <AnimatePresence mode="wait">
        {status.type !== 'idle' && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className={`p-4 rounded-xl flex items-center gap-3 border ${
              status.type === 'success' 
                ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400' 
                : 'bg-red-500/10 border-red-500/20 text-red-400'
            }`}
          >
            {status.type === 'success' ? <CheckCircle2 size={20} /> : <AlertCircle size={20} />}
            <p className="text-sm font-medium">{status.message}</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Form */}
      <form onSubmit={handleSubmit} className="bg-white/[0.03] backdrop-blur-xl border border-white/5 rounded-2xl p-6 sm:p-8 space-y-6">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Type Input */}
          <div>
            <label className="block text-sm font-medium text-white/70 mb-2">Type</label>
            <select
              value={type}
              onChange={handleTypeChange}
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-[#00E6D7]/30 focus:border-[#00E6D7]/30 transition-all appearance-none cursor-pointer"
            >
              <option value="" disabled className="bg-[#021617] text-white/50">Select a type</option>
              {Object.keys(TYPE_CATEGORIES).map((t) => (
                <option key={t} value={t} className="bg-[#021617] text-white">{t}</option>
              ))}
            </select>
          </div>

          {/* Category Input */}
          <div>
            <label className="block text-sm font-medium text-white/70 mb-2">Category</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              disabled={!type}
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-[#00E6D7]/30 focus:border-[#00E6D7]/30 transition-all appearance-none cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <option value="" disabled className="bg-[#021617] text-white/50">Select a category</option>
              {type && TYPE_CATEGORIES[type]?.map((c) => (
                <option key={c} value={c} className="bg-[#021617] text-white">{c}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Cover Input */}
          <div>
            <label className="block text-sm font-medium text-white/70 mb-2">Cover Image</label>
            <label className="group relative flex flex-col items-center justify-center w-full h-48 border-2 border-dashed border-white/10 rounded-xl hover:border-[#00E6D7]/50 hover:bg-[#00E6D7]/5 transition-all cursor-pointer overflow-hidden">
              <input
                id="cover-upload"
                type="file"
                accept="image/*"
                onChange={(e) => setCover(e.target.files?.[0] || null)}
                className="hidden"
              />
              {cover ? (
                <div className="absolute inset-0 w-full h-full">
                  <img src={URL.createObjectURL(cover)} alt="Cover preview" className="w-full h-full object-cover opacity-60" />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-white text-sm font-medium flex items-center gap-2"><Upload size={16} /> Change Cover</span>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center gap-2 text-white/40 group-hover:text-[#00E6D7] transition-colors">
                  <ImageIcon size={32} />
                  <span className="text-sm font-medium">Click to upload cover</span>
                </div>
              )}
            </label>
          </div>

          {/* File Input */}
          <div>
            <label className="block text-sm font-medium text-white/70 mb-2">Media File</label>
            <label className="group relative flex flex-col items-center justify-center w-full h-48 border-2 border-dashed border-white/10 rounded-xl hover:border-[#00E6D7]/50 hover:bg-[#00E6D7]/5 transition-all cursor-pointer overflow-hidden">
              <input
                id="file-upload"
                type="file"
                accept="video/*,image/*"
                onChange={(e) => setFile(e.target.files?.[0] || null)}
                className="hidden"
              />
              {file ? (
                <div className="absolute inset-0 w-full h-full flex flex-col items-center justify-center bg-white/5">
                  <FileVideo size={48} className="text-[#00E6D7] mb-2" />
                  <span className="text-sm font-medium text-white truncate px-4 w-full text-center">{file.name}</span>
                  <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-white text-sm font-medium flex items-center gap-2"><Upload size={16} /> Change File</span>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center gap-2 text-white/40 group-hover:text-[#00E6D7] transition-colors">
                  <Upload size={32} />
                  <span className="text-sm font-medium">Click to upload file</span>
                </div>
              )}
            </label>
          </div>
        </div>

        {/* Submit Button */}
        <div className="pt-4 border-t border-white/5 flex justify-end">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={isSubmitting}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#00E6D7] to-[#12ACB5] text-black font-medium text-sm hover:opacity-90 transition-opacity disabled:opacity-50 cursor-pointer"
          >
            {isSubmitting ? (
              <>
                <div className="w-4 h-4 border-2 border-black/20 border-t-black rounded-full animate-spin" />
                Uploading...
              </>
            ) : (
              <>
                <Plus size={18} />
                Add Portfolio
              </>
            )}
          </motion.button>
        </div>

      </form>
    </div>
  );
}
