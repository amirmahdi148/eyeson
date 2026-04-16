

import { motion, type Variants } from "framer-motion";
import {SmartImage} from "../../utils/SmartImage.tsx";


export const AssetsGallerySection = () => {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" },
        },
    };

    const card =
        "bg-[#0A1A24] border border-[#14313B] rounded-[24px] overflow-hidden shadow-lg";

    return (
        <section className="w-full py-20 px-4 md:px-8 lg:px-16 font-sans">
            <div className="max-w-4xl mx-auto text-center mb-16">
                <h2 className="text-3xl md:text-4xl lg:text-[44px] font-bold text-white mb-2 leading-tight">
                    Some of the assets we often
                </h2>
                <h2 className="text-3xl md:text-4xl lg:text-[44px] font-bold text-[#42D1D1] mb-6 leading-tight">
                    create for clients include
                </h2>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-3xl mx-auto font-light">
                    We develop a wide range of branded visual assets, each created to
                    elevate your identity and strengthen audience connection. From
                    standout animations to practical templates, our tailored solutions
                    support every part of your brand communication. Explore the examples
                    below to see how we bring brands to life:
                </p>
            </div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.05 }}
                className="max-w-350 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5"
            >
                <motion.div
                    variants={itemVariants}
                    className={`
            ${card}
            md:col-span-2
            lg:col-start-1 lg:col-span-7
            lg:row-start-1 lg:row-span-2
            flex flex-col p-7
          `}
                >
                    <h3 className="text-2xl font-bold text-white mb-2">Logo design</h3>
                    <p className="text-gray-400 text-sm leading-relaxed font-light mb-5">
                        Your logo is the heartbeat of your brand. We craft modern, memorable
                        marks that reflect your identity and stick in the minds of your
                        audience. Clean, versatile, and built to scale across every
                        platform.
                    </p>

                    <div className="relative flex-1 min-h-55 rounded-2xl overflow-hidden bg-[#060F18]">
                        <SmartImage
                            src="/Branding/topleft.png"
                            alt="Logo design examples"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 flex items-center justify-center text-[#42D1D1]/20 text-xs tracking-widest uppercase">
                            [ عکس: نمونه لوگوها ]
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    variants={itemVariants}
                    className={`
            ${card}
            lg:col-start-8 lg:col-span-5
            lg:row-start-1
            flex flex-row items-center gap-4 p-6
          `}
                >
                    <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-bold text-white mb-2">
                            Brand color system
                        </h3>
                        <p className="text-gray-400 text-xs leading-relaxed font-light">
                            Colors shape emotions. We develop a strategic color palette that
                            strengthens recognition and adds visual consistency to everything
                            you create, from your product UI to your social content.
                        </p>
                    </div>

                    <div className="relative w-24 h-24 lg:w-28 lg:h-28 rounded-xl overflow-hidden bg-[#060F18] shrink-0">
                        <SmartImage
                            src="/Branding/topright1.png"
                            alt="Brand color system"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 flex items-center justify-center text-[#42D1D1]/20 text-[9px]">
                            عکس
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    variants={itemVariants}
                    className={`
            ${card}
            lg:col-start-8 lg:col-span-5
            lg:row-start-2
            flex flex-row items-center gap-4 p-6
          `}
                >
                    <div className="relative w-24 h-24 lg:w-28 lg:h-28 rounded-xl overflow-hidden bg-[#060F18] shrink-0">
                        <SmartImage
                            src="/Branding/topright2.png"
                            alt="Typography system"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 flex items-center justify-center text-[#42D1D1]/20 text-[9px]">
                            عکس
                        </div>
                    </div>
                    <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-bold text-white mb-2">
                            Typography system
                        </h3>
                        <p className="text-gray-400 text-xs leading-relaxed font-light">
                            Type isn't just letters; it's personality. We build a typography
                            system that feels aligned with your brand voice and keeps all your
                            communication polished and cohesive.
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    variants={itemVariants}
                    className={`
            ${card}
            lg:col-start-1 lg:col-span-3
            lg:row-start-3
            flex flex-col p-5
          `}
                >
                    <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-[#060F18] mb-4">
                        <SmartImage
                            src="/Branding/bottomright1.png"
                            alt="Brand patterns"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 flex items-center justify-center text-[#42D1D1]/20 text-[9px]">
                            عکس
                        </div>
                    </div>
                    <h3 className="text-base font-bold text-white mb-1.5">
                        Brand patterns
                    </h3>
                    <p className="text-gray-400 text-xs leading-relaxed font-light">
                        Add depth and uniqueness to your identity with custom shapes,
                        patterns, and visual assets that make your brand unmistakably yours.
                    </p>
                </motion.div>

                <motion.div
                    variants={itemVariants}
                    className={`
            ${card}
            lg:col-start-4 lg:col-span-4
            lg:row-start-3
            flex flex-col p-5
          `}
                >
                    <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-[#060F18] mb-4">
                        <SmartImage
                            src="/Branding/bottomright2.png"
                            alt="Brand patterns"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 flex items-center justify-center text-[#42D1D1]/20 text-[9px]">
                            عکس
                        </div>
                    </div>
                    <h3 className="text-base font-bold text-white mb-1.5">
                        Brand guidelines
                    </h3>
                    <p className="text-gray-400 text-xs leading-relaxed font-light">
                        Add depth and uniqueness to your identity with custom shapes,
                        patterns, and visual assets that make your brand unmistakably yours.
                    </p>
                </motion.div>

                <motion.div
                    variants={itemVariants}
                    className={`
            ${card}
            md:col-span-2
            lg:col-start-8 lg:col-span-5
            lg:row-start-3 lg:row-span-2
            flex flex-col p-7
          `}
                >
                    <h3 className="text-xl font-bold text-white mb-2">
                        Branded intro slides
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed font-light mb-5">
                        Make a strong first impression with branded intro slides tailored to
                        your style. These custom-designed slides set the tone, build
                        anticipation, and give your podcasts or presentations a polished,
                        professional start.
                    </p>
                    <div className="relative flex-1 min-h-60 lg:min-h-0 rounded-2xl overflow-hidden bg-[#060F18]">
                        <SmartImage
                            src="/Branding/bottomright.png"
                            alt="Brand patterns"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 flex items-center justify-center text-[#42D1D1]/20 text-xs tracking-widest uppercase">
                            [ عکس: نمونه اسلایدها ]
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    variants={itemVariants}
                    className={`
            ${card}
            md:col-span-2
            lg:col-start-1 lg:col-span-7
            lg:row-start-4
            flex flex-col md:flex-row items-center gap-6 p-6
          `}
                >
                    <div className="relative w-full md:w-[42%] aspect-video rounded-xl overflow-hidden bg-[#060F18] shrink-0">
                        <SmartImage
                            src="/Branding/bottom.png"
                            alt="Brand patterns"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 flex items-center justify-center text-[#42D1D1]/20 text-xs">
                            [ عکس: GIF ها ]
                        </div>
                    </div>
                    <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-2">Branded GIFs</h3>
                        <p className="text-gray-400 text-sm leading-relaxed font-light">
                            Static images are fine, but branded motion GIFs make people stop
                            and look. From icons to mascots to logo loops, we design GIFs that
                            bring personality, recognition, and energy to your communication.
                        </p>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}
