"use client";

import React from "react";
import { motion } from "framer-motion";
import "./AdCreativesHero.css";
import SecondaryButton from "@/components/Shared/SecondaryButton";
import PrimaryButton from "@/components/Shared/PrimaryButton";

// 🔴 تغییرات: rotate همه صفر شد تا دیگه کج نشن. فقط بالا پایین برن.
const cards = [
  {
    id: 1,
    src: "/adcreatives/hero1.webp",
    alt: "Ad 1",
    tooltip: "Agency",
    rotate: 0,
    x: -360,
    y: 22,
    float: 12,
  },
  {
    id: 2,
    src: "/adcreatives/hero2.webp",
    alt: "Ad 2",
    tooltip: "Campaign",
    rotate: 0,
    x: -240,
    y: 6,
    float: 16,
  },
  {
    id: 3,
    src: "/adcreatives/hero3.webp",
    alt: "Ad 3",
    tooltip: "Creative",
    rotate: 0,
    x: -120,
    y: -8,
    float: 14,
  },
  {
    id: 4,
    src: "/adcreatives/hero4.webp",
    alt: "Ad 4",
    tooltip: "Growth",
    rotate: 0,
    x: 0,
    y: -4,
    float: 15,
  },
  {
    id: 5,
    src: "/adcreatives/hero5.webp",
    alt: "Ad 5",
    tooltip: "Launch",
    rotate: 0,
    x: 120,
    y: 12,
    float: 14,
  },
  {
    id: 6,
    src: "/adcreatives/hero6.webp",
    alt: "Ad 6",
    tooltip: "Trade",
    rotate: 0,
    x: 240,
    y: 26,
    float: 18,
  },
  {
    id: 7,
    src: "/adcreatives/hero7.webp",
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
      <img src="/adcreatives/19.png" alt="Hero image" className="scale-[1] sm:scale-[0.8] relative bottom-2  sm:bottom-20"/>
    </section>
  );
}
