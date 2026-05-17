import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { motion, useInView } from "framer-motion";

interface CardData {
  title: string;
  subTitle: string;
  image: string;
}

interface InteractiveCardProps extends CardData {
  index: number;
  cardRef: (el: HTMLDivElement | null) => void;
}

const InteractiveCard: React.FC<InteractiveCardProps> = ({
  title,
  subTitle,
  image,
  index,
  cardRef,
}) => {
  return (
    <div
      ref={cardRef}
      className="absolute w-48 h-64 rounded-[2rem] overflow-hidden border border-white/5 shadow-2xl"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        zIndex: 10 - index,
        transform: `translateY(${index * 8}px) translateX(${index * 4}px) rotate(${index * -2}deg) scale(${1 - index * 0.04})`,
      }}
    />
  );
};

const Folder: React.FC = () => {
  const container = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const flapRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(container, {
    once: true,
    margin: "0px 0px -100px 0px",
  });

  useEffect(() => {
    // Entry animation for cards when in view
    if (isInView) {
      cardRefs.current.forEach((card, i) => {
        if (card) {
          gsap.from(card, {
            y: 100,
            x: (i - 1) * -60,
            opacity: 0,
            scale: 0.8,
            duration: 0.8,
            delay: i * 0.1,
            ease: "back.out",
          });
        }
      });
    }
  }, [isInView]);

  const handleMouseEnter = (): void => {
    const tl = gsap.timeline();
    if (flapRef.current) {
      tl.to(
        flapRef.current,
        {
          y: 20,
          rotateX: -15,
          duration: 0.6,
          ease: "power3.out",
        },
        0,
      );
    }

    cardRefs.current.forEach((card, i) => {
      if (card) {
        gsap.to(card, {
          y: -140 - i * 35,
          x: (i - 1) * 45,
          rotation: (i - 1) * 12,
          scale: 1,
          duration: 0.7,
          delay: i * 0.04,
          ease: "expo.out",
        });
      }
    });
  };

  const handleMouseLeave = (): void => {
    if (flapRef.current) {
      gsap.to(flapRef.current, {
        y: 0,
        rotateX: 0,
        duration: 0.6,
        ease: "power3.inOut",
      });
    }

    cardRefs.current.forEach((card, i) => {
      if (card) {
        gsap.to(card, {
          y: i * 8,
          x: i * 4,
          rotation: i * -2,
          scale: 1 - i * 0.04,
          duration: 0.6,
          ease: "power3.inOut",
        });
      }
    });
  };

  const cardData: CardData[] = [
    {
      title: "Personal",
      subTitle: "Branding",
      image: "/motion-graphics/Folder/1.webp",
    },
    {
      title: "Digital",
      subTitle: "Presence",
      image: "/motion-graphics/Folder/2.webp",
    },
    {
      title: "Brand",
      subTitle: "Story",
      image: "/motion-graphics/Folder/3.webp",
    },
    {
      title: "Motion",
      subTitle: "Content",
      image: "/motion-graphics/Folder/4.webp",
    },
  ];

  return (
    <div
      ref={container}
      className="relative w-[450px] h-[400px] flex items-center justify-center cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: "1000px" }}
    >
      {/* Folder Background */}
      <div
        ref={backgroundRef}
        className="absolute w-full h-full"
        style={{
          backgroundImage: "url(/motion-graphics/Folder/FB.svg)",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      />

      {/* Cards Stack */}
      <div className="relative w-48 h-64 mb-12 z-10">
        {cardData.map((data, i) => (
          <InteractiveCard
            key={i}
            index={i}
            {...data}
            cardRef={(el) => {
              if (el) cardRefs.current[i] = el;
            }}
          />
        ))}
      </div>

      {/* Folder Front Flap (Glassmorphism) - Image Placeholder */}
      <div
        ref={flapRef}
        className="absolute bottom-4 w-[500px] h-[320px] z-20"
        style={{
          backgroundImage: "url(/motion-graphics/Folder/FF.svg)",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      />
    </div>
  );
};

/**
 * Main  Component
 */
const MotionSection: React.FC = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(contentRef, {
    once: true,
    margin: "0px 0px -50px 0px",
  });

  return (
    <div className="min-h-screen w-full  flex items-center justify-center px-6 md:px-8 font-sans overflow-hidden py-20 lg:py-0">
      <motion.div
        ref={contentRef}
        // Changed to flex-col for mobile, flex-row for desktop
        // items-center ensures text is centered horizontally on mobile
        className="w-full flex flex-col lg:flex-row justify-center items-center relative z-10 gap-12 lg:gap-16"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Left Section: Content */}
        <motion.div
          // text-center for mobile, text-left for desktop
          className="space-y-8 text-center lg:text-left flex flex-col items-center lg:items-start"
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <h1 className="text-2xl md:text-2xl lg:text-4xl font-bold text-white leading-[1.2] lg:leading-[1.1] tracking-tight">
            Where ideas turn into <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-teal-400 to-emerald-400">
              consistent motion experiences
            </span>
          </h1>

          <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
            At Eyeson, motion support isn't just about creating videos. It's
            about building a reliable motion system that brings clarity,
            consistency, and momentum to your brand. Instead of starting from
            scratch with every new asset, you work with a long-term partner.
          </p>

          <p className="text-gray-400 text-sm leading-relaxed max-w-xl opacity-80 mx-auto lg:mx-0">
            The result is smoother production, stronger storytelling, and motion
            that your audience instantly recognizes.
          </p>

          <motion.button
            // mx-auto centers the button in its flex-col parent on mobile
            className="group relative px-8 py-4 bg-teal-500/10 border border-teal-500/50 rounded-full overflow-hidden transition-all duration-300 hover:border-teal-400 hover:shadow-[0_0_20px_rgba(20,184,166,0.4)] active:scale-95 mx-auto lg:mx-0"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          >
            <span className="relative z-10 text-teal-400 font-semibold group-hover:text-white transition-colors">
              Get a free motion sample
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.button>
        </motion.div>

        {/* Right Section: Interactive Folder */}
        {/* hidden on mobile, block on large screens (Desktop) */}
        <motion.div
          className="hidden lg:block"
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <Folder />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default MotionSection;
