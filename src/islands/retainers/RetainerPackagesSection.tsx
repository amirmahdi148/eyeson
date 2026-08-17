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
    name: "Essential",
    subtitle: "For brands that need consistent monthly content",
    price: "Monthly Setup",
    includes: [
      "Ongoing social content production",
      "Professional editing & finishing",
      "Lightweight motion design",
      "Creative adaptations",
      "Regular creative production",
      "Structured monthly workflow",
    ],
    bestFor: "Startups · Founders · Small Marketing Teams",
    volumePricing: "Production capacity sized to your content mix",
    cta: "Get Started",
  },
  {
    id: 2,
    name: "Growth",
    subtitle: "For companies running multiple campaigns and channels",
    price: "Monthly Setup",
    includes: [
      "More monthly production capacity",
      "Social videos & ad creatives",
      "Product content & feature showcases",
      "Motion design & UI animation",
      "Campaign assets & variations",
      "Higher-priority monthly planning",
    ],
    bestFor: "Growing SaaS · Ecommerce · Marketing Teams",
    volumePricing: "Production capacity scaled to channel mix",
    cta: "Build My Plan",
    featured: true,
    highlight: "Most Popular",
  },
  {
    id: 3,
    name: "Creative Partner",
    subtitle: "For brands that need serious ongoing production",
    price: "Monthly Setup",
    includes: [
      "Higher-capacity creative relationship",
      "Multiple content types per month",
      "Product launches & campaign support",
      "Advanced motion & UI animation",
      "Continuous production pipeline",
      "Dedicated creative direction",
    ],
    bestFor: "Scaleups · Established Brands · Agencies",
    volumePricing: "Custom production capacity",
    cta: "Talk to Our Team",
  },
];

export default function RetainerPackagesSection() {
  const [activeMobileSlide, setActiveMobileSlide] = useState(1);

  return (
    <section className="overflow-x-hidden px-4 pb-20 pt-14 sm:px-6 lg:px-20 lg:pb-24">
      <div className="mx-auto w-full max-w-7xl">
        <div className="mx-auto w-full max-w-3xl text-center">
          <p className="mb-3 text-xs tracking-[0.2em] text-[#c2d3dc]">
            CHOOSE YOUR PRODUCTION LEVEL
          </p>
          <h2 className="text-3xl font-bold leading-tight text-white md:text-5xl">
            A Monthly Setup
            <br />
            <span className="text-[#12d4d1]">Built Around Your Output.</span>
          </h2>
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
                      <><span className="text-[#12d6d8]">Essential</span></>
                    ) : pack.id === 2 ? (
                      <><span className="text-[#12d6d8]">Growth</span></>
                    ) : (
                      <>Creative <span className="text-[#12d6d8]">Partner</span></>
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
                    <p className="text-xs font-semibold text-white">Capacity</p>
                    <p className="mt-1 text-xs text-[#d2e2e9]">{pack.volumePricing}</p>
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
                  <><span className="text-[#12d6d8]">Essential</span></>
                ) : pack.id === 2 ? (
                  <><span className="text-[#12d6d8]">Growth</span></>
                ) : (
                  <>Creative <span className="text-[#12d6d8]">Partner</span></>
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
                <p className="text-xs font-semibold text-white">Capacity</p>
                <p className="mt-1 text-xs text-[#d2e2e9]">{pack.volumePricing}</p>
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
            Every company needs a different content mix. Instead of forcing your
            brand into a rigid package, we recommend a monthly production level
            based on your expected volume, complexity, turnaround requirements,
            and creative needs.
          </p>
        </div>
      </div>
    </section>
  );
}
