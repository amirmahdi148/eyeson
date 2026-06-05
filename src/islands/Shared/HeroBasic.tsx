import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";
import { SmartImage } from "../../utils/SmartImage.tsx";

type Props = {
  SmallLabel?: string | null;
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
  beforeHighlightClassName?: string;
  afterHighlightClassName?: string;
  descriptionClassName?: string;

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
  SmallLabel,
  BeforeHighlight = "Premium",
  Highlight = "2D & 3D Animations",
  AfterHighlight = "",
  Description = "High-impact animated visuals...",

  imageUrl = "/animation-section/Edited.webp",

  imageClassName = "",
  imageDivClassName = "",
  imageWrapperClassName = "",

  primaryBtnText = "View Our Work",
  secondaryBtnText = "Get Pricing",

  primaryBtnUrl = "#work",
  secondaryBtnUrl = "#pricing",

  animationType = "fade",

  enableImageHover = false,

  sectionClassName = "",
  textContainerClassName = "",

  headingClassName = "",
  highlightClassName = "",
  beforeHighlightClassName = "",
  afterHighlightClassName = "",
  descriptionClassName = "",

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

  const isNone = animationType === "none";
  const isFade = animationType === "fade";

  // ✨ FAST variant for mobile - no stagger delays
  const textVariants: Variants = isNone
    ? {}
    : isFade
      ? {
          hidden: { opacity: 0 },
          show: { opacity: 1, transition: { duration: 0.25 } },
        }
      : {
          hidden: { opacity: 0, x: -12 },
          show: {
            opacity: 1,
            x: 0,
            transition: {
              duration: 0.3,
              ease: "easeOut",
            },
          },
        };

  // ✨ Fast items - no stagger, instant show
  const itemVariants: Variants = isNone
    ? {}
    : isFade
      ? {
          hidden: { opacity: 0 },
          show: { opacity: 1, transition: { duration: 0.2 } },
        }
      : {
          hidden: { opacity: 0, y: 8 },
          show: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.25, ease: "easeOut" },
          },
        };

  const ctaVariants: Variants = isNone
    ? {}
    : isFade
      ? {
          hidden: { opacity: 0 },
          show: { opacity: 1, transition: { duration: 0.15 } },
        }
      : {
          hidden: { opacity: 0, y: 6 },
          show: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.2, ease: "easeOut" },
          },
        };

  const rightVariants: Variants = isNone
    ? {}
    : isFade
      ? {
          hidden: { opacity: 0 },
          show: { opacity: 1, transition: { duration: 0.3 } },
        }
      : {
          hidden: { opacity: 0, x: 14 },
          show: {
            opacity: 1,
            x: 0,
            transition: {
              duration: 0.35,
              ease: "easeOut",
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
        {/* MOBILE VERSION - NO ANIMATION */}
        <div
          className={`relative z-10 md:hidden grid min-h-[60vh] items-center gap-6 sm:min-h-[500px] ${
            reverse ? "lg:grid-cols-[320px_1fr]" : "lg:grid-cols-[1fr_320px]"
          }`}
        >
          <div
            className={`mx-auto flex max-w-lg flex-col items-center text-center md:mx-0 md:items-start md:text-left ${textContainerClassName}`}
          >
            {SmallLabel && (
              <p className="mb-3 text-xs tracking-[0.2em] text-[#c2d3dc]">
                {SmallLabel}
              </p>
            )}
            <h1
              className={`text-[22px] md:text-[35px] font-black leading-tight ${headingClassName}`}
            >
              <span className={beforeHighlightClassName}>
                {BeforeHighlight}{" "}
              </span>
              <span
                className={`bg-linear-to-r from-[#45B6A0] to-[#12ACB5] bg-clip-text text-transparent font-black ${highlightClassName}`}
              >
                {Highlight}
              </span>
              <br />
              <span className={afterHighlightClassName}>{AfterHighlight}</span>
            </h1>

            <p
              className={`mt-4 max-w-md text-xs leading-6 text-white/75 md:text-[18px] md:text-sm ${descriptionClassName}`}
            >
              {Description}
            </p>

            <div className="mt-6 flex flex-row flex-wrap justify-center gap-2 md:justify-start">
              <div
                className={`group relative inline-flex rounded-full p-[2px] ${primaryBtnWrapperClassName}`}
              >
                <div className="absolute -inset-[2px] rounded-full bg-linear-to-r from-[#45B6A0] to-[#12ACB5] shadow-[0_0_18px_#00A9BD]" />
                <a
                  href={primaryBtnUrl}
                  className={`relative z-10 rounded-full px-4 py-2.5 cursor-pointer bg-linear-to-r from-[#00A9BD] to-[#1D553A] text-sm md:text-lg overflow-hidden ${primaryBtnClassName}`}
                >
                  <div className="absolute inset-0 -translate-x-[150%] bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-[150%] skew-x-[-20deg]" />
                  {primaryBtnText}
                </a>
              </div>

              <div
                className={`group relative inline-flex rounded-full p-[2px] ${secondaryBtnWrapperClassName}`}
              >
                <div className="absolute -inset-[2px] rounded-full bg-linear-to-r from-[#056E7C] to-[#46B6A0] shadow-[0_0_18px_#00A9BD]" />
                <a
                  href={secondaryBtnUrl}
                  className={`relative z-10 rounded-full px-4 py-2.5 bg-linear-to-r from-[#00061D] to-[#0B1F2A] cursor-pointer text-sm md:text-lg overflow-hidden ${secondaryBtnClassName}`}
                >
                  <div className="absolute inset-0 -translate-x-[150%] bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-[150%] skew-x-[-20deg]" />
                  {secondaryBtnText}
                </a>
              </div>
            </div>
          </div>

          <div
            className={`mx-auto w-full max-w-[480px] md:mx-0 ${imageDivClassName}`}
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
          </div>
        </div>

        {/* DESKTOP VERSION - WITH ANIMATION */}
        <div
          className={`relative z-10 hidden md:grid min-h-[60vh] items-center gap-6 sm:min-h-[500px] ${
            reverse ? "lg:grid-cols-[320px_1fr]" : "lg:grid-cols-[1fr_320px]"
          }`}
        >
          <MotionTag
            className={`mx-auto flex max-w-lg flex-col items-center text-center md:mx-0 md:items-start md:text-left ${textContainerClassName}`}
            {...(!isNone && {
              initial: "hidden",
              animate: "show",
              variants: textVariants,
            })}
          >
            {SmallLabel && (
              <motion.p
                className="mb-3 text-xs tracking-[0.2em] text-[#c2d3dc]"
                {...(!isNone && {
                  initial: "hidden",
                  animate: "show",
                  variants: itemVariants,
                })}
              >
                {SmallLabel}
              </motion.p>
            )}
            <motion.h1
              className={`text-[22px] md:text-[35px] font-black leading-tight ${headingClassName}`}
              {...(!isNone && {
                initial: "hidden",
                animate: "show",
                variants: itemVariants,
              })}
            >
              <span className={beforeHighlightClassName}>
                {BeforeHighlight}{" "}
              </span>
              <span
                className={`bg-linear-to-r from-[#45B6A0] to-[#12ACB5] bg-clip-text text-transparent font-black ${highlightClassName}`}
              >
                {Highlight}
              </span>
              <br />
              <span className={afterHighlightClassName}>{AfterHighlight}</span>
            </motion.h1>

            <motion.p
              className={`mt-4 max-w-md text-xs leading-6 text-white/75 md:text-[18px] md:text-sm ${descriptionClassName}`}
              {...(!isNone && {
                initial: "hidden",
                animate: "show",
                variants: itemVariants,
              })}
            >
              {Description}
            </motion.p>

            <motion.div
              className="mt-6 flex flex-row flex-wrap justify-center gap-2 md:justify-start"
              {...(!isNone && {
                initial: "hidden",
                animate: "show",
                variants: itemVariants,
              })}
            >
              <motion.div
                className={`group relative inline-flex rounded-full p-[2px] ${primaryBtnWrapperClassName}`}
                {...(!isNone && {
                  initial: "hidden",
                  animate: "show",
                  variants: ctaVariants,
                })}
              >
                <div className="absolute -inset-[2px] rounded-full bg-linear-to-r from-[#45B6A0] to-[#12ACB5] shadow-[0_0_18px_#00A9BD]" />
                <a
                  href={primaryBtnUrl}
                  className={`relative z-10 rounded-full px-4 py-2.5 cursor-pointer bg-linear-to-r from-[#00A9BD] to-[#1D553A] text-sm md:text-lg overflow-hidden ${primaryBtnClassName}`}
                >
                  <div className="absolute inset-0 -translate-x-[150%] bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-[150%] skew-x-[-20deg]" />
                  {primaryBtnText}
                </a>
              </motion.div>

              <motion.div
                className={`group relative inline-flex rounded-full p-[2px] ${secondaryBtnWrapperClassName}`}
                {...(!isNone && {
                  initial: "hidden",
                  animate: "show",
                  variants: ctaVariants,
                })}
              >
                <div className="absolute -inset-[2px] rounded-full bg-linear-to-r from-[#056E7C] to-[#46B6A0] shadow-[0_0_18px_#00A9BD]" />
                <a
                  href={secondaryBtnUrl}
                  className={`relative z-10 rounded-full px-4 py-2.5 bg-linear-to-r from-[#00061D] to-[#0B1F2A] cursor-pointer text-sm md:text-lg overflow-hidden ${secondaryBtnClassName}`}
                >
                  <div className="absolute inset-0 -translate-x-[150%] bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-[150%] skew-x-[-20deg]" />
                  {secondaryBtnText}
                </a>
              </motion.div>
            </motion.div>
          </MotionTag>

          <MotionTag
            className={`mx-auto w-full max-w-[480px] md:mx-0 ${imageDivClassName}`}
            {...(!isNone && {
              initial: "hidden",
              animate: "show",
              variants: rightVariants,
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
