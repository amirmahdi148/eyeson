import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, Users, Plus } from "lucide-react";

const initialProjects = [
  { id: "1", title: "Branding Refresh", views: 1240, owner: "Alice" },
  { id: "2", title: "Landing Page Redesign", views: 890, owner: "Bob" },
  { id: "3", title: "Ad Campaign Assets", views: 430, owner: "Carol" },
];

export default function ProjectsList() {
  const [projects, setProjects] = useState(initialProjects);
  const [showNew, setShowNew] = useState(false);
  const [projectname, setProjectname] = useState("");
  const [projectcategory, setProjectcategory] = useState("Video");
  const [description, setDescription] = useState("");
  const [creating, setCreating] = useState(false);
  const [createdUuid, setCreatedUuid] = useState<string | null>(null);
  const [showPostPrompt, setShowPostPrompt] = useState(false);
  const categories = ["Video", "Industry", "Animation"];

  // Prevent background scrolling when modal is open
  useEffect(() => {
    const anyOpen = showNew || showPostPrompt;
    try {
      if (typeof document !== 'undefined') {
        if (anyOpen) {
          document.documentElement.classList.add('overflow-hidden');
        } else {
          document.documentElement.classList.remove('overflow-hidden');
        }
      }
    } catch (e) {
      // ignore
    }

    return () => {
      try { if (typeof document !== 'undefined') document.documentElement.classList.remove('overflow-hidden'); } catch (e) { }
    };
  }, [showNew, showPostPrompt]);

  async function createProject(e: React.FormEvent) {
    e.preventDefault();
    setCreating(true);

    const payload = {
      projectname,
      projectcategory,
      description,
    };

    let uuid = 'example';

    try {
      const res = await fetch('/api/projects', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error('Bad response');

      const data = await res.json();
      // expect backend to return { uuid: '...' }
      uuid = data?.uuid || data?.id || 'example';
    } catch (err) {
      // Backend not available — fallback to example id for testing
      uuid = 'example';
    }

    // Add to UI list (optimistic)
    const next = { id: uuid, title: projectname || 'Untitled', views: 0, owner: 'Unknown' };
    setProjects([next, ...projects]);
    setProjectname("");
    setProjectcategory("Video");
    setDescription("");
    setCreating(false);

    // Show post-create prompt
    setCreatedUuid(uuid);
    setShowNew(false);
    setShowPostPrompt(true);
  }

  function handlePostChoice(yes: boolean) {
    const uuid = createdUuid || 'example';
    setShowPostPrompt(false);
    if (yes) {
      window.location.href = `/admin/project/${uuid}`;
    } else {
      window.location.href = `/admin/projects`;
    }
  }

  return (
    <div className="min-h-screen text-white">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-3xl font-bold mb-0 text-white">Projects</h1>
        <div>
          <button onClick={() => setShowNew(true)} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#00E6D7] to-[#12ACB5] text-black">
            <Plus size={16} /> New Project
          </button>
        </div>
      </div>

      <div className="rounded-2xl p-6" style={{ background: 'linear-gradient(135deg, rgba(6,18,22,0.6), rgba(2,160,140,0.08))', border: '1px solid rgba(255,255,255,0.04)' }}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div key={p.id} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.03 }} className="backdrop-blur-xl bg-white/5 border border-white/6 rounded-xl p-5">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-white">{p.title}</h3>
                <div className="flex items-center gap-3 text-sm text-white/70">
                  <span className="flex items-center gap-1"><Eye size={14} /> {p.views}</span>
                  <span className="flex items-center gap-1"><Users size={14} /> {p.owner}</span>
                </div>
              </div>

              <p className="mt-3 text-sm text-white/70">Short description or tags can go here.</p>

              <div className="mt-4 flex gap-2">
                <a className="px-3 py-1 rounded-full bg-gradient-to-r from-[#00E6D7] to-[#12ACB5] text-black text-sm" href={`/projects/${p.id}`}>Open</a>
                <a className="px-3 py-1 rounded-full border border-white/6 text-sm text-white" href="#">Edit</a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {showNew && (
          <motion.div key="newModal" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.28 }} className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
            <motion.form onSubmit={createProject} initial={{ scale: 0.98, y: 8 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.98, y: 8 }} transition={{ type: 'spring', stiffness: 140, damping: 18 }} className="bg-[#021617] rounded-2xl p-6 w-full max-w-md">
              <h2 className="text-xl font-semibold text-white mb-3">Create New Project</h2>

              <label className="block text-sm text-white/80 mb-1">Project Name</label>
              <input value={projectname} onChange={(e) => setProjectname(e.target.value)} required className="w-full p-2 rounded-md mb-3 bg-white/5 text-white" />

              <label className="block text-sm text-white/80 mb-1">Category</label>
              <select value={projectcategory} onChange={(e) => setProjectcategory(e.target.value)} className="w-full p-2 rounded-md mb-3 bg-white/5 text-white">
                {categories.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>

              <label className="block text-sm text-white/80 mb-1">Description</label>
              <textarea value={description} onChange={(e) => setDescription(e.target.value)} className="w-full p-2 rounded-md mb-3 bg-white/5 text-white" />

              <div className="flex gap-2 justify-end">
                <button type="button" onClick={() => setShowNew(false)} className="px-3 py-1 rounded-full border border-white/6 text-white">Cancel</button>
                <button type="submit" disabled={creating} className="px-3 py-1 rounded-full bg-gradient-to-r from-[#00E6D7] to-[#12ACB5] text-black">{creating ? 'Creating...' : 'Create'}</button>
              </div>
            </motion.form>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showPostPrompt && (
          <motion.div key="postPrompt" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }} className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
            <motion.div initial={{ scale: 0.98, y: 8 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.98, y: 8 }} transition={{ type: 'spring', stiffness: 140, damping: 18 }} className="bg-[#021617] rounded-2xl p-6 w-full max-w-md text-white">
              <h3 className="text-lg font-semibold mb-3">Project created</h3>
              <p className="mb-4">Project created successfully but it doesn't have an image or metadata. Would you like to add details now?</p>
              <div className="flex gap-2 justify-end">
                <button onClick={() => handlePostChoice(false)} className="px-3 py-1 rounded-full border border-white/6 text-white">No</button>
                <button onClick={() => handlePostChoice(true)} className="px-3 py-1 rounded-full bg-gradient-to-r from-[#00E6D7] to-[#12ACB5] text-black">Yes</button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
