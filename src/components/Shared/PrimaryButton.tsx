'use client';

import { motion } from 'framer-motion';

type PrimaryButtonProps = {
  text: string;
  href?: string;
  width?: string;
  height?: string;
};

export default function PrimaryButton({
  text,
  href = "#",
  width = "auto",
  height = "auto",
}: PrimaryButtonProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      className="group relative inline-flex rounded-full p-[2px]"
      style={{ width, height }}
    >
      {/* ========================================== */}
      {/* 1. پس‌زمینه درخشان و بوردر (Glow & Border) */}
      {/* ========================================== */}
      <div 
        className="absolute inset-0 rounded-full bg-gradient-to-r from-[#45B6A0] to-[#12ACB5] opacity-80 shadow-[0_0_12px_#00A9BD] transition-all duration-300 ease-out group-hover:opacity-100 group-hover:shadow-[0_0_24px_rgba(69,182,160,0.8)] group-active:shadow-[0_0_8px_#00A9BD]" 
      />

      {/* ========================================== */}
      {/* 2. بدنه اصلی دکمه */}
      {/* ========================================== */}
      <a
        href={href}
        className="relative z-10 flex h-full w-full items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-[#00A9BD] to-[#1D553A] px-6 py-2.5 text-sm md:text-lg text-white font-medium shadow-inner"
      >
        {/* ========================================== */}
        {/* 3. افکت شاین (Glass Shimmer) */}
        {/* این لایه با هاور شدن، از چپ به راست حرکت میکنه */}
        {/* ========================================== */}
        <div 
          className="absolute inset-0 -translate-x-[150%] bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-[150%] skew-x-[-20deg]" 
        />
        
        {/* متن دکمه */}
        <span className="relative z-20 drop-shadow-md">
          {text}
        </span>
      </a>
    </motion.div>
  );
}