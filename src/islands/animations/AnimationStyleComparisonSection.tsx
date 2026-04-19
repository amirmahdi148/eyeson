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
  <BadgeCheck key="1" className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-cyan-300" />,
  <Wand2 key="2" className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-cyan-300" />,
  <Coins key="3" className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-cyan-300" />,
  <ScanEye key="4" className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-cyan-300" />,
  <FolderSearch key="5" className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-cyan-300" />,
];

export default function AnimationStyleComparisonSection() {
  return (
    <section className="relative w-full overflow-hidden px-4 pb-20 pt-10 sm:px-6 md:pb-24 md:pt-12 lg:px-16 font-sans">
      <div className="mx-auto max-w-6xl">
        
        {/* === Header === */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[10px] uppercase tracking-[0.18em] text-white/60 sm:text-xs">
            Style Comparison
          </p>
          <h2 className="mt-2 text-3xl font-extrabold leading-tight text-white sm:mt-3 md:text-4xl lg:text-5xl">
            <span className="text-cyan-300">2D vs 3D</span>
            <br />
            So which one should you choose?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[13px] leading-relaxed text-white/65 sm:mt-5 sm:text-sm md:text-base md:leading-7">
            If you're deciding between 2D and 3D animation, you're not alone.
            Both styles are powerful. This comparison helps you quickly
            understand which option fits your goals, message, and budget best.
          </p>
        </div>

        {/* === Table Container === */}
        <div className="mt-8 sm:mt-10 overflow-hidden rounded-2xl border border-cyan-300/30 bg-[#081e2f]/80 shadow-[0_0_45px_rgba(34,211,238,0.15)] sm:rounded-3xl">
          {/* 
            اینجا min-w رو برداشتیم تا توی موبایل اسکرول افقی نخوره.
            از table-fixed استفاده کردیم که ستون‌ها متناسب تقسیم بشن.
          */}
          <table className="w-full table-fixed border-collapse text-left">
            
            {/* === Table Head === */}
            <thead>
              <tr className="bg-[linear-gradient(90deg,#0dbfca,#0e8f9d)] text-white">
                <th className="w-[28%] px-2 py-3 text-[11px] font-semibold tracking-wide sm:w-[30%] sm:px-4 sm:py-4 sm:text-lg md:px-6 md:text-2xl">
                  Variables
                </th>
                <th className="w-[36%] px-2 py-3 text-[11px] font-semibold tracking-wide border-l border-cyan-300/20 sm:w-[35%] sm:px-4 sm:py-4 sm:text-lg md:px-6 md:text-2xl">
                  2D animation
                </th>
                <th className="w-[36%] px-2 py-3 text-[11px] font-semibold tracking-wide border-l border-cyan-300/20 sm:w-[35%] sm:px-4 sm:py-4 sm:text-lg md:px-6 md:text-2xl">
                  3D animation
                </th>
              </tr>
            </thead>

            {/* === Table Body === */}
            <tbody>
              {rows.map((row, index) => (
                <tr
                  key={row.variable}
                  className={index % 2 === 0 ? "bg-[#0a1f31]" : "bg-[#113149]"}
                >
                  
                  {/* Column 1: Variables */}
                  <td className="border-t border-cyan-300/20 px-2 py-3 align-top sm:px-4 sm:py-4 md:px-6 md:py-5">
                    <div className="flex flex-col items-start gap-1.5 sm:flex-row sm:items-center sm:gap-3">
                      <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-cyan-300/35 bg-cyan-200/10 text-cyan-300 sm:h-8 sm:w-8 md:h-10 md:w-10">
                        {icons[index]}
                      </span>
                      <span className="text-[11px] font-bold text-white sm:text-sm md:text-lg lg:text-xl">
                        {row.variable}
                      </span>
                    </div>
                  </td>

                  {/* Column 2: 2D Animation */}
                  <td className="border-t border-l border-cyan-300/20 px-2 py-3 align-top text-[10px] leading-relaxed text-white/85 sm:px-4 sm:py-4 sm:text-sm sm:leading-6 md:px-6 md:py-5 md:text-base md:leading-7 lg:text-lg lg:leading-8">
                    {row.twoD}
                  </td>

                  {/* Column 3: 3D Animation */}
                  <td className="border-t border-l border-cyan-300/20 px-2 py-3 align-top text-[10px] leading-relaxed text-white/85 sm:px-4 sm:py-4 sm:text-sm sm:leading-6 md:px-6 md:py-5 md:text-base md:leading-7 lg:text-lg lg:leading-8">
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