
import BusinessNeedsSection from "../Shared/BusinessNeedsSection.tsx";

export const SaasNeedsBlock = () => {
    return(
        <BusinessNeedsSection
            label="WHY SAAS CREATIVE MATTERS"
            beforeHighlight="Why Modern Products Need"
            highlight="Better Creative"
            afterHighlight=""
            body="In today’s content environment, features alone are not enough. Strong creative helps
brands communicate faster, hold attention longer, and make products feel more
approachable across websites, ads, and product launches.
Good creative improves clarity, storytelling, and user experience, helping your product
work harder instead of getting ignored."

            mainTitle="Turn Features Into Value"
            mainBody="Professional creative helps your audience understand your product faster, trust your brand
more, and stay engaged longer. Clearer visuals, structure, and storytelling make
complex workflows feel simple and effective."
            primaryBtnText="Get a Free Sample"
            secondaryBtnText="See Our Work"
            cards={[
                {
                    id: 1,
                    title: "Build a Stronger Brand Identity",
                    description:
                        "Consistent editing style, motion, pacing, captions, and visuals help your content feel more\n" +
                        "recognizable, polished, and aligned across every platform.",
                    image: "/Shared/Features/left.webp",                },
                {
                    id: 2,
                    title: "Stand Out in Crowded Feeds",
                    description:
                        "Clean structure, stronger hooks, better pacing, and sharper storytelling help your content\n" +
                        "separate itself from low-quality or forgettable posts online.",
                    image: "/Shared/Features/middle.webp",                },
                {
                    id: 3,
                    title: "Create Reusable Content Assets",
                    description:
                        "Strong edits can be repurposed across Reels, Shorts, YouTube, ads, landing pages,\n" +
                        "podcasts, and campaigns, giving your brand more value from every piece of footage.",
                    image: "/Shared/Features/right.webp",                },
            ]}

        />
    )
}