const process = [
  { number: "01", title: "Discover", description: "We dive into your product, audience, and goals to find the story that matters most.", image: "/pricing/svg/process/1.svg" },
  { number: "02", title: "Concept", description: "We shape a clear creative direction with visual references, storyboards, and messaging.", image: "/pricing/svg/process/2.svg" },
  { number: "03", title: "Produce", description: "We create polished assets — from explainer videos to campaign creatives — ready for every channel.", image: "/pricing/svg/process/3.svg" },
  { number: "04", title: "Deliver", description: "We hand off final files optimized for web, social, ads, and your internal platforms.", image: "/pricing/svg/process/4.svg" },
];

const testimonials = [
  {
    quote: "They didn't just make a video, they found the core narrative of our product that we couldn't even articulate. Conversions went up 40% in a week.",
    author: "Sarah Jenkins",
    role: "VP of Marketing, DataFlow",
  },
  {
    quote: "The team operates like an extension of our own marketing department. Fast, creative, and they deeply understand SaaS.",
    author: "David Chen",
    role: "Founder, Syncro",
  },
  {
    quote: "Their campaign creative completely transformed our paid social ROI. We're seeing lower CAC and much higher quality leads.",
    author: "Elena Rodriguez",
    role: "Growth Lead, Nexus",
  }
];

export const SaasProcessSection = () => {
  return (
    <div className="font-sans">
      {/* How We Work (Process) */}
      <section className="py-24 lg:py-32 relative bg-black/40 border-y border-white/5">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay"></div>
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <p className="text-xs font-bold tracking-[0.2em] text-[#42D1D1] uppercase mb-4">How we work</p>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">A focused process for faster launches.</h2>
          </div>
          
          <div className="grid md:grid-cols-4 gap-12 md:gap-8 relative">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-12 left-[12%] right-[12%] h-[2px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
            
            {process.map((step, index) => (
              <div key={step.number} className="relative group">
                <div className="w-24 h-24 mx-auto mb-8 relative z-10 rounded-[2rem] bg-[#07131C] border border-white/10 flex items-center justify-center transition-all duration-500 group-hover:-translate-y-3 group-hover:border-[#00A9BD]/50 group-hover:shadow-[0_10px_30px_-10px_#00A9BD] backdrop-blur-xl">
                  <img src={step.image} alt={step.title} className="w-10 h-10 object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300 group-hover:scale-110" loading="lazy" />
                  <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-gradient-to-br from-[#42D1D1] to-[#00A9BD] text-black font-bold flex items-center justify-center text-xs shadow-[0_0_15px_rgba(0,169,189,0.5)]">
                    {step.number}
                  </div>
                </div>
                <div className="text-center px-2">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#42D1D1] transition-colors">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-400">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[radial-gradient(ellipse_at_center,_rgba(0,169,189,0.08)_0%,_transparent_70%)] pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
        
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-20">
            <p className="text-xs font-bold tracking-[0.2em] text-[#42D1D1] uppercase mb-4">Social Proof</p>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Don't just take our word for it.</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.map((t) => (
              <div key={t.author} className="rounded-[2rem] border border-white/10 bg-white/5 p-8 lg:p-10 backdrop-blur-md relative group hover:bg-white/[0.08] hover:border-white/20 transition-all duration-300 shadow-xl hover:-translate-y-2">
                <div className="absolute top-8 right-8 text-[#00A9BD]/20 group-hover:text-[#00A9BD]/40 transition-colors">
                  <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true"><path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"/></svg>
                </div>
                <p className="text-slate-300 text-base lg:text-lg leading-relaxed mb-10 relative z-10 min-h-[120px]">"{t.quote}"</p>
                <div className="flex items-center gap-4 mt-auto">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#00A9BD] to-[#42D1D1] flex items-center justify-center text-black font-bold text-lg shadow-[0_0_15px_rgba(0,169,189,0.4)]">
                    {t.author.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-white">{t.author}</h4>
                    <p className="text-xs text-[#42D1D1] font-medium tracking-wide uppercase mt-1">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
