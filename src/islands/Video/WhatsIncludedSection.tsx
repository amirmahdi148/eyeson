"use client";


import { useRef, useState } from "react";
import { ClosedCaption, Palette, AudioWaveformIcon } from "lucide-react";
import {Scissors} from "lucide-react";
import {SmartImage} from "../../utils/SmartImage.tsx";

const includedCards = [
    {
        id: 1,
        title: "Subtitles & Captions",
        description:
            "Clean, readable subtitles designed for sound-off viewing. Optimized for retention and accessibility.",
        icon: ClosedCaption,
    },
    {
        id: 2,
        title: "Color Correction & Grading",
        description:
            "Balanced, cinematic color that enhances mood and maintains brand consistency.",
        icon: Palette,
    },
    {
        id: 3,
        title: "B-Roll Integration",
        description:
            "Smart b-roll cuts that add context, energy, and visual clarity to your story.",
        icon: Scissors,
    },
    {
        id: 4,
        title: "Sound Design",
        description:
            "Music, transitions, and audio polish that elevate pacing and emotional impact.",
        icon: AudioWaveformIcon,
    },
];

export default function WhatsIncludedSection() {
    const sliderRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const frameRef = useRef<number | null>(null);

    return (
        <section className="px-6 pb-24 pt-8 lg:px-20">
            <div className="mx-auto max-w-7xl">
                <div className="mb-10 text-center">
                    <h2 className="text-4xl font-extrabold text-white md:text-5xl">
                        WHAT&apos;S INCLUDED
                    </h2>
                    <p className="mt-3 text-sm text-[#c2d3dc] md:text-base">
                        Every edit is optimized for performance.
                    </p>
                </div>

                <div className="grid gap-5 lg:grid-cols-2">
                    <article className="rounded-2xl ] bg-[#0B1F2A] p-4">
                        <h3 className="text-3xl font-bold bg-linear-to-r from-[#46B6A0] to-[#00A9BD] bg-clip-text text-transparent">Hook Optimization</h3>
                        <p className="mt-2 text-sm leading-7 text-[#c4d6df]">
                            We craft the first seconds to stop the scroll and keep viewers
                            watching. Your message lands instantly.
                        </p>

                        <div className="relative mt-4 h-[360px] overflow-hidden rounded-xl shadow-[0_0_15px_#00A9BDB2]">
                            <SmartImage
                                src="/animation-section/video.jpg"
                                alt="Hook optimization sample"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </article>

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
                                    Math.min(includedCards.length - 1, Math.round(scrollLeft / clientWidth)),
                                );
                                setActiveIndex((prev) => (prev === idx ? prev : idx));
                            });
                        }}
                        className="flex snap-x snap-mandatory gap-4 overflow-x-auto lg:grid lg:overflow-visible lg:snap-none lg:gap-5 lg:grid-cols-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                    >
                        {includedCards.map((item) => {
                            const Icon = item.icon;

                            return (
                                <article
                                    key={item.id}
                                    className="w-full min-w-full snap-center rounded-2xl bg-linear-to-br from-[#0B1F2A] to-[#093C49] p-5 lg:min-w-0"
                                >
                                    <div className="mb-4 inline-flex h-11 w-11 items-center bg-linear-to-br from-[#000E17] shadow-[0_0_10px_#00A9BD80] to-[#143C3E] justify-center rounded-xl border border-[#1ed7d8]/60 text-[#1ed7d8]">
                                        <Icon className="h-6 w-6" />
                                    </div>
                                    <h3 className="text-3xl font-bold text-white">{item.title}</h3>
                                    <p className="mt-2 text-sm leading-7 text-[#c4d6df]">
                                        {item.description}
                                    </p>
                                </article>
                            );
                        })}
                    </div>
                    <div className="mt-4 flex items-center justify-center gap-2 lg:hidden">
                        {includedCards.map((item, index) => (
                            <span
                                key={item.id}
                                className={`h-2.5 w-2.5 rounded-full ${
                                    index === activeIndex ? "bg-[#23d8dc]" : "bg-white/15"
                                }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
