"use client";

export default function BusinessNeeds3DVisual() {
  return (
    <div className="relative h-[190px] w-full lg:h-[320px]">
      <div className="pointer-events-none absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_65%_45%,rgba(42,214,215,0.24),rgba(0,0,0,0)_55%)]" />

      <div className="panel-float absolute right-25 md:right-50 top-6 w-[62%]">
        <img
          src="/animation-section/3D/Big.webp"
          alt="3D animation panel"
          width={620}
          height={380}
          className="h-auto w-full drop-shadow-[0_0_26px_rgba(60,236,240,0.45)]"
        />
      </div>

      <div className="movement-float absolute bottom-10 md:bottom-30 right-0 w-[58%]">
        <img
          src="/animation-section/3D/Movement.webp"
          alt="Animated movement panel"
          width={560}
          height={320}
          className="h-auto w-full drop-shadow-[0_0_26px_rgba(60,236,240,0.42)]"
        />
      </div>

      <style>{`
        .panel-float {
          animation: panelFloat 6.2s ease-in-out infinite;
        }

        .movement-float {
          animation: movementFloat 4.4s ease-in-out infinite;
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

        @keyframes movementFloat {
          0%,
          100% {
            transform: translate3d(0, 0, 0);
          }
          25% {
            transform: translate3d(-6px, -8px, 0);
          }
          60% {
            transform: translate3d(3px, 4px, 0);
          }
        }
      `}</style>
    </div>
  );
}
