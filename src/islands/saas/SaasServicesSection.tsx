import { motion, type Variants } from "framer-motion";
import { SmartImage } from "../../utils/SmartImage.tsx";

const services = [
  {
    title: "Product Explainer Videos",
    description: "Turn complex product workflows into clear, engaging stories that users understand in seconds.",
    image: "/Shared/Features/1.svg",
    tags: ["Explainer", "Onboarding", "Product Marketing"],
  },
  {
    title: "Launch Campaign Creative",
    description: "Every launch deserves visuals that cut through. We build campaign assets for ads, landing pages, and social.",
    image: "/Shared/Features/2.svg",
    tags: ["Campaign", "Ads", "Social"],
  },
  {
    title: "Feature Demos & Walkthroughs",
    description: "Showcase new features with polished demo videos that highlight value and drive adoption.",
    image: "/Shared/Features/3.svg",
    tags: ["Demo", "Walkthrough", "Release"],
  },
  {
    title: "Paid Social & Ad Creative",
    description: "Performance-driven creatives designed to stop the scroll and convert attention into action.",
    image: "/Shared/Features/4.svg",
    tags: ["Paid Social", "Performance", "Conversion"],
  },
  {
    title: "Brand Story & Positioning",
    description: "Move beyond features. We craft visual narratives that communicate your mission and market fit.",
    image: "/Shared/Features/5.svg",
    tags: ["Brand", "Storytelling", "Positioning"],
  },
  {
    title: "Ongoing Creative Partnership",
    description: "A steady pipeline of product content, campaign refreshes, and launch assets on your cadence.",
    image: "/Shared/Features/6.svg",
    tags: ["Retainer", "Scalable", "Pipeline"],
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

export const SaasServicesSection = () => {
  return (
    <section className="relative w-full py-16 px-4 sm:py-20 sm:px-6 lg:py-28 lg:px-16 overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 lg:mb-16">
          <p className="text-xs font-semibold tracking-[0.22em] text-[#42D1D1] uppercase mb-4">
            SAAS CREATIVE CAPABILITIES
          </p>
          <h2 className="text-3xl font-bold text-white leading-tight sm:text-4xl lg:text-5xl">
            Product Storytelling That <span className="text-[#42D1D1]">Drives Growth</span>
          </h2>
          <p className="mt-4 text-gray-400 text-sm max-w-2xl mx-auto md:text-base">
            From explainer videos to ad creatives, we craft visual content that makes your product easy to understand and hard to ignore.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              className="group relative rounded-2xl border border-white/10 bg-[#0A1A2A]/60 p-6 transition-all duration-300 hover:border-[#42D1D1]/30 hover:bg-[#0A1A2A]/80"
            >
              <div className="relative z-10">
                <SmartImage
                  src={service.image}
                  alt=""
                  width={48}
                  height={48}
                  className="mb-4 opacity-70 group-hover:opacity-100 transition-opacity"
                />
                <h3 className="text-lg font-semibold text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed mb-4">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-full text-xs text-gray-300 bg-white/5 border border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#42D1D1]/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
