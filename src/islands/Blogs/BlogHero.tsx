import { BlocksRenderer, type BlocksContent } from "@strapi/blocks-react-renderer";

type BlogSection = {
  id?: string;
  title: string;
  intro?: string;
  bullets?: string[];
  points?: string[];
};

interface BlogHeroProps {
  title?: string;
  category?: string;
  date?: string;
  readTime?: string;
  image?: string | null;
  blocks?: BlocksContent;
}

const exampleSections: BlogSection[] = [
  {
    id: "key-takeaways",
    title: "Key takeaways",
    bullets: [
      "A video production subscription gives you continuous access to a creative team.",
      "No more repeated onboarding cycles.",
      "Flexible vs in-house teams.",
    ],
  },
];

const CalculatorWidget = () => {
  const handleCalculate = () => {
    window.location.href = "/pricing";
  };

  const buttons: Array<{ label: string }> = [
    { label: "7" },
    { label: "8" },
    { label: "9" },
    { label: "-" },
    { label: "4" },
    { label: "5" },
    { label: "6" },
    { label: "+" },
    { label: "1" },
    { label: "2" },
    { label: "3" },
    { label: "0" },
    { label: "." },
    { label: "=" },
    { label: "C" },
    { label: "*" },
  ];

  return (
      <div className="space-y-4 rounded-[1.8rem] bg-[#091725] p-5 shadow-[0_0_45px_rgba(0,0,0,0.28)]">
        <div className="pointer-events-none absolute -top-4 -right-2 h-16 w-16 rounded-2xl border border-white/5 bg-[#0e1217]" />

        <span className="pointer-events-none absolute -top-6 -left-3 text-3xl text-[#6ee7b7]">
        ✦
      </span>
        <span className="pointer-events-none absolute top-0 left-5 text-xl text-[#6ee7b7]">
        ✦
      </span>
        <span className="pointer-events-none absolute top-1/2 -left-6 text-xl text-[#a7f3d0] opacity-60">
        ✦
      </span>
        <span className="pointer-events-none absolute top-1/3 -right-4 text-xl text-[#a7f3d0] opacity-60">
        ✦
      </span>

        <div className="relative z-10 rounded-[1.4rem] border-[3px] border-[#006B77] bg-[#020617] p-4 shadow-[0_0_50px_rgba(0,107,119,0.3)]">
          <div className="mb-4 flex h-16.5 items-center justify-between overflow-hidden rounded-2xl border border-white/10 bg-[#333b4d] px-4 shadow-inner">
            <div className="font-sans text-2xl font-bold tracking-wide text-white">
              0
            </div>
            <div className="text-white opacity-90">
              <svg
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
              >
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-2.5">
            {buttons.map(({ label }) => (
                <button
                    key={label}
                    className="flex aspect-square items-center justify-center rounded-[14px] border-b-4 border-[#4b5563] bg-[#2a3441] text-lg font-bold text-[#f3f4f6] shadow-sm transition active:scale-95 hover:bg-[#3a4451]"
                >
                  {label}
                </button>
            ))}
          </div>
        </div>

        <div className="mt-5 text-center">
          <h3 className="text-lg font-semibold text-white">
            Know the cost of your next video? 🎬
          </h3>
          <button
              onClick={handleCalculate}
              className="mt-4 rounded-full bg-linear-to-r from-[#006B77] to-[#2dd4bf] px-6 py-3 font-semibold text-white shadow-[0_0_20px_rgba(0,107,119,0.3)] transition hover:scale-105 active:scale-95"
          >
            Calculate now
          </button>
        </div>
      </div>
  );
};

const sharePost = (platform: "copy" | "linkedin" | "twitter"): void => {
  const url = typeof window !== "undefined" ? window.location.href : "";
  const text = encodeURIComponent(typeof document !== "undefined" ? document.title : "");

  const links: Record<"twitter" | "linkedin" | "copy", string> = {
    twitter: `https://twitter.com/intent/tweet?url=${url}&text=${text}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
    copy: "copied",
  };

  if (platform === "copy") {
    navigator.clipboard.writeText(url).then(r => r);
  } else {
    window.open(links[platform], "_blank", "width=600,height=400");
  }
};

export const BlogHero = ({ title: propTitle, category: propCategory, date: propDate, readTime: propReadTime, image: coverImage, blocks }: BlogHeroProps) => {
  const title = propTitle ?? "Blog Post";
  const category = propCategory ?? "";
  const date = propDate
      ? new Date(propDate).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })
      : "";

  const articleSections = exampleSections;

  return (
      <>
        <section className="relative overflow-hidden  text-white">


          <div className="relative mx-auto flex min-h-svh w-full max-w-350 items-center px-6 py-24 sm:px-8 lg:px-12">
            <div className="grid w-full items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
              <div className="max-w-2xl">
                <p className="mb-5 text-sm tracking-wide text-white/45 sm:text-base">
                  {category}
                </p>
                <h1 className="max-w-3xl text-4xl font-semibold leading-[1.05] text-[#2fd1cf] sm:text-5xl lg:text-6xl">
                  {title}
                </h1>

                <div className="mt-6 max-w-3xl text-base leading-8 text-white/75 sm:text-lg">
                  <span className="flex flex-wrap items-center gap-x-2 gap-y-1">
                    {date && <span>{date}</span>}
                    <span className="hidden sm:inline text-white/40">·</span>
                    <span>By Eyeson Studio</span>
                    {propReadTime && (
                      <>
                        <span className="text-white/40">·</span>
                        <span>{propReadTime}</span>
                      </>
                    )}
                  </span>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -inset-8 rounded-[2.5rem] bg-[#00A9BD]/25 blur-3xl" />
                <div className="relative overflow-hidden rounded-[2rem] border border-[#62e8f1]/20 bg-[#102530]/75 shadow-[0_0_70px_rgba(0,169,189,0.32)] backdrop-blur-md">
                  <div className="relative aspect-[1.02/1] w-full">
                    {coverImage ? (
                      <img
                        src={coverImage}
                        alt={title}
                        className="absolute inset-0 h-full w-full object-cover opacity-80"
                      />
                    ) : (
                      <div className="absolute inset-0 overflow-hidden bg-[#02131C]">
                        <style>{`
                          @keyframes ai-float { 0%, 100% { transform: translateY(0) scale(1); opacity: 0.3; } 50% { transform: translateY(-6px) scale(1.04); opacity: 0.7; } }
                          @keyframes ai-core { 0%, 100% { transform: scale(1); opacity: 0.4; box-shadow: 0 0 15px rgba(0,169,189,0.1); } 50% { transform: scale(1.15); opacity: 0.9; box-shadow: 0 0 45px rgba(0,169,189,0.4); } }
                          @keyframes data-stream { 0% { transform: translateX(-100%); opacity: 0; } 15% { opacity: 0.8; } 85% { opacity: 0.8; } 100% { transform: translateX(400%); opacity: 0; } }
                          @keyframes data-stream-v { 0% { transform: translateY(-100%); opacity: 0; } 15% { opacity: 0.6; } 85% { opacity: 0.6; } 100% { transform: translateY(400%); opacity: 0; } }
                          @keyframes node-pulse { 0%, 100% { opacity: 0.15; transform: scale(1); } 50% { opacity: 0.6; transform: scale(1.5); } }
                          @keyframes orbit { to { transform: rotate(360deg); } }
                          @keyframes orbit-rev { to { transform: rotate(-360deg); } }
                          @keyframes sweep { 0% { transform: translateX(-200%); } 100% { transform: translateX(500%); } }
                          @keyframes particle-drift { 0% { transform: translate(0, 0); opacity: 0; } 20% { opacity: 0.5; } 80% { opacity: 0.5; } 100% { transform: translate(60px, -80px); opacity: 0; } }
                          @keyframes particle-drift-2 { 0% { transform: translate(0, 0); opacity: 0; } 20% { opacity: 0.4; } 80% { opacity: 0.4; } 100% { transform: translate(-70px, 60px); opacity: 0; } }
                          @keyframes particle-drift-3 { 0% { transform: translate(0, 0); opacity: 0; } 20% { opacity: 0.35; } 80% { opacity: 0.35; } 100% { transform: translate(80px, 40px); opacity: 0; } }
                        `}</style>
                        <div className="absolute inset-0 opacity-25" style={{ backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,169,189,0.25) 1px, transparent 0)`, backgroundSize: '22px 22px', animation: 'ai-float 5s ease-in-out infinite', willChange: 'transform, opacity' }} />
                        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(0,169,189,0.08)_0%,transparent_40%,rgba(45,212,191,0.04)_100%)]" />
                        <div className="absolute inset-0 grid place-items-center">
                          <div className="h-64 w-72 rounded-full border border-[#00A9BD]/8" style={{ animation: 'orbit 40s linear infinite', willChange: 'transform' }} />
                          <div className="h-52 w-60 rounded-full border-2 border-dashed border-[#00A9BD]/12" style={{ animation: 'orbit-rev 30s linear infinite', willChange: 'transform' }} />
                          <div className="h-40 w-48 rounded-full border border-[#00A9BD]/15" style={{ animation: 'orbit 22s linear infinite', willChange: 'transform' }} />
                          <div className="h-32 w-36 rounded-full border-2 border-dashed border-[#2dd4bf]/18" style={{ animation: 'orbit-rev 16s linear infinite', willChange: 'transform' }} />
                          <div className="h-24 w-28 rounded-full border border-[#00A9BD]/20" style={{ animation: 'orbit 12s linear infinite', willChange: 'transform' }} />
                          <div className="h-16 w-20 rounded-full border-2 border-dashed border-[#2dd4bf]/22" style={{ animation: 'orbit-rev 9s linear infinite', willChange: 'transform' }} />
                          <div className="h-12 w-12 rounded-full border-2 border-[#00A9BD]/30" style={{ animation: 'ai-core 3s ease-in-out infinite', willChange: 'transform, opacity, box-shadow' }} />
                          <div className="h-8 w-8 rounded-lg border border-[#00A9BD]/40 bg-[#00A9BD]/10 backdrop-blur-[2px]" style={{ animation: 'ai-core 2.5s ease-in-out infinite 0.3s', willChange: 'transform, opacity, box-shadow' }} />
                          <div className="h-3 w-3 rounded-full bg-[#00A9BD]/60" style={{ animation: 'node-pulse 2s ease-in-out infinite', willChange: 'transform, opacity' }} />
                          <div className="absolute h-2.5 w-2.5 rounded-full bg-[#00A9BD]/50 shadow-[0_0_10px_rgba(0,169,189,0.6)]" style={{ animation: 'orbit 9s linear infinite', marginTop: '-72px', transformOrigin: 'center' }} />
                          <div className="absolute h-2 w-2 rounded-full bg-[#2dd4bf]/50 shadow-[0_0_8px_rgba(45,212,191,0.5)]" style={{ animation: 'orbit-rev 8s linear infinite', marginTop: '72px', transformOrigin: 'center' }} />
                          <div className="absolute h-2 w-2 rounded-full bg-[#00A9BD]/60 shadow-[0_0_8px_rgba(0,169,189,0.5)]" style={{ animation: 'orbit 7s linear infinite', marginLeft: '-60px', transformOrigin: 'center' }} />
                          <div className="absolute h-1.5 w-1.5 rounded-full bg-[#2dd4bf]/60 shadow-[0_0_6px_rgba(45,212,191,0.5)]" style={{ animation: 'orbit-rev 6s linear infinite', marginLeft: '60px', transformOrigin: 'center' }} />
                          <div className="absolute h-1.5 w-1.5 rounded-full bg-[#00A9BD]/40" style={{ animation: 'orbit 10s linear infinite', marginTop: '-48px', marginLeft: '48px', transformOrigin: 'center' }} />
                          <div className="absolute h-1.5 w-1.5 rounded-full bg-[#2dd4bf]/40" style={{ animation: 'orbit-rev 11s linear infinite', marginTop: '48px', marginLeft: '-48px', transformOrigin: 'center' }} />
                          <div className="absolute h-2 w-2 rounded-full bg-[#00A9BD]/45 shadow-[0_0_6px_rgba(0,169,189,0.4)]" style={{ animation: 'orbit-rev 5s linear infinite', marginTop: '-34px', marginLeft: '34px', transformOrigin: 'center' }} />
                          <div className="absolute h-1.5 w-1.5 rounded-full bg-[#2dd4bf]/45 shadow-[0_0_5px_rgba(45,212,191,0.35)]" style={{ animation: 'orbit 5.5s linear infinite', marginTop: '34px', marginLeft: '-34px', transformOrigin: 'center' }} />
                          <div className="absolute h-1 w-1 rounded-full bg-[#00A9BD]/50" style={{ animation: 'particle-drift 4s ease-in-out infinite', top: '30%', left: '20%', willChange: 'transform, opacity' }} />
                          <div className="absolute h-1 w-1 rounded-full bg-[#2dd4bf]/50" style={{ animation: 'particle-drift-2 5s ease-in-out infinite 1s', top: '60%', left: '70%', willChange: 'transform, opacity' }} />
                          <div className="absolute h-0.5 w-0.5 rounded-full bg-[#00A9BD]/60" style={{ animation: 'particle-drift-3 4.5s ease-in-out infinite 2s', top: '70%', left: '30%', willChange: 'transform, opacity' }} />
                          <div className="absolute h-1 w-1 rounded-full bg-[#2dd4bf]/40" style={{ animation: 'particle-drift 3.5s ease-in-out infinite 0.5s', top: '40%', left: '75%', willChange: 'transform, opacity' }} />
                          <div className="absolute h-0.5 w-0.5 rounded-full bg-[#00A9BD]/55" style={{ animation: 'particle-drift-2 6s ease-in-out infinite 3s', top: '25%', left: '60%', willChange: 'transform, opacity' }} />
                          <div className="absolute h-1 w-1 rounded-full bg-[#2dd4bf]/45" style={{ animation: 'particle-drift-3 4s ease-in-out infinite 1.5s', top: '80%', left: '45%', willChange: 'transform, opacity' }} />
                        </div>
                        <div className="absolute left-[10%] right-[10%] top-[12%] h-px bg-gradient-to-r from-transparent via-[#00A9BD]/35 to-transparent" style={{ animation: 'data-stream 2.8s ease-in-out infinite 0.2s', willChange: 'transform' }} />
                        <div className="absolute left-[8%] right-[8%] top-[35%] h-px bg-gradient-to-r from-transparent via-[#2dd4bf]/20 to-transparent" style={{ animation: 'data-stream 3.5s ease-in-out infinite 0.6s', willChange: 'transform' }} />
                        <div className="absolute left-[5%] right-[5%] top-[55%] h-px bg-gradient-to-r from-transparent via-[#00A9BD]/25 to-transparent" style={{ animation: 'data-stream 4s ease-in-out infinite 1s', willChange: 'transform' }} />
                        <div className="absolute left-[12%] right-[12%] top-[78%] h-px bg-gradient-to-r from-transparent via-[#2dd4bf]/20 to-transparent" style={{ animation: 'data-stream 3s ease-in-out infinite 1.5s', willChange: 'transform' }} />
                        <div className="absolute left-[30%] right-[30%] top-[92%] h-px bg-gradient-to-r from-transparent via-[#00A9BD]/15 to-transparent" style={{ animation: 'data-stream 4.5s ease-in-out infinite 0.3s', willChange: 'transform' }} />
                        <div className="absolute inset-y-0 left-[10%] w-px bg-gradient-to-b from-transparent via-[#00A9BD]/18 to-transparent" style={{ animation: 'data-stream-v 3.5s ease-in-out infinite 0.4s', willChange: 'transform' }} />
                        <div className="absolute inset-y-0 left-[30%] w-px bg-gradient-to-b from-transparent via-[#2dd4bf]/12 to-transparent" style={{ animation: 'data-stream-v 4s ease-in-out infinite 1.2s', willChange: 'transform' }} />
                        <div className="absolute inset-y-0 left-[50%] w-px bg-gradient-to-b from-transparent via-[#00A9BD]/15 to-transparent" style={{ animation: 'data-stream-v 3s ease-in-out infinite 0.8s', willChange: 'transform' }} />
                        <div className="absolute inset-y-0 left-[70%] w-px bg-gradient-to-b from-transparent via-[#2dd4bf]/12 to-transparent" style={{ animation: 'data-stream-v 4.2s ease-in-out infinite 1.8s', willChange: 'transform' }} />
                        <div className="absolute inset-y-0 right-[10%] w-px bg-gradient-to-b from-transparent via-[#00A9BD]/18 to-transparent" style={{ animation: 'data-stream-v 3.8s ease-in-out infinite 0.5s', willChange: 'transform' }} />
                        <div className="absolute inset-x-[15%] top-0 h-px bg-gradient-to-r from-transparent via-[#00A9BD]/45 to-transparent" />
                        <div className="absolute inset-x-[15%] bottom-0 h-px bg-gradient-to-r from-transparent via-[#00A9BD]/45 to-transparent" />
                        <div className="absolute left-[15%] top-0 h-full w-px bg-gradient-to-b from-transparent via-[#00A9BD]/25 to-transparent" />
                        <div className="absolute right-[15%] top-0 h-full w-px bg-gradient-to-b from-transparent via-[#00A9BD]/25 to-transparent" />
                        <div className="absolute top-0 h-0.5 w-1/3 bg-gradient-to-r from-transparent via-[#00A9BD]/60 to-transparent blur-sm" style={{ animation: 'sweep 2s ease-in-out infinite', willChange: 'transform' }} />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.4),rgba(255,255,255,0.08))]" />
                  </div>

                  <div className="absolute inset-x-0 bottom-0 h-24 bg-[linear-gradient(to_top,rgba(0,169,189,0.24),transparent)]" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative mx-auto w-full max-w-350 px-6 py-10 sm:px-8 lg:px-12 lg:py-16">
          <div className="rounded-[2rem] border border-white/5 bg-[#071b24]/92 p-6 shadow-[0_0_70px_rgba(0,169,189,0.08)] backdrop-blur-md sm:p-8 lg:p-12">
            <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_300px] lg:items-start">
              <article className="prose prose-invert max-w-none">
                {blocks ? (
                  <BlocksRenderer
                    content={blocks}
                    blocks={{
                      paragraph: ({ children }) => (
                        <p className="text-[15px] leading-8 text-white/75 sm:text-[16px]">{children}</p>
                      ),
                      heading: ({ children, level }) => {
                        const Tag = `h${level}` as keyof JSX.IntrinsicElements;
                        const sizes = {
                          1: "text-3xl sm:text-[2.15rem]",
                          2: "text-2xl sm:text-[1.75rem]",
                          3: "text-xl sm:text-[1.5rem]",
                        };
                        return (
                          <Tag className={`mt-10 mb-4 font-semibold tracking-tight text-white ${sizes[level as keyof typeof sizes] || "text-lg"}`}>
                            {children}
                          </Tag>
                        );
                      },
                      list: ({ children, format }) => (
                        format === "ordered" ? (
                          <ol className="mt-4 space-y-2 text-[15px] leading-8 text-white/72 sm:text-[16px] list-decimal pl-6">{children}</ol>
                        ) : (
                          <ul className="mt-4 space-y-2 text-[15px] leading-8 text-white/72 sm:text-[16px] list-disc pl-6">{children}</ul>
                        )
                      ),
                      quote: ({ children }) => (
                        <blockquote className="mt-6 border-l-4 border-[#25d9e0] bg-white/5 pl-4 py-3 pr-4 rounded-r-lg text-white/80 italic">
                          {children}
                        </blockquote>
                      ),
                      code: ({ children }) => (
                        <pre className="mt-4 rounded-xl bg-[#0d1f2a] p-4 text-sm text-[#25d9e0] overflow-x-auto border border-white/10">
                          <code>{children}</code>
                        </pre>
                      ),
                      link: ({ children, url }) => (
                        <a href={url} target="_blank" rel="noopener noreferrer" className="text-[#25d9e0] underline hover:text-white transition-colors">
                          {children}
                        </a>
                      ),
                    }}
                  />
                ) : (
                  <div className="space-y-14">
                    {articleSections.map((section: BlogSection, index: number) => {
                      const points: string[] = section.points ?? section.bullets ?? [];
                      const sectionId = section.id ?? `section-${index + 1}`;

                      return (
                          <section
                              key={sectionId}
                              id={sectionId}
                              className="scroll-mt-24"
                          >
                            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-[2.15rem]">
                              {index + 1}. {section.title}
                            </h2>
                            {section.intro && (
                                <p className="mt-5 max-w-4xl text-[15px] leading-8 text-white/75 sm:text-[16px]">
                                  {section.intro}
                                </p>
                            )}
                            {points.length > 0 && (
                                <ul className="mt-5 space-y-2.5 text-[15px] leading-8 text-white/72 sm:text-[16px]">
                                  {points.map((point, idx) => (
                                      <li key={idx} className="flex gap-3">
                                        <span className="mt-2.75 h-1.5 w-1.5 shrink-0 rounded-full bg-[#25d9e0]" />
                                        <span className="block">{point}</span>
                                      </li>
                                  ))}
                                </ul>
                            )}
                          </section>
                      );
                    })}
                  </div>
                )}
              </article>

              <aside className="lg:sticky lg:top-28">
      <div className="relative space-y-4 rounded-[1.8rem] bg-[#091725] p-5 shadow-[0_0_45px_rgba(0,0,0,0.28)]">
                  <p className="text-center text-sm text-white/60">
                    Share This Post
                  </p>
                  <div className="flex items-center justify-center gap-4 text-white">
                    <button
                        onClick={() => sharePost("copy")}
                        className="text-xl transition hover:text-[#25d9e0]"
                        title="Copy link"
                    >
                      🔗
                    </button>
                    <button
                        onClick={() => sharePost("linkedin")}
                        className="text-xl transition hover:text-[#25d9e0]"
                        title="Share on LinkedIn"
                    >
                      in
                    </button>
                    <button
                        onClick={() => sharePost("twitter")}
                        className="text-xl transition hover:text-[#25d9e0]"
                        title="Share on X"
                    >
                      𝕏
                    </button>
                  </div>
                </div>

                <CalculatorWidget />
              </aside>
            </div>
          </div>
        </section>
      </>
  );
};