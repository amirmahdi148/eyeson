"use client";

import { SplineScene } from "./SplineAboutPage.tsx";
import { motion, type Variants, useInView } from "framer-motion";
import { memo, useRef } from "react";


// ================= VARIANTS =================

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const imagePop: Variants = {
  hidden: { opacity: 0, scale: 0.9, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
  },
};

const lineReveal: Variants = {
  hidden: { scaleX: 0, opacity: 0 },
  visible: {
    scaleX: 1,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};
const sectionVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut", delay: 1 },
  },
};


// ================= MAIN COMPONENT =================
export const Communication = memo(function Communication() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-15%" });

  return (
    <motion.section
      ref={containerRef}
      variants={sectionVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="flex flex-col items-center overflow-hidden w-full"
    >
      {/* ===== TOP LINE ===== */}
      <motion.div
        variants={lineReveal}
        className="bg-linear-to-r from-transparent via-[#00A9BD] to-transparent pointer-events-none w-full h-px opacity-50"
      />

      {/* ===== COMMUNICATION SECTION ===== */}


      <div className="mx-auto max-w-300 px-4 sm:px-6 relative z-10 py-16 md:py-24 lg:py-32 flex flex-col md:flex-row items-center gap-6 sm:gap-10 lg:gap-16 w-full">
        
        {/* Blur glow behind content */}
        <motion.div
          variants={fadeIn}
          className="bg-[#46B6A030] blur-[100px] w-48 h-48 md:w-64 md:h-64 absolute top-1/2 left-1/2 md:left-1/4 -translate-x-1/2 md:-translate-x-0 -translate-y-1/2 -z-1 pointer-events-none"
        />


        <motion.div
          variants={imagePop}
          className="order-1 w-full md:w-1/2 flex justify-center items-center mx-auto"
        >
          <img
            src="/about/svg/comm-bigger.svg"
            alt="Communication and Collaboration"
            className="w-full sm:w-full md:w-[130%] lg:w-[150%] xl:w-[190%] max-w-none object-contain mx-auto"
          />
        </motion.div>

        {/* TEXT */}
        <motion.div
          variants={sectionVariants}
          className="order-2 w-full md:w-1/2 flex flex-col gap-5 sm:gap-6 md:gap-8 items-center text-center md:items-start md:text-left z-10"
        >
          <motion.div variants={fadeUp} className="flex flex-col gap-3 md:gap-4 items-center md:items-start w-full">
            <h2 className="bg-linear-to-r font-extrabold text-[28px] sm:text-3xl md:text-4xl lg:text-5xl xl:text-[56px] from-[#46B6A0] to-[#00A9BD] bg-clip-text text-transparent w-fit">
              Communication
            </h2>
            <p className="max-w-xl text-[13px] sm:text-[14px] md:text-base lg:text-lg font-light text-gray-200/90 leading-[1.7] md:leading-relaxed">
              Clear communication is the foundation of our workflow. Every
              project at eyeson begins with alignment, transparency, and a
              shared understanding of goals. We keep things simple and efficient
              through regular check-ins, async updates, and fast feedback loops.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} className="w-full">
            <p className="max-w-xl text-[13px] sm:text-[14px] md:text-base lg:text-lg font-light text-gray-400 leading-[1.7] md:leading-relaxed">
              We’re flexible with how teams prefer to collaborate. Whether it’s
              video calls, written updates, or a dedicated workspace for ongoing
              projects, we adapt to whatever keeps the process smooth. If your
              team needs a private channel for real-time communication, task
              tracking, or asset sharing, we’re happy to set it up and keep
              everything running without friction.
            </p>
          </motion.div>
        </motion.div>
      </div>
      {/* ===== BOTTOM LINE ===== */}
      <motion.div
        variants={lineReveal}
        className="bg-gradient-to-r from-transparent via-[#00A9BD] to-transparent pointer-events-none w-full h-px opacity-50"
      />
    </motion.section>
  );
});