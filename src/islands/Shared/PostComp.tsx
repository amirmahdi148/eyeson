import { useMemo, useState, useEffect } from "react";
import { PlayableMediaFrame } from "../animations/PlayableMediaFrame.tsx";

type PortfolioKey = "Video" | "Animation" | "Industries";

type MediaItem = {
  id: number | string;
  src: string;
  playable?: boolean;
};

type MediaGridProps = {
  mediaType: PortfolioKey;
  items: MediaItem[];
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
  pageSize?: number;
};



export const MediaGrid = ({
                            mediaType,
                            items,
                            categories,
                            selectedCategory,
                            onSelectCategory,
                            pageSize = 9,
                          }: MediaGridProps) => {

  const [isMobile, setIsMobile] = useState(false);

  // detect mobile
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // 👇 اینجا تغییر اصلی
  const effectivePageSize = isMobile ? 5 : pageSize;

  const [page, setPage] = useState<number>(1);

  const totalPages = Math.max(1, Math.ceil(items.length / effectivePageSize));

  const pageStartIndex = (page - 1) * effectivePageSize;

  const paginatedItems = useMemo(
      () => items.slice(pageStartIndex, pageStartIndex + effectivePageSize),
      [items, pageStartIndex, effectivePageSize],
  );

  const placeholderCount = Math.max(0, effectivePageSize - paginatedItems.length);

  const placeholderText =
      selectedCategory === "All"
          ? `No ${mediaType.toLowerCase()} posts yet`
          : `No ${selectedCategory.toLowerCase()} posts yet`;

  const goToPage = (p: number) => {
    if (p < 1 || p > totalPages) return;
    setPage(p);
  };

  useEffect(() => {
    setPage(1);
  }, [items, mediaType, effectivePageSize]);

  useEffect(() => {
    if (page > totalPages) setPage(totalPages);
  }, [page, totalPages]);

  return (
    <div className="relative w-full overflow-x-hidden overflow-y-hidden px-2 sm:px-0">
      <div className="mx-auto mt-8 flex w-full max-w-7xl flex-wrap items-center justify-center gap-2 px-4">
        {categories.map((category) => {
          const isActive = category === selectedCategory;
          return (
            <button
              key={category}
              onClick={() => onSelectCategory(category)}
              className={`rounded-full border px-4 py-2 text-xs transition sm:text-sm ${
                isActive
                  ? "border-[#22D5D2] bg-[#0FC7C1] text-white"
                  : "border-white/15 bg-[#082233] text-white/85 hover:border-white/25"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>

      {/* GRID */}
      <div className="relative z-10 mx-auto mt-6 grid w-full max-w-7xl grid-cols-1 gap-4 px-4 pb-10 sm:grid-cols-2 lg:grid-cols-3">

        {paginatedItems.map((item, idx) => (
          <div
            key={`${item.id}-${pageStartIndex + idx}`}
            className="group relative aspect-16/10 w-full overflow-hidden rounded-2xl border border-[#00A9BD]/40 bg-linear-to-r from-[#0B1F2A] to-[#003A43] shadow"
          >
            <PlayableMediaFrame
              imgUrl={item.src}
              playable={item.playable ?? false}
              alt={mediaType}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            {item.playable && (
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/20">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/30 backdrop-blur-sm">
                  <div className="ml-1 h-0 w-0 border-y-10 border-y-transparent border-l-15 border-l-white" />
                </div>
              </div>
            )}
          </div>
        ))}

        {Array.from({ length: placeholderCount }).map((_, idx) => (
          <div
            key={`placeholder-${pageStartIndex + idx}`}
            className="flex aspect-16/10 w-full items-center justify-center rounded-2xl border border-dashed border-[#1E5265] bg-[#071B2A]/70 px-4 text-center text-sm text-white/65"
          >
            {placeholderText}
          </div>
        ))}
      </div>

      {/* PAGINATION */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-2 px-4 pb-8">
        <button
          onClick={() => goToPage(page - 1)}
          disabled={page === 1}
          className="rounded-lg border border-[#1E5265] bg-[#071B2A] px-3 py-2 text-sm text-white/90 disabled:opacity-40 sm:px-4"
        >
          Prev
        </button>

        {Array.from({ length: totalPages }).map((_, idx) => {
          const num = idx + 1;
          return (
            <button
              key={num}
              onClick={() => goToPage(num)}
              className={`rounded-lg border px-3 py-2 text-sm ${
                page === num
                  ? "border-[#1ED8D1] bg-[#082F42] text-white"
                  : "border-[#1E5265] bg-[#071B2A] text-white/80"
              }`}
            >
              {num}
            </button>
          );
        })}

        <button
          onClick={() => goToPage(page + 1)}
          disabled={page === totalPages}
          className="rounded-lg border border-[#1E5265] bg-[#0BA7C1] px-3 py-2 text-sm text-white disabled:opacity-40 sm:px-4"
        >
          Next
        </button>
      </div>

    </div>
  );
};
