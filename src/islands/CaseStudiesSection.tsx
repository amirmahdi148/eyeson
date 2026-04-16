"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

export default function CaseStudiesSection() {
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
        {
          label: "+42% viewer retention",
          color: "bg-foreground/20 text-foreground",
        },
        {
          label: "+31% onboarding completion",
          color: "bg-foreground/20 text-foreground",
        },
      ],
      resultText: "Faster user understanding and reduced support requests",
      image: "/home/frame-special.png",
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
      stats: [
        {
          label: "3x higher engagement",
          color: "bg-foreground/20 text-foreground",
        },
        { label: "2.5M+ views", color: "bg-foreground/20 text-foreground" },
      ],
      resultText: "Significant increase in brand recall and social shares",
      image: "/home/frame-special.png",
    },
  ];

  return (
    <section className="relative py-16 md:py-24  overflow-hidden">


      <div className="relative z-10 container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="text-center mb-10 md:mb-16 relative">
          <p className="text-gray-400 text-xs md:text-sm mb-3 md:mb-4 uppercase tracking-wider">
            Customer Stories
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-foreground">
            CASE STUDIES
            <br />
            <span className="text-white">From Idea to Impact</span>
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto px-2">
            Real projects. Real challenges. Measurable results.
            <br className="hidden md:block" />
            Here&apos;s how motion graphics helped brands communicate better and
            perform stronger.
          </p>
        </div>

        <div className="relative">
          <Swiper
            modules={[Navigation, Autoplay, EffectFade]}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              nextEl: ".swiper-button-next-case",
              prevEl: ".swiper-button-prev-case",
            }}
            autoplay={{ delay: 6000 }}
            className="rounded-[24px] md:rounded-[40px] border border-foreground/20 bg-[#0a0a0f]/40 backdrop-blur-xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)]"
          >
            {caseStudies.map((study) => (
              <SwiperSlide key={study.id}>
                <div className="grid grid-cols-1 lg:grid-cols-2 lg:min-h-[600px]">
                  <div className="p-6 md:p-8 lg:p-12 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-white/5 relative order-2 lg:order-1">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 md:mb-10 relative z-10">
                      {study.category}
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-10 relative z-10">
                      <div>
                        <h4 className="text-foreground font-semibold mb-2 md:mb-3 text-sm md:text-base">
                          {study.title}
                        </h4>
                        <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
                          {study.challenge}
                        </p>
                      </div>
                      <div>
                        <h4 className="text-foreground font-semibold mb-2 md:mb-3 text-sm md:text-base">
                          {study.solutionTitle}
                        </h4>
                        <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
                          {study.solution}
                        </p>
                      </div>
                    </div>

                    <div className="relative z-10">
                      <h4 className="text-white font-semibold mb-3 md:mb-4 text-base md:text-lg">
                        The Result
                      </h4>
                      <div className="flex flex-wrap gap-2 md:gap-3 mb-4">
                        {study.stats.map((stat, idx) => (
                          <span
                            key={idx}
                            className={`px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium ${stat.color} border border-foreground/20`}
                          >
                            {stat.label}
                          </span>
                        ))}
                      </div>
                      <div className="inline-block px-3 py-2 md:px-4 md:py-2 rounded-full bg-[#0f172a] border border-white/10 text-gray-300 text-xs md:text-sm mb-8 md:mb-10 w-full md:w-auto text-center md:text-left">
                        {study.resultText}
                      </div>

                      <button className="w-full md:w-auto px-8 py-3 rounded-full bg-gradient-to-r from-foreground to-[#0d7a7f] text-white font-bold text-sm shadow-[0_0_20px_rgba(16,145,151,0.3)] hover:shadow-[0_0_30px_rgba(16,145,151,0.5)] transition-all duration-300">
                        See Case Study
                      </button>
                    </div>
                  </div>

                  <div className="relative bg-[#0f172a] h-[250px] md:h-[400px] lg:h-full overflow-hidden group order-1 lg:order-2 border-b lg:border-b-0 border-white/5">
                    <img
                      src={study.image}
                      alt={study.category}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60 pointer-events-none" />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <button className="swiper-button-prev-case absolute top-[40%] lg:top-1/2 -left-3 lg:-left-8 -translate-y-1/2 z-20 w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-[#0f172a] border border-white/10 hidden md:flex items-center justify-center text-white hover:bg-foreground hover:border-foreground transition-all duration-300 shadow-xl cursor-pointer backdrop-blur-md">
            <svg
              className="w-5 h-5 lg:w-6 lg:h-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button className="swiper-button-next-case absolute top-[40%] lg:top-1/2 -right-3 lg:-right-8 -translate-y-1/2 z-20 w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-[#0f172a] border border-white/10 hidden md:flex items-center justify-center text-white hover:bg-foreground hover:border-foreground transition-all duration-300 shadow-xl cursor-pointer backdrop-blur-md">
            <svg
              className="w-5 h-5 lg:w-6 lg:h-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div className="flex justify-center gap-2 mt-6 md:mt-8">
            <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-foreground shadow-[0_0_10px_#109197]" />
            <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-white/20" />
          </div>
        </div>
      </div>
    </section>
  );
}
