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
        className="w-5 h-5 sm:w-6 sm:h-6"
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
        className="w-5 h-5 sm:w-6 sm:h-6"
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
        className="w-5 h-5 sm:w-6 sm:h-6"
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
  const parallaxImgRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Use Intersection Observer for step fade-ins
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


    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      // Direct scroll listener for Desktop
      const handleScroll = () => {
        if (rafRef.current) cancelAnimationFrame(rafRef.current);

        rafRef.current = requestAnimationFrame(() => {
          if (!sectionRef.current || !parallaxImgRef.current) return;

          const rect = sectionRef.current.getBoundingClientRect();
          const viewportHeight = window.innerHeight;
          const sectionTop = rect.top;
          const sectionBottom = rect.bottom;

          if (sectionBottom < 0 || sectionTop > viewportHeight) return;

          let progress = 0;
          if (sectionTop < viewportHeight && sectionBottom > 0) {
            progress = (viewportHeight - sectionTop) / (viewportHeight + rect.height);
            progress = Math.max(0, Math.min(1, progress));
          }

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

      // Pin animation for Desktop
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

      return () => {
        window.removeEventListener("scroll", handleScroll);
        if (rafRef.current) cancelAnimationFrame(rafRef.current);
      };
    });

    return () => {
      observer.disconnect();
      mm.revert(); // این تمام اسکرول‌ترایگرها و ایونت‌های مربوط به matchMedia رو کلین‌آپ می‌کنه
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-16 sm:py-20 lg:py-24 overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        
        {/* 🔴 موبایل: وسط‌چین / دسکتاپ: چپ‌چین */}
        <div className="mb-12 sm:mb-16 lg:mb-20 max-w-3xl flex flex-col items-center text-center lg:items-start lg:text-left mx-auto lg:mx-0">
          <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4 font-semibold uppercase tracking-widest">
            Our Creative Process
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 sm:mb-6 leading-[1.15] tracking-tight">
            From idea to impact — here&rsquo;s how your project comes to life.
          </h2>
          <p className="text-gray-400 text-sm sm:text-base lg:text-lg leading-relaxed max-w-xl">
            Every project starts with understanding the story behind it — the
            message, the audience, and the vision. We explore ideas, study
            visual trends, and craft experiences that don&rsquo;t just look
            beautiful, but communicate meaning and move people.
          </p>
        </div>

        <div
          ref={gridContainerRef}
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 relative items-start"
        >
          {/* 🔴 فاصله‌ی عمودی بین کارت‌ها در موبایل کمتر شد (space-y-12) */}
          <div className="space-y-10 sm:space-y-16 lg:space-y-32 lg:pb-32">
            {PROCESS_STEPS.map((step) => (
              <div key={step.id} className="process-step will-change-transform">
                <div className="relative p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-card hover:border-white/30 transition-all duration-300 group shadow-lg">
                  
                  {/* بج دکوری */}
                  <div className="absolute step-bg top-5 right-5 sm:top-8 sm:right-8 text-[10px] sm:text-xs font-bold px-3 py-1 sm:py-1.5 rounded-full">
                    {step.step}
                  </div>

                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-[14px] sm:rounded-2xl di-bg flex items-center justify-center mb-5 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                    {step.icon}
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
                    {step.title}
                  </h3>

                  <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8">
                    {step.description}
                  </p>

                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    {step.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-[#122E3E] text-gray-300 text-[11px] sm:text-sm border border-white/5 hover:border-foreground/30 transition-colors duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-br from-foreground/0 via-foreground/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl sm:rounded-3xl pointer-events-none" />
                </div>
              </div>
            ))}
          </div>

          {/* ===== Pinned Parallax (Desktop Only) ===== */}
          <div className="hidden lg:block relative h-full">
            <div
              ref={pinRef}
              className="w-full h-[600px] flex items-center justify-center will-change-transform"
            >
              <div className="relative w-full h-full">
                <div ref={parallaxImgRef} className="absolute inset-0 will-change-transform">
                  <img src="/svg-parts/home/backline.svg" alt="" className="absolute inset-0 w-full h-full object-contain" style={{ zIndex: 1 }} />
                  <img src="/svg-parts/home/main.svg" alt="Process Visualization" className="absolute inset-0 w-full h-full object-contain" style={{ zIndex: 2 }} />
                  <img src="/svg-parts/home/3.svg" alt="" className="absolute inset-0 w-full h-full object-contain" style={{ zIndex: 3 }} />
                  <img src="/svg-parts/home/4.svg" alt="" className="absolute inset-0 w-full h-full object-contain" style={{ zIndex: 4 }} />
                  <img src="/svg-parts/home/5.svg" alt="" className="absolute inset-0 w-full h-full object-contain" style={{ zIndex: 5 }} />
                  <img src="/svg-parts/home/6.svg" alt="" className="absolute inset-0 w-full h-full object-contain" style={{ zIndex: 6 }} />
                  <img src="/svg-parts/home/7.svg" alt="" className="absolute inset-0 w-full h-full object-contain" style={{ zIndex: 7 }} />
                  <img src="/svg-parts/home/8.svg" alt="" className="absolute inset-0 w-full h-full object-contain" style={{ zIndex: 8 }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}