import {
  BadgeCheck,
  Wand2,
  Coins,
  ScanEye,
  FolderSearch,
} from "lucide-react";

const rows = [
  {
    variable: "Best for",
    twoD: "Explaining ideas, abstract concepts, and clear messaging",
    threeD: "Showcasing products, materials, mechanics, and physical details",
  },
  {
    variable: "Visual style",
    twoD: "Flat, illustrated, and graphic-driven visuals",
    threeD: "Realistic depth with lifelike, dimensional visuals",
  },
  {
    variable: "Cost & time",
    twoD: "Faster production and more cost-effective",
    threeD: "Higher production cost and longer timelines",
  },
  {
    variable: "Look & feel",
    twoD: "Consistent, clean visual style across all scenes",
    threeD: "More immersive, cinematic, and premium-looking",
  },
  {
    variable: "Use cases",
    twoD: "Explainers, social content, ads, brand communication",
    threeD: "Product launches, demos, hero visuals, high-end branding",
  },
];

const icons = [
  <BadgeCheck className="w-6 h-6 text-cyan-300" />, // 1 - medal
  <Wand2 className="w-6 h-6 text-cyan-300" />,      // 2 - pen + sparkle vibe
  <Coins className="w-6 h-6 text-cyan-300" />,      // 3 - coins
  <ScanEye className="w-6 h-6 text-cyan-300" />,    // 4 - scanning eye
  <FolderSearch className="w-6 h-6 text-cyan-300" /> // 5 - file review
];

export default function AnimationStyleComparisonSection() {
  return (
      <section className="relative w-full overflow-hidden px-6 pb-24 pt-12 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs uppercase tracking-[0.18em] text-white/60">Style Comparison</p>
            <h2 className="mt-3 text-4xl font-extrabold leading-tight text-white md:text-5xl">
              <span className="text-cyan-300">2D vs 3D</span>
              <br />
              So which one should you choose?
            </h2>
            <p className="mt-5 text-sm leading-7 text-white/65 md:text-base">
              If you're deciding between 2D and 3D animation, you're not alone.
              Both styles are powerful. This comparison helps you quickly
              understand which option fits your goals, message, and budget best.
            </p>
          </div>

          <div className="mt-10 overflow-x-auto rounded-3xl border border-cyan-300/30 bg-[#081e2f]/80 shadow-[0_0_45px_rgba(34,211,238,0.15)]">
            <table className="w-full min-w-[780px] border-collapse text-left">
              <thead>
              <tr className="bg-[linear-gradient(90deg,#0dbfca,#0e8f9d)] text-white">
                <th className="px-6 py-4 text-2xl font-semibold">Variables</th>
                <th className="px-6 py-4 text-2xl font-semibold">2D animation</th>
                <th className="px-6 py-4 text-2xl font-semibold">3D animation</th>
              </tr>
              </thead>

              <tbody>
              {rows.map((row, index) => (
                  <tr
                      key={row.variable}
                      className={index % 2 === 0 ? "bg-[#0a1f31]" : "bg-[#113149]"}
                  >
                    <td className="w-[30%] border-t border-cyan-300/20 px-6 py-5 align-top">
                      <div className="flex items-center gap-3">
                      <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-cyan-300/35 bg-cyan-200/10 text-cyan-300">
                        {icons[index]}
                      </span>
                        <span className="text-xl font-bold text-white">
                        {row.variable}
                      </span>
                      </div>
                    </td>

                    <td className="w-[35%] border-t border-l border-cyan-300/20 px-6 py-5 text-lg leading-8 text-white/85">
                      {row.twoD}
                    </td>

                    <td className="w-[35%] border-t border-l border-cyan-300/20 px-6 py-5 text-lg leading-8 text-white/85">
                      {row.threeD}
                    </td>
                  </tr>
              ))}
              </tbody>
            </table>
          </div>

        </div>
      </section>
  );
}