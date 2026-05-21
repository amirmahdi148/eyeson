import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard,
  FolderOpen,
  Mail,
  Settings,
  Menu,
  X,
  ChevronRight,
  LogOut,
  User
} from "lucide-react";

const navItems = [
  { href: "/admin", icon: LayoutDashboard, label: "Dashboard" },
  { href: "/admin/projects", icon: FolderOpen, label: "Projects" },
  { href: "/admin/requests", icon: Mail, label: "Requests" },
  { href: "/admin/case", icon: LayoutDashboard, label: "Case Editor" },
  { href: "/admin/settings", icon: Settings, label: "Settings" },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState(() => {
    if (typeof window !== "undefined") return window.location.pathname;
    return "/admin";
  });

  const isActive = (href: string) => {
    if (href === "/admin") return currentPath === "/admin" || currentPath === "/admin/";
    return currentPath.startsWith(href);
  };

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    window.location.href = "/";
  };

  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top_right,#062428,#001219)] text-white flex flex-col lg:flex-row overflow-hidden">
      {/* Mobile overlay */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.aside
        animate={{ x: sidebarOpen || typeof window !== "undefined" && window.innerWidth >= 1024 ? 0 : -256 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="fixed lg:relative top-0 left-0 h-screen lg:h-auto z-50 lg:z-auto flex flex-col w-64 bg-[#021617]/95 lg:bg-[#021617]/60 backdrop-blur-xl border-r border-white/5 shrink-0"
      >
        {/* Logo */}
        <div className="flex items-center justify-between p-5 border-b border-white/5">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#00E6D7] to-[#12ACB5] flex items-center justify-center">
              <span className="text-black font-bold text-sm">E</span>
            </div>
            <span className="font-bold text-lg tracking-tight">EyesON</span>
          </div>
          <motion.button
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden text-white/60 hover:text-white transition-colors cursor-pointer"
          >
            <X size={20} />
          </motion.button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          {navItems.map((item) => {
            const active = isActive(item.href);
            return (
              <motion.a
                key={item.href}
                href={item.href}
                whileHover={{ x: 4, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 cursor-pointer ${
                  active
                    ? "bg-gradient-to-r from-[#00E6D7]/15 to-[#12ACB5]/10 text-[#00E6D7] border border-[#00E6D7]/20 shadow-lg shadow-[#00E6D7]/5"
                    : "text-white/60 hover:text-white hover:bg-white/5 border border-transparent"
                }`}
                onClick={() => setSidebarOpen(false)}
              >
                <item.icon size={18} />
                <span>{item.label}</span>
                {active && <ChevronRight size={14} className="ml-auto opacity-60" />}
              </motion.a>
            );
          })}
        </nav>

        {/* User section */}
        <div className="p-4 border-t border-white/5">
          <div className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-white/5 border border-white/5">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#00E6D7]/30 to-[#12ACB5]/30 flex items-center justify-center">
              <User size={14} />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-medium truncate">Admin</div>
              <div className="text-xs text-white/40 truncate">admin@eyeson.io</div>
            </div>
            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={handleLogout} className="text-white/40 hover:text-red-400 transition-colors cursor-pointer" title="Logout">
              <LogOut size={16} />
            </motion.button>
          </div>
        </div>
      </motion.aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Top bar */}
        <header className="sticky top-0 z-30 flex items-center gap-4 px-4 sm:px-6 lg:px-8 py-4 bg-[#021617]/60 backdrop-blur-xl border-b border-white/5">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden text-white/60 hover:text-white transition-colors p-1 cursor-pointer"
          >
            <Menu size={22} />
          </motion.button>
          <div className="flex-1 min-w-0">
            <h1 className="text-lg sm:text-xl font-bold truncate">
              {navItems.find((item) => isActive(item.href))?.label || "Admin"}
            </h1>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}