"use client";

import React from "react";
import { motion } from "framer-motion";
import "./AdCreativesHero.css";

// 🔴 تغییرات: rotate همه صفر شد تا دیگه کج نشن. فقط بالا پایین برن.
const cards = [
  {
    id: 1,
    src: "/adcreatives/hero1.jpg",
    alt: "Ad 1",
    tooltip: "Agency",
    rotate: 0,
    x: -360,
    y: 22,
    float: 12,
  },
  {
    id: 2,
    src: "/adcreatives/hero2.jpg",
    alt: "Ad 2",
    tooltip: "Campaign",
    rotate: 0,
    x: -240,
    y: 6,
    float: 16,
  },
  {
    id: 3,
    src: "/adcreatives/hero3.jpg",
    alt: "Ad 3",
    tooltip: "Creative",
    rotate: 0,
    x: -120,
    y: -8,
    float: 14,
  },
  {
    id: 4,
    src: "/adcreatives/hero4.jpg",
    alt: "Ad 4",
    tooltip: "Growth",
    rotate: 0,
    x: 0,
    y: -4,
    float: 15,
  },
  {
    id: 5,
    src: "/adcreatives/hero5.jpg",
    alt: "Ad 5",
    tooltip: "Launch",
    rotate: 0,
    x: 120,
    y: 12,
    float: 14,
  },
  {
    id: 6,
    src: "/adcreatives/hero6.jpg",
    alt: "Ad 6",
    tooltip: "Trade",
    rotate: 0,
    x: 240,
    y: 26,
    float: 18,
  },
  {
    id: 7,
    src: "/adcreatives/hero7.jpg",
    alt: "Ad 7",
    tooltip: "Innovation",
    rotate: 0,
    x: 360,
    y: 26,
    float: 16,
  },
];

export default function AdCreativesHero() {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-header">
          <h1 className="hero-title">
            <span className="title-teal">Ad Creatives</span> Built to Convert,
            <br />
            Not Just Look Good.
          </h1>
        </div>

        <div className="hero-cards-deck">
          {cards.map((card, index) => (
            <motion.div
              key={card.id}
              className="hero-card-wrapper"
              style={{
                zIndex: index + 1,
                x: card.x,
                rotate: card.rotate,
              }}
              animate={{
                y: [card.y, card.y - card.float, card.y],
              }}
              transition={{
                duration: 4.8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.18,
              }}
              whileHover={{
                scale: 1.15, // 🔴 موقع هاور کارت خیلی بیشتر بزرگ میشه
                rotate: 0,
                y: card.y - 30, // موقع هاور بیشتر میاد بالا
                transition: {
                  duration: 0.3,
                  ease: "easeOut",
                },
              }}
            >
              <div className="hero-tooltip">{card.tooltip}</div>
              <img src={card.src} alt={card.alt} className="hero-card-img" />
            </motion.div>
          ))}
        </div>

        <div className="hero-actions">
          <div className="hero-btn-wrapper">
            <div className="hero-btn-glow"></div>
            <a href="#" className="hero-btn primary-btn">
              Get Ad Creatives
            </a>
          </div>

          <a href="#" className="hero-btn secondary-btn">
            See our work
          </a>
        </div>
      </div>
    </section>
  );
}