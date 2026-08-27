import { SmartImage } from "../../utils/SmartImage.tsx";
import PrimaryButton from "@/components/Shared/PrimaryButton.tsx";

export default function VideoEditingSection() {
  return (
    <section
      className="relative flex w-full flex-col items-center justify-center gap-8 px-6 py-12 lg:flex-row lg:items-center lg:gap-16 lg:px-20 lg:py-24 animate-fade-in"
    >
      <p className="text-[11px] sm:text-sm tracking-widest text-white/60 font-semibold uppercase text-center w-full lg:absolute lg:top-8 lg:left-1/2 lg:-translate-x-1/2">
        WHY VIDEO EDITING MATTERS
      </p>
      <div
        className="relative order-2 w-full max-w-[640px] cursor-pointer overflow-hidden rounded-2xl shadow-lg lg:order-1 lg:w-1/2 transition-transform duration-300 hover:scale-[1.02]"
        style={{ aspectRatio: "1250 / 841" }}
      >
        <SmartImage
          src="/video-pieces/under-hero.svg"
          alt="Video Editing"
          fill
          className="object-contain"
          priority
        />
      </div>

      <div className="relative order-1 flex w-full max-w-full flex-col items-center gap-6 pt-0 text-center md:max-w-none md:text-left lg:order-2 lg:w-1/2 lg:pt-8 animate-slide-up">
        <h2 className="text-[42px] font-bold leading-[1.15] text-white md:text-5xl md:leading-tight lg:text-6xl text-center">
          Raw Footage Alone <span className="text-[#0fe0d2]">Is Not Enough.</span>
        </h2>
        <p className="text-[14px] leading-8 text-gray-200 md:text-xl md:leading-relaxed text-center">
          Good video editing shapes how people experience your content. It controls pacing,
          structure, clarity, emotion, and attention, turning raw clips into something smoother, more
          professional, and easier to follow.
          From talking head videos and podcasts to product launches, YouTube content, and shortform social media videos, editing helps your message land faster and keeps viewers
          engaged without overwhelming them.
          The difference between content people skip and content people remember is often the
          editing behind it.
        </p>

        <PrimaryButton
          text="See Our Work"
          href="/portfolio"
          width="14rem"
          height="50px"
        />
      </div>
    </section>
  );
}
