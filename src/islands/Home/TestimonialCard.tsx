"use client";

export default function TestimonialCard({ item }: { item: any }) {
  return (
    <div className="relative group h-full">
      <div className="relative h-full flex flex-col justify-between bg-gradient-to-b from-[#08222c]/95 to-[#04141c]/95 rounded-[28px] overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.4)] backdrop-blur-xl p-7 md:p-8 transition-all duration-300 hover:border-[#00E6D7]/40 hover:-translate-y-1.5 hover:shadow-[0_25px_60px_rgba(0,169,189,0.2)]">
        
        {/* Top Glow Accent */}
        <div className="pointer-events-none absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-[#00E6D7]/12 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Client Header */}
        <div>
          <div className="flex items-center gap-4 relative z-10 mb-6">
            <div className="relative shrink-0">
              <div className="w-14 h-14 rounded-2xl overflow-hidden border-2 border-[#00E6D7]/40 p-0.5 shadow-[0_0_20px_rgba(0,230,215,0.25)] bg-[#03131c]">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-full h-full object-cover rounded-xl"
                  loading="lazy"
                />
              </div>
            </div>

            <div>
              <h4 className="text-white font-extrabold text-xl leading-tight group-hover:text-[#00E6D7] transition-colors duration-200">
                {item.name}
              </h4>
              <p className="text-[#00E6D7]/80 text-xs font-mono uppercase tracking-wider mt-1">{item.role}</p>
            </div>
          </div>

          {/* Testimonial Quote */}
          <div className="relative z-10 text-white/95 text-base sm:text-lg leading-relaxed font-normal">
            “{item.text}”
          </div>
        </div>

        {/* Bottom Stars Rating */}
        <div className="mt-8 pt-5 border-t border-white/5 flex items-center justify-between relative z-10">
          <div className="flex gap-1.5">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-5 h-5 transition-transform duration-200 hover:scale-110 ${
                  i < item.stars
                    ? "text-[#00E6D7] fill-[#00E6D7] drop-shadow-[0_0_8px_rgba(0,230,215,0.6)]"
                    : "text-white/15 fill-white/15"
                }`}
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            ))}
          </div>

          <span className="text-xs font-mono text-white/40">Verified Project</span>
        </div>

        {/* Ambient background glow inside card */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-[#00E6D7]/05 rounded-full blur-[50px] pointer-events-none" aria-hidden="true" />
      </div>
    </div>
  );
}
