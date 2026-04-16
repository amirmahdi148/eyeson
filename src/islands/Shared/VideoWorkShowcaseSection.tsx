"use client";


const firstRow = [
    { id: 1, src: "/slider1.png", alt: "Abstract video edit sample" },
    { id: 2, src: "/animation-section/video.jpg", alt: "Before after edit sample" },
    { id: 3, src: "/videoEditing.png", alt: "Video timeline interface sample" },
    { id: 4, src: "/animation-section/short-form.png", alt: "Promotional edit sample" },
];

const secondRow = [
    { id: 5, src: "/animation-section/video.jpg", alt: "Story edit sample" },
    { id: 6, src: "/animation-section/short-form.png", alt: "Product promo sample" },
    { id: 7, src: "/videoEditing.png", alt: "Editing process sample" },
    { id: 8, src: "/slider1.png", alt: "Motion graphics sample" },
];

function PlayBadge() {
    return (
        <div className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-[#9de9e5] bg-[#08263a]/85">
            <svg className="h-3.5 w-3.5 text-[#b9ffff]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z" />
            </svg>
        </div>
    );
}

function WorkCard({ src, alt }: { src: string; alt: string }) {
    return (
        <article className="group relative h-44 w-[300px] shrink-0 overflow-hidden rounded-2xl border border-[#188e9f]/70">
            <img
                src={src}
                alt={alt}

                className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/30 transition-colors duration-300 group-hover:bg-black/15" />
            <PlayBadge />
        </article>
    );
}

type VideoWorkShowcaseSectionProps = {
    eyebrow?: string;
    title?: string;
    highlight?: string;
    description?: string;
};

export default function VideoWorkShowcaseSection({
                                                     eyebrow = "OUR WORK",
                                                     title = "Elevate your brand through",
                                                     highlight = "Video editing",
                                                     description = "Captivate your audience and outshine competitors with polished, story-driven editing. From product walkthroughs to social promos, each frame works harder for your message.",
                                                 }: VideoWorkShowcaseSectionProps) {
    const mobileCards = [...firstRow, ...secondRow];

    return (
        <section className="relative overflow-hidden px-6 pb-24 pt-12 lg:px-20">
            <div className="absolute inset-0 -z-10 " />

            <div className="mx-auto max-w-7xl">
                <div className="mx-auto max-w-3xl text-center">
                    <p className="text-xs tracking-[0.18em] text-[#c6d6de]">{eyebrow}</p>
                    <h2 className="mt-4 text-4xl font-bold leading-tight text-white md:text-6xl">
                        {title}
                        <br />
                        <span className="text-[#35d2cc]">{highlight}</span>
                    </h2>
                    <p className="mt-5 text-sm leading-7 text-[#c5d7e0]">{description}</p>
                </div>

            </div>

            <div className="mt-10 space-y-4">
                <div className="flex gap-4 overflow-x-auto pb-2 md:hidden">
                    {mobileCards.map((item, idx) => (
                        <WorkCard key={`${item.id}-mobile-${idx}`} src={item.src} alt={item.alt} />
                    ))}
                </div>

                <div className="hidden space-y-4 md:block">
                    <div className="relative w-full overflow-hidden">
                        <div className="flex gap-4 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                            {[...firstRow, ...firstRow, ...firstRow].map((item, idx) =>
                                item.id === 2 ? (
                                    <article
                                        key={`${item.id}-${idx}`}
                                        className="relative h-44 w-[360px] shrink-0 overflow-hidden rounded-2xl border border-[#188e9f]/70"
                                    >
                                        <div className="absolute inset-0 grid grid-cols-2">
                                            <div className="relative">
                                                <img src={item.src} alt="Before edit sample" className="object-cover" />
                                            </div>
                                            <div className="relative border-l border-[#81e8e4]/50">
                                                <img
                                                    src="/animation-section/3D.jpg"
                                                    alt="After edit sample"

                                                    className="object-cover"
                                                />
                                            </div>
                                        </div>
                                        <div className="absolute inset-0 bg-black/20" />
                                        <div className="absolute left-3 top-3 text-4xl font-extrabold tracking-[0.2em] text-white/90">
                                            BEFORE&nbsp;&nbsp;AFTER
                                        </div>
                                    </article>
                                ) : (
                                    <WorkCard key={`${item.id}-${idx}`} src={item.src} alt={item.alt} />
                                )
                            )}
                        </div>
                    </div>

                    <div className="relative w-full overflow-hidden">
                        <div className="flex gap-4 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                            {[...secondRow, ...secondRow, ...secondRow].map((item, idx) => (
                                <WorkCard key={`${item.id}-${idx}`} src={item.src} alt={item.alt} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
