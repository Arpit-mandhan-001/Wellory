"use client";

import { useState, useEffect, useRef } from "react";
import HeroSection1 from "./HeroSection1";
import HeroSection2 from "./HeroSection2";
import Navbar from "./Navbar";

export default function HomeControl() {
  const [currentPage, setCurrentPage] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const intervalRef = useRef(null);

  // --------------------------------------------------
  // MANUAL NEXT
  // --------------------------------------------------
  const nextPage = () => {
    if (isAnimating) return;

    setIsAnimating(true);

    setCurrentPage((prev) => (prev === 0 ? 1 : 0));

    setTimeout(() => {
      setIsAnimating(false);
    }, 1000);
  };

  // --------------------------------------------------
  // MANUAL PREVIOUS
  // --------------------------------------------------
  const previousPage = () => {
    if (isAnimating) return;

    setIsAnimating(true);

    setCurrentPage((prev) => (prev === 0 ? 1 : 0));

    setTimeout(() => {
      setIsAnimating(false);
    }, 1000);
  };

  // --------------------------------------------------
  // AUTO SLIDE
  // --------------------------------------------------
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      if (isAnimating) return;

      /*
        IMPORTANT:

        Auto animation is always handled by the
        same direction.

        1 -> 2
        2 -> 1

        Both visually move RIGHT.
      */

      setIsAnimating(true);

      setTimeout(() => {
        setCurrentPage((prev) => (prev === 0 ? 1 : 0));
        setIsAnimating(false);
      }, 1000);
    }, 3000);

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [isAnimating]);

  return (
    <main className="relative min-h-screen overflow-hidden bg-black">

      {/* NAVBAR */}
      <div className="absolute inset-x-0 top-0 z-50">
        <Navbar />
      </div>

      {/* ==================================================
          HERO SLIDER
          ================================================== */}
      <div className="relative h-screen w-full overflow-hidden">

        {/* HERO 1 */}
        <div
          className={`
            absolute inset-0
            transition-transform
            duration-1000
            ease-[cubic-bezier(0.65,0,0.35,1)]
            ${
              currentPage === 0
                ? "translate-x-0"
                : "translate-x-full"
            }
          `}
        >
          <HeroSection1 />
        </div>

        {/* HERO 2 */}
        <div
          className={`
            absolute inset-0
            transition-transform
            duration-1000
            ease-[cubic-bezier(0.65,0,0.35,1)]
            ${
              currentPage === 1
                ? "translate-x-0"
                : "-translate-x-full"
            }
          `}
        >
          <HeroSection2 />
        </div>

      </div>

      {/* ==================================================
          CONTROLS
          ================================================== */}
      <div
        className="
          absolute top-88 right-8 z-50
          flex items-center gap-3
          max-sm:right-4
          max-sm:gap-2
        "
      >

        {/* PREVIOUS */}
        <button
          onClick={previousPage}
          disabled={isAnimating}
          aria-label="Previous hero"
          className="
            group
            flex h-12 w-12
            items-center justify-center
            rounded-full
            border border-white/20
            bg-black/30
            text-white
            backdrop-blur-xl
            transition-all duration-300
            hover:scale-110
            hover:border-white/50
            hover:bg-white
            hover:text-black
            active:scale-95
            disabled:pointer-events-none
            max-sm:h-10
            max-sm:w-10
          "
        >
          <span
            className="
              text-xl
              transition-transform
              duration-300
              group-hover:-translate-x-1
              max-sm:text-lg
            "
          >
            ←
          </span>
        </button>

        {/* NEXT */}
        <button
          onClick={nextPage}
          disabled={isAnimating}
          aria-label="Next hero"
          className="
            group
            flex h-12 w-12
            items-center justify-center
            rounded-full
            border border-white/20
            bg-amber-700/40
            text-white
            backdrop-blur-xl
            transition-all duration-300
            hover:scale-110
            hover:border-white/50
            hover:bg-white
            hover:text-black
            active:scale-95
            disabled:pointer-events-none
            max-sm:h-10
            max-sm:w-10
          "
        >
          <span
            className="
              text-xl
              transition-transform
              duration-300
              group-hover:translate-x-1
              max-sm:text-lg
            "
          >
            →
          </span>
        </button>

      </div>

    </main>
  );
}
