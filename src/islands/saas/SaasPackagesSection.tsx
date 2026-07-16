import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";

type VolumePricing = {
  threshold: string;
  discount: string;
};

type Pack = {
  id: number;
  name: string;
  subtitle: string;
  price: string;
  includes: string[];
  bestFor: string;
  volumePricing: VolumePricing[] | string;
  cta: string;
  featured?: boolean;
  highlight?: string;
};

const packs: Pack[] = [
  {
    id: 1,
    name: "Explainer & Feature Demos",
    subtitle: "Clear visual storytelling for core features",
    price: "Starting from $3,500",
    includes: [
      "Product UI animation",
      "Scriptwriting & storyboard",
      "Professional voiceover",
      "Sound design & pacing",
      "Platform-ready exports",
      "Brand-aligned visuals",
    ],
    bestFor: "Core product explainers · Feature walk-throughs · Onboarding videos",
    volumePricing: [
      { threshold: "3+ videos", discount: "15% OFF" },
      { threshold: "5+ videos", discount: "25% OFF" },
    ],
    cta: "Book a Call",
  },
  {
    id: 2,
    name: "Launch Campaigns",
    subtitle: "High-impact creative for product launches",
    price: "Starting from $6,000",
    includes: [
      "Launch trailer / Promo video",
      "Social media cutdowns",
      "Ad creative variations",
      "Landing page assets",
      "Advanced motion graphics",
      "Music & sound effects",
    ],
    bestFor: "Major feature releases · New product launches · Marketing campaigns",
    volumePricing: [
      { threshold: "Multiple campaigns", discount: "Custom pricing" },
    ],
    cta: "Book a Call",
    featured: true,
    highlight: "Most Popular",
  },
  {
    id: 3,
    name: "Ongoing Creative Pipeline",
    subtitle: "For continuous product and marketing support",
    price: "Starting from $4,500/mo",
    includes: [
      "Dedicated creative partner",
      "Monthly asset deliverables",
      "Iterative ad creatives",
      "Consistent brand voice",
      "Fast turnaround times",
      "Flexible priorities",
    ],
    bestFor: "Growing SaaS teams · Performance marketing · Continuous feature releases",
    volumePricing: "Custom retainer sizes available",
    cta: "Book a Call",
  },
];

export default function SaasPackagesSection() {
  const [activeMobileSlide, setActiveMobileSlide] = useState(1);

  return (
    <section className="overflow-x-hidden px-4 pb-20 pt-14 sm:px-6 lg:px-20 lg:pb-24">
      <div className="mx-auto w-full max-w-7xl">
        <div className="mx-auto w-full max-w-3xl text-center">
          <p className="mb-3 text-xs tracking-[0.2em] text-[#c2d3dc]">
            FLEXIBLE PRICING
          </p>
          <h2 className="text-3xl font-bold leading-tight text-white md:text-5xl">
            SaaS Creative Packages Built Around Your Product Needs
          </h2>
          <p className="mt-4 text-sm leading-7 text-[#c3d4de] md:text-base">
            Different growth stages require different creative investments. From one-off feature explainers to ongoing performance marketing assets, our pricing is designed to scale with your product roadmap and marketing goals.
          </p>
          <p className="mt-3 text-sm leading-7 text-[#c3d4de] md:text-base">
            We offer project-based pricing for specific launches, or monthly retainer models for teams that need a steady pipeline of fresh creative assets.
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
                          backgroundImage: "url('/video-pieces/Featured-One.webp')",
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

                  <h3 className="text-[30px] font-bold leading-none text-white sm:text-[34px]">
                    {pack.id === 1 ? (
                      <>Explainer & <span className="text-[#12d6d8]">Feature Demos</span></>
                    ) : pack.id === 2 ? (
                      <><span className="text-[#12d6d8]">Launch</span> Campaigns</>
                    ) : (
                      <><span className="text-[#12d6d8]">Ongoing Creative</span> Pipeline</>
                    )}
                  </h3>
                  <p className="mt-1 text-sm text-[#d5e3e8]">{pack.subtitle}</p>

                  <div className="mt-4">
                    <span className="text-2xl font-extrabold text-white sm:text-3xl">
                      {pack.price}
                    </span>
                  </div>

                  <div className="mt-5 rounded-2xl bg-[#FFFFFF0D] p-4">
                    <p className="text-lg font-bold text-white">Includes</p>
                    <ul className="mt-3 space-y-2 text-sm text-[#d6e4ea]">
                      {pack.includes.map((item) => (
                        <li key={item} className="flex items-center gap-2">
                          <span className="text-[#35e4d8]">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-4">
                    <p className="text-sm font-semibold text-white">Best For</p>
                    <p className="mt-1 text-xs leading-5 text-[#d2e2e9]">
                      {pack.bestFor}
                    </p>
                  </div>

                  <div className="mt-4 rounded-2xl bg-[#FFFFFF0D] p-3">
                    <p className="text-xs font-semibold text-white">Volume Pricing</p>
                    {Array.isArray(pack.volumePricing) ? (
                      <div className="mt-2 space-y-1">
                        {pack.volumePricing.map((vp) => (
                          <div key={vp.threshold} className="flex items-center justify-between text-xs text-[#d2e2e9]">
                            <span>{vp.threshold}</span>
                            <span className="text-[#35e4d8] font-semibold">{vp.discount}</span>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="mt-1 text-xs text-[#d2e2e9]">{pack.volumePricing}</p>
                    )}
                  </div>

                  <div className="flex items-center justify-center">
                    <button
                      className={`mt-6 w-[160px] border px-4 py-2 text-sm font-semibold text-white transition cursor-pointer ${
                        pack.featured
                          ? "border-[#61f4e8] bg-linear-to-l from-[#033D4D] to-[#2F907F] shadow-[0_0_19px_#46B6A080] rounded-[90px]"
                          : "border-[#46B6A0] border-[0.3px] bg-[#0B1F2A] rounded-xl"
                      }`}
                    >
                      {pack.cta}
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

        <div className="mt-12 hidden h-auto w-full items-stretch justify-center gap-6 md:flex">
          {packs.map((pack) => (
            <article
              key={pack.id}
              className={`relative flex flex-col justify-between rounded-3xl px-5 pb-6 pt-10 ${
                pack.featured
                  ? "pt-12 border-3 border-[#1F5046] w-[500px] shadow-[0_0_22px_rgba(53,207,202,0.35)]"
                  : "border border-[#144e62] bg-linear-to-b from-[#0B1F2A] to-[#15393E] w-[400px]"
              }`}
              style={
                pack.featured
                  ? {
                      backgroundImage: "url('/video-pieces/Featured-One.webp')",
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

              <h3 className="text-3xl font-bold text-white">
                {pack.id === 1 ? (
                  <>Explainer & <span className="text-[#12d6d8]">Feature Demos</span></>
                ) : pack.id === 2 ? (
                  <><span className="text-[#12d6d8]">Launch</span> Campaigns</>
                ) : (
                  <><span className="text-[#12d6d8]">Ongoing Creative</span> Pipeline</>
                )}
              </h3>
              <p className="mt-1 text-sm text-[#d5e3e8]">{pack.subtitle}</p>

              <div className="mt-4">
                <span className="text-2xl font-extrabold text-white">{pack.price}</span>
              </div>

              <div className="mt-5 rounded-2xl bg-[#FFFFFF0D] p-4">
                <p className="text-lg font-bold text-white">Includes</p>
                <ul className="mt-3 space-y-2 text-sm text-[#d6e4ea]">
                  {pack.includes.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="text-[#35e4d8]">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-4">
                <p className="text-sm font-semibold text-white">Best For</p>
                <p className="mt-1 text-xs leading-5 text-[#d2e2e9]">
                  {pack.bestFor}
                </p>
              </div>

              <div className="mt-4 rounded-2xl bg-[#FFFFFF0D] p-3">
                <p className="text-xs font-semibold text-white">Volume Pricing</p>
                {Array.isArray(pack.volumePricing) ? (
                  <div className="mt-2 space-y-1">
                    {pack.volumePricing.map((vp) => (
                      <div key={vp.threshold} className="flex items-center justify-between text-xs text-[#d2e2e9]">
                        <span>{vp.threshold}</span>
                        <span className="text-[#35e4d8] font-semibold">{vp.discount}</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="mt-1 text-xs text-[#d2e2e9]">{pack.volumePricing}</p>
                )}
              </div>

              <div className="flex items-center justify-center">
                <button
                  className={`mt-6 w-[160px] border px-4 py-2 text-sm font-semibold text-white transition cursor-pointer ${
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

        <div className="mx-auto mt-16 max-w-3xl text-center">
          <p className="text-sm leading-7 text-[#c3d4de] md:text-base">
            Need ongoing creative support or high-volume ad production? We act as a seamless extension of your SaaS marketing team, handling everything from product updates to performance creative.
          </p>
        </div>
      </div>
    </section>
  );
}
