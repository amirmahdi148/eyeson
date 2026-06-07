import { motion, type Variants } from "framer-motion";
import { SmartImage } from "../../utils/SmartImage.tsx";

export const ServicesSection = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const cardBg = "bg-[#091D24]/80";
  const cardBorder = "border border-[#14343B]";
  const tagBg = "bg-transparent border border-[#234F58]";

  return (
    <section className="relative w-full py-12 px-4 sm:py-16 sm:px-6 lg:py-20 lg:px-16 overflow-hidden font-sans">
      {/* ===== هدر ===== */}
      <div className="max-w-4xl mx-auto text-center mb-10 sm:mb-12 lg:mb-16">
        <h2 className="text-2xl font-bold text-white mb-2 leading-tight sm:text-3xl md:text-4xl lg:text-[44px]">
          Complete <span className="text-[#42D1D1]">Branding</span>
        </h2>
        <h2 className="text-2xl font-bold text-white mb-4 leading-tight sm:text-3xl md:text-4xl lg:text-[44px] lg:mb-6">
          & Visual Identity Services
        </h2>
        <p className="text-gray-400 text-sm leading-relaxed max-w-2xl mx-auto md:text-base">
          Build a distinctive, scalable brand identity that stays consistent across every touchpoint.
        </p>
      </div>

      {/* ===== گرید اصلی ===== */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6"
      >
        {/* ===== کارت بزرگ چپ ===== */}
        <motion.div
          variants={cardVariants}
          className={`lg:col-span-5 rounded-3xl ${cardBg} ${cardBorder} p-6 sm:p-8 flex flex-col justify-between shadow-xl`}
        >
          <div>
            <h3 className="text-xl font-bold text-white mb-3 sm:text-2xl sm:mb-4">
              Brand Strategy & Positioning
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-5 font-light sm:mb-6">
              Define your brand's purpose, audience, positioning, and visual direction.
            </p>

            <p className="text-white font-medium mb-2 text-sm sm:mb-3">
              Includes:
            </p>
            <div className="flex flex-wrap gap-2 mb-6 sm:mb-8">
              {["Brand Discovery", "Positioning", "Brand Messaging"].map(
                (tag) => (
                  <span
                    key={tag}
                    className={`px-3 py-1 rounded-full text-xs text-gray-300 ${tagBg}`}
                  >
                    {tag}
                  </span>
                ),
              )}
            </div>
          </div>

          <div className="relative w-full aspect-video rounded-xl overflow-hidden mt-auto bg-[#041217] sm:aspect-4/3">
            <SmartImage
              src="/Branding/transform.webp"
              alt="Transform your brand"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>

        {/* ===== ۴ کارت راست ===== */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-6">
          {/* کارت ۱ */}
          <motion.div
            variants={cardVariants}
            className={`rounded-3xl ${cardBg} ${cardBorder} p-5 sm:p-6 shadow-lg`}
          >
            <div className="flex items-center gap-3 mb-3 sm:gap-4 sm:mb-4">
              <div className="w-10 h-10 shrink-0 rounded-xl bg-gradient-to-b from-[#14343B] to-transparent border border-[#234F58] flex items-center justify-center shadow-inner sm:w-12 sm:h-12">
                <svg
                  className="w-5 h-5 text-[#42D1D1] sm:w-6 sm:h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white leading-tight sm:text-xl">
                Logo & Visual Identity Design
              </h3>
            </div>
            <p className="text-gray-400 text-xs leading-relaxed mb-4 font-light sm:text-sm sm:mb-6">
              Create a recognizable visual identity that reflects your brand and sets you apart.
            </p>
            <p className="text-white font-medium mb-2 text-xs sm:text-sm sm:mb-3">
              Includes:
            </p>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {["Logo Design", "Color Palette", "Typography", "Visual Language"].map(
                (tag) => (
                  <span
                    key={tag}
                    className={`px-2.5 py-1 rounded-full text-xs text-gray-300 ${tagBg}`}
                  >
                    {tag}
                  </span>
                ),
              )}
            </div>
          </motion.div>

          {/* کارت ۲ */}
          <motion.div
            variants={cardVariants}
            className={`rounded-3xl ${cardBg} ${cardBorder} p-5 sm:p-6 shadow-lg`}
          >
            <div className="flex items-center gap-3 mb-3 sm:gap-4 sm:mb-4">
              <div className="w-10 h-10 shrink-0 rounded-xl bg-gradient-to-b from-[#14343B] to-transparent border border-[#234F58] flex items-center justify-center shadow-inner sm:w-12 sm:h-12">
                <svg
                  className="w-5 h-5 text-[#42D1D1] sm:w-6 sm:h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white leading-tight sm:text-xl">
                Brand Assets & Marketing Materials
              </h3>
            </div>
            <p className="text-gray-400 text-xs leading-relaxed mb-4 font-light sm:text-sm sm:mb-6">
              Design the essential assets your brand needs across digital and print channels.
            </p>
            <p className="text-white font-medium mb-2 text-xs sm:text-sm sm:mb-3">
              Includes:
            </p>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {["Social Media Assets", "Presentation Design", "Marketing Materials"].map((tag) => (
                <span
                  key={tag}
                  className={`px-2.5 py-1 rounded-full text-xs text-gray-300 ${tagBg}`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* کارت ۳ */}
          <motion.div
            variants={cardVariants}
            className={`rounded-3xl ${cardBg} ${cardBorder} p-5 sm:p-6 shadow-lg`}
          >
            <div className="flex items-center gap-3 mb-3 sm:gap-4 sm:mb-4">
              <div className="w-10 h-10 shrink-0 rounded-xl bg-gradient-to-b from-[#14343B] to-transparent border border-[#234F58] flex items-center justify-center shadow-inner sm:w-12 sm:h-12">
                <svg
                  className="w-5 h-5 text-[#42D1D1] sm:w-6 sm:h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white leading-tight sm:text-xl">
                Design Systems
              </h3>
            </div>
            <p className="text-gray-400 text-xs leading-relaxed mb-4 font-light sm:text-sm sm:mb-6">
              Create scalable visual systems that ensure consistency across products and marketing.
            </p>
            <p className="text-white font-medium mb-2 text-xs sm:text-sm sm:mb-3">
              Includes:
            </p>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {["Reusable Components", "Layout Systems", "Brand Consistency"].map(
                (tag) => (
                  <span
                    key={tag}
                    className={`px-2.5 py-1 rounded-full text-xs text-gray-300 ${tagBg}`}
                  >
                    {tag}
                  </span>
                ),
              )}
            </div>
          </motion.div>

          {/* کارت ۴ */}
          <motion.div
            variants={cardVariants}
            className={`rounded-3xl ${cardBg} ${cardBorder} p-5 sm:p-6 shadow-lg`}
          >
            <div className="flex items-center gap-3 mb-3 sm:gap-4 sm:mb-4">
              <div className="w-10 h-10 shrink-0 rounded-xl bg-gradient-to-b from-[#14343B] to-transparent border border-[#234F58] flex items-center justify-center shadow-inner sm:w-12 sm:h-12">
                <svg
                  className="w-5 h-5 text-[#42D1D1] sm:w-6 sm:h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white leading-tight sm:text-xl">
                Brand Guidelines
              </h3>
            </div>
            <p className="text-gray-400 text-xs leading-relaxed mb-4 font-light sm:text-sm sm:mb-6">
              Document the rules that keep your brand clear, consistent, and recognizable.
            </p>
            <p className="text-white font-medium mb-2 text-xs sm:text-sm sm:mb-3">
              Includes:
            </p>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {["Usage Guidelines", "Do's & Don'ts", "Brand Playbook"].map((tag) => (
                <span
                  key={tag}
                  className={`px-2.5 py-1 rounded-full text-xs text-gray-300 ${tagBg}`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
