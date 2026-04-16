

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

type Step = {
    id: number;
    title: string;
    description: string;
    deliverable: string;
};

const steps: Step[] = [
    {
        id: 1,
        title: "Discovery",
        description:
            "Understanding your goals, audience, footage, and the story you want to tell.",
        deliverable: "Creative direction",
    },
    {
        id: 2,
        title: "Content Structure",
        description: "Organizing scenes, selecting key moments, and planning the narrative flow.",
        deliverable: "Scene breakdown",
    },
    {
        id: 3,
        title: "Rough Cut",
        description: "Assembling the initial sequence with pacing, base timing, and overall direction.",
        deliverable: "Initial edit",
    },
    {
        id: 4,
        title: "Refinement",
        description: "Color adjustments, sound design, transitions, titles, and polished storytelling.",
        deliverable: "Graphics & audio design",
    },
    {
        id: 5,
        title: "Final Review",
        description: "Previewing the edit together, applying feedback, and perfecting details.",
        deliverable: "Final validation",
    },
    {
        id: 6,
        title: "Delivery",
        description: "Exporting optimized formats for all platforms and preparing reusable assets.",
        deliverable: "Ready files",
    },
];

export default function ApproachTimelineSection() {
    const sectionRef = useRef<HTMLElement | null>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start 70%", "end 85%"],
    });
    const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

    return (
        <section
            ref={sectionRef}
            className="relative overflow-hidden px-6 pb-28 pt-14 lg:px-20"
        >
            <div className="mx-auto max-w-6xl">
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className="text-3xl font-bold leading-tight text-white md:text-5xl">
                        Our approach to <span className="text-[#12d6d8]">video editing</span>{" "}
                        projects
                    </h2>
                    <p className="mt-4 text-sm leading-7 text-[#c3d4de] md:text-base">
                        We shape every edit with a clear process that aligns your goals,
                        audience, and message. From first idea to final export, each step
                        ensures your video becomes sharper, more engaging, and ready to
                        perform.
                    </p>
                </div>

                <div className="relative mx-auto mt-12 max-w-xl md:hidden">
                    <div className="absolute bottom-5 left-5 top-0 w-[2px] bg-[#39d4c933]" />
                    <motion.div
                        style={{ scaleY: lineScale, transformOrigin: "top" }}
                        className="absolute bottom-5 left-5 top-0 w-[3px] bg-[#53e2ca]"
                    />

                    <div className="space-y-6">
                        {steps.map((step) => {
                            return (
                                <div key={step.id} className="relative pl-12">
                                    <div className="absolute left-5 top-8 -translate-x-1/2">
                                        <div
                                            className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#53e2ca] bg-[#53e2ca] text-base font-bold text-[#06363d] shadow-[0_0_14px_rgba(83,226,202,0.45)]"
                                        >
                                            {step.id}
                                        </div>
                                    </div>

                                    <motion.article
                                        initial={{ opacity: 0, x: 16, y: 16 }}
                                        whileInView={{ opacity: 1, x: 0, y: 0 }}
                                        viewport={{ once: false, amount: 0.35 }}
                                        transition={{ duration: 0.45, ease: "easeOut" }}
                                        className="relative overflow-hidden rounded-2xl border border-[#1aaec2] bg-[linear-gradient(170deg,#0a2437_8%,#0a1f31_100%)] shadow-[0_0_18px_rgba(32,206,221,0.24)]"
                                    >
                                        <div className="h-9 border-b border-[#2a5770]">
                      <span className="inline-flex h-full min-w-[92px] items-center rounded-br-[24px] bg-[linear-gradient(180deg,#1cbfd8,#138da7)] px-4 text-sm font-semibold tracking-wide text-[#eaffff]">
                        Step {step.id.toString().padStart(2, "0")}
                      </span>
                                        </div>

                                        <div className="px-4 pb-4 pt-3">
                                            <h3 className="text-[24px] md:text-[34px]  font-bold leading-none text-white">
                                                {step.title}
                                            </h3>
                                            <p className="mt-2 text-[12px] md:text-[15px] leading-7 text-[#cbdae2]">
                                                {step.description}
                                            </p>
                                            <div className="mt-3 h-px w-full bg-[#2a5871]" />
                                            <p className="mt-3 text-[15px] text-[#1fd5d8]">
                                                <span className="font-semibold">Deliverable:</span>{" "}
                                                {step.deliverable}
                                            </p>
                                        </div>
                                    </motion.article>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div className="relative mx-auto mt-14 hidden max-w-5xl md:block">
                    <div className="absolute left-1/2 top-0 hidden h-full w-[2px] -translate-x-1/2 bg-[#FFFFFF0D] md:block" />
                    <motion.div
                        style={{ scaleY: lineScale, transformOrigin: "top" }}
                        className="absolute left-1/2 top-0 hidden h-full w-[3px] -translate-x-1/2 bg-[#46B6A0] md:block"
                    />

                    <div className="space-y-10 md:space-y-12">
                        {steps.map((step, index) => {
                            const right = index % 2 === 0;
                            return (
                                <div key={step.id} className="relative grid md:grid-cols-2">
                                    <svg
                                        className={`pointer-events-none absolute top-1/2 hidden -translate-y-1/2 md:block ${
                                            right ? "left-1/2" : "right-1/2"
                                        }`}
                                        width="118"
                                        height="44"
                                        viewBox="0 0 118 44"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        {(() => {
                                            const connectorPath = right
                                                ? "M0 30H30C42 30 44 19 56 19H118"
                                                : "M118 30H88C76 30 74 19 62 19H0";

                                            return (
                                                <>
                                                    <path
                                                        d={connectorPath}
                                                        stroke="#46B6A0"
                                                        strokeWidth="2.2"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        opacity={0.35}
                                                    />
                                                    <motion.path
                                                        d={connectorPath}
                                                        stroke="#46B6A0"
                                                        strokeWidth="2.2"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        fill="none"
                                                        initial={{ pathLength: 0, opacity: 0 }}
                                                        whileInView={{ pathLength: 1, opacity: 1 }}
                                                        viewport={{ once: true, amount: 0.6 }}
                                                        transition={{ duration: 0.55, ease: "easeOut" }}
                                                    />
                                                </>
                                            );
                                        })()}
                                    </svg>

                                    <motion.article
                                        initial={{ opacity: 0, x: right ? 70 : -70, y: 24 }}
                                        whileInView={{ opacity: 1, x: 0, y: 0 }}
                                        viewport={{ once: false, amount: 0.4 }}
                                        transition={{ duration: 0.6, ease: "easeOut" }}
                                        className={`relative overflow-hidden rounded-2xl border border-[#1aaec2] bg-[linear-gradient(170deg,#0a2437_5%,#0a1f31_100%)] shadow-[0_0_20px_rgba(32,206,221,0.24)] ${
                                            right ? "md:col-start-2 md:ml-20" : "md:col-start-1 md:mr-20"
                                        }`}
                                    >
                                        <div className="h-11 border-b border-[#2a5770]">
                      <span className="inline-flex h-full min-w-[110px] items-center rounded-br-[34px] bg-[linear-gradient(180deg,#1cbfd8,#138da7)] px-5 text-xl font-semibold tracking-wide text-[#eaffff]">
                        Step {step.id.toString().padStart(2, "0")}
                      </span>
                                        </div>

                                        <div className="px-5 pb-5 pt-4">
                                            <h3 className="text-4xl font-bold text-white">{step.title}</h3>
                                            <p className="mt-2 text-[15px] leading-7 text-[#cbdae2]">
                                                {step.description}
                                            </p>
                                            <div className="mt-4 h-px w-full bg-[#2a5871]" />
                                            <p className="mt-3 text-[15px] text-[#1fd5d8]">
                                                <span className="font-semibold">Deliverable:</span>{" "}
                                                {step.deliverable}
                                            </p>
                                        </div>
                                    </motion.article>

                                    <div className="pointer-events-none absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 md:flex">
                                        <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#46B6A0] bg-[#46B6A0] text-xl font-bold text-[#e4ffff] shadow-[0_0_16px_rgba(70,182,160,0.45)]">
                                            {step.id}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
