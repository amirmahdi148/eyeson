"use client";

import { motion } from "framer-motion";

export default function TestimonialCard({ item }: { item: any }) {
  return (
    <div className="relative group h-full px-2 py-2">
      <div className="relative h-full bg-[#0B1F2A] rounded-[32px] overflow-hidden border border-[#109197]/10 transition-all duration-300 group-hover:border-[#109197]/50 group-hover:shadow-[0_0_30px_rgba(16,145,151,0.15)]">
        <div className="px-8 pt-8 pb-4 flex items-center gap-4 relative z-10">
          <div className="relative">
            <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[#109197] p-0.5 shadow-[0_0_15px_rgba(16,145,151,0.4)]">
              <img
                src={item.avatar}
                alt={item.name}
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg leading-tight group-hover:text-[#109197] transition-colors duration-300">
              {item.name}
            </h4>
            <p className="text-gray-400 text-xs mt-1">{item.role}</p>
          </div>
        </div>

        <div className="relative mt-2 mx-2 mb-2 bg-[#109197]/5 rounded-[28px] p-8 border border-[#109197]/10 group-hover:bg-[#109197]/10 transition-all duration-300 h-[calc(100%-100px)] flex flex-col justify-between overflow-hidden">
          <p className="text-gray-200 text-[15px] leading-relaxed relative z-10">
            "{item.text}"
          </p>

          <div className="flex gap-1 mt-6 relative z-10">
            {[...Array(5)].map((_, i) => (
              <motion.svg
                key={i}
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.2, rotate: 10 }}
                className={`w-5 min-h-10 max-h-10 drop-shadow-[0_0_8px_rgba(16,145,151,0.6)] ${i < item.stars ? "text-[#109197] fill-[#109197]" : "text-[#109197]/20 fill-[#109197]/20"}`}
                viewBox="0 0 24 24"
              >
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </motion.svg>
            ))}
          </div>

          <div className="absolute top-0 right-0 w-40 h-40 bg-[#109197]/10 rounded-full blur-[50px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#109197]/5 rounded-full blur-[40px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />
        </div>
      </div>
    </div>
  );
}
