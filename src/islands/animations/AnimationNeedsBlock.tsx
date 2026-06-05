import BusinessNeedsSection from "../Shared/BusinessNeedsSection";
import BusinessNeeds3DVisual from "./BusinessNeeds3DVisual";

export default function AnimationNeedsBlock() {
  return (
    <BusinessNeedsSection
      beforeHighlight="Why Modern Brands"
      highlight="Use 2D & 3D Animation"
      afterHighlight=""
      label="WHY ANIMATION MATTERS"
      body="Animation helps brands communicate ideas faster, explain products more clearly, and
create stronger visual experiences across websites, ads, presentations, social media, and
launch campaigns.
Strong visuals make content feel more premium, more memorable, and easier to
understand while helping brands increase attention, improve engagement, boost growth,
and support higher conversions online."
      mainTitle="Turn Complex Ideas Into Clear Visual Stories"
      mainBody="Animation helps simplify products, workflows, services, and concepts through motion,
visual storytelling, and cinematic presentation. It allows brands to communicate more
clearly, build stronger audience trust, and create a bigger visual impact that supports
growth and sales."
      primaryBtnText="Get Pricing"
      secondaryBtnText="See Our Work"
      panelOverlayClassName="bg-[linear-gradient(125deg,rgba(5,28,47,0.72)_15%,rgba(4,16,29,0.8)_60%,rgba(3,13,24,0.86)_100%)]"
      rightSection={<BusinessNeeds3DVisual />}
      cards={[
        {
          id: 1,
          title: "Build a More Recognizable Brand",
          description:
            "Consistent motion design, animation style, color, and visual direction help brands feel\n" +
              "more polished, memorable, and visually distinct across modern digital platforms.",
          image: "/animation-section/short-form.webp",
        },
        {
          id: 2,
          title: "Stand Out in Competitive Markets",
          description:
            "High-quality animation increases perceived brand value and helps products, campaigns,\n" +
              "and content feel more modern, premium, and visually impressive compared to\n" +
              "competitors.",
          image: "/animation-section/motion.webp",
        },
        {
          id: 3,
          title: "Boost Engagement & Marketing Performance",
          description:
            "Strong animation captures attention faster, improves content engagement, and helps\n" +
              "marketing campaigns, launch videos, ads, and social media content perform more\n" +
              "effectively online.",
          image: "/animation-section/video.webp",
        },
      ]}
    />
  );
}
