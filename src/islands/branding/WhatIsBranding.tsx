import { motion, type Variants } from "framer-motion";
import { SmartImage } from "../../utils/SmartImage.tsx";
import PrimaryButton from "@/components/Shared/PrimaryButton.tsx";

export const WhatIsBranding = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.1 },
    },
  };

  const imageVariants: Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const textVariants: Variants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="w-full py-10 sm:py-14 lg:py-24 px-4 sm:px-6 lg:px-16 overflow-hidden font-sans">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-7xl 2xl:max-w-375 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center"
      >
        {/* ستون چپ: تصویر */}
        <motion.div variants={imageVariants} className="relative w-full">
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-full aspect-4/3 sm:aspect-video lg:aspect-4/3 rounded-3xl overflow-hidden shadow-2xl shadow-[#5C45FD]/20 border border-white/5"
          >
            <div className="absolute inset-0 bg-linear-to-br from-[#5C45FD] to-[#3B25D4] flex items-center justify-center">
              <SmartImage
                src="/Branding/whatisbranding.webp"
                alt="Nexora Identity"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* هاله نورانی */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-[#5C45FD] opacity-20 blur-[100px] -z-10 rounded-full" />
        </motion.div>

        {/* ستون راست: متن و دکمه */}
        <motion.div variants={textVariants} className="flex flex-col">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[44px] 2xl:text-[50px] font-bold text-white mb-4 sm:mb-5 lg:mb-6 leading-tight tracking-tight">
            What is Branding & Visual Identity?
          </h2>

          <p className="text-gray-400 text-sm sm:text-base md:text-lg 2xl:text-xl leading-relaxed mb-7 sm:mb-8 lg:mb-10">
            Branding and visual identity define how your business looks, feels, and communicates to
            the world. It includes your logo, colors, typography, imagery, and design system working
            together to create a consistent and recognizable brand.
            A strong visual identity helps customers remember your brand, builds trust, and creates a
            professional presence across websites, social media, products, marketing materials, and
            every customer interaction.
          </p>

          <div className="self-start">
            <PrimaryButton
              text="See Our Work"
              width="15rem"
              href="/portfolio"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};
