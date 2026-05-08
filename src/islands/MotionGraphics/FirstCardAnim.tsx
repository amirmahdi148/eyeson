import React, { useState, useEffect } from 'react';
import {motion, type Variants, easeInOut} from 'framer-motion';
import { Sparkles } from 'lucide-react';

export const AnimatedCard = () => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;
    // Animation Variants
    const containerVariants : Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1,
            },
        },
    };

    const popIn : Variants = {
        hidden: { opacity: 0, scale: 0.8, y: 20 },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: { type: 'spring', stiffness: 120, damping: 12 },
        },
    };

    const floating = (yOffset = 10, duration = 3) => ({
        y: [0, -yOffset, 0],
        transition: {
            duration: duration,
            repeat: Infinity,
            ease: easeInOut,
        },
    });

    const getPulseAnimation = (delay = 0) => ({
        scale: [1, 1.3, 1],
        opacity: [0.6, 1, 0.6],
        transition: { duration: 2, repeat: Infinity, ease: easeInOut, delay },
    });

    return (
        <div className="flex items-center justify-center overflow-hidden p-8 w-full">
            {/* Main Container */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="relative w-[700px] flex items-center justify-center"
            >
                {/* Wireframe Outline Top Left */}
                <motion.div
                    variants={popIn}
                    className="absolute top-0 left-0 w-48 h-48 border-[1.5px] border-cyan-300 rounded-[2rem] opacity-60 z-0"
                />

                {/* Wireframe Outline Bottom Right */}
                <motion.div
                    variants={popIn}
                    className="absolute -bottom-8 right-0 w-64 h-48 border-[1.5px] border-cyan-300 rounded-[2rem] opacity-60 z-0"
                />

                {/* Main Frosted Glass Background Card */}
                <motion.div
                    variants={popIn}
                    className="absolute w-[600px] h-[250px] rounded-[2rem] border border-cyan-400/50 shadow-[0_20px_50px_rgba(6,182,212,0.2)] overflow-hidden z-10 bg-gradient-to-br from-cyan-900/40 to-teal-800/20 backdrop-blur-md"
                >
                    {/* Inner shadow/glow effect */}
                    <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(6,182,212,0.3)]"></div>
                </motion.div>

                {/* --- Floating Elements --- */}

                {/* 3D Badge */}
                <motion.div
                    variants={popIn}
                    className="absolute top-4 left-10 z-20"
                >
                    <motion.div
                        animate={floating(8, 2.5)}
                        className="px-4 py-1.5 bg-[#00a8cc] rounded-full shadow-lg transform -rotate-12"
                    >
                        <span className="text-white font-bold text-sm tracking-wider">3D</span>
                    </motion.div>
                </motion.div>

                {/* Motion Design Pill */}
                <motion.div
                    variants={popIn}
                    className="absolute top-1/4 left-24 z-20"
                >
                    <motion.div
                        animate={floating(12, 4)}
                        className="px-8 py-4 bg-gradient-to-r from-[#17a2b8] to-[#20c997] rounded-xl shadow-xl shadow-cyan-900/20"
                    >
                        <span className="text-white font-extrabold text-lg tracking-wide">Motion Design</span>
                    </motion.div>
                </motion.div>

                {/* 4K Badge */}
                <motion.div
                    variants={popIn}
                    className="absolute top-10 right-48 z-20"
                >
                    <motion.div animate={floating(5, 3)}>
                        <div className="px-4 py-1 bg-[#343a40] rounded-xl shadow-lg border border-slate-600/50">
                            <span className="text-white font-bold text-sm">4K</span>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Team A Card */}
                <motion.div
                    variants={popIn}
                    className="absolute -bottom-4 left-4 z-30"
                >
                    <motion.div
                        animate={floating(10, 3.5)}
                        className="p-1 bg-[#1a202c] rounded-2xl shadow-2xl"
                    >
                        <div className="px-8 py-4 bg-gradient-to-br from-[#0f766e] to-[#0891b2] rounded-xl border border-cyan-400/30">
                            <span className="text-white font-semibold text-lg">Team A</span>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Team B Card */}
                <motion.div
                    variants={popIn}
                    className="absolute bottom-8 right-12 z-30"
                >
                    <motion.div
                        animate={floating(15, 4.5)}
                        className="p-1.5 bg-[#0f172a] rounded-[1.5rem] shadow-2xl transform rotate-[10deg]"
                    >
                        <div className="px-10 py-5 bg-[#0e7490] rounded-2xl border border-cyan-400/20 transform -rotate-[5deg] origin-left">
                            <span className="text-white font-medium text-lg">Team B</span>
                        </div>
                    </motion.div>
                </motion.div>

                {/* --- Decorative Stars --- */}

                {/* Top Left Star */}
                <motion.div variants={popIn} className="absolute top-6 left-28 z-20 text-cyan-400">
                    <motion.div animate={getPulseAnimation(0)}>
                        <Sparkles size={36} className="fill-cyan-400" strokeWidth={1} />
                    </motion.div>
                </motion.div>

                {/* Top Right Stars */}
                <motion.div variants={popIn} className="absolute -top-4 right-32 z-20 flex text-cyan-400 gap-1">
                    <motion.div animate={getPulseAnimation(0.5)}>
                        <Sparkles size={24} className="fill-cyan-400" strokeWidth={1} />
                    </motion.div>
                    <motion.div animate={getPulseAnimation(0)} className="mt-4">
                        <Sparkles size={32} className="fill-cyan-400" strokeWidth={1} />
                    </motion.div>
                </motion.div>

                {/* Bottom Center Stars */}
                <motion.div variants={popIn} className="absolute bottom-12 right-1/3 z-20 flex gap-1 text-cyan-400">
                    <motion.div animate={getPulseAnimation(0)} className="mb-4">
                        <Sparkles size={20} className="fill-cyan-400" strokeWidth={1} />
                    </motion.div>
                    <motion.div animate={getPulseAnimation(0.8)}>
                        <Sparkles size={28} className="fill-cyan-400" strokeWidth={1} />
                    </motion.div>
                </motion.div>

            </motion.div>
        </div>
    );
}