"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { SmartImage } from "../../utils/SmartImage.tsx";

const serviceCards = [
  {
    id: 1,
    title: "Product Explainer Videos",
    description:
      "Turn complex product workflows into clear, engaging stories that users understand in seconds. We build demo content that breaks down barriers and drives adoption.",
    image: "/animation-section/video.webp",
  },
  {
    id: 2,
    title: "Launch Campaign Creative",
    description:
      "Every launch deserves visuals that cut through. We build campaign assets for ads, landing pages, and social media designed for maximum impact.",
    image: "/videoEditing.webp",
  },
  {
    id: 3,
    title: "Feature Demo & Walkthroughs",
    description:
      "Showcase new features with polished demo videos that highlight value and drive adoption. Keep your audience engaged with high-quality release content.",
    image: "/animation-section/short-form.webp",
  },
  {
    id: 4,
    title: "Paid Social & Ad Creative",
    description:
      "Performance-driven creatives meticulously designed to stop the scroll and convert fleeting attention into action across all digital platforms.",
    image: "/animation-section/video.webp",
  },
  {
    id: 5,
    title: "Brand Story & Positioning",
    description:
      "Move beyond features. We craft visual narratives that communicate your mission, market fit, and the core reason why your product matters.",
    image: "/videoEditing.webp",
  },
  {
    id: 6,
    title: "Ongoing Creative Partnership",
    description:
      "A steady pipeline of product content, campaign refreshes, and launch assets — on your cadence. We act as an extension of your marketing team.",
    image: "/animation-section/short-form.webp",
  },
];

export default function SaasServicesVideoStyle() {
  return (
    <section
      id="services"
      className="relative overflow-hidden px-6 pb-24 pt-16 lg:px-20"
    >
      <div className="absolute inset-0 -z-10 " />

      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="text-xs tracking-[0.2em] text-[#c2d3dc]">
            WHAT WE DO
          </p>
          <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
            Creative Services Built for <span className="text-[#17d6d4]">SaaS, Startups, and Product Teams</span>
          </h2>
          <p className="mt-6 text-sm leading-7 text-[#c6d8e2] md:text-base">
            Different products need different creative strategies. An explainer video should clarify complex
            workflows. A social ad needs fast pacing and strong hooks. A product launch
            needs impact. We shape the creative style around the product, audience, and purpose of the
            campaign, so every asset feels more natural, engaging, and effective online.
          </p>
        </div>

        <style>{`
          .services-swiper .swiper-wrapper {
            align-items: stretch;
          }
          .services-swiper .swiper-slide {
            height: auto !important;
            display: flex;
          }
          .services-swiper .swiper-pagination-bullet {
            background: rgba(255,255,255,0.2);
            opacity: 1;
          }
          .services-swiper .swiper-pagination-bullet-active {
            background: #23d8dc;
          }
        `}</style>
        <div className="md:hidden">
          <Swiper
            modules={[Pagination]}
            slidesPerView={1}
            spaceBetween={14}
            pagination={{ clickable: true }}
            className="services-swiper w-full pb-10"
          >
            {serviceCards.map((card) => (
              <SwiperSlide key={card.id} className="flex">
                <article className="group flex h-full w-full flex-col rounded-3xl border border-[#13a8b8]/60 bg-[linear-gradient(160deg,#071c2e,#0a2433)] p-3 shadow-[0_10px_30px_rgba(0,0,0,0.45)]">
                  <div className="relative h-56 overflow-hidden rounded-2xl">
                    <SmartImage
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#081521] via-transparent to-transparent" />
                  </div>
                  <div className="flex flex-1 flex-col p-3 pb-4">
                    <h3 className="text-2xl font-bold text-white">{card.title}</h3>
                    <p className="mt-3 flex-1 text-sm leading-7 text-[#c0d3df]">
                      {card.description}
                    </p>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="hidden gap-6 md:grid md:grid-cols-3">
          {serviceCards.map((card) => (
            <article
              key={card.id}
              className="group rounded-3xl border border-[#13a8b8]/60 bg-[linear-gradient(160deg,#071c2e,#0a2433)] p-3 shadow-[0_10px_30px_rgba(0,0,0,0.45)] transition-all duration-300 hover:-translate-y-1 hover:border-[#23d8dc]"
            >
              <div className="relative h-56 overflow-hidden rounded-2xl">
                <SmartImage
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#081521] via-transparent to-transparent" />
              </div>
              <div className="p-3 pb-4">
                <h3 className="text-xl font-bold text-white">{card.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#c0d3df]">
                  {card.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
