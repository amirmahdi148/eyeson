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
    name: "Clean Edit & Social Content",
    subtitle: "Professional editing for creators and brands",
    price: "Starting from $120/min",
    includes: [
      "Professional video editing",
      "Hook optimization",
      "Captions & subtitles",
      "Sound design & pacing",
      "Platform-ready exports",
      "Clean social media editing",
    ],
    bestFor: "Talking head videos · Podcasts · Reels · Shorts · Creator content",
    volumePricing: [
      { threshold: "20+ videos", discount: "15% OFF" },
      { threshold: "30+ videos", discount: "25% OFF" },
    ],
    cta: "Book a Call",
  },
  {
    id: 2,
    name: "Motion Graphic Editing",
    subtitle: "For branded and higher-impact content",
    price: "Starting from $180/min",
    includes: [
      "Motion typography",
      "Motion graphics & overlays",
      "Advanced pacing",
      "Dynamic transitions",
      "Brand-consistent visuals",
      "Music & sound effects",
    ],
    bestFor: "Educational content · Brand storytelling · Product highlights · Marketing content",
    volumePricing: [
      { threshold: "20+ videos", discount: "15% OFF" },
      { threshold: "30+ videos", discount: "25% OFF" },
    ],
    cta: "Book a Call",
    featured: true,
    highlight: "Most Popular",
  },
  {
    id: 3,
    name: "Advanced Custom Animations",
    subtitle: "For premium campaigns and high-end content",
    price: "Starting from $240/min",
    includes: [
      "Custom frame design",
      "Advanced animation systems",
      "Cinematic motion polish",
      "High storytelling depth",
      "Premium visual direction",
      "Complex editing workflows",
    ],
    bestFor: "Product explainers · Creative campaigns · SaaS launches · High-impact social content",
    volumePricing: "Custom discounts available for ongoing projects",
    cta: "Book a Call",
  },
];

export default function VideoPackagesSection() {
  const [activeMobileSlide, setActiveMobileSlide] = useState(1);

  return (
    <section className="overflow-x-hidden px-4 pb-20 pt-14 sm:px-6 lg:px-20 lg:pb-24">
      <div className="mx-auto w-full max-w-7xl">
        <div className="mx-auto w-full max-w-3xl text-center">
          <p className="mb-3 text-xs tracking-[0.2em] text-[#c2d3dc]">
            FLEXIBLE PRICING
          </p>
          <h2 className="text-3xl font-bold leading-tight text-white md:text-5xl">
            Video Editing Packages Built Around Your Content Volume
          </h2>
          <p className="mt-4 text-sm leading-7 text-[#c3d4de] md:text-base">
            Different content needs different editing styles, production depth, and turnaround speed. From simple talking head videos to advanced motion-heavy edits and product explainers, our pricing is designed to stay flexible while scaling with your content needs.
          </p>
          <p className="mt-3 text-sm leading-7 text-[#c3d4de] md:text-base">
            Most projects usually start from 4+ videos. For brands producing higher content volume, we offer discounted monthly workflows and long-term editing support.
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
                      <>Clean Edit & <span className="text-[#12d6d8]">Social Content</span></>
                    ) : pack.id === 2 ? (
                      <><span className="text-[#12d6d8]">Motion Graphic</span> Editing</>
                    ) : (
                      <><span className="text-[#12d6d8]">Advanced Custom</span> Animations</>
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
                  <>Clean Edit & <span className="text-[#12d6d8]">Social Content</span></>
                ) : pack.id === 2 ? (
                  <><span className="text-[#12d6d8]">Motion Graphic</span> Editing</>
                ) : (
                  <><span className="text-[#12d6d8]">Advanced Custom</span> Animations</>
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
            Need ongoing editing support or high-volume content production? We also offer custom monthly workflows for creators, startups, SaaS teams, podcasts, agencies, and modern media brands.
          </p>
        </div>
      </div>
    </section>
  );
}
