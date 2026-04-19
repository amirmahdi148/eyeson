"use client";

import { useState } from "react";
import { motion, type Variants } from "framer-motion";

export default function BrandingHeroCard() {
  const [isHovered, setIsHovered] = useState(false);

  // لایه جلوی پوشه: z: 20 باعث میشه همیشه و قطعا جلوی کاغذ باشه
  const folderFrontVariants: Variants = {
    idle: { rotateX: 0, z: 20 },
    hover: {
      rotateX: -35,
      z: 20,
      transition: { type: "spring", stiffness: 300, damping: 20 },
    },
  };

  // کاغذ: z: 10 باعث میشه بین لایه پشت (z: 0) و لایه جلو (z: 20) قفل بشه
  const paperVariants: Variants = {
    idle: { y: 15, z: 10, opacity: 0 },
    hover: {
      y: -25,
      z: 10,
      opacity: 1,
      transition: { type: "spring", stiffness: 300, damping: 20 },
    },
  };

  const cardVariants: Variants = {
    idle: { scale: 1 },
    hover: { scale: 1.02, transition: { duration: 0.3 } },
  };

  return (
    <div className="flex justify-center lg:justify-end">
      <motion.div
        variants={cardVariants}
        initial="idle"
        animate={isHovered ? "hover" : "idle"}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative w-full max-w-[320px] sm:max-w-[360px] lg:max-w-[420px] aspect-square rounded-[32px] sm:rounded-[40px] bg-[#071118]/80 border border-[#162938] backdrop-blur-md flex flex-col items-center justify-center cursor-pointer shadow-2xl overflow-hidden"
      >
        {/* پترن پس‌زمینه */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#42D1D1 1px, transparent 1px), linear-gradient(90deg, #42D1D1 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        {/* ── کانتینر 3D پوشه ── */}
        <div
          className="relative mb-6 sm:mb-8"
          style={{
            width: "180px",
            height: "160px",
            perspective: "1200px", // پرسپکتیو اینجاست
          }}
        >
          {/* صحنه سه‌بعدی */}
          <div className="w-full h-full relative" style={{ transformStyle: "preserve-3d" }}>
            
            {/* 1. پشت پوشه (لایه صفر) */}
            <div
              className="absolute bottom-0 w-full rounded-xl z-0 shadow-inner"
              style={{
                height: "145px",
                background: "linear-gradient(160deg, #006677 0%, #004d5e 100%)",
                transform: "translateZ(0px)",
              }}
            />
            {/* تب بالای پوشه */}
            <div
              className="absolute left-0 w-[70px] h-8 rounded-t-xl z-0"
              style={{
                top: "5px",
                background: "linear-gradient(160deg, #006677 0%, #004d5e 100%)",
                transform: "translateZ(0px)",
              }}
            />

            {/* 2. کاغذ (لایه میانی) */}
            <motion.div
              variants={paperVariants}
              className="absolute left-4 right-4 drop-shadow-md"
              style={{
                height: "115px",
                bottom: "16px",
              }}
            >
              {/* بدنه کاغذ با برش گوشه */}
              <div
                className="w-full h-full"
                style={{
                  background: "linear-gradient(225deg, transparent 20px, white 20px)",
                  borderRadius: "8px",
                }}
              >
                {/* گوشه تا خورده واقعی */}
                <div
                  className="absolute top-0 right-0 w-[29px] h-[29px]"
                  style={{
                    background: "linear-gradient(225deg, transparent 50%, #e0e0e0 50%)",
                    borderRadius: "0 8px 0 4px",
                    boxShadow: "-2px 2px 4px rgba(0,0,0,0.1)",
                  }}
                />
              </div>
            </motion.div>

            {/* 3. جلوی پوشه (لایه رویی) */}
            <motion.div
              variants={folderFrontVariants}
              style={{
                transformOrigin: "bottom center",
                height: "145px",
                background: "linear-gradient(145deg, #3DD6C8 0%, #00A9BD 50%, #007A8F 100%)",
              }}
              className="absolute bottom-0 w-full rounded-xl border-t border-white/20"
            >
              {/* شاین روی پوشه */}
              <div
                className="absolute inset-0 rounded-xl opacity-20 pointer-events-none"
                style={{
                  background: "linear-gradient(135deg, rgba(255,255,255,0.4) 0%, transparent 50%)",
                }}
              />
            </motion.div>

          </div>

          {/* سایه زیر پوشه (خارج از فضای 3D) */}
          <motion.div
            animate={{
              opacity: isHovered ? 0.5 : 0.2,
              scaleX: isHovered ? 0.85 : 0.7,
            }}
            transition={{ duration: 0.4 }}
            className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-full h-4 bg-[#00A9BD] blur-xl rounded-full pointer-events-none"
          />
        </div>

        {/* ── متن ── */}
        <div className="relative text-center z-40 flex flex-col items-center gap-1">
          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-wide">
            Branding
          </h3>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-[#42D1D1] animate-pulse" />
            <p className="text-[#42D1D1] text-xs font-medium tracking-wider">
              24 Projects
            </p>
          </div>
          <motion.p
            animate={{ opacity: isHovered ? 1 : 0.45 }}
            transition={{ duration: 0.3 }}
            className="text-gray-500 text-[10px] uppercase tracking-[0.2em] mt-1"
          >
            {isHovered ? "✦ View Gallery" : "Hover to Explore"}
          </motion.p>
        </div>

        {/* ── افکت نور ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 0.3 : 0 }}
          className="absolute bottom-20 w-3/4 h-10 bg-[#42D1D1] rounded-[100%] blur-xl pointer-events-none"
        />

        {/* ── بردر درخشان ── */}
        <motion.div
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.35 }}
          className="absolute inset-0 rounded-[32px] sm:rounded-[40px] pointer-events-none"
          style={{
            boxShadow: "inset 0 0 0 1px rgba(66,209,209,0.3), 0 0 40px rgba(66,209,209,0.12)",
          }}
        />
      </motion.div>
    </div>
  );
}