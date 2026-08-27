"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { useEffect, useState } from "react";

import TestimonialCard from "./TestimonialCard";

export default function TestimonialsSection() {
  const [stars, setStars] = useState<
    Array<{ top: string; left: string; size: number; delay: number }>
  >([]);

  useEffect(() => {
    const prefersReduced = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    // Limit decorative stars to 12 (performance) and disable twinkle when reduced-motion
    const count = prefersReduced ? 0 : 12;
    const newStars = [...Array(count)].map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: Math.random() * 1.8 + 1.1,
      delay: Math.random() * 2.2,
    }));
    setStars(newStars);
  }, []);

  const testimonials = [
    {
      id: 1,
      name: "Crypto Elites",
      role: "Crypto Education Brand",
      avatar: "/customers/crypto-elites.webp",
      text: "We needed crypto content that looked more professional without making the message\n" +
          "harder to understand. EyesOn helped us turn the ideas into clean animations that felt easy\n" +
          "to watch, and one of the videos passed 500K+ views.",
      stars: 5,
    },
    {
      id: 2,
      name: "Cryptosity",
      role: "Crypto Media & Education",
      avatar: "/customers/cryptosisty.webp",
      text: "Our content already had strong ideas, but the editing needed to feel cleaner and more\n" +
          "engaging. EyesOn improved the pacing, structure, captions, and overall look, which made\n" +
          "the videos much easier to watch on social media.",
      stars: 4,
    },
    {
      id: 3,
      name: "Predictefy",
      role: "Prediction Market Platform",
      avatar: "/customers/predctfy.webp",
      text: "For our launch video, we needed something that could explain the product quickly and\n" +
          "still feel exciting. EyesOn understood the concept fast, shaped the story, and delivered a\n" +
          "video that felt polished, modern, and clear.",
      stars: 5,
    },
    {
      id: 4,
      name: "Kraken Team",
      role: "Crypto Exchange Team",
      avatar: "/customers/kraken.webp",
      text: "EyesOn helped us with video editing and made the process simple from start to finish. The\n" +
          "edits were clean, the pacing felt professional, and the final videos matched the quality we\n" +
          "wanted for our brand.",
      stars: 5,
    },
    {
      id: 5,
      name: "Remora",
      role: "RWA Crypto Brand",
      avatar: "/customers/remora.webp",
      text: "We worked with EyesOn on animations for our Instagram and social media content. They\n" +
          "helped make the visuals feel more dynamic and polished, while still keeping the content\n" +
          "simple enough for people to understand quickly.",
      stars: 5,
    },
    {
      id: 6,
      name: "Hey Anon",
      role: "Web3 / AI Brand",
      avatar: "/customers/hey-anon.webp",
      text: "We had ideas that were not always easy to explain visually. EyesOn helped turn them into\n" +
          "content that felt clearer, smoother, and more engaging, especially with the editing flow and\n" +
          "motion details.",
      stars: 4,
    },
    {
      id: 7,
      name: "Nexo",
      role: "Digital Assets Platform",
      avatar: "/customers/nexo.png",
      text: "The team brought a strong level of polish to our video content. The editing felt clean, the\n" +
          "motion details were subtle but effective, and the final result looked aligned with the\n" +
          "standard we needed.",
      stars: 5,
    },
  ];

  return (
    <section className="relative py-[var(--space-2xl)] lg:py-[var(--space-3xl)] overflow-hidden">
      {stars.length > 0 && (
        <div className="absolute inset-0 pointer-events-none -z-10" aria-hidden="true">
          {stars.map((star, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-[var(--primitive-teal-500)] animate-pulse"
              style={{
                top: star.top,
                left: star.left,
                width: star.size,
                height: star.size,
                animationDelay: `${star.delay}s`,
                opacity: 0.3,
              }}
            />
          ))}
        </div>
      )}

      <div className="relative z-10 mx-auto max-w-[var(--container-max)] px-[var(--space-gutter)] sm:px-[var(--space-gutter-md)] lg:px-[var(--space-gutter-lg)]">
        {/* ========================================== */}
        {/* هدر بخش */}
        {/* ========================================== */}
        <div
          className="text-center mb-16 animate-fade-in"
        >
          <h2
            className="text-h2 mb-6 leading-tight text-white"
          >
            What our{" "}
            <span className="text-[var(--primitive-teal-400)] relative inline-block">
              clients
              <div
                className="absolute -bottom-2 left-0 h-1 w-full bg-gradient-to-r from-[var(--primitive-teal-500)] to-transparent rounded-full"
              />
            </span>{" "}
            say after
            <br />
            working with EyesOn
          </h2>

          <p
            className="text-small text-white/60 max-w-3xl mx-auto leading-relaxed"
          >
            We collaborate with ambitious teams around the world, from early stage startups and
            online brands to established global companies. Every project is built around clear
            communication, strong creative execution, and making sure our clients feel confident in
            both the process and the final result.
          </p>
        </div>

        {/* ========================================== */}
        {/* کانتینر اسلایدر */}
        {/* ========================================== */}
        <div
          className="relative group/carousel"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-[var(--primitive-teal-500)]/06 to-transparent blur-3xl opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-[var(--duration-slower)] -z-20" aria-hidden="true" />

          <div className="absolute inset-0 bg-[#0f172a]/55 rounded-[var(--radius-2xl)] border border-[var(--color-border)] backdrop-blur-md -z-10 shadow-[var(--elevation-1)]" />

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
                <div className="h-full transform-gpu transition-transform duration-[var(--duration-normal)] ease-[var(--ease-default)] hover:-translate-y-1">
                  <TestimonialCard item={item} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* ========================================== */}
          {/* دکمه‌های ناوبری */}
          {/* ========================================== */}
          <button
            aria-label="Previous testimonials"
            className="swiper-button-prev-custom absolute top-1/2 -left-3 lg:-left-6 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-[#0f172a] border border-[var(--color-border)] flex items-center justify-center text-white hover:text-[var(--primitive-teal-400)] hover:scale-105 active:scale-95 hover:bg-[#1e293b] hover:border-[rgba(0,169,189,0.42)] hover:shadow-[var(--elevation-glow)] transition-all duration-200 shadow-lg cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-ring)]"
          >
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            aria-label="Next testimonials"
            className="swiper-button-next-custom absolute top-1/2 -right-3 lg:-right-6 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-[#0f172a] border border-[var(--color-border)] flex items-center justify-center text-white hover:text-[var(--primitive-teal-400)] hover:scale-105 active:scale-95 hover:bg-[#1e293b] hover:border-[rgba(0,169,189,0.42)] hover:shadow-[var(--elevation-glow)] transition-all duration-200 shadow-lg cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-ring)]"
          >
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
