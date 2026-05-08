import { useEffect, useRef, useState } from "react";
import { SmartImage } from "../../../utils/SmartImage.tsx";

const STEPS = [
  {
    id: 1,
    image: "/video-pieces/slide1.jpg",
    title: "Faster Understanding",
    subtitle: "Understand in Seconds. Not Minutes.",
    description:
      "Most users decide in the first 20-30 seconds whether your product is worth their time. A structured product video removes friction instantly and shows what your product does, why it matters, and how it works.",
  },
  {
    id: 2,
    image: "/animation-section/3D.jpg",
    title: "Higher Landing Page Conversion",
    subtitle: "Clarity Removes Hesitation.",
    description:
      "Confusion creates doubt. Doubt kills conversions. A well-crafted explainer aligns messaging, visuals, and value into one clear narrative so people instantly move from curiosity to action.",
  },
  {
    id: 3,
    image: "/animation-section/motion.jpg",
    title: "Shorter Sales Calls",
    subtitle: "Less Explaining. More Closing.",
    description:
      "Instead of repeating the same 15-minute explanation in every sales conversation, use one video to educate upfront. Better pre-qualified leads. Faster close cycles.",
  },
  {
    id: 4,
    image: "/animation-section/video.jpg",
    title: "Stronger Brand Perception",
    subtitle: "Professional Motion Builds Trust.",
    description:
      "High-quality visual storytelling signals confidence and credibility. People trust products they understand and remember brands that communicate clearly.",
  },
];

const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max);

export const ConversionScroll = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let rafId = 0;
    const updateProgress = () => {
      const element = sectionRef.current;
      if (!element) return;
      const rect = element.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const start = viewportHeight * 0.15;
      const total = rect.height - viewportHeight * 0.35;
      const next = clamp((start - rect.top) / total, 0, 1);
      setProgress(next);
    };
    const onScroll = () => {
      if (rafId) return;
      rafId = window.requestAnimationFrame(() => {
        updateProgress();
        rafId = 0;
      });
    };
    updateProgress();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      if (rafId) window.cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative z-10 mx-auto block w-full max-w-[920px] px-4 pb-24 pt-5">
      <h2 className="text-center text-white text-2xl md:text-3xl font-black mb-12">
        Why <span className="text-[#1FC5C8]">Product Videos</span> increase conversion
      </h2>

      {/* Desktop version */}
      <div className="relative hidden lg:block">
        <div className="pointer-events-none absolute left-1/2 top-0 h-full -translate-x-1/2">
          <div className="relative h-full w-[4px] rounded-full bg-[#0D3444]">
            <div
              className="absolute left-0 top-0 w-full rounded-full bg-gradient-to-b from-[#24D6D2] to-[#0FA8C4] transition-[height] duration-200"
              style={{ height: `${progress * 100}%` }}
            />
            <div
              className="absolute left-1/2 h-4 w-4 -translate-x-1/2 rounded-full border border-[#65E6E3] bg-[#1FC5C8] shadow-[0_0_20px_rgba(31,197,200,0.8)] transition-[top] duration-200"
              style={{ top: `calc(${progress * 100}% - 8px)` }}
            />
          </div>
        </div>
        <div className="space-y-10 md:space-y-12">
          {STEPS.map((step, index) => {
            const segment = 1 / STEPS.length;
            const segmentStart = index * segment;
            const offset = 0.25; // faster activation on desktop
            const stepProgress = clamp((progress - segmentStart + offset) / segment, 0, 1);
            const isActive = stepProgress > 0;
            const imageOffset = (1 - stepProgress) * -220;
            const textOffset = (1 - stepProgress) * 220;

            return (
              <div key={step.id} className="grid grid-cols-1 items-center gap-5 lg:grid-cols-[1fr_90px_1fr]">
                <div
                  className={`overflow-hidden rounded-2xl border transition-all duration-500 ${
                    isActive ? "border-[#37D0CD] shadow-[0_0_35px_rgba(55,208,205,0.25)]" : "border-[#194356]"
                  }`}
                  style={{
                    transform: `translate3d(${imageOffset}px, 0, 0)`,
                    opacity: 0.2 + stepProgress * 0.8,
                    willChange: "transform, opacity",
                  }}
                >
                  <SmartImage
                    src={step.image}
                    alt={step.title}
                    width={860}
                    height={520}
                    className={`h-[150px] w-full object-cover transition-all duration-500 md:h-[170px] ${
                      isActive ? "scale-100" : "scale-[0.98]"
                    }`}
                  />
                </div>
                <div className="hidden lg:block" />
                <article
                  className={`rounded-2xl border bg-[#0A1C29]/85 p-5 backdrop-blur-sm transition-all duration-500 ${
                    isActive ? "border-[#1FC5C8] shadow-[0_0_30px_rgba(31,197,200,0.18)]" : "border-[#14384B]"
                  }`}
                  style={{
                    transform: `translate3d(${textOffset}px, 0, 0)`,
                    opacity: 0.2 + stepProgress * 0.8,
                    willChange: "transform, opacity",
                  }}
                >
                  <h3 className="text-[#1FC5C8] text-xl font-black">{step.id}. {step.title}</h3>
                  <h4 className="mt-2 text-white text-lg font-semibold">{step.subtitle}</h4>
                  <p className="mt-3 text-white/70 text-base leading-6">{step.description}</p>
                </article>
              </div>
            );
          })}
        </div>
      </div>

      {/* Mobile version – only cards, no images, no progress bar */}
      <div className="relative lg:hidden">
        <div className="space-y-10 md:space-y-12">
          {STEPS.map((step, index) => {
            const segment = 1 / STEPS.length;
            const segmentStart = index * segment;
            const offset = 0.1; // slightly increased activation offset for mobile
            const stepProgress = clamp((progress - segmentStart + offset) / segment, 0, 1);
            const isActive = stepProgress > 0;
            const textOffset = (1 - stepProgress) * 220;

            return (
              <article
                key={step.id}
                className={`rounded-2xl border bg-[#0A1C29]/85 p-5 backdrop-blur-sm transition-all duration-500 ${
                  isActive ? "border-[#1FC5C8] shadow-[0_0_30px_rgba(31,197,200,0.18)]" : "border-[#14384B]"
                }`}
                style={{
                  transform: `translate3d(${textOffset}px, 0, 0)`,
                  opacity: 0.2 + stepProgress * 0.8,
                  willChange: "transform, opacity",
                }}
              >
                <h3 className="text-[#1FC5C8] text-xl font-black">{step.id}. {step.title}</h3>
                <h4 className="mt-2 text-white text-lg font-semibold">{step.subtitle}</h4>
                <p className="mt-3 text-white/70 text-base leading-6">{step.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
