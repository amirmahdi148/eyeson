import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";
import { SmartImage } from "../../utils/SmartImage.tsx";

type Props = {
    BeforeHighlight?: string;
    Highlight?: string;
    AfterHighlight?: string;
    Description?: string;

    imageUrl?: string;

    imageClassName?: string;
    imageDivClassName?: string;
    imageWrapperClassName?: string;

    primaryBtnText?: string;
    secondaryBtnText?: string;

    primaryBtnUrl?: string;
    secondaryBtnUrl?: string;

    animationType?: "fade" | "slide" | "none";

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

    isBranding?: boolean;
    rightComponent?: ReactNode;
};

export const HeroBasic = ({
                              BeforeHighlight = "Premium",
                              Highlight = "2D & 3D Animations",
                              AfterHighlight = "",
                              Description = "High-impact animated visuals...",

                              imageUrl = "/animation-section/Edited.png",

                              imageClassName = "",
                              imageDivClassName = "",
                              imageWrapperClassName = "",

                              primaryBtnText = "View Our Work",
                              secondaryBtnText = "Get Pricing",

                              animationType = "slide",

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

                              isBranding = false,
                              rightComponent = null,
                          }: Props) => {

    const MotionTag = motion.div;

    // =========================
    // ⚡ ANIMATION SYSTEM
    // =========================

    const isNone = animationType === "none";
    const isFade = animationType === "fade";
    const isSlide = animationType === "slide";

    const textVariants: Variants = isNone
        ? {}
        : isFade
            ? {
                hidden: { opacity: 0 },
                show: { opacity: 1, transition: { duration: 0.35 } },
            }
            : {
                hidden: { opacity: 0, x: -12 },
                show: {
                    opacity: 1,
                    x: 0,
                    transition: {
                        duration: 0.4,
                        ease: "easeOut",
                        when: "beforeChildren",
                    },
                },
            };

    const itemVariants: Variants = isNone
        ? {}
        : isFade
            ? {
                hidden: { opacity: 0 },
                show: { opacity: 1, transition: { duration: 0.25 } },
            }
            : {
                hidden: { opacity: 0, y: 8 },
                show: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.3, ease: "easeOut" },
                },
            };

    const ctaVariants: Variants = isNone
        ? {}
        : isFade
            ? {
                hidden: { opacity: 0 },
                show: { opacity: 1, transition: { duration: 0.2 } },
            }
            : {
                hidden: { opacity: 0, y: 6 },
                show: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.25, ease: "easeOut" },
                },
            };

    const rightVariants: Variants = isNone
        ? {}
        : isFade
            ? {
                hidden: { opacity: 0 },
                show: { opacity: 1, transition: { duration: 0.4 } },
            }
            : {
                hidden: { opacity: 0, x: 14 },
                show: {
                    opacity: 1,
                    x: 0,
                    transition: {
                        duration: 0.45,
                        ease: "easeOut",
                        delay: 0.05,
                    },
                },
            };

    return (
        <section
            className={`relative mt-36 w-full overflow-hidden px-4 pb-10 pt-4 text-white md:px-8 lg:px-12 ${sectionClassName}`}
        >
            {showBackground && (
                <div className={`absolute inset-0 -z-10 ${backgroundClassName}`} />
            )}

            <div className="mx-auto flex w-full max-w-7xl flex-col gap-10">
                <div
                    className={`relative z-10 grid min-h-[60vh] items-center gap-6 sm:min-h-[500px] ${
                        reverse ? "lg:grid-cols-[320px_1fr]" : "lg:grid-cols-[1fr_320px]"
                    }`}
                >

                    {/* TEXT */}
                    <MotionTag
                        className={`mx-auto flex max-w-lg flex-col items-center text-center md:mx-0 md:items-start md:text-left ${textContainerClassName}`}
                        {...(!isNone && {
                            variants: textVariants,
                            initial: "hidden",
                            animate: "show",
                        })}
                    >
                        <motion.h1
                            className={`text-[22px] md:text-[35px] font-black leading-tight ${headingClassName}`}
                            {...(!isNone && { variants: itemVariants })}
                        >
                            {BeforeHighlight}{" "}
                            <span
                                className={`bg-linear-to-r from-[#45B6A0] to-[#12ACB5] bg-clip-text text-transparent font-black ${highlightClassName}`}
                            >
                                {Highlight}
                            </span>
                            <br />
                            {AfterHighlight}
                        </motion.h1>

                        <motion.p
                            className="mt-4 max-w-md text-xs md:text-[18px] leading-6 text-white/75 md:text-sm"
                            {...(!isNone && { variants: itemVariants })}
                        >
                            {Description}
                        </motion.p>

                        <motion.div
                            className="mt-6 flex flex-row flex-wrap justify-center gap-2 md:justify-start"
                            {...(!isNone && { variants: itemVariants })}
                        >
                            <motion.div
                                className={`relative inline-flex rounded-full p-[2px] ${primaryBtnWrapperClassName}`}
                                {...(!isNone && { variants: ctaVariants })}
                            >
                                <div className="absolute -inset-[2px] rounded-full bg-linear-to-r from-[#45B6A0] to-[#12ACB5] shadow-[0_0_18px_#00A9BD]" />
                                <button
                                    className={`relative z-10 rounded-full px-4 py-2.5 cursor-pointer bg-linear-to-r from-[#00A9BD] to-[#1D553A] text-sm md:text-lg ${primaryBtnClassName}`}
                                >
                                    {primaryBtnText}
                                </button>
                            </motion.div>

                            <motion.div
                                className={`relative inline-flex rounded-full p-[2px] ${secondaryBtnWrapperClassName}`}
                                {...(!isNone && { variants: ctaVariants })}
                            >
                                <div className="absolute -inset-[2px] rounded-full bg-linear-to-r from-[#056E7C] to-[#46B6A0] shadow-[0_0_18px_#00A9BD]" />
                                <button
                                    className={`relative z-10 rounded-full px-4 py-2.5 bg-linear-to-r from-[#00061D] to-[#0B1F2A] cursor-pointer text-sm md:text-lg ${secondaryBtnClassName}`}
                                >
                                    {secondaryBtnText}
                                </button>
                            </motion.div>
                        </motion.div>
                    </MotionTag>

                    {/* RIGHT */}
                    <MotionTag
                        className={`mx-auto w-full max-w-[480px] md:mx-0 ${imageDivClassName}`}
                        {...(!isNone && {
                            variants: rightVariants,
                            initial: "hidden",
                            animate: "show",
                        })}
                    >
                        {isBranding && rightComponent}

                        {!isBranding && imageUrl && (
                            <div
                                className={`relative transform-gpu will-change-transform transition-transform duration-300 ease-out ${
                                    enableImageHover ? "hover:scale-[1.03]" : ""
                                } ${imageWrapperClassName}`}
                            >
                                <SmartImage
                                    src={imageUrl}
                                    alt="Hero image"
                                    width={800}
                                    height={640}
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