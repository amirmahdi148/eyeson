import BusinessNeedsSection from "../Shared/BusinessNeedsSection";
import BusinessNeeds3DVisual from "./BusinessNeeds3DVisual";

export default function AnimationNeedsBlock() {
  return (
    <BusinessNeedsSection
      titleLine1="Why your business needs"
      titleHighlight="2D & 3D animation?"
      introText="2D and 3D animation allow brands to communicate ideas, products, and value with clarity and visual impact across modern platforms."
      featureTitle="Boost sales & interactivity"
      featureDescription="Users instantly understand your product when they see it in motion, helping increase engagement and conversion."
      primaryButtonLabel="Get a free sample"
      secondaryButtonLabel="See our work"
      panelOverlayClassName="bg-[linear-gradient(125deg,rgba(5,28,47,0.72)_15%,rgba(4,16,29,0.8)_60%,rgba(3,13,24,0.86)_100%)]"
      rightSection={<BusinessNeeds3DVisual />}
      cards={[
        {
          id: 1,
          title: "Promote brand individuality",
          description:
            "3D animation requires a more specialized workflow, which means every result feels unique and tailored.",
          image: "/animation-section/short-form.png",
        },
        {
          id: 2,
          title: "Stand out from competitors",
          description:
            "Because 3D animation demands expertise, brands that use it naturally look more polished and advanced.",
          image: "/animation-section/motion.jpg",
        },
        {
          id: 3,
          title: "Create shareable & reusable assets",
          description:
            "3D models can be reused, updated, and repurposed across future campaigns with minimal effort.",
          image: "/animation-section/video.jpg",
        },
      ]}
    />
  );
}
