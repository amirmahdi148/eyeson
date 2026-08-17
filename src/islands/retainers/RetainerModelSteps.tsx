"use client";

import { motion } from "framer-motion";

type ModelStep = {
  id: number;
  title: string;
  description: string;
};

const defaultSteps: ModelStep[] = [
  {
    id: 1,
    title: "Prioritize",
    description:
      "Tell us what matters most this month. We define priorities together.",
  },
  {
    id: 2,
    title: "Produce",
    description:
      "Our team handles the creative and production without you chasing freelancers.",
  },
  {
    id: 3,
    title: "Review",
    description:
      "Your team gives feedback through a structured workflow and revision rounds.",
  },
  {
    id: 4,
    title: "Deliver",
    description:
      "Final assets are prepared for the platforms and formats you need.",
  },
  {
    id: 5,
    title: "Repeat",
    description:
      "We move directly into the next priorities without restarting the entire process.",
  },
];

export default function RetainerModelSteps() {
  return (
    <section className="relative w-full overflow-hidden px-4 pb-16 pt-10 sm:px-6 lg:px-20 lg:pb-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-[11px] tracking-[0.2em] text-[#c2d3dc] sm:text-xs">
            FLEXIBLE BY DESIGN
          </p>
          <h2 className="text-3xl font-bold leading-tight text-white md:text-5xl">
            Built Around Your
            <br />
            <span className="text-[#12d4d1]">Monthly Priorities.</span>
          </h2>
          <p className="mt-4 text-sm leading-7 text-[#c3d4de] md:text-base">
            We don't believe every month should look exactly the same.
            One month you may need six social videos. The next month you may be
            launching a major feature and need a product video, three ads, and
            several supporting creatives. Your retainer gives you access to
            ongoing production capacity that can be allocated around the work
            that matters most.
          </p>
        </div>

        <div className="relative mx-auto mt-14 max-w-5xl">
          <div className="absolute bottom-6 left-5 top-6 -translate-x-1/2 md:left-10">
            <div className="h-full w-[2px] bg-[#FFFFFF0D]" />
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="absolute left-0 top-0 h-full w-[3px] origin-top bg-[#46B59E] shadow-[0_0_12px_#46B59E,0_0_24px_#46B59E]"
            />
          </div>

          <div className="space-y-8">
            {defaultSteps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: index * 0.05, ease: "easeOut" }}
                className="flex items-start gap-5 md:gap-10"
              >
                <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#46B59E] bg-[#032635] text-lg font-bold text-[#46B59E] shadow-[0_0_14px_rgba(83,226,202,0.45)] md:h-14 md:w-14 md:text-xl">
                  {step.id}
                </div>
                <div className="flex-1 rounded-2xl border border-[#13a8b8]/40 bg-[#0A1D29]/70 p-5 md:p-6">
                  <h3 className="text-xl font-bold text-white md:text-2xl">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-[#c4d6df]">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
