

import { motion, type Variants } from "framer-motion";
import {SmartImage} from "../../utils/SmartImage.tsx";


export const WhyBrandingSection = () => {
    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" },
        },
    };

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
    };

    return (
        <section className="w-full  py-20 px-4 md:px-8 lg:px-16 font-sans">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.05 }}
                className="max-w-350 mx-auto flex flex-col lg:flex-row gap-5"
            >
                <div className="flex flex-col gap-5 lg:w-[42%]">
                    <motion.div variants={itemVariants} className="mb-2">
                        <h2 className="text-4xl md:text-5xl font-black uppercase leading-tight tracking-tight text-white">
                            WHY <span className="text-[#1ECFBC]">BRANDING</span> MATTERS
                        </h2>
                        <p className="text-gray-300 text-xl font-light mt-3">
                            The Value Behind a Strong Brand
                        </p>
                    </motion.div>

                    <motion.div
                        variants={itemVariants}
                        className="flex flex-row rounded-2xl border border-[#14313B] bg-[#081620] overflow-hidden"
                        style={{ minHeight: 180 }}
                    >
                        <div className="relative shrink-0 " style={{ width: "42%" }}>
                            <SmartImage
                                src="/Branding/leftnum1.png"
                                alt="Better performing content and ads"
                                fill
                                className="object-fill"
                            />
                            <div className="absolute inset-0 flex items-center justify-center text-[#1ECFBC]/20 text-[9px] text-center px-2">
                                [ عکس: موکاپ برندها ]
                            </div>
                        </div>
                        <div
                            className="flex flex-col justify-center p-6"
                            style={{ width: "58%" }}
                        >
                            <h3 className="text-lg font-bold text-white leading-snug mb-3">
                                Builds Instant Trust &<br />
                                Credibility
                            </h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                First impressions happen fast. A strong visual identity signals
                                professionalism, confidence, and reliability from the first
                                interaction.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        variants={itemVariants}
                        className="flex flex-row rounded-2xl border border-[#14313B] bg-[#081620] overflow-hidden"
                        style={{ minHeight: 180 }}
                    >
                        <div
                            className="flex flex-col justify-center p-6"
                            style={{ width: "58%" }}
                        >
                            <h3 className="text-lg font-bold text-white leading-snug mb-3">
                                Recognizable &<br />
                                Memorable
                            </h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Consistent visuals help your brand stand out and stay
                                top-of-mind — even in crowded markets.
                            </p>
                        </div>

                        <div className="relative shrink-0" style={{ width: "42%" }}>
                            <SmartImage
                                src="/Branding/leftnum2.png"
                                alt="Better performing content and ads"
                                fill
                                className="object-fill"
                            />
                            <div className="absolute inset-0 flex items-center justify-center text-[#1ECFBC]/20 text-[9px] text-center px-2">
                                [ عکس: موکاپ برندها ]
                            </div>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    variants={itemVariants}
                    className="flex flex-col rounded-2xl border border-[#1A5560] bg-[#071820] overflow-hidden lg:w-[33%]"
                >
                    <div className="p-7 shrink-0">
                        <h3 className="text-2xl font-bold text-white leading-tight mb-4">
                            Consistency Across
                            <br />
                            Product & Marketing
                        </h3>
                        <p className="text-gray-400 text-[15px] leading-relaxed">
                            A unified brand system ensures your product, website, content, and
                            ads all speak the same visual language.
                        </p>
                    </div>

                    {/* عکس پایین — کاملاً full-bleed تا ته کارت */}
                    <div className="relative flex-1" style={{ minHeight: 320 }}>
                        <SmartImage
                            src="/Branding/rightnum1.png"
                            alt="Better performing content and ads"
                            fill
                            className="object-contain scale-90"
                        />
                    </div>
                </motion.div>

                <motion.div
                    variants={itemVariants}
                    className="flex flex-col rounded-2xl border border-[#1A5560] bg-[#071820] overflow-hidden lg:w-[25%]"
                >
                    <div className="relative flex-1" style={{ minHeight: 300 }}>
                        <SmartImage
                            src="/Branding/rightnum2.png"
                            alt="Better performing content and ads"
                            fill
                            className="object-contain scale-90"
                        />
                    </div>

                    <div className="p-7 shrink-0">
                        <h3 className="text-xl font-bold text-white leading-tight mb-3">
                            Better Performing
                            <br />
                            Content & Ads
                        </h3>
                        <p className="text-gray-400 text-[15px] leading-relaxed">
                            Clear, recognizable branding improves recall, engagement, and
                            overall campaign performance.
                        </p>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}
