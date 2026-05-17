"use client";

import { useEffect, useRef } from "react";

type CardItem = {
  label: string;
  imageUrl: string;
};

const items: CardItem[] = [
  {
    label: "Lottie Animation",
    imageUrl: "/case/rframe.webp",
  },
  {
    label: "UI Animation",
    imageUrl: "/case/lframe.webp",
  },
  {
    label: "Branded motion",
    imageUrl: "/case/b1f.webp",
  },
  {
    label: "UI Animation",
    imageUrl: "/case/b2f.webp",
  },
  {
    label: "Lottie Animation",
    imageUrl: "/case/b3f.webp",
  },
];

export default function VisualProofSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const cards = Array.from(el.querySelectorAll<HTMLElement>("[data-reveal]"));

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -50px 0px" },
    );

    cards.forEach((c) => io.observe(c));
    return () => io.disconnect();
  }, []);

  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24">
      <style
        dangerouslySetInnerHTML={{
          __html: `
        [data-reveal] {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.7s cubic-bezier(0.2, 0.8, 0.2, 1), transform 0.7s cubic-bezier(0.2, 0.8, 0.2, 1);
        }
        [data-reveal].is-visible {
          opacity: 1;
          transform: translateY(0);
        }
      `,
        }}
      />

      <div
        ref={containerRef}
        className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center">
          <h2 className="text-[28px] font-black leading-tight tracking-tight text-cyan-300 sm:text-[34px] lg:text-[38px]">
            Visual Proof
          </h2>
          <p className="mt-2 text-[15px] text-white/70 sm:text-base">
            Built to explain. Designed to convert.
          </p>
        </div>

        {/* گرید 3 ستونه */}
        <div className="mt-12 grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-3">
          {items.map((item, index) => {
            const isWide = index === 0; // کارت اول دو ستون میگیره
            const isTopRow = index < 2; // دو کارت اول ردیف بالا هستن

            return (
              <article
                key={index}
                data-reveal
                style={{ transitionDelay: `${index * 0.1}s` }}
                className={`group relative overflow-hidden rounded-[20px] border border-white/10 bg-[#071a21] shadow-lg transition-colors hover:border-cyan-400/40
                  ${isWide ? "md:col-span-2" : "md:col-span-1"}
                  ${isTopRow ? "min-h-[280px] sm:min-h-[340px] lg:min-h-[420px]" : "min-h-[220px] sm:min-h-[240px] lg:min-h-[280px]"}
                `}
              >
                <img
                  src={item.imageUrl}
                  alt={item.label}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                <div className="absolute bottom-4 left-4 rounded-full border border-white/20 bg-black/60 px-3.5 py-1.5 text-[11px] font-medium tracking-wide text-white/90 backdrop-blur-md">
                  {item.label}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
