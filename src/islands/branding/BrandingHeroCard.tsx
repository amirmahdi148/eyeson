"use client";

import { useState } from "react";
import { motion, type Variants } from "framer-motion";

export default function BrandingHeroCard() {
    const [isHovered, setIsHovered] = useState(false);

    const folderFrontVariants: Variants = {
        idle: { rotateX: 0, translateY: 0 },
        hover: {
            rotateX: -35,
            translateY: 5,
            transition: { type: "spring", stiffness: 300, damping: 20 },
        },
    };

    const paperVariants: Variants = {
        idle: { y: 10, opacity: 0 },
        hover: {
            y: -25,
            opacity: 1,
            transition: { delay: 0.1, type: "spring", stiffness: 300, damping: 20 },
        },
    };

    const cardVariants: Variants = {
        idle: { scale: 1 },
        hover: { scale: 1.02, transition: { duration: 0.3 } },
    };

    return (
        <div className="flex justify-center lg:justify-end perspective-[1000px]">
            <motion.div
                variants={cardVariants}
                initial="idle"
                animate={isHovered ? "hover" : "idle"}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="relative w-full max-w-105 aspect-square rounded-[40px] bg-[#071118]/80 border border-[#162938] backdrop-blur-md flex flex-col items-center justify-center cursor-pointer shadow-2xl"
            >
                <div className="relative w-50 h-45 mb-8 transform-style-3d">
                    <div className="absolute bottom-0 w-full h-37 bg-[#008A9E] rounded-xl rounded-tr-3xl shadow-inner z-10" />

                    <div className="absolute top-4 left-0 w-20 h-8 bg-[#008A9E] rounded-t-xl z-10" />

                    <motion.div
                        variants={paperVariants}
                        className="absolute left-4 right-4 h-28 bg-white/90 rounded-t-lg z-20 shadow-sm flex flex-col gap-2 p-3"
                    >
                        <div className="w-full h-2 bg-gray-200 rounded-full" />
                        <div className="w-3/4 h-2 bg-gray-200 rounded-full" />
                        <div className="w-1/2 h-2 bg-[#42D1D1] rounded-full mt-2" />
                    </motion.div>

                    <motion.div
                        variants={folderFrontVariants}
                        style={{ transformOrigin: "bottom center" }}
                        className="absolute bottom-0 w-full h-37 bg-linear-to-br from-[#42D1D1] to-[#00A9BD] rounded-xl z-30 shadow-[0_10px_20px_rgba(0,0,0,0.3)] border-t border-white/20"
                    />
                </div>

                <div className="text-center z-40">
                    <h3 className="text-2xl font-semibold text-white mb-2 tracking-wide">
                        Branding
                    </h3>
                    <p className="text-[#42D1D1] text-sm mb-1">24 Projects</p>
                    <p className="text-gray-500 text-xs uppercase tracking-widest transition-opacity duration-300">
                        {isHovered ? "View Gallery" : "Hover to Explore"}
                    </p>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isHovered ? 0.3 : 0 }}
                    className="absolute bottom-20 w-3/4 h-10 bg-[#42D1D1] rounded-[100%] blur-xl pointer-events-none"
                />
            </motion.div>
        </div>
    );
}