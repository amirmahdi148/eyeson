"use client";

import React from "react";
import "./HighPerformingAds.css";
import PrimaryButton from "@/components/Shared/PrimaryButton";

export default function HighPerformingAds() {
  return (
    <section className="hpa-section">
      <div className="hpa-container">
        {/* --- ستون سمت چپ: متن و دکمه --- */}
        <div className="hpa-content animate-fade-in">
          <h2 className="hpa-title">
            <span className="title-white">From Raw Ideas to</span>
            <br />
            <span className="title-teal">Ad Creatives That Sell</span>
          </h2>

          <div className="hpa-description">
            <p>
              Most brands have good offers, but weak creative execution makes them easy to ignore.
              We help turn your product, message, or campaign idea into ad creatives that feel sharp,
              clear, and built for performance.
            </p>
            <p>
              From the first visual hook to the final CTA, every detail is
              designed to capture attention, create interest, and move viewers closer to action.
              Because in modern advertising, the idea is not enough. The creative has to carry it.
            </p>
          </div>

          <div className="hpa-action-wrapper">
            <div className="hpa-button-glow"></div>
            <PrimaryButton text=" Start Your Ad Creative" width="auto" />
          </div>
        </div>

        {/* --- ستون سمت راست: انیمیشن پوشه تعاملی --- */}
        <div className="hpa-visual">
          <div
            className="folder-wrapper animate-slide-up"
          >
            {/* هاله نور پشت پوشه */}
            <div className="folder-glow-bg"></div>

            {/* ۱. لایه عقب پوشه (مستطیل ساده) */}
            <div className="folder-back"></div>

            {/* ۲. کارت‌ها */}
            <div className="folder-cards">
              <img
                src="/adcreatives/fol1.webp"
                alt="Ad 1"
                className="hpa-card card-1"
              />
              <img
                src="/adcreatives/fol2.webp"
                alt="Ad 2"
                className="hpa-card card-2"
              />
              <img
                src="/adcreatives/fol3.webp"
                alt="Ad 3"
                className="hpa-card card-3"
              />
              <img
                src="/adcreatives/fol4.webp"
                alt="Ad 4"
                className="hpa-card card-4"
              />
            </div>

            {/* ۳. لایه جلوی پوشه (شیشه‌ای یک‌تکه با Clip-Path) */}
            <div className="folder-front"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
