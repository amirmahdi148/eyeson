"use client";

import { useState } from "react";
import { motion  , type Variants} from "framer-motion";
const contactImg = "/home/contact.png";

export default function ContactUs() {
  const [selectedBudget, setSelectedBudget] = useState<string | null>(null);

  const container : Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const item : Variants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 60,
        damping: 20,
      },
    },
  };

  return (
    <section className=" py-20 px-6 lg:px-16 mb-40">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        {/* ===== Left Content (Text + Image) ===== */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="lg:col-span-5 flex flex-col gap-12"
        >
          {/* Text */}
          <motion.div variants={item} className="text-white space-y-6">
            <p className="text-sm tracking-widest text-cyan-400 font-semibold">
              CONTACT US
            </p>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Bring your ideas to life with motion that actually makes a
              difference.
            </h2>

            <p className="text-gray-400 text-lg">
              Reach out and get your free custom motion sample crafted just for
              your brand.
            </p>
          </motion.div>

          {/* Image */}
          <motion.div
            variants={item}
            animate={{ y: [0, -15, 0], rotate: [0, 1.5, 0] }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative"
          >
            <img
              src={contactImg}
              alt="Contact Us"
              className="rounded-3xl w-full h-auto"
            />
          </motion.div>
        </motion.div>

        {/* ===== Right Content (Form) ===== */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 60, damping: 16 }}
          className="lg:col-span-7 bg-white/5 backdrop-blur-xl
          border border-white/10 rounded-3xl p-8 md:p-12"
        >
          <form className="space-y-8 text-white">
            {/* Name */}
            <div className="grid md:grid-cols-2 gap-6">
              <Input label="First Name" />
              <Input label="Last Name" />
            </div>

            {/* Email & Phone */}
            <div className="grid md:grid-cols-2 gap-6">
              <Input label="Email" type="email" />
              <Input label="Phone" type="tel" />
            </div>

            <Input label="Company Name" />
            <Input label="Project Type" />

            {/* Budget */}
            <div className="space-y-3">
              <label className="text-sm text-gray-400">Budget Range</label>
              <div className="flex flex-wrap gap-3">
                {["< $10k", "$10k - $25k", "$25k - $50k", "> $50k"].map(
                  (budget) => (
                    <motion.button
                      key={budget}
                      type="button"
                      onClick={() => setSelectedBudget(budget)}
                      whileHover={{
                        scale: 1.08,
                        boxShadow:
                          "0px 0px 20px rgba(34,211,238,0.4)",
                      }}
                      whileTap={{ scale: 0.95 }}
                      className={`px-4 py-2 rounded-full border text-sm transition-all duration-300
                      ${
                        selectedBudget === budget
                          ? "bg-cyan-400 text-black border-cyan-400 shadow-lg shadow-cyan-400/40"
                          : "bg-white/5 border-white/10 hover:border-cyan-400/50"
                      }`}
                    >
                      {budget}
                    </motion.button>
                  )
                )}
              </div>
            </div>

            {/* Message */}
            <div className="flex flex-col gap-2">
              <label className="text-sm text-gray-400">
                Project Detail
              </label>
              <motion.textarea
                rows={4}
                whileFocus={{
                  scale: 1.02,
                  boxShadow:
                    "0px 0px 25px rgba(34,211,238,0.25)",
                }}
                className="bg-white/5 border border-white/10 rounded-xl px-4 py-3
                focus:outline-none focus:border-cyan-400/50
                transition-all duration-300 resize-none"
              />
            </div>

            {/* Submit */}
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow:
                  "0px 0px 40px rgba(34,211,238,0.6)",
              }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full bg-gradient-to-r from-cyan-400 to-teal-400
              text-black font-semibold py-4 rounded-xl"
            >
              Get Free Sample
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

/* ===== Reusable Input ===== */
function Input({ label, type = "text" }: { label: string; type?: string }) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm text-gray-400">{label}</label>
      <motion.input
        type={type}
        whileFocus={{
          scale: 1.03,
          boxShadow: "0px 0px 25px rgba(34,211,238,0.25)",
        }}
        className="bg-white/5 border border-white/10 rounded-xl px-4 py-3
        focus:outline-none focus:border-cyan-400/50
        transition-all duration-300"
      />
    </div>
  );
}
