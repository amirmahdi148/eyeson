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
      className="group relative inline-flex rounded-[var(--radius-full)] p-[1.5px]"
      style={{ width, height }}
    >
      <div
        className="absolute inset-0 rounded-[var(--radius-full)] opacity-75 shadow-[var(--button-shadow)] transition-all duration-[var(--duration-normal)] ease-[var(--ease-default)] group-hover:opacity-100 group-hover:shadow-[var(--button-shadow-hover)] group-active:shadow-[0_0_6px_rgba(0,169,189,0.4)]"
        style={{ backgroundImage: "var(--button-primary-border-gradient)" }}
      />

      <a
        href={href}
        className="relative z-10 flex h-full w-full items-center justify-center overflow-hidden rounded-[var(--radius-full)] px-6 py-2.5 text-sm md:text-lg text-white/90 font-medium transition-colors duration-[var(--duration-normal)] ease-[var(--ease-default)] group-hover:text-white"
        style={{ backgroundImage: "var(--button-secondary-bg)" }}
      >
        <div
          className="absolute inset-0 -translate-x-[150%] bg-gradient-to-r from-transparent via-cyan-300/10 to-transparent skew-x-[-25deg] transition-transform duration-[var(--duration-emphasis)] ease-[var(--ease-default)] group-hover:translate-x-[150%]"
        />

        <span className="relative z-20 transition-transform duration-[var(--duration-normal)] ease-[var(--ease-default)] group-hover:scale-[1.02]">
          {text}
        </span>
      </a>
    </motion.div>
  );
}