import { SmartImage } from "../../utils/SmartImage.tsx";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import type {ReactNode} from "react";

type Props = {
    BeforeHighlight?: string;
    Highlight?: string;
    AfterHighlight?: string;
    Description?: string;
    isCaroEnabled?: boolean;

    imageUrl?: string; // ✅ nullable شد

    imageClassName?: string;
    imageDivClassName?: string;
    imageWrapperClassName?: string;

    primaryBtnText?: string;
    secondaryBtnText?: string;

    primaryBtnUrl?: string;
    secondaryBtnUrl?: string;

    enableAnimation?: boolean;
    enableImageHover?: boolean;

    sectionClassName?: string;
    textContainerClassName?: string;

    headingClassName?: string;
    highlightClassName?: string;

    primaryBtnClassName?: string;
    secondaryBtnClassName?: string;

    primaryBtnWrapperClassName?: string;
    secondaryBtnWrapperClassName?: string;

    showBackground?: boolean;
    backgroundClassName?: string;

    reverse?: boolean;

    // ✅ NEW
    isBranding?: boolean;
    rightComponent?: ReactNode; // هر کامپوننتی مثل BrandingCard
};

export const HeroBasic = ({
                              BeforeHighlight = "Premium",
                              Highlight = "2D & 3D Animations",
                              AfterHighlight = "",
                              Description = "High-impact animated visuals...",
                              isCaroEnabled = true,
                              imageUrl = "/animation-section/Edited.png",

                              imageClassName = "",
                              imageDivClassName = "",
                              imageWrapperClassName = "",

                              primaryBtnText = "View Our Work",
                              secondaryBtnText = "Get Pricing",

                              enableAnimation = false,
                              enableImageHover = false,

                              sectionClassName = "",
                              textContainerClassName = "",

                              headingClassName = "",
                              highlightClassName = "",

                              primaryBtnClassName = "",
                              secondaryBtnClassName = "",

                              primaryBtnWrapperClassName = "",
                              secondaryBtnWrapperClassName = "",

                              showBackground = false,
                              backgroundClassName = "",

                              reverse = false,

                              // ✅ NEW
                              isBranding = false,
                              rightComponent = null,

                          }: Props) => {

    const MotionTag = enableAnimation ? motion.div : "div";
    const textVariants: Variants = {
        hidden: { opacity: 0, x: -36 },
        show: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.75,
                ease: "easeOut",
                staggerChildren: 0.12,
                delayChildren: 0.08
            }
        }
    };
    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 22 },
        show: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.55, ease: "easeOut" }
        }
    };
    const ctaVariants: Variants = {
        hidden: { opacity: 0, y: 16, scale: 0.98 },
        show: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { duration: 0.45, ease: "easeOut" }
        }
    };
    const rightVariants: Variants = {
        hidden: { opacity: 0, x: 40, scale: 0.96, rotate: isBranding ? 2 : 0 },
        show: {
            opacity: 1,
            x: 0,
            scale: 1,
            rotate: 0,
            transition: { duration: 0.8, ease: "easeOut", delay: 0.18 }
        }
    };

    return (
        <section className={`relative mt-30 lg:mt-20 w-full overflow-hidden px-6 pb-16 pt-8 text-white md:px-10 lg:px-16 ${sectionClassName}`}>

            {showBackground && (
                <div className={`absolute inset-0 -z-10 ${backgroundClassName}`} />
            )}

            <div className="mx-auto flex w-full max-w-7xl flex-col gap-20">
                <div className={`relative z-10 grid min-h-[72vh] items-center gap-10 sm:min-h-[560px] ${reverse ? "lg:grid-cols-[360px_1fr]" : "lg:grid-cols-[1fr_360px]"}`}>

                    {/* TEXT */}
                    <MotionTag
                        className={`max-w-xl ${textContainerClassName}`}
                        {...(enableAnimation && {
                            variants: textVariants,
                            initial: "hidden",
                            animate: "show"
                        })}
                    >
                        <motion.h1
                            className={`text-[26px] md:text-[32px] font-black leading-tight ${headingClassName}`}
                            {...(enableAnimation && { variants: itemVariants })}
                        >
                            {BeforeHighlight}{" "}
                            <span className={`bg-linear-to-r from-[#45B6A0] to-[#12ACB5] bg-clip-text text-transparent font-black  ${highlightClassName}`}>
                                {Highlight}
                            </span>
                            <br />
                            {AfterHighlight}
                        </motion.h1>

                        <motion.p
                            className="mt-6 max-w-lg text-sm leading-7 text-white/75 md:text-base"
                            {...(enableAnimation && { variants: itemVariants })}
                        >
                            {Description}
                        </motion.p>

                        <motion.div
                            className="mt-10 flex flex-row gap-3"
                            {...(enableAnimation && { variants: itemVariants })}
                        >

                            <motion.div
                                className={`relative inline-flex rounded-full p-[2px] ${primaryBtnWrapperClassName}`}
                                {...(enableAnimation && { variants: ctaVariants })}
                            >
                                <div
                                    aria-hidden="true"
                                    className="absolute -inset-[2px] rounded-full bg-linear-to-r from-[#45B6A0] to-[#12ACB5] shadow-[0_0_22px_#00A9BD]"
                                />
                                <button className={`relative z-10 rounded-full px-5 py-4 cursor-pointer bg-linear-to-r from-[#00A9BD] to-[#1D553A] ${primaryBtnClassName}`}>
                                    {primaryBtnText}
                                </button>
                            </motion.div>

                            <motion.div
                                className={`relative inline-flex rounded-full p-[2px] ${secondaryBtnWrapperClassName}`}
                                {...(enableAnimation && { variants: ctaVariants })}
                            >
                                <div
                                    aria-hidden="true"
                                    className="absolute -inset-[2px] rounded-full bg-linear-to-r from-[#056E7C] to-[#46B6A0] shadow-[0_0_22px_#00A9BD]"
                                />
                                <button className={`relative z-10 rounded-full px-5 py-3 bg-linear-to-r from-[#00061D] to-[#0B1F2A] cursor-pointer ${secondaryBtnClassName}`}>
                                    {secondaryBtnText}
                                </button>
                            </motion.div>
                        </motion.div>
                    </MotionTag>

                    {/* RIGHT SIDE */}
                    <MotionTag
                        className={`w-full max-w-[600px] mx-auto ${imageDivClassName}`}
                        {...(enableAnimation && {
                            variants: rightVariants,
                            initial: "hidden",
                            animate: "show"
                        })}
                    >

                        {/*  اگر Branding باشه */}
                        {isBranding && rightComponent}

                        {/*  حالت عادی (Image) */}
                        {!isBranding && imageUrl && (
                            <div className={`relative ${imageWrapperClassName}`}>
                                <SmartImage
                                    src={imageUrl}
                                    alt="Hero image"
                                    width={1100}
                                    height={900}
                                    className={imageClassName}
                                />
                            </div>
                        )}

                    </MotionTag>
                </div>

            </div>
        </section>
    );
};
