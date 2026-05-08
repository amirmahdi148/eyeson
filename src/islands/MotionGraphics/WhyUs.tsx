import React, { useState, useEffect, type FC } from "react";
import { motion, type Variants } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import {SmartImage} from "@/utils/SmartImage.tsx";
// Assuming SmartImage is your custom component
// import { SmartImage } from "@/utils/SmartImage.tsx";

// --- Types ---
interface Card {
    id: number;
    title: string;
    subtitle: string;
    description: string;
    tags: string[];
    image: string;
}

const cardData: Card[] = [
    {
        id: 1,
        title: "Product Launches",
        subtitle: "Make your product clear before the first click.",
        description: "Motion graphics help introduce new products with clarity and excitement — explaining features, value, and differentiation in seconds.",
        tags: ["New product releases", "Feature announcements", "Go-to-market campaigns"],
        image: "/motion-graphics/WhyUs/1.jpg",
    },
    {
        id: 2,
        title: "SaaS Onboarding",
        subtitle: "Turn first-time users into confident users.",
        description: "Animated UI flows and explainer motion guide users through your product, reduce friction, and improve activation and retention.",
        tags: ["SaaS platforms", "Web apps & dashboards", "Feature onboarding"],
        image: "/motion-graphics/WhyUs/2.jpg",
    },
    {
        id: 3,
        title: "Website Hero Sections",
        subtitle: "Explain what you do before users scroll.",
        description: "Hero motion instantly communicates your value proposition, captures attention, and sets a premium tone for your website.",
        tags: ["Landing pages", "Product websites", "Brand homepages"],
        image: "/motion-graphics/WhyUs/3.jpg",
    },
    {
        id: 4,
        title: "Paid Ads & Presentations",
        subtitle: "Stop the scroll. Deliver the message fast.",
        description: "Short-form motion graphics boost ad performance by simplifying the message and highlighting value within the first seconds.",
        tags: ["Meta & YouTube ads", "LinkedIn campaigns", "Sales presentations"],
        image: "/motion-graphics/WhyUs/4.jpg",
    },
];

// --- Custom Hook ---
const useMediaQuery = (query: string): boolean => {
    const [matches, setMatches] = useState<boolean>(false);
    useEffect(() => {
        const media = window.matchMedia(query);
        if (media.matches !== matches) setMatches(media.matches);
        const listener = () => setMatches(media.matches);
        media.addEventListener("change", listener);
        return () => media.removeEventListener("change", listener);
    }, [matches, query]);
    return matches;
};

// --- Animations ---
const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

// --- Sub-component ---
const CardContent: FC<{ card: Card }> = ({ card }) => (
    <div className="flex h-full flex-col rounded-[2rem] border border-slate-700/50 bg-linear-to-br from-[#0B1F2A] to-[#094350] p-6 sm:p-8 transition-all duration-300 hover:border-cyan-500/30 group">
        <div className="flex flex-1 flex-col">
            <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">{card.title}</h3>
            <p className="mt-2 text-base font-medium text-[#00A9BD]">
                {card.subtitle}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
                {card.description}
            </p>

            <div className="mt-auto pt-8">
                <span className="text-[10px] uppercase tracking-wider font-bold text-white">Best for:</span>
                <div className="mt-3 flex flex-wrap gap-2">
                    {card.tags.map((tag, index) => (
                        <span key={index} className="rounded-full border border-[#46B6A0]  bg-[#0B1F2A] px-4 py-1 text-[11px] text-slate-300">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>

        {/* Image Container - Fixed Height for visual balance */}
        <div className="mt-8 overflow-hidden rounded-2xl bg-slate-900/80 h-48 sm:h-60 flex items-center justify-center shadow-[0_0_20px_#00A9BD66]">
            {/* Using img tag here for demo, swap back to SmartImage in your project */}
            <SmartImage
                src={card.image}
                alt={card.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
        </div>
    </div>
);

export const MotionGraphicsSection: FC = () => {
    const isMobile = useMediaQuery("(max-width: 768px)");
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);
    if (!mounted) return null;

    return (
        <section className="relative w-full py-24 text-white">
            {/* Custom Dot Styles */}
            <style dangerouslySetInnerHTML={{ __html: `
                .swiper-pagination-bullet {
                    background: #334155 !important;
                    opacity: 1 !important;
                    width: 8px !important;
                    height: 8px !important;
                    transition: all 0.3s ease-in-out !important;
                }
                .swiper-pagination-bullet-active {
                    background: #00E5FF !important;
                    width: 24px !important;
                    border-radius: 4px !important;
                }
                .swiper-horizontal > .swiper-pagination-bullets {
                    bottom: 0px !important;
                }
            `}} />

            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={itemVariants}
                    className="mx-auto max-w-3xl text-center mb-16"
                >
                    <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
                        Where <span className="text-[#00E5FF]">Motion Graphics</span><br /> Performs Best
                    </h2>
                    <p className="mt-6 text-sm text-slate-400 sm:text-base">
                        Motion graphics adapt to different goals, platforms, and business stages.<br className="hidden sm:block" /> Here's where they create the most impact.
                    </p>
                </motion.div>

                <div className="relative">
                    {isMobile ? (
                        <Swiper
                            modules={[Pagination]}
                            spaceBetween={16}
                            slidesPerView={1.1}
                            centeredSlides={false}
                            pagination={{ clickable: true }}
                            className="pb-12 !overflow-visible"
                            autoHeight={false} // Forces cards to follow container height
                        >
                            {cardData.map((card) => (
                                <SwiperSlide key={card.id} className="!h-auto flex">
                                    <CardContent card={card} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    ) : (
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={containerVariants}
                            className="grid grid-cols-1 gap-6 md:grid-cols-2"
                        >
                            {cardData.map((card) => (
                                <motion.div key={card.id} variants={itemVariants} className="flex">
                                    <CardContent card={card} />
                                </motion.div>
                            ))}
                        </motion.div>
                    )}
                </div>
            </div>
        </section>
    );
};