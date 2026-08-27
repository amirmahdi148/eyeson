import React, { useState, useEffect } from 'react';
import { Sparkles } from 'lucide-react';

export const AnimatedCard = () => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <div className="flex items-center justify-center overflow-hidden p-2 sm:p-6 md:p-8 w-full">
            {/* Main Container */}
            <div
                className="relative w-full max-w-[620px] aspect-[16/10] flex items-center justify-center animate-fade-in"
            >
                {/* Wireframe Outline Top Left */}
                <div
                    className="absolute top-0 left-0 w-32 sm:w-48 h-32 sm:h-48 border-[1.5px] border-cyan-300 rounded-[1.5rem] sm:rounded-[2rem] opacity-60 z-0"
                />

                {/* Wireframe Outline Bottom Right */}
                <div
                    className="absolute -bottom-4 sm:-bottom-8 right-0 w-44 sm:w-64 h-32 sm:h-48 border-[1.5px] border-cyan-300 rounded-[1.5rem] sm:rounded-[2rem] opacity-60 z-0"
                />

                {/* Main Frosted Glass Background Card */}
                <div
                    className="absolute w-[88%] h-[75%] rounded-[1.5rem] sm:rounded-[2rem] border border-cyan-400/50 shadow-[0_20px_50px_rgba(6,182,212,0.2)] overflow-hidden z-10 bg-gradient-to-br from-cyan-900/40 to-teal-800/20 backdrop-blur-md"
                >
                    {/* Inner shadow/glow effect */}
                    <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(6,182,212,0.3)]"></div>
                </div>

                {/* --- Floating Elements --- */}

                {/* 3D Badge */}
                <div
                    className="absolute top-4 left-6 sm:left-10 z-20"
                >
                    <div
                        className="px-3 sm:px-4 py-1 sm:py-1.5 bg-[#00a8cc] rounded-full shadow-lg transform -rotate-12 animate-float-slow"
                    >
                        <span className="text-white font-bold text-xs sm:text-sm tracking-wider">3D</span>
                    </div>
                </div>

                {/* Motion Design Pill */}
                <div
                    className="absolute top-1/4 left-10 sm:left-20 z-20"
                >
                    <div
                        className="px-4 sm:px-8 py-2 sm:py-4 bg-gradient-to-r from-[#17a2b8] to-[#20c997] rounded-xl shadow-xl shadow-cyan-900/20 animate-float-slow"
                    >
                        <span className="text-white font-extrabold text-sm sm:text-lg tracking-wide">Motion Design</span>
                    </div>
                </div>

                {/* 4K Badge */}
                <div
                    className="absolute top-6 sm:top-10 right-20 sm:right-36 z-20"
                >
                    <div className="px-3 sm:px-4 py-1 bg-[#343a40] rounded-xl shadow-lg border border-slate-600/50 animate-float-slow">
                        <span className="text-white font-bold text-xs sm:text-sm">4K</span>
                    </div>
                </div>

                {/* Team A Card */}
                <div
                    className="absolute -bottom-2 sm:-bottom-4 left-4 z-30"
                >
                    <div
                        className="p-1 bg-[#1a202c] rounded-2xl shadow-2xl animate-float-slow"
                    >
                        <div className="px-4 sm:px-8 py-2 sm:py-4 bg-gradient-to-br from-[#0f766e] to-[#0891b2] rounded-xl border border-cyan-400/30">
                            <span className="text-white font-semibold text-sm sm:text-lg">Team A</span>
                        </div>
                    </div>
                </div>

                {/* Team B Card */}
                <div
                    className="absolute bottom-4 sm:bottom-8 right-6 sm:right-12 z-30"
                >
                    <div
                        className="p-1 sm:p-1.5 bg-[#0f172a] rounded-[1.5rem] shadow-2xl transform rotate-[10deg] animate-float-slow"
                    >
                        <div className="px-5 sm:px-10 py-2.5 sm:py-5 bg-[#0e7490] rounded-2xl border border-cyan-400/20 transform -rotate-[5deg] origin-left">
                            <span className="text-white font-medium text-sm sm:text-lg">Team B</span>
                        </div>
                    </div>
                </div>

                {/* --- Decorative Stars --- */}

                {/* Top Left Star */}
                <div className="absolute top-6 left-20 sm:left-28 z-20 text-cyan-400">
                    <div className="animate-pulse">
                        <Sparkles size={28} className="fill-cyan-400" strokeWidth={1} />
                    </div>
                </div>

                {/* Top Right Stars */}
                <div className="absolute -top-4 right-16 sm:right-28 z-20 flex text-cyan-400 gap-1">
                    <div className="animate-pulse">
                        <Sparkles size={20} className="fill-cyan-400" strokeWidth={1} />
                    </div>
                    <div className="mt-4 animate-pulse">
                        <Sparkles size={28} className="fill-cyan-400" strokeWidth={1} />
                    </div>
                </div>

                {/* Bottom Center Stars */}
                <div className="absolute bottom-10 sm:bottom-12 right-1/3 z-20 flex gap-1 text-cyan-400">
                    <div className="mb-4 animate-pulse">
                        <Sparkles size={18} className="fill-cyan-400" strokeWidth={1} />
                    </div>
                    <div className="animate-pulse">
                        <Sparkles size={24} className="fill-cyan-400" strokeWidth={1} />
                    </div>
                </div>

            </div>
        </div>
    );
};
    );
}