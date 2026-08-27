
import {PlaySquare, Layers, Link2, LayoutGridIcon, PenLine, User, Pin} from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
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

const videoUrls = [
  "/home/Videos/output-first.mp4",
  "/home/Videos/output-second.mp4",
  "/home/Videos/output-third.mp4",
  "/home/Videos/output-fourth.mp4",
];

export default function HeroHome() {
  const [activeTab, setActiveTab] = useState("video-editing");
  const [mobileVideo, setMobileVideo] = useState<string | null>(null);

  // Only attach a src to the viewport-appropriate hero video (hidden <video> still downloads)
  const [isMobileViewport, setIsMobileViewport] = useState(
    () => typeof window !== "undefined" && window.matchMedia("(max-width: 1023px)").matches,
  );

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 1023px)");
    const onChange = (e: MediaQueryListEvent) => setIsMobileViewport(e.matches);
    mq.addEventListener("change", onChange);
    setMobileVideo(videoUrls[Math.floor(Math.random() * videoUrls.length)]);
    return () => mq.removeEventListener("change", onChange);
  }, []);

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

  // Liquid Glass — Modern Dark uses Expo easing & fluid 400-600ms per skill
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.08,
        ease: [0.16, 1, 0.3, 1] as any,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] as any },
    },
  };

  return (
    <section className="relative w-full overflow-hidden pt-24 pb-20 lg:pt-32 lg:pb-40 bg-[radial-gradient(ellipse_800px_400px_at_50%_-5%,rgba(0,169,189,0.08),transparent_70%),radial-gradient(ellipse_600px_300px_at_85%_30%,rgba(46,182,160,0.06),transparent_60%)]">
      {/* Ambient blobs — Modern Dark (Cinema) per ui-ux-pro-max */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 left-[12%] h-[420px] w-[420px] rounded-full bg-[var(--primitive-teal-500)] opacity-[0.07] blur-[72px] will-change-transform motion-safe:animate-[blobFloat_18s_ease-in-out_infinite]" />
        <div className="absolute top-[18%] right-[8%] h-[360px] w-[360px] rounded-full bg-[var(--primitive-emerald-500)] opacity-[0.05] blur-[64px] will-change-transform motion-safe:animate-[blobFloat_22s_ease-in-out_infinite_reverse]" />
      </div>
      {/* Mobile / Tablet: column layout — texts on top, video at bottom */}
      <div className="flex w-full flex-col lg:hidden px-[var(--space-gutter)] sm:px-[var(--space-gutter-md)] pb-10 gap-[var(--space-lg)] items-center">
        {/* Texts — same content as desktop, stacked above video */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex w-full max-w-[480px] flex-col items-center text-center gap-0"
        >
          <motion.p variants={itemVariants} className="tracking-[0.2rem] text-white/60 text-[10px] sm:text-[11px] uppercase">
            Product Launch Videos · Explainers · Social Media Content
          </motion.p>

          <motion.h1
            variants={itemVariants}
            className="mt-3 text-display flex flex-col items-center justify-center sm:text-3xl text-center"
          >
            <span className="block bg-gradient-to-r from-[var(--primitive-teal-400)] to-[#25aeb2] bg-clip-text text-transparent pb-1">
              Premium Motion Design, Animation & Editing Studio
            </span>
            <span className="mt-2 block text-white drop-shadow-md">
              Make Your Brand Impossible to Ignore.
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-5 max-w-md text-small leading-[1.7] text-white/60 sm:text-[15px] font-light"
          >
            EyesOn Studio helps brands turn ideas, products, and messages into premium videos, motion graphics, product launch videos, explainers, social media content, and high quality
            video editing built to capture attention, explain faster, and make people remember you.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mt-8 flex flex-row gap-3 w-full justify-center"
          >
            <PrimaryButton text="Get Started" width="auto" />
            <SecondaryButton text="View Pricing" width="auto" />
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="mt-6 text-caption text-white/40 tracking-widest"
          >
            Trusted by brands, founders, and creative teams across 25+ countries.
          </motion.p>
        </motion.div>

        {/* Video — below texts — glassmorphism per skill */}
        <div className="relative flex w-full items-center justify-center">
          <div className="relative flex h-100 w-[95%] flex-col items-center justify-end overflow-hidden rounded-[var(--radius-2xl)] border border-[var(--color-border)] bg-linear-to-br from-[#045769] via-[#070a1d] to-[#070a1d] shadow-[var(--elevation-3)] backdrop-blur-sm">
            <img src="/home/Hero/mobile/Asset%2035.webp" alt="" className="absolute inset-0 h-full w-full object-stretch z-20 pointer-events-none" />

            <div className="relative z-10 h-100 w-full rounded-[var(--radius-2xl)] flex items-center justify-center bg-cover border border-white/[0.06]" style={{backgroundImage : "url(/home/Hero/mobile/Asset%2037.webp)"}}>
              <video
                ref={videoRef}
                src={isMobileViewport ? mobileVideo ?? undefined : undefined}
                poster={mobileVideo ? mobileVideo.replace(".mp4", "-poster.jpg") : undefined}
                preload="metadata"
                autoPlay
                  muted
                  loop
                  playsInline
                  onTimeUpdate={handleTimeUpdate}
                  className="h-[90%] w-[93%] rounded-[var(--radius-xl)] object-cover"
              />

            </div>
          </div>
          <img src="/home/Hero/mobile/Asset%2036.webp" alt="" className="absolute inset-0 h-[30%] w-auto object-stretch z-1 top-100 sm: left-10" />
          <img src="/home/Hero/mobile/R3W%20%20(1).webp" alt="" className="absolute inset-0 h-auto w-[22%] sm:w-[19%] md:w-[14%]  object-stretch z-20 top-87 sm:top-80 left-25" />
        </div>
      </div>

      <div className="relative mx-auto hidden lg:flex max-w-[var(--container-wide)] flex-col items-center gap-10 px-[var(--space-gutter)] sm:px-[var(--space-gutter-md)] lg:flex-row lg:items-center lg:gap-10 lg:px-[var(--space-gutter-lg)]">
        {/* ========================================== */}
        {/* بخش چپ: متن‌ها و دکمه‌ها (در موبایل پایین) */}
        {/* ========================================== */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="order-2 lg:order-1 w-full lg:w-[45%] xl:w-[48%] flex flex-col justify-center items-center lg:items-start text-center lg:text-start"
        >
          <h2 className="tracking-[0.2rem] text-white/60 text-[11px] md:text-xs uppercase font-medium">Product Launch Videos · Explainers · Social Media Content</h2>
          <motion.h1
            variants={itemVariants}
            className="text-h1 flex items-start justify-center flex-col lg:text-[2.2rem]"
          >
            <span className="block bg-gradient-to-r from-[var(--primitive-teal-400)] to-[#25aeb2] bg-clip-text text-transparent pb-1 w-[70%]">
              Premium Motion Design, Animation & Editing Studio
            </span>
            <span className="mt-2 block text-white drop-shadow-md w-[70%]">
              Make Your Brand Impossible to Ignore.
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-5 max-w-md text-small leading-[1.7] text-white/60 lg:text-base font-light"
          >
            EyesOn Studio helps brands turn ideas, products, and messages into premium videos, motion graphics, product launch videos, explainers, social media content, and high quality
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
            className="mt-6 text-caption text-white/40 tracking-widest"
          >
            Trusted by brands, founders, and creative teams across 25+ countries.
          </motion.p>
        </motion.div>

        <RightSectionHero
          activeTab={activeTab}
          shouldReduceMotion={shouldReduceMotion}
          videoRef={videoRef}
          handleTimeUpdate={handleTimeUpdate}
          onCategoryChange={setActiveTab}
        />
      </div>

      {/* Social proof — stats bar — glass hairline per skill */}
      <div className="hidden flex-col items-center justify-center gap-12 py-8 pt-0 lg:pt-32 text-white lg:flex">
        <div className="flex items-center justify-center gap-12">
          <div className="flex items-center gap-4">
            <div className="flex -space-x-3 isolate">
              {items.map((item, index) => (
                <motion.div
                  key={index}
                  style={{ zIndex: items.length - index }}
                  whileHover={{ scale: 1.08, y: -3, zIndex: 20 }}
                  transition={{ type: "spring", stiffness: 420, damping: 22 }}
                  className={`h-10 w-10 rounded-full overflow-hidden border-2 cursor-pointer shadow-md transition-colors duration-[var(--duration-normal)]
                    ${index === 3 ? "border-white/20" : "border-[var(--color-border)]"} bg-zinc-700`}
                >
                  <SmartImage src={item.src} />
                </motion.div>
              ))}
            </div>
            <p className="text-small font-medium">
              80+ Happy Clients
            </p>
          </div>
          <div className="h-12 w-px bg-[var(--color-border)]" />
          <div className="flex items-baseline gap-2">
            <span className="text-xl font-bold">1200+</span>
            <span className="text-small text-white/60">Projects Delivered</span>
          </div>
          <div className="h-12 w-px bg-[var(--color-border)]" />
          <div className="flex items-baseline gap-2">
            <span className="text-xl font-bold">25+</span>
            <span className="text-small text-white/60">Countries Served</span>
          </div>
        </div>
        <div className="h-px w-full bg-gradient-to-r from-transparent via-[var(--color-border-teal)] to-transparent" />
      </div>

      <style>{`@keyframes blobFloat{0%,100%{transform:translate(0,0) scale(1)}50%{transform:translate(18px,-18px) scale(1.04)}}@media(prefers-reduced-motion:reduce){[style*="blobFloat"]{animation:none!important}}`}</style>
    </section>
  );
}
