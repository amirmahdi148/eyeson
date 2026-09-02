import React, {
    type RefObject,
} from "react";
import {
    Home,
    ArrowRight,
    Folder,
    Plus,
    Pen,
    Sparkles,
    Film,
    Layers,
    Box,
} from "lucide-react";
import { SmartImage } from "@/utils/SmartImage";

const CATEGORIES = [
    {
        id: "video-editing",
        title: "Video Editing",
        badge: "4K Cuts",
        icon: Film,
        image: "/home/20/2.webp",
        videoUrl: "/home/Videos/output-first.mp4",
    },
    {
        id: "motion-design",
        title: "Motion Design",
        badge: "2D Motion",
        icon: Sparkles,
        image: "/home/20/1.webp",
        videoUrl: "/home/Videos/output-second.mp4",
    },
    {
        id: "3d-uiux",
        title: "3D & UI/UX",
        badge: "Visual Flow",
        icon: Box,
        image: "/home/20/3.webp",
        videoUrl: "/home/Videos/output-third.mp4",
    },
    {
        id: "brand-identity",
        title: "Brand Identity",
        badge: "Visual System",
        icon: Layers,
        image: "/home/20/4.webp",
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
    shouldReduceMotion?: boolean | null;
    videoRef: RefObject<HTMLVideoElement | null>;
    handleTimeUpdate: () => void;
    onCategoryChange: (category: string) => void;
}

export default function RightSectionHero({
    activeTab,
    videoRef,
    handleTimeUpdate,
    onCategoryChange,
}: RightSectionHeroProps) {
    const activeVideo = CATEGORIES.find((c) => c.id === activeTab)?.videoUrl || CATEGORIES[0].videoUrl;
    const resolvedPoster = activeVideo ? VIDEO_POSTERS[activeVideo] : undefined;

    return (
        <div className="relative w-full max-w-[850px] xl:max-w-[950px] mx-auto animate-fade-in flex flex-col items-center">
            {/* Background Glow Overlay Elements */}
            <div className="absolute -inset-10 pointer-events-none hidden md:block overflow-visible -z-10">
                <img
                    src="/home/RightElements/el/20.svg"
                    alt=""
                    className="h-full w-full object-contain scale-[1.2] opacity-70"
                />
            </div>
            <img
                src="/home/RightElements/el/1.svg"
                alt=""
                className="absolute -top-12 -left-10 z-0 h-40 w-40 object-contain pointer-events-none hidden lg:block opacity-80"
            />
            <img
                src="/home/RightElements/el/2.svg"
                alt=""
                className="absolute -top-10 -right-8 z-0 h-36 w-36 object-contain pointer-events-none hidden lg:block opacity-80"
            />

            {/* Giant Mockup Player Container */}
            <div className="relative aspect-16/10 w-full rounded-[24px] sm:rounded-[32px] md:rounded-[36px] flex justify-center items-end border border-white/10 shadow-[0_30px_80px_-20px_rgba(0,169,189,0.35)] overflow-hidden bg-[#02070f]">
                <SmartImage src="/home/VideoElements/20/mother.webp" alt="" fill priority={false} className="rounded-[inherit] object-cover" />

                {/* Top header bar inside Mockup */}
                <div className="absolute top-0 left-0 z-10 flex items-center justify-between w-full px-3 py-2 sm:px-5 sm:py-3 md:px-6 md:py-3.5 text-white/70">
                    <div className="flex items-center gap-2.5 sm:gap-4">
                        <button aria-label="Home" className="cursor-pointer transition-colors hover:text-[#00E6D7] rounded-sm">
                            <Home className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                        </button>
                        <button aria-label="Next" className="cursor-pointer transition-colors hover:text-[#00E6D7] rounded-sm">
                            <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                        </button>
                        <button aria-label="Folder" className="cursor-pointer text-[#00E6D7] rounded-sm">
                            <Folder className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                        </button>
                        <button aria-label="Add" className="cursor-pointer transition-colors hover:text-[#00E6D7] rounded-sm">
                            <Plus className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                        </button>
                        <button aria-label="Edit" className="cursor-pointer transition-colors hover:text-[#00E6D7] rounded-sm">
                            <Pen className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                        </button>
                    </div>

                    <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-black/40 border border-white/10 text-[10px] sm:text-xs text-white/80 font-mono backdrop-blur-md">
                        <span className="h-2 w-2 rounded-full bg-[#00E6D7] shadow-[0_0_8px_#00E6D7] animate-pulse" />
                        <span>LIVE PREVIEW</span>
                    </div>
                </div>

                {/* Inner Video Container */}
                <div className="relative w-full h-[calc(100%-2.2rem)] sm:h-[calc(100%-2.8rem)] md:h-[calc(100%-3.1rem)] mt-6 sm:mt-7 md:mt-8 rounded-[18px] sm:rounded-[24px] md:rounded-[28px] overflow-hidden border border-white/[0.08]">
                    <SmartImage src="/home/VideoElements/20/child.webp" alt="" fill className="rounded-[inherit] object-cover" />
                    <video
                        key={activeTab}
                        ref={videoRef}
                        src={activeVideo}
                        poster={resolvedPoster}
                        preload="metadata"
                        autoPlay
                        muted
                        loop
                        playsInline
                        onTimeUpdate={handleTimeUpdate}
                        className="absolute inset-0 h-full w-full object-cover rounded-[inherit] transition-opacity duration-300"
                    />
                    <div className="absolute inset-0 bg-[#051118]/10 mix-blend-overlay pointer-events-none rounded-[inherit]" aria-hidden="true" />
                </div>
            </div>

            {/* Premium Category Bar — Desktop Only (Clean Glass Cards with Neon Accents) */}
            <div className="hidden lg:grid grid-cols-4 gap-3.5 mt-5 w-full relative z-30">
                {CATEGORIES.map((cat) => {
                    const Icon = cat.icon;
                    const isActive = activeTab === cat.id;

                    return (
                        <button
                            key={cat.id}
                            onClick={() => onCategoryChange(cat.id)}
                            aria-pressed={isActive}
                            className={`group relative flex items-center gap-3 p-3 rounded-2xl border transition-all duration-300 text-left cursor-pointer overflow-hidden backdrop-blur-xl ${
                                isActive
                                    ? "bg-gradient-to-r from-[#042833]/90 to-[#063342]/90 border-[#00E6D7] shadow-[0_0_30px_rgba(0,230,215,0.25)] scale-[1.02]"
                                    : "bg-[#05141e]/80 border-white/[0.08] hover:border-white/25 hover:bg-[#071f2d]/90 hover:scale-[1.01]"
                            }`}
                        >
                            {/* Active Top Glow Line */}
                            {isActive && (
                                <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#00E6D7] to-transparent shadow-[0_0_10px_#00E6D7]" />
                            )}

                            {/* Icon Box */}
                            <div className={`p-2.5 rounded-xl border transition-all duration-300 shrink-0 ${
                                isActive 
                                    ? "bg-[#00E6D7]/20 border-[#00E6D7]/60 text-[#00E6D7] shadow-[0_0_15px_rgba(0,230,215,0.3)]" 
                                    : "bg-white/5 border-white/10 text-white/50 group-hover:text-white group-hover:border-white/20 group-hover:bg-white/10"
                            }`}>
                                <Icon className="h-4 w-4" />
                            </div>

                            <div className="min-w-0 flex-1">
                                <span className={`block text-[10px] font-mono uppercase tracking-wider transition-colors ${
                                    isActive ? "text-[#00E6D7]" : "text-white/40 group-hover:text-white/60"
                                }`}>
                                    {cat.badge}
                                </span>
                                <span className={`block text-[13px] font-bold truncate transition-colors ${
                                    isActive ? "text-white" : "text-white/80 group-hover:text-white"
                                }`}>
                                    {cat.title}
                                </span>
                            </div>
                        </button>
                    );
                })}
            </div>
        </div>
    );
}
