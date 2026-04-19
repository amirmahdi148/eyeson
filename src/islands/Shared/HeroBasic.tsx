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
  BeforeHighlight = "Premium",
  Highlight = "2D & 3D Animations",
  AfterHighlight = "",
  Description = "High-impact animated visuals...",

  imageUrl = "/animation-section/Edited.png",

  imageClassName = "object-contain w-full h-auto",
  imageDivClassName = "",
  imageWrapperClassName = "",

  primaryBtnText = "View Our Work",
  secondaryBtnText = "Get Pricing",

  primaryBtnUrl = "#work",
  secondaryBtnUrl = "#pricing",

  animationType = "slide",

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
      className={`relative w-full overflow-hidden px-4 pb-12 pt-24 text-white sm:px-6 md:px-8 lg:px-12 lg:pt-32 lg:pb-24 ${sectionClassName}`}
    >
      {showBackground && (
        <div className={`absolute inset-0 -z-10 ${backgroundClassName}`} />
      )}

      <div className="mx-auto w-full max-w-[1200px]">
        <div
          /* 
            در دسکتاپ (lg) به صورت flex-row در میاد، 
            اما در موبایل flex-col هست تا بتونیم ترتیب (order) رو عوض کنیم. 
          */
          className={`relative z-10 flex flex-col items-center gap-10 lg:flex-row lg:justify-between lg:gap-16 ${
            reverse ? "lg:flex-row-reverse" : ""
          }`}
        >
          {/* === سمت چپ: متن و دکمه‌ها === */}
          <MotionTag
            /* order-2 در موبایل یعنی میاد زیر عکس. lg:order-1 در دسکتاپ برمی‌گرده سر جاش */
            className={`order-2 mx-auto flex w-full max-w-xl flex-col items-center text-center lg:order-1 lg:mx-0 lg:w-[48%] lg:items-start lg:text-left ${textContainerClassName}`}
            {...(!isNone && {
              variants: textVariants,
              initial: "hidden",
              animate: "show",
            })}
          >
            <motion.h1
              className={`text-3xl sm:text-4xl lg:text-[44px] xl:text-[48px] font-extrabold leading-[1.15] tracking-tight ${headingClassName}`}
              {...(!isNone && { variants: itemVariants })}
            >
              {BeforeHighlight && (
                <span className={beforeHighlightClassName}>{BeforeHighlight} </span>
              )}
              <span className={`text-[#39d0c3] ${highlightClassName}`}>
                {Highlight}
              </span>{" "}
              <span className={`text-white ${afterHighlightClassName}`}>
                {AfterHighlight}
              </span>
            </motion.h1>

            <motion.p
              className={`mt-5 max-w-[48ch] text-[15px] sm:text-base leading-[1.7] text-white/70 ${descriptionClassName}`}
              {...(!isNone && { variants: itemVariants })}
            >
              {Description}
            </motion.p>

            <motion.div
              className="mt-8 flex w-full flex-col sm:w-auto sm:flex-row items-center justify-center gap-4 lg:justify-start"
              {...(!isNone && { variants: itemVariants })}
            >
              {/* دکمه اصلی */}
              <motion.div
                className={`relative inline-flex w-full sm:w-auto rounded-full p-[2px] ${primaryBtnWrapperClassName}`}
                {...(!isNone && { variants: ctaVariants })}
              >
                {/* Glow دکمه اصلی */}
                <div className="absolute -inset-[1px] rounded-full bg-gradient-to-r from-[#29C4A9] to-[#0d7a7f] shadow-[0_0_20px_rgba(41,196,169,0.3)] opacity-80" />
                <a
                  href={primaryBtnUrl}
                  className={`relative z-10 flex w-full items-center justify-center rounded-full px-8 py-3.5 cursor-pointer bg-gradient-to-r from-[#179B89] to-[#0A4F53] text-[15px] sm:text-base font-bold ${primaryBtnClassName}`}
                >
                  {primaryBtnText}
                </a>
              </motion.div>

              {/* دکمه فرعی */}
              <motion.div
                className={`relative inline-flex w-full sm:w-auto rounded-full p-[2px] ${secondaryBtnWrapperClassName}`}
                {...(!isNone && { variants: ctaVariants })}
              >
                {/* بردر گردینت دکمه فرعی */}
                <div className="absolute -inset-[1px] rounded-full bg-gradient-to-r from-cyan-400/40 to-cyan-700/20" />
                <a
                  href={secondaryBtnUrl}
                  className={`relative z-10 flex w-full items-center justify-center rounded-full px-8 py-3.5 cursor-pointer bg-[#08111f] text-[15px] sm:text-base font-bold ${secondaryBtnClassName}`}
                >
                  {secondaryBtnText}
                </a>
              </motion.div>
            </motion.div>
          </MotionTag>

          {/* === سمت راست: عکس === */}
          <MotionTag
            /* order-1 در موبایل یعنی عکس میره بالا. lg:order-2 در دسکتاپ سمت راست میمونه */
            className={`order-1 mx-auto flex w-full justify-center lg:order-2 lg:mx-0 lg:w-[52%] lg:justify-end ${imageDivClassName}`}
            {...(!isNone && {
              variants: rightVariants,
              initial: "hidden",
              animate: "show",
            })}
          >
            {isBranding && rightComponent}

            {!isBranding && imageUrl && (
              <div
                className={`relative w-full max-w-[450px] sm:max-w-[550px] lg:max-w-[650px] xl:max-w-[700px] transform-gpu will-change-transform transition-transform duration-300 ease-out ${
                  enableImageHover ? "hover:scale-[1.03]" : ""
                } ${imageWrapperClassName}`}
              >
                <SmartImage
                  src={imageUrl}
                  alt="Video Editing Dashboard"
                  width={900}
                  height={700}
                  className={`w-full h-auto object-contain  ${imageClassName}`}
                />
              </div>
            )}
          </MotionTag>
        </div>
      </div>
    </section>
  );
};