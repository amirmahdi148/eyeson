import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";

type Pack = {
  id: number;
  name: string;
  videos: string;
  price: string;
  subtitle: string;
  includes: string[];
  bestFor: string[];
  cta: string;
  featured?: boolean;
  highlight?: string;
};

const packs: Pack[] = [
  {
    id: 1,
    name: "Starter Editing Pack",
    videos: "10 Edited Videos",
    price: "€350",
    subtitle: "/Starting at",
    includes: [
      "Hook optimization",
      "Subtitles & captions",
      "Color correction & grading",
      "Clean cuts & pacing",
    ],
    bestFor: ["Creators", "Personal brands", "Testing content"],
    cta: "Order Now",
  },
  {
    id: 2,
    name: "Growth Editing Pack",
    videos: "Show how your product works - step by step.",
    price: "€650",
    subtitle: "/Starting at",
    includes: [
      "Advanced hook optimization",
      "Subtitles & captions",
      "Color grading + style consistency",
      "B-roll integration",
    ],
    bestFor: [],
    cta: "Order Now",
    featured: true,
    highlight: "Most Popular",
  },
  {
    id: 3,
    name: "Creator Pro Pack",
    videos: "30 Edited Videos / Month",
    price: "€950",
    subtitle: "/Starting at",
    includes: [
      "Performance-focused hooks",
      "Premium subtitles & captions",
      "Advanced color grading",
      "B-roll & dynamic pacing",
    ],
    bestFor: ["Full-time creators", "Content-heavy brands"],
    cta: "Get Started",
  },
];

export default function VideoPackagesSection() {
  const [activeMobileSlide, setActiveMobileSlide] = useState(1);

    return (
        
    <section className="overflow-x-hidden px-4 pb-20 pt-14 sm:px-6 lg:px-20 lg:pb-24">
      <div className="mx-auto w-full max-w-7xl">
        <div className="mx-auto w-full max-w-3xl text-center md:hidden">
          <h2 className="text-3xl font-bold leading-[1.08] sm:text-[40px]">
            <span className="text-[#2fcfca]">Flexible Motion Packages</span>
            <br />
            <span className="text-white">Every motion project is different.</span>
          </h2>
          <p className="mt-5 text-sm leading-7 text-[#c4d6de]">
            That&apos;s why we offer flexible engagement models designed to fit
            your goals, scope, and stage of growth.
          </p>
        </div>

        <div className="mx-auto hidden w-full max-w-4xl text-center md:block">
          <h2 className="text-4xl font-bold leading-tight md:text-6xl">
            <span className="text-[#2fcfca]">Flexible Video Editing Packages</span>
            <br />
            <span className="text-white">Every motion project is different.</span>
          </h2>
          <p className="mt-5 text-sm leading-7 text-[#c4d6de] md:text-base">
            Every content strategy is different. That&apos;s why we offer flexible
            editing packages designed to fit your volume, goals, and growth stage.
          </p>
        </div>

        <div className="mt-10 pb-3 md:hidden">
          <Swiper
            modules={[Pagination]}
            slidesPerView={1.02}
            centeredSlides
            centeredSlidesBounds
            spaceBetween={10}
            initialSlide={1}
            breakpoints={{
              360: { slidesPerView: 1.06, spaceBetween: 12 },
              420: { slidesPerView: 1.08, spaceBetween: 14 },
            }}
            onSlideChange={(swiper) => setActiveMobileSlide(swiper.realIndex)}
            className="!overflow-visible"
          >
            {packs.map((pack) => (
              <SwiperSlide key={`mobile-${pack.id}`} className="!h-auto">
                <article
                  className={`relative flex h-full flex-col justify-between rounded-3xl px-4 pb-4 pt-10 sm:px-5 ${
                    pack.featured
                      ? "pt-12 border-2 border-[#1F5046] shadow-[0_0_22px_rgba(53,207,202,0.35)]"
                      : "border border-[#144e62] bg-linear-to-b from-[#0B1F2A] to-[#15393E]"
                  }`}
                  style={
                    pack.featured
                      ? {
                          backgroundImage: "url('/video-pieces/Featured-One.png')",
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }
                      : undefined
                  }
                >
                  {pack.featured && pack.highlight ? (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full border border-[#66f0e6] bg-linear-to-r from-[#2F907F] to-[#033D4D] px-4 py-1 text-sm font-semibold text-[#e8ffff]">
                      {pack.highlight}
                    </div>
                  ) : null}

                  <h3 className="bg-linear-to-r from-[#46B6A0] to-[#00A9BD] bg-clip-text text-[30px] font-bold leading-none text-transparent sm:text-[34px]">
                    {pack.name}
                  </h3>
                  <p className="mt-2 text-lg text-[#d5e3e8]">{pack.videos}</p>

                  <div className="mt-4 flex items-end gap-2">
                    <span className="text-4xl font-extrabold text-white sm:text-5xl">
                      {pack.price}
                    </span>
                    <span className="pb-2 text-sm text-[#d5e3e8]">{pack.subtitle}</span>
                  </div>

                  {pack.featured ? (
                    <div className="mt-4 inline-flex rounded-full bg-[#174050] px-4 py-1 text-sm text-[#e7fcff]">
                      Better ROI than one-off videos
                    </div>
                  ) : null}

                  {pack.featured ? (
                    <ul className="mt-6 space-y-3 text-sm text-[#d6e4ea]">
                      {pack.includes.map((item) => (
                        <li>
                          <span className="text-[#35e4d8] leading-none">✓</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <div className="mt-5 rounded-2xl bg-[#FFFFFF0D] p-4">
                      <p className="text-xl font-bold text-white">Includes:</p>
                      <ul className="mt-3 space-y-2 text-sm text-[#d6e4ea]">
                        {pack.includes.map((item) => (
                          <li key={item} className="flex items-center gap-2">
                            <span className="text-[#35e4d8]">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {pack.bestFor.length > 0 ? (
                    <div className="mt-5">
                      <p className="text-lg font-semibold text-white">Best for:</p>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {pack.bestFor.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-[#2f6e81] bg-[#0B1F2A99] px-3 py-1 text-xs text-[#d2e2e9]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  ) : null}

                  <div className="flex items-center justify-center">
                    <button
                      className={`mt-6 w-[160px] border px-4 py-2 text-sm font-semibold text-white transition cursor-pointer ${
                        pack.featured
                          ? "border-[#61f4e8] bg-linear-to-l from-[#033D4D] to-[#2F907F] shadow-[0_0_19px_#46B6A080] rounded-[90px]"
                          : "border-[#46B6A0] border-[0.3px] bg-[#0B1F2A] rounded-xl"
                      }`}
                    >
                      {pack.featured ? "Get Motion Pack" : pack.cta}
                    </button>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="mt-2 flex items-center justify-center gap-2 md:hidden">
          {packs.map((pack, index) => (
            <span
              key={`dot-${pack.id}`}
              className={`h-2.5 w-2.5 rounded-full ${
                index === activeMobileSlide ? "bg-[#1fd5d8]" : "bg-[#2a4f58]"
              }`}
            />
          ))}
        </div>

        <div className="mt-12 hidden h-[610px] w-full items-end justify-center gap-6 md:flex">
          {packs.map((pack) => (
            <article
              key={pack.id}
              className={`relative flex flex-col justify-between rounded-3xl px-5 pb-[16px] pt-10 ${
                pack.featured
                  ? "pt-12 border-3 border-[#1F5046] h-full w-[500px] shadow-[0_0_22px_rgba(53,207,202,0.35)]"
                  : "border border-[#144e62] bg-linear-to-b from-[#0B1F2A] to-[#15393E] w-[400px]"
              }`}
              style={
                pack.featured
                  ? {
                      backgroundImage: "url('/video-pieces/Featured-One.png')",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }
                  : undefined
              }
            >
              {pack.featured && pack.highlight ? (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full border border-[#66f0e6] bg-linear-to-r from-[#2F907F] to-[#033D4D] px-5 py-1 text-lg font-semibold text-[#e8ffff]">
                  {pack.highlight}
                </div>
              ) : null}

              <h3 className="bg-linear-to-r from-[#46B6A0] to-[#00A9BD] bg-clip-text text-3xl font-bold text-transparent">
                {pack.name}
              </h3>
              <p className="mt-2 text-xl text-[#d5e3e8]">{pack.videos}</p>

              <div className="mt-4 flex items-end gap-2">
                <span className="text-4xl font-extrabold text-white">{pack.price}</span>
                <span className="pb-1 text-sm text-[#d5e3e8]">{pack.subtitle}</span>
              </div>

              {pack.featured ? (
                <div className="mt-4 inline-flex rounded-full bg-[#174050] px-4 py-1 text-sm text-[#e7fcff]">
                  Better ROI than one-off videos
                </div>
              ) : null}

              {pack.featured ? (
                <ul className="mt-6 space-y-3 text-sm text-[#d6e4ea]">
                  {pack.includes.map((item) => (
                    <li>
                      <span className="text-[#35e4d8] leading-none">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="mt-5 rounded-2xl bg-[#FFFFFF0D] p-4">
                  <p className="text-3xl font-bold text-white">Includes:</p>
                  <ul className="mt-3 space-y-2 text-sm text-[#d6e4ea]">
                    {pack.includes.map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <span className="text-[#35e4d8]">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {pack.bestFor.length > 0 ? (
                <div className="mt-5">
                  <p className="text-2xl font-semibold text-white">Best for:</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {pack.bestFor.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-[#2f6e81] bg-[#0B1F2A99] px-3 py-1 text-xs text-[#d2e2e9]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ) : null}

              <div className="flex items-center justify-center">
                <button
                  className={`mt-6 w-[131px] border px-4 py-2 text-sm font-semibold text-white transition cursor-pointer ${
                    pack.featured
                      ? "border-[#61f4e8] bg-linear-to-l from-[#033D4D] to-[#2F907F] shadow-[0_0_19px_#46B6A080] rounded-[90px]"
                      : "border-[#46B6A0] border-[0.3px] bg-[#0B1F2A] rounded-xl"
                  }`}
                >
                  {pack.cta}
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
