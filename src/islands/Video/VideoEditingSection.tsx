import { motion } from "framer-motion";
import { SmartImage } from "../../utils/SmartImage.tsx";
import PrimaryButton from "@/components/Shared/PrimaryButton.tsx";

export default function VideoEditingSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative flex w-full flex-col items-center gap-8 px-6 py-12 lg:flex-row lg:items-start lg:gap-16 lg:px-20 lg:py-24"
    >
      <motion.div
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative order-2 h-[230px] w-full max-w-[330px] cursor-pointer overflow-hidden rounded-2xl shadow-lg md:h-96 md:max-w-none md:rounded-xl lg:order-1 lg:h-[600px] lg:w-1/2"
      >
        <SmartImage
          src="/videoEditing.webp"
          alt="Video Editing"
          fill
          className="w-full h-full object-cover"
          priority
        />
      </motion.div>

      <div className="relative order-1 flex w-full max-w-[330px] flex-col items-center gap-6 pt-0 text-center md:max-w-none md:text-left lg:order-2 lg:w-1/2 lg:pt-8">
        <h2 className="text-[42px] font-bold leading-[1.15] text-white md:text-5xl md:leading-tight lg:text-6xl">
          What Is <span className="text-[#0fe0d2]">Video Editing?</span>
        </h2>
        <p className="text-[14px] leading-8 text-gray-200 md:text-xl md:leading-relaxed">
          Video editing is the process of shaping raw footage into a clear,
          engaging story. Its where pacing, visuals, sound, and structure come
          together to deliver a message that feels intentional and easy to
          absorb. Good editing removes distractions, highlights what matters,
          and guides the viewers attention from the first frame to the last.
          Whether youre launching a product, creating short-form content, or
          building a full promotional piece, thoughtful editing helps your video
          feel polished, impactful, and worth watching.
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
