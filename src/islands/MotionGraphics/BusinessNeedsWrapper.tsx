import BusinessNeedsSection from "@/islands/Shared/BusinessNeedsSection.tsx";


export const BusinessNeedsWrapper = () => {
  const cards = [
    {
      id: 1,
      title: "Make Your Brand Easier to Understand",
      description:
        "Motion helps simplify abstract ideas, product features, services, and brand messages so\n" +
          "people can quickly understand what you do and why it matters.",
      image: "/animation-section/short-form.webp",
    },
    {
      id: 2,
      title: "Hold Attention Longer",
      description:
        "Strong motion, pacing, transitions, and visual rhythm make content feel more engaging,\n" +
          "helping viewers stay longer instead of scrolling away in seconds.",
      image: "/animation-section/motion.webp",
    },
    {
      id: 3,
      title: "Create More Value From Every Idea",
      description:
        "One motion concept can become reels, ads, website visuals, launch content, presentation\n" +
          "assets, and social posts, giving your brand more output from every message.",
      image: "/animation-section/video.webp",
    },
  ];
  return <BusinessNeedsSection cards={cards} beforeHighlight="Why Motion Graphics Matter" highlight="for Modern Brands"
                               body="In a world where people scroll fast and ignore most content, motion graphics help your
                               message become clearer, sharper, and harder to skip."
                               mainTitle="Turn Complex Messages Into Content People Actually Watch"
                               mainBody="Motion graphics help your audience understand your product, offer, or idea faster. Instead
                               of forcing people to read long explanations or connect the dots themselves, motion guides
                               their attention and makes the message feel simple, visual, and easy to remember.
                               "
                               primaryBtnText="Start a Project"
                               secondaryBtnText="See Our Work"
  />;
};
