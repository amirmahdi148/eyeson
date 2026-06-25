import React, {
    type RefObject,
} from "react";
import {
    motion,
    AnimatePresence,
} from "framer-motion";
import {
    Home,
    ArrowRight,
    Folder,
    Plus,
    Pen,
    Play,
} from "lucide-react";


const CATEGORIES = [
    {
        id: "motion-design",
        title: "Motion Design",
        videoUrl: "/home/mov_bbb.webm",
    },
    {
        id: "video-editing",
        title: "Video Editing",
        videoUrl: "/home/mov_bbb.webm",
    },
    {
        id: "3d-uiux",
        title: "3D / UIUX",
        videoUrl: "/home/mov_bbb.webm",
    },
    {
        id: "brand-identity",
        title: "Brand Identity",
        videoUrl: "/home/mov_bbb.webm",
    },
];

interface RightSectionHeroProps {
    activeTab: string;
    shouldReduceMotion: boolean | null;
    videoRef: RefObject<HTMLVideoElement | null>;
    handleTimeUpdate: () => void;
}

export default function RightSectionHero({
                                             activeTab,
                                             shouldReduceMotion,
                                             videoRef,
                                             handleTimeUpdate,
                                         }: RightSectionHeroProps) {
    const activeVideo = CATEGORIES.find((c) => c.id === activeTab)?.videoUrl;

    return (
        <motion.div
            initial={{opacity: 0, x: shouldReduceMotion ? 0 : 30}}
            animate={{opacity: 1, x: 0}}
            transition={{duration: 0.8, ease: "easeOut", delay: 0.2}}
            className="relative order-1 lg:order-2 w-full lg:w-[55%] xl:w-[52%]"
        >

            <div className="absolute top-100 left-20 z-50 flex items-center justify-center gap-3">
              <div className="w-35 h-30  z-50 flex items-center justify-center">
                    <img src="/home/RightElements/el/btnbg.webp" alt="" className="absolute inset-0 h-full w-full "/>

                    <div className="w-full flex items-start justify-center flex-col ">
                        <Play className=" z-10 h-6 w-6 md:h-8 md:w-8 text-white/90 pl-2 "/>
                        <h2 className="text-xs z-10">Motion Design</h2>
                        <h4 className="text-xs z-10">Stunning animation <br/> and visual storytelling</h4>
                    </div>
                </div>
              <div className="w-35 h-30  z-50 flex items-center justify-center">
                    <img src="/home/RightElements/el/btnbg.webp" alt="" className="absolute inset-0 h-full w-full "/>
                    <div className="w-full flex items-start justify-center flex-col ">
                      <Play className=" z-10 h-6 w-6 md:h-8 md:w-8 text-white/90 pl-2 "/>
                      <h2 className="z-10">Video Production</h2>
                      <h4 className="z-10">High-end production <br/> with cinematic quality</h4>
                    </div>
                    </div>
                    <div className="w-35 h-30  z-50 flex items-center justify-center">
                      <img src="/home/RightElements/el/btnbg.webp" alt="" className="absolute inset-0 h-full w-full "/>
                      <div className="w-full flex items-start justify-center flex-col ">
                        <Play className=" z-10 h-6 w-6 md:h-8 md:w-8 text-white/90 pl-2 "/>
                        <h2 className="z-10">Brand Identity</h2>
                        <h4 className="z-10">Design systems that <br/> define and elevate</h4>
                      </div>
                      </div>
                      <div className="w-35 h-30  z-50 flex items-center justify-center">
                        <img src="/home/RightElements/el/btnbg.webp" alt="" className="absolute inset-0 h-full w-full "/>
                        <div className="w-full flex items-start justify-center flex-col ">
                          <Play className=" z-10 h-6 w-6 md:h-8 md:w-8 text-white/90 pl-2 "/>
                          <h2 className="z-10">Creative Strategy</h2>
                          <h4 className="z-10"> Insight-led Ideas that <br/> drive real impact</h4>
                        </div>
                      </div>
                    </div>
                        <div className="absolute inset-0 z-20 pointer-events-none">
                            <img
                                src="/home/RightElements/el/20.svg"
                                alt=""
                                className="h-full w-full scale-[1.2] md:scale-[1] lg:scale-[1.4] xl:scale-[1.6]"
                            />
                            <Play
                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-8 w-8 md:h-10 md:w-10 text-cyan-400/80"/>
                        </div>
                        <img
                            src="/home/RightElements/el/1.svg"
                            alt=""
                            className="absolute inset-0 z-50 h-full w-full scale-[1.2] md:scale-[1] lg:scale-[1.4] xl:scale-[1.6]  pointer-events-none"
                        />
                        <img
                            src="/home/RightElements/el/2.svg"
                            alt=""
                            className="absolute inset-0 z-50 h-full w-full scale-[1.2] md:scale-[1] lg:scale-[1.4]  xl:scale-[1.6] pointer-events-none"
                        />
                        <img
                            src="/home/RightElements/el/3.svg"
                            alt=""
                            className="absolute inset-0 z-50 h-full w-full scale-[1.2] md:scale-[1] lg:scale-[1.4]  xl:scale-[1.6] pointer-events-none"
                        />
                        <img
                            src="/home/RightElements/el/5.svg"
                            alt=""
                            className="hidden lg:block absolute inset-0 z-50 h-full w-full scale-[0.6] sm:scale-[0.8] md:scale-[1] lg:scale-[1.4] xl:scale-[1.6] pointer-events-none"
                        />
                        <img
                            src="/home/RightElements/el/6.svg"
                            alt=""
                            className="hidden lg:block absolute inset-0 z-50 h-full w-full scale-[0.6] sm:scale-[1.2] md:scale-[1] lg:scale-[1.4] xl:scale-[1.6]  pointer-events-none"
                        />
                        <img
                            src="/home/RightElements/el/7.svg"
                            alt=""
                            className="hidden lg:block absolute inset-0 z-50 h-full w-full scale-[0.6] sm:scale-[0.8] md:scale-[1] lg:scale-[1.4] xl:scale-[1.6] pointer-events-none"
                        />

                        <div
                            className="relative mx-auto w-full max-w-162.5 mb-12 lg:mb-0 pt-4 lg:pt-0 lg:pr-16 xl:pr-0">
                            <div
                                className="relative overflow-hidden rounded-xl md:rounded-[20px] border border-[#13303d] bg-[#051118] shadow-[0_0_30px_rgba(25,150,150,0.1)] lg:shadow-[0_0_60px_rgba(25,150,150,0.15)] transition-shadow duration-500 hover:shadow-[0_0_50px_rgba(25,150,150,0.2)] lg:hover:shadow-[0_0_80px_rgba(25,150,150,0.3)]">
                                <div
                                    className="flex items-center justify-between border-b border-[#183945] bg-[#071823] px-3 py-2 md:px-5 md:py-3">
                                    <div className="flex items-center gap-2.5 md:gap-4 text-[#448b99]">
                                        <Home className="h-3.5 w-3.5 md:h-4 md:w-4"/>
                                        <ArrowRight className="h-3.5 w-3.5 md:h-4 md:w-4"/>
                                        <Folder className="h-3.5 w-3.5 md:h-4 md:w-4 text-cyan-400"/>
                                        <Plus className="h-3.5 w-3.5 md:h-4 md:w-4"/>
                                        <Pen className="h-3.5 w-3.5 md:h-4 md:w-4"/>
                                    </div>
                                </div>

                                <div className="relative aspect-16/10 w-full bg-[#0a141a]">
                                    <AnimatePresence mode="wait">
                                        <motion.video
                                            key={activeTab}
                                            ref={videoRef}
                                            src={activeVideo}
                                            autoPlay
                                            muted
                                            loop
                                            playsInline
                                            onTimeUpdate={handleTimeUpdate}
                                            initial={{opacity: 0}}
                                            animate={{opacity: 1}}
                                            exit={{opacity: 0}}
                                            transition={{duration: 0.4}}
                                            className="absolute inset-0 h-full w-full object-cover"
                                        />
                                    </AnimatePresence>
                                    <div
                                        className="absolute inset-0 bg-[#051118]/10 mix-blend-overlay pointer-events-none"/>
                                </div>
                            </div>
                        </div>
        </motion.div>
);
}
