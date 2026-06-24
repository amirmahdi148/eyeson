"use client";

import React, { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import { SmartImage } from "../../utils/SmartImage.tsx";

const tools = [
  { name: "After Effects", icon: "/icons/about/aftereffect.png" },
  { name: "Premiere Pro", icon: "/icons/about/premierpro.png" },
  { name: "Blender", icon: "/icons/about/blender.png" },
  { name: "Figma", icon: "/icons/about/figma.png" },
  { name: "Photoshop", icon: "/icons/about/photoshop.png" },
  { name: "Illustrator", icon: "/icons/about/illustrator.png" },
  { name: "Miro", icon: "/icons/about/miro.png" },
  { name: "Cinema 4D", icon: "/icons/about/cinema4d.png" },
  { name: "DaVinci Resolve", icon: "/icons/about/davinciresolve.png" },
  { name: "Framer", icon: "/icons/about/framer.png" },
  { name: "Lottie", icon: "/icons/about/lottie.png" },
  { name: "ChatGPT", icon: "/icons/about/chatgpt.png" },
  { name: "ElevenLabs", icon: "/icons/about/elevenlabs.png" },
  { name: "HeyGen", icon: "/icons/about/heygen.png" },
  { name: "Higgsfield", icon: "/icons/about/higgsfield.png" },
  { name: "Midjourney", icon: "/icons/about/midjourney.png" },
];

// انیمیشن برای کل کانتینر ابزارها
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08, // فاصله زمانی لود شدن بین هر تگ
      delayChildren: 0.2,
    },
  },
};

// انیمیشن برای هر تک ابزار
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
};

// انیمیشن عنوان‌ها
const headerVariants: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

export const ToolsComponent = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section className="relative w-full overflow-hidden py-16 md:py-24 lg:py-32">
      {/* هاله نوری ملایم در بک‌گراند */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00A9BD]/10 blur-[100px]" />

      <div
        ref={ref}
        className="mx-auto flex max-w-4xl flex-col items-center justify-center px-4 sm:px-6 lg:px-8 text-center"
      >
        {/* ========================================== */}
        {/* متون هدر */}
        {/* ========================================== */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-10 sm:mb-14 flex flex-col gap-3 sm:gap-4"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-black tracking-tight text-white">
            Tools <span className="text-[#31B9C4]">We Use</span>
          </h2>
          <p className="text-[14px] sm:text-base md:text-lg font-light text-gray-400">
            Industry-leading technologies and platforms
          </p>
        </motion.div>

        {/* ========================================== */}
        {/* کپسول‌های ابزار (Badges) */}
        {/* ========================================== */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 md:gap-4 w-full"
        >
          {tools.map((tool) => (
            <motion.div
              key={tool.name}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group relative cursor-default overflow-hidden rounded-full border border-white/10 bg-[#0A1A2A]/40 backdrop-blur-md px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 shadow-sm transition-all duration-300 hover:border-[#00A9BD]/50 hover:bg-[#00A9BD]/10 hover:shadow-[0_0_20px_rgba(0,169,189,0.2)]"
            >
              <div className="relative z-10 flex items-center gap-2">
                <SmartImage
                  src={tool.icon}
                  alt={tool.name}
                  width={20}
                  height={20}
                  objectFit="contain"
                  className="h-4 w-4 sm:h-5 sm:w-5"
                />
                <h3 className="text-[13px] sm:text-[14px] md:text-base font-medium tracking-wide text-gray-300 group-hover:text-white transition-colors duration-300">
                  {tool.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};