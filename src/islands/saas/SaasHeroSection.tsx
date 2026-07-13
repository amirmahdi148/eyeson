import { HeroBasic } from "../Shared/HeroBasic.tsx";
import { SmartImage } from "../../utils/SmartImage.tsx";
import { motion, type Variants } from "framer-motion";

function SaasHeroCard() {
  const floatVariants: Variants = {
    animate: {
      y: [0, -8, 0],
      transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
    },
  };

  return (
    <motion.div
      animate="animate"
      variants={floatVariants}
      className="relative w-full max-w-lg mx-auto"
    >
      <div className="absolute inset-8 rounded-full bg-[#00A9BD]/15 blur-3xl" aria-hidden="true" />
      <SmartImage
        src="/Header/DesignServices/uixd.webp"
        alt="SaaS product interface and creative design showcase"
        width={800}
        height={800}
        className="relative z-10 mx-auto h-auto w-full object-contain"
      />
    </motion.div>
  );
}

export const SaasHeroSection = () => {
  return (
    <HeroBasic
      SmallLabel="SaaS CREATIVE STUDIO"
      BeforeHighlight="Turn your product into"
      Highlight="a story people remember."
      AfterHighlight=""
      Description="We help SaaS teams create compelling product narratives, launch campaigns, and demo content that clarify value, drive adoption, and fuel growth."
      primaryBtnText="Start a SaaS Project"
      secondaryBtnText=""
      imageUrl=""
      rightComponent={<SaasHeroCard />}
      showBackground
      backgroundClassName="bg-[radial-gradient(ellipse_at_top,_rgba(0,233,215,0.08)_0%,_transparent_60%),radial-gradient(ellipse_at_bottom_left,_rgba(18,172,181,0.05)_0%,_transparent_50%)]"
    />
  );
};
