type StoryItem = {
  id: string;
  title: string;
  category: string;
  src: string;
  className: string;
};

const storyItems: StoryItem[] = [
  {
    id: "top-1",
    title: "Branded Motion",
    category: "Branded motion",
    src: "/portfolio/customer-stories/top-1.jpg",
    className: "",
  },
  {
    id: "top-2",
    title: "UI Animation",
    category: "UI Animation",
    src: "/portfolio/customer-stories/top-2.jpg",
    className: "",
  },
  {
    id: "top-3",
    title: "Lottie Animation",
    category: "Lottie Animation",
    src: "/portfolio/customer-stories/top-3.jpg",
    className: "",
  },
  {
    id: "bottom-wide",
    title: "Lottie Animation",
    category: "Lottie Animation",
    src: "/portfolio/customer-stories/bottom-wide.jpg",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    id: "bottom-mid",
    title: "UI Animation",
    category: "UI Animation",
    src: "/portfolio/customer-stories/bottom-mid.jpg",
    className: "md:row-span-2",
  },
  {
    id: "bottom-right-top",
    title: "UI Animation",
    category: "UI Animation",
    src: "/portfolio/customer-stories/bottom-right-top.jpg",
    className: "",
  },
  {
    id: "bottom-right-bottom",
    title: "UI Animation",
    category: "UI Animation",
    src: "/portfolio/customer-stories/bottom-right-bottom.jpg",
    className: "",
  },
];

export const CustomerStoriesShowcase = () => {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 pb-24 pt-8 sm:px-6">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-xs tracking-[0.18em] text-white/55">Customer Stories</p>
        <h2 className="mt-2 text-3xl font-black leading-tight text-white sm:text-4xl md:text-5xl">
          See how brands grow
          <br />
          with{" "}
          <span className="bg-linear-to-r from-[#46B6A0] to-[#2EBACA] bg-clip-text text-transparent">
            Eyeson
          </span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">
          Real impact shows itself in real projects. Our case studies highlight the
          teams and companies that trusted eyeson with motion, design and product
          needs, and the results that followed.
        </p>
      </div>

      <div className="mt-8 grid auto-rows-[170px] grid-cols-1 gap-4 sm:auto-rows-[210px] sm:grid-cols-2 md:grid-cols-3">
        {storyItems.map((item) => (
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
