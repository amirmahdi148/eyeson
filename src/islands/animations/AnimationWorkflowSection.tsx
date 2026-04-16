

import { useState } from "react";

type WorkflowItem = {
  id: number;
  title: string;
  description: string;
};

const workflowItems: WorkflowItem[] = [
  {
    id: 1,
    title: "Concept & planning",
    description:
      "We start by understanding your goals, audience, and use case. From messaging to visual style, we define a clear direction that guides the full animation process.",
  },
  {
    id: 2,
    title: "Design, modeling & styling",
    description:
      "Our team builds design systems, scenes, and 3D assets with a consistent visual language. This gives your brand a premium, unified look across every deliverable.",
  },
  {
    id: 3,
    title: "Animation & motion building",
    description:
      "We animate each sequence with intentional pacing and timing so your message feels clear, dynamic, and easy to follow.",
  },
  {
    id: 4,
    title: "Lighting, polish & compositing",
    description:
      "From lighting passes to final compositing, we refine every frame to elevate realism, clarity, and emotional impact.",
  },
  {
    id: 5,
    title: "Feedback loops & revisions",
    description:
      "You receive progress checkpoints throughout production. We collect focused feedback and apply revisions quickly without losing momentum.",
  },
  {
    id: 6,
    title: "Delivery & rollout support",
    description:
      "We export optimized formats for web, ads, and social platforms, then help your team launch and reuse assets efficiently.",
  },
  {
    id: 7,
    title: "Long-term content scaling",
    description:
      "After initial delivery, we can extend the system with new edits, localized variants, and campaign-specific versions while preserving consistency.",
  },
];

export default function AnimationWorkflowSection() {
  const [openId, setOpenId] = useState<number>(1);

  return (
    <section className="relative w-full overflow-hidden px-6 pb-24 pt-12 lg:px-16">
      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[0.9fr_1.35fr]">
        <div className="rounded-3xl    p-6 ">
          <p className="text-xs uppercase tracking-[0.18em] text-white/60">Our Workflow</p>
          <h2 className="mt-4 text-4xl font-extrabold leading-tight text-white md:text-5xl">
            <span className="text-cyan-300">2D &amp; 3D animation</span>
            <br />
            production process
          </h2>
          <p className="mt-5 text-xs leading-6 text-white/70 md:text-sm">
            2D and 3D animation require precision, planning, and a clear creative
            vision. Our production process is designed to stay efficient without
            sacrificing quality.
          </p>

          <div className="relative hidden lg:block mt-8 h-[360px] overflow-hidden rounded-2xl border border-cyan-300/20 bg-[#0a2233]">
            <img
              src="/preview.png"
              alt="Workflow visual placeholder"
             
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>
        </div>

        <div className="relative rounded-3xl border border-cyan-300/20 bg-[#0a1f31]/80 shadow-[0_0_45px_rgba(34,211,238,0.12)]">
          <div className="pointer-events-none absolute bottom-4 left-0 top-4 w-[2px] bg-cyan-300/35" />

          <div
            dir="rtl"
            className="max-h-[640px] overflow-y-auto pr-2 [scrollbar-color:#2dd4bf_#0c2335] [scrollbar-width:thin]"
          >
            <div dir="ltr" className="pl-4 ">
              {workflowItems.map((item) => {
                const isOpen = openId === item.id;
                return (
                  <article
                    key={item.id}
                    className="w-full border-b border-cyan-300/20 last:border-b-0 "
                  >
                    <button
                      type="button"
                      onClick={() => setOpenId(isOpen ? 0 : item.id)}
                      className="flex w-full min-h-[86px] items-center justify-between gap-4 px-5 py-6 text-left"
                    >
                      <div className="flex items-center gap-4">
                        <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl  bg-linear-to-br from-[#0B1F2A] to-[#266A90] text-cyan-200 shadow-[0_0_10px_#46B6A080]">
                          {item.id}
                        </span>
                        <h3 className="text-lg font-bold text-white md:text-xl">{item.title}</h3>
                      </div>
                      <span className="text-cyan-200 transition-transform duration-300 ease-out">
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>

                    <div
                      className={`grid transition-all duration-400 ease-out ${
                        isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="max-w-2xl px-5 pb-6 pl-[92px] text-sm leading-7 text-white/80">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
