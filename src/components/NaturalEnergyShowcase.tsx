"use client";

import { useCallback, useEffect, useState } from "react";
import { Archivo_Black, Permanent_Marker, Inter } from "next/font/google";

const logoFont = Archivo_Black({ weight: "400", subsets: ["latin"] });
const brushFont = Permanent_Marker({ weight: "400", subsets: ["latin"] });
const bodyFont = Inter({ subsets: ["latin"] });

/* ---------------- PASTE YOUR LINKS HERE ---------------- */
const VIDEO_URL = "/video/video1.m4";

type Slide = {
  flavor: string;
  canImage: string;
  nutrition: { label: string; value: string }[];
  punchline_first: string;
  punchline_second: string;
};

const NUTRITION_ORIGINAL = [
  { label: "Calories", value: "90 kcal" },
  { label: "Total Carbohydrates", value: "20 g" },
  { label: "Natural Sugars", value: "15 g" },
  { label: "Caffeine (Natural)", value: "30 mg" },
  { label: "Potassium", value: "180 mg" },
  { label: "Calcium", value: "40 mg" },
  { label: "Vitamin B6", value: "1.5 mg" },
  { label: "Vitamin B12", value: "2.4 mcg" },
];

const NUTRITION_ORIGINAL2 = [
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
    canImage: "/image/coffee.png",
    nutrition: NUTRITION_ORIGINAL,
    punchline_first: "Fuel Your",
    punchline_second: "Fire",
  },
  {
    flavor: "Lemon Flavor", // rename
    canImage: "/image/lemon.png",
    nutrition: NUTRITION_ORIGINAL2, // replace with this flavor's values
    punchline_first: "Make You",
    punchline_second: "Wilder",
  },
];
/* -------------------------------------------------------- */

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

export default function NaturalEnergyShowcase() {
  const [index, setIndex] = useState(0);
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

  return (
    <section
      className={`${bodyFont.className} relative h-screen min-h-[640px] w-full overflow-hidden bg-black text-white`}
    >
      {/* Background video */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src={VIDEO_URL}
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="absolute inset-0 bg-black/55" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(220,20,20,0.25),transparent_60%)]" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-black/40" />

      {/* Arrows */}
      <div className="absolute right-6 top-6 z-30 flex gap-3 md:right-12 md:top-[70px]">
        {(["left", "right"] as const).map((d) => (
          <button
            key={d}
            onClick={d === "left" ? prev : next}
            aria-label={d === "left" ? "Previous flavor" : "Next flavor"}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-white/50 bg-black/20 backdrop-blur-sm transition hover:border-red-500 hover:bg-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white md:h-[52px] md:w-[52px]"
          >
            <Arrow dir={d} />
          </button>
        ))}
      </div>

      {/* Slides */}
      {SLIDES.map((slide, i) => {
        const active = i === index;
        return (
          <div
            key={slide.flavor + i}
            aria-hidden={!active}
            className={`absolute inset-0 transition-opacity duration-700 ${
              active ? "z-10 opacity-100" : "pointer-events-none z-0 opacity-0"
            }`}
          >
            <div className="mx-auto grid h-full max-w-[1680px] grid-cols-1 items-center gap-6 px-6 pb-10 pt-24 md:grid-cols-[minmax(320px,440px)_1fr_minmax(320px,480px)] md:px-[4.5%] md:pt-0">
              {/* LEFT: logo + nutrition */}
              <div
                className={`order-2 flex flex-col transition-all duration-700 md:order-1 ${
                  active ? "translate-x-0" : "-translate-x-16"
                }`}
              >
                <div className="w-fit bg-red-600 px-5 py-2 md:px-6 md:py-3 translate-x-3 -translate-y-10">
                  <span
                    className={`${logoFont.className} block text-5xl leading-none tracking-tight text-white md:text-[66px]`}
                  >
                    ENARJ
                  </span>
                </div>

                <p className="mt-4 pl-3 text-lg font-medium uppercase tracking-[0.35em] text-white/95 md:text-[18px] -translate-y-10">
                  {slide.flavor}
                </p>
                <span className="ml-3 mt-3 block h-[5px] w-[68px] bg-red-600 -translate-y-10" />

                <div className="mt-8 w-full max-w-[430px] rounded-2xl border border-white/25 bg-black/45 px-7 py-6 backdrop-blur-md">
                  <div className="flex items-baseline justify-between border-b border-white/25 pb-4">
                    <h3 className="text-lg font-bold uppercase">
                      Nutrition Facts
                    </h3>
                    <span className="text-sm uppercase text-white/60">
                      Per 250ml
                    </span>
                  </div>
                  <ul>
                    {slide.nutrition.map((row) => (
                      <li
                        key={row.label}
                        className="flex items-center justify-between border-b border-white/10 py-2 text-[15px] last:border-b-0"
                      >
                        <span className=" text-white/90">{row.label}</span>
                        <span className="font-bold">{row.value}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* CENTER: can */}
              <div className="order-1 flex items-center justify-center md:order-2">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={slide.canImage}
                  alt={`Enarj ${slide.flavor} can`}
                  className={`h-[38vh] w-auto rotate-[14deg] object-contain drop-shadow-[0_30px_60px_rgba(255,40,20,0.35)] transition-all duration-700 md:h-[82vh] ${
                    active
                      ? "translate-y-0 scale-100"
                      : "translate-y-10 scale-90"
                  }`}
                />
              </div>

              {/* RIGHT: tagline */}

              <div
                className={`absolute top-130 right-4 tracking-wider order-3 -rotate-15 transition-all duration-700 md:pl-4 ${
                  active ? "translate-x-0" : "translate-x-16"
                }`}
              >
                <p
                  className={`${brushFont.className} -skew-x-6 text-5xl uppercase leading-none text-white md:text-[74px] mb-5`}
                >
                  {slide.punchline_first}
                </p>

                <p
                  className={`${brushFont.className} relative -skew-x-4 text-[75px] uppercase leading-none text-red-600`}
                >
                  {slide.punchline_second}

                  <span className="absolute -bottom-3 left-0 h-[6px] w-[62%] -rotate-2 rounded-full bg-red-600" />
                </p>
              </div>
            </div>
          </div>
        );
      })}

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 z-30 flex -translate-x-1/2 gap-2">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2 rounded-full transition-all ${
              i === index ? "w-8 bg-red-600" : "w-2 bg-white/50"
            }`}
          />
        ))}
      </div>
      
    </section>
  );
}
