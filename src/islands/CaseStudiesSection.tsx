"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import PrimaryButton from "@/components/Shared/PrimaryButton";

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
    <section className="relative overflow-hidden py-10 md:py-14">
      <div className="relative z-10 mx-auto max-w-[1180px] px-4 sm:px-6">
        <div className="mb-8 text-center md:mb-10">
          <p className="mb-2 text-[10px] uppercase tracking-[0.22em] text-white/55 md:text-xs">
            Customer Stories
          </p>
          <h2 className="text-2xl font-extrabold leading-tight text-white sm:text-3xl md:text-4xl lg:text-[52px]">
            <span className="block text-cyan-300">CASE STUDIES</span>
            <span className="block">From Idea to Impact</span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-[12px] leading-relaxed text-white/55 sm:text-sm md:text-base">
            Real projects. Real challenges. Measurable results.
            <span className="block">
              Here&apos;s how motion graphics helped brands communicate better
              and perform stronger.
            </span>
          </p>
        </div>

        <div className="relative mx-auto max-w-[1080px]">
          <Swiper
            modules={[Navigation, Autoplay, Pagination]}
            slidesPerView={1}
            loop
            speed={850}
            grabCursor
            navigation={{
              nextEl: ".case-next",
              prevEl: ".case-prev",
            }}
            pagination={{
              el: ".case-pagination",
              clickable: true,
              bulletClass: "case-bullet",
              bulletActiveClass: "case-bullet-active",
            }}
            autoplay={{
              delay: 6000,
              disableOnInteraction: false,
            }}
            className="case-swiper overflow-visible"
          >
            {caseStudies.map((study) => (
              <SwiperSlide key={study.id}>
                <div className="relative overflow-hidden rounded-[20px] border border-[#0B7D88]/70 bg-[#061B22] shadow-[0_0_0_1px_rgba(0,255,255,0.03),0_18px_60px_rgba(0,0,0,0.35)]">
                  <div className="grid min-h-[290px] grid-cols-1 lg:grid-cols-[1.12fr_0.88fr]">
                    <div className="order-2 flex flex-col justify-center px-4 py-4 sm:px-5 sm:py-5 md:px-6 md:py-6 lg:order-1 lg:px-6 lg:py-7 xl:px-8 xl:py-8">
                      <h3 className="mb-4 text-[22px] font-extrabold leading-tight text-white sm:text-[26px] md:text-[30px] xl:text-[34px]">
                        {study.category}
                      </h3>

                      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-2 md:gap-3">
                        <div className="rounded-[12px] border border-[#18B7C1]/30 bg-[#061F26] px-3 py-2.5">
                          <h4 className="mb-1 text-[13px] font-semibold text-cyan-300 md:text-sm">
                            {study.title}
                          </h4>
                          <p className="text-[11px] leading-[1.3rem] text-white/60 md:text-[13px]">
                            {study.challenge}
                          </p>
                        </div>

                        <div className="rounded-[12px] border border-[#18B7C1]/30 bg-[#061F26] px-3 py-2.5">
                          <h4 className="mb-1 text-[13px] font-semibold text-cyan-300 md:text-sm">
                            {study.solutionTitle}
                          </h4>
                          <p className="text-[11px] leading-[1.3rem] text-white/60 md:text-[13px]">
                            {study.solution}
                          </p>
                        </div>
                      </div>

                      <div className="mt-4">
                        <h4 className="mb-2 text-sm font-semibold text-white md:text-base">
                          The Result
                        </h4>

                        <div className="mb-2 flex flex-wrap gap-2">
                          {study.stats.map((stat, idx) => (
                            <span
                              key={idx}
                              className="rounded-full bg-[#0C5E6A] px-3 py-1 text-[11px] text-white/92"
                            >
                              {stat.label}
                            </span>
                          ))}
                        </div>

                        <div className="mb-5 rounded-full bg-[#0B5561] px-3 py-2 text-center text-[11px] text-white/85 md:text-xs">
                          {study.resultText}
                        </div>

                        <button className="w-full sm:w-auto rounded-full bg-gradient-to-r from-cyan-400 to-teal-400 px-15 py-2.5 text-sm font-bold text-white shadow-[0_0_18px_rgba(34,211,238,0.25)] transition-transform duration-300 hover:scale-[1.03]">
                          See Case Study
                        </button>
                      </div>
                    </div>

                    <div className="order-1 relative min-h-[250px] overflow-hidden rounded-tr-[20px] rounded-br-[20px] border-b border-white/5 lg:order-2 lg:min-h-[290px] lg:border-b-0 lg:border-l">
                      <img
                        src={study.image}
                        alt={study.category}
                        className="h-full w-full object-cover"
                      />
                      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(6,27,34,0.08)_0%,rgba(6,27,34,0.15)_50%,rgba(6,27,34,0.28)_100%)]" />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <button
            className="case-prev absolute left-[-60px] top-1/2 z-20 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-[#061922]/95 text-white shadow-[0_0_12px_rgba(0,0,0,0.25)] backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-cyan-400/35 md:h-9 md:w-9"
            aria-label="Previous slide"
          >
            <svg
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            className="case-next absolute right-[-60px] top-1/2 z-20 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-[#061922]/95 text-white shadow-[0_0_12px_rgba(0,0,0,0.25)] backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-cyan-400/35 md:h-9 md:w-9"
            aria-label="Next slide"
          >
            <svg
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div className="case-pagination mt-4 flex justify-center gap-2 md:mt-5" />
        </div>
      </div>
    </section>
  );
}
