import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface CaseData {
  avatar?: string;
  title?: string;
  description?: string;
  tools?: { name: string; iconUrl?: string }[];
  projectType?: string;
  projectTimeline?: string;
}

const DEFAULT_DATA: CaseData = {
  title: "CryptoZen",
  description:
    "CryptoZen is a crypto education brand aiming to make blockchain simple, engaging, and actionable. Our mission was to help them scale their content and grow their audience across Instagram, TikTok, and YouTube, with a focus on driving VIP membership conversions through high-retention, short-form video.",
  tools: [
    { name: "Blender", iconUrl: "/case/blender.webp" },
    { name: "Illustrator", iconUrl: "/case/ai.webp" },
    { name: "Photoshop", iconUrl: "/case/ps.webp" },
    { name: "After Effects", iconUrl: "/case/ae.webp" },
  ],
  projectType: "Subscription",
  projectTimeline: "9 Months",
  avatar: "/case/hero-case.webp",
};

export default function CaseStudyHero() {
  const [data, setData] = useState<CaseData>(DEFAULT_DATA);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const API_URL = import.meta.env.PUBLIC_API_URL;
        const response = await fetch(
          `${API_URL}/project/details?slug=skylines-989762e9`,
          { credentials: "include" }
        );
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const json = await response.json();
        setData((prev) => ({ ...prev, ...json }));
      } catch (err) {
        console.warn("[CaseStudyHero] Using fallback data:", err);
        setError(null);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const {
    title = DEFAULT_DATA.title,
    description = DEFAULT_DATA.description,
    tools = DEFAULT_DATA.tools,
    projectType = DEFAULT_DATA.projectType,
    projectTimeline = DEFAULT_DATA.projectTimeline,
    avatar = DEFAULT_DATA.avatar,
  } = data;

  const API_URL = import.meta.env.PUBLIC_API_URL;
  const imageUrl = avatar?.startsWith("http")
    ? avatar
    : `${API_URL}${avatar}`;

  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-28">
      <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center gap-12 px-4 sm:px-6 lg:flex-row lg:items-center lg:gap-16 lg:px-8">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-[48%]"
        >
          <h1 className="text-3xl font-black leading-tight tracking-tight text-cyan-300 sm:text-4xl lg:text-[3.35rem]">
            {loading ? "Loading..." : title}
          </h1>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-white/65 sm:text-[15px] lg:text-base">
            {description}
          </p>

          <div className="mt-8">
            <p className="text-sm font-semibold text-white/80">Tools:</p>

            <div className="mt-4 flex flex-wrap items-center gap-3">
              {tools?.map((tool, i) => (
                <div
                  key={i}
                  className="group flex h-11 min-w-11 items-center justify-center rounded-xl transition-all duration-200 hover:-translate-y-0.5"
                >
                  {tool.iconUrl ? (
                    <img
                      src={tool.iconUrl}
                      alt={tool.name}
                      width="28"
                      height="28"
                      className="h-7 w-7 object-contain"
                      loading="lazy"
                    />
                  ) : (
                    <span className="text-[11px] font-semibold tracking-wide text-white/45">
                      {tool.name}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#061b21]/90 px-4 py-2 text-sm text-white/75">
              <img src="/case/layers.webp" alt="Layers" />
              <span>Project Type : {projectType}</span>
            </div>

            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#061b21]/90 px-4 py-2 text-sm text-white/75">
              <img src="/case/clock.webp" alt="Clock" />
              <span>Project Timeline : {projectTimeline}</span>
            </div>
          </div>
        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full lg:w-[52%]"
        >
          <div className="relative mx-auto w-full max-w-[620px]">
            <div className="absolute inset-0 rounded-[28px] bg-[#061b21]/30 blur-[38px]" />

            <div className="relative overflow-hidden rounded-[28px]">
              <div
                className="skeleton-placeholder absolute inset-0 rounded-[28px] border border-cyan-300/30 shadow-[0_8px_32px_rgba(0,0,0,0.2)] backdrop-blur-xl"
                style={{
                  overflow: "hidden",
                  borderRadius: "inherit",
                  background: "rgba(6,27,33,0.45)",
                  zIndex: 1,
                  transition: "opacity 0.4s ease",
                }}
              >
                <div className="orb orb1" />
                <div className="orb orb2" />
                <div className="orb orb3" />
                <div className="orb orb4" style={{ top: "20%", left: "80%" }} />
                <div className="orb orb5" style={{ top: "75%", left: "30%" }} />
                <div className="orb orb6" style={{ top: "50%", left: "50%" }} />
                <div className="orb-line line1" />
                <div
                  className="orb-line line2"
                  style={{ top: "60%", left: "60%", transform: "rotate(-30deg)" }}
                />
                <div
                  className="orb-line line3"
                  style={{ top: "30%", left: "80%", transform: "rotate(15deg)" }}
                />
              </div>

              <img
                src={imageUrl}
                alt={title}
                width="1200"
                height="900"
                loading="lazy"
                className="block h-full w-full object-cover"
                style={{
                  opacity: 0,
                  transition: "opacity .4s ease",
                }}
                onLoad={(e) => {
                  const target = e.currentTarget;
                  target.style.opacity = "1";
                  const prev = target.previousElementSibling as HTMLElement | null;
                  if (prev) prev.style.display = "none";
                }}
              />
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        .orb {
          position: absolute;
          width: 350px;
          height: 250px;
          background: radial-gradient(circle at 30% 30%, rgba(255,255,255,0.2), rgba(49,209,166,0.1), transparent 70%);
          border-radius: 50%;
          filter: blur(20px);
          opacity: 0.7;
        }
        .orb1 { animation: moveOrb1 6s ease-in-out infinite; }
        .orb2 { animation: moveOrb2 8s ease-in-out infinite; }
        .orb3 { animation: moveOrb3 10s ease-in-out infinite; }
        .orb-line {
          position: absolute;
          width: 180px;
          height: 6px;
          background: linear-gradient(90deg, rgba(49,209,166,0.3), rgba(255,255,255,0.1));
          border-radius: 3px;
          filter: blur(12px);
          opacity: 0.5;
        }
        .line1 { animation: moveLine1 7s linear infinite; }
        .line2 { animation: moveLine2 9s linear infinite; }
        .line3 { animation: moveLine3 11s linear infinite; }
        @keyframes moveLine1 { 0% { transform: translate(-20%, -20%) rotate(45deg); } 50% { transform: translate(120%, 120%) rotate(45deg); } 100% { transform: translate(-20%, -20%) rotate(45deg); } }
        @keyframes moveLine2 { 0% { transform: translate(120%, -20%) rotate(-30deg); } 50% { transform: translate(-20%, 120%) rotate(-30deg); } 100% { transform: translate(120%, -20%) rotate(-30deg); } }
        @keyframes moveLine3 { 0% { transform: translate(-20%, 120%) rotate(15deg); } 50% { transform: translate(120%, -30%) rotate(15deg); } 100% { transform: translate(-20%, 120%) rotate(15deg); } }
        @keyframes moveOrb1 { 0% { transform: translate(-30%, -30%); } 50% { transform: translate(120%, 120%); } 100% { transform: translate(-30%, -30%); } }
        @keyframes moveOrb2 { 0% { transform: translate(120%, -20%); } 50% { transform: translate(-20%, 120%); } 100% { transform: translate(120%, -20%); } }
        @keyframes moveOrb3 { 0% { transform: translate(-20%, 120%); } 50% { transform: translate(120%, -30%); } 100% { transform: translate(-20%, 120%); } }
      `}</style>
    </section>
  );
}
