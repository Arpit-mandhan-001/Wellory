"use client";

import React, { useState, useRef, useEffect } from "react";
import { Plus, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import gsap from "gsap";
import Image from "next/image";
import hexaImg from "@/public/images/hexa.jpg";
import { SplitText } from './SplitTextProps';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

// Fixed brand accent (does not follow the selected flavor)
const ACCENT_COLOR = "#ea2027";

const INTRO_TEXT =
  "TRANSPARENCY IN EVERY CAN. NO HIDDEN CHEMICALS, NO COMPROMISE. RECHARGING YOUR FOCUS WITH THE POWER OF RAW MEDJOOL DATES.";

const FAQ_ITEMS: FAQItem[] = [
  {
    id: "suitable",
    question: "IS ENARJ SUITABLE FOR EVERYONE?",
    answer:
      "WHILE GENERALLY SAFE FOR MOST ADULTS, CERTAIN INDIVIDUALS SHOULD EXERCISE CAUTION OR AVOID CONSUMING ENERGY DRINKS ALTOGETHER. PREGNANT OR NURSING WOMEN, INDIVIDUALS WITH CAFFEINE SENSITIVITY, THOSE WITH HEART CONDITIONS, HIGH BLOOD PRESSURE, OR CERTAIN MEDICAL CONDITIONS, AS WELL AS CHILDREN AND TEENAGERS, SHOULD CONSULT WITH THEIR HEALTHCARE PROVIDER BEFORE CONSUMING ENARJ DATES COLA ENERGY DRINK.",
  },
  {
    id: "caffeine",
    question: "HOW MUCH CAFFEINE?",
    answer:
      "ENARJ CONTAINS 80MG OF CLEAN, NATURAL CAFFEINE DERIVED EXCLUSIVELY FROM ORGANIC GREEN TEA EXTRACT PER 250ML CAN. THIS DELIVERS BALANCED, SUSTAINED FOCUS AND SHARP ENERGY WITHOUT ANY JITTERS, PALPITATIONS, OR ABRUPT AFTERNOON CRASHES TYPICAL OF SYNTHETIC CAFFEINE SOURCES.",
  },
  {
    id: "sweetness",
    question: "WHERE DOES THE SWEETNESS COME FROM?",
    answer:
      "100% OF OUR NATURAL SWEETNESS STEMS FROM SUN-RIPENED MEDJOOL DATES. WE NEVER ADD REFINED SUGARS, HIGH-FRUCTOSE CORN SYRUP, OR ARTIFICIAL SWEETENERS LIKE SUCRALOSE OR ASPARTAME. YOU GET WHOLE-FRUIT FIBER, POTASSIUM, AND ANTIOXIDANTS WITH EVERY DELICIOUS SIP.",
  },
  {
    id: "preservatives",
    question: "ARE THERE ANY ARTIFICIAL PRESERVATIVES?",
    answer:
      "ABSOLUTELY ZERO. ENARJ IS CRAFTED PURELY WITH CLEAN-LABEL BOTANICALS, WATER, DATES JUICE CONCENTRATE, ORGANIC ACIDS, AND VITAMINS (B3, B6, B12). IT IS 100% VEGAN, NON-GMO, GLUTEN-FREE, AND PACKAGED IN INFINITELY RECYCLABLE ALUMINUM CANS.",
  },
];

export const WhatsInsideSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>("suitable"); // First item open by default matching reference UI

  // Scroll-in intro (plays once): headline letters rise in, then the intro column and the FAQ rows
  // (which slide in from the right one by one) follow
  const sectionRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        paused: true,
        defaults: { ease: "power3.out" },
      });
      tl.fromTo(
        ".wi-brand-letter",
        { y: "110%", opacity: 0 },
        { y: "0%", opacity: 1, stagger: 0.05, duration: 0.7 },
        0,
      )
        .fromTo(
          ".wi-title-letter",
          { y: "110%", opacity: 0 },
          { y: "0%", opacity: 1, stagger: 0.05, duration: 0.8 },
          0.5,
        )
        .fromTo(
          ".wi-bar",
          { scaleX: 0, transformOrigin: "0% 50%" },
          { scaleX: 1, duration: 0.7, transformOrigin: "0% 50%" },
          1.1,
        )
        .fromTo(
          ".wi-desc-letter",
          { y: 8, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.01,
            duration: 0.35,
            ease: "power2.out",
          },
          1.3,
        )
        .fromTo(
          ".wi-batch",
          { y: 16, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7 },
          2.6,
        )
        .fromTo(
          ".wi-item",
          { x: 70, opacity: 0 },
          { x: 0, opacity: 1, stagger: 0.18, duration: 0.7 },
          1.2,
        );

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            tl.play();
            observer.disconnect();
          }
        },
        { threshold: 0.2 },
      );
      observer.observe(section);
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      ref={sectionRef}
      id="whats-inside"
      className="relative isolate w-full bg-[#111111] text-white py-24 md:py-32 px-6 sm:px-10 lg:px-16 overflow-hidden border-t border-white/10 select-none"
      // className="relative w-full bg-[#08080a] text-white py-24 md:py-32 px-6 sm:px-10 lg:px-16 overflow-hidden border-t border-white/10 select-none"
    >
      {/* Hexagon pattern background. The image is white with grey lines, so it is inverted (black
          with light lines) and screen-blended: the black disappears into the dark section and only
          the faint lines remain. Change opacity-[0.07] to make the pattern stronger or fainter. */}
      <Image
        src={"/image/hexa.jpg"}
        alt=""
        fill
        sizes="100vw"
        quality={60}
        className="pointer-events-none -z-10 object-cover invert mix-blend-screen opacity-[0.02]"
      />

      {/* Ambient background glow subtle lighting */}
      <div
        className="absolute top-1/4 -right-48 w-96 h-96 rounded-full blur-[140px] pointer-events-none opacity-20 -z-10"
        style={{ backgroundColor: ACCENT_COLOR }}
      />
      <div className="absolute -bottom-24 -left-48 w-96 h-96 rounded-full bg-red-950/20 blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* ================= HEADER AREA (MATCHING REFERENCE UI) ================= */}
        <div className="mb-16 md:mb-24">
          {/* Top Line: Brand Heading + Oval Badge */}
          <div className="flex items-center gap-4 sm:gap-6 mb-2 sm:mb-3 flex-wrap">
            <h2
              className="overflow-hidden py-1 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black font-display tracking-tight uppercase"
              style={{ color: ACCENT_COLOR }}
            >
              <SplitText text="WELLORY" letterClass="wi-brand-letter" />
            </h2>
          </div>

          {/* Bottom Line: Giant Bold Display WHAT'S INSIDE */}
          <h3 className="overflow-hidden py-1 text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-display tracking-tight text-white uppercase leading-none">
            <SplitText text="WHAT'S INSIDE" letterClass="wi-title-letter" />
          </h3>
        </div>

        {/* ================= ACCORDION AREA (OFFSET TO RIGHT / 2-COLUMN GRID) ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column Spacer / Contextual Brand Statement */}
          <div className="lg:col-span-4 hidden lg:block pr-6">
            <div className="sticky top-32 space-y-6">
              <div
                className="wi-bar w-12 h-1 rounded-full"
                style={{ backgroundColor: ACCENT_COLOR }}
              />
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed uppercase  tracking-wide">
                <SplitText text={INTRO_TEXT} letterClass="wi-desc-letter" />
              </p>
              <div className="wi-batch opacity-0 pt-4 flex items-center gap-3">
                <span className="text-[12px] tracking-[0.25em] font-bold text-zinc-500 uppercase">
                  BATCH CERTIFIED
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[12px] tracking-[0.25em] font-bold text-emerald-400 uppercase">
                  100% PURE
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Accordion List */}
          <div className="lg:col-span-8 space-y-0">
            {FAQ_ITEMS.map((item) => {
              const isOpen = openId === item.id;

              return (
                <div
                  key={item.id}
                  className="wi-item opacity-0 border-b border-white/15 transition-colors duration-200"
                >
                  {/* Accordion Trigger Header */}
                  <button
                    type="button"
                    onClick={() => toggleItem(item.id)}
                    className="w-full py-6 sm:py-7 flex items-center justify-between gap-4 text-left group cursor-pointer focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span
                      className={`text-lg sm:text-xl md:text-3xl font-medium font-display tracking-wide uppercase transition-colors duration-200 ${
                        isOpen ? "" : "text-white group-hover:text-zinc-200"
                      }`}
                      style={{ color: isOpen ? ACCENT_COLOR : undefined }}
                    >
                      {item.question}
                    </span>

                    {/* Toggle Icon (+ / ✕) */}
                    <div
                      className={`shrink-0 w-8 h-8 flex items-center justify-center rounded-full transition-transform duration-300 ${
                        isOpen ? "rotate-90" : "rotate-0"
                      }`}
                      style={{ color: isOpen ? ACCENT_COLOR : "#ffffff" }}
                    >
                      {isOpen ? (
                        <X size={22} className="stroke-[2.5]" />
                      ) : (
                        <Plus
                          size={22}
                          className="stroke-[2.5] text-zinc-300 group-hover:text-white"
                        />
                      )}
                    </div>
                  </button>

                  {/* Accordion Expanded Answer Body */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          duration: 0.35,
                          ease: [0.04, 0.62, 0.23, 0.98],
                        }}
                        className="overflow-hidden"
                      >
                        <div className="pb-7 sm:pb-8 pt-1 pr-4 sm:pr-8">
                          <p className="text-zinc-200 text-xs sm:text-[14px] md:text-base leading-relaxed  uppercase tracking-wider">
                            {item.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
