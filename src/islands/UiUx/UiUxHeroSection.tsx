"use client";

import PrimaryButton from "@/components/Shared/PrimaryButton";
import SecondaryButton from "@/components/Shared/SecondaryButton";

// آدرس عکس‌های سمت راست رو اینجا وارد کن
const images = [
  { id: 1, src: "/uiux/screen.webp", alt: "Fluidity UI" },
  { id: 2, src: "/uiux/screen1.webp", alt: "Exploration UI" },
  { id: 3, src: "/uiux/screen2.webp", alt: "Third UI" },
];

export default function UiUxHeroSection() {
  return (
    <section className="relative w-full overflow-hidden py-16 md:py-20 lg:py-32">
      <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-between gap-12 sm:gap-16 px-4 sm:px-6 lg:flex-row lg:px-8">
        
        {/* ========================================== */}
        {/* ستون راست (تصاویر): در موبایل می‌آید بالا (order-1) */}
        {/* ========================================== */}
        <div className="order-1 lg:order-2 relative w-full sm:w-[85%] md:w-[75%] lg:w-7/12 flex justify-center mt-6 lg:mt-0">
          <div className="relative mx-auto h-[260px] sm:h-[360px] md:h-[450px] lg:h-[550px] w-[95%] sm:w-full lg:w-[120%] lg:-translate-x-4">
            
            {/* عکس سوم (پشتی‌ترین - بالا راست) */}
            <div className="group absolute right-0 sm:right-[5%] lg:right-0 top-0 w-[70%] sm:w-[75%] lg:w-[80%] overflow-hidden rounded-[12px] border border-white/5 shadow-2xl transition-all duration-500 hover:-translate-y-4 hover:shadow-[0_20px_40px_rgba(0,0,0,0.6)] z-10">
              <div className="bg-[#121212] pt-3 sm:pt-4 lg:pt-5 relative h-full w-full transition-opacity duration-500">
                <img
                  src={images[2].src}
                  alt={images[2].alt}
                  className="w-full h-auto object-fill"
                />
              </div>
            </div>

            {/* عکس دوم (میانی) */}
            <div className="group absolute right-[10%] sm:right-[15%] lg:right-[12%] top-[12%] sm:top-[15%] lg:top-[10%] w-[70%] sm:w-[75%] lg:w-[80%] overflow-hidden rounded-[14px] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-500 hover:-translate-y-4 hover:shadow-[0_20px_50px_rgba(0,0,0,0.7)] z-20">
              <div className="bg-[#1a1025] pt-5 lg:pt-6 relative h-full w-full transition-opacity">
                {/* شبیه‌سازی نوار مرورگر */}
                <div className="absolute top-0 left-0 w-full h-5 lg:h-6 bg-[#2a1b38] flex items-center px-3 lg:px-4 gap-1 lg:gap-1.5">
                  <div className="w-1.5 h-1.5 lg:w-2 lg:h-2 rounded-full bg-white/20"></div>
                  <div className="w-1.5 h-1.5 lg:w-2 lg:h-2 rounded-full bg-white/20"></div>
                  <div className="w-1.5 h-1.5 lg:w-2 lg:h-2 rounded-full bg-white/20"></div>
                </div>
                <img
                  src={images[1].src}
                  alt={images[1].alt}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* عکس اول (جلویی‌ترین - پایین چپ) */}
            <div className="group absolute right-[20%] sm:right-[25%] lg:right-[24%] top-[24%] sm:top-[30%] lg:top-[20%] w-[70%] sm:w-[75%] lg:w-[80%] overflow-hidden rounded-[16px] border border-white/15 shadow-[0_30px_60px_rgba(0,0,0,0.7)] transition-all duration-500 hover:-translate-y-4 hover:shadow-[0_30px_70px_rgba(0,0,0,0.8)] hover:z-40 z-30">
              <div className="bg-[#0b101a] relative h-full w-full transition-opacity duration-500 opacity-100">
                {/* شبیه‌سازی مرورگر مک */}
                <div className="absolute top-0 left-0 w-full h-6 lg:h-7 bg-[#1c1c1e] flex items-center px-3 lg:px-4 gap-1 lg:gap-1.5 border-b border-white/5 z-10">
                  <div className="w-2 h-2 lg:w-2.5 lg:h-2.5 rounded-full bg-[#ff5f56]"></div>
                  <div className="w-2 h-2 lg:w-2.5 lg:h-2.5 rounded-full bg-[#ffbd2e]"></div>
                  <div className="w-2 h-2 lg:w-2.5 lg:h-2.5 rounded-full bg-[#27c93f]"></div>
                  <div className="mx-auto h-3 lg:h-4 w-24 lg:w-48 rounded bg-white/5"></div>
                </div>
                <div className="pt-6 lg:pt-7">
                  <img
                    src={images[0].src}
                    alt={images[0].alt}
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
            </div>
            
          </div>
        </div>

        {/* ========================================== */}
        {/* ستون چپ (متن‌ها): در موبایل می‌آید پایین (order-2) */}
        {/* ========================================== */}
        <div className="order-2 lg:order-1 flex w-full flex-col items-center text-center lg:items-start lg:text-left lg:w-5/12 z-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black leading-[1.12] tracking-tight text-white lg:text-[54px] xl:text-[60px]">
            <span className="text-[#32c9b4]">UI/UX Design</span> That Turns
            <br className="hidden sm:block lg:hidden xl:block" />
            <span className="inline-block mt-1 sm:mt-2 lg:mt-0"> Visitors Into Users</span>
          </h1>

          <p className="mt-4 sm:mt-6 max-w-lg text-[14px] leading-relaxed text-gray-300 sm:text-[16px] lg:text-[18px] font-light">
            We design digital experiences that are not just beautiful — but
            clear, scalable, and conversion-focused.
          </p>

          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row w-full sm:w-auto items-center justify-center lg:justify-start gap-3 sm:gap-4 lg:gap-5">
            <div className="w-full sm:w-auto">
              <PrimaryButton text="Request UI/UX Proposal" width="100%" />
            </div>
            <div className="w-full sm:w-auto">
              <SecondaryButton text="See our work" width="100%" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}