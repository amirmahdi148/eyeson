import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const steps = [1, 2, 3, 4, 5, 6];

export default function ApproachTimelineSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 70%", "end 85%"],
  });

  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const c0 = useTransform(scrollYProgress, [0, 1 / 6, 1 / 6 + 0.01], [0.3, 0.65, 1]);
  const c1 = useTransform(scrollYProgress, [1 / 6, 2 / 6, 2 / 6 + 0.01], [0.3, 0.65, 1]);
  const c2 = useTransform(scrollYProgress, [2 / 6, 3 / 6, 3 / 6 + 0.01], [0.3, 0.65, 1]);
  const c3 = useTransform(scrollYProgress, [3 / 6, 4 / 6, 4 / 6 + 0.01], [0.3, 0.65, 1]);
  const c4 = useTransform(scrollYProgress, [4 / 6, 5 / 6, 5 / 6 + 0.01], [0.3, 0.65, 1]);
  const c5 = useTransform(scrollYProgress, [5 / 6, 1, 1], [0.3, 0.65, 1]);

  const opacities = [c0, c1, c2, c3, c4, c5];

  const a0 = useTransform(scrollYProgress, [0, 1 / 6], [1, 1]);
  const a1 = useTransform(scrollYProgress, [1 / 6, 2 / 6], [0, 1]);
  const a2 = useTransform(scrollYProgress, [2 / 6, 3 / 6], [0, 1]);
  const a3 = useTransform(scrollYProgress, [3 / 6, 4 / 6], [0, 1]);
  const a4 = useTransform(scrollYProgress, [4 / 6, 5 / 6], [0, 1]);
  const a5 = useTransform(scrollYProgress, [5 / 6, 1], [0, 1]);

  const active = [a0, a1, a2, a3, a4, a5];

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden px-6 pb-16 pt-10 lg:px-20 flex justify-center items-center"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-xs tracking-[0.2em] text-[#c2d3dc]">
            OUR PROCESS
          </p>
          <h2 className="text-3xl font-bold leading-tight text-white md:text-5xl">
            Our Approach to
            High Performing Ad Creatives
          </h2>
          <p className="mt-4 text-sm leading-7 text-[#c3d4de] md:text-base">
            We don’t just design visuals and hope they work. Every ad creative is built through a clear
            process focused on hooks, message clarity, platform behavior, visual impact, and
            conversion.
          </p>
        </div>

        <div className="relative mx-auto mt-10 max-w-5xl">
          {/* Lines behind everything */}
          <div className="absolute bottom-0 left-5 top-0 -translate-x-1/2 md:left-10">
            <div className="h-full w-[2px] bg-[#FFFFFF0D]" />

            <motion.div
              style={{ scaleY: lineScale, transformOrigin: "top" }}
              className="absolute left-0 top-0 w-[3px] bg-[#46B59E] shadow-[0_0_12px_#46B59E,0_0_24px_#46B59E]"
            />
          </div>

          {/* Cards with circles */}
          <div className="space-y-0">
            {steps.map((step, index) => (
              <div key={step} className="flex items-center gap-6 md:gap-12">
                {/* Numbered circle on the line */}
                <div className="relative flex w-10 shrink-0 items-start justify-center pt-1 md:w-20 md:pt-2">
                  <div className="relative top-4 flex h-12 w-12 items-center justify-center md:h-14 md:w-14">
                    <div className="absolute inset-0 flex items-center justify-center rounded-full border-[0.5px] border-[#FFFFFF33] bg-[#032635] text-base font-bold text-[#FFFFFF66] md:text-xl">
                      {`0${step}`}
                    </div>

                    <motion.div
                      style={{ opacity: active[index] }}
                      className="absolute inset-0 flex items-center justify-center rounded-full border-[0.5px] border-[#46B59E] bg-[#032635] text-base font-bold text-[#FFFFFF66] shadow-[0_0_14px_rgba(83,226,202,0.45)] md:text-xl"
                    >
                      {`0${step}`}
                    </motion.div>
                  </div>
                </div>

                {/* Card SVG */}
                <motion.div
                  style={{ opacity: opacities[index] }}
                  className="min-w-0 flex-1 overflow-hidden rounded-2xl"
                >
                  <img
                    src={`/video-pieces/svg/${step}.svg`}
                    alt={`Step ${step}'s svg`}
                    className="h-auto w-full"
                  />
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
