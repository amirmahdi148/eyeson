"use client";

type ShowcaseItem = {
  id: number;
  src: string;
  alt: string;
};

const defaultFirstRow: ShowcaseItem[] = [
  { id: 1, src: "/slider1.png", alt: "Abstract video edit sample" },
  { id: 2, src: "/animation-section/video.jpg", alt: "Before after edit sample" },
  { id: 3, src: "/videoEditing.png", alt: "Video timeline interface sample" },
  { id: 4, src: "/animation-section/short-form.png", alt: "Promotional edit sample" },
  { id: 5, src: "/animation-section/3D.jpg", alt: "3D animation sample" },
  { id: 6, src: "/slider1.png", alt: "Motion graphics sample" },
  { id: 7, src: "/videoEditing.png", alt: "Color grading sample" },
  { id: 8, src: "/animation-section/video.jpg", alt: "Brand video sample" },
];

const defaultSecondRow: ShowcaseItem[] = [
  { id: 9, src: "/animation-section/video.jpg", alt: "Story edit sample" },
  { id: 10, src: "/animation-section/short-form.png", alt: "Product promo sample" },
  { id: 11, src: "/videoEditing.png", alt: "Editing process sample" },
  { id: 12, src: "/slider1.png", alt: "Motion graphics sample" },
  { id: 13, src: "/animation-section/3D.jpg", alt: "Cinematic sample" },
  { id: 14, src: "/animation-section/short-form.png", alt: "Social content sample" },
  { id: 15, src: "/videoEditing.png", alt: "Reel sample" },
  { id: 16, src: "/animation-section/video.jpg", alt: "Ad edit sample" },
];

function PlayBadge() {
  return (
    <div className="absolute left-3 top-3 flex h-8 w-8 items-center justify-center rounded-full border border-[#9de9e5] bg-[#08263a]/85 sm:left-4 sm:top-4 sm:h-9 sm:w-9">
      <svg className="h-3 w-3 text-[#b9ffff] sm:h-3.5 sm:w-3.5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M8 5v14l11-7z" />
      </svg>
    </div>
  );
}

function WorkCard({ src, alt }: { src: string; alt: string }) {
  return (
    <article className="group relative shrink-0 overflow-hidden rounded-xl border border-[#188e9f]/70 sm:rounded-2xl"
      style={{ width: "calc((100vw - 32px) / 3)", height: "calc((100vw - 32px) / 3 * 0.65)", maxWidth: "300px", maxHeight: "200px", minWidth: "110px", minHeight: "72px" }}
    >
      <img
        src={src}
        alt={alt}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black/30 transition-colors duration-300 group-hover:bg-black/15" />
      <PlayBadge />
    </article>
  );
}

type VideoWorkShowcaseSectionProps = {
  eyebrow?: string | null;
  title?: string;
  highlight?: string | null;
  description?: string;
  firstRow?: ShowcaseItem[];
  secondRow?: ShowcaseItem[];
  sectionClassName?: string;
  eyebrowClassName?: string;
  titleClassName?: string;
  highlightClassName?: string;
  descriptionClassName?: string;
  fadeColor?: string;
};

export default function VideoWorkShowcaseSection({
  eyebrow = "OUR WORK",
  title = "Elevate your brand through",
  highlight = "Video editing",
  description = "Captivate your audience and outshine competitors with polished, story-driven editing. From product walkthroughs to social promos, each frame works harder for your message.",
  firstRow = defaultFirstRow,
  secondRow = defaultSecondRow,
  sectionClassName = "",
  eyebrowClassName = "text-[10px] tracking-[0.18em] text-[#c6d6de] sm:text-xs",
  titleClassName = "mt-3 text-3xl font-bold leading-tight text-white sm:mt-4 sm:text-4xl md:text-5xl lg:text-6xl",
  highlightClassName = "text-[#35d2cc]",
  descriptionClassName = "mx-auto mt-4 max-w-2xl text-xs leading-6 text-[#c5d7e0] sm:mt-5 sm:text-sm sm:leading-7",
  fadeColor = "#030d18",
}: VideoWorkShowcaseSectionProps) {
  const doubled1 = [...firstRow, ...firstRow, ...firstRow];
  const doubled2 = [...secondRow, ...secondRow, ...secondRow];

  return (
    <section className={`relative overflow-hidden px-4 pb-16 pt-10 sm:px-6 sm:pb-20 sm:pt-12 lg:px-20 lg:pb-24 ${sectionClassName}`}>

      {/* ── Header ── */}
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          {eyebrow ? <p className={eyebrowClassName}>{eyebrow}</p> : null}
          <h2 className={titleClassName}>
            {title}
            {highlight ? (
              <>
                <br />
                <span className={highlightClassName}>{highlight}</span>
              </>
            ) : null}
          </h2>
          <p className={descriptionClassName}>{description}</p>
        </div>
      </div>

      {/* ── CSS Keyframes ── */}
      <style>{`
        @keyframes scroll-left {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        @keyframes scroll-right {
          0%   { transform: translateX(-33.333%); }
          100% { transform: translateX(0); }
        }
        .track-left {
          display: flex;
          width: max-content;
          animation: scroll-left 35s linear infinite;
          gap: 16px;
        }
        .track-right {
          display: flex;
          width: max-content;
          animation: scroll-right 38s linear infinite;
          gap: 16px;
        }
        .track-left:hover,
        .track-right:hover {
          animation-play-state: paused;
        }
        @media (prefers-reduced-motion: reduce) {
          .track-left, .track-right { animation: none; }
        }
      `}</style>

      {/* ── Rows ── */}
      <div className="mt-8 space-y-3 sm:mt-10 sm:space-y-4">

        {/* ردیف اول: به سمت چپ */}
        <div className="relative w-full overflow-hidden">
          {/* fade mask چپ و راست */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 sm:w-20" style={{ background: `linear-gradient(to right, ${fadeColor}, transparent)` }} />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 sm:w-20" style={{ background: `linear-gradient(to left, ${fadeColor}, transparent)` }} />

          <div className="track-left">
            {doubled1.map((item, idx) => (
              <WorkCard key={`r1-${item.id}-${idx}`} src={item.src} alt={item.alt} />
            ))}
          </div>
        </div>

        {/* ردیف دوم: به سمت راست */}
        <div className="relative w-full overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 sm:w-20" style={{ background: `linear-gradient(to right, ${fadeColor}, transparent)` }} />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 sm:w-20" style={{ background: `linear-gradient(to left, ${fadeColor}, transparent)` }} />

          <div className="track-right">
            {doubled2.map((item, idx) => (
              <WorkCard key={`r2-${item.id}-${idx}`} src={item.src} alt={item.alt} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
