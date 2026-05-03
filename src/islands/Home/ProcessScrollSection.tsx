"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import "./ProcessScrollSection.css";

const PROCESS_STEPS = [
  {
    id: 1,
    step: "Step 1",
    icon: (
      <svg
        className="w-6 h-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M9 3v18M15 3v18M3 9h18M3 15h18" />
      </svg>
    ),
    title: "Concept & Brief",
    description:
      "We start by understanding your vision. You share your goals, style, and references — we shape a creative direction that fits your brand.",
    tags: ["Discovery", "Moodboard", "Creative Brief"],
  },
  {
    id: 2,
    step: "Step 2",
    icon: (
      <svg
        className="w-6 h-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
    title: "Design & Production",
    description:
      "Our team brings ideas to motion. We design visuals, craft motion graphics, or edit your video with precision and storytelling in mind.",
    tags: ["Design", "Animation", "Editing"],
  },
  {
    id: 3,
    step: "Step 3",
    icon: (
      <svg
        className="w-6 h-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
      </svg>
    ),
    title: "Review & Delivery",
    description:
      "You review, request adjustments, and approve the final version. Once perfected, we deliver your files — ready to impress and perform.",
    tags: ["Feedback", "Finalization", "Delivery"],
  },
];

export default function ProcessScrollSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridContainerRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const parallaxImgRef = useRef<HTMLImageElement>(null);
  const rafRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Use Intersection Observer for step fade-ins (no scroll flicker)
    const observerOptions = {
      threshold: 0.15,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
        }
      });
    }, observerOptions);

    const steps = document.querySelectorAll(".process-step");
    steps.forEach((step) => observer.observe(step));

    // Direct scroll listener with RAF for precise parallax control
    const handleScroll = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);

      rafRef.current = requestAnimationFrame(() => {
        if (!sectionRef.current || !parallaxImgRef.current) return;

        const rect = sectionRef.current.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        const sectionTop = rect.top;
        const sectionBottom = rect.bottom;

        // Only apply parallax when section is fully or partially visible
        if (sectionBottom < 0 || sectionTop > viewportHeight) {
          return;
        }

        // Calculate normalized progress (0 to 1) based on section position in viewport
        let progress = 0;
        if (sectionTop < viewportHeight && sectionBottom > 0) {
          // Section is visible
          progress = (viewportHeight - sectionTop) / (viewportHeight + rect.height);
          progress = Math.max(0, Math.min(1, progress)); // Clamp to 0-1
        }

        // Parallax range: from -12 to 12 (limited movement)
        const yOffset = (progress - 0.5) * 24;
        const scale = 1 + progress * 0.04;

        gsap.set(parallaxImgRef.current, {
          y: yOffset,
          scale: scale,
          overwrite: "auto",
        });
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    // Pin animation with ScrollTrigger
    const ctx = gsap.context(() => {
      if (gridContainerRef.current && pinRef.current) {
        ScrollTrigger.create({
          trigger: gridContainerRef.current,
          start: "top top+=128",
          end: "bottom bottom-=32",
          pin: pinRef.current,
          pinSpacing: false,
          anticipatePin: 1,
          fastScrollEnd: true,
        });
      }
    }, sectionRef);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      observer.disconnect();
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative  py-24 overflow-hidden"
    >
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="mb-20 max-w-3xl">
          <p className="text-gray-400 text-sm mb-4">Our Creative Process</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            From idea to impact — here&rsquo;s how your project comes to life.
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            Every project starts with understanding the story behind it — the
            message, the audience, and the vision. We explore ideas, study
            visual trends, and craft experiences that don&rsquo;t just look
            beautiful, but communicate meaning and move people.
          </p>
        </div>

        <div
          ref={gridContainerRef}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative items-start"
        >
          <div className="space-y-32 pb-32">
            {PROCESS_STEPS.map((step) => (
              <div key={step.id} className="process-step will-change-transform">
                <div className="relative p-8 rounded-3xl bg-card hover:border-white/30 transition-all duration-300 group">
                  <div className="absolute step-bg top-8 right-8 text-xs font-semibold  px-3 py-1.5 rounded-full">
                    {step.step}
                  </div>

                  <div className="w-14 h-14 rounded-2xl di-bg  flex items-center justify-center  mb-6 group-hover:scale-110 transition-transform duration-300">
                    {step.icon}
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4">
                    {step.title}
                  </h3>

                  <p className="text-gray-400 text-base leading-relaxed mb-8">
                    {step.description}
                  </p>

                  <div className="flex flex-wrap gap-3">
                    {step.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-2 rounded-full bg-[#122E3E] text-gray-300 text-sm border border-white/5 hover:border-foreground/30 transition-colors duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-br from-foreground/0 via-foreground/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl pointer-events-none" />
                </div>
              </div>
            ))}
          </div>

          <div className="hidden lg:block relative h-full">
            <div
              ref={pinRef}
              className="w-full h-[600px] flex items-center justify-center will-change-transform"
            >
              <div className="absolute inset-0  rounded-full transform scale-75 pointer-events-none" />

              <div className="relative w-full h-full rounded-[40px]  ">
                <img
                  ref={parallaxImgRef}
                  src="/home/process.png"
                  alt="Process Visualization"
                  className="w-full h-full object-contain scale-75 will-change-transform"
                />
              </div>

              <div className="absolute -right-8 top-1/4 bg-[#0f172a]/90 p-3 rounded-xl border border-white/10 shadow-xl max-w-[150px] z-10">
                <div className="text-sm text-white font-semibold">
                  Process focus
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
