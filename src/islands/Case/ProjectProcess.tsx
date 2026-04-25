"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { ClipboardList, PenTool, Edit3, MonitorPlay } from "lucide-react";

// داده‌های کارت‌ها
const steps = [
  {
    id: 1,
    title: "Concept & Brief",
    icon: <ClipboardList className="w-6 h-6 text-cyan-300" />,
    description:
      "We start by understanding your vision. You share your goals, style, and references — we shape a creative direction that fits your brand.",
    tags: ["Discovery", "Moodboard", "Creative Brief"],
  },
  {
    id: 2,
    title: "Design & Production",
    icon: <PenTool className="w-6 h-6 text-cyan-300" />,
    description:
      "Our team brings ideas to motion. We design visuals, craft motion graphics, or edit video with precision and storytelling in mind.",
    tags: ["Design", "Animation", "Editing"],
  },
  {
    id: 3,
    title: "Review & Refine",
    icon: <Edit3 className="w-6 h-6 text-cyan-300" />,
    description:
      "You get to see the work in progress. We gather your feedback and make necessary adjustments to ensure everything is perfect.",
    tags: ["Feedback", "Revision", "Polish"],
  },
  {
    id: 4,
    title: "Final Delivery",
    icon: <MonitorPlay className="w-6 h-6 text-cyan-300" />,
    description:
      "The project comes to life. We deliver the final, optimized files ready for your platform and audience to enjoy.",
    tags: ["Export", "Optimization", "Launch"],
  },
];

// آیکون‌های شناور اطراف سیاره
const floatingIcons = [
  { label: "Ps", color: "bg-blue-600", delay: 0, angle: -30, distance: 350 },
  { label: "Lr", color: "bg-blue-400", delay: 1, angle: -60, distance: 420 },
  { label: "Au", color: "bg-teal-500", delay: 2, angle: -10, distance: 280 },
  { label: "Br", color: "bg-orange-500", delay: 3, angle: 30, distance: 350 },
  { label: "Ai", color: "bg-orange-600", delay: 0.5, angle: 60, distance: 400 },
  { label: "Ae", color: "bg-purple-600", delay: 1.5, angle: 15, distance: 300 },
];

export default function ProjectProcess() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const variants: Variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.8,
      rotateY: direction > 0 ? -25 : 25,
      zIndex: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0,
      zIndex: 10,
      transition: {
        duration: 0.6,
        type: "spring", // حالا تایپ‌اسکریپت اینو به عنوان استرینگ معمولی نمی‌بینه
        stiffness: 200,
        damping: 20,
      },
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.8,
      rotateY: direction < 0 ? -25 : 25,
      zIndex: 0,
      transition: { duration: 0.5 },
    }),
  };

  // چرخش خودکار کارت‌ها
  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % steps.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % steps.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + steps.length) % steps.length);
  };


  return (
    <section className="relative w-full min-h-[90vh] bg-[#02080D] flex flex-col items-center justify-center py-20 overflow-hidden font-sans perspective-1000">
      {/* ===== بک‌گراند سیاره (Planet Effect) ===== */}
      <div className="absolute bottom-[-40%] left-1/2 -translate-x-1/2 w-[120vw] h-[80vw] sm:w-[100vw] sm:h-[60vw] max-w-[1400px] max-h-[800px] rounded-[100%] border-t border-[#1AA19C]/30 bg-gradient-to-b from-[#0A2E2C]/80 via-[#02080D] to-[#02080D] shadow-[0_-50px_100px_rgba(26,161,156,0.15)] pointer-events-none z-0">
        <div className="absolute inset-0 rounded-[100%] shadow-[inset_0_20px_50px_rgba(26,161,156,0.2)]"></div>
        {/* نور مرکزی روی سیاره */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-[200px] bg-[#1AA19C]/30 blur-[100px]"></div>
      </div>

      {/* ===== آیکون‌های نرم‌افزارهای شناور (Floating Icons) ===== */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[1200px] pointer-events-none z-0 hidden md:block">
        {floatingIcons.map((icon, idx) => {
          // محاسبه موقعیت دایره‌ای با توجه به زاویه و فاصله
          const rad = (icon.angle * Math.PI) / 180;
          const x = Math.sin(rad) * icon.distance;
          const y = -Math.cos(rad) * (icon.distance * 0.4); // بیضی کردن مسیر چرخش

          return (
            <motion.div
              key={idx}
              className="absolute top-1/2 left-1/2"
              initial={{ x: x, y: y, opacity: 0 }}
              animate={{
                x: x,
                y: [y - 15, y + 15, y - 15], // انیمیشن بالا و پایین رفتن نرم
                opacity: 0.8,
              }}
              transition={{
                y: {
                  duration: 4 + icon.delay,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
                opacity: { duration: 1 },
              }}
            >
              <div className="relative flex items-center justify-center w-10 h-10 -ml-5 -mt-5">
                <div
                  className={`absolute inset-0 ${icon.color} blur-[12px] opacity-60 rounded-full`}
                ></div>
                <div
                  className={`relative z-10 flex items-center justify-center w-8 h-8 ${icon.color} text-white text-xs font-bold rounded-md shadow-lg border border-white/20 transform -rotate-12`}
                >
                  {icon.label}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* ===== Header متنی ===== */}
      <div className="relative z-20 text-center mb-16 flex flex-col items-center">
        <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#1AA19C]/30 bg-[#0A1A1F]/50 backdrop-blur-md mb-6">
          <div className="w-2 h-2 rounded-full bg-[#1AA19C] shadow-[0_0_8px_#1AA19C]"></div>
          <span className="text-xs text-white/70 tracking-wide">
            About Project
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
          From idea to impact <br />
          Here's how <span className="text-[#1AA19C]">SeoGate</span> comes to
          life.
        </h2>
      </div>

      {/* ===== اسلایدر 3D کارت‌ها ===== */}
      <div className="relative z-20 w-full max-w-[900px] h-[380px] md:h-[320px] flex items-center justify-center perspective-[1200px]">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute w-[90%] sm:w-[450px] md:w-[500px] rounded-[24px] border border-white/10 bg-gradient-to-br from-[#061B21]/90 to-[#020B0F]/95 backdrop-blur-xl p-6 sm:p-8 shadow-[0_30px_60px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.1)]"
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* Step Badge & Icon */}
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[#092B30] border border-[#1AA19C]/20 shadow-[0_0_20px_rgba(26,161,156,0.15)]">
                {steps[currentIndex].icon}
              </div>
              <div className="px-3 py-1 rounded-full bg-[#0A1A1F] border border-white/5 text-white/50 text-xs">
                Step {steps[currentIndex].id}
              </div>
            </div>

            {/* Content */}
            <h3 className="text-2xl font-bold text-white mb-4">
              {steps[currentIndex].title}
            </h3>
            <p className="text-sm text-white/60 leading-relaxed mb-6">
              {steps[currentIndex].description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {steps[currentIndex].tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-full bg-black/40 border border-white/5 text-xs text-white/70"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* کارت‌های کناری (فیک) برای ایجاد حس 3D Carousel (در دسکتاپ) */}
        <div className="hidden md:block absolute w-[400px] h-[280px] right-[-100px] opacity-30 rounded-[24px] border border-white/5 bg-[#061B21] blur-[2px] transform translate-x-[150px] scale-75 rotate-y-[-25deg] z-0 pointer-events-none"></div>
        <div className="hidden md:block absolute w-[400px] h-[280px] left-[-100px] opacity-30 rounded-[24px] border border-white/5 bg-[#061B21] blur-[2px] transform translate-x-[-150px] scale-75 rotate-y-[25deg] z-0 pointer-events-none"></div>
      </div>

      {/* ===== دکمه‌های کنترل و CTA ===== */}
      <div className="relative z-20 flex flex-col sm:flex-row items-center gap-4 mt-16">
        <button
          onClick={handlePrev}
          className="w-full sm:w-auto px-8 py-3 rounded-full bg-gradient-to-r from-[#179B89] to-[#29C4A9] text-white font-bold shadow-[0_0_20px_rgba(41,196,169,0.3)] transition-transform hover:scale-105"
        >
          Book a Call
        </button>
        <button
          onClick={handleNext}
          className="w-full sm:w-auto px-8 py-3 rounded-full bg-[#05111A] border border-[#1AA19C]/40 text-white font-bold transition-all hover:bg-[#1AA19C]/10 hover:shadow-[0_0_20px_rgba(26,161,156,0.2)]"
        >
          Get Free Sample
        </button>
      </div>

      {/* نقطه‌های ناوبری (Dots) */}
      <div className="relative z-20 flex items-center gap-2 mt-8">
        {steps.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              setDirection(idx > currentIndex ? 1 : -1);
              setCurrentIndex(idx);
            }}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              idx === currentIndex
                ? "w-6 bg-[#1AA19C] shadow-[0_0_10px_#1AA19C]"
                : "bg-white/20 hover:bg-white/40"
            }`}
            aria-label={`Go to step ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
