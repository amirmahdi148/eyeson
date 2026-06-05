"use client";

import { motion, type Variants } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { useEffect, useState } from "react";

import TestimonialCard from "./TestimonialCard";

// افکت‌های لودینگ آبشاری (Stagger)
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function TestimonialsSection() {
  const [stars, setStars] = useState<
    Array<{ top: string; left: string; size: number; delay: number }>
  >([]);

  // تولید ستاره‌ها فقط در کلاینت برای جلوگیری از خطای Hydration
  useEffect(() => {
    const newStars = [...Array(30)].map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: Math.random() * 2 + 1, // سایز تصادفی بین 1 تا 3 پیکسل
      delay: Math.random() * 3, // تاخیر تصادفی برای چشمک زدن
    }));
    setStars(newStars);
  }, []);

  const testimonials = [
    {
      id: 1,
      name: "Crypto Elites",
      role: "Crypto Education Brand",
      avatar: "/home/Hero/clients/1.webp",
      text: "We needed crypto content that looked more professional without making the message\n" +
          "harder to understand. EyesOn helped us turn the ideas into clean animations that felt easy\n" +
          "to watch, and one of the videos passed 500K+ views.",
      stars: 5,
    },
    {
      id: 2,
      name: "Cryptosity",
      role: "Crypto Media & Education",
      avatar: "/home/Hero/clients/2.webp",
      text: "Our content already had strong ideas, but the editing needed to feel cleaner and more\n" +
          "engaging. EyesOn improved the pacing, structure, captions, and overall look, which made\n" +
          "the videos much easier to watch on social media.",
      stars: 4,
    },
    {
      id: 3,
      name: "Predictefy",
      role: "Prediction Market Platform",
      avatar: "/home/Hero/clients/3.webp",
      text: "For our launch video, we needed something that could explain the product quickly and\n" +
          "still feel exciting. EyesOn understood the concept fast, shaped the story, and delivered a\n" +
          "video that felt polished, modern, and clear.",
      stars: 5,
    },
    {
      id: 4,
      name: "Kraken Team",
      role: "Crypto Exchange Team",
      avatar: "/home/Hero/clients/4.webp",
      text: "EyesOn helped us with video editing and made the process simple from start to finish. The\n" +
          "edits were clean, the pacing felt professional, and the final videos matched the quality we\n" +
          "wanted for our brand.",
      stars: 5,
    },
    {
      id: 5,
      name: "Remora",
      role: "RWA Crypto Brand",
      avatar: "/home/Hero/clients/1.webp",
      text: "We worked with EyesOn on animations for our Instagram and social media content. They\n" +
          "helped make the visuals feel more dynamic and polished, while still keeping the content\n" +
          "simple enough for people to understand quickly.",
      stars: 5,
    },
    {
      id: 6,
      name: "Hey Anon",
      role: "Web3 / AI Brand",
      avatar: "/home/Hero/clients/2.webp",
      text: "We had ideas that were not always easy to explain visually. EyesOn helped turn them into\n" +
          "content that felt clearer, smoother, and more engaging, especially with the editing flow and\n" +
          "motion details.",
      stars: 4,
    },
    {
      id: 7,
      name: "Nexo",
      role: "Digital Assets Platform",
      avatar: "/home/Hero/clients/3.webp",
      text: "The team brought a strong level of polish to our video content. The editing felt clean, the\n" +
          "motion details were subtle but effective, and the final result looked aligned with the\n" +
          "standard we needed.",
      stars: 5,
    },
  ];

  return (
    <section className="relative py-24 overflow-hidden">
      {/* ========================================== */}
      {/* رندر کردن ستاره‌های متحرک پس‌زمینه */}
      {/* ========================================== */}
      {stars.length > 0 && (
        <div className="absolute inset-0 pointer-events-none -z-10">
          {stars.map((star, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-[#21AFAF] will-change-transform"
              style={{
                top: star.top,
                left: star.left,
                width: star.size,
                height: star.size,
              }}
              animate={{
                opacity: [0.1, 0.6, 0.1],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: star.delay,
              }}
            />
          ))}
        </div>
      )}

      <div className="relative z-10 container mx-auto px-6 max-w-7xl">
        {/* ========================================== */}
        {/* هدر بخش (Staggered Animation) */}
        {/* ========================================== */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-xl lg:text-5xl font-bold mb-6 leading-tight text-white"
          >
            What our{" "}
            <span className="text-[#21AFAF] relative inline-block">
              clients
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
                className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-[#21AFAF] to-transparent rounded-full"
              />
            </span>{" "}
            say after
            <br />
            working with EyesOn
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-gray-400 text-xs max-w-3xl mx-auto leading-relaxed"
          >
            We collaborate with ambitious teams around the world, from early stage startups and
            online brands to established global companies. Every project is built around clear
            communication, strong creative execution, and making sure our clients feel confident in
            both the process and the final result.
          </motion.p>
        </motion.div>

        {/* ========================================== */}
        {/* کانتینر اسلایدر */}
        {/* ========================================== */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
          className="relative group/carousel"
        >
          {/* هاله نورانی پشت اسلایدر (روی هاور فعال میشه) */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#21AFAF]/5 to-transparent blur-3xl opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-1000 -z-20" />

          <div className="absolute inset-0 bg-[#0f172a]/50 rounded-[40px] border border-white/5 backdrop-blur-sm -z-10" />

          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              nextEl: ".swiper-button-next-custom",
              prevEl: ".swiper-button-prev-custom",
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="px-8 py-12 lg:px-12"
          >
            {testimonials.map((item) => (
              <SwiperSlide key={item.id} className="h-auto">
                {/* اگر داخل TestimonialCard هاور افکت نداری، اینجا میشه روی SwiperSlide ترانزیشن گذاشت */}
                <div className="h-full transform-gpu transition-transform duration-500 hover:-translate-y-2">
                  <TestimonialCard item={item} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* ========================================== */}
          {/* دکمه‌های ناوبری (با هاور فنری Framer Motion) */}
          {/* ========================================== */}
          <motion.button
            whileHover={{
              scale: 1.15,
              backgroundColor: "#1e293b",
              borderColor: "rgba(33, 175, 175, 0.5)",
            }}
            whileTap={{ scale: 0.9 }}
            className="swiper-button-prev-custom absolute top-1/2 -left-3 lg:-left-6 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-[#0f172a] border border-white/10 flex items-center justify-center text-white hover:text-[#21AFAF] hover:shadow-[0_0_15px_rgba(33,175,175,0.3)] transition-colors shadow-lg cursor-pointer"
          >
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </motion.button>

          <motion.button
            whileHover={{
              scale: 1.15,
              backgroundColor: "#1e293b",
              borderColor: "rgba(33, 175, 175, 0.5)",
            }}
            whileTap={{ scale: 0.9 }}
            className="swiper-button-next-custom absolute top-1/2 -right-3 lg:-right-6 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-[#0f172a] border border-white/10 flex items-center justify-center text-white hover:text-[#21AFAF] hover:shadow-[0_0_15px_rgba(33,175,175,0.3)] transition-colors shadow-lg cursor-pointer"
          >
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
