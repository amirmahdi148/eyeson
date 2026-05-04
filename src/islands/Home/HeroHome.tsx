"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CATEGORIES = [
  {
    id: "motion-design",
    title: "Motion Design",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    id: "video-editing",
    title: "Video Editing",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    id: "3d-uiux",
    title: "3D / UIUX",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    id: "brand-identity",
    title: "Brand Identity",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
];

export default function HeroHome() {
  const [activeTab, setActiveTab] = useState(CATEGORIES[1].id);
  const activeVideo = CATEGORIES.find((c) => c.id === activeTab)?.videoUrl;

  return (
    <section className="relative w-full overflow-hidden pt-20 pb-28 lg:pt-32 lg:pb-40">
      <div className="relative mx-auto flex max-w-[1300px] flex-col gap-12 px-4 sm:px-6 md:gap-16 lg:flex-row lg:items-center lg:gap-10 lg:px-8 text-center lg:text-left">
        
        {/* ========================================== */}
        {/* بخش چپ: متن‌ها و دکمه‌ها */}
        {/* ========================================== */}
        <div className="w-full flex flex-col items-center lg:items-start lg:w-[45%] xl:w-[48%]">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-extrabold leading-[1.15] tracking-tight sm:text-5xl lg:text-[3.2rem]"
          >
            <span className="block bg-gradient-to-r from-[#31d1a6] to-[#25aeb2] bg-clip-text text-transparent">
              Smart video, animation & design
            </span>
            <span className="mt-2 block text-white">
              Built to Make Brands Unmissable.
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 max-w-md mx-auto lg:mx-0 text-[15px] leading-[1.8] text-white/55 sm:text-base"
          >
            We create high-impact visuals, motion, and content systems
            that help brands grow, convert, and stand out.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 flex flex-col gap-4 w-full max-w-[320px] mx-auto lg:mx-0 sm:max-w-none sm:flex-row sm:justify-center lg:justify-start"
          >
            {/* دکمه View Our Work */}
            <div className="relative group w-full sm:w-auto">
              <div className="absolute -inset-[4px] rounded-full bg-gradient-to-r from-[#2ed1a2] to-[#1ea2a4] opacity-50 blur-[12px] transition-opacity duration-300 group-hover:opacity-80" />
              <a
                href="#work"
                className="relative flex min-h-[54px] w-full items-center justify-center rounded-full bg-gradient-to-r from-[#20a892] to-[#116b6f] px-8 py-3 text-[15px] font-bold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.2)] transition-transform duration-200 hover:scale-[1.02] sm:w-auto"
              >
                View Our Work
              </a>
            </div>

            {/* دکمه Get Pricing */}
            <div className="relative group w-full sm:w-auto mt-2 sm:mt-0">
              <div className="absolute -inset-[2px] rounded-full bg-cyan-400/30 blur-[8px] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <a
                href="#pricing"
                className="relative flex min-h-[54px] w-full items-center justify-center rounded-full border border-cyan-400/40 bg-[#040e14] px-10 py-3 text-[15px] font-bold text-white transition-colors hover:border-cyan-300/80 hover:bg-[#071822] sm:w-auto"
              >
                Get Pricing
              </a>
            </div>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 text-sm text-white/40"
          >
            Trusted by fast-growing brands & creative teams.
          </motion.p>
        </div>

        {/* ========================================== */}
        {/* بخش راست: پلیر ویدیویی و پنل‌های ادیت */}
        {/* ========================================== */}
        <div className="w-full flex justify-center lg:w-[55%] xl:w-[52%]">
          {/* برای موبایل یه پدینگ اضافه کردم تا منوی دسته‌بندی از کادر نزنه بیرون */}
          <div className="relative w-full max-w-[650px] pr-2 sm:pr-8 md:pr-12 lg:pr-16 lg:pl-0 mt-8 lg:mt-0">
            
            {/* بدنه اصلی مانیتور */}
            <div className="relative overflow-hidden rounded-[20px] border border-[#13303d] bg-[#051118] shadow-[0_0_60px_rgba(25,150,150,0.15)]">
              
              {/* هدر نرم‌افزار */}
              <div className="flex items-center justify-between border-b border-[#183945] bg-[#071823] px-3 sm:px-5 py-3">
                <div className="flex items-center gap-2 sm:gap-4 text-[#448b99]">
                  <svg className="h-3 w-3 sm:h-4 sm:w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>
                  <svg className="h-3 w-3 sm:h-4 sm:w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4z"/></svg>
                  <svg className="h-3 w-3 sm:h-4 sm:w-4 text-cyan-400" fill="currentColor" viewBox="0 0 24 24"><path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-9 9H9V9h3v3zm4 4h-8v-2h8v2z"/></svg>
                  <svg className="h-3 w-3 sm:h-4 sm:w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"/></svg>
                </div>
              </div>

              {/* کانتینر ویدیو */}
              <div className="relative aspect-[16/10] w-full bg-[#0a141a]">
                <AnimatePresence mode="wait">
                  <motion.video
                    key={activeTab}
                    src={activeVideo}
                    autoPlay
                    muted
                    loop
                    playsInline
                    initial={{ opacity: 0, scale: 1.02 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </AnimatePresence>
                <div className="absolute inset-0 bg-[#051118]/10 mix-blend-overlay pointer-events-none" />
              </div>
            </div>

            {/* ========================================== */}
            {/* منوی دسته‌بندی (سمت راست - شناور) */}
            {/* ========================================== */}
            <div className="absolute -right-2 sm:-right-4 lg:-right-8 top-1/2 z-20 w-[110px] sm:w-[130px] md:w-[150px] -translate-y-1/2">
              <div className="flex flex-col gap-2 rounded-2xl border border-[#163c4c] bg-[#05121a]/90 p-1.5 sm:p-2 shadow-[0_20px_40px_rgba(0,0,0,0.6)] backdrop-blur-xl">
                {CATEGORIES.map((cat) => {
                  const isActive = activeTab === cat.id;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => setActiveTab(cat.id)}
                      className={`group relative flex w-full items-center justify-center overflow-hidden rounded-xl px-1 sm:px-2 py-2 sm:py-3 text-[9px] sm:text-[10px] md:text-[11px] font-bold transition-all duration-300 ${
                        isActive
                          ? "border border-cyan-400/60 bg-gradient-to-b from-cyan-500/20 to-transparent text-white shadow-[0_0_15px_rgba(34,211,238,0.2)]"
                          : "border border-transparent bg-white/5 text-white/50 hover:bg-white/10 hover:text-white/80"
                      }`}
                    >
                      <span className="relative z-10 text-center leading-tight">{cat.title}</span>
                      
                      {isActive && (
                        <div className="absolute right-0.5 sm:right-1 top-0.5 sm:top-1 rounded-full bg-cyan-500 p-[1.5px] sm:p-0.5 shadow-sm">
                          <svg className="h-1.5 w-1.5 sm:h-2 sm:w-2 text-[#020b12]" fill="currentColor" viewBox="0 0 24 24"><path d="M3 17.25V21h3.75L17.81 10.47l-3.75-3.75L3 17.25z"/></svg>
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* ========================================== */}
            {/* تولبار شناور سمت چپ (فقط تبلت و دسکتاپ) */}
            {/* ========================================== */}
            <div className="absolute -left-4 sm:-left-6 top-1/3 z-20 hidden w-8 sm:w-10 flex-col gap-2 sm:gap-3 rounded-xl border border-[#163c4c] bg-[#05121a]/90 py-2 sm:py-3 shadow-xl backdrop-blur-xl md:flex">
              <div className="mx-auto h-1 w-3 sm:w-4 rounded-full bg-white/20 mb-1 sm:mb-2"></div>
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="mx-auto h-3 w-3 sm:h-4 sm:w-4 rounded bg-[#204a59] hover:bg-cyan-400/50 cursor-pointer transition-colors" />
              ))}
            </div>

            {/* ========================================== */}
            {/* پنل تایم‌لاین پایین (فقط تبلت و دسکتاپ) */}
            {/* ========================================== */}
            <div className="absolute -bottom-6 sm:-bottom-8 left-4 z-20 hidden w-[65%] rounded-2xl border border-[#163c4c] bg-[#05121a]/95 p-2 sm:p-3 shadow-2xl backdrop-blur-xl md:block">
              <div className="mb-1 sm:mb-2 flex items-center justify-between text-[8px] sm:text-[9px] font-medium text-cyan-400/60">
                <div className="flex gap-2 sm:gap-3">
                  <span>00:00</span>
                  <span>00:02</span>
                  <span>00:04</span>
                </div>
                <span>32:05</span>
              </div>
              <div className="relative mt-2 flex flex-col gap-1 sm:gap-1.5">
                <div className="h-3 sm:h-4 w-full rounded bg-[#0a202a]">
                  <div className="h-full w-2/3 rounded bg-gradient-to-r from-teal-400 to-cyan-500 opacity-90 shadow-[0_0_8px_rgba(34,211,238,0.4)]"></div>
                </div>
                <div className="h-3 sm:h-4 w-full rounded bg-[#0a202a]">
                  <div className="ml-[10%] h-full w-1/2 rounded bg-gradient-to-r from-cyan-600 to-teal-500 opacity-70"></div>
                </div>
                <div className="absolute left-[30%] top-[-6px] sm:top-[-8px] bottom-[-4px] w-[2px] bg-white shadow-[0_0_10px_white]">
                  <div className="absolute -top-1 -left-1 h-2 w-2 rounded-full bg-white"></div>
                </div>
              </div>
            </div>

            {/* ========================================== */}
            {/* پنل Color Phase پایین راست (فقط تبلت و دسکتاپ) */}
            {/* ========================================== */}
            <div className="absolute -bottom-8 sm:-bottom-12 -right-4 sm:-right-8 z-20 hidden w-[120px] sm:w-[140px] rounded-2xl border border-[#163c4c] bg-[#05121a]/95 p-2 sm:p-3 shadow-2xl backdrop-blur-xl md:block">
              <div className="mb-2 sm:mb-3 flex items-center justify-between">
                <div className="flex items-center gap-1 sm:gap-1.5 text-[9px] sm:text-[10px] text-white">
                  <div className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full border border-cyan-400"></div>
                  Color Phase
                </div>
              </div>
              <div className="flex flex-col gap-1 sm:gap-1.5 text-[8px] sm:text-[9px] text-white/50">
                <div className="flex items-center justify-between">
                  <span>Color A</span>
                  <div className="h-1.5 sm:h-2 w-3 sm:w-4 rounded-sm bg-cyan-400"></div>
                </div>
                <div className="flex items-center justify-between">
                  <span>Color B</span>
                  <div className="h-1.5 sm:h-2 w-3 sm:w-4 rounded-sm bg-cyan-600"></div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}