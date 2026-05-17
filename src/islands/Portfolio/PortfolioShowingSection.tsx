import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Tabs } from "./Tabs.tsx";
import { MediaGrid } from "../Shared/PostComp.tsx";

type PortfolioKey = "Video" | "Animation" | "Industries";

type PortfolioItem = {
  id: string;
  src: string;
  playable: boolean;
  category: string;
};

const buildItems = (prefix: PortfolioKey, category: string, count: number) =>
  Array.from({ length: count }, (_, idx) => ({
    id: `${prefix}-${category}-${idx + 1}`,
    src: "/video-pieces/person.webp",
    playable: true,
    category,
  }));

const portfolioItems: Record<PortfolioKey, PortfolioItem[]> = {
  Video: [
    ...buildItems("Video", "All", 1),
    ...buildItems("Video", "Social media", 4),
    ...buildItems("Video", "Training video", 4),
    ...buildItems("Video", "Corporate video", 4),
    ...buildItems("Video", "Product video", 4),
    ...buildItems("Video", "Sizzle reel", 3),
    ...buildItems("Video", "Explainer video", 3),
  ],
  Animation: [
    ...buildItems("Animation", "All", 1),
    ...buildItems("Animation", "2D Animation", 5),
    ...buildItems("Animation", "3D Animation", 5),
    ...buildItems("Animation", "Lottie Animation", 5),
    ...buildItems("Animation", "UI Animation", 4),
  ],
  Industries: [
    ...buildItems("Industries", "All", 1),
    ...buildItems("Industries", "SaaS", 4),
    ...buildItems("Industries", "Healthcare", 4),
    ...buildItems("Industries", "Ecommerce", 4),
    ...buildItems("Industries", "Finance", 4),
  ],
};

export const PortfolioShowingSection = () => {
  const [type, setType] = useState<PortfolioKey>("Video");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const allItemsByType = useMemo(() => portfolioItems[type], [type]);
  const categories = useMemo(() => {
    const unique = Array.from(
      new Set(allItemsByType.map((item) => item.category).filter((c) => c !== "All")),
    );
    return ["All", ...unique];
  }, [allItemsByType]);

  const items = useMemo(() => {
    if (selectedCategory === "All") {
      return allItemsByType.filter((item) => item.category !== "All");
    }
    return allItemsByType.filter((item) => item.category === selectedCategory);
  }, [allItemsByType, selectedCategory]);

  const handleTypeChange = (nextType: PortfolioKey) => {
    setType(nextType);
    setSelectedCategory("All");
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className="mt-20 flex w-full flex-col items-center justify-center px-4 sm:mt-24 sm:px-6"
    >
      <div className="w-full max-w-5xl text-center">
        <h4 className="text-xs font-thin tracking-[0.2em] sm:text-sm">OUR WORK</h4>
        <h2 className="bg-linear-to-r from-[#46B6A0] to-[#2EBACA] bg-clip-text text-3xl font-black text-transparent sm:text-4xl md:text-5xl">
          {type} portfolio
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-sm font-light leading-7 sm:text-base">
          Every frame we create carries intent. At eyeson, video is where strategy
          meets storytelling and design finally comes to life. Whether it is a sleek
          product reveal, an atmospheric brand film, or a snappy social edit built
          for speed, we craft videos that hit with clarity and character.
        </p>
        <div className="mt-8 flex flex-col items-center sm:mt-10">
          <Tabs type={type} SetType={handleTypeChange} />
        </div>
      </div>

      <div className="w-full">
        <MediaGrid
          mediaType={type}
          pageSize={9}
          items={items}
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />
      </div>
    </motion.section>
  );
};
