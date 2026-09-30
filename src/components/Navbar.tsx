"use client"

import { Menu } from 'lucide-react'
import React, { useState } from 'react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="relative flex justify-between items-center pl-7 pr-7 pt-4 pb-4 bg-transparent border-b border-white/20">

      <div className="text-2xl font-semibold tracking-widest font-bingo-regular">
        WELLORY
      </div>

      <div className="flex items-center gap-8 lg:gap-40">

        <div
          className={`
            absolute md:static
            top-full left-0
            w-full md:w-auto
            md:bg-transparent
            flex flex-col md:flex-row
            items-center
            mr-10
            gap-8 md:gap-30
            py-8 md:py-0
            shadow-md md:shadow-none
            transition-all duration-500 ease-in-out
            ${isOpen
              ? "opacity-100 translate-y-0 visible"
              : "opacity-0 -translate-y-5 invisible md:opacity-100 md:translate-y-0 md:visible"
            }
          `}
        >
          <div className="scroll-smooth flex flex-col md:flex-row gap-6 md:gap-24 text-white font-bold">
            <a
              href="#nature-power"
              className="transition-all duration-300 hover:text-black hover:-translate-y-0.5"
            >
              Product
            </a>

            <a
              href="#story"
              className="transition-all duration-300 hover:text-black hover:-translate-y-0.5"
            >
              Story
            </a>

            <a
              href="#shop"
              className="transition-all duration-300 hover:text-black hover:-translate-y-0.5"
            >
              Shop
            </a>
          </div>

        
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col gap-1.5 z-50 text-white"
          aria-label="Toggle menu"
        >
          <Menu />
        </button>
      </div>
    </nav>
  )
}

export default Navbar