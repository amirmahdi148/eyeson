"use client";

import { PlayableMediaFrame } from "./PlayableMediaFrame";
import { HeroBasic } from "../Shared/HeroBasic.tsx";

// یادت نره این دو تا رو اون بالا ایمپورت کنی (اگر ایمپورت نشدن):
import PrimaryButton from "@/components/Shared/PrimaryButton";
import SecondaryButton from "@/components/Shared/SecondaryButton";



export const AnimationsHero = () => {
  return (
    <>
      <HeroBasic
        BeforeHighlight="Premium"
        Highlight="2D & 3D Animations"
        AfterHighlight="Built to Elevate Brands"
        Description="High-impact animated visuals designed to differentiate your brand, enhance perception, and capture attention across digital platforms."
        imageUrl="/animation-section/Edited.webp"
        animationType="slide"
        enableImageHover={true}
        primaryBtnClassName="text-white"
        primaryBtnText="View Our Work"
        secondaryBtnText="Get Pricing"
        primaryBtnUrl="#work"
        imageWrapperClassName="w-[calc(100vw - 300px)] md:w-110"
        secondaryBtnUrl="#pricing"
      />
    </>
  );
};

export const MediaFrameHero = () => {
  return (
    <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 md:px-10 lg:px-16 py-16 md:py-24 text-white overflow-hidden">
      <div className="flex flex-col lg:flex-row items-center gap-10 md:gap-14 lg:gap-20">
        
        {/* ========================================== */}
        {/* بخش مدیا: در موبایل بالا (order-1)، دسکتاپ سمت چپ (order-1) */}
        {/* ========================================== */}
        <div className="order-1 flex w-full justify-center lg:w-1/2">
          <div className="w-full max-w-lg md:max-w-2xl lg:max-w-full transform-gpu transition-transform duration-500 hover:scale-[1.02]">
            <PlayableMediaFrame
              imgUrl="/animation-section/Animated_boy.webp"
              alt="2D animation portal scene"
              playable
              vidLink={null}
            />
          </div>
        </div>

        {/* ========================================== */}
        {/* بخش متنی: در موبایل پایین (order-2)، دسکتاپ سمت راست (order-2) */}
        {/* ========================================== */}
        <div className="order-2 flex w-full flex-col items-center text-center lg:w-1/2 lg:items-start lg:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-extrabold leading-[1.15] tracking-tight">
            What is{" "}
            <span className="bg-gradient-to-r from-[#22d3ee] to-[#22B0B0] bg-clip-text text-transparent">
              2D &amp; 3D animation
            </span>{" "}
            <br className="hidden lg:block" />
            and why your brand needs it
          </h2>

          <div className="mt-6 flex flex-col gap-4 max-w-xl text-[14px] sm:text-base md:text-lg leading-[1.7] text-white/60 font-light">
            <p>
              2D animation focuses on clean design, fluid movement, and clear
              storytelling. It’s perfect for explainer videos, brand identity,
              and UI interactions where clarity is key. Meanwhile, 3D adds
              depth, texture, and realism—ideal for product showcases, immersive
              environments, and high-end visual campaigns.
            </p>
            <p>
              Together, they help brands break through the noise, simplifying
              complex ideas while creating visually stunning assets that stick
              in the user’s memory long after they scroll past.
            </p>
          </div>

          {/* ========================================== */}
          {/* دکمه‌ها */}
          {/* ========================================== */}
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row w-full sm:w-auto items-center gap-3 sm:gap-4 lg:gap-5">
            <div className="w-full sm:w-[15rem] lg:w-auto">
              <PrimaryButton text="Get Ad Creatives" width="100%" />
            </div>
            <div className="w-full sm:w-[15rem] lg:w-auto">
              <SecondaryButton text="See our work" width="100%" />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};