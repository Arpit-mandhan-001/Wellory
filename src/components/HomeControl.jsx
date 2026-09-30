"use client";

import { useState } from "react";
import HeroSection1 from "./HeroSection1";
import HeroSection2 from "./HeroSection2";
import Navbar from "./Navbar";

export default function HomeControl() {
  const [currentPage, setCurrentPage] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const changePage = (page) => {
    if (page === currentPage || isAnimating) return;

    setIsAnimating(true);
    setCurrentPage(page);

    setTimeout(() => {
      setIsAnimating(false);
    }, 900);
  };

  const nextPage = () => {
    changePage(currentPage === 0 ? 1 : 0);
  };

  const previousPage = () => {
    changePage(currentPage === 0 ? 1 : 0);
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-black">
      
      {/* HERO SLIDER */}
      <div
        className="flex h-screen w-[200%] transition-transform duration-[900ms] ease-[cubic-bezier(0.76,0,0.24,1)]"
        style={{
          transform: `translate3d(-${currentPage * 50}%, 0, 0)`,
        }}
      >
        {/* HERO 1 */}
        <div
          className={`relative h-screen w-1/2 shrink-0 transition-all duration-[900ms] ${
            currentPage === 0
              ? "scale-100 opacity-100"
              : "scale-[0.96] opacity-70"
          }`}
        >
          <HeroSection1 />
        </div>

        {/* HERO 2 */}
        <div
          className={`relative h-screen w-1/2 shrink-0 transition-all duration-[900ms] ${
            currentPage === 1
              ? "scale-100 opacity-100"
              : "scale-[0.96] opacity-70"
          }`}
        >
          <HeroSection2 />
        </div>
      </div>

      {/* BOTTOM RIGHT CONTROLS */}
      <div className="absolute top-88 right-8 z-50 flex items-center gap-3 max-sm:right-4 max-sm:gap-2">
        
        {/* PREVIOUS */}
        <button
          onClick={previousPage}
          disabled={isAnimating}
          aria-label="Previous hero"
          className="group flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-black/30 text-white backdrop-blur-xl transition-all duration-300 hover:scale-110 hover:border-white/50 hover:bg-white hover:text-black active:scale-95 disabled:pointer-events-none max-sm:h-10 max-sm:w-10"
        >
          <span className="text-xl transition-transform duration-300 group-hover:-translate-x-1 max-sm:text-lg">
            ←
          </span>
        </button>

        {/* NEXT */}
        <button
          onClick={nextPage}
          disabled={isAnimating}
          aria-label="Next hero"
          className="group flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-amber-700/40 text-white backdrop-blur-xl transition-all duration-300 hover:scale-110 hover:border-white/50 hover:bg-white hover:text-black active:scale-95 disabled:pointer-events-none max-sm:h-10 max-sm:w-10"
        >
          <span className="text-xl transition-transform duration-300 group-hover:translate-x-1 max-sm:text-lg">
            →
          </span>
        </button>

      </div>    

    </main>
  );
}
