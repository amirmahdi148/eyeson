"use client";

import { SplineScene } from "./SplineAboutPage.tsx";
import { motion, type Variants, useInView } from "framer-motion";
import { memo, useRef } from "react";
import { SmartImage } from "../../utils/SmartImage.tsx";

// ================= VARIANTS =================

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const imagePop: Variants = {
  hidden: { opacity: 0, scale: 0.85, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    scale: 1,

    filter: "blur(0px)",
    transition: { duration: 1, ease: "easeOut" },
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

const splineReveal: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1.2, ease: "easeOut" },
  },
};

const sectionVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut", delay: 1.2 },
  },
};

// ================= SPLINE COMPONENT =================
function SplineSceneBasic() {
  return (
    <div className="w-full h-[300px] md:h-[500px] relative overflow-hidden">
      <SplineScene
        scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
        className="w-full h-full"
      />
    </div>
  );
}

// ================= MAIN COMPONENT =================
export const Communication = memo(function Communication() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10%" });

  return (
    <motion.section
      ref={containerRef}
      variants={sectionVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="flex flex-col items-center overflow-x-hidden"
    >
      {/* ===== TOP LINE ===== */}
      <motion.div
        variants={lineReveal}
        className="bg-linear-to-r from-transparent via-[#00A9BD] to-transparent pointer-events-none w-full h-px"
      />

      {/* ===== COMMUNICATION SECTION ===== */}
      <div className="container mx-auto px-6 relative z-5 py-20 md:py-32 flex flex-col md:flex-row items-center gap-12">
        {/* Blur glow behind content */}
        <motion.div
          variants={fadeIn}
          className="bg-[#46B6A030] blur-[120px] w-64 h-64 absolute top-1/2 left-1/4 -translate-y-1/2 -z-1 pointer-events-none hidden md:block"
        />

        {/* IMAGE */}
        <motion.div
          variants={imagePop}
          className="w-full md:w-1/2 flex justify-center items-center"
        >
          <SmartImage
            src="/aboutus.webp"
            alt="Communication and Collaboration"
            width={900}
            height={700}
            sizes="(max-width: 768px) 90vw, 45vw"
            className="w-full max-w-md md:max-w-lg object-contain"
          />
        </motion.div>

        {/* TEXT */}
        <motion.div
          variants={sectionVariants}
          className="w-full md:w-1/2 flex flex-col gap-8"
        >
          <motion.div variants={fadeUp} className="flex flex-col gap-4">
            <h2 className="bg-linear-to-r font-extrabold text-4xl md:text-5xl from-[#46B6A0] to-[#00A9BD] bg-clip-text text-transparent w-fit">
              Communication
            </h2>
            <p className="max-w-xl text-base md:text-lg font-extralight text-gray-200 leading-relaxed">
              Clear communication is the foundation of our workflow. Every
              project at eyeson begins with alignment, transparency, and a
              shared understanding of goals. We keep things simple and efficient
              through regular check-ins, async updates, and fast feedback loops.
            </p>
          </motion.div>

          <motion.div variants={fadeUp}>
            <p className="max-w-xl text-base md:text-lg font-extralight text-gray-300 leading-relaxed">
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

      {/* ===== WHO WE ARE SECTION ===== */}
      <div className="container mx-auto px-6 py-20 md:py-32 flex flex-col md:flex-row items-center gap-16">
        <motion.div
          variants={fadeUp}
          className="w-full md:w-3/5 flex flex-col gap-8"
        >
          <h2 className="text-4xl md:text-6xl font-bold">
            Who <span className="text-[#33B2A8]">We</span> Are
          </h2>
          <div className="max-w-2xl flex flex-col gap-6 text-base md:text-lg font-light leading-relaxed text-gray-200">
            <p>
              eyeson is a focused creative studio built by a small team that
              actually works together, not in circles. Clients get direct access
              to the people who shape their projects, from the designers
              crafting the visuals to the leads guiding the creative direction.
            </p>
            <p>
              Our team works remotely across different regions, which lets us
              stay available across multiple time zones and move fast on
              revisions, new ideas, and ongoing tasks. Instead of layers of
              management and endless waiting, you get a responsive team that
              treats your project like its own.
            </p>
            <p>
              We stay intentionally lean so every brand we work with gets real
              attention, thoughtful execution, and a creative partner who
              doesn’t disappear between emails.
            </p>
          </div>
        </motion.div>

        {/* SPLINE SCENE */}
        <motion.div
          variants={splineReveal}
          className="w-full md:w-2/5 flex justify-center"
        >
          <SplineSceneBasic />
        </motion.div>
      </div>

      {/* ===== BOTTOM LINE ===== */}
      <motion.div
        variants={lineReveal}
        className="bg-linear-to-r from-transparent via-[#00A9BD] to-transparent pointer-events-none w-full h-px"
      />
    </motion.section>
  );
});
