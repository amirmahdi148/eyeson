const steps = [1, 2, 3, 4, 5, 6];

export default function SaasApproachTimelineSection() {
  return (
    <section
      className="relative overflow-hidden px-6 pb-16 pt-10 lg:px-20 flex justify-center items-center"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center animate-fade-in">
          <p className="mb-3 text-xs tracking-[0.2em] text-[#c2d3dc]">
            OUR PROCESS
          </p>
          <h2 className="text-3xl font-bold leading-tight text-white md:text-5xl">
            Our Approach to
            High-Impact SaaS Creative
          </h2>
          <p className="mt-4 text-sm leading-7 text-[#c3d4de] md:text-base">
            We don’t just design visuals and hope they work. Every creative asset is built through a clear
            process focused on product understanding, message clarity, platform behavior, visual impact, and
            user conversion.
          </p>
        </div>

        <div className="relative mx-auto mt-10 max-w-5xl">
          {/* Lines behind everything */}
          <div className="absolute bottom-0 left-5 top-0 -translate-x-1/2 md:left-10">
            <div className="h-full w-[2px] bg-[#46B59E]/30" />
            <div
              className="absolute left-0 top-0 h-full w-[2px] bg-gradient-to-b from-[#46B59E] via-[#00A9BD] to-[#46B59E]/20 shadow-[0_0_12px_#46B59E]"
            />
          </div>

          {/* Cards with circles */}
          <div className="space-y-4 md:space-y-6">
            {steps.map((step) => (
              <div key={step} className="flex items-center gap-6 md:gap-12 transition-all duration-300 hover:scale-[1.01]">
                {/* Numbered circle on the line */}
                <div className="relative flex w-10 shrink-0 items-start justify-center pt-1 md:w-20 md:pt-2">
                  <div className="relative flex h-12 w-12 items-center justify-center md:h-14 md:w-14">
                    <div className="absolute inset-0 flex items-center justify-center rounded-full border-[0.5px] border-[#46B59E] bg-[#032635] text-base font-bold text-white shadow-[0_0_14px_rgba(83,226,202,0.45)] md:text-xl">
                      {`0${step}`}
                    </div>
                  </div>
                </div>

                {/* Card SVG */}
                <div
                  className="min-w-0 flex-1 overflow-hidden rounded-2xl opacity-95 hover:opacity-100 transition-opacity"
                >
                  <img
                    src={`/adcreatives/svg/multi-layer/${step}.svg`}
                    alt={`Step ${step}'s svg`}
                    className="h-auto w-full"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
