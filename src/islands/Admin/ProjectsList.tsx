import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, Users, Plus, Search, Grid3X3, List, ArrowUpRight } from "lucide-react";

const initialProjects = [
  { id: "1", title: "Branding Refresh", views: 1240, owner: "Alice", status: "Active", updated: "2 days ago" },
  { id: "2", title: "Landing Page Redesign", views: 890, owner: "Bob", status: "Active", updated: "5 days ago" },
  { id: "3", title: "Ad Campaign Assets", views: 430, owner: "Carol", status: "Draft", updated: "1 week ago" },
  { id: "4", title: "Social Media Kit", views: 2100, owner: "David", status: "Active", updated: "3 days ago" },
  { id: "5", title: "Product Demo Video", views: 560, owner: "Eve", status: "Review", updated: "1 day ago" },
  { id: "6", title: "Email Templates", views: 340, owner: "Frank", status: "Draft", updated: "2 weeks ago" },
];

const statusColors: Record<string, string> = {
  Active: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
  Draft: "bg-white/10 text-white/50 border-white/10",
  Review: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
};

export default function ProjectsList() {
  const [projects, setProjects] = useState(initialProjects);
  const [showNew, setShowNew] = useState(false);
  const [projectname, setProjectname] = useState("");
  const [projectcategory, setProjectcategory] = useState("Video");
  const [description, setDescription] = useState("");
  const [creating, setCreating] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const categories = ["Video", "Industry", "Animation", "Design"];

  const filteredProjects = projects.filter((p) =>
    p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.owner.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    const anyOpen = showNew;
    try {
      if (typeof document !== "undefined") {
        document.documentElement.classList.toggle("overflow-hidden", anyOpen);
      }
    } catch (e) {}
    return () => {
      try {
        if (typeof document !== "undefined") document.documentElement.classList.remove("overflow-hidden");
      } catch (e) {}
    };
  }, [showNew]);

  async function createProject(e: React.FormEvent) {
    e.preventDefault();
    setCreating(true);
    await new Promise((r) => setTimeout(r, 800));
    const newProject = {
      id: String(Date.now()),
      title: projectname || "Untitled Project",
      views: 0,
      owner: "You",
      status: "Draft",
      updated: "Just now",
    };
    setProjects([newProject, ...projects]);
    setProjectname("");
    setProjectcategory("Video");
    setDescription("");
    setCreating(false);
    setShowNew(false);
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-white">Projects</h2>
          <p className="text-sm text-white/50 mt-0.5">{projects.length} total projects</p>
        </div>
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => setShowNew(true)}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#00E6D7] to-[#12ACB5] text-black font-medium text-sm hover:opacity-90 transition-opacity shrink-0 cursor-pointer"
        >
          <Plus size={16} />
          New Project
        </motion.button>
      </div>

      {/* Toolbar */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/30" />
          <input
            type="text"
            placeholder="Search projects..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-[#00E6D7]/30 focus:border-[#00E6D7]/30 transition-all"
          />
        </div>
        <div className="flex gap-2">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setViewMode("grid")}
            className={`p-2.5 rounded-xl border transition-all cursor-pointer ${viewMode === "grid" ? "bg-[#00E6D7]/15 border-[#00E6D7]/30 text-[#00E6D7]" : "bg-white/5 border-white/10 text-white/40 hover:text-white/60"}`}
          >
            <Grid3X3 size={16} />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setViewMode("list")}
            className={`p-2.5 rounded-xl border transition-all cursor-pointer ${viewMode === "list" ? "bg-[#00E6D7]/15 border-[#00E6D7]/30 text-[#00E6D7]" : "bg-white/5 border-white/10 text-white/40 hover:text-white/60"}`}
          >
            <List size={16} />
          </motion.button>
        </div>
      </div>

      {/* Projects Grid/List */}
      {viewMode === "grid" ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((p, i) => (
              <motion.div
                key={p.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ delay: i * 0.03 }}
                className="group rounded-2xl border border-white/5 bg-white/[0.03] backdrop-blur-xl p-5 hover:border-white/10 transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00E6D7]/20 to-[#12ACB5]/10 flex items-center justify-center">
                    <span className="text-sm font-bold text-[#00E6D7]">{p.title.charAt(0)}</span>
                  </div>
                  <span className={`px-2.5 py-1 rounded-full text-xs font-medium border ${statusColors[p.status] || "bg-white/10 text-white/50 border-white/10"}`}>
                    {p.status}
                  </span>
                </div>
                <h3 className="font-semibold text-white mb-1 group-hover:text-[#00E6D7] transition-colors">{p.title}</h3>
                <p className="text-sm text-white/40 mb-4">Updated {p.updated}</p>
                <div className="flex items-center justify-between pt-4 border-t border-white/5">
                  <div className="flex items-center gap-4 text-sm text-white/50">
                    <span className="flex items-center gap-1.5"><Eye size={14} /> {p.views.toLocaleString()}</span>
                    <span className="flex items-center gap-1.5"><Users size={14} /> {p.owner}</span>
                  </div>
                  <a
                    href={`/admin/project/${p.id}`}
                    className="flex items-center gap-1 text-sm text-[#00E6D7] hover:text-[#00E6D7]/80 transition-colors cursor-pointer"
                  >
                    Open <ArrowUpRight size={14} />
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      ) : (
        <div className="rounded-2xl border border-white/5 bg-white/[0.03] backdrop-blur-xl divide-y divide-white/5">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((p, i) => (
              <motion.div
                key={p.id}
                layout
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -8 }}
                transition={{ delay: i * 0.03 }}
                className="flex items-center justify-between p-4 hover:bg-white/[0.02] transition-colors"
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
                  <span className={`hidden sm:inline-flex px-2.5 py-1 rounded-full text-xs font-medium border ${statusColors[p.status] || "bg-white/10 text-white/50 border-white/10"}`}>
                    {p.status}
                  </span>
                  <div className="hidden md:flex items-center gap-1.5 text-sm text-white/50">
                    <Eye size={14} />
                    <span>{p.views.toLocaleString()}</span>
                  </div>
                  <a
                    href={`/admin/project/${p.id}`}
                    className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-[#00E6D7] to-[#12ACB5] text-black text-sm font-medium hover:opacity-90 transition-opacity cursor-pointer"
                  >
                    Open
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      )}

      {/* Create Project Modal */}
      <AnimatePresence>
        {showNew && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => !creating && setShowNew(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="w-full max-w-md rounded-2xl border border-white/10 bg-[#021617] p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-lg font-semibold text-white mb-1">Create New Project</h3>
              <p className="text-sm text-white/50 mb-5">Fill in the details to create a new project.</p>

              <form onSubmit={createProject} className="space-y-4">
                <div>
                  <label className="block text-sm text-white/70 mb-1.5">Project Name</label>
                  <input
                    value={projectname}
                    onChange={(e) => setProjectname(e.target.value)}
                    required
                    placeholder="Enter project name"
                    className="w-full px-3 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-[#00E6D7]/30 focus:border-[#00E6D7]/30 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm text-white/70 mb-1.5">Category</label>
                  <select
                    value={projectcategory}
                    onChange={(e) => setProjectcategory(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#00E6D7]/30 focus:border-[#00E6D7]/30 transition-all appearance-none cursor-pointer"
                  >
                    {categories.map((c) => (
                      <option key={c} value={c} className="bg-[#021617]">{c}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm text-white/70 mb-1.5">Description</label>
                  <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Brief description..."
                    rows={3}
                    className="w-full px-3 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-[#00E6D7]/30 focus:border-[#00E6D7]/30 transition-all resize-none cursor-text"
                  />
                </div>

                <div className="flex gap-3 pt-2">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="button"
                    onClick={() => setShowNew(false)}
                    disabled={creating}
                    className="flex-1 px-4 py-2.5 rounded-xl border border-white/10 text-white/70 text-sm font-medium hover:bg-white/5 transition-colors disabled:opacity-50 cursor-pointer"
                  >
                    Cancel
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={creating}
                    className="flex-1 px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#00E6D7] to-[#12ACB5] text-black text-sm font-medium hover:opacity-90 transition-opacity disabled:opacity-50 cursor-pointer"
                  >
                    {creating ? "Creating..." : "Create Project"}
                  </motion.button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}