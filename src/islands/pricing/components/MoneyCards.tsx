import { useEffect, useState } from "react";
import { Pagination, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

interface Plan {
    name : string;
    subtitle : string;
    price : string;
    features : string[],
    highlighted : boolean,
}

const plans = [
    {
        name: "Starter",
        subtitle: "Most popular for growing businesses",
        price: "$997",
        features: [
            "5 videos per month",
            "Weekly delivery",
            "Hook-based scripting",
            "Motion overlays",
            "Platform optimization",
        ],
        highlighted: false,
    },
    {
        name: "Growth",
        subtitle: "Most popular for growing businesses",
        price: "$1,797",
        features: [
            "10 videos per month",
            "Everything in Starter",
            "Trend-driven ideas",
            "Advanced motion graphics",
            "Priority support",
        ],
        highlighted: true,
    },
    {
        name: "Pro",
        subtitle: "Most popular for growing businesses",
        price: "$2,497",
        features: [
            "15 videos per month",
            "Everything in Growth",
            "Dedicated creative director",
            "Custom animations",
            "Monthly strategy calls",
        ],
        highlighted: false,
    },
];

export const MoneyCards = () => {
    const popularIndex = plans.findIndex((p) => p.highlighted);
    const orderedPlans =
        popularIndex === -1
            ? plans
            : [plans[(popularIndex + 1) % 3], plans[popularIndex], plans[(popularIndex + 2) % 3]];

    const [activeIndex, setActiveIndex] = useState(1);

    useEffect(() => {
        setActiveIndex(1);
    }, []);

    return (
        <section className="relative z-10 w-full px-4 pb-20">
            <div className="mx-auto w-full max-w-285">
                <div className="hidden md:grid md:grid-cols-3 gap-5">
                    {orderedPlans.map((plan) => (
                        <PlanCard key={plan.name} plan={plan} />
                    ))}
                </div>

                <div className="md:hidden">
                    <Swiper
                        modules={[Pagination, A11y]}
                        slidesPerView={1}
                        spaceBetween={16}
                        centeredSlides
                        initialSlide={1}
                        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                        className="money-swiper"
                    >
                        {orderedPlans.map((plan) => (
                            <SwiperSlide key={plan.name}>
                                <PlanCard plan={plan} />
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    <div className="mt-6 flex justify-center gap-3">
                        {orderedPlans.map((_, index) => (
                            <span
                                key={index}
                                className={`h-3 w-3 rounded-full transition-colors duration-300 ${
                                    activeIndex === index ? "bg-[#39C2B6]" : "bg-white/25"
                                }`}
                                aria-hidden="true"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

function PlanCard({ plan } : { plan: Plan }) {
    return (
        <article
            className={`relative rounded-3xl border p-6 shadow-[0_10px_30px_rgba(0,0,0,0.25)] backdrop-blur-sm transition-all duration-300 ${
                plan.highlighted
                    ? "border-[#44B39F] bg-linear-to-b from-[#09232E] via-[#083440] to-[#073E4A]"
                    : "border-[#1A4648] bg-[#0B1F2A]"
            }`}
        >
            {plan.highlighted ? (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-linear-to-r from-[#00A9BD] to-[#21675A] px-4 py-2 text-[11px] font-semibold tracking-wide text-white">
          MOST POPULAR
        </span>
            ) : null}

            <h3 className="text-[34px] font-black leading-none text-white">{plan.name}</h3>
            <p className="mt-2 text-sm text-white/60">{plan.subtitle}</p>

            <div className="my-5 border-t border-dashed border-white/15" />

            <div className="flex items-end gap-2">
        <span className="text-[42px] font-black leading-none text-[#39C2B6]">
          {plan.price}
        </span>
                <span className="pb-1 text-xl text-white/55">Starting at</span>
            </div>

            <ul className="mt-5 space-y-2.5">
                {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-xl text-white">
            <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-[#1CB8B5] text-xs text-[#1CB8B5]">
              ✓
            </span>
                        <span>{feature}</span>
                    </li>
                ))}
            </ul>

            <button
                type="button"
                className={`mt-6 w-full cursor-pointer rounded-[20px] border py-2.5 text-lg font-thin text-white transition-all ${
                    plan.highlighted
                        ? "border-none bg-linear-to-r from-[#46B6A0] to-[#056E7C]"
                        : "border-2 border-[#07505E] bg-linear-to-r from-[#0B1F2A] to-[#093B48]"
                }`}
            >
                Get Started
            </button>
        </article>
    );
}