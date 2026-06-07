import { motion, type Variants } from "framer-motion";
import { SmartImage } from "../../utils/SmartImage.tsx";

export const WhyBrandingSection = () => {
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
  };

  return (
    <section className="w-full py-12 px-4 sm:py-16 md:px-8 lg:py-20 lg:px-16 font-sans">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.05 }}
        className="max-w-350 mx-auto flex flex-col lg:flex-row gap-5"
      >
        {/* ===== ستون چپ: تیتر + ۲ کارت افقی ===== */}
        <div className="flex flex-col gap-5 lg:w-[42%]">
          {/* تیتر */}
          <motion.div variants={itemVariants} className="mb-1">
            <h2 className="text-3xl font-black uppercase leading-tight tracking-tight text-white sm:text-4xl text-center lg:text-left md:text-5xl">
              WHY <span className="text-[#1ECFBC]">BRANDING</span> MATTERS
            </h2>
            <p className="text-gray-300 text-base font-light mt-2 sm:text-lg md:text-xl text-center lg:text-left">
              The Business Value of a Strong Brand
            </p>
          </motion.div>

          {/* کارت ۱: عکس چپ، متن راست */}
          <motion.div
            variants={itemVariants}
            className="flex flex-row rounded-2xl border border-[#14313B] bg-[#081620] overflow-hidden"
            style={{ minHeight: 160 }}
          >
            <div className="relative shrink-0" style={{ width: "42%" }}>
              <SmartImage
                src="/Branding/leftnum1.webp"
                alt="Builds Instant Trust and Credibility"
                fill
                className="object-none"
              />
            </div>
            <div
              className="flex flex-col justify-center p-4 sm:p-5 lg:p-6"
              style={{ width: "58%" }}
            >
              <h3 className="text-base font-bold text-white leading-snug mb-2 sm:text-lg lg:mb-3">
                Builds Trust &<br />
                Credibility
              </h3>
              <p className="text-gray-400 text-xs leading-relaxed sm:text-sm">
                Professional branding creates stronger first impressions and helps customers feel
                confident choosing your business.
              </p>
            </div>
          </motion.div>

          {/* کارت ۲: متن چپ، عکس راست */}
          <motion.div
            variants={itemVariants}
            className="flex flex-row rounded-2xl border border-[#14313B] bg-[#081620] overflow-hidden"
            style={{ minHeight: 160 }}
          >
            <div
              className="flex flex-col justify-center p-4 sm:p-5 lg:p-6"
              style={{ width: "58%" }}
            >
              <h3 className="text-base font-bold text-white leading-snug mb-2 sm:text-lg lg:mb-3">
                Increases Brand Recognition
              </h3>
              <p className="text-gray-400 text-xs leading-relaxed sm:text-sm">
                Consistent visual identity makes your brand easier to remember across every platform and
                customer touchpoint.
              </p>
            </div>
            <div className="relative shrink-0" style={{ width: "42%" }}>
              <SmartImage
                src="/Branding/leftnum2.webp"
                alt="Recognizable and Memorable"
                fill
                className="object-none"
              />
            </div>
          </motion.div>
        </div>

        {/* ===== ستون وسط: Consistency ===== */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col rounded-2xl border border-[#1A5560] bg-[#071820] overflow-hidden lg:w-[33%]"
        >
          <div className="p-5 sm:p-6 lg:p-7 shrink-0">
            <h3 className="text-xl font-bold text-white leading-tight mb-3 sm:text-2xl lg:mb-4">
              Creates Consistency Across Every Channel
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed lg:text-[15px]">
              A unified brand system keeps your website, social media, products, and marketing aligned
              under one visual identity.
            </p>
          </div>

          <div className="relative flex-1" style={{ minHeight: 260 }}>
            <SmartImage
              src="/Branding/rightnum1.webp"
              alt="Consistency Across Product and Marketing"
              fill
              className="object-none scale-110"
            />
          </div>
        </motion.div>

        {/* ===== ستون راست: Better Performing ===== */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col rounded-2xl border border-[#1A5560] bg-[#071820] overflow-hidden lg:w-[25%]"
        >
          <div className="relative flex-1" style={{ minHeight: 240 }}>
            <SmartImage
              src="/Branding/rightnum2.webp"
              alt="Better Performing Content and Ads"
              fill
              className="object-none scale-110"
            />
          </div>

          <div className="p-5 sm:p-6 lg:p-7 shrink-0">
            <h3 className="text-lg font-bold text-white leading-tight mb-2 sm:text-xl lg:mb-3">
              Differentiates You From Competitors
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed lg:text-[15px]">
              Distinctive branding helps your business stand out in crowded markets and communicate
              what makes you unique.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};
