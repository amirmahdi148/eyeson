import { motion } from "framer-motion";
import { SmartImage } from "../../utils/SmartImage.tsx";
import PrimaryButton from "@/components/Shared/PrimaryButton.tsx";

export default function SaasEditingSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative flex w-full flex-col items-center justify-center gap-8 px-6 py-12 lg:flex-row lg:items-center lg:gap-16 lg:px-20 lg:py-24"
    >
      <p className="text-[11px] sm:text-sm tracking-widest text-white/60 font-semibold uppercase text-center w-full lg:absolute lg:top-8 lg:left-1/2 lg:-translate-x-1/2">
        WHY SAAS CREATIVE MATTERS
      </p>
      <motion.div
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative order-2 w-full max-w-[640px] cursor-pointer overflow-hidden rounded-2xl shadow-lg lg:order-1 lg:w-1/2"
        style={{ aspectRatio: "1250 / 841" }}
      >
        <SmartImage
          src="/video-pieces/under-hero.svg"
          alt="SaaS Creative"
          fill
          className="object-contain"
          priority
        />
      </motion.div>

      <div className="relative order-1 flex w-full max-w-full flex-col items-center gap-6 pt-0 text-center md:max-w-none md:text-left lg:order-2 lg:w-1/2 lg:pt-8">
        <h2 className="text-[42px] font-bold leading-[1.15] text-white md:text-5xl md:leading-tight lg:text-6xl text-center">
          Raw Footage Alone <span className="text-[#0fe0d2]">Is Not Enough.</span>
        </h2>
        <p className="text-[14px] leading-8 text-gray-200 md:text-xl md:leading-relaxed text-center">
          Good SaaS creative shapes how users experience your product. It controls clarity,
          value proposition, and attention, turning complex features into something intuitive, compelling, and easier to understand.
          From explainer videos and product demos to launch campaigns and short-form social media content, strong creative helps your message land faster and keeps your audience
          engaged without overwhelming them.
          The difference between a product people ignore and a product people adopt is often the
          creative behind it.
        </p>

        <PrimaryButton
          text="See Our Work"
          href="/portfolio"
          width="14rem"
          height="50px"
        />
      </div>
    </motion.section>
  );
}
