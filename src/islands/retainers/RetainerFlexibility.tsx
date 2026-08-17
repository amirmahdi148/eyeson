"use client";

import { motion } from "framer-motion";

export default function RetainerFlexibility() {
  return (
    <section className="relative w-full overflow-hidden px-4 py-10 sm:px-6 lg:px-20">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="rounded-3xl border border-[#13a8b8]/40 bg-linear-to-br from-[#0B1F2A] to-[#093C49] p-8 text-center shadow-[0_0_30px_rgba(0,168,182,0.1)] md:p-12"
        >
          <h2 className="text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl">
            Your Business Changes.
            <br />
            <span className="text-[#12d4d1]">Your Content Can Too.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-[#c4d6df] md:text-base md:leading-8">
            A retainer should create flexibility—not another limitation.
            You might spend one month focused heavily on paid advertising. The
            next could revolve around a product launch. Another might require
            more social content, UI animation, or brand storytelling.
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#c4d6df] md:text-base md:leading-8">
            We plan production around your highest-priority creative needs while
            keeping the workload within the capacity of your selected retainer.
            That means you're buying ongoing creative capacity, not a random
            bundle of deliverables you may not need.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
