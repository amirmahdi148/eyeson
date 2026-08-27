"use client";

export default function TestimonialCard({ item }: { item: any }) {
  return (
    <div className="relative group h-full px-2 py-2">
      <div className="relative h-full bg-[#0B1F2A] rounded-[var(--radius-2xl)] overflow-hidden border border-[var(--color-border)] shadow-[var(--elevation-1)] transition-all duration-[var(--duration-normal)] ease-[var(--ease-default)] group-hover:border-[var(--color-border-teal)] group-hover:shadow-[var(--elevation-glow)]">
        <div className="px-8 pt-8 pb-4 flex items-center gap-4 relative z-10">
          <div className="relative">
            <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[var(--primitive-teal-700)] p-0.5 shadow-[0_0_14px_rgba(0,169,189,0.32)]">
              <img
                src={item.avatar}
                alt={item.name}
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg leading-tight group-hover:text-[var(--primitive-teal-400)] transition-colors duration-[var(--duration-normal)]">
              {item.name}
            </h4>
            <p className="text-white/60 text-xs mt-1">{item.role}</p>
          </div>
        </div>

        <div className="relative mt-2 mx-2 mb-2 bg-[var(--primitive-teal-700)]/06 rounded-[var(--radius-xl)] p-8 border border-[var(--color-border)] group-hover:bg-[var(--primitive-teal-700)]/08 transition-colors duration-[var(--duration-normal)] h-[calc(100%-100px)] flex flex-col justify-between overflow-hidden">
          <p className="text-white/90 text-[15px] leading-relaxed relative z-10 font-light">
            “{item.text}”
          </p>

          <div className="flex gap-1 mt-6 relative z-10">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-5 min-h-10 max-h-10 transition-transform duration-200 hover:scale-110 ${i < item.stars ? "text-[var(--primitive-teal-500)] fill-[var(--primitive-teal-500)] drop-shadow-[0_0_6px_rgba(0,169,189,0.5)]" : "text-[var(--primitive-teal-500)]/18 fill-[var(--primitive-teal-500)]/18"}`}
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            ))}
          </div>

          <div className="absolute top-0 right-0 w-40 h-40 bg-[var(--primitive-teal-500)]/08 rounded-full blur-[48px] -translate-y-1/2 translate-x-1/2 pointer-events-none" aria-hidden="true" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-[var(--primitive-teal-500)]/04 rounded-full blur-[36px] translate-y-1/2 -translate-x-1/2 pointer-events-none" aria-hidden="true" />
        </div>
      </div>
    </div>
  );
}
