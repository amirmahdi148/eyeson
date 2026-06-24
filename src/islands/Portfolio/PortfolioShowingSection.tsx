import { useMemo, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Tabs } from "./Tabs.tsx";
import { MediaGrid } from "../Shared/PostComp.tsx";
import { httpService } from "@/utils/httpService.ts";

type PortfolioKey = "Video" | "Animation" | "Industries";

const typeMapping: Record<PortfolioKey, string> = {
  Video: "Video types",
  Animation: "Animation Style",
  Industries: "Industries",
};

const TYPE_CATEGORIES: Record<string, string[]> = {
  "Video types": ["Social media", "Training video", "Corporate video", "Product video", "Sizzle reel", "Explainer video"],
  "Animation Style": ["2D Animation", "3D Animation", "Lottie Animation", "UI Animation"],
  "Industries": ["SaaS Healthcare", "Ecommerce", "Finance"]
};

export const PortfolioShowingSection = () => {
  const [type, setType] = useState<PortfolioKey>("Video");
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  const [items, setItems] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const limit = 9;

  const categories = useMemo(() => {
    const backendType = typeMapping[type];
    return ["All", ...(TYPE_CATEGORIES[backendType] || [])];
  }, [type]);

  const handleTypeChange = (nextType: PortfolioKey) => {
    setType(nextType);
    setSelectedCategory("All");
    setPage(1);
  };

  const handleCategoryChange = (cat: string) => {
    setSelectedCategory(cat);
    setPage(1);
  };

  useEffect(() => {
    const fetchPortfolios = async () => {
      setLoading(true);
      try {
        const backendType = typeMapping[type];
        const payload: any = { type: backendType };
        if (selectedCategory !== "All") {
          payload.category = selectedCategory;
        }
        
        const res: any = await httpService.post(`/portfolio/list?page=${page}&limit=${limit}`, payload);
        
        const mappedItems = res.videos.map((v: any) => ({
           id: v.id,
           src: v.cover ? (v.cover.startsWith('http') ? v.cover : `${import.meta.env.PUBLIC_API_URL}${v.cover}`) : '/video-pieces/person.webp', // fallback image
           videoUrl: v.video ? (v.video.startsWith('http') ? v.video : `${import.meta.env.PUBLIC_API_URL}${v.video}`) : '',
           playable: !!v.video,
           category: v.category,
           title: `${v.type} - ${v.category}`
        }));
        
        setItems(mappedItems);
        setTotalPages(res.meta.totalPages || 1);
      } catch (err) {
        console.error("Failed to fetch portfolios", err);
        setItems([]);
        setTotalPages(1);
      } finally {
        setLoading(false);
      }
    };
    fetchPortfolios();
  }, [type, selectedCategory, page]);

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
          Featured Projects & Creative Work
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-sm font-light leading-7 sm:text-base">
          Explore a collection of videos, animations, ad creatives, and visual content created for
          startups, SaaS companies, and modern brands.
          From SaaS trailers and product explainers to motion graphics, social content, and
          performance-driven ad creatives, every project is crafted to communicate clearly, capture
          attention, and leave a lasting impression.
        </p>
        <div className="mt-8 flex flex-col items-center sm:mt-10">
          <Tabs type={type} SetType={handleTypeChange} />
        </div>
      </div>

      <div className="w-full">
        <MediaGrid
          mediaType={type}
          pageSize={limit}
          items={items}
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={handleCategoryChange}
          page={page}
          totalPages={totalPages}
          onPageChange={setPage}
          isLoading={loading}
        />
      </div>
    </motion.section>
  );
};
