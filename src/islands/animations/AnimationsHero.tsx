"use client";
import { PlayableMediaFrame } from "./PlayableMediaFrame";
import {SmartImage} from "../../utils/SmartImage.tsx";
import {HeroBasic} from "../Shared/HeroBasic.tsx";

const cards = [
  { src: "/hero-card/1.jpg", alt: "3D hand", className: "col-start-1 row-start-1 h-56" },
  { src: "/hero-card/2.jpg", alt: "abstract shapes", className: "col-start-2 row-start-1 h-40" },
  { src: "/hero-card/3.jpg", alt: "planet scene", className: "col-start-3 row-start-1 h-56" },
  { src: "/hero-card/4.jpg", alt: "colorful room", className: "col-start-2 row-start-2 h-40" },
  { src: "/hero-card/5.jpg", alt: "character portal", className: "col-start-1 row-start-2 h-40" },
  { src: "/hero-card/6.jpg", alt: "floating spheres", className: "col-start-3 row-start-2 h-40" },
  { src: "/hero-card/7.jpg", alt: "coin render", className: "col-start-2 row-start-3 h-28" },
];

export default function AnimationsHero() {
  return (
    <>

      <HeroBasic
          BeforeHighlight="Premium"
          Highlight="2D & 3D Animations"
          AfterHighlight="Built to Elevate Brands"
          Description="High-impact animated visuals designed to differentiate your brand, enhance perception, and capture attention across digital platforms."
          imageUrl="/animation-section/Edited.png"


          primaryBtnClassName="text-white "
          primaryBtnText="View Our Work"
          secondaryBtnText="Get Pricing"
          primaryBtnUrl="#work"
          imageWrapperClassName="w-80 md:w-140"
          secondaryBtnUrl="#pricing"
      />

      <div className="grid items-center gap-8 pb-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] px-6 pb-16 pt-8 text-white md:px-10 lg:px-16">
        <PlayableMediaFrame
            imgUrl="/animation-section/Animated_boy.png"
            alt="2D animation portal scene"
            playable
            vidLink={null}
        />
        <div className="">
          <h2 className="text-3xl font-bold leading-tight md:text-5xl ">
            What is <span className="text-[#22B0B0]">2D &amp; 3D animation</span> and why your brand needs it
          </h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-white/70">
            2D animation focuses on clean design, typography, and graphic
            elements to communicate messages clearly, while 3D animation adds
            depth, realism, and dimensional detail to showcase products and
            concepts with greater impact.
          </p>
          <p className="mt-3 max-w-xl text-base leading-7 text-white/70">
            Together, they help brands explain complex ideas, capture
            attention quickly, and stand out across social media, ads,
            websites, and product visuals with a premium, consistent look.
          </p>
        </div>

      </div>

    </>
  );
}
