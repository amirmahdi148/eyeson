"use client";

export default function BusinessNeeds3DVisual() {
  return (
    <div className="relative w-full">
      <div className="pointer-events-none absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_65%_45%,rgba(42,214,215,0.24),rgba(0,0,0,0)_55%)]" />

      {/* Grid overlap: both images share the same cell */}
      <div className="grid grid-cols-1">
        {/* Movement panel — behind, shifted down-right */}
        <div className="panel-float col-start-1 row-start-1 mt-25 sm:mt-30 md:mt-20 lg:mt-28 w-[55%] sm:w-[50%] md:w-[38%] lg:w-[42%] justify-self-end">
          <img
            src="/animation-section/3D/Movement.webp"
            alt="Animated movement panel"
            width={560}
            height={320}
            className="h-auto w-full drop-shadow-[0_0_26px_rgba(60,236,240,0.42)]"
          />
        </div>

        {/* Big panel — in front, centered, shifted up */}
        <div className="panel-float col-start-1 row-start-1 -mt-5 sm:-mt-8 md:-mt-15 lg:-mt-20 w-[60%] sm:w-[55%] md:w-[42%] lg:w-[45%] justify-self-center">
          <img
            src="/animation-section/3D/Big.webp"
            alt="3D animation panel"
            width={620}
            height={380}
            className="h-auto w-full drop-shadow-[0_0_26px_rgba(60,236,240,0.45)]"
          />
        </div>
      </div>

      <style>{`
        .panel-float {
          animation: panelFloat 6.2s ease-in-out infinite;
        }

        @keyframes panelFloat {
          0%,
          100% {
            transform: translate3d(0, 0, 0) scale(1);
          }
          50% {
            transform: translate3d(0, -7px, 0) scale(1.01);
          }
        }
      `}</style>
    </div>
  );
}
