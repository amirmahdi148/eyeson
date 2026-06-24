

import React, { useRef, useState } from "react";
import {
  motion,
  useReducedMotion,
  type Variants,
} from "framer-motion";
import { SmartImage } from "@/utils/SmartImage.tsx";
import SecondaryButton from "@/components/Shared/SecondaryButton";
import PrimaryButton from "@/components/Shared/PrimaryButton";
import RightSectionHero from "@/islands/Home/RightSectionHero";

const items = [
  { src: "/home/Hero/clients/1.webp" },
  { src: "/home/Hero/clients/2.webp" },
  { src: "/home/Hero/clients/3.webp" },
  { src: "/home/Hero/clients/4.webp" },
];

export default function HeroHome() {
  const [activeTab, setActiveTab] = useState("video-editing");

  // تشخیص تنظیمات کاهش انیمیشن در سیستم کاربر
  const shouldReduceMotion = useReducedMotion();

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
      <div className="relative mx-auto flex max-w-[1500px] flex-col items-center gap-10 px-4 sm:px-6 lg:flex-row lg:items-center lg:gap-10 lg:px-8">
        {/* ========================================== */}
        {/* بخش چپ: متن‌ها و دکمه‌ها (در موبایل پایین) */}
        {/* ========================================== */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="order-2 lg:order-1 w-full lg:w-[45%] xl:w-[48%] flex flex-col justify-center items-center lg:items-start text-center lg:text-start"
        >
          <h2 className=" tracking-[0.2rem] text-white/60 text-[1px] md:text-[12px]">Product Launch Videos · Explainers · Social Media Content</h2>
          <motion.h1
            variants={itemVariants}
            className="text-2xl font-extrabold leading-[1.15] tracking-tight sm:text-3xl lg:text-[2.2rem]"
          >
            <span className="block bg-gradient-to-r from-[#31d1a6] to-[#25aeb2] bg-clip-text text-transparent pb-1 w-[70%]">
              Premium Motion Design, Animation & Editing Studio
            </span>
            <span className="mt-2 block text-white drop-shadow-md  w-[70%]">
              Make Your Brand Impossible to Ignore.
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-5 max-w-md text-[14px] leading-[1.7] text-white/60 sm:text-[15px] lg:text-base font-light"
          >
            EyesOn Studio helps brands turn ideas, products, and messages into premium videos,motion graphics, product launch videos, explainers, social media content, and high quality
            video editing built to capture attention, explain faster, and make people remember you.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mt-8 flex flex-row gap-3 w-full justify-center lg:justify-start"
          >
            <PrimaryButton text="Get Started" width="auto" />
            <SecondaryButton text="View Pricing" width="auto" />
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="mt-6 text-xs text-white/40 uppercase tracking-wider font-medium"
          >
            Trusted by brands, founders, and creative teams across 25+ countries.
          </motion.p>
        </motion.div>

        <RightSectionHero
          activeTab={activeTab}
          shouldReduceMotion={shouldReduceMotion}
          videoRef={videoRef}
          handleTimeUpdate={handleTimeUpdate}
        />
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
              80+ Happy Clients
            </p>
          </div>
          <div className="h-12 w-[1px] bg-white/10" />
          <div className="flex items-baseline gap-2">
            <span className="text-xl font-bold">1200+</span>
            <span className="text-sm text-gray-400">Projects Delivered</span>
          </div>
          <div className="h-12 w-[1px] bg-white/10" />
          <div className="flex items-baseline gap-2">
            <span className="text-xl font-bold">25+</span>
            <span className="text-sm text-gray-400">Countries Served</span>
          </div>
        </div>
        <div className="h-0.5 w-full bg-linear-to-r from-[#00222600] via-[#00A9BD] to-[#00222600]" />
      </div>
    </section>
  );
}
