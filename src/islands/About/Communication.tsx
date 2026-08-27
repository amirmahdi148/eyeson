"use client";

import { memo } from "react";

// ================= MAIN COMPONENT =================
export const Communication = memo(function Communication() {
  return (
    <section
      className="flex flex-col items-center overflow-hidden w-full"
    >
      {/* ===== TOP LINE ===== */}
      <div
        className="bg-linear-to-r from-transparent via-[#00A9BD] to-transparent pointer-events-none w-full h-px opacity-50"
      />

      {/* ===== COMMUNICATION SECTION ===== */}
      <div className="mx-auto max-w-300 px-4 sm:px-6 relative z-10 py-16 md:py-24 lg:py-32 flex flex-col md:flex-row items-center gap-6 sm:gap-10 lg:gap-16 w-full">
        
        {/* Blur glow behind content */}
        <div
          className="bg-[#46B6A030] blur-[80px] w-48 h-48 md:w-64 md:h-64 absolute top-1/2 left-1/2 md:left-1/4 -translate-x-1/2 md:-translate-x-0 -translate-y-1/2 -z-1 pointer-events-none"
        />

        <div
          className="order-1 w-full md:w-1/2 flex justify-center items-center mx-auto animate-fade-in"
        >
          <img
            src="/about/svg/comm-bigger.svg"
            alt="Communication and Collaboration"
            className="w-full sm:w-full md:w-[130%] lg:w-[150%] xl:w-[190%] max-w-none object-contain mx-auto"
          />
        </div>

        {/* TEXT */}
        <div
          className="order-2 w-full md:w-1/2 flex flex-col gap-5 sm:gap-6 md:gap-8 items-center text-center md:items-start md:text-left z-10 animate-slide-up"
        >
          <div className="flex flex-col gap-3 md:gap-4 items-center md:items-start w-full">
            <h2 className="bg-linear-to-r font-extrabold text-[28px] sm:text-3xl md:text-4xl lg:text-5xl xl:text-[56px] from-[#46B6A0] to-[#00A9BD] bg-clip-text text-transparent w-fit">
              Communication
            </h2>
            <p className="max-w-xl text-[13px] sm:text-[14px] md:text-base lg:text-lg font-light text-gray-200/90 leading-[1.7] md:leading-relaxed">
              Great creative work starts with great communication.
              We believe the best results come from transparency, alignment, and fast feedback. That's
              why we keep communication clear, organized, and tailored to the way your team works.
            </p>
          </div>

          <div className="w-full">
            <p className="max-w-xl text-[13px] sm:text-[14px] md:text-base lg:text-lg font-light text-gray-400 leading-[1.7] md:leading-relaxed">
              Whether we're collaborating through Slack, Discord, email, or scheduled calls, our focus
              remains the same: keeping projects moving efficiently while ensuring everyone stays
              aligned from start to finish.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
});
