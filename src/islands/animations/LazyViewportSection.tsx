"use client";

import { useRef, type ReactNode } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

type LazyViewportSectionProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export default function LazyViewportSection({
  children,
  className,
  delay = 0,
}: LazyViewportSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10% 0px" });
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      ref={containerRef}
      className={className}
      initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
      animate={
        prefersReducedMotion
          ? undefined
          : isInView
            ? { opacity: 1, y: 0 }
            : { opacity: 0, y: 14 }
      }
      transition={
        prefersReducedMotion
          ? undefined
          : { duration: 0.34, ease: "easeOut", delay }
      }
    >
      {children}
    </motion.div>
  );
}
