"use client";

import { Menu, X } from "lucide-react";
import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="relative z-50 flex items-center justify-between bg-[#350303]/30 px-5 py-3 md:px-7 md:py-4">
      {/* Logo */}
      <div className="ml-1 rounded-xl px-2 py-1 md:ml-4">
        <img
          src="/image/Logo2.png"
          alt="WELLORY"
          className="h-11 w-auto object-contain md:h-12"
        />
      </div>

      {/* Desktop Navigation */}
      <div className="hidden items-center md:flex">
        <div className="flex items-center gap-16 text-white font-bold lg:gap-24">
          <a
            href="#nature-power"
            className="transition-all duration-300 hover:-translate-y-0.5 hover:text-[#f5d6b3]"
          >
            Product
          </a>

          <a
            href="#story"
            className="transition-all duration-300 hover:-translate-y-0.5 hover:text-[#f5d6b3]"
          >
            Story
          </a>

          <a
            href="#shop"
            className="transition-all duration-300 hover:-translate-y-0.5 hover:text-[#f5d6b3]"
          >
            Shop
          </a>
        </div>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative z-[60] flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition-all duration-300 hover:bg-white/20 active:scale-95 md:hidden"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
      >
        {isOpen ? (
          <X className="h-5 w-5" />
        ) : (
          <Menu className="h-5 w-5" />
        )}
      </button>

      {/* Mobile Backdrop */}
      <div
        onClick={closeMenu}
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-[2px] transition-all duration-300 md:hidden ${
          isOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      />

      {/* Mobile Menu */}
      <div
        className={`absolute right-4 top-[calc(100%+10px)] z-50 w-[calc(100%-2rem)] max-w-sm origin-top-right transition-all duration-300 ease-out md:hidden ${
          isOpen
            ? "visible translate-y-0 scale-100 opacity-100"
            : "invisible -translate-y-3 scale-95 opacity-0"
        }`}
      >
        <div className="overflow-hidden rounded-2xl border border-white/15 bg-black/95 p-3 shadow-2xl backdrop-blur-xl">
          {/* Small header */}
          <div className="mb-2 flex items-center justify-between border-b border-white/10 px-4 pb-3">
            <span className="text-xs font-medium uppercase tracking-[0.25em] text-white/50">
              Explore
            </span>
          </div>

          {/* Links */}
          <div className="flex flex-col">
            <a
              href="#nature-power"
              onClick={closeMenu}
              className="group flex items-center justify-between rounded-xl px-4 py-4 text-base font-semibold text-white transition-all duration-200 hover:bg-white/10 active:bg-white/15"
            >
              <span>Product</span>
              <span className="text-white/30 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-white">
                →
              </span>
            </a>

            <a
              href="#story"
              onClick={closeMenu}
              className="group flex items-center justify-between rounded-xl px-4 py-4 text-base font-semibold text-white transition-all duration-200 hover:bg-white/10 active:bg-white/15"
            >
              <span>Story</span>
              <span className="text-white/30 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-white">
                →
              </span>
            </a>

            <a
              href="#shop"
              onClick={closeMenu}
              className="group flex items-center justify-between rounded-xl px-4 py-4 text-base font-semibold text-white transition-all duration-200 hover:bg-white/10 active:bg-white/15"
            >
              <span>Shop</span>
              <span className="text-white/30 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-white">
                →
              </span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
