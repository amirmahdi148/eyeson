"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import "./ProcessScrollSection.css";

export default function HomeServicesSection() {
  const [activeTab, setActiveTab] = useState("animation");

  const services = [
    {
      id: 1,
      title: "Short-form",
      description:
        "Used by UX/UI and web designers to improve customer experience.",
      image: "/animation-section/short-form.png",
    },
    {
      id: 2,
      title: "3D/2D Animation",
      description:
        "Used by UX/UI and web designers to improve customer experience.",
      image: "/animation-section/3D.jpg",
    },
    {
      id: 3,
      title: "Motion Graphics",
      description:
        "Used by UX/UI and web designers to improve customer experience.",
      image: "/animation-section/motion.jpg",
    },
    {
      id: 4,
      title: "Videos",
      description:
        "Used by UX/UI and web designers to improve customer experience.",
      image: "/animation-section/video.jpg",
    },
  ];

  return (
    <section className="relative pb-34 overflow-hidden">
      <svg
        width="1440"
        height="963"
        viewBox="0 0 1440 963"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute pointer-events-none w-full top-5"
      >
        <g filter="url(#filter0_f_273_2)">
          <path
            d="M1464 926.579H-58V36C-58 356.946 275.707 448.903 703 448.903C1130.29 448.903 1464 356.945 1464 36V926.579ZM703 513.672C275.707 513.672 -57.9997 605.629 -58 926.574H639.583C1066.88 926.574 1265.29 926.579 1464 926.575C1464 605.63 1130.29 513.672 703 513.672Z"
            fill="#035F6C"
            fill-opacity="0.3"
          />
        </g>
        <g filter="url(#filter1_f_273_2)">
          <path
            d="M1464 759.595H-58V202.983C-58 403.574 275.707 461.047 703 461.047C1130.29 461.047 1464 403.574 1464 202.983V759.595ZM703 501.528C275.707 501.528 -58 559.001 -58 759.592H1464C1464 559.002 1130.29 501.528 703 501.528Z"
            fill="#00A9BD"
            fill-opacity="0.3"
          />
        </g>
        <g filter="url(#filter2_f_273_2)">
          <path
            d="M1464 635.754H-58V313C-57.9999 438.436 275.707 474.376 703 474.376C1130.29 474.376 1464 438.436 1464 313V635.754ZM703 474.376C275.707 474.376 -58 510.316 -58 635.752H1464C1464 510.316 1130.29 474.376 703 474.376Z"
            fill="#46B6A0"
            fill-opacity="0.3"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_273_2"
            x="-94"
            y="0"
            width="1594"
            height="962.579"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="18"
              result="effect1_foregroundBlur_273_2"
            />
          </filter>
          <filter
            id="filter1_f_273_2"
            x="-103"
            y="157.983"
            width="1612"
            height="646.612"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="22.5"
              result="effect1_foregroundBlur_273_2"
            />
          </filter>
          <filter
            id="filter2_f_273_2"
            x="-98"
            y="273"
            width="1602"
            height="402.754"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="20"
              result="effect1_foregroundBlur_273_2"
            />
          </filter>
        </defs>
      </svg>

      <div className="absolute inset-0 w-full! bg-cover bg-no-repeat pointer-events-none overflow-hidden bg">
        <div className="absolute top-1/4 -left-50 w-150 h-150 bg-foreground/10 rounded-full blur-[150px]" />

        <div className="absolute top-1/2 -right-50 w-150 h-150 bg-foreground/10 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <p className="text-gray-400 text-sm mb-4">
            Here's everything we can create for you
          </p>

          <h2 className="text-4xl lg:text-5xl font-bold mb-8 leading-tight text-white">
            <span className="text-foreground">Animation and design</span>
            <br />
            services built for modern
            <br />
            brands
          </h2>

          <div className="inline-flex items-center p-1.5 rounded-full bg-transparent border border-white/10">
            <button
              onClick={() => setActiveTab("animation")}
              className={`
                px-8 py-3 rounded-full font-medium text-sm transition-all duration-300
                ${
                  activeTab === "animation"
                    ? "bg-linear-to-r from-foreground to-[#0d7a7f] text-white shadow-[0_0_20px_rgba(16,145,151,0.3)]"
                    : "text-gray-400 hover:text-white"
                }
              `}
            >
              Animation services
            </button>
            <button
              onClick={() => setActiveTab("design")}
              className={`
                px-8 py-3 rounded-full font-medium text-sm transition-all duration-300
                ${
                  activeTab === "design"
                    ? "bg-linear-to-r from-foreground to-[#0d7a7f] text-white shadow-[0_0_20px_rgba(16,145,151,0.3)]"
                    : "text-gray-400 hover:text-white"
                }
              `}
            >
              Design services
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative perspective-1000"
              style={{ perspective: "1000px" }}
            >
              <div className="absolute inset-0 bg-after rounded-3xl transition-all duration-500 ease-out opacity-0 group-hover:opacity-100" />

              <motion.div
                className="relative h-full bg-[#0f172a] rounded-3xl border border-white/5 overflow-hidden z-10 transition-all duration-500 ease-out group-hover:-translate-y-2 group-hover:translate-x-2 group-hover:rotate-5 origin-bottom-right group-hover:border-foreground/50"
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                <div className="relative h-48 bg-background overflow-hidden m-2 rounded-2xl">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-linear-to-t from-[#0f172a] to-transparent opacity-60" />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-foreground transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
