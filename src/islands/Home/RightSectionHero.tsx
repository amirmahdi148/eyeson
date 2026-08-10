import React, {
    type RefObject,
} from "react";
import {
    Home,
    ArrowRight,
    Folder,
    Plus,
    Pen,
} from "lucide-react";
import {
    motion,
    AnimatePresence,
} from "framer-motion";
import { SmartImage } from "@/utils/SmartImage";

const CATEGORIES = [
    {
        id: "motion-design",
        title: "Motion Design",
        videoUrl: "/home/Videos/output-second.mp4",
    },
    {
        id: "video-editing",
        title: "Video Editing",
        videoUrl: "/home/Videos/output-first.mp4",
    },
    {
        id: "3d-uiux",
        title: "3D / UIUX",
        videoUrl: "/home/Videos/output-third.mp4",
    },
    {
        id: "brand-identity",
        title: "Brand Identity",
        videoUrl: "/home/Videos/output-fourth.mov",
    },
];

interface RightSectionHeroProps {
    activeTab: string;
    shouldReduceMotion: boolean | null;
    videoRef: RefObject<HTMLVideoElement | null>;
    handleTimeUpdate: () => void;
    onCategoryChange: (category: string) => void;
}

export default function RightSectionHero({
                                             activeTab,
                                             shouldReduceMotion,
                                             videoRef,
                                             handleTimeUpdate,
                                             onCategoryChange,
                                         }: RightSectionHeroProps) {
    const activeVideo = CATEGORIES.find((c) => c.id === activeTab)?.videoUrl;

    return (
        <motion.div
            initial={{opacity: 0, x: shouldReduceMotion ? 0 : 30}}
            animate={{opacity: 1, x: 0}}
            transition={{duration: 0.8, ease: "easeOut", delay: 0.2}}
            className="relative order-1 lg:order-2 w-full lg:w-[55%] xl:w-[52%]"
        >
            {/* Buttons Start */}
            <div className="absolute z-20 flex flex-col lg:flex-row items-center justify-center gap-3 right-4 lg:right-auto top-1/2 -translate-y-1/2 lg:top-80 lg:-left-10 xl:top-100 xl:left-10 lg:translate-x-0 lg:translate-y-0">

                {CATEGORIES.map((cat, i) => (
                    <button
                        key={cat.id}
                        onClick={() => onCategoryChange(cat.id)}
                        disabled={activeTab === cat.id}
                        className={`relative w-12 h-12 sm:w-16 sm:h-16 md:w-28 md:h-28 lg:w-35 lg:h-30 flex items-center justify-center transition-all ${
                            activeTab === cat.id
                                ? "scale-110 cursor-default"
                                : "hover:scale-102 cursor-pointer"
                        }`}
                    >
                        <SmartImage src={`/home/20/${i + 1}.webp`} alt={cat.title} fill objectFit="contain" loading="lazy"/>
                    </button>
                ))}
            </div>



            {/* Buttons End */}
            <div className="absolute inset-0 pointer-events-none">
                <img
                    src="/home/RightElements/el/20.svg"
                    alt=""
                    className="h-full w-full scale-[1.2] md:scale-[1] lg:scale-[1.4] xl:scale-[1.6]"
                />
            </div>
            <img
                src="/home/RightElements/el/1.svg"
                alt=""
                className="absolute inset-0 z-10 h-full w-full scale-[1.2] md:scale-[1] lg:scale-[1.4] xl:scale-[1.6]  pointer-events-none"
            />
            <img
                src="/home/RightElements/el/2.svg"
                alt=""
                className="absolute inset-0 z-10 h-full w-full scale-[1.2] md:scale-[1] lg:scale-[1.4]  xl:scale-[1.6] pointer-events-none hidden lg:block"
            />
            <img
                src="/home/RightElements/el/3.svg"
                alt=""
                className="absolute inset-0 z-10 h-full w-full scale-[1.2] md:scale-[1] lg:scale-[1.4]  xl:scale-[1.6] pointer-events-none hidden lg:block"
            />
            <img
                src="/home/RightElements/el/5.svg"
                alt=""
                className="hidden lg:block absolute inset-0 z-10 h-full w-full scale-[0.6] sm:scale-[0.8] md:scale-[1] lg:scale-[1.4] xl:scale-[1.6] pointer-events-none"
            />
            <img
                src="/home/RightElements/el/6.svg"
                alt=""
                className="hidden lg:block absolute inset-0 z-10 h-full w-full scale-[0.6] sm:scale-[1.2] md:scale-[1] lg:scale-[1.4] xl:scale-[1.6]  pointer-events-none"
            />
            <img
                src="/home/RightElements/el/7.svg"
                alt=""
                className="hidden lg:block absolute inset-0 z-10 h-full w-full scale-[0.6] sm:scale-[0.8] md:scale-[1] lg:scale-[1.4] xl:scale-[1.6] pointer-events-none"
            />

            {/* Video Section START */}
            <div
                className="relative aspect-16/10 w-full rounded-3xl flex justify-center items-end"
            >
                <SmartImage src="/home/VideoElements/20/mother.webp" alt="" fill priority={false} />
                <div className="absolute top-0 left-0 z-10 flex items-center gap-2.5 md:gap-4 p-3 md:p-5 text-[#448b99]">
                    <button className="cursor-pointer transition-all duration-200 hover:scale-110 hover:text-cyan-300 active:scale-95">
                        <Home className="h-3.5 w-3.5 md:h-4 md:w-4"/>
                    </button>
                    <button className="cursor-pointer transition-all duration-200 hover:scale-110 hover:text-cyan-300 active:scale-95">
                        <ArrowRight className="h-3.5 w-3.5 md:h-4 md:w-4"/>
                    </button>
                    <button className="cursor-pointer transition-all duration-200 hover:scale-110 hover:text-cyan-300 active:scale-95">
                        <Folder className="h-3.5 w-3.5 md:h-4 md:w-4 text-cyan-400"/>
                    </button>
                    <button className="cursor-pointer transition-all duration-200 hover:scale-110 hover:text-cyan-300 active:scale-95">
                        <Plus className="h-3.5 w-3.5 md:h-4 md:w-4"/>
                    </button>
                    <button className="cursor-pointer transition-all duration-200 hover:scale-110 hover:text-cyan-300 active:scale-95">
                        <Pen className="h-3.5 w-3.5 md:h-4 md:w-4"/>
                    </button>
                </div>
                <div
                    className="relative w-full h-[calc(100%-3.1rem)] mt-8 rounded-3xl overflow-hidden"
                >
                    <SmartImage src="/home/VideoElements/20/child.webp" alt="" fill />
                    <AnimatePresence mode="wait">
                        <motion.video
                            key={activeTab}
                            ref={videoRef}
                            src={activeVideo}
                            autoPlay
                            muted
                            loop
                            playsInline
                            onTimeUpdate={handleTimeUpdate}
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            exit={{opacity: 0}}
                            transition={{duration: 0.4}}
                            className="absolute inset-0 h-full w-full object-cover rounded-3xl"
                        />
                    </AnimatePresence>
                    <div
                        className="absolute inset-0 bg-[#051118]/10 mix-blend-overlay pointer-events-none"/>
                </div>
            </div>
            {/* Video Section END */}
        </motion.div>
);
}
