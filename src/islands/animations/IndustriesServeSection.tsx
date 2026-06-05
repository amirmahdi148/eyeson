"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const items = [
  {
    title: "3D Product Visuals",
    description:
      "High-end 3D renders and animations designed to showcase products with cinematic\n" +
        "lighting, depth, realism, and premium visual presentation.",
    image: "/hero-card/5.webp",
  },
  {
    title: "2D Motion Design",
    description:
      "Modern motion graphics and animated visuals for websites, SaaS products, presentations,\n" +
        "digital campaigns, explainers, and branded storytelling.",
    image: "/hero-card/8.webp",
  },
  {
    title: "Animated Social Media Content",
    description:
      "Short-form animated content built for Instagram, TikTok, Reels, Shorts, YouTube, ads, and\n" +
        "modern social media campaigns focused on engagement and brand growth.",
    image: "/hero-card/6.webp",
  },
];

function ArrowButton({ direction }: { direction: "left" | "right" }) {
  return (
    <button
      type="button"
      aria-label={direction === "left" ? "Previous" : "Next"}
      className="hidden h-10 w-10 items-center justify-center rounded-full border border-cyan-300/25 bg-cyan-200/10 text-cyan-100 lg:flex"
    >
      <svg
        className="h-4 w-4"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        {direction === "left" ? (
          <path d="M15 18l-6-6 6-6" />
        ) : (
          <path d="M9 18l6-6-6-6" />
        )}
      </svg>
    </button>
  );
}

export default function IndustriesServeSection({
  smallLabel = "ANIMATION SERVICES",
}: {
  smallLabel?: string;
}) {
  return (
    <section className="relative w-full overflow-hidden px-6 pb-24 pt-10 lg:px-16">
      <div className="absolute inset-0 w-full! bg-cover bg-no-repeat pointer-events-none overflow-hidden bg">
        <div className="absolute top-1/12 -left-50 w-150 h-150 bg-foreground/10 rounded-full blur-[120px]" />

        <div className="absolute top-1/24 -right-50 w-150 h-150 bg-foreground/10 rounded-full blur-[120px]" />
      </div>
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs uppercase tracking-[0.18em] text-white/60">
            {smallLabel}
          </p>
          <h2 className="mt-3 text-4xl font-extrabold leading-tight text-white md:text-5xl">
            <span className="text-cyan-300">2D &amp; 3D</span> Animation

            <br />

            Built for Modern Digital Content
          </h2>
          <p className="mt-5 text-sm leading-7 text-white/65 md:text-base">
            From cinematic 3D visuals and product animations to motion graphics and animated
            social media content, we create visuals designed to help brands communicate more
            clearly, attract attention faster, and build a stronger digital presence across modern
            platforms.
          </p>
        </div>

        <div className="relative mt-10">
          <div className="pointer-events-none absolute left-0 right-0 top-1/2 -z-0">
            <div className="h-[2px] w-full bg-linear-to-r from-[#00222600] via-[#00A9BD] to-[#00222600]" />
            <div className="mx-auto mt-1 h-20 w-4/5 rounded-full bg-[#00A9BD]/20 blur-3xl" />
          </div>

          <div className="relative z-10 md:hidden">
            <Swiper
              modules={[Pagination]}
              slidesPerView={1}
              spaceBetween={14}
              pagination={{ clickable: true }}
              className="w-full pb-8"
            >
              {items.map((item) => (
                <SwiperSlide key={`${item.title}-mobile`} className="!h-auto">
                  <article className="h-full w-full rounded-3xl border border-cyan-300/25 bg-[#081b2b]/80 p-2 shadow-[0_0_34px_rgba(34,211,238,0.12)]">
                    <div className="relative h-56 overflow-hidden rounded-2xl">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="object-cover"
                        sizes="90vw"
                      />
                    </div>
                    <div className="p-3 pb-4">
                      <h3 className="text-3xl font-bold text-white">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-7 text-white/65">
                        {item.description}
                      </p>
                    </div>
                  </article>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="relative z-10 hidden items-center gap-4 md:grid lg:grid-cols-[auto_minmax(0,1fr)_auto]">
            <div className="flex justify-center">
              <ArrowButton direction="left" />
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {items.map((item) => (
                <article
                  key={item.title}
                  className="h-full rounded-3xl border border-cyan-300/25 bg-[#081b2b]/80 p-2 shadow-[0_0_34px_rgba(34,211,238,0.12)]"
                >
                  <div className="relative h-56 overflow-hidden rounded-2xl">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-3 pb-4">
                    <h3 className="text-3xl font-bold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-white/65">
                      {item.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            <div className="flex justify-center">
              <ArrowButton direction="right" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
