import React, {
    useEffect,
    useState,
    type RefObject,
} from "react";
import {
    Home,
    ArrowRight,
    Folder,
    Plus,
    Pen,
} from "lucide-react";
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
        videoUrl: "/home/Videos/output-fourth.mp4",
    },
];

const VIDEO_POSTERS: Record<string, string> = {
    "/home/Videos/output-first.mp4": "/home/Videos/output-first-poster.jpg",
    "/home/Videos/output-second.mp4": "/home/Videos/output-second-poster.jpg",
    "/home/Videos/output-third.mp4": "/home/Videos/output-third-poster.jpg",
    "/home/Videos/output-fourth.mp4": "/home/Videos/output-fourth-poster.jpg",
};

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

    const [isDesktop, setIsDesktop] = useState(
        () => typeof window !== "undefined" && window.matchMedia("(min-width: 1024px)").matches,
    );
    useEffect(() => {
        const mq = window.matchMedia("(min-width: 1024px)");
        const onChange = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
        mq.addEventListener("change", onChange);
        return () => mq.removeEventListener("change", onChange);
    }, []);

    useEffect(() => {
        if (isDesktop) return;
        const idx = Math.floor(Math.random() * CATEGORIES.length);
        onCategoryChange(CATEGORIES[idx].id);
    }, [isDesktop]);
    const resolvedVideo = isDesktop ? activeVideo : undefined;
    const resolvedPoster = resolvedVideo ? VIDEO_POSTERS[resolvedVideo] : undefined;

    return (
        <div
            className="relative order-1 lg:order-2 w-full lg:w-[55%] xl:w-[52%] animate-fade-in"
        >
            <div className="absolute z-20 hidden lg:flex flex-col lg:flex-row items-center justify-center gap-3 right-4 lg:right-auto top-1/2 -translate-y-1/2 lg:top-80 lg:-left-10 xl:top-100 xl:left-10 lg:translate-x-0 lg:translate-y-0">

                {CATEGORIES.map((cat, i) => (
                    <button
                        key={cat.id}
                        onClick={() => onCategoryChange(cat.id)}
                        disabled={activeTab === cat.id}
                        aria-pressed={activeTab === cat.id}
                        aria-label={cat.title}
                        className={`relative w-12 h-12 sm:w-16 sm:h-16 md:w-28 md:h-28 lg:w-35 lg:h-30 flex items-center justify-center transition-all duration-[var(--duration-normal)] ease-[var(--ease-default)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-ring)] rounded-[var(--radius-md)] ${
                            activeTab === cat.id
                                ? "scale-[1.06] cursor-default opacity-100"
                                : "hover:scale-[1.03] cursor-pointer opacity-80 hover:opacity-100"
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
                className="absolute inset-0 z-10 h-full w-full scale-[1.2] md:scale-[1] lg:scale-[1.4] xl:scale-[1.6] pointer-events-none"
            />
            <img
                src="/home/RightElements/el/2.svg"
                alt=""
                className="absolute inset-0 z-10 h-full w-full scale-[1.2] md:scale-[1] lg:scale-[1.4] xl:scale-[1.6] pointer-events-none hidden lg:block"
            />
            <img
                src="/home/RightElements/el/3.svg"
                alt=""
                className="absolute inset-0 z-10 h-full w-full scale-[1.2] md:scale-[1] lg:scale-[1.4] xl:scale-[1.6] pointer-events-none hidden lg:block"
            />
            <img
                src="/home/RightElements/el/5.svg"
                alt=""
                className="hidden lg:block absolute inset-0 z-10 h-full w-full scale-[0.6] sm:scale-[0.8] md:scale-[1] lg:scale-[1.4] xl:scale-[1.6] pointer-events-none"
            />
            <img
                src="/home/RightElements/el/6.svg"
                alt=""
                className="hidden lg:block absolute inset-0 z-10 h-full w-full scale-[0.6] sm:scale-[1.2] md:scale-[1] lg:scale-[1.4] xl:scale-[1.6] pointer-events-none"
            />
            <img
                src="/home/RightElements/el/7.svg"
                alt=""
                className="hidden lg:block absolute inset-0 z-10 h-full w-full scale-[0.6] sm:scale-[0.8] md:scale-[1] lg:scale-[1.4] xl:scale-[1.6] pointer-events-none"
            />

            <div
                className="relative aspect-16/10 w-full rounded-[var(--radius-2xl)] flex justify-center items-end border border-[var(--color-border)] shadow-[var(--elevation-2)] overflow-hidden bg-[#040a12]"
            >
                <SmartImage src="/home/VideoElements/20/mother.webp" alt="" fill priority={false} className="rounded-[var(--radius-2xl)]" />
                <div className="absolute top-0 left-0 z-10 flex items-center gap-2.5 md:gap-4 p-3 md:p-5 text-white/60">
                    <button aria-label="Home" className="cursor-pointer transition-all duration-[var(--duration-normal)] ease-[var(--ease-default)] hover:scale-[1.06] hover:text-[var(--primitive-teal-400)] active:scale-95 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--color-ring)] rounded-sm">
                        <Home className="h-3.5 w-3.5 md:h-4 md:w-4"/>
                    </button>
                    <button aria-label="Next" className="cursor-pointer transition-all duration-[var(--duration-normal)] ease-[var(--ease-default)] hover:scale-[1.06] hover:text-[var(--primitive-teal-400)] active:scale-95 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--color-ring)] rounded-sm">
                        <ArrowRight className="h-3.5 w-3.5 md:h-4 md:w-4"/>
                    </button>
                    <button aria-label="Folder" className="cursor-pointer transition-all duration-[var(--duration-normal)] ease-[var(--ease-default)] hover:scale-[1.06] text-[var(--primitive-teal-400)] active:scale-95 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--color-ring)] rounded-sm">
                        <Folder className="h-3.5 w-3.5 md:h-4 md:w-4"/>
                    </button>
                    <button aria-label="Add" className="cursor-pointer transition-all duration-[var(--duration-normal)] ease-[var(--ease-default)] hover:scale-[1.06] hover:text-[var(--primitive-teal-400)] active:scale-95 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--color-ring)] rounded-sm">
                        <Plus className="h-3.5 w-3.5 md:h-4 md:w-4"/>
                    </button>
                    <button aria-label="Edit" className="cursor-pointer transition-all duration-[var(--duration-normal)] ease-[var(--ease-default)] hover:scale-[1.06] hover:text-[var(--primitive-teal-400)] active:scale-95 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--color-ring)] rounded-sm">
                        <Pen className="h-3.5 w-3.5 md:h-4 md:w-4"/>
                    </button>
                </div>
                <div
                    className="relative w-full h-[calc(100%-3.1rem)] mt-8 rounded-[var(--radius-2xl)] overflow-hidden border border-white/[0.06]"
                >
                    <SmartImage src="/home/VideoElements/20/child.webp" alt="" fill className="rounded-[var(--radius-2xl)]" />
                    <video
                        key={activeTab}
                        ref={videoRef}
                        src={resolvedVideo}
                        poster={resolvedPoster}
                        preload="metadata"
                        autoPlay
                        muted
                        loop
                        playsInline
                        onTimeUpdate={handleTimeUpdate}
                        className="absolute inset-0 h-full w-full object-cover rounded-[var(--radius-2xl)] transition-opacity duration-300"
                    />
                    <div
                        className="absolute inset-0 bg-[#051118]/10 mix-blend-overlay pointer-events-none rounded-[var(--radius-2xl)]" aria-hidden="true"/>
                </div>
            </div>
            {/* Video Section END */}
        </div>
    );
}
