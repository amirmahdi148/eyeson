type DesignShowcaseItem = {
  id: string;
  title: string;
  category: string;
  src: string;
  className: string;
};

const designShowcaseItems: DesignShowcaseItem[] = [
  {
    id: "top-1",
    title: "Branded Motion",
    category: "Branded motion",
    src: "/portfolio/design-showcase/top-1.jpg",
    className: "",
  },
  {
    id: "top-2",
    title: "UI Animation",
    category: "UI Animation",
    src: "/portfolio/design-showcase/top-2.jpg",
    className: "",
  },
  {
    id: "top-3",
    title: "Lottie Animation",
    category: "Lottie Animation",
    src: "/portfolio/design-showcase/top-3.jpg",
    className: "",
  },
  {
    id: "bottom-left",
    title: "Lottie Animation",
    category: "Lottie Animation",
    src: "/portfolio/design-showcase/bottom-left.jpg",
    className: "md:col-span-2 md:row-span-3",
  },
  {
    id: "mid-1",
    title: "UI Animation",
    category: "UI Animation",
    src: "/portfolio/design-showcase/mid-1.jpg",
    className: "",
  },
  {
    id: "mid-2",
    title: "UI Animation",
    category: "UI Animation",
    src: "/portfolio/design-showcase/mid-2.jpg",
    className: "md:row-span-2",
  },
  {
    id: "bot-1",
    title: "UI Animation",
    category: "UI Animation",
    src: "/portfolio/design-showcase/bot-1.jpg",
    className: "",
  },
  {
    id: "bot-2",
    title: "UI Animation",
    category: "UI Animation",
    src: "/portfolio/design-showcase/bot-2.jpg",
    className: "",
  },
];

export const DesignPortfolioShowcase = () => {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 pb-20 sm:px-6">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="bg-linear-to-r from-[#46B6A0] to-[#2EBACA] bg-clip-text text-3xl font-black text-transparent sm:text-4xl md:text-5xl">
          Design portfolio
        </h2>
        <p className="mt-3 text-sm leading-6 text-white/70 sm:text-base">
          Great design is not just pretty visuals. It is how your brand thinks,
          speaks and earns trust. From product interfaces to full brand systems,
          every detail is shaped with purpose and precision.
        </p>
      </div>

      <div className="mt-8 grid auto-rows-[120px] grid-cols-1 gap-4 sm:auto-rows-[145px] sm:grid-cols-2 md:grid-cols-4">
        {designShowcaseItems.map((item) => (
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
