export const Hero = () => {
    return (
        <div className="min-h-screen w-full flex flex-col justify-center overflow-hidden">
            <div
                className="flex flex-col items-center justify-center bg-[#000E17] relative z-5 mb-10 min-h-[90vh] px-4"
                style={{
                    backgroundImage: "url('/aboutus.webp')",
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    WebkitMaskImage:
                        "linear-gradient(180deg, transparent 0%, black 20%, black 80%, transparent 100%)",
                    maskImage:
                        "linear-gradient(180deg, transparent 0%, black 20%, black 80%, transparent 100%)",
                }}
            >
                <div
                    className="absolute z-1 -left-1 pointer-events-none w-60 h-180 bg-linear-to-b from-[#46B6A080] to-[#00374180] blur-[150px] opacity-60"
                />
                <div className="flex items-center justify-center text-center flex-col w-full max-w-4xl gap-8 sm:gap-10 z-4 animate-fade-in">
                    <div className="flex flex-col gap-4 items-center justify-center">
                        <h4 className="text-sm uppercase tracking-widest text-[#38B6B3] animate-slide-up">
                            About us
                        </h4>
                        <h3
                            className="font-bold text-xl sm:text-3xl md:text-4xl text-white max-w-2xl leading-tight animate-slide-up"
                        >
                            <span className="text-[#38B6B3]">EyesOn Studio</span> is a creative studio helping brands communicate through motion, design,
                            video, and visual storytelling.
                        </h3>
                        <h5
                            className="text-sm sm:text-base md:text-lg text-white/80 max-w-2xl leading-relaxed animate-fade-in"
                        >
                            Our team brings together editors, motion designers, graphic designers, UI/UX designers,
                            and creative strategists working across different countries, with primary hubs in <b>Tbilisi</b> and <b>Dubai</b>.
                            From product launches and SaaS explainers to brand identities and social content, we help
                            brands turn ideas into visual experiences people remember.
                        </h5>
                    </div>
                    <div className="animate-slide-up">
                        <div className="flex flex-wrap gap-4 sm:gap-8 justify-center">
                            <a href="#contact" className="border-2 border-[#00A9BD] text-white rounded-[36px] py-2.5 px-6 sm:py-3.5 sm:px-10 bg-linear-to-r from-[#00A9BD] to-[#1D553A] cursor-pointer shadow-[0px_2px_25px_#00A9BD] text-sm sm:text-lg font-bold transition-transform duration-200 hover:scale-105 active:scale-95">
                                Book a Call
                            </a>

                            <a href="#work" className="border-2 border-[#00A9BD] text-white rounded-[36px] py-2.5 px-6 sm:py-3.5 sm:px-10 bg-black cursor-pointer shadow-[0px_2px_25px_#00A9BD] text-sm sm:text-lg font-bold transition-transform duration-200 hover:scale-105 active:scale-95">
                                Explore Our Work
                            </a>
                        </div>
                    </div>
                </div>
                <div
                    className="absolute right-1 pointer-events-none w-60 h-180 bg-linear-to-b from-[#46B6A080] to-[#00374180] blur-[150px] opacity-60"
                />
            </div>
        </div>
    );
};
