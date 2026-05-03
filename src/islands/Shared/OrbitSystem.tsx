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
            className="w-full min-h-screen sm:min-h-screen lg:min-h-screen overflow-hidden relative flex items-center justify-center bg-[#000E17]"
        >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_58%,rgba(26,214,205,0.34)_0%,rgba(8,89,101,0.28)_28%,rgba(2,26,41,0.55)_55%,rgba(0,14,23,0.94)_75%,#000E17_100%)]" />
            <div
                ref={sceneRef}
                className="absolute inset-0 pointer-events-none overflow-hidden will-change-transform"
            >
                <div className="relative w-full h-full">
                    <motion.svg
                        viewBox="0 -15 1000 1000"
                        preserveAspectRatio="xMidYMid meet"
                        className="absolute inset-0 w-full h-full mx-auto scale-150 sm:scale-120 md:scale-100 will-change-transform"
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
                                    className={`orbit-${orbitIndex + 1} ${orbitIndex > 2 ? "hidden lg:block" : ""}`}
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
                className="relative z-10 flex flex-col items-center justify-center gap-2 sm:gap-4 md:gap-6 min-h-screen sm:min-h-[80vh] lg:min-h-[70vh] w-full pt-16 sm:pt-20 lg:pt-0 pb-6 sm:pb-8 lg:pb-0 text-center px-5 sm:px-8 max-w-4xl mx-auto"
                variants={ContentSpawn}
                initial="hidden"
                animate={isInView && animations ? "visible" : "hidden"}
            >
                <div className="w-32 h-32 sm:w-50 sm:h-50 md:w-170 md:h-170 rounded-full bg-[#16C7C4]/28 blur-[80px] sm:blur-[110px] md:blur-[200px] absolute z-1 pointer-events-none" />

                <h3 className="text-xl leading-tight sm:text-2xl md:text-3xl lg:text-5xl font-bold text-white relative z-10">
                    {content.headingHighlight ? <span className="text-[#38B6B3]">{content.headingHighlight}</span> : null}
                    {content.headingHighlight ? " " : null}
                    {content.headingMain}
                    {content.headingSecondLine ? <><br />{content.headingSecondLine}</> : null}
                </h3>

                {content.subheading && (
                    <h5 className="text-xs sm:text-sm md:text-base lg:text-xl w-full max-w-xs sm:max-w-160 md:max-w-160 lg:w-120 text-[#B5C6CC] relative z-10 leading-relaxed">{content.subheading}</h5>
                )}

                {content.buttons && (
                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 md:gap-6 mt-4 sm:mt-6 md:mt-8 w-full sm:w-auto relative z-10">
                        {content.buttons.map((btn, idx) => {
                            const shared = "border-2 md:border-3 text-white rounded-full font-bold cursor-pointer transition-colors duration-300 py-3 sm:py-3 md:py-4 px-6 sm:px-8 md:px-14 text-sm sm:text-sm md:text-base lg:text-xl w-full sm:w-auto";

                            const variant = idx === 0
                                ? "border-[#00CFE8] bg-gradient-to-r from-[#00CFE8] to-[#0D8F79] hover:opacity-90"
                                : "border-[#056E7C] hover:bg-[#056E7C]";

                            return (
                                <a
                                    key={idx}
                                    href={btn.link}
                                    className={`${shared} ${variant} ${btn.className || ""}`}
                                >
                                    {btn.label}
                                </a>
                            );
                        })}
                    </div>
                )}
            </motion.div>
        </div>
    );
});