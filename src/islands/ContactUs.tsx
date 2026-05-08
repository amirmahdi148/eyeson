"use client";

import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import { SmartImage } from "@/utils/SmartImage.tsx";

const contactImg = "/Shared/contact/C.png";

export default function ContactUs() {
  const [selectedBudget, setSelectedBudget] = useState<string | null>(null);

  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 60, damping: 20 },
    },
  };

  return (
    <section className="py-12 px-4 mb-16 sm:py-16 sm:px-6 sm:mb-24 lg:px-16 lg:py-20 lg:mb-40">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-16 items-center">
        {/* ===== Left: Text + Image ===== */}
        {/* 🔴 موبایل: وسط‌چین / دسکتاپ: چپ‌چین */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="lg:col-span-5 flex flex-col items-center text-center lg:items-start lg:text-left gap-8 sm:gap-10 lg:gap-12"
        >
          {/* Text */}
          <motion.div
            variants={item}
            className="text-white space-y-4 sm:space-y-6 w-full max-w-2xl lg:max-w-none"
          >
            <p className="text-[11px] sm:text-sm tracking-widest text-cyan-400 font-semibold uppercase">
              Contact Us
            </p>

            <h2 className="text-[28px] font-bold leading-[1.15] sm:text-3xl md:text-4xl lg:text-5xl">
              Bring your ideas to life with motion that actually makes a
              difference.
            </h2>

            <p className="text-white/60 text-sm sm:text-base lg:text-lg max-w-[45ch] mx-auto lg:mx-0">
              Reach out and get your free custom motion sample crafted just for
              your brand.
            </p>
          </motion.div>

          {/* Image */}
          <motion.div
            variants={item}
            animate={{ y: [0, -15, 0], rotate: [0, 1.5, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="relative hidden sm:block w-full max-w-[700px] flex justify-center"
          >
            <SmartImage
              src={contactImg}
              alt="Contact Us"
              width={1200}
              height={600}
              loading="lazy"
              decoding="async"
              className="rounded-2xl sm:rounded-3xl w-full h-auto drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)] scale-110 lg:scale-125 transition-transform duration-500"
            />
          </motion.div>
        </motion.div>

        {/* ===== Right: Form ===== */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ type: "spring", stiffness: 60, damping: 16 }}
          // 🔴 پدینگ موبایل رو کم کردم که فرم جا بشه (p-5 به جای p-8)
          className="lg:col-span-7 w-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-12 shadow-2xl"
        >
          <form className="space-y-5 sm:space-y-6 md:space-y-8 text-white w-full text-left">
            {/* Name */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <Input label="First Name" />
              <Input label="Last Name" />
            </div>

            {/* Email & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <Input label="Email" type="email" />
              <Input label="Phone" type="tel" />
            </div>

            <Input label="Company Name" />
            <Input label="Project Type" />

            {/* Budget */}
            <div className="space-y-3 pt-2">
              <label className="text-xs sm:text-sm text-gray-400 font-medium ml-1">
                Budget Range
              </label>
              {/* 🔴 موبایل: justify-center تا دکمه‌ها وسط باشن و از لبه بیرون نزنن */}
              <div className="flex flex-wrap gap-2 sm:gap-3 justify-center sm:justify-start">
                {["< $10k", "$10k - $25k", "$25k - $50k", "> $50k"].map(
                  (budget) => (
                    <motion.button
                      key={budget}
                      type="button"
                      onClick={() => setSelectedBudget(budget)}
                      whileHover={{
                        scale: 1.05,
                        boxShadow: "0px 0px 20px rgba(34,211,238,0.4)",
                      }}
                      whileTap={{ scale: 0.95 }}
                      // 🔴 flex-1 در موبایل کوچیک باعث میشه دکمه‌ها هم‌عرض بشن و کل عرض رو پر کنن
                      className={`px-3 py-2 text-[11px] font-medium rounded-full border transition-all duration-300
                      sm:px-4 sm:py-2.5 sm:text-sm flex-1 sm:flex-none whitespace-nowrap
                      ${
                        selectedBudget === budget
                          ? "bg-cyan-400 text-black border-cyan-400 shadow-lg shadow-cyan-400/40"
                          : "bg-white/5 border-white/10 hover:border-cyan-400/50 text-white/80"
                      }`}
                    >
                      {budget}
                    </motion.button>
                  ),
                )}
              </div>
            </div>

            {/* Message */}
            <div className="flex flex-col gap-2 pt-2">
              <label className="text-xs sm:text-sm text-gray-400 font-medium ml-1">
                Project Detail
              </label>
              <motion.textarea
                rows={4}
                whileFocus={{
                  scale: 1.01,
                  boxShadow: "0px 0px 25px rgba(34,211,238,0.15)",
                }}
                className="bg-[#040e14]/50 border border-white/10 rounded-xl px-4 py-3 text-sm
                           sm:text-base focus:outline-none focus:border-cyan-400/50 focus:bg-white/5
                           transition-all duration-300 resize-none w-full"
              />
            </div>

            {/* Submit */}
            <div className="pt-4">
              <motion.button
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0px 0px 30px rgba(34,211,238,0.4)",
                }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-400 to-teal-400 text-white
                           text-black font-bold rounded-xl
                           py-3.5 text-[15px]
                           sm:py-4 sm:text-base shadow-[0_0_20px_rgba(34,211,238,0.2)]"
              >
                Get Free Sample
              </motion.button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

/* ===== Reusable Input ===== */
function Input({ label, type = "text" }: { label: string; type?: string }) {
  return (
    <div className="flex flex-col gap-1.5 sm:gap-2">
      <label className="text-xs sm:text-sm text-gray-400 font-medium ml-1">
        {label}
      </label>
      <motion.input
        type={type}
        whileFocus={{
          scale: 1.01,
          boxShadow: "0px 0px 25px rgba(34,211,238,0.15)",
        }}
        className="bg-[#040e14]/50 border border-white/10 rounded-xl
                   px-4 py-3 text-sm sm:text-base w-full
                   focus:outline-none focus:border-cyan-400/50 focus:bg-white/5
                   transition-all duration-300"
      />
    </div>
  );
}
