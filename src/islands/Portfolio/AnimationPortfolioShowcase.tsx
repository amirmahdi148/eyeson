type ShowcaseItem = {
  id: string;
  title: string;
  category: string;
  src: string;
  className: string;
};

const showcaseItems: ShowcaseItem[] = [
  {
    id: "wide-1",
    title: "Lottie Animation",
    category: "Lottie Animation",
    src: "/portfolio/showcase/wide-1.jpg",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    id: "tall-1",
    title: "UI Animation",
    category: "UI Animation",
    src: "/portfolio/showcase/tall-1.jpg",
    className: "md:row-span-2",
  },
  {
    id: "card-1",
    title: "Branded Motion",
    category: "Branded Motion",
    src: "/portfolio/showcase/card-1.jpg",
    className: "",
  },
  {
    id: "card-2",
    title: "UI Animation",
    category: "UI Animation",
    src: "/portfolio/showcase/card-2.jpg",
    className: "",
  },
  {
    id: "card-3",
    title: "Lottie Animation",
    category: "Lottie Animation",
    src: "/portfolio/showcase/card-3.jpg",
    className: "",
  },
];

export const AnimationPortfolioShowcase = () => {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 pb-20 sm:px-6">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="bg-linear-to-r from-[#46B6A0] to-[#2EBACA] bg-clip-text text-3xl font-black text-transparent sm:text-4xl md:text-5xl">
          Animation portfolio
        </h2>
        <p className="mt-3 text-sm leading-6 text-white/70 sm:text-base">
          Animation works when it communicates, not just decorates. A dynamic, we
          build motion pieces that guide attention, shape understanding and give
          your brand a voice that actually moves.
        </p>
      </div>

      <div className="mt-8 grid auto-rows-[180px] grid-cols-1 gap-4 sm:auto-rows-[220px] sm:grid-cols-2 md:grid-cols-3">
        {showcaseItems.map((item) => (
          <article
            key={item.id}
            className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-[#071A28] ${item.className}`}
          >
            <img
              src={item.src}
              alt={item.title}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-linear-to-t from-black/70 to-transparent p-3">
              <span className="inline-block rounded-md border border-white/20 bg-black/40 px-2 py-1 text-xs text-white/85">
                {item.category}
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
