"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCreative } from "swiper/modules";
import { ChevronLeft, ChevronRight, Check } from "lucide-react";

// ایمپورت استایل‌های Swiper
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-creative";
import "./UiUxPricingSlider.css";

// اضافه کردن کارت‌های بیشتر (۵ کارت)
const slides = [
  {
    id: 1,
    eyebrow: "Fixed price package",
    price: "£1,200 – £3,500",
    unit: "per project",
    description:
      "Our fixed-price UI/UX packages give you full clarity from day one. You’ll know exactly what you’re getting, how long it takes, and what it costs — no surprises, no scope creep.",
    features: [
      "User flow & structure planning",
      "Wireframes (Low / Mid fidelity)",
      "High-fidelity UI design",
      "Responsive (Desktop + Mobile)",
      "Design system basics",
      "Figma source files",
    ],
    primaryCta: "Get free sample",
    secondaryCta: "See our price",
    mainImage: "/uiux/slidebg.webp",
    floatingTags: [
      "/pricing/tag-price-1.webp",
      "/pricing/tag-price-2.webp",
      "/pricing/tag-branding.webp",
      "/pricing/tag-ui.webp",
      "/pricing/device-small.webp",
      "/pricing/tag-off.webp",
    ],
  },
  {
    id: 2,
    eyebrow: "Flexible monthly retainers",
    price: "£900 – £2,200",
    unit: "per month",
    description:
      "Best for teams that need continuous UI support. We handle iteration, product updates, and new screens in a flexible collaboration model with predictable monthly cost.",
    features: [
      "Ongoing design support",
      "Product improvements",
      "Design QA & review",
      "Fast turnaround cycles",
      "Figma organization",
      "Priority communication",
    ],
    primaryCta: "Book a call",
    secondaryCta: "View plans",
    mainImage: "/uiux/slidebg.webp",
    floatingTags: [
      "/pricing/tag-price-3.webp",
      "/pricing/tag-price-4.webp",
      "/pricing/tag-retainer.webp",
      "/pricing/tag-product.webp",
      "/pricing/device-small-2.webp",
      "/pricing/tag-note.webp",
    ],
  },
  {
    id: 3,
    eyebrow: "Product design sprints",
    price: "£2,500 – £5,000",
    unit: "per sprint",
    description:
      "A focused sprint for startups and product teams that want fast validation, strong UX direction, and polished UI output without a long engagement upfront.",
    features: [
      "Sprint roadmap",
      "UX audit & structure",
      "Core user journeys",
      "Landing + dashboard UI",
      "Prototype-ready screens",
      "Final handoff assets",
    ],
    primaryCta: "Start a sprint",
    secondaryCta: "See workflow",
    mainImage: "/uiux/slidebg.webp",
    floatingTags: [
      "/pricing/tag-price-5.webp",
      "/pricing/tag-price-6.webp",
      "/pricing/tag-sprint.webp",
      "/pricing/tag-ux.webp",
      "/pricing/device-small-3.webp",
      "/pricing/tag-sale.webp",
    ],
  },
  {
    id: 4,
    eyebrow: "Enterprise UI/UX Scale",
    price: "Custom",
    unit: "tailored pricing",
    description:
      "Comprehensive design systems and multi-platform interfaces for enterprise-level applications. Built for scalability, accessibility, and complex user roles.",
    features: [
      "Advanced Design System",
      "Multi-platform (Web, iOS, Android)",
      "Accessibility (WCAG) compliance",
      "Complex user role workflows",
      "Interactive Prototyping",
      "Dev-ready documentation",
    ],
    primaryCta: "Contact Sales",
    secondaryCta: "View Case Studies",
    mainImage: "/uiux/slidebg.webp",
    floatingTags: [
      "/pricing/tag-enterprise.webp",
      "/pricing/tag-system.webp",
      "/pricing/tag-scale.webp",
      "/pricing/tag-secure.webp",
      "/pricing/device-large.webp",
      "/pricing/tag-custom.webp",
    ],
  },
  {
    id: 5,
    eyebrow: "UI Audit & Revamp",
    price: "£800 – £1,500",
    unit: "one-time",
    description:
      "Does your current app feel outdated or confusing? We conduct a deep UX audit and provide a rapid UI facelift to boost conversions and user satisfaction.",
    features: [
      "Comprehensive UX Audit",
      "Heuristic evaluation",
      "Conversion rate optimization",
      "Modern UI facelift",
      "Actionable design report",
      "Quick 1-week turnaround",
    ],
    primaryCta: "Request Audit",
    secondaryCta: "See Examples",
    mainImage: "/uiux/slidebg.webp",
    floatingTags: [
      "/pricing/tag-audit.webp",
      "/pricing/tag-boost.webp",
      "/pricing/tag-revamp.webp",
      "/pricing/tag-speed.webp",
      "/pricing/device-mobile.webp",
      "/pricing/tag-report.webp",
    ],
  },
];

export default function UiUxPricingSlider() {
  return (
    <section className="pricing-slider-section">
      <div className="pricing-slider-shell">
        {/* هدر */}
        <div className="pricing-slider-header">
          <h2 className="pricing-slider-title">
            <span className="title-line">Simple, transparent pricing</span>
            <span className="title-line">
              designed for <span className="title-accent">UI/UX projects</span>
            </span>
          </h2>
          <p className="pricing-slider-subtitle">
            Clear pricing with no hidden costs.
            <br />
            Choose a fixed design package or a flexible engagement model based
            on your product size, goals, and timeline.
          </p>
        </div>

        {/* بدنه اسلایدر */}
        <div className="pricing-slider-stage">
          {/* دکمه قبلی */}
          <button
            className="pricing-nav pricing-prev"
            aria-label="Previous slide"
          >
            <ChevronLeft size={20} strokeWidth={2.5} />
          </button>

          <Swiper
            modules={[Navigation, Pagination, EffectCreative]}
            effect="creative"
            // افکت خفن اسلاید: کارت قبلی محو میشه میره عقب، کارت بعدی میاد رو
            creativeEffect={{
              prev: {
                shadow: true,
                translate: ["-20%", 0, -1],
                opacity: 0,
              },
              next: {
                translate: ["100%", 0, 0],
              },
            }}
            slidesPerView={1}
            spaceBetween={0}
            speed={800}
            loop={true}
            navigation={{
              prevEl: ".pricing-prev",
              nextEl: ".pricing-next",
            }}
            pagination={{
              el: ".pricing-pagination",
              clickable: true,
            }}
            className="pricing-swiper"
          >
            {slides.map((slide) => (
              <SwiperSlide key={slide.id}>
                <article className="pricing-card">
                  <div className="pricing-card-bg" />

                  <div className="pricing-card-content">
                    {/* بخش متن چپ */}
                    <div className="pricing-copy">
                      <p className="pricing-eyebrow">{slide.eyebrow}</p>

                      <div className="pricing-price-row">
                        <h3 className="pricing-price">{slide.price}</h3>
                        <span className="pricing-unit">{slide.unit}</span>
                      </div>

                      <p className="pricing-description">{slide.description}</p>

                      <div className="pricing-features-title">
                        What's included
                      </div>
                      <div className="pricing-features">
                        {slide.features.map((feature) => (
                          <div className="pricing-feature" key={feature}>
                            <span className="pricing-feature-icon">
                              <Check size={12} strokeWidth={3} />
                            </span>
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>

                      <div className="pricing-actions">
                        <button className="btn-primary">
                          {slide.primaryCta}
                        </button>
                        <button className="btn-secondary">
                          {slide.secondaryCta}
                        </button>
                      </div>
                    </div>

                    {/* بخش تصویر راست */}
                    <div className="pricing-visual">
                      <div className="visual-wrap">
                        {/* تگ‌های شناور اطراف مانیتور */}
                        <img
                          className="float-card float-1"
                          src={slide.floatingTags[0]}
                          alt=""
                        />
                        <img
                          className="float-card float-2"
                          src={slide.floatingTags[1]}
                          alt=""
                        />
                        <img
                          className="float-card float-3"
                          src={slide.floatingTags[2]}
                          alt=""
                        />
                        <img
                          className="float-card float-4"
                          src={slide.floatingTags[3]}
                          alt=""
                        />
                        <img
                          className="float-card float-5"
                          src={slide.floatingTags[4]}
                          alt=""
                        />
                        <img
                          className="float-card float-6"
                          src={slide.floatingTags[5]}
                          alt=""
                        />

                        <div className="screen-frame">
                          <img
                            src={slide.mainImage}
                            alt="UI/UX mockup"
                            className="screen-image"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* دکمه بعدی */}
          <button className="pricing-nav pricing-next" aria-label="Next slide">
            <ChevronRight size={20} strokeWidth={2.5} />
          </button>
        </div>

        {/* نقطه‌های پایین */}
        <div className="pricing-pagination" />
      </div>
    </section>
  );
}
