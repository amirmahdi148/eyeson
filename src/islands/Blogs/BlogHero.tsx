import { useEffect, useMemo, useState } from "react";
import { getPostBySlug } from "../../lib/posts";
import Image from "next/image"; // or your SmartImage util

type BlogSection = {
  id?: string;
  title: string;
  intro?: string;
  bullets?: string[];
  points?: string[];
};

type BlogPost = {
  title?: string;
  category?: string;
  excerpt?: string;
  date?: string;
  readTime?: string;
  author?: string;
  image?: string;
  intro?: string;
  subtitle?: string;
  sections?: BlogSection[];
  introCopy?: string;
};

type BlogHeroProps = {
  slug?: string;
};

const skeletonLines = ["w-52", "w-96", "w-80"];

const CalculatorWidget = () => {
  const [display, setDisplay] = useState("0");
  const [prev, setPrev] = useState<number | null>(null);
  const [operation, setOperation] = useState<string | null>(null);
  const [waitingForNew, setWaitingForNew] = useState(false);

  const handleNumber = (num: string) => {
    if (waitingForNew) {
      setDisplay(num);
      setWaitingForNew(false);
    } else {
      setDisplay(display === "0" ? num : display + num);
    }
  };

  const handleOperation = (op: string) => {
    const current = parseFloat(display);
    if (prev === null) {
      setPrev(current);
    } else if (operation) {
      const result = calculate(prev, current, operation);
      setDisplay(String(result));
      setPrev(result);
    }
    setOperation(op);
    setWaitingForNew(true);
  };

  const calculate = (prev: number, current: number, op: string): number => {
    switch (op) {
      case "+":
        return prev + current;
      case "-":
        return prev - current;
      case "*":
        return prev * current;
      case "/":
        return current !== 0 ? prev / current : 0;
      default:
        return current;
    }
  };

  const handleEquals = () => {
    if (operation && prev !== null) {
      const current = parseFloat(display);
      const result = calculate(prev, current, operation);
      setDisplay(String(result));
      setPrev(null);
      setOperation(null);
      setWaitingForNew(true);
    }
  };

  const handleClear = () => {
    setDisplay("0");
    setPrev(null);
    setOperation(null);
    setWaitingForNew(false);
  };

  const handleDot = () => {
    if (!display.includes(".")) {
      setDisplay(display + ".");
      setWaitingForNew(false);
    }
  };

  const buttons: Array<{ label: string; action: () => void }> = [
    { label: "7", action: () => handleNumber("7") },
    { label: "8", action: () => handleNumber("8") },
    { label: "9", action: () => handleNumber("9") },
    { label: "-", action: () => handleOperation("-") },
    { label: "4", action: () => handleNumber("4") },
    { label: "5", action: () => handleNumber("5") },
    { label: "6", action: () => handleNumber("6") },
    { label: "+", action: () => handleOperation("+") },
    { label: "1", action: () => handleNumber("1") },
    { label: "2", action: () => handleNumber("2") },
    { label: "3", action: () => handleNumber("3") },
    { label: "0", action: () => handleNumber("0") },
    { label: ".", action: handleDot },
    { label: "=", action: handleEquals },
    { label: "C", action: handleClear },
    { label: "*", action: () => handleOperation("*") },
  ];

  return (
      <div className="space-y-4 rounded-[1.8rem] bg-[#091725] p-5 shadow-[0_0_45px_rgba(0,0,0,0.28)]">
        <div className="pointer-events-none absolute top-[-16px] right-[-8px] h-16 w-16 rounded-2xl border border-white/5 bg-[#0e1217]" />
        <div className="pointer-events-none absolute bottom-[-16px] left-[-8px] h-14 w-20 rounded-2xl border border-white/5 bg-[#0e1217]" />
        <div className="pointer-events-none absolute bottom-[-16px] left-[52px] h-14 w-20 rounded-2xl border border-white/5 bg-[#0e1217]" />

        <span className="pointer-events-none absolute -top-6 -left-3 text-3xl text-[#6ee7b7]">✦</span>
        <span className="pointer-events-none absolute top-0 left-5 text-xl text-[#6ee7b7]">✦</span>
        <span className="pointer-events-none absolute top-1/2 -left-6 text-xl text-[#a7f3d0] opacity-60">✦</span>
        <span className="pointer-events-none absolute top-1/3 -right-4 text-xl text-[#a7f3d0] opacity-60">✦</span>

        <div className="relative z-10 rounded-[1.4rem] border-[3px] border-[#006B77] bg-[#020617] p-4 shadow-[0_0_50px_rgba(0,107,119,0.3)]">
          <div className="mb-4 flex h-[66px] items-center justify-between overflow-hidden rounded-2xl border border-white/10 bg-[#333b4d] px-4 shadow-inner">
            <div className="font-sans text-2xl font-bold tracking-wide text-white">
              {display}
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
            {buttons.map(({ label, action }) => (
                <button
                    key={label}
                    onClick={action}
                    className="flex aspect-square items-center justify-center rounded-[14px] border-b-[4px] border-[#4b5563] bg-[#2a3441] text-lg font-bold text-[#f3f4f6] shadow-sm transition active:scale-95 hover:bg-[#3a4451]"
                >
                  {label}
                </button>
            ))}
          </div>
        </div>

        <div className="mt-5 text-center">
          <h3 className="text-lg font-semibold text-white">Know the cost of your next video? 🎬</h3>
          <button className="mt-4 rounded-full bg-gradient-to-r from-[#006B77] to-[#2dd4bf] px-6 py-3 font-semibold text-white shadow-[0_0_20px_rgba(0,107,119,0.3)] transition hover:scale-105 active:scale-95">
            Calculate now
          </button>
        </div>
      </div>
  );
};

export const BlogHero = ({ slug }: BlogHeroProps) => {
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fallbackPost = useMemo(() => getPostBySlug(slug), [slug]);

  useEffect(() => {
    setLoading(true);
    setError(null);

    try {
      setPost(fallbackPost ?? null);
      if (!fallbackPost) {
        setError("Post not found for this slug");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load post");
    } finally {
      setLoading(false);
    }
  }, [fallbackPost]);

  const data = post ?? fallbackPost;
  const hasContent = Boolean(data);

  const title = data?.title ?? "Loading story...";
  const category = data?.category ?? "Video Production / Strategy";
  const excerpt =
      data?.excerpt ??
      "Stories, strategies, and experiments from inside the agency. Built to inspire better decisions, not waste your time.";
  const date = data?.date ?? "January 12, 2025";
  const readTime = data?.readTime ?? "8 min read";
  const author = data?.author ?? "Eyeson Studio";
  const subtitle =
      data?.subtitle ?? "A Practical Guide for Growing Brands";
  const image =
      data?.image ??
      "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1200&q=80";

  const articleSections = data?.sections ?? [
    {
      id: "key-takeaways",
      title: "Key takeaways",
      bullets: [
        "A video production subscription gives you continuous access to a dedicated creative team for a fixed monthly cost.",
        "It eliminates repeated briefing, pricing, and onboarding cycles.",
        "Compared to in-house teams, subscriptions offer flexibility without long-term contracts.",
        "The right subscription depends on content volume, speed, and team workflow.",
      ],
    },
  ];

  const introCopy: string =
      data?.introCopy ??
      "Any company that needs constant video content can benefit from this subscription. Here's what we've noticed:";

  const sharePost = (platform: "copy" | "linkedin" | "twitter"): void => {
    const url = typeof window !== "undefined" ? window.location.href : "";
    const text = encodeURIComponent(title);

    const links: Record<"twitter" | "linkedin" | "copy", string> = {
      twitter: `https://twitter.com/intent/tweet?url=${url}&text=${text}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
      copy: "copied",
    };

    if (platform === "copy") {
      navigator.clipboard.writeText(url);
      alert("Link copied! 📋");
    } else {
      window.open(links[platform], "_blank", "width=600,height=400");
    }
  };

  return (
      <>
        <section className="relative overflow-hidden bg-[#02131C] text-white">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(0,169,189,0.18),transparent_28%),radial-gradient(circle_at_80%_28%,rgba(0,169,189,0.18),transparent_26%),radial-gradient(circle_at_50%_115%,rgba(0,169,189,0.2),transparent_34%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.15),rgba(0,0,0,0.4))]" />
            <div className="absolute inset-0 opacity-35 [background-image:radial-gradient(rgba(255,255,255,0.45)_1px,transparent_1px)] [background-size:115px_115px]" />
          </div>

          <div className="relative mx-auto flex min-h-[100svh] w-full max-w-[1400px] items-center px-6 py-24 sm:px-8 lg:px-12">
            <div className="grid w-full items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
              <div className="max-w-2xl">
                {loading ? (
                    <>
                      <div className="mb-5 h-5 w-40 rounded-full bg-white/10 animate-pulse" />
                      <div className="space-y-4">
                        {skeletonLines.map((width) => (
                            <div
                                key={width}
                                className={`h-14 rounded-2xl bg-white/10 animate-pulse ${width}`}
                            />
                        ))}
                      </div>
                      <div className="mt-6 space-y-3">
                        <div className="h-4 w-[92%] rounded-full bg-white/10 animate-pulse" />
                        <div className="h-4 w-[78%] rounded-full bg-white/10 animate-pulse" />
                      </div>
                      <div className="mt-8 flex gap-6">
                        <div className="h-5 w-28 rounded-full bg-white/10 animate-pulse" />
                        <div className="h-5 w-36 rounded-full bg-white/10 animate-pulse" />
                        <div className="h-5 w-24 rounded-full bg-white/10 animate-pulse" />
                      </div>
                    </>
                ) : hasContent ? (
                    <>
                      <p className="mb-5 text-sm tracking-wide text-white/45 sm:text-base">
                        {category}
                      </p>
                      <h1 className="max-w-3xl text-4xl font-semibold leading-[1.05] text-[#2fd1cf] sm:text-5xl lg:text-6xl">
                        {title}
                      </h1>
                      <div className="mt-2 max-w-3xl text-4xl font-semibold leading-[1.05] text-white sm:text-5xl lg:text-6xl">
                        {subtitle}
                      </div>
                      <p className="mt-6 max-w-3xl text-base leading-8 text-white/75 sm:text-lg">
                        {introCopy}
                      </p>
                      {error && (
                          <p className="mt-4 text-sm text-amber-300">⚠️ {error}</p>
                      )}
                      <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm text-white/75 sm:text-base">
                        <span>by {author}</span>
                        <span>{date}</span>
                        <span>{readTime}</span>
                      </div>
                    </>
                ) : (
                    <div className="flex aspect-[1.02/1] w-full items-center justify-center px-8 text-center">
                      <div>
                        <p className="text-sm uppercase tracking-[0.25em] text-white/50">
                          Post not found
                        </p>
                        <h2 className="mt-4 text-2xl font-semibold text-white">
                          No blog entry for this slug
                        </h2>
                        <p className="mt-3 text-sm leading-6 text-white/70">
                          The page loaded, but there's no matching post data.
                        </p>
                      </div>
                    </div>
                )}
              </div>

              <div className="relative">
                <div className="absolute -inset-8 rounded-[2.5rem] bg-[#00A9BD]/25 blur-3xl" />
                <div className="relative overflow-hidden rounded-[2rem] border border-[#62e8f1]/20 bg-[#102530]/75 shadow-[0_0_70px_rgba(0,169,189,0.32)] backdrop-blur-md">
                  {loading ? (
                      <div className="aspect-[1.02/1] w-full animate-pulse bg-white/10" />
                  ) : hasContent ? (
                      <>
                        <div className="relative aspect-[1.02/1] w-full">
                          <Image
                              src={image}
                              alt={title}
                              fill
                              className="object-cover opacity-80"
                          />
                          <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.4),rgba(255,255,255,0.08))]" />
                          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(255,255,255,0.22),transparent_35%)]" />

                          <div className="absolute left-1/2 top-1/2 w-[88%] -translate-x-1/2 -translate-y-1/2 rounded-3xl border border-white/12 bg-white/10 px-5 py-6 text-center backdrop-blur-md">
                            <p className="text-xs font-medium tracking-[0.24em] text-white/70">
                              FEATURED STORY
                            </p>
                            <h2 className="mt-3 text-2xl font-semibold leading-tight text-white sm:text-3xl">
                              {title}
                            </h2>
                            <p className="mt-2 text-sm leading-6 text-white/80">
                              {excerpt}
                            </p>
                          </div>
                        </div>

                        <div className="absolute inset-x-0 bottom-0 h-24 bg-[linear-gradient(to_top,rgba(0,169,189,0.24),transparent)]" />
                      </>
                  ) : (
                      <div className="aspect-[1.02/1] w-full bg-white/5" />
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative mx-auto w-full max-w-[1400px] px-6 py-10 sm:px-8 lg:px-12 lg:py-16">
          <div className="rounded-[2rem] border border-white/5 bg-[#071b24]/92 p-6 shadow-[0_0_70px_rgba(0,169,189,0.08)] backdrop-blur-md sm:p-8 lg:p-12">
            <div className="mb-8 flex flex-wrap gap-5 text-sm text-white/55">
              {articleSections.map((section: BlogSection, index: number) => {
                const sectionId = section.id ?? `section-${index + 1}`;
                return (
                    <a
                        key={sectionId}
                        href={`#${sectionId}`}
                        className="transition hover:text-[#25d9e0]"
                    >
                      {section.title}
                    </a>
                );
              })}
            </div>

            <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_300px] lg:items-start">
              <article className="space-y-14">
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
                                    <span className="mt-[11px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#25d9e0]" />
                                    <span className="block">{point}</span>
                                  </li>
                              ))}
                            </ul>
                        )}
                      </section>
                  );
                })}
              </article>

              <aside className="lg:sticky lg:top-28">
                <div className="space-y-4 rounded-[1.8rem] bg-[#091725] p-5 shadow-[0_0_45px_rgba(0,0,0,0.28)]">
                  <p className="text-center text-sm text-white/60">Share This Post</p>
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