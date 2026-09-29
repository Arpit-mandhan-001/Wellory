"use client";

import React, { useRef, useState, useEffect } from "react";
import { ArrowRight, Droplet } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import gsap from "gsap";
import { SplitText } from "./SplitTextProps";
import CANHero from "./CANHero";
import CANHero1 from "./CANHero1";

interface FeatureItem {
  id: string;
  badge: string;
  title: string;
  description: string;
}

// Connector lines. Each path starts at the dot on the dates image and ends next to its text,
// so the draw-in animation travels from the image toward the text.
const CONNECTORS = [
  { id: "f1", d: "M 480,230 L 450,180 L 310,180", dot: { cx: 480, cy: 230 } },
  { id: "f2", d: "M 740,250 L 790,180 L 940,180", dot: { cx: 740, cy: 250 } },
  { id: "f3", d: "M 520,630 L 480,710 L 310,710", dot: { cx: 520, cy: 630 } },
  { id: "f4", d: "M 740,630 L 790,720 L 940,720", dot: { cx: 740, cy: 630 } },
];

export const NaturePowerSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const features: FeatureItem[] = [
    {
      id: "f1",
      badge: "001",
      title: "UNIQUE FUSION",
      description:
        "ENARJ COLA ENERGY DRINK OFFERS A ONE-OF-A-KIND BLEND, COMBINING THE CLASSIC AND BELOVED TASTE OF COLA WITH A POWERFUL ENERGY-BOOSTING FORMULA SOURCED FROM MEDJOOL DATES.",
    },
    {
      id: "f2",
      badge: "002",
      title: "REFRESHING AND BALANCED TASTE",
      description:
        "THE FLAVOR OF ENARJ COLA ENERGY DRINK IS METICULOUSLY CRAFTED TO STRIKE THE PERFECT BALANCE BETWEEN NATURAL SWEETNESS AND TANGINESS, DELIVERING A REFRESHING AND ENJOYABLE TASTE.",
    },
    {
      id: "f3",
      badge: "003",
      title: "VERSATILE ENERGY SOLUTION",
      description:
        "POWERED BY WHOLE-FRUIT FIBER, LOW-GLYCEMIC DATE SUGARS, AND 80MG OF ORGANIC GREEN TEA CAFFEINE TO MAINTAIN VIGOR WITHOUT JITTERS OR SUDDEN CRASHES.",
    },
    {
      id: "f4",
      badge: "004",
      title: "ENHANCED FOCUS AND ALERTNESS",
      description:
        "BEYOND ITS DELIGHTFUL TASTE, ENARJ COLA ENERGY DRINK IS FORMULATED WITH ESSENTIAL B-VITAMINS (B3, B6, B12) TO ENHANCE YOUR MENTAL CLARITY AND ALERTNESS.",
    },
  ];

  // Scroll-in intro (plays once): dates rise from the bottom -> then for each callout in turn:
  // dot, line drawing from the image toward the text, badge, then title + description letter by letter
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      // Prepare the line-reveal masks (stroke-dash trick, so the visible line can stay dashed)
      section
        .querySelectorAll<SVGPathElement>(".np-line-mask")
        .forEach((path) => {
          const len = path.getTotalLength();
          path.style.strokeDasharray = `${len}`;
          path.style.strokeDashoffset = `${len}`;
        });

      const tl = gsap.timeline({
        paused: true,
        defaults: { ease: "power3.out" },
      });
      tl.fromTo(
        ".np-image",
        { y: 180, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.4 },
        0,
      );

      CONNECTORS.forEach((_, i) => {
        const t = 1.2 + i * 1.7;
        tl.fromTo(
          `.np-dot-${i}`,
          { attr: { r: 0 }, opacity: 0 },
          { attr: { r: 3.5 }, opacity: 1, duration: 0.4 },
          t,
        )
          .to(
            `.np-line-${i}`,
            { strokeDashoffset: 0, duration: 0.8, ease: "power2.inOut" },
            t + 0.2,
          )
          .fromTo(
            `.np-badge-${i}`,
            { scale: 0.6, opacity: 0 },
            { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(2)" },
            t + 0.8,
          )
          .fromTo(
            `.np-l${i}`,
            { y: 8, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              stagger: 0.012,
              duration: 0.35,
              ease: "power2.out",
            },
            t + 0.9,
          );
      });

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            tl.play();
            observer.disconnect();
          }
        },
        { threshold: 0.25 },
      );
      observer.observe(section);
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  //   const handleShopClick = () => {
  //     soundEngine.playClick();
  //     const target =
  //       document.getElementById("flavors") || document.getElementById("shop");
  //     if (target) {
  //       target.scrollIntoView({ behavior: "smooth" });
  //     }
  //   };

  //   const handleLinkClick = () => {
  //     soundEngine.playClick();
  //     const target =
  //       document.getElementById("whats-inside") ||
  //       document.getElementById("ingredients");
  //     if (target) {
  //       target.scrollIntoView({ behavior: "smooth" });
  //     }
  //   };

  // Mathematically computed stepped tab SVG path for 1000x680 viewBox
  // Left raised tab (y=0), Lowered center shelf (y=46), Right stepped-up tab (y=0)
  const steppedPath =
    "M 0,28 L 0,652 A 28 28 0 0 0 28 680 L 972 680 A 28 28 0 0 0 1000 652 L 1000 28 A 28 28 0 0 0 972 0 L 748 0 C 724 0, 724 46, 700 46 L 248 46 C 224 46, 224 0, 200 0 L 28 0 A 28 28 0 0 0 0 28 Z";

  return (
    <section
      ref={sectionRef}
      id="nature-power"
      className="relative w-full bg-black text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-12 overflow-hidden select-none"
    >
      {/* Subtle Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-red-950/20 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Top Eyebrow */}
        {/* <div className="flex items-center justify-center gap-3 text-xs md:text-sm font-extrabold tracking-[0.25em] text-zinc-400 uppercase mb-3">
          <span className="w-8 md:w-10 h-[2px] bg-[#ea2027]" />
          <span>NATURE&apos;S POWER</span>
          <span className="w-8 md:w-10 h-[2px] bg-[#ea2027]" />
        </div> */}

        {/* Section Headline */}
        {/* <h2 className="text-center font-black tracking-tight uppercase mb-8 sm:mb-12">
          <span className="block text-3xl sm:text-4xl md:text-5xl text-white">
            PURE INGREDIENTS.D
          </span>
          <span className="block text-3xl sm:text-4xl md:text-5xl text-[#ea2027] mt-1">
            PEAK PERFORMANCE.
          </span>
        </h2> */}

        {/* ================= STEPPED FRAME CONTAINER ================= */}
        <div className="relative w-full max-w-7xl h-[780px] sm:h-[720px] md:h-[880px]">
          {/* Stepped Frame SVG Background with sleek border & backdrop */}
          <div className="absolute inset-0 w-full h-full pointer-events-none">
            <svg
              className="w-full h-full filter drop-shadow-[0_25px_60px_rgba(0,0,0,0.95)]"
              viewBox="0 0 1000 680"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <defs>
                <linearGradient
                  id="steppedCardBg"
                  x1="0%"
                  y1="0%"
                  x2="0%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#F5DEB3" />
                  <stop offset="100%" stopColor="#F5DEB3" />
                </linearGradient>
                <linearGradient
                  id="steppedCardBorder"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="rgba(0,0,0,0.22)" />
                  <stop offset="50%" stopColor="rgba(0,0,0,0.08)" />
                  <stop offset="100%" stopColor="rgba(0,0,0,0.18)" />
                </linearGradient>
              </defs>
              <path
                d={steppedPath}
                fill="url(#steppedCardBg)"
                stroke="url(#steppedCardBorder)"
                strokeWidth="1.5"
              />
            </svg>
          </div>

          {/* ================= STEPPED SHELF CONTROLS (BUTTONS) ================= */}
          {/* Left Step Button: SHOP NOW */}
          {/* <div className="absolute left-4 sm:left-7 md:left-8 top-1.5 sm:top-2 md:top-2.5 z-30">
            <button
              type="button"
              onClick={handleShopClick}
              className="inline-flex items-center gap-2 bg-[#ea2027] hover:bg-[#ff3038] text-white font-bold text-[11px] sm:text-xs uppercase tracking-wider px-5 sm:px-6 py-2.5 rounded-full shadow-[0_4px_20px_rgba(234,32,39,0.4)] hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
            >
              <span>SHOP</span>
              <ArrowRight size={14} className="stroke-[2.5]" />
            </button>
          </div> */}

          {/* Right Step Button: ENARJ.IO */}
          {/* <div className="absolute right-4 sm:right-7 md:right-8 top-1.5 sm:top-2 md:top-2.5 z-30">
            <button
              type="button"
              onClick={handleLinkClick}
              className="inline-flex items-center gap-2 bg-white hover:bg-zinc-100 text-zinc-950 font-bold text-[11px] sm:text-xs uppercase tracking-wider px-5 sm:px-6 py-2.5 rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.5)] hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
            >
              <span>ENARJ.IO</span>
              <ArrowRight size={14} className="stroke-[2.5]" />
            </button>
          </div> */}

          {/* Center Raised Roof: 3D Product Breakout Visual */}
          {/* <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[45%] pointer-events-none z-20 w-36 sm:w-44 md:w-52 aspect-[1/2] flex items-center justify-center">
            <Image
              src={enarjCanImg}
              alt="ENARJ 250ml Can Breakout"
              className="w-full h-auto object-contain filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.9)] opacity-95"
            />
          </div> */}

          {/* ================= INSIDE THE FRAME: CONTENT & CALLOUTS ================= */}
          <div className="relative z-20 w-full h-full p-6 sm:p-8 md:p-12 flex flex-col justify-between pt-16 sm:pt-20">
            {/* Top Right: Ingredient Breakdown Callout Matching Reference UI */}
            {/* <div className="absolute top-16 sm:top-20 right-6 sm:right-10 flex items-start gap-3 max-w-[270px] pointer-events-none z-20 hidden md:flex">
              <div className="w-8 h-8 rounded-full border border-white/30 bg-white/10 flex items-center justify-center shrink-0 text-white shadow-inner">
                <Droplet size={15} className="fill-white/30" />
              </div>
              <p className="text-[10px] leading-relaxed text-zinc-400 font-mono uppercase tracking-wide">
                carbonated water (60%), water (11%), organic medjool dates syrup, natural green tea caffeine,
                essential vitamins, minerals.
              </p>
            </div> */}

            {/* Central Splashing Dates Visual */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10 mr-8 translate-y-70">
              <motion.div
                className="relative w-[340px] sm:w-[420px] md:w-[710px] aspect-square flex items-center justify-center"
                animate={{
                  scale: [1, 1.02, 1],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                {/* Radial Amber Backlight */}
                <div className="absolute w-72 h-72 rounded-full bg-amber-600/15 blur-3xl" />
                <div className="absolute w-60 h-60 rounded-full bg-red-600/15 blur-2xl" />

                {/* Back CAN */}
                <motion.div
                  className="absolute z-0 "
                  initial={{ rotate: 8, x: 45, y: -10 }}
                  animate={{
                    rotate: [8, 10, 8],
                    x: [45, 48, 45],
                    y: [-10, -13, -10],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <CANHero1 />
                </motion.div>

                {/* Front CAN */}
                <motion.div
                  className="absolute z-10"
                  initial={{ rotate: -6, x: -15, y: 15 }}
                  animate={{
                    rotate: [-6, -4, -6],
                    x: [-15, -12, -15],
                    y: [15, 12, 15],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <CANHero />
                </motion.div>
              </motion.div>
            </div>

            {/* Desktop SVG Connecting Lines (drawn from the image toward the text) */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none z-15 hidden md:block"
              aria-hidden="true"
            >
              <defs>
                {CONNECTORS.map((c, i) => (
                  <mask
                    key={c.id}
                    id={`np-mask-${i}`}
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="100%"
                    height="100%"
                  >
                    <path
                      d={c.d}
                      fill="none"
                      stroke="#ffffff"
                      strokeWidth="8"
                      className={`np-line-mask np-line-${i}`}
                    />
                  </mask>
                ))}
              </defs>
              {CONNECTORS.map((c, i) => (
                <React.Fragment key={c.id}>
                  <path
                    d={c.d}
                    fill="none"
                    stroke="rgba(24,24,27,0.55)"
                    strokeWidth="1.25"
                    strokeDasharray={hoveredId === c.id ? "none" : "4 3"}
                    mask={`url(#np-mask-${i})`}
                    className="transition-all duration-300"
                  />
                  <circle
                    cx={c.dot.cx}
                    cy={c.dot.cy}
                    r="3.5"
                    fill="#18181b"
                    className={`np-dot-${i} opacity-0`}
                  />
                </React.Fragment>
              ))}
            </svg>

            {/* 4 Feature Callouts (001, 002, 003, 004) */}
            <div className="relative z-20 w-full h-full grid grid-cols-1 md:grid-cols-2 gap-y-12 md:gap-y-36 justify-between">
              {/* 001: Top Left Callout */}
              <div
                className="max-w-[270px] space-y-2 cursor-pointer transition-transform duration-200 hover:translate-x-1"
                onMouseEnter={() => setHoveredId("f1")}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div className="np-badge-0 opacity-0 inline-flex items-center justify-center border border-zinc-900/30 rounded-full px-3 py-0.5 text-[18px] font-medium text-zinc-800 uppercase">
                  {features[0].badge}
                </div>
                <h3 className="text-base sm:text-2xl font-medium font-display tracking-wide text-zinc-900 uppercase">
                  <SplitText text={features[0].title} letterClass="np-l0" />
                </h3>
                <p className="text-zinc-700 font-raleway font-bold text-[11px] sm:text-[16px] leading-relaxed uppercase">
                  <SplitText
                    text={features[0].description}
                    letterClass="np-l0"
                  />
                </p>
              </div>

              {/* 002: Top Right Callout */}
              <div
                className="max-w-[280px] space-y-2 md:text-left md:ml-auto cursor-pointer transition-transform duration-200 hover:-translate-x-1"
                onMouseEnter={() => setHoveredId("f2")}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div className="np-badge-1 opacity-0 inline-flex items-center justify-center border border-zinc-900/30 rounded-full px-3 py-0.5 text-[18px] font-medium text-zinc-800 uppercase">
                  {features[1].badge}
                </div>
                <h3 className="text-base sm:text-2xl font-medium font-display tracking-wide text-zinc-900 uppercase">
                  <SplitText text={features[1].title} letterClass="np-l1" />
                </h3>
                <p className="text-zinc-700 font-raleway font-bold text-[11px] sm:text-[16px] leading-relaxed uppercase">
                  <SplitText
                    text={features[1].description}
                    letterClass="np-l1"
                  />
                </p>
              </div>

              {/* 003: Bottom Left Callout */}
              <div
                className="max-w-[270px] space-y-2 cursor-pointer transition-transform duration-200 hover:translate-x-1 mt-auto"
                onMouseEnter={() => setHoveredId("f3")}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div className="np-badge-2 opacity-0 inline-flex items-center justify-center border border-zinc-900/30 rounded-full px-3 py-0.5 text-[18px] font-medium text-zinc-800 uppercase">
                  {features[2].badge}
                </div>
                <h3 className="text-base sm:text-2xl font-medium font-display tracking-wide text-zinc-900 uppercase">
                  <SplitText text={features[2].title} letterClass="np-l2" />
                </h3>
                <p className="font-raleway font-bold text-zinc-700 text-[11px] sm:text-[16px] leading-relaxed uppercase">
                  <SplitText
                    text={features[2].description}
                    letterClass="np-l2"
                  />
                </p>
              </div>

              {/* 004: Bottom Right Callout */}
              <div
                className="max-w-[280px] space-y-2 md:text-left md:ml-auto cursor-pointer transition-transform duration-200 hover:-translate-x-1 mt-auto"
                onMouseEnter={() => setHoveredId("f4")}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div className="np-badge-3 opacity-0 inline-flex items-center justify-center border border-zinc-900/30 rounded-full px-3 py-0.5 text-[18px] font-medium text-zinc-800 uppercase">
                  {features[3].badge}
                </div>
                <h3 className="text-base sm:text-2xl font-medium font-display tracking-wide text-zinc-900 uppercase">
                  <SplitText text={features[3].title} letterClass="np-l3" />
                </h3>
                <p className="text-zinc-700 font-raleway font-bold text-[11px] sm:text-[16px] leading-relaxed uppercase">
                  <SplitText
                    text={features[3].description}
                    letterClass="np-l3"
                  />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
