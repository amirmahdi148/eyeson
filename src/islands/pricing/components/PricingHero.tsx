"use client";

import { useState } from "react";
import { ShortForm } from "./ShortForm";
import { MotionCard } from "./MotionCard";

const options = [
  { id: 1, name: "ShortForm-content", label: "Short-Form Content" },
  { id: 2, name: "Motion Graphics", label: "Motion Graphics" },
  { id: 3, name: "Animation (2D/3D)", label: "Animation (2D/3D)" },
  { id: 4, name: "Video Editing", label: "Video Editing" },
  { id: 5, name: "Branding", label: "Branding" },
  { id: 6, name: "Monthly Retainers", label: "Monthly Retainers" },
];

export const PricingHero = () => {
  const [selected, SetSelected] = useState<string>(options[0].name);

  return (
    <>
      <div className="w-full min-h-dvh flex items-center justify-center flex-col gap-10 sm:gap-20 overflow-x-hidden pt-20 sm:pt-0 pb-16">
        
        {/* پس‌زمینه محو */}
        <div className="absolute bg-[#003641] w-[372px] h-[262px] top-[97px] -left-[147px] blur-[300px] pointer-events-none z-[-1]" />
        
        {/* عنوان */}
        <div className="px-4 text-center mt-12 sm:mt-0">
          <h2 className="leading-tight">
            <span className="text-3xl sm:text-[40px] font-black text-white">
              <span className="bg-linear-to-t from-[#42B6A7] to-[#41B6A7] bg-clip-text text-transparent">
                Pricing
              </span>{" "}
              That Makes Sense
            </span>
            <br className="hidden sm:block" />
            <span className="font-light text-2xl sm:text-[40px] text-white/90 sm:text-white mt-2 block sm:mt-0 sm:inline">
              One a few more things.
            </span>
          </h2>
        </div>

        {/* 
            تب‌ها (Pills) 
            تغییرات:
            - اضافه شدن overflow-x-auto برای اسکرول افقی در موبایل
            - اضافه شدن flex-nowrap تا تب‌ها شکسته و خط به خط نشوند
            - مخفی کردن اسکرول‌بار (توسط کلاس سفارشی no-scrollbar)
        */}
        <div className="w-full px-4 sm:px-6 max-w-7xl">
          <div className="flex flex-nowrap gap-3 items-center justify-start sm:justify-center overflow-x-auto no-scrollbar w-full py-2">
            {options.map((option) => (
              <div
                key={option.id}
                onClick={() => SetSelected(option.name)}
                className={`text-white font-black border cursor-pointer transition-all rounded-full py-2 px-5 sm:px-6 h-12 text-sm sm:text-base text-center flex items-center justify-center shrink-0 whitespace-nowrap
                  ${
                    option.name === selected
                      ? "bg-linear-to-r from-[#065A69] via-[#093A47] to-[#0B1F2A] border-[#00A9BD] shadow-[0_0_15px_rgba(0,169,189,0.3)]"
                      : "bg-[#0B1F2A] border-[#00A9BD3D] hover:border-[#00A9BD80]"
                  }`}
              >
                {option.label}
              </div>
            ))}
          </div>
        </div>

        {/* خط جداکننده (فقط در موبایل) */}
        <div className="w-full -mt-6 sm:-mt-10 h-[1px] relative bg-linear-to-r from-[#00222600] via-[#00A9BD50] to-[#00222600] block sm:hidden" />

        {/* محتوای انتخابی */}
        <div className="z-10 w-full px-4 sm:px-6 max-w-6xl mx-auto flex justify-center -mt-2 sm:-mt-8">
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
          {selected === "Motion Graphics" && <MotionCard />}
        </div>
      </div>

      {/* استایل برای مخفی کردن اسکرول‌بار در تمامی مرورگرها */}
      <style dangerouslySetInnerHTML={{ __html: `
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
      `}} />
    </>
  );
};