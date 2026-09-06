import React, {
    type RefObject,
    useEffect,
    useRef,
    useState,
} from "react";
import {
    ChevronLeft,
    ChevronRight,
    Sparkles,
    Film,
    Layers,
    Box,
} from "lucide-react";
import { SmartImage } from "@/utils/SmartImage";
import ShowreelChooser from "./ShowreelChooser";

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

function captureFifthFrame(videoUrl: string): Promise<string> {
    return new Promise((resolve, reject) => {
        const v = document.createElement("video");
        v.crossOrigin = "anonymous";
        v.muted = true;
        v.preload = "auto";
        v.src = videoUrl;
        const cleanup = () => { v.remove(); };
        v.addEventListener("loadeddata", () => {
            // 5th frame ≈ 5/30 = 0.166s; clamp to duration
            const t = Math.min(0.17, v.duration - 0.05 || 0.17);
            v.currentTime = t;
        });
        v.addEventListener("seeked", () => {
            try {
                const c = document.createElement("canvas");
                c.width = v.videoWidth || 640;
                c.height = v.videoHeight || 360;
                const ctx = c.getContext("2d")!;
                ctx.drawImage(v, 0, 0, c.width, c.height);
                const url = c.toDataURL("image/jpeg", 0.8);
                cleanup();
                resolve(url);
            } catch (e) { cleanup(); reject(e); }
        });
        v.addEventListener("error", (e) => { cleanup(); reject(e); });
        // timeout fallback
        setTimeout(() => { cleanup(); reject(new Error("timeout")); }, 5000);
    });
}

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
    const containerRef = useRef<HTMLDivElement>(null);
    const [canLoadVideo, setCanLoadVideo] = useState(false);
    const [fifthFramePosters, setFifthFramePosters] = useState<Record<string, string>>({});
    useEffect(() => {
        let cancelled = false;
        CATEGORIES.forEach(async (c) => {
            try {
                const url = await captureFifthFrame(c.videoUrl);
                if (!cancelled) setFifthFramePosters((p) => ({ ...p, [c.videoUrl]: url }));
            } catch {}
        });
        return () => { cancelled = true; };
    }, []);
    const resolvedPoster = fifthFramePosters[activeVideo];

    const goPrev = () => {
        const idx = CATEGORIES.findIndex((c) => c.id === activeTab);
        const prev = (idx - 1 + CATEGORIES.length) % CATEGORIES.length;
        onCategoryChange(CATEGORIES[prev].id);
    };
    const goNext = () => {
        const idx = CATEGORIES.findIndex((c) => c.id === activeTab);
        const next = (idx + 1) % CATEGORIES.length;
        onCategoryChange(CATEGORIES[next].id);
    };

    const [isShowreelOpen, setIsShowreelOpen] = useState(false);
    const chooserItems = CATEGORIES.map((c) => ({
        id: c.id,
        title: c.title,
        thumbnail: fifthFramePosters[c.videoUrl] || c.image,
        src: c.image,
    }));
    const openShowreel = () => setIsShowreelOpen(true);
    useEffect(() => {
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
        const el = containerRef.current;
        if (!el) return;
        const io = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) { setCanLoadVideo(true); io.disconnect(); }
        }, { rootMargin: "200px", threshold: 0 });
        io.observe(el);
        return () => io.disconnect();
    }, []);

    return (
        <div className="relative w-full max-w-[850px] xl:max-w-[950px] mx-auto animate-fade-in flex flex-col items-center">
            {/* Background Glow Overlay Elements */}
            <div className="absolute -inset-10 pointer-events-none hidden md:block overflow-visible -z-10">
                <img
                    src="/home/RightElements/el/20.svg"
                    alt=""
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-contain scale-[1.2] opacity-70"
                />
            </div>

            <img
                src="/home/RightElements/el/2.svg"
                alt=""
                loading="lazy"
                decoding="async"
                className="absolute -top-60 -right-10 scale-[1.3] z-10 h-300 w-300 object-contain pointer-events-none hidden lg:block "
            />

            {/* Giant Mockup Player Container */}
            <div ref={containerRef} className="relative aspect-16/10 w-full rounded-[24px] sm:rounded-[32px] md:rounded-[36px] flex justify-center items-end border border-white/10 shadow-[0_30px_80px_-20px_rgba(0,169,189,0.35)] overflow-hidden bg-[#02070f]">
                <SmartImage src="/home/VideoElements/20/mother.webp" alt="" fill priority className="rounded-[inherit] object-cover" />

                {/* Top header bar inside Mockup */}
                <div className="absolute top-0 left-0 z-10 flex items-center justify-between w-full px-3 py-2 sm:px-5 sm:py-3 md:px-6 md:py-3.5 text-white/70">
                    <div className="flex items-center gap-2">
                        <button aria-label="Previous" onClick={goPrev} className="p-1 cursor-pointer text-white/60 hover:text-white transition-colors">
                            <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
                        </button>
                        <button aria-label="Next" onClick={goNext} className="p-1 cursor-pointer text-white/60 hover:text-white transition-colors">
                            <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
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
                        src={canLoadVideo ? activeVideo : undefined}
                        poster={resolvedPoster}
                        preload="none"
                        autoPlay={canLoadVideo}
                        muted
                        loop
                        playsInline
                        onTimeUpdate={handleTimeUpdate}
                        className="absolute inset-0 h-full w-full object-cover rounded-[inherit] transition-opacity duration-300"
                    />
                    <div className="absolute inset-0 bg-[#051118]/10 mix-blend-overlay pointer-events-none rounded-[inherit]" aria-hidden="true" />
                </div>
            </div>

            {/* Showreel button — mobile only, hidden on desktop (category bar replaces it) */}
            <button
                onClick={openShowreel}
                className="mt-4 inline-flex lg:hidden items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-bold text-[#071B2A] shadow-[0_8px_24px_rgba(0,0,0,0.25)] hover:bg-white/90 transition-colors cursor-pointer"
            >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M5 3l14 9-14 9V3z" /></svg>
                Showreel
            </button>

            <ShowreelChooser
                isOpen={isShowreelOpen}
                onClose={() => setIsShowreelOpen(false)}
                items={chooserItems}
                onSelect={(it) => onCategoryChange(String(it.id))}
            />

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
