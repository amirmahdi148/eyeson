

import { motion, type Variants } from "framer-motion";
import {SmartImage} from "../../utils/SmartImage.tsx";


export const ServicesSection = () => {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 },
        },
    };

    const cardVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" },
        },
    };

    const cardBg = "bg-[#091D24]/80";
    const cardBorder = "border border-[#14343B]";
    const tagBg = "bg-transparent border border-[#234F58]";

    return (
        <section className="relative w-full  py-20 px-6 lg:px-16 overflow-hidden font-sans">
            <div className="max-w-4xl mx-auto text-center mb-16">
                <h2 className="text-3xl md:text-4xl lg:text-[44px] font-bold text-white mb-2 leading-tight">
                    Comprehensive <span className="text-[#42D1D1]">brand identity</span>
                </h2>
                <h2 className="text-3xl md:text-4xl lg:text-[44px] font-bold text-white mb-6 leading-tight">
                    & visual system services
                </h2>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
                    We don't just design logos.
                    <br className="hidden sm:block" />
                    We build clear, scalable brand systems that stay consistent
                    <br className="hidden sm:block" />
                    across every touchpoint — from product to marketing.
                </p>
            </div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6"
            >
                <motion.div
                    variants={cardVariants}
                    className={`lg:col-span-5 rounded-3xl ${cardBg} ${cardBorder} p-8 flex flex-col justify-between shadow-xl`}
                >
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-4">
                            Brand Strategy & Positioning
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6 font-light">
                            We define your brand's direction, voice, and visual foundation to
                            ensure clarity, relevance, and long-term growth.
                        </p>

                        <p className="text-white font-medium mb-3 text-sm">Includes:</p>
                        <div className="flex flex-wrap gap-2 mb-8">
              <span
                  className={`px-3 py-1 rounded-full text-xs text-gray-300 ${tagBg}`}
              >
                Brand discovery
              </span>
                            <span
                                className={`px-3 py-1 rounded-full text-xs text-gray-300 ${tagBg}`}
                            >
                Positioning
              </span>
                            <span
                                className={`px-3 py-1 rounded-full text-xs text-gray-300 ${tagBg}`}
                            >
                Visual direction
              </span>
                        </div>
                    </div>

                    <div className="relative w-full aspect-4/3 rounded-xl overflow-hidden mt-auto bg-[#041217]">
                        <SmartImage
                            src="/Branding/transform.png"
                            alt="Transform your brand"
                            fill
                            className="object-cover"
                        />
                    </div>
                </motion.div>
                <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <motion.div
                        variants={cardVariants}
                        className={`rounded-3xl ${cardBg} ${cardBorder} p-6 shadow-lg`}
                    >
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-12 rounded-xl bg-linear-to-b from-[#14343B] to-transparent border border-[#234F58] flex items-center justify-center shadow-inner">
                                <svg
                                    className="w-6 h-6 text-[#42D1D1]"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.5"
                                        d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-white leading-tight">
                                Visual Identity
                                <br />
                                Design
                            </h3>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6 min-h-15 font-light">
                            We design logo systems, color palettes, and typography that make
                            your brand recognizable and memorable.
                        </p>
                        <p className="text-white font-medium mb-3 text-sm">Includes:</p>
                        <div className="flex flex-wrap gap-2">
              <span
                  className={`px-3 py-1 rounded-full text-xs text-gray-300 ${tagBg}`}
              >
                Logo system
              </span>
                            <span
                                className={`px-3 py-1 rounded-full text-xs text-gray-300 ${tagBg}`}
                            >
                Colors
              </span>
                            <span
                                className={`px-3 py-1 rounded-full text-xs text-gray-300 ${tagBg}`}
                            >
                Typography
              </span>
                            <span
                                className={`px-3 py-1 rounded-full text-xs text-gray-300 ${tagBg}`}
                            >
                Visual language
              </span>
                        </div>
                    </motion.div>

                    <motion.div
                        variants={cardVariants}
                        className={`rounded-3xl ${cardBg} ${cardBorder} p-6 shadow-lg`}
                    >
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-12 rounded-xl bg-linear-to-b from-[#14343B] to-transparent border border-[#234F58] flex items-center justify-center shadow-inner">
                                <svg
                                    className="w-6 h-6 text-[#42D1D1]"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.5"
                                        d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-white leading-tight">
                                Design System
                                <br />
                                Development
                            </h3>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6 min-h-15 font-light">
                            We create scalable design systems that keep your brand consistent
                            across digital and product experiences.
                        </p>
                        <p className="text-white font-medium mb-3 text-sm">Includes:</p>
                        <div className="flex flex-wrap gap-2">
              <span
                  className={`px-3 py-1 rounded-full text-xs text-gray-300 ${tagBg}`}
              >
                UI components
              </span>
                            <span
                                className={`px-3 py-1 rounded-full text-xs text-gray-300 ${tagBg}`}
                            >
                Spacing
              </span>
                            <span
                                className={`px-3 py-1 rounded-full text-xs text-gray-300 ${tagBg}`}
                            >
                Reusable elements
              </span>
                        </div>
                    </motion.div>

                    <motion.div
                        variants={cardVariants}
                        className={`rounded-3xl ${cardBg} ${cardBorder} p-6 shadow-lg`}
                    >
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-12 rounded-xl bg-linear-to-b from-[#14343B] to-transparent border border-[#234F58] flex items-center justify-center shadow-inner">
                                <svg
                                    className="w-6 h-6 text-[#42D1D1]"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.5"
                                        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.5"
                                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-white leading-tight">
                                Digital Brand
                                <br />
                                Assets
                            </h3>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6 min-h-15 font-light">
                            We design logo systems, color palettes, and typography that make
                            your brand recognizable and memorable.
                        </p>
                        <p className="text-white font-medium mb-3 text-sm">Includes:</p>
                        <div className="flex flex-wrap gap-2">
              <span
                  className={`px-3 py-1 rounded-full text-xs text-gray-300 ${tagBg}`}
              >
                Logo system
              </span>
                            <span
                                className={`px-3 py-1 rounded-full text-xs text-gray-300 ${tagBg}`}
                            >
                Colors
              </span>
                            <span
                                className={`px-3 py-1 rounded-full text-xs text-gray-300 ${tagBg}`}
                            >
                Typography
              </span>
                            <span
                                className={`px-3 py-1 rounded-full text-xs text-gray-300 ${tagBg}`}
                            >
                Visual language
              </span>
                        </div>
                    </motion.div>

                    <motion.div
                        variants={cardVariants}
                        className={`rounded-3xl ${cardBg} ${cardBorder} p-6 shadow-lg`}
                    >
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-12 rounded-xl bg-linear-to-b from-[#14343B] to-transparent border border-[#234F58] flex items-center justify-center shadow-inner">
                                <svg
                                    className="w-6 h-6 text-[#42D1D1]"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.5"
                                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-white leading-tight">
                                Brand Guidelines &<br />
                                Documentation
                            </h3>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6 min-h-15 font-light">
                            Clear rules that ensure your brand is used correctly — everywhere,
                            by everyone.
                        </p>
                        <p className="text-white font-medium mb-3 text-sm">Includes:</p>
                        <div className="flex flex-wrap gap-2">
              <span
                  className={`px-3 py-1 rounded-full text-xs text-gray-300 ${tagBg}`}
              >
                Usage rules
              </span>
                            <span
                                className={`px-3 py-1 rounded-full text-xs text-gray-300 ${tagBg}`}
                            >
                Do's & don'ts
              </span>
                            <span
                                className={`px-3 py-1 rounded-full text-xs text-gray-300 ${tagBg}`}
                            >
                Brand playbook
              </span>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}
