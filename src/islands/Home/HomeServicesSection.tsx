

import { motion } from "framer-motion";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { SmartImage } from "@/utils/SmartImage.tsx";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./ProcessScrollSection.css";

export default function HomeServicesSection() {
  const [activeTab, setActiveTab] = useState("animation");

  const services = [
    {
      id: 1,
      title: "Short-form",
      description: "Used by UX/UI and web designers to improve customer experience.",
      image: "/animation-section/short-form.png",
    },
    {
      id: 2,
      title: "3D/2D Animation",
      description: "Used by UX/UI and web designers to improve customer experience.",
      image: "/animation-section/3D.jpg",
    },
    {
      id: 3,
      title: "Motion Graphics",
      description: "Used by UX/UI and web designers to improve customer experience.",
      image: "/animation-section/motion.jpg",
    },
    {
      id: 4,
      title: "Videos",
      description: "Used by UX/UI and web designers to improve customer experience.",
      image: "/animation-section/video.jpg",
    },
  ];

  return (
      <section className="relative pb-20 lg:pb-34 overflow-hidden">
        {/* Background SVG - Kept same as your code */}
        <svg
            height="963"
            viewBox="0 0 1440 963"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute pointer-events-none w-full top-5 opacity-50 lg:opacity-100"
        >
          {/* ... (Your existing SVG paths) ... */}
          <defs>
            {/* ... (Your existing SVG defs) ... */}
          </defs>
        </svg>

        <div className="relative z-10 container mx-auto px-4 lg:px-6 max-w-7xl">
          <div className="text-center mb-10 lg:mb-16">
            <p className="text-gray-400 text-xs lg:text-sm mb-3 uppercase tracking-widest">
              Everything we can create for you
            </p>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-[1.2] lg:leading-tight text-white px-2">
            <span className="bg-linear-to-r from-[#44B7A5] to-[#30B9C6] bg-clip-text text-transparent">
                Animation and design
            </span>
              <br className="hidden sm:block" /> services built for modern brands
            </h2>

            <div className="inline-flex items-center p-1 rounded-full bg-white/5 border border-white/10">
              <button
                  onClick={() => setActiveTab("animation")}
                  className={`px-5 py-2 lg:px-8 lg:py-3 rounded-full cursor-pointer font-medium text-xs lg:text-sm transition-all duration-300 ${
                      activeTab === "animation"
                          ? "bg-linear-to-r from-[#00A9BD] to-[#1D553A] text-white shadow-[0_0_15px_#00A9BD]"
                          : "text-gray-400 hover:text-white"
                  }`}
              >
                Animation
              </button>
              <button
                  onClick={() => setActiveTab("design")}
                  className={`px-5 py-2 lg:px-8 lg:py-3 rounded-full cursor-pointer font-medium text-xs lg:text-sm transition-all duration-300 ${
                      activeTab === "design"
                          ? "bg-linear-to-r from-[#00A9BD] to-[#1D553A] text-white shadow-[0_0_15px_#00A9BD]"
                          : "text-gray-400 hover:text-white"
                  }`}
              >
                Design
              </button>
            </div>
          </div>

          {/* Carousel for Mobile / Grid for Desktop */}
          <div className="relative">
            <Swiper
                modules={[Pagination, Autoplay]}
                spaceBetween={20}
                slidesPerView={1.2}
                centeredSlides={true}
                pagination={{ clickable: true, dynamicBullets: true }}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                breakpoints={{
                  // When window width is >= 768px (Tablet)
                  768: {
                    slidesPerView: 2,
                    centeredSlides: false,
                  },
                  // When window width is >= 1024px (Desktop)
                  1024: {
                    slidesPerView: 4,
                    centeredSlides: false,
                    allowTouchMove: false, // Disable drag on desktop
                  },
                }}
                className="services-swiper pb-12! lg:pb-0!"
            >
              {services.map((service, index) => (
                  <SwiperSlide key={service.id} className="h-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="group relative h-full py-4"
                    >
                      <div className="absolute inset-0 bg-after rounded-3xl transition-all duration-500 ease-out opacity-0 lg:group-hover:opacity-100" />

                      <div
                          className="relative h-full bg-[#0f172a]/80 backdrop-blur-sm rounded-3xl border border-white/5 overflow-hidden z-10 transition-all duration-500 ease-out lg:group-hover:-translate-y-2 lg:group-hover:rotate-2 origin-bottom-right"
                      >
                        <div className="relative h-40 lg:h-48 bg-background overflow-hidden m-2 rounded-2xl">
                          <SmartImage
                              src={service.image}
                              alt={service.title}
                              className="w-full h-full object-cover transition-transform duration-500 lg:group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-linear-to-t from-[#0f172a] to-transparent opacity-60" />
                        </div>

                        <div className="p-5 lg:p-6 text-center lg:text-left">
                          <h3 className="text-lg lg:text-xl font-bold text-white mb-2">
                            {service.title}
                          </h3>
                          <p className="text-gray-400 text-xs lg:text-sm leading-relaxed">
                            {service.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        <style {...{ jsx: "true", global: "true" } as any}>{`
  .services-swiper .swiper-pagination-bullet {
    background: #00A9BD !important;
  }
  @media (min-width: 1024px) {
    .services-swiper .swiper-pagination {
      display: none;
    }
  }
`}</style>
      </section>
  );
}