"use client";

// آدرس عکس‌های سمت راست رو اینجا وارد کن
const images = [
  { id: 1, src: "/uiux/screen.webp", alt: "Fluidity UI" },
  { id: 2, src: "/uiux/screen1.webp", alt: "Exploration UI" },
  { id: 3, src: "/uiux/screen2.webp", alt: "Third UI" },
];

export default function UiUxHeroSection() {
  return (
    <section className="relative w-full py-20 lg:py-32">
      <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-between gap-16 px-6 lg:flex-row lg:px-8">
        {/* ستون چپ: متن‌ها و دکمه‌ها */}
        <div className="flex w-full flex-col items-start lg:w-5/12 z-10">
          <h1 className="text-[40px] font-black leading-[1.1] tracking-tight text-white sm:text-[48px] lg:text-[54px] xl:text-[60px]">
            <span className="text-[#32c9b4]">UI/UX Design</span> That Turns
            <br />
            Visitors Into Users
          </h1>

          <p className="mt-6 max-w-lg text-[16px] leading-relaxed text-gray-300 sm:text-[18px]">
            We design digital experiences that are not just beautiful — but
            clear, scalable, and conversion-focused.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-5">
            {/* دکمه پر */}
            <button className="relative inline-flex items-center justify-center rounded-full bg-[#11a99d] px-8 py-3.5 text-[15px] font-bold text-white transition-all duration-300 hover:bg-[#0e8f85] hover:shadow-[0_0_24px_rgba(17,169,157,0.5)]">
              Request UI/UX Proposal
            </button>

            {/* دکمه توخالی */}
            <button className="relative inline-flex items-center justify-center rounded-full border-2 border-[#1a3841] bg-[#0a1820] px-8 py-3.5 text-[15px] font-bold text-white transition-all duration-300 hover:border-[#11a99d]/50 hover:bg-[#0d1f29] hover:shadow-[0_0_24px_rgba(17,169,157,0.3)]">
              See our work
            </button>
          </div>
        </div>

        {/* ستون راست: تصاویر استک شده قطاری */}
        <div className="relative w-full lg:w-7/12">
          <div className="relative mx-auto h-[400px] w-[90%] sm:h-[500px] md:w-[85%] lg:h-[550px] lg:w-[120%] lg:-translate-x-4">
            {/* عکس سوم (پشتی‌ترین - بالا راست) */}
            <div className="group absolute right-0 top-0 w-[75%] sm:w-[80%] overflow-hidden rounded-[12px] border border-white/5 shadow-2xl transition-all duration-500 hover:-translate-y-4 hover:shadow-[0_20px_40px_rgba(0,0,0,0.6)]  z-10">
              <div className="bg-[#121212] pt-5 relative h-full w-full transition-opacity duration-500 ">
                <img
                  src={images[2].src}
                  alt={images[2].alt}
                  className="w-full h-auto object-fill"
                />
              </div>
            </div>

            {/* عکس دوم (میانی) */}
            <div className="group absolute right-[12%] top-[10%] w-[75%] sm:w-[80%] overflow-hidden rounded-[14px] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-500 hover:-translate-y-4 hover:shadow-[0_20px_50px_rgba(0,0,0,0.7)]  z-20">
              <div className="bg-[#1a1025] pt-6 relative h-full w-full transition-opacity">
                {/* شبیه‌سازی نوار مرورگر */}
                <div className="absolute top-0 left-0 w-full h-6 bg-[#2a1b38] flex items-center px-4 gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-white/20"></div>
                  <div className="w-2 h-2 rounded-full bg-white/20"></div>
                  <div className="w-2 h-2 rounded-full bg-white/20"></div>
                </div>
                <img
                  src={images[1].src}
                  alt={images[1].alt}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* عکس اول (جلویی‌ترین - پایین چپ) */}
            <div className="group absolute right-[24%] top-[20%] w-[75%] sm:w-[80%] overflow-hidden rounded-[16px] border border-white/15 shadow-[0_30px_60px_rgba(0,0,0,0.7)] transition-all duration-500 hover:-translate-y-4 hover:shadow-[0_30px_70px_rgba(0,0,0,0.8)] hover:z-40 z-30">
              <div className="bg-[#0b101a] relative h-full w-full transition-opacity duration-500 opacity-100">
                {/* شبیه‌سازی مرورگر مک */}
                <div className="absolute top-0 left-0 w-full h-7 bg-[#1c1c1e] flex items-center px-4 gap-1.5 border-b border-white/5 z-10">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></div>
                  <div className="mx-auto h-4 w-48 rounded bg-white/5"></div>
                </div>
                <div className="pt-7">
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
      </div>
    </section>
  );
}
