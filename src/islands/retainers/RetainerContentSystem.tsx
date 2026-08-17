"use client";

import { motion } from "framer-motion";

const painPoints = [
  "Find someone.",
  "Explain the brand.",
  "Send references.",
  "Negotiate scope.",
  "Wait for availability.",
  "Review the work.",
];

const gains = [
  "Your ideas move faster.",
  "Your brand becomes more consistent.",
  "Your content pipeline becomes predictable.",
];

export default function RetainerContentSystem() {
  return (
    <section className="relative w-full overflow-hidden px-4 pb-16 pt-10 sm:px-6 lg:px-20 lg:pb-24">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold leading-tight text-white md:text-5xl">
            Stop Starting
            <br />
            <span className="text-[#12d4d1]">From Zero Every Month.</span>
          </h2>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex flex-col rounded-2xl border border-[#FFFFFF14] bg-[#0A1D29]/60 p-6 md:p-8"
          >
            <h3 className="text-lg font-bold text-white/60 md:text-xl">
              Without an ongoing creative system, every new piece of content
              creates another production cycle.
            </h3>
            <ul className="mt-6 flex-1 space-y-3">
              {painPoints.map((point) => (
                <li
                  key={point}
                  className="flex items-center gap-3 text-sm leading-7 text-[#c4d6df] md:text-base"
                >
                  <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[#FFFFFF22] text-xs text-white/50">
                    ✕
                  </span>
                  {point}
                </li>
              ))}
              <li className="pt-2 text-sm font-semibold text-white/70 md:text-base">
                Then repeat everything next week.
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="flex flex-col rounded-2xl border border-[#1ed7d8]/40 bg-linear-to-br from-[#0B1F2A] to-[#093C49] p-6 shadow-[0_0_30px_rgba(0,168,182,0.12)] md:p-8"
          >
            <h3 className="text-lg font-bold text-white md:text-xl">
              A retainer changes the relationship.
            </h3>
            <p className="mt-3 text-sm leading-7 text-[#c4d6df] md:text-base">
              We learn your brand once, establish the workflow, build your
              visual language, and become faster as the partnership develops.
            </p>
            <ul className="mt-6 flex-1 space-y-3">
              {gains.map((gain) => (
                <li
                  key={gain}
                  className="flex items-center gap-3 text-sm font-medium leading-7 text-white md:text-base"
                >
                  <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[#35e4d8] bg-[#35e4d8]/10 text-xs text-[#35e4d8]">
                    ✓
                  </span>
                  {gain}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
