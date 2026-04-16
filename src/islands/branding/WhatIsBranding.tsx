

import { motion, type Variants } from "framer-motion";
import {SmartImage} from "../../utils/SmartImage.tsx";


export const WhatIsBranding = () => {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.3, delayChildren: 0.1 },
        },
    };
    const imageVariants: Variants = {
        hidden: { opacity: 0, x: -50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.8, ease: "easeOut" },
        },
    };

    const textVariants: Variants = {
        hidden: { opacity: 0, x: 50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.8, ease: "easeOut" },
        },
    };

    return (
        <section className="w-full  py-16 lg:py-24 px-6 lg:px-16 overflow-hidden font-sans">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
            >
                <motion.div variants={imageVariants} className="relative w-full">
                    <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="relative w-full aspect-4/3 sm:aspect-video lg:aspect-4/3 rounded-3xl overflow-hidden shadow-2xl shadow-[#5C45FD]/20 border border-white/5"
                    >
                        <div className="absolute inset-0 bg-linear-to-br from-[#5C45FD] to-[#3B25D4] flex items-center justify-center">
                            <SmartImage
                                src="/Branding/whatisbranding.jpg"
                                alt="Nexora Identity"
                                fill
                                className="object-cover"
                            />

                            <div className="text-white text-5xl md:text-6xl font-bold flex items-center gap-4">
                                <div className="w-12 h-12 bg-white flex items-center justify-center rounded-[10px] transform -rotate-45">
                                    <div className="w-4 h-8 bg-[#5C45FD] transform rotate-45" />
                                </div>
                                Nexora
                            </div>
                        </div>
                    </motion.div>

                    {/* هاله نورانی پشت عکس */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-[#5C45FD] opacity-20 blur-[100px] -z-10 rounded-full" />
                </motion.div>

                {/* ستون راست: متن و دکمه */}
                <motion.div variants={textVariants} className="flex flex-col">
                    <h2 className="text-3xl md:text-4xl lg:text-[44px] font-bold text-white mb-6 leading-tight tracking-tight">
                        What is branding & visual identity?
                    </h2>

                    <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-10">
                        Branding and visual identity define how your audience sees,
                        remembers, and understands your product at a glance. It's the system
                        of logos, colors, typography, shapes, and visual rules that create a
                        consistent personality across every touchpoint. A strong identity
                        builds recognition, communicates values without saying a word, and
                        makes your brand feel intentional and trustworthy. When your visuals
                        work together with clarity and purpose, your message becomes
                        instantly more memorable.
                    </p>

                    <div className="self-start">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="relative group px-8 py-3.5 cursor-pointer rounded-full bg-linear-to-r from-[#1AD1BC] to-[#0989A5] text-white font-semibold shadow-[0_0_20px_rgba(0,169,189,0.5)] transition-all"
                        >
                            See our work
                        </motion.button>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}
