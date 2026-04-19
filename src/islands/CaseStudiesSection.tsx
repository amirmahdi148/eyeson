"use client";

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
        { label: "+42% viewer retention" },
        { label: "+31% onboarding completion" },
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
      stats: [{ label: "3x higher engagement" }, { label: "2.5M+ views" }],
      resultText: "Significant increase in brand recall and social shares",
      image: "/home/frame-special.png",
    },
  ];

  return (
    <section className="relative overflow-hidden py-12 md:py-16">
      <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 h-[260px] w-[260px] md:h-[420px] md:w-[420px] rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[220px] w-[220px] md:h-[380px] md:w-[380px] rounded-full bg-cyan-500/5 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-8 md:mb-10 text-center">
          <p className="mb-2 text-[10px] md:text-xs uppercase tracking-[0.22em] text-white/55">
            Customer Stories
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[52px] font-extrabold leading-tight text-white">
            <span className="block text-cyan-300">CASE STUDIES</span>
            <span className="block">From Idea to Impact</span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-[12px] sm:text-sm md:text-base leading-relaxed text-white/55">
            Real projects. Real challenges. Measurable results.
            <span className="block">Here&apos;s how motion graphics helped brands communicate better and perform stronger.</span>
          </p>
        </div>

        <div className="relative">
          <Swiper
            modules={[Navigation, Autoplay, EffectFade]}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            slidesPerView={1}
            navigation={{
              nextEl: ".swiper-button-next-case",
              prevEl: ".swiper-button-prev-case",
            }}
            autoplay={{ delay: 6000, disableOnInteraction: false }}
            className="rounded-[22px] md:rounded-[30px] border border-[#1a5660]/70 bg-[#071922]/85 backdrop-blur-xl overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.35)]"
          >
            {caseStudies.map((study) => (
              <SwiperSlide key={study.id}>
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  
                  <div className="order-2 lg:order-1 flex flex-col justify-center p-4 sm:p-5 md:p-6 lg:p-8 xl:p-10 border-t lg:border-t-0 lg:border-r border-white/5 min-h-0">
                    <h3 className="mb-4 md:mb-5 text-xl sm:text-2xl md:text-3xl lg:text-[32px] font-extrabold text-white leading-tight">
                      {study.category}
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mb-5 md:mb-6">
                      <div className="rounded-[16px] border border-cyan-400/15 bg-cyan-500/5 p-3 md:p-4">
                        <h4 className="mb-1.5 text-[13px] md:text-sm font-semibold text-cyan-300">
                          {study.title}
                        </h4>
                        <p className="text-[11px] sm:text-xs md:text-sm leading-relaxed text-white/60">
                          {study.challenge}
                        </p>
                      </div>

                      <div className="rounded-[16px] border border-cyan-400/15 bg-cyan-500/5 p-3 md:p-4">
                        <h4 className="mb-1.5 text-[13px] md:text-sm font-semibold text-cyan-300">
                          {study.solutionTitle}
                        </h4>
                        <p className="text-[11px] sm:text-xs md:text-sm leading-relaxed text-white/60">
                          {study.solution}
                        </p>
                      </div>
                    </div>

                    <div>
                      <h4 className="mb-2 text-sm md:text-base font-semibold text-white">
                        The Result
                      </h4>

                      <div className="flex flex-wrap gap-2 mb-3">
                        {study.stats.map((stat, idx) => (
                          <span
                            key={idx}
                            className="rounded-full border border-cyan-400/10 bg-[#0d2a31] px-3 py-1 text-[11px] md:text-xs text-cyan-100/90"
                          >
                            {stat.label}
                          </span>
                        ))}
                      </div>

                      <div className="mb-5 inline-flex w-full rounded-full border border-cyan-400/10 bg-[#0c2228] px-3 py-2 text-center text-[11px] md:text-xs text-white/75">
                        {study.resultText}
                      </div>

                      <button className="w-full sm:w-auto rounded-full bg-gradient-to-r from-cyan-400 to-teal-400 px-6 py-2.5 text-sm font-bold text-white shadow-[0_0_18px_rgba(34,211,238,0.25)] transition-transform duration-300 hover:scale-[1.03]">
                        See Case Study
                      </button>
                    </div>
                  </div>

                  <div className="order-1 lg:order-2 relative h-[220px] sm:h-[280px] md:h-[320px] lg:h-auto min-h-[220px] overflow-hidden border-b lg:border-b-0 border-white/5">
                    <img
                      src={study.image}
                      alt={study.category}
                      className="h-full w-full object-cover"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#071922] via-transparent to-transparent opacity-55" />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <button className="swiper-button-prev-case absolute left-1 top-[42%] z-20 hidden md:flex h-9 w-9 lg:h-10 lg:w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-[#071922]/90 text-white backdrop-blur-md">
            <svg className="h-4 w-4 lg:h-5 lg:w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button className="swiper-button-next-case absolute right-1 top-[42%] z-20 hidden md:flex h-9 w-9 lg:h-10 lg:w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-[#071922]/90 text-white backdrop-blur-md">
            <svg className="h-4 w-4 lg:h-5 lg:w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div className="mt-4 flex justify-center gap-2 md:mt-5">
            <div className="h-2 w-2 rounded-full bg-cyan-400" />
            <div className="h-2 w-2 rounded-full bg-white/15" />
          </div>
        </div>
      </div>
    </section>
  );
}