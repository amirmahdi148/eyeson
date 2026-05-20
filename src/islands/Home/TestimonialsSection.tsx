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
      name: "Emma R.",
      role: "Brand Manager, Nova Studio",
      avatar: "/home/Hero/clients/1.webp",
      text: "We needed a quick turnaround, and they delivered exceptional quality ahead of schedule. Truly professional team.",
      stars: 5,
    },
    {
      id: 2,
      name: "David L.",
      role: "Creative Director, Pixel Inc.",
      avatar: "/home/Hero/clients/2.webp",
      text: "We needed a quick turnaround, and they delivered exceptional quality ahead of schedule. Truly professional team.",
      stars: 4,
    },
    {
      id: 3,
      name: "Sarah M.",
      role: "Marketing Lead, TechFlow",
      avatar: "/home/Hero/clients/3.webp",
      text: "We needed a quick turnaround, and they delivered exceptional quality ahead of schedule. Truly professional team.",
      stars: 5,
    },
    {
      id: 4,
      name: "James K.",
      role: "CEO, StartupX",
      avatar: "/home/Hero/clients/4.webp",
      text: "Their understanding of our brand voice was spot on. The final product exceeded our expectations in every way.",
      stars: 5,
    },
    {
      id: 5,
      name: "Olivia P.",
      role: "Product Owner, Appify",
      avatar: "/home/Hero/clients/1.webp",
      text: "From concept to execution, everything was handled with precision. A fantastic partner for our creative strategy.",
      stars: 5,
    },
    {
      id: 6,
      name: "Michael B.",
      role: "Founder, NextGen",
      avatar: "/home/Hero/clients/2.webp",
      text: "Innovative, reliable, and incredibly talented. They brought our vision to life better than we could have imagined.",
      stars: 4,
    },
    {
      id: 7,
      name: "Jessica T.",
      role: "Art Director, Visionary",
      avatar: "/home/Hero/clients/3.webp",
      text: "A seamless workflow and stunning results. I look forward to working with them on future projects.",
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
            say about
            <br />
            working with us
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-gray-400 text-xs max-w-3xl mx-auto leading-relaxed"
          >
            We collaborate with teams of every size, from startups to global
            brands. Most clients come to us for motion and product-focused
            visuals that support their marketing efforts.
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
