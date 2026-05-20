import BusinessNeedsSection from "@/islands/Shared/BusinessNeedsSection.tsx";
import { AnimatedSVG } from "@/islands/MotionGraphics/NeedsRightMG.tsx";

export const BusinessNeedsWrapper = () => {
  const cards = [
    {
      id: 1,
      title: "Promote brand individuality",
      description:
        "Motion graphics give your brand a visual identity that feels modern, unique, and instantly recognizable.",
      image: "/animation-section/short-form.webp",
    },
    {
      id: 2,
      title: "Stand out from competitors",
      description:
        "Clean, well-structured edits naturally separate you from noise. Strong storytelling and polished visuals make your videos feel more professional and memorable.",
      image: "/animation-section/motion.webp",
    },
    {
      id: 3,
      title: "Create shareable & reusable assets",
      description:
        "Great edits can be repurposed across social platforms and campaigns. This gives your team more content options without starting from scratch each time.",
      image: "/animation-section/video.webp",
    },
  ];
  return <BusinessNeedsSection cards={cards} rightSection={<AnimatedSVG />} />;
};
