'use client';

import { motion } from 'framer-motion';

type SecondaryButtonProps = {
  text: string;
  href?: string;
  width?: string;
  height?: string;
};

export default function SecondaryButton({
  text,
  href = "#",
  width = "auto",
  height = "auto",
}: SecondaryButtonProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.96 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className="group relative inline-flex rounded-full p-[1.5px]"
      style={{ width, height }}
    >
      {/* ========================================== */}
      {/* 1. بوردر درخشان بیرونی (Glow Border) */}
      {/* در حالت هاور، هم نورش بیشتر میشه هم گرادیانتش واضح‌تر */}
      {/* ========================================== */}
      <div 
        className="absolute inset-0 rounded-full bg-gradient-to-r from-[#056E7C] to-[#46B6A0] opacity-75 shadow-[0_0_12px_rgba(0,169,189,0.5)] transition-all duration-300 ease-out group-hover:opacity-100 group-hover:shadow-[0_0_20px_rgba(70,182,160,0.6)] group-active:shadow-[0_0_6px_rgba(0,169,189,0.4)]" 
      />

      {/* ========================================== */}
      {/* 2. بدنه اصلی دکمه (تیره و شیک) */}
      {/* ========================================== */}
      <a
        href={href}
        className="relative z-10 flex h-full w-full items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-[#00061D] to-[#0B1F2A] px-6 py-2.5 text-sm md:text-lg text-white/90 font-medium transition-colors duration-300 group-hover:text-white group-hover:from-[#030d2a] group-hover:to-[#0f2c3d]"
      >
        {/* ========================================== */}
        {/* 3. افکت شاین ظریف (Subtle Shimmer) */}
        {/* ========================================== */}
        <div 
          className="absolute inset-0 -translate-x-[150%] bg-gradient-to-r from-transparent via-cyan-300/10 to-transparent skew-x-[-25deg] transition-transform duration-700 ease-out group-hover:translate-x-[150%]" 
        />
        
        {/* متن دکمه */}
        <span className="relative z-20 transition-transform duration-300 group-hover:scale-[1.02]">
          {text}
        </span>
      </a>
    </motion.div>
  );
}