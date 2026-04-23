
import {useState} from "react"
import {ShortForm} from "./ShortForm"
import {MotionCard} from "./MotionCard"
const options = [
    {
        id : 1,
        name : "ShortForm-content",
        label: "Short-Form Content"
    },
    {
        id : 2,
        name : "Motion Graphics",
        label: "Motion Graphics"
    },
    {
        id : 3,
        name : "Animation (2D/3D)",
        label: "Animation (2D/3D)"
    },
    {
        id : 4,
        name : "Video Editing",
        label: "Video Editing"
    },
    {
        id : 5,
        name : "Branding",
        label: "Branding"
    },
    {
        id : 6,
        name : "Monthly Retainers",
        label: "Monthly Retainers"
    }
]
export const PricingHero = () => {
    const [selected , SetSelected] = useState<string>(options[0].name);
    return (
        <>
            <div className="w-full min-h-dvh flex items-center justify-center flex-col gap-20 overflow-x-clip pt-20 sm:pt-0">
                <div className="absolute bg-[#003641] w-[372px] h-[262px] top-[97px] -left-[147px] blur-[300px] pointer-events-none" />
                <div className="">
                    <h2 className="text-center">
                        <span className="text-[40px] font-black text-white"><span className="bg-linear-to-t from-[#42B6A7] to-[#41B6A7] bg-clip-text text-transparent">Pricing</span> That Makes Sense</span> <br/> <span className="font-[10] text-[40px] text-white">One a few more things.</span>
                    </h2>
                </div>
                <div className="flex gap-3 items-center justify-center w-full mt-10">
                    {options.map((option) => (
                        <div
                            onClick={() => {
                                SetSelected(option.name)
                            }}
                            key={option.id} className={`text-white font-black border-[1px] cursor-pointer transition-all rounded-[44px] py-1 px-4 w-fit h-12 text-center flex items-center justify-center ${option.name === selected ? "bg-linear-to-r from-[#065A69] via-[#093A47] to-[#0B1F2A] border-[#00A9BD]" : "bg-[#0B1F2A] border-[0.5px] border-[#00A9BD3D]"}`}>
                            {option.label}
                        </div>
                    ))}
                </div>
                <div className="w-full -mt-3 h-[2px] relative bg-linear-to-r from-[#00222600] via-[#00A9BD] to-[#00222600] block sm:hidden"/>
                <div className="z-10 -mt-8">
                    {selected === "ShortForm-content" && (
                        <ShortForm
                            firstFieldTitle="Project Complexity"
                            firstFieldItems={["Basic – Raw Cut", "Intermediate – Light VFX", "Advanced – Heavy VFX"]}
                            secondFieldTitle="Platform Focus"
                            secondFieldItems={["Instagram Reels", "TikTok", "YouTube Shorts"]}
                            thirdFieldTitle="Hook Style"
                            thirdFieldItems={["Pattern Interrupt Intro", "Story Hook", "Question Hook"]}
                            fourthFieldTitle="Deadline"
                            fourthFieldItems={["Express Delivery", "Standard (48h)", "Flexible (72h+)"]}
                            durationTitle="Video Duration"
                            initialDuration={60}
                        />
                    )}
                    {selected === "Animation (2D/3D)" && (
                        <ShortForm
                            firstFieldTitle="Animation Type"
                            firstFieldItems={["3D Product Visualization", "2D Explainer", "Character Animation", "Motion Logo"]}
                            secondFieldTitle="Scene Complexity"
                            secondFieldItems={["Simple Environments", "Detailed Environments", "Cinematic Worlds"]}
                            thirdFieldTitle="Storyboard & Script"
                            thirdFieldItems={["Client Provided", "Co-created", "We Create"]}
                            fourthFieldTitle="Render Quality"
                            fourthFieldItems={["Full HD", "2K", "4K"]}
                            durationTitle="Duration"
                            initialDuration={30}
                        />
                    )}
                    {selected === "Video Editing" && (
                        <ShortForm
                            firstFieldTitle="Project Complexity"
                            firstFieldItems={["Basic – Simple cuts", "Intermediate – Light effects", "Advanced – Heavy effects"]}
                            secondFieldTitle="Deadline"
                            secondFieldItems={["Express Delivery", "Standard (48h)", "Flexible (72h+)"]}
                            thirdFieldTitle="Content Type"
                            thirdFieldItems={["Teaser / Promo", "Product Demo", "Tutorial", "Vlog"]}
                            fourthFieldTitle="Output Versions"
                            fourthFieldItems={["Horizontal", "Vertical", "Square"]}
                            durationTitle="Video Duration"
                            initialDuration={60}
                        />
                    )}
                    {selected === "Motion Graphics" && <MotionCard/>}
                </div>

            </div>
        </>
    )
}
