import { useRef, useState } from "react";
import { SmartImage } from "../../utils/SmartImage.tsx";

const serviceCards = [
  {
    id: 1,
    title: "Explainer videos",
    description:
      "Need to simplify your message or introduce your product? Edited explainer videos help deliver information clearly and keep viewers engaged from the first second.",
    image: "/animation-section/video.webp",
  },
  {
    id: 2,
    title: "Product demos",
    description:
      "Show your product in action with polished demo videos that highlight features, usability, and real value. Through refined cuts and close-ups, your audience sees exactly what matters.",
    image: "/videoEditing.webp",
  },
  {
    id: 3,
    title: "Promotional videos",
    description:
      "Stand out with high-impact promo videos crafted to boost visibility and build excitement around your brand. Smooth pacing and strong visuals ensure lasting impressions.",
    image: "/animation-section/short-form.webp",
  },
];

export default function VideoServicesSection() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const frameRef = useRef<number | null>(null);

  return (
    <section
      id="services"
      className="relative overflow-hidden px-6 pb-24 pt-16 lg:px-20"
    >
      <div className="absolute inset-0 -z-10 " />

      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="text-xs tracking-[0.2em] text-[#c2d3dc]">
            SERVICE WE OFFER
          </p>
          <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
            Our <span className="text-[#17d6d4]">Video Editing</span> services
          </h2>
          <p className="mt-6 text-sm leading-7 text-[#c6d8e2] md:text-base">
            Explore a range of editing solutions designed to showcase your
            product, elevate your message, and engage your audience across every
            platform.
          </p>
        </div>

        <div
          ref={sliderRef}
          onScroll={() => {
            if (!sliderRef.current) return;
            if (frameRef.current) return;
            frameRef.current = requestAnimationFrame(() => {
              frameRef.current = null;
              if (!sliderRef.current) return;
              const { scrollLeft, clientWidth } = sliderRef.current;
              const idx = Math.max(
                0,
                Math.min(
                  serviceCards.length - 1,
                  Math.round(scrollLeft / clientWidth),
                ),
              );
              setActiveIndex((prev) => (prev === idx ? prev : idx));
            });
          }}
          className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 md:hidden [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {serviceCards.map((card) => (
            <article
              key={card.id}
              className="group w-full min-w-full snap-center rounded-3xl border border-[#13a8b8]/60 bg-[linear-gradient(160deg,#071c2e,#0a2433)] p-3 shadow-[0_10px_30px_rgba(0,0,0,0.45)]"
            >
              <div className="relative h-56 overflow-hidden rounded-2xl">
                <SmartImage
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#081521] via-transparent to-transparent" />
              </div>
              <div className="p-3 pb-4">
                <h3 className="text-2xl font-bold text-white">{card.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#c0d3df]">
                  {card.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-5 flex items-center justify-center gap-2 md:hidden">
          {serviceCards.map((card, index) => (
            <span
              key={card.id}
              className={`h-3 w-3 rounded-full transition-all ${
                index === activeIndex ? "bg-[#23d8dc]" : "bg-white/10"
              }`}
            />
          ))}
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
                <h3 className="text-4xl font-bold text-white">{card.title}</h3>
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
