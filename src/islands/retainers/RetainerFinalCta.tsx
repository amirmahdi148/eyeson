"use client";

import { motion } from "framer-motion";
import PrimaryButton from "@/components/Shared/PrimaryButton.tsx";
import SecondaryButton from "@/components/Shared/SecondaryButton.tsx";

export default function RetainerFinalCta() {
  return (
    <section className="relative w-full overflow-hidden px-4 pb-16 pt-10 sm:px-6 lg:px-20 lg:pb-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-[#00A9BD]/40 px-6 py-12 text-center shadow-[0_0_40px_rgba(0,168,182,0.15)] md:px-12 md:py-16"
      >
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(17,180,185,0.18),transparent_65%)]" />
        <p className="text-[11px] tracking-[0.2em] text-[#c2d3dc] sm:text-xs">
          YOUR NEXT MONTH OF CONTENT STARTS HERE
        </p>
        <h2 className="mt-4 text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl">
          Build a Creative Engine
          <br />
          <span className="text-[#12d4d1]">Behind Your Brand.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-[#c4d6df] md:text-base md:leading-8">
          Your marketing team should spend more time deciding what to say and
          less time worrying about who is going to make it.
        </p>
        <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-[#c4d6df] md:text-base md:leading-8">
          Give EyesOn your upcoming campaigns, product updates, ideas, and
          priorities. We'll turn them into content. Month after month.
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <PrimaryButton
            text="Build My Monthly Plan"
            href="/contact"
            width="16rem"
            height="52px"
          />
          <SecondaryButton
            text="Talk to EyesOn"
            href="/contact"
            width="16rem"
            height="52px"
          />
        </div>
      </motion.div>
    </section>
  );
}
