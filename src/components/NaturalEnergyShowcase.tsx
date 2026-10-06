"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Archivo_Black, Inter } from "next/font/google";

const logoFont = Archivo_Black({ weight: "400", subsets: ["latin"] });
const bodyFont = Inter({ subsets: ["latin"] });

/* ---------------- PASTE YOUR LINKS HERE ---------------- */
const VIDEO_URL = "/video/video1.mp4";

type NutritionRow = { label: string; value: string };

type Slide = {
  flavor: string;
  canImage: string;
  nutrition: NutritionRow[];
  punchline_first: string;
  punchline_second: string;
};

const NUTRITION_ORIGINAL: NutritionRow[] = [
  { label: "Calories", value: "90 kcal" },
  { label: "Total Carbohydrates", value: "20 g" },
  { label: "Natural Sugars", value: "15 g" },
  { label: "Caffeine (Natural)", value: "30 mg" },
  { label: "Potassium", value: "180 mg" },
  { label: "Calcium", value: "40 mg" },
  { label: "Vitamin B6", value: "1.5 mg" },
  { label: "Vitamin B12", value: "2.4 mcg" },
];

const NUTRITION_ORIGINAL2: NutritionRow[] = [
  { label: "Calories", value: "70 kcal" },
  { label: "Total Carbohydrates", value: "15 g" },
  { label: "Natural Sugars", value: "7 g" },
  { label: "Caffeine (Natural)", value: "30 mg" },
  { label: "Potassium", value: "180 mg" },
  { label: "Calcium", value: "40 mg" },
  { label: "Vitamin B6", value: "1.5 mg" },
  { label: "Vitamin B12", value: "4.4 mcg" },
];

const SLIDES: Slide[] = [
  {
    flavor: "Original Flavor",
    canImage: "/image/coffee.webp",
    nutrition: NUTRITION_ORIGINAL,
    punchline_first: "Fuel Your",
    punchline_second: "Wilder",
  },
  {
    flavor: "Lemon Flavor", // rename
    canImage: "/image/lemon.webp",
    nutrition: NUTRITION_ORIGINAL2, // replace with this flavor's values
    punchline_first: "Break the",
    punchline_second: "Boring",
  },
];
/* -------------------------------------------------------- */

const SWIPE_THRESHOLD_PX = 50;

function Arrow({ dir }: { dir: "left" | "right" }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d={dir === "left" ? "M15 5l-7 7 7 7" : "M9 5l7 7-7 7"}
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowButton({
  dir,
  onClick,
}: {
  dir: "left" | "right";
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={dir === "left" ? "Previous flavor" : "Next flavor"}
      className="flex h-11 w-11 items-center justify-center rounded-full border border-white/50 bg-black/20 backdrop-blur-sm transition hover:border-red-500 hover:bg-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white md:h-[52px] md:w-[52px]"
    >
      <Arrow dir={dir} />
    </button>
  );
}

/**
 * One flavor slide.
 *
 * Layout (mobile-first):
 *  - < md   : single column  → can + tagline, then flavor + nutrition
 *  - md–xl  : two columns    → info | (can over tagline)
 *  - xl+    : three columns  → info | can | tagline
 *
 * The "hero" wrapper uses `xl:contents` so its children join the parent grid
 * only when there is room for three columns.
 */
function SlideView({
  slide,
  active,
  label,
}: {
  slide: Slide;
  active: boolean;
  label: string;
}) {
  return (
    <div
      role="group"
      aria-roledescription="slide"
      aria-label={label}
      aria-hidden={!active}
      className={`col-start-1 row-start-1 grid w-full items-center gap-x-8 gap-y-8 transition-opacity duration-700 motion-reduce:transition-none md:grid-cols-2 xl:grid-cols-[minmax(320px,440px)_1fr_minmax(280px,440px)] ${
        active ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      {/* HERO: can + tagline */}
      <div className="flex flex-col items-center md:col-start-2 md:row-start-1 xl:contents">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={slide.canImage}
          alt={`Enarj ${slide.flavor} can`}
          className={`h-[34svh] max-h-[360px] w-auto rotate-[14deg] object-contain drop-shadow-[0_30px_60px_rgba(255,40,20,0.35)] transition-all duration-700 motion-reduce:transition-none md:h-[44svh] md:max-h-none xl:col-start-2 xl:row-start-1 xl:h-[68svh] translate-x-0 lg:translate-x-15 ${
            active ? "translate-y-0 scale-100" : "translate-y-8 scale-90"
          }`}
        />

        {/* <div
          className={`mb-6 mt-10 w-fit -rotate-3 tracking-wider transition-all duration-700 motion-reduce:transition-none md:-rotate-6 xl:col-start-3 xl:row-start-1 xl:mb-0 xl:mt-0 xl:-rotate-[12deg] xl:justify-self-end xl:self-end xl:pb-[8svh] ${
            active ? "translate-x-0" : "translate-x-8"
          }`}
        >
          <p className="font-raleway -skew-x-6 text-[clamp(2.25rem,5.5vw,4.25rem)] font-semibold uppercase leading-none text-white">
            {slide.punchline_first}
          </p>
          <p className="font-bingo-italic relative mt-2 -skew-x-4 text-[clamp(2.25rem,5.5vw,4.25rem)] font-bold uppercase leading-none tracking-wider text-red-600 md:mt-3">
            {slide.punchline_second}
            <span className="absolute -bottom-3 left-0 h-1 w-[62%] -rotate-2 rounded-full bg-red-600 md:-bottom-4 md:h-[6px] xl:-bottom-6" />
          </p>
        </div> */}
      </div>

      {/* INFO: flavor + nutrition */}
      <div
        className={`flex flex-col items-center text-center transition-all duration-700 motion-reduce:transition-none md:col-start-1 md:row-start-1 md:items-start md:text-left ${
          active ? "translate-x-0" : "-translate-x-8"
        }`}
      >
        <h2 className="text-sm font-medium uppercase tracking-[0.3em] text-white/95 sm:text-base md:text-lg">
          {slide.flavor}
        </h2>
        <span className="mt-3 block h-1 w-14 bg-red-600 md:h-[5px] md:w-[68px]" />

        <div className="mt-6 w-full max-w-[430px] rounded-2xl border border-white/25 bg-black/45 px-5 py-4 text-left backdrop-blur-md sm:px-7 sm:py-6 md:mt-8">
          <div className="flex items-baseline justify-between gap-3 border-b border-white/25 pb-3 sm:pb-4">
            <h3 className="text-base font-bold uppercase sm:text-lg">
              Nutrition Facts
            </h3>
            <span className="whitespace-nowrap text-xs uppercase text-white/60 sm:text-sm">
              Per 250ml
            </span>
          </div>
          <ul>
            {slide.nutrition.map((row) => (
              <li
                key={row.label}
                className="flex items-center justify-between gap-4 border-b border-white/10 py-2 text-sm last:border-b-0 sm:text-[15px]"
              >
                <span className="text-white/90">{row.label}</span>
                <span className="whitespace-nowrap font-bold">{row.value}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function NaturalEnergyShowcase() {
  const [index, setIndex] = useState(0);
  const touchStart = useRef<{ x: number; y: number } | null>(null);
  const count = SLIDES.length;

  const next = useCallback(() => setIndex((i) => (i + 1) % count), [count]);
  const prev = useCallback(
    () => setIndex((i) => (i - 1 + count) % count),
    [count],
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev]);

  const onTouchStart = (e: React.TouchEvent) => {
    const t = e.touches[0];
    touchStart.current = { x: t.clientX, y: t.clientY };
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    const start = touchStart.current;
    touchStart.current = null;
    if (!start) return;
    const t = e.changedTouches[0];
    const dx = t.clientX - start.x;
    const dy = t.clientY - start.y;
    // Horizontal, deliberate swipes only, so vertical scrolling never triggers it.
    if (
      Math.abs(dx) > SWIPE_THRESHOLD_PX &&
      Math.abs(dx) > Math.abs(dy) * 1.5
    ) {
      if (dx < 0) next();
      else prev();
    }
  };

  return (
    <section
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      className={`${bodyFont.className} relative isolate min-h-svh w-full touch-pan-y overflow-hidden bg-black text-white`}
    >
      {/* Responsive background image */}
<div
  aria-hidden
  className="pointer-events-none absolute inset-0"
>
  <picture className="absolute inset-0 block h-full w-full">
    {/* Mobile */}
    <source
      media="(max-width: 767px)"
      srcSet="/image/bgStats.jpeg"
    />

    {/* Desktop / larger screens */}
    <source
      media="(min-width: 768px)"
      srcSet="/image/bgStats.jpeg"
    />

    <img
      src="/image/bgStats.jpeg"
      alt=""
      className="h-full w-full object-cover"
    />
  </picture>
</div>


      {/* Content: normal document flow, so the section grows on small screens */}
      <div className="relative z-10 mx-auto flex min-h-svh w-full max-w-[1680px] flex-col px-5 pb-4 pt-5 sm:px-8 md:pt-8 xl:px-[4.5%] xl:pt-12">
        <header className="flex items-center justify-between gap-4">
          <div className="w-fit bg-red-600 px-4 py-1.5 sm:px-5 sm:py-2 md:px-6 md:py-3">
            <span
              className={`${logoFont.className} block text-4xl leading-none tracking-tight text-white sm:text-5xl md:text-[66px]`}
            >
              ENARJ
            </span>
          </div>

          <div className="flex gap-3">
            <ArrowButton dir="left" onClick={prev} />
            <ArrowButton dir="right" onClick={next} />
          </div>
        </header>

        {/* Slides share one grid cell, so height = tallest slide (no absolute positioning) */}
        <div
          aria-roledescription="carousel"
          aria-label="Enarj flavors"
          className="grid flex-1 grid-cols-1 items-center py-8 md:py-10"
        >
          {SLIDES.map((slide, i) => (
            <SlideView
              key={slide.flavor}
              slide={slide}
              active={i === index}
              label={`${i + 1} of ${count}`}
            />
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center pb-2">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === index}
              className="flex h-6 items-center px-1"
            >
              <span
                className={`block h-2 rounded-full transition-all ${
                  i === index ? "w-8 bg-red-600" : "w-2 bg-white/50"
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
