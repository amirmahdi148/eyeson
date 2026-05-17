"use client";

import React, { useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useReducedMotion,
  type Variants,
} from "framer-motion";
import { SmartImage } from "@/utils/SmartImage.tsx";
import SecondaryButton from "@/components/Shared/SecondaryButton";
import PrimaryButton from "@/components/Shared/PrimaryButton";

const items = [
  { src: "/home/Hero/clients/1.webp" },
  { src: "/home/Hero/clients/2.webp" },
  { src: "/home/Hero/clients/3.webp" },
  { src: "/home/Hero/clients/4.webp" },
];

const CATEGORIES = [
  {
    id: "motion-design",
    title: "Motion Design",
    videoUrl: "/home/mov_bbb.webm",
  },
  {
    id: "video-editing",
    title: "Video Editing",
    videoUrl: "/home/mov_bbb.webm",
  },
  {
    id: "3d-uiux",
    title: "3D / UIUX",
    videoUrl: "/home/mov_bbb.webm",
  },
  {
    id: "brand-identity",
    title: "Brand Identity",
    videoUrl: "/home/mov_bbb.webm",
  },
];

export default function HeroHome() {
  const [activeTab, setActiveTab] = useState(CATEGORIES[1].id);

  // تشخیص تنظیمات کاهش انیمیشن در سیستم کاربر
  const shouldReduceMotion = useReducedMotion();
  const activeVideo = CATEGORIES.find((c) => c.id === activeTab)?.videoUrl;

  const videoRef = useRef<HTMLVideoElement | null>(null);

  // بهینه‌سازی طلایی: استفاده از Ref به جای State برای آپدیت نوار زمان (حذف کامل لگ در موبایل)
  const progressRef = useRef<HTMLDivElement | null>(null);

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    const progressBar = progressRef.current;
    if (!video || !video.duration || !progressBar) return;

    // آپدیت مستقیم استایل بدون رندر مجدد کامپوننت ری‌اکت
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.left = `${percent}%`;
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    // فضای خالی بالای موبایل (pt-40) رو به pt-24 کاهش دادیم
    <section className="relative w-full overflow-hidden pt-24 pb-20 lg:pt-32 lg:pb-40">
      <div className="relative mx-auto flex max-w-[1300px] flex-col items-center gap-10 px-4 sm:px-6 lg:flex-row lg:items-center lg:gap-10 lg:px-8">
        {/* ========================================== */}
        {/* بخش چپ: متن‌ها و دکمه‌ها (در موبایل پایین) */}
        {/* ========================================== */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="order-2 lg:order-1 w-full lg:w-[45%] xl:w-[48%] flex flex-col justify-center items-center lg:items-start text-center lg:text-start"
        >
          <motion.h1
            variants={itemVariants}
            className="text-2xl font-extrabold leading-[1.15] tracking-tight sm:text-3xl lg:text-[2.2rem]"
          >
            <span className="block bg-gradient-to-r from-[#31d1a6] to-[#25aeb2] bg-clip-text text-transparent pb-1">
              Smart video, animation & design
            </span>
            <span className="mt-2 block text-white drop-shadow-md">
              Built to Make Brands Unmissable.
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-5 max-w-md text-[14px] leading-[1.7] text-white/60 sm:text-[15px] lg:text-base font-light"
          >
            We create high-impact visuals, motion, and content systems that help
            brands grow, convert, and stand out.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mt-8 flex flex-row gap-3 w-full justify-center lg:justify-start"
          >
            <PrimaryButton text="Get Started" width="auto" />
            <SecondaryButton text="Get Pricing" width="auto" />
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="mt-6 text-xs text-white/40 uppercase tracking-wider font-medium"
          >
            Trusted by fast-growing brands & creative teams.
          </motion.p>
        </motion.div>

        {/* ========================================== */}
        {/* بخش راست: پلیر ویدیویی و پنل‌های ادیت (در موبایل بالا) */}
        {/* ========================================== */}
        <motion.div
          initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="order-1 lg:order-2 w-full lg:w-[55%] xl:w-[52%]"
        >
          {/* مارجین باتم دادیم که تایم‌لاین پایینی رو نوشته‌ها نیفته */}
          <div className="relative mx-auto w-full max-w-[650px] mb-12 lg:mb-0 pt-4 lg:pt-0 lg:pr-16 xl:pr-0">
            {/* بدنه اصلی مانیتور - سبک‌سازی سایه‌ها برای موبایل */}
            <div className="relative overflow-hidden rounded-xl md:rounded-[20px] border border-[#13303d] bg-[#051118] shadow-[0_0_30px_rgba(25,150,150,0.1)] lg:shadow-[0_0_60px_rgba(25,150,150,0.15)] transition-shadow duration-500 hover:shadow-[0_0_50px_rgba(25,150,150,0.2)] lg:hover:shadow-[0_0_80px_rgba(25,150,150,0.3)]">
              {/* هدر نرم‌افزار */}
              <div className="flex items-center justify-between border-b border-[#183945] bg-[#071823] px-3 py-2 md:px-5 md:py-3">
                <div className="flex items-center gap-2.5 md:gap-4 text-[#448b99]">
                  <svg
                    className="h-3.5 w-3.5 md:h-4 md:w-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                  </svg>
                  <svg
                    className="h-3.5 w-3.5 md:h-4 md:w-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4z" />
                  </svg>
                  <svg
                    className="h-3.5 w-3.5 md:h-4 md:w-4 text-cyan-400"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-9 9H9V9h3v3zm4 4h-8v-2h8v2z" />
                  </svg>
                  <svg
                    className="h-3.5 w-3.5 md:h-4 md:w-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z" />
                  </svg>
                  <svg
                    className="h-3.5 w-3.5 md:h-4 md:w-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M3 17.25V21h3.75L17.81 10.47l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
                  </svg>
                </div>
              </div>

              {/* کانتینر ویدیو */}
              <div className="relative aspect-[16/10] w-full bg-[#0a141a]">
                <AnimatePresence mode="wait">
                  <motion.video
                    key={activeTab}
                    ref={videoRef}
                    src={activeVideo}
                    autoPlay
                    muted
                    loop
                    playsInline
                    onTimeUpdate={handleTimeUpdate}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </AnimatePresence>
                <div className="absolute inset-0 bg-[#051118]/10 mix-blend-overlay pointer-events-none" />
              </div>
            </div>

            {/* ========================================== */}
            {/* منوی دسته‌بندی (سمت راست - شناور) */}
            {/* ========================================== */}
            <div className="absolute -right-2 md:-right-8 lg:-right-4 xl:-right-16 top-1/2 z-20 w-[110px] md:w-[150px] -translate-y-1/2">
              <div className="flex flex-col gap-1.5 md:gap-2.5 rounded-xl md:rounded-2xl border border-[#163c4c] bg-[#05121a]/95 p-1.5 md:p-2 shadow-xl backdrop-blur-md lg:backdrop-blur-xl">
                {CATEGORIES.map((cat) => {
                  const isActive = activeTab === cat.id;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => setActiveTab(cat.id)}
                      className={`group relative flex w-full items-center justify-center overflow-hidden rounded-lg md:rounded-xl px-2 py-2 md:px-3 md:py-3 text-[10px] font-bold transition-all duration-300 md:text-xs ${
                        isActive
                          ? "border border-cyan-400/60 text-white shadow-[0_0_15px_rgba(34,211,238,0.2)]"
                          : "border border-transparent bg-white/5 text-white/50 hover:bg-white/10 hover:text-white/80"
                      }`}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="activeTabBg"
                          className="absolute inset-0 bg-gradient-to-b from-cyan-500/20 to-transparent"
                          transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 25,
                          }}
                        />
                      )}
                      <span className="relative z-10">{cat.title}</span>
                      {isActive && (
                        <div className="absolute right-1 top-1 hidden md:block rounded-full bg-cyan-500 p-0.5 shadow-sm z-10">
                          <svg
                            className="h-2 w-2 text-[#020b12]"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="4"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M4.5 12.75l6 6 9-13.5"
                            />
                          </svg>
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* ========================================== */}
            {/* تولبار شناور سمت چپ (فقط در دسکتاپ/تبلت بزرگ) */}
            {/* ========================================== */}
            <motion.div
              animate={shouldReduceMotion ? {} : { y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-6 top-1/3 z-20 hidden md:flex w-10 flex-col gap-3 rounded-xl border border-[#163c4c] bg-[#05121a]/90 py-3 shadow-xl backdrop-blur-xl"
            >
              <div className="mx-auto h-1 w-4 rounded-full bg-white/20 mb-2"></div>
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="mx-auto h-4 w-4 rounded bg-[#204a59] hover:bg-cyan-400/50 cursor-pointer transition-colors"
                />
              ))}
            </motion.div>

            {/* ========================================== */}
            {/* پنل تایم‌لاین پایین (در موبایل کاملاً وسط‌چین شده) */}
            {/* ========================================== */}
            <motion.div
              animate={shouldReduceMotion ? {} : { y: [0, 4, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute -bottom-6 md:-bottom-8 left-1/2 -translate-x-1/2 md:translate-x-0 md:left-4 z-20 w-[85%] md:w-[65%] rounded-xl md:rounded-2xl border border-[#163c4c] bg-[#05121a]/95 p-2.5 md:p-3 shadow-xl backdrop-blur-md lg:backdrop-blur-xl"
            >
              <div className="mb-1.5 md:mb-2 flex items-center justify-between text-[8px] md:text-[9px] font-medium text-cyan-400/60">
                <div className="flex gap-2 md:gap-3">
                  <span>00:00</span>
                  <span>00:02</span>
                  <span>00:04</span>
                  <span className="hidden sm:inline">10:06</span>
                </div>
                <span>32:05</span>
              </div>
              <div className="relative mt-1 md:mt-2 flex flex-col gap-1 md:gap-1.5">
                <div className="h-3 md:h-4 w-full rounded bg-[#0a202a]">
                  <div className="h-full w-2/3 rounded bg-gradient-to-r from-teal-400 to-cyan-500 opacity-90 shadow-[0_0_8px_rgba(34,211,238,0.4)]"></div>
                </div>
                <div className="h-3 md:h-4 w-full rounded bg-[#0a202a]">
                  <div className="ml-[10%] h-full w-1/2 rounded bg-gradient-to-r from-cyan-600 to-teal-500 opacity-70"></div>
                </div>
                {/* دستکاری مستقیم توسط Ref برای حذف لگ */}
                <div
                  ref={progressRef}
                  className="absolute top-[-6px] bottom-[-2px] md:top-[-8px] md:bottom-[-4px] w-[2px] bg-white shadow-[0_0_8px_white] will-change-transform"
                  style={{ left: "0%", transform: "translateX(-50%)" }}
                ></div>
              </div>
            </motion.div>

            {/* ========================================== */}
            {/* پنل Color Phase پایین راست (مخفی در موبایل برای خلوت شدن) */}
            {/* ========================================== */}
            <motion.div
              animate={shouldReduceMotion ? {} : { y: [0, -6, 0] }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
              className="absolute -bottom-12 -right-8 z-20 hidden md:block w-[140px] rounded-2xl border border-[#163c4c] bg-[#05121a]/95 p-3 shadow-2xl backdrop-blur-xl max-[1250px]:hidden!"
            >
              <div className="mb-3 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-[10px] text-white">
                  <div className="h-2 w-2 rounded-full border border-cyan-400"></div>
                  Color Phase
                </div>
                <div className="text-[10px] text-cyan-400/80">0x+0,0</div>
              </div>
              <div className="mb-3 flex justify-end">
                <div className="flex h-8 w-8 items-center justify-center rounded-full border border-teal-400 bg-teal-400/10 text-teal-400 shadow-[0_0_12px_rgba(45,212,191,0.3)]">
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
              </div>
              <div className="flex flex-col gap-1.5 text-[9px] text-white/50">
                <div className="flex items-center justify-between">
                  <span>Color A</span>
                  <div className="h-2 w-4 rounded-sm bg-cyan-400"></div>
                </div>
                <div className="flex items-center justify-between">
                  <span>Color B</span>
                  <div className="h-2 w-4 rounded-sm bg-cyan-600"></div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* ========================================== */}
      {/* بخش آواتارها و پروژه‌ها (همون دسکتاپ) */}
      {/* ========================================== */}
      <div className="hidden flex-col items-center justify-center gap-12 py-8 pt-0 lg:pt-40 text-white lg:flex">
        <div className="flex items-center justify-center gap-12">
          <div className="flex items-center gap-4">
            <div className="flex -space-x-7 isolate">
              {items.map((item, index) => (
                <motion.div
                  key={index}
                  style={{ zIndex: items.length - index }}
                  whileHover={{ scale: 1.15, y: -5, zIndex: 20 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  className={`h-10 w-10 rounded-full overflow-hidden border-2 cursor-pointer shadow-lg
                    ${index === 3 ? "border-gray-400" : "border-[#031c26]"} bg-zinc-700`}
                >
                  <SmartImage src={item.src} />
                </motion.div>
              ))}
            </div>
            <p className="text-sm md:text-base font-medium">
              500+ Happy Clients
            </p>
          </div>
          <div className="h-12 w-[1px] bg-white/10" />
          <div className="flex items-baseline gap-2">
            <span className="text-xl font-bold">1000+</span>
            <span className="text-sm text-gray-400">Projects Delivered</span>
          </div>
          <div className="h-12 w-[1px] bg-white/10" />
          <div className="flex items-baseline gap-2">
            <span className="text-xl font-bold">15+</span>
            <span className="text-sm text-gray-400">Countries Served</span>
          </div>
        </div>
        <div className="h-0.5 w-full bg-linear-to-r from-[#00222600] via-[#00A9BD] to-[#00222600]" />
      </div>
    </section>
  );
}
