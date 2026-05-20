"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// تغییر ۱: جایگزینی EffectFade با EffectCreative برای انیمیشن خفن‌تر
import {
  Navigation,
  Autoplay,
  EffectCreative,
  Pagination,
} from "swiper/modules";
// تغییر ۲: اضافه کردن type Variants برای رفع ارور تایپ‌اسکریپت
import { motion, useReducedMotion, type Variants } from "framer-motion";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-creative"; // تغییر استایل افکت
import "swiper/css/pagination";

export default function CaseStudiesSection() {
  const shouldReduceMotion = useReducedMotion();

  const caseStudies = [
    {
      id: 1,
      category: "SaaS Product Explainer",
      title: "The Challenge",
      challenge:
        "The product had powerful features, but users struggled to understand its value within the first few seconds. High bounce rate and low onboarding completion were limiting growth.",
      solutionTitle: "Our Motion Solution",
      solution:
        "We designed a concise explainer video with animated UI flows, clear visual hierarchy, and focused storytelling to guide users through the product's core benefits.",
      stats: [
        { label: "+42% viewer retention" },
        { label: "+31% onboarding completion" },
      ],
      resultText: "Faster user understanding and reduced support requests",
      image: "/home/frame-special.webp",
    },
    {
      id: 2,
      category: "Brand Awareness Campaign",
      title: "The Challenge",
      challenge:
        "The brand needed to stand out in a crowded market. Traditional ads were not engaging enough and failed to capture the audience's attention quickly.",
      solutionTitle: "Our Motion Solution",
      solution:
        "We created a high-energy kinetic typography video with bold colors and fast-paced transitions to instantly grab attention and convey the brand message.",
      stats: [{ label: "3x higher engagement" }, { label: "2.5M+ views" }],
      resultText: "Significant increase in brand recall and social shares",
      image: "/home/frame-special.webp",
    },
  ];

  // رفع ارور: اضافه کردن : Variants
  const fadeUpVariant: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      <div className="relative z-10 mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        {/* هدر بخش - با انیمیشن اسکرول */}
        <motion.div
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-10 md:mb-14 text-center will-change-transform"
        >
          <p className="mb-3 text-[10px] md:text-xs font-bold uppercase tracking-[0.25em] text-cyan-400/80">
            Customer Stories
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-black leading-[1.1] tracking-tight text-white">
            <span className="block bg-gradient-to-r from-cyan-300 to-teal-400 bg-clip-text text-transparent pb-1">
              CASE STUDIES
            </span>
            <span className="block mt-1">From Idea to Impact</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[14px] sm:text-base leading-relaxed text-white/60 font-light">
            Real projects. Real challenges. Measurable results.
            <span className="block mt-1">
              Here&apos;s how motion graphics helped brands communicate better
              and perform stronger.
            </span>
          </p>
        </motion.div>

        {/* بدنه اصلی اسلایدر - با انیمیشن اسکرول */}
        <motion.div
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: 0.2 }}
          className="relative will-change-transform"
        >
          <Swiper
            modules={[Navigation, Autoplay, EffectCreative, Pagination]}
            effect="creative"
            speed={800} // سرعت نرم‌تر شدن ترنزیشن
            creativeEffect={{
              // تنظیمات انیمیشن خفن اسلاید: قبلی میره عقب و تاریک میشه، بعدی از راست میاد
              prev: {
                shadow: true,
                translate: ["-20%", 0, -200],
                opacity: 0,
              },
              next: {
                translate: ["100%", 0, 0],
              },
            }}
            slidesPerView={1}
            navigation={{
              nextEl: ".swiper-button-next-case",
              prevEl: ".swiper-button-prev-case",
            }}
            pagination={{
              el: ".custom-swiper-pagination",
              clickable: true,
              bulletClass: "swiper-custom-bullet",
              bulletActiveClass: "swiper-custom-bullet-active",
            }}
            autoplay={{ delay: 6000, disableOnInteraction: false }}
            className="rounded-[24px] md:rounded-[32px] border border-[#1a5660]/50 bg-[#071922]/80 backdrop-blur-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.4)]"
          >
            {caseStudies.map((study) => (
              <SwiperSlide key={study.id}>
                <div className="grid h-full grid-cols-1 lg:grid-cols-12">
                  {/* بخش محتوا (متن‌ها) */}
                  <div className="order-2 lg:order-1 lg:col-span-7 flex flex-col justify-center p-5 sm:p-8 md:p-10 lg:p-12 border-t lg:border-t-0 lg:border-r border-white/10 min-h-0">
                    <h3 className="mb-6 text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-white leading-tight tracking-tight">
                      {study.category}
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                      <div className="rounded-[18px] border border-cyan-400/20 bg-cyan-500/5 p-4 md:p-5 transition-colors hover:bg-cyan-500/10">
                        <h4 className="mb-2 text-sm font-bold text-cyan-300">
                          {study.title}
                        </h4>
                        <p className="text-xs sm:text-sm leading-[1.7] text-white/65">
                          {study.challenge}
                        </p>
                      </div>

                      <div className="rounded-[18px] border border-teal-400/20 bg-teal-500/5 p-4 md:p-5 transition-colors hover:bg-teal-500/10">
                        <h4 className="mb-2 text-sm font-bold text-teal-300">
                          {study.solutionTitle}
                        </h4>
                        <p className="text-xs sm:text-sm leading-[1.7] text-white/65">
                          {study.solution}
                        </p>
                      </div>
                    </div>

                    <div>
                      <h4 className="mb-3 text-sm md:text-base font-bold text-white">
                        The Result
                      </h4>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {study.stats.map((stat, idx) => (
                          <span
                            key={idx}
                            className="rounded-full border border-cyan-400/20 bg-[#0a262e] px-4 py-1.5 text-[12px] font-medium text-cyan-100/90 shadow-inner"
                          >
                            {stat.label}
                          </span>
                        ))}
                      </div>

                      <div className="mb-6 inline-flex w-full sm:w-auto rounded-xl sm:rounded-full border border-cyan-400/15 bg-[#081e24] px-4 py-2.5 text-center text-[12px] sm:text-[13px] text-white/80">
                        ✨ {study.resultText}
                      </div>

                      <div className="mt-2">
                        <button className="group relative w-full sm:w-auto overflow-hidden rounded-full bg-gradient-to-r from-cyan-500 to-teal-400 px-8 py-3.5 text-sm font-bold text-white shadow-[0_0_20px_rgba(34,211,238,0.3)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(34,211,238,0.5)] active:scale-[0.98]">
                          <span className="relative z-10">
                            See Full Case Study
                          </span>
                          <div className="absolute inset-0 z-0 bg-gradient-to-r from-teal-400 to-cyan-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* بخش تصویر */}
                  <div className="order-1 lg:order-2 lg:col-span-5 relative h-[250px] sm:h-[320px] md:h-[400px] lg:h-full w-full overflow-hidden border-b lg:border-b-0 border-white/10">
                    <img
                      src={study.image}
                      alt={study.category}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover transform-gpu transition-transform duration-[10s] hover:scale-110"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#071922] via-[#071922]/20 to-transparent opacity-80 lg:opacity-60" />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* دکمه‌های اسلایدر */}
          <button className="swiper-button-prev-case group absolute -left-5 top-1/2 z-20 hidden lg:flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-[#071922]/90 text-white shadow-lg backdrop-blur-md transition-all hover:border-cyan-400/50 hover:bg-[#0a262e] hover:text-cyan-400 active:scale-95">
            <svg
              className="h-5 w-5 transition-transform group-hover:-translate-x-0.5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path
                d="M15 19l-7-7 7-7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <button className="swiper-button-next-case group absolute -right-5 top-1/2 z-20 hidden lg:flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-[#071922]/90 text-white shadow-lg backdrop-blur-md transition-all hover:border-cyan-400/50 hover:bg-[#0a262e] hover:text-cyan-400 active:scale-95">
            <svg
              className="h-5 w-5 transition-transform group-hover:translate-x-0.5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path
                d="M9 5l7 7-7 7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {/* پگینیشن واقعی */}
          <div className="custom-swiper-pagination mt-6 flex justify-center gap-2.5"></div>
        </motion.div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        .swiper-custom-bullet {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: rgba(255, 255, 255, 0.2);
          cursor: pointer;
          transition: all 0.3s ease;
          display: block;
        }
        .swiper-custom-bullet-active {
          width: 24px;
          border-radius: 4px;
          background-color: #22d3ee; 
          box-shadow: 0 0 8px rgba(34, 211, 238, 0.5);
        }
      `,
        }}
      />
    </section>
  );
}
