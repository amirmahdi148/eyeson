"use client";

import { type ReactNode } from "react";

type LazyViewportSectionProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export default function LazyViewportSection({
  children,
  className = "",
}: LazyViewportSectionProps) {
  return (
    <div
      className={`animate-fade-in ${className}`}
    >
      {children}
    </div>
  );
}
