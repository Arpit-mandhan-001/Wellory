"use client";

import { Menu, X } from "lucide-react";
import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav
      className="
        relative z-50
        flex items-center justify-between
        px-5 py-3
        md:px-7 md:py-4
        bg-transparent
        backdrop-blur-[1px]
      "
    >
      {/* Logo */}
      <div className="ml-1 px-2 py-1 md:ml-4">
        <a href="/">
          <img
            src="/image/glossylogo.png"
            alt="WELLORY"
            className="h-11 w-auto rounded-xs object-contain md:h-23"
          />
        </a>
      </div>

      {/* Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="
          relative z-[60]
          flex h-13 w-13
          items-center justify-center
          rounded-full
          border border-white/20
          bg-black/70
          text-white
          backdrop-blur-md
          transition-all duration-300
          hover:bg-black/40
          active:scale-95
        "
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
      >
        <span
          className="
            transition-all duration-300
            ease-[cubic-bezier(0.22,1,0.36,1)]
          "
        >
          {isOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </span>
      </button>

      {/* Menu */}
      <div
        className={`
          absolute right-4
          top-[calc(100%+10px)]
          sm:top-[calc(100%+10px)]
          md:top-[calc(100%-20px)]
          z-50
          w-[calc(100%-2rem)]
          max-w-sm
          origin-top-right

          transition-all
          duration-300
          ease-[cubic-bezier(0.22,1,0.36,1)]

          ${
            isOpen
              ? "visible translate-y-0 scale-100 opacity-100"
              : "invisible -translate-y-2 scale-[0.98] opacity-0"
          }
        `}
      >
        <div
          className="
            overflow-hidden
            rounded-2xl
            border border-white/15
            bg-black/80
            p-3
            shadow-2xl
            backdrop-blur-xl
          "
        >
          {/* Header */}
          <div
            className="
              mb-2
              flex items-center justify-between
              border-b border-white/10
              px-4 pb-3
            "
          >
            <span
              className="
                text-xs
                font-medium
                uppercase
                tracking-[0.25em]
                text-white/50
              "
            >
              Explore
            </span>
          </div>

          {/* Links */}
          <div className="flex flex-col">
            <a
              href="/#nature-power"
              onClick={closeMenu}
              className={`
                group flex items-center justify-between
                rounded-xl
                px-4 py-4
                text-base font-semibold
                text-white
                transition-all duration-300
                ease-out
                hover:bg-white/10
                active:bg-white/15

                ${
                  isOpen
                    ? "translate-y-0 opacity-100"
                    : "translate-y-1 opacity-0"
                }
              `}
              style={{
                transitionDelay: isOpen ? "60ms" : "0ms",
              }}
            >
              <span>Product</span>

              <span className="text-white/30 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-white">
                →
              </span>
            </a>

            <a
              href="/about-us"
              onClick={closeMenu}
              className={`
                group flex items-center justify-between
                rounded-xl
                px-4 py-4
                text-base font-semibold
                text-white
                transition-all duration-300
                ease-out
                hover:bg-white/10
                active:bg-white/15

                ${
                  isOpen
                    ? "translate-y-0 opacity-100"
                    : "translate-y-1 opacity-0"
                }
              `}
              style={{
                transitionDelay: isOpen ? "100ms" : "0ms",
              }}
            >
              <span>About Us</span>

              <span className="text-white/30 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-white">
                →
              </span>
            </a>

            <a
              href="#shop"
              onClick={closeMenu}
              className={`
                group flex items-center justify-between
                rounded-xl
                px-4 py-4
                text-base font-semibold
                text-white
                transition-all duration-300
                ease-out
                hover:bg-white/10
                active:bg-white/15

                ${
                  isOpen
                    ? "translate-y-0 opacity-100"
                    : "translate-y-1 opacity-0"
                }
              `}
              style={{
                transitionDelay: isOpen ? "140ms" : "0ms",
              }}
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
