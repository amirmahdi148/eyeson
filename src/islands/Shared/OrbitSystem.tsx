"use client";

import { memo, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { motion, useInView, type Variants } from "framer-motion";
import OrbitCircles from "../../../public/Shared/Orbit-Circles.svg";

type AssetWithSrc = {
    src: string;
};

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);
/* ================= TYPES ================= */

export interface IconConfig {
    name: string;
    start: number;
    end: number;
    iconSrc?: string | AssetWithSrc;
    iconAlt?: string;
    iconSize?: number;
    iconClassName?: string;
}

export interface OrbitConfig {
    pathD: string;
    stroke?: string;
    color?: string;
    icons: IconConfig[];
}

export interface ButtonConfig {
    label: string;
    link?: string;
    onClick?: () => void;
    icon?: React.ReactNode;
    iconPosition?: "left" | "right";
    variant?: "primary" | "secondary";
    className?: string;
}

export interface ContentConfig {
    headingHighlight?: string;
    headingMain: string;
    headingSecondLine?: string;
    subheading?: string;
    buttons?: ButtonConfig[];
}

export const content: ContentConfig = {
    headingHighlight: "300+",
    headingMain: "Animations",
    headingSecondLine: "crafted every year",
    subheading: "We started as a small collective obsessed with turning raw concepts into striking visuals. Over time, that obsession became a full-scale design and animation practice trusted by brands that care about clarity, style, and storytelling.",
    buttons: [
        {
            label: "See our work",
            link: "/work",
            variant: "primary"
        },
        {
            label: "Play showreels",
            onClick: () => console.log("Play showreels clicked"),
            variant: "secondary"
        },
    ]
};

interface OrbitSystemProps {
    orbits: OrbitConfig[];
    content: ContentConfig;
    width?: string | number;
    height?: string | number;
    animations: boolean;
}

/* ================= FRAMER VARIANTS ================= */

const ContentSpawn: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" },
    },
};

const OrbitSpawn: Variants = {
    hidden: { opacity: 0 },
    visible: (delay: number) => ({
        opacity: 1,
        transition: { duration: 0.8, delay, ease: "easeOut" },
    }),
};

const IconSpawn: Variants = {
    hidden: { opacity: 0 },
    visible: (delay: number) => ({
        opacity: 1,
        transition: {
            duration: 0.6,
            delay,
        },
    }),
};

/* ================= DELAYS ================= */

const orbitDelays = [2, 0.7, 1.2];

/* ================= COMPONENT ================= */

export const OrbitSystem = memo(function OrbitSystem({
                                                         orbits,
                                                         content,
                                                         animations,
                                                     }: OrbitSystemProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const sceneRef = useRef<HTMLDivElement>(null);
    const orbitPathsRef = useRef<SVGPathElement[]>([]);
    const iconRefs = useRef<Record<string, SVGGElement | null>>({});
    const animationInitializedRef = useRef(false);
    const iconTweensRef = useRef<gsap.core.Tween[]>([]);

    const isInView = useInView(containerRef, {
        once: true,
        margin: "-100px",
    });

    /* ===== GSAP (lazy) ===== */
    useLayoutEffect(() => {
        if (!sceneRef.current || !animations || animationInitializedRef.current || !isInView) {
            return;
        }

        animationInitializedRef.current = true;
        iconTweensRef.current.forEach(tween => tween.kill());
        iconTweensRef.current = [];

        const ctx = gsap.context(() => {
            orbits.forEach((orbit, orbitIndex) => {
                const pathEl = orbitPathsRef.current[orbitIndex];
                if (!pathEl) return;

                orbit.icons.forEach(icon => {
                    const iconEl = iconRefs.current[icon.name];
                    if (!iconEl) return;

                    iconTweensRef.current.push(
                        gsap.to(iconEl, {
                            ease: "none",
                            motionPath: {
                                path: pathEl,
                                align: pathEl,
                                alignOrigin: [0.5, 0.5],
                                start: icon.start,
                                end: icon.end,
                            },
                            scrollTrigger: {
                                trigger: sceneRef.current!,
                                start: "top 85%",
                                end: "bottom 15%",
                                scrub: 0,
                                fastScrollEnd: true,
                            },
                        })
                    );
                });
            });

            ScrollTrigger.refresh();
        }, sceneRef);

        return () => {
            animationInitializedRef.current = false;
            iconTweensRef.current.forEach(tween => tween.kill());
            iconTweensRef.current = [];
            ctx.revert();
        };
    }, [animations, isInView, orbits]);

    const orbitIconSize = OrbitCircles.width ?? 64;
    const orbitIconRadius = orbitIconSize / 2;
    const defaultInnerIconSize = orbitIconSize * 0.8;

       return (
        <div
            ref={containerRef}
            // ارتفاع بهینه شده: روی موبایل کوتاه‌تر که فضای اضافی نگیره، دسکتاپ بزرگتر
            className="w-full min-h-[60vh] sm:min-h-[70vh] lg:min-h-[800px] overflow-hidden relative flex flex-col items-center justify-center py-16 md:py-24"
        >
            <div
                ref={sceneRef}
                className="absolute inset-0 pointer-events-none overflow-hidden will-change-transform"
                style={{
                    WebkitMaskImage: "linear-gradient(to bottom, black 60%, transparent 100%)",
                    maskImage: "linear-gradient(to bottom, black 60%, transparent 100%)"
                }}
            >
                <div className="relative w-full h-full flex items-center justify-center max-w-[1400px] mx-auto">
                    <motion.svg
                        viewBox="0 -15 1000 1000"
                        preserveAspectRatio="xMidYMid meet"
                        // 🔴 مقیاس‌ها به‌شدت بهینه‌شد تا تو موبایل کل مدارها کامل معلوم بشن (scale-75 یا حتی کوچکتر)
                        className="absolute inset-0 w-full h-full mx-auto scale-90 sm:scale-95 md:scale-90 lg:scale-80 xl:scale-75 will-change-transform"
                    >
                        <defs>
                            <linearGradient id="orbit-fade" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#1AD9E0" stopOpacity="0.95" />
                                <stop offset="58%" stopColor="#13C7D0" stopOpacity="0.88" />
                                <stop offset="82%" stopColor="#0A8FA1" stopOpacity="0.34" />
                                <stop offset="100%" stopColor="#086374" stopOpacity="0.05" />
                            </linearGradient>
                        </defs>

                        {orbits.map((orbit, orbitIndex) => {
                            const orbitDelay = orbitDelays[orbitIndex] ?? 0.5;

                            return (
                                <motion.g
                                    key={orbitIndex}
                                    // 🔴 اگر می‌خوای در موبایل همه مدارها باشند، بخش hidden lg:block رو برداشتم
                                    className={`orbit-${orbitIndex + 1}`}
                                    variants={OrbitSpawn}
                                    custom={orbitDelay}
                                    initial="hidden"
                                    animate={
                                        isInView && animations ? "visible" : "hidden"
                                    }
                                >
                                    <path
                                        ref={el => {
                                            if (el) orbitPathsRef.current[orbitIndex] = el;
                                        }}
                                        d={orbit.pathD}
                                        fill="none"
                                        stroke="url(#orbit-fade)"
                                        strokeWidth="1.5"
                                        vectorEffect="non-scaling-stroke"
                                    />

                                    {orbit.icons.map((icon, iconIndex) => {
                                        const iconSrcValue = icon.iconSrc
                                            ? typeof icon.iconSrc === "string"
                                                ? icon.iconSrc
                                                : icon.iconSrc.src
                                            : undefined;
                                        const iconWidth = icon.iconSize ?? defaultInnerIconSize;
                                        const iconRadius = iconWidth / 2;

                                        return (
                                            <motion.g
                                                key={icon.name}
                                                ref={el => {
                                                    if (el) {
                                                        iconRefs.current[icon.name] = el;
                                                    } else {
                                                        delete iconRefs.current[icon.name];
                                                    }
                                                }}
                                                className={`icon ${icon.name}`}
                                                variants={IconSpawn}
                                                custom={orbitDelay + iconIndex * 0.15}
                                            >
                                                <image
                                                    href={OrbitCircles.src}
                                                    width={orbitIconSize}
                                                    height={orbitIconSize}
                                                    x={-orbitIconRadius}
                                                    y={-orbitIconRadius}
                                                    preserveAspectRatio="xMidYMid meet"
                                                    className="pointer-events-none will-change-transform"
                                                />
                                                {iconSrcValue && (
                                                    <image
                                                        href={iconSrcValue}
                                                        width={iconWidth}
                                                        height={iconWidth}
                                                        x={-iconRadius}
                                                        y={-iconRadius}
                                                        preserveAspectRatio="xMidYMid meet"
                                                        aria-label={icon.iconAlt ?? icon.name}
                                                        className={`pointer-events-none ${icon.iconClassName ?? ""}`.trim()}
                                                    />
                                                )}
                                            </motion.g>
                                        );
                                    })}
                                </motion.g>
                            );
                        })}
                    </motion.svg>
                </div>
            </div>

            <motion.div
                className="relative z-10 flex flex-col items-center justify-center text-center px-4 sm:px-8 max-w-4xl mx-auto w-full mt-8 sm:mt-12 lg:mt-20"
                variants={ContentSpawn}
                initial="hidden"
                animate={isInView && animations ? "visible" : "hidden"}
            >
                <h3 className="text-3xl leading-[1.15] tracking-tight sm:text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold text-white relative z-10 mb-4 sm:mb-6">
                    {content.headingHighlight ? <span className="text-[#38B6B3] block sm:inline">{content.headingHighlight}</span> : null}
                    {content.headingHighlight ? " " : null}
                    {content.headingMain}
                    {content.headingSecondLine ? <><br className="hidden sm:block" />{content.headingSecondLine}</> : null}
                </h3>

                {content.subheading && (
                    <h5 className="text-[14px] sm:text-base md:text-lg w-full max-w-[300px] sm:max-w-xl md:max-w-2xl text-white/60 relative z-10 leading-[1.7] mx-auto font-light">
                        {content.subheading}
                    </h5>
                )}

                {content.buttons && (
                    <div className="flex flex-col w-full max-w-[320px] sm:max-w-none sm:w-auto sm:flex-row gap-3 sm:gap-4 md:gap-5 mt-8 sm:mt-10 relative z-10 mx-auto">
                        {content.buttons.map((btn, idx) => {
                            const shared = "border text-white rounded-full font-bold cursor-pointer transition-all duration-300 py-3.5 sm:py-3 px-8 text-[15px] w-full sm:w-auto flex items-center justify-center relative overflow-hidden group";

                            const variant = idx === 0
                                ? "border-[#00CFE8] bg-gradient-to-r from-[#179B89] to-[#0D5F63] hover:scale-[1.02] shadow-[inset_0_1px_0_rgba(255,255,255,0.2)]"
                                : "border-cyan-400/40 bg-[#040e14] hover:bg-[#071822] hover:border-cyan-300/80";

                            return (
                                <a
                                    key={idx}
                                    href={btn.link}
                                    className={`${shared} ${variant} ${btn.className || ""}`}
                                >
                                    {idx === 0 && <div className="absolute -inset-[2px] rounded-full bg-gradient-to-r from-[#1AA19C] to-[#0A4F53] blur-[10px] opacity-0 group-hover:opacity-60 transition-opacity duration-300 pointer-events-none"></div>}
                                    <span className="relative z-10">{btn.label}</span>
                                </a>
                            );
                        })}
                    </div>
                )}
            </motion.div>

            <div className="absolute bottom-0 left-0 w-full h-32 lg:h-48 bg-gradient-to-b from-transparent  pointer-events-none z-0"></div>
        </div>
    );
});