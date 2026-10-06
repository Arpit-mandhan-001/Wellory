// "use client";

// import React, { useRef, useState, useEffect } from "react";
// import { motion } from "motion/react";
// import gsap from "gsap";
// import { SplitText } from "./SplitTextProps";
// import CANHero from "./CANHero";
// import CANHero1 from "./CANHero1";

// interface FeatureItem {
//   id: string;
//   badge: string;
//   title: string;
//   description: string;
// }

// // Connector lines. Coordinates live in a fixed 1152x780 design space (the lg layout).
// // The SVG below uses a matching viewBox, so the lines scale with the frame at every width.
// const CONNECTORS = [
//   { id: "f1", d: "M 480,230 L 450,180 L 310,180", dot: { cx: 480, cy: 230 } },
//   { id: "f2", d: "M 740,250 L 790,180 L 940,180", dot: { cx: 740, cy: 250 } },
//   { id: "f3", d: "M 520,630 L 480,710 L 310,710", dot: { cx: 520, cy: 630 } },
//   { id: "f4", d: "M 740,630 L 790,720 L 940,720", dot: { cx: 740, cy: 630 } },
// ];

// // Shared responsive text classes
// const BADGE =
//   "opacity-0 inline-flex items-center justify-center border border-zinc-900/30 rounded-full px-3 py-0.5 text-[14px] min-[480px]:text-[16px] lg:text-[18px] font-medium text-zinc-800 uppercase";
// const TITLE =
//   "text-[16px] min-[400px]:text-lg sm:text-xl lg:text-2xl font-medium font-display tracking-wide text-zinc-900 uppercase leading-tight";
// const DESC =
//   "text-zinc-700 font-raleway font-bold text-[12px] min-[400px]:text-[13px] sm:text-[14px] lg:text-[16px] leading-relaxed uppercase";

// export const NaturePowerSection: React.FC = () => {
//   const sectionRef = useRef<HTMLElement>(null);
//   const [hoveredId, setHoveredId] = useState<string | null>(null);

//   const features: FeatureItem[] = [
//     {
//       id: "f1",
//       badge: "001",
//       title: "ENERGY THAT DOES MORE",
//       description:
//         "ENARJ COLA ENERGY DRINK BLENDS THE CLASSIC TASTE OF COLA WITH THE NATURAL GOODNESS OF MEDJOOL DATES, CREATING A REFRESHING ENERGY DRINK FOR AN ACTIVE LIFESTYLE",
//     },
//     {
//       id: "f2",
//       badge: "002",
//       title: "SUPPORTS FAT METABOLISM",
//       description:
//         "CRAFTED WITH DATE-BASED INGREDIENTS, ENARJ IS DESIGNED TO SUPPORT METABOLIC ACTIVITY AND FAT METABOLISM WHILE HELPING YOU STAY ENERGIZED AND ACTIVE.",
//     },
//     {
//       id: "f3",
//       badge: "003",
//       title: "TESTOSTERONE SUPPORT",
//       description:
//         "ENARJ COMBINES THE NATURAL GOODNESS OF DATES WITH A FUNCTIONAL ENERGY FORMULA DESIGNED TO SUPPORT HEALTHY TESTOSTERONE LEVELS, ENERGY, AND DAILY PERFORMANCE.",
//     },
//     {
//       id: "f4",
//       badge: "004",
//       title: "ENHANCED FOCUS AND ALERTNESS",
//       description:
//         "BEYOND ITS DELIGHTFUL TASTE, ENARJ COLA ENERGY DRINK IS FORMULATED WITH ESSENTIAL B VITAMINS, INCLUDING B3, B6, AND B12, TO SUPPORT MENTAL ALERTNESS AND DAILY FOCUS.",
//     },
//   ];

//   // Scroll-in intro (plays once): dates rise from the bottom -> then for each callout in turn:
//   // dot, line drawing from the image toward the text, badge, then title + description letter by letter
//   useEffect(() => {
//     const section = sectionRef.current;
//     if (!section) return;

//     const ctx = gsap.context(() => {
//       section
//         .querySelectorAll<SVGPathElement>(".np-line-mask")
//         .forEach((path) => {
//           const len = path.getTotalLength();
//           path.style.strokeDasharray = `${len}`;
//           path.style.strokeDashoffset = `${len}`;
//         });

//       const tl = gsap.timeline({
//         paused: true,
//         defaults: { ease: "power3.out" },
//       });

//       tl.fromTo(
//         ".np-image",
//         { y: 180, opacity: 0 },
//         { y: 0, opacity: 1, duration: 1.4 },
//         0,
//       );

//       CONNECTORS.forEach((_, i) => {
//         const t = 0.2 + i * 1.7;

//         tl.fromTo(
//           `.np-dot-${i}`,
//           { attr: { r: 0 }, opacity: 0 },
//           { attr: { r: 3.5 }, opacity: 1, duration: 0.4 },
//           t,
//         )
//           .to(
//             `.np-line-${i}`,
//             {
//               strokeDashoffset: 0,
//               duration: 0.8,
//               ease: "power2.inOut",
//             },
//             t + 0.2,
//           )
//           .fromTo(
//             `.np-badge-${i}`,
//             { scale: 0.6, opacity: 0 },
//             {
//               scale: 1,
//               opacity: 1,
//               duration: 0.5,
//               ease: "back.out(2)",
//             },
//             t + 0.8,
//           )
//           .fromTo(
//             `.np-l${i}`,
//             { y: 8, opacity: 0 },
//             {
//               y: 0,
//               opacity: 1,
//               stagger: 0.003,
//               duration: 0.35,
//               ease: "power2.out",
//             },
//             t + 0.9,
//           );
//       });

//       const observer = new IntersectionObserver(
//   ([entry]) => {
//     if (entry.isIntersecting) {
//       console.log("Nature Power animation triggered");
//       tl.play();
//       observer.disconnect();
//     }
//   },
//   {
//     threshold: 0.05,
//   },
// );

// observer.observe(section);


//       observer.observe(section);
//     }, sectionRef);

//     return () => ctx.revert();
//   }, []);

//   // Stepped tab SVG path for 1000x680 viewBox
//   const steppedPath =
//     "M 0,28 L 0,652 A 28 28 0 0 0 28 680 L 972 680 A 28 28 0 0 0 1000 652 L 1000 28 A 28 28 0 0 0 972 0 L 748 0 C 724 0, 724 46, 700 46 L 248 46 C 224 46, 224 0, 200 0 L 28 0 A 28 28 0 0 0 0 28 Z";

//   return (
//     <section
//       ref={sectionRef}
//       id="nature-power"
//       className="relative w-full bg-black text-white overflow-hidden select-none pt-10 pb-10"
//     >
//       <img
//         src="/image/bgLemon.png"
//         alt=""
//         className="absolute inset-0 w-full h-full object-cover"
//       />

//       {/* Subtle Background Ambience */}
//       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] max-w-[90vw] max-h-[70vh] bg-red-950/20 rounded-full blur-[160px] pointer-events-none -z-10 mt-10 mb-10" />

//       <div className="w-full flex flex-col items-center">
//         {/* ================= STEPPED FRAME CONTAINER ================= */}
//         {/* Mobile/tablet: height follows content (stacked layout). md+: fixed heights. */}
//         <div
//           className="
//             relative
//             w-[calc(100%-24px)]
//             sm:w-[calc(100%-32px)]
//             md:w-[calc(100%-48px)]
//             lg:w-full
//             max-w-6xl
//             h-auto
//             md:h-[750px]
//             lg:h-[780px]
//             mt-3
//             sm:mt-5
//             mb-3
//             sm:mb-5
//           "
//         >
//           {/* Stepped Frame SVG Background */}
//           {/* Glassy Stepped Frame Background */}
// <div className="absolute inset-0 w-full h-full pointer-events-none">
//   <svg
//     className="
//       w-full h-full opacity-100  rounded-2xl
//       filter drop-shadow-[0_25px_60px_rgba(0,0,0,0.45)]
//     "
//     viewBox="0 0 1000 680"
//     preserveAspectRatio="none"
//     aria-hidden="true"
//   >
//     <defs>
//       {/* Glass gradient */}
//       <linearGradient
//         id="steppedGlass"
//         x1="0%"
//         y1="0%"
//         x2="100%"
//         y2="100%"
//       >
//         <stop offset="0%" stopColor="rgba(255,255,255,0.16)" />
//         <stop offset="50%" stopColor="rgba(255,255,255,0.08)" />
//         <stop offset="100%" stopColor="rgba(255,255,255,0.04)" />
//       </linearGradient>

//       {/* Glass border */}
//       <linearGradient
//         id="steppedGlassBorder"
//         x1="0%"
//         y1="0%"
//         x2="100%"
//         y2="100%"
//       >
//         <stop offset="0%" stopColor="rgba(255,255,255,0.45)" />
//         <stop offset="50%" stopColor="rgba(255,255,255,0.15)" />
//         <stop offset="100%" stopColor="rgba(255,255,255,0.30)" />
//       </linearGradient>

//       {/* Soft inner glow */}
//       <filter id="glassGlow">
//         <feGaussianBlur
//           stdDeviation="12"
//           result="blur"
//         />
//         <feComposite
//           in="SourceGraphic"
//           in2="blur"
//           operator="over"
//         />
//       </filter>
//     </defs>

//     <path
//       d={steppedPath}
//       fill="url(#steppedGlass)"
//       stroke="url(#steppedGlassBorder)"
//       strokeWidth="1.5"
//       vectorEffect="non-scaling-stroke"
//       filter="url(#glassGlow)"
//     />
//   </svg>
// </div>


//           {/* ================= INSIDE THE FRAME: CONTENT & CALLOUTS ================= */}
//           <div
//             className="
//               relative
//               z-20
//               w-full
//               h-full
//               px-5
//               min-[480px]:px-6
//               sm:px-8
//               md:px-12
//               pt-14
//               min-[480px]:pt-16
//               sm:pt-20
//               pb-10
//               flex
//               flex-col
//               justify-between
//             "
//           >
//             {/* Central Splashing Dates Visual */}
//             <div
//               className="
//                 absolute
//                 inset-0
//                 flex
//                 items-center
//                 justify-center
//                 pointer-events-none
//                 z-10
//                 mr-0
//                 md:mr-8
//                 translate-y-36
//                 min-[480px]:translate-y-40
//                 sm:translate-y-44
//                 md:translate-y-70
//               "
//             >
//               <motion.div
//                 className="
//                   relative
//                   w-[270px]
//                   min-[400px]:w-[300px]
//                   min-[480px]:w-[340px]
//                   sm:w-[400px]
//                   md:w-[500px]
//                   lg:w-[710px]
//                   max-w-full
//                   aspect-square
//                   flex
//                   items-center
//                   justify-center
//                 "
//                 animate={{
//                   scale: [1, 1.02, 1],
//                 }}
//                 transition={{
//                   duration: 8,
//                   repeat: Infinity,
//                   ease: "easeInOut",
//                 }}
//               >
//                 {/* Radial Amber Backlight */}
//                 <div className="absolute w-56 h-56 sm:w-72 sm:h-72 rounded-full bg-amber-600/15 blur-3xl" />

//                 <div className="absolute w-48 h-48 sm:w-60 sm:h-60 rounded-full bg-red-600/15 blur-2xl" />

//                 {/* Back CAN */}
//                 <motion.div
//                   className="absolute z-0 scale-[0.72] min-[400px]:scale-[0.8] sm:scale-90 md:scale-100 translate-x-0 sm:translate-x-10 md:-translate-x-10"
//                   initial={{ rotate: 8, x: 45, y: -10 }}
//                   animate={{
//                     rotate: [8, 12, 8],
//                     x: [45, 54, 45],
//                     y: [-10, -13, -10],
//                   }}
//                   transition={{
//                     duration: 8,
//                     repeat: Infinity,
//                     ease: "easeInOut",
//                   }}
//                 >
//                   <CANHero1 />
//                 </motion.div>

//                 {/* Front CAN */}
//                 <motion.div
//                   className="absolute z-10 scale-[0.72] min-[400px]:scale-[0.8] sm:scale-90 md:scale-100 translate-x-0 sm:translate-x-16 md:-translate-x-15"
//                   initial={{ rotate: -6, x: -15, y: 15 }}
//                   animate={{
//                     rotate: [-6, -4, -6],
//                     x: [-15, -12, -15],
//                     y: [15, 12, 15],
//                   }}
//                   transition={{
//                     duration: 8,
//                     repeat: Infinity,
//                     ease: "easeInOut",
//                   }}
//                 >
//                   <CANHero />
//                 </motion.div>
//               </motion.div>
//             </div>

//             {/* Desktop SVG Connecting Lines — viewBox scales them with the frame */}
//             <svg
//               className="absolute inset-0 w-full h-full pointer-events-none z-15 hidden md:block"
//               viewBox="0 0 1152 780"
//               preserveAspectRatio="none"
//               aria-hidden="true"
//             >
//               <defs>
//                 {CONNECTORS.map((c, i) => (
//                   <mask
//                     key={c.id}
//                     id={`np-mask-${i}`}
//                     maskUnits="userSpaceOnUse"
//                     x="0"
//                     y="0"
//                     width="1152"
//                     height="780"
//                   >
//                     <path
//                       d={c.d}
//                       fill="none"
//                       stroke="#ffffff"
//                       strokeWidth="8"
//                       className={`np-line-mask np-line-${i}`}
//                     />
//                   </mask>
//                 ))}
//               </defs>

//               {CONNECTORS.map((c, i) => (
//                 <React.Fragment key={c.id}>
//                   <path
//                     d={c.d}
//                     fill="none"
//                     stroke="rgba(24,24,27,0.55)"
//                     strokeWidth="1.25"
//                     strokeDasharray={hoveredId === c.id ? "none" : "4 3"}
//                     vectorEffect="non-scaling-stroke"
//                     mask={`url(#np-mask-${i})`}
//                     className="transition-all duration-300"
//                   />

//                   <circle
//                     cx={c.dot.cx}
//                     cy={c.dot.cy}
//                     r="3.5"
//                     fill="#18181b"
//                     className={`np-dot-${i} opacity-0`}
//                   />
//                 </React.Fragment>
//               ))}
//             </svg>

//             {/* 4 Feature Callouts */}
//             <div
//               className="
//                 relative
//                 z-20
//                 w-full
//                 md:h-full
//                 grid
//                 grid-cols-1
//                 md:grid-cols-2
//                 gap-y-8
//                 min-[480px]:gap-y-10
//                 sm:gap-y-12
//                 md:gap-y-36
//                 justify-between
//               "
//             >
//               {/* 001: Top Left Callout */}
//               <div
//                 className="
//                   w-full
//                   max-w-full
//                   sm:max-w-[340px]
//                   md:max-w-[270px]
//                   space-y-2
//                   cursor-pointer
//                   transition-transform
//                   duration-200
//                   hover:translate-x-1
//                 "
//                 onMouseEnter={() => setHoveredId("f1")}
//                 onMouseLeave={() => setHoveredId(null)}
//               >
//                 <div className={`np-badge-0 ${BADGE}`}>{features[0].badge}</div>

//                 <h3 className={TITLE}>
//                   <SplitText text={features[0].title} letterClass="np-l0" />
//                 </h3>

//                 <p className={DESC}>
//                   <SplitText text={features[0].description} letterClass="np-l0" />
//                 </p>
//               </div>

//               {/* 002: Top Right Callout */}
//               <div
//                 className="
//                   w-full
//                   max-w-full
//                   sm:max-w-[340px]
//                   md:max-w-[280px]
//                   -space-y-2
//                   md:text-left
//                   md:ml-auto
//                   cursor-pointer
//                   transition-transform
//                   duration-200
//                   hover:-translate-x-1
//                 "
//                 onMouseEnter={() => setHoveredId("f2")}
//                 onMouseLeave={() => setHoveredId(null)}
//               >
//                 <div className={`np-badge-1 mb-2 ${BADGE}`}>{features[1].badge}</div>

//                 <h3 className={`${TITLE} mb-2`}>
//                   <SplitText text={features[1].title} letterClass="np-l1" />
//                 </h3>

//                 <p className={DESC}>
//                   <SplitText text={features[1].description} letterClass="np-l1" />
//                 </p>
//               </div>

//               {/* Mobile/tablet only: reserves room for the cans between the callouts */}
//               <div
//                 aria-hidden="true"
//                 className="md:hidden h-[300px] min-[480px]:h-[340px] sm:h-[400px]"
//               />

//               {/* 003: Bottom Left Callout */}
//               <div
//                 className="
//                   w-full
//                   max-w-full
//                   sm:max-w-[340px]
//                   md:max-w-[270px]
//                   space-y-2
//                   cursor-pointer
//                   transition-transform
//                   duration-200
//                   hover:translate-x-1
//                   mt-auto
//                 "
//                 onMouseEnter={() => setHoveredId("f3")}
//                 onMouseLeave={() => setHoveredId(null)}
//               >
//                 <div className={`np-badge-2 ${BADGE}`}>{features[2].badge}</div>

//                 <h3 className={TITLE}>
//                   <SplitText text={features[2].title} letterClass="np-l2" />
//                 </h3>

//                 <p className={DESC}>
//                   <SplitText text={features[2].description} letterClass="np-l2" />
//                 </p>
//               </div>

//               {/* 004: Bottom Right Callout */}
//               <div
//                 className="
//                   w-full
//                   max-w-full
//                   sm:max-w-[340px]
//                   md:max-w-[280px]
//                   space-y-2
//                   md:text-left
//                   md:ml-auto
//                   cursor-pointer
//                   transition-transform
//                   duration-200
//                   hover:-translate-x-1
//                   mt-auto
//                 "
//                 onMouseEnter={() => setHoveredId("f4")}
//                 onMouseLeave={() => setHoveredId(null)}
//               >
//                 <div className={`np-badge-3 ${BADGE}`}>{features[3].badge}</div>

//                 <h3 className={TITLE}>
//                   <SplitText text={features[3].title} letterClass="np-l3" />
//                 </h3>

//                 <p className={DESC}>
//                   <SplitText text={features[3].description} letterClass="np-l3" />
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion } from "motion/react";
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

// Connector lines. Coordinates live in a fixed 1152x780 design space (the lg layout).
// The SVG below uses a matching viewBox, so the lines scale with the frame at every width.
const CONNECTORS = [
  {
    id: "f1",
    d: "M 480,230 L 450,180 L 310,180",
    dot: { cx: 480, cy: 230 },
  },
  {
    id: "f2",
    d: "M 740,250 L 790,180 L 940,180",
    dot: { cx: 740, cy: 250 },
  },
  {
    id: "f3",
    d: "M 520,630 L 480,710 L 310,710",
    dot: { cx: 520, cy: 630 },
  },
  {
    id: "f4",
    d: "M 740,630 L 790,720 L 940,720",
    dot: { cx: 740, cy: 630 },
  },
];

// Shared responsive text classes
const BADGE =
  "opacity-0 inline-flex items-center justify-center border border-white/30 rounded-full px-3 py-0.5 text-[14px] bg-black min-[480px]:text-[16px] lg:text-[18px] font-medium text-white uppercase";

const TITLE =
  "font-bingo-italic font-bold text-[16px] min-[400px]:text-lg sm:text-xl lg:text-2xl font-display tracking-[0.05em] text-white uppercase leading-tight";

const DESC =
  "text-white/70 font-poppins font-normal text-[12px] min-[400px]:text-[13px] sm:text-[14px] lg:text-[16px] leading-relaxed uppercase";

export const NaturePowerSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const features: FeatureItem[] = [
    {
      id: "f1",
      badge: "001",
      title: "ENERGY THAT DOES MORE",
      description:
        "ENARJ COLA ENERGY DRINK BLENDS THE CLASSIC TASTE OF COLA WITH THE NATURAL GOODNESS OF MEDJOOL DATES, CREATING A REFRESHING ENERGY DRINK FOR AN ACTIVE LIFESTYLE",
    },
    {
      id: "f2",
      badge: "002",
      title: "SUPPORTS FAT METABOLISM",
      description:
        "CRAFTED WITH DATE-BASED INGREDIENTS, ENARJ IS DESIGNED TO SUPPORT METABOLIC ACTIVITY AND FAT METABOLISM WHILE HELPING YOU STAY ENERGIZED AND ACTIVE.",
    },
    {
      id: "f3",
      badge: "003",
      title: "TESTOSTERONE SUPPORT",
      description:
        "ENARJ COMBINES THE NATURAL GOODNESS OF DATES WITH A FUNCTIONAL ENERGY FORMULA DESIGNED TO SUPPORT HEALTHY TESTOSTERONE LEVELS, ENERGY, AND DAILY PERFORMANCE.",
    },
    {
      id: "f4",
      badge: "004",
      title: "ENHANCED FOCUS AND ALERTNESS",
      description:
        "BEYOND ITS DELIGHTFUL TASTE, ENARJ COLA ENERGY DRINK IS FORMULATED WITH ESSENTIAL B VITAMINS, INCLUDING B3, B6, AND B12, TO SUPPORT MENTAL ALERTNESS AND DAILY FOCUS.",
    },
  ];

  // Scroll-in intro (plays once):
  // dates rise from the bottom -> then for each callout in turn:
  // dot, line drawing from the image toward the text, badge,
  // then title + description letter by letter
  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const ctx = gsap.context(() => {
      section
        .querySelectorAll<SVGPathElement>(".np-line-mask")
        .forEach((path) => {
          const len = path.getTotalLength();

          path.style.strokeDasharray = `${len}`;
          path.style.strokeDashoffset = `${len}`;
        });

      const tl = gsap.timeline({
        paused: true,
        defaults: {
          ease: "power3.out",
        },
      });

      // Glass frame entrance
      tl.fromTo(
        ".np-glass-frame",
        {
          y: 20,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
        },
        0,
      );

      // Main image
      tl.fromTo(
        ".np-image",
        {
          y: 180,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1.4,
        },
        0,
      );

      CONNECTORS.forEach((_, i) => {
        const t = 0.2 + i * 1.7;

        tl.fromTo(
          `.np-dot-${i}`,
          {
            attr: {
              r: 0,
            },
            opacity: 0,
          },
          {
            attr: {
              r: 3.5,
            },
            opacity: 1,
            duration: 0.4,
          },
          t,
        )
          .to(
            `.np-line-${i}`,
            {
              strokeDashoffset: 0,
              duration: 0.8,
              ease: "power2.inOut",
            },
            t + 0.2,
          )
          .fromTo(
            `.np-badge-${i}`,
            {
              scale: 0.6,
              opacity: 0,
            },
            {
              scale: 1,
              opacity: 1,
              duration: 0.5,
              ease: "back.out(2)",
            },
            t + 0.8,
          )
          .fromTo(
            `.np-l${i}`,
            {
              y: 8,
              opacity: 0,
            },
            {
              y: 0,
              opacity: 1,
              stagger: 0.003,
              duration: 0.35,
              ease: "power2.out",
            },
            t + 0.9,
          );
      });

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            console.log("Nature Power animation triggered");

            tl.play();

            observer.disconnect();
          }
        },
        {
          threshold: 0.05,
        },
      );

      observer.observe(section);
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Stepped tab SVG path for 1000x680 viewBox
  const steppedPath =
    "M 0,28 L 0,652 A 28 28 0 0 0 28 680 L 972 680 A 28 28 0 0 0 1000 652 L 1000 28 A 28 28 0 0 0 972 0 L 748 0 C 724 0, 724 46, 700 46 L 248 46 C 224 46, 224 0, 200 0 L 28 0 A 28 28 0 0 0 0 28 Z";

  return (
    <section
      ref={sectionRef}
      id="nature-power"
      className="relative w-full bg-black text-white overflow-hidden select-none pt-10 pb-10"
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <img
        src="/image/bgLemon.webp"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Keep the original background ambience */}
      {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] max-w-[90vw] max-h-[70vh] bg-red-950/20 rounded-full blur-[160px] pointer-events-none -z-10 mt-10 mb-10" /> */}

      <div className="w-full flex flex-col items-center">
        {/* ===================================================
            STEPPED FRAME CONTAINER
        ==================================================== */}

        <div
          className="
            relative
            w-[calc(100%-24px)]
            sm:w-[calc(100%-32px)]
            md:w-[calc(100%-48px)]
            lg:w-full
            max-w-6xl
            h-auto
            md:h-[750px]
            lg:h-[780px]
            mt-3
            sm:mt-5
            mb-3
            sm:mb-5
          "
        >
          {/* =================================================
              POPUP GLASS EFFECT
          ================================================== */}

          <div
            className="
              np-glass-frame
              absolute
              inset-0
              w-full
              h-full
              pointer-events-none
              z-0
            "
          >
            {/* Deep floating shadow */}
            <div
              className="
                absolute
                inset-[4px]
                rounded-[30px]
                bg-black/50
                blur-[30px]
                translate-y-[18px]
                opacity-80
              "
            />

            {/* Glass surface */}
            <div
              className="
                absolute
                inset-0
                rounded-[28px]
                overflow-hidden
                bg-white/[0.055]
                backdrop-blur-[24px]
                backdrop-saturate-[150%]
                border
                border-white/[0.18]
                shadow-[inset_0_1px_0_rgba(255,255,255,0.30),inset_0_-1px_0_rgba(255,255,255,0.08),0_25px_70px_rgba(0,0,0,0.40)]
              "
            >
              {/* Top glass reflection */}
              {/* <div
                className="
                  absolute
                  -top-[40%]
                  left-[8%]
                  w-[84%]
                  h-[70%]
                  rounded-full
                  bg-white/[0.10]
                  blur-[45px]
                  rotate-[-8deg]
                "
              /> */}

              {/* Subtle left highlight */}
              {/* <div
                className="
                  absolute
                  inset-y-0
                  left-0
                  w-[32%]
                  bg-gradient-to-r
                  from-white/[0.075]
                  via-white/[0.02]
                  to-transparent
                "
              /> */}

              {/* Bottom depth */}
              <div
                className="
                  absolute
                  bottom-0
                  left-0
                  w-full
                  h-[32%]
                  bg-gradient-to-t
                  from-black/[0.16]
                  to-transparent
                "
              />

              {/* Diagonal glass reflection */}
              {/* <div
                className="
                  absolute
                  top-[-25%]
                  left-[28%]
                  w-[15%]
                  h-[150%]
                  rotate-[18deg]
                  bg-gradient-to-b
                  from-transparent
                  via-white/[0.045]
                  to-transparent
                  blur-[10px]
                "
              /> */}

              {/* Inner glass edge */}
              {/* <div
                className="
                  absolute
                  inset-[1px]
                  rounded-[27px]
                  border
                  border-white/[0.07]
                "
              /> */}

              {/* Thin top highlight */}
              {/* <div
                className="
                  absolute
                  top-0
                  left-[5%]
                  right-[5%]
                  h-px
                  bg-gradient-to-r
                  from-transparent
                  via-white/40
                  to-transparent
                "
              /> */}
            </div>

            {/* Original stepped shape */}
            <svg
              className="
                absolute
                inset-0
                w-full
                h-full
                filter drop-shadow-[0_0_12px_rgba(255,255,255,0.08)]
              "
              viewBox="0 0 1000 680"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <defs>
                <linearGradient
                  id="steppedGlassBorder"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop
                    offset="0%"
                    stopColor="rgba(255,255,255,0.50)"
                  />

                  <stop
                    offset="30%"
                    stopColor="rgba(255,255,255,0.18)"
                  />

                  <stop
                    offset="55%"
                    stopColor="rgba(255,255,255,0.07)"
                  />

                  <stop
                    offset="75%"
                    stopColor="rgba(255,255,255,0.20)"
                  />

                  <stop
                    offset="100%"
                    stopColor="rgba(255,255,255,0.42)"
                  />
                </linearGradient>

                <filter
                  id="glassGlow"
                  x="-30%"
                  y="-30%"
                  width="160%"
                  height="160%"
                >
                  <feGaussianBlur
                    stdDeviation="2"
                    result="blur"
                  />

                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Soft outside glow */}
              {/* <path
                d={steppedPath}
                fill="none"
                stroke="rgba(255,255,255,0.08)"
                strokeWidth="6"
                filter="url(#glassGlow)"
                vectorEffect="non-scaling-stroke"
              /> */}

              {/* Main stepped glass border */}
              {/* <path
                d={steppedPath}
                fill="none"
                stroke="url(#steppedGlassBorder)"
                strokeWidth="1.5"
                vectorEffect="non-scaling-stroke"
              /> */}
            </svg>
          </div>

          {/* =================================================
              INSIDE THE FRAME
          ================================================== */}

          <div
            className="
              relative
              z-20
              w-full
              h-full
              px-5
              min-[480px]:px-6
              sm:px-8
              md:px-12
              pt-14
              min-[480px]:pt-16
              sm:pt-20
              pb-10
              flex
              flex-col
              justify-between
            "
          >
            {/* =================================================
                CENTRAL SPLASHING DATES VISUAL
            ================================================== */}

            <div
              className="
                absolute
                inset-0
                flex
                items-center
                justify-center
                pointer-events-none
                z-10
                mr-0
                md:mr-8
                translate-y-36
                min-[480px]:translate-y-40
                sm:translate-y-44
                md:translate-y-70
              "
            >
              <motion.div
                className="
                  relative
                  w-[270px]
                  min-[400px]:w-[300px]
                  min-[480px]:w-[340px]
                  sm:w-[400px]
                  md:w-[500px]
                  lg:w-[710px]
                  max-w-full
                  aspect-square
                  flex
                  items-center
                  justify-center
                "
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
                <div className="absolute w-56 h-56 sm:w-72 sm:h-72 rounded-full bg-amber-600/15 blur-3xl" />

                {/* Red Backlight */}
                <div className="absolute w-48 h-48 sm:w-60 sm:h-60 rounded-full bg-red-600/15 blur-2xl" />

                {/* Back CAN */}
                <motion.div
                  className="
                    absolute
                    z-0
                    scale-[0.72]
                    min-[400px]:scale-[0.8]
                    sm:scale-90
                    md:scale-100
                    translate-x-0
                    sm:translate-x-10
                    md:-translate-x-10
                  "
                  initial={{
                    rotate: 8,
                    x: 45,
                    y: -10,
                  }}
                  animate={{
                    rotate: [8, 12, 8],
                    x: [45, 54, 45],
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
                  className="
                    absolute
                    z-10
                    scale-[0.72]
                    min-[400px]:scale-[0.8]
                    sm:scale-90
                    md:scale-100
                    translate-x-0
                    sm:translate-x-16
                    md:-translate-x-15
                  "
                  initial={{
                    rotate: -6,
                    x: -15,
                    y: 15,
                  }}
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

            {/* =================================================
                DESKTOP SVG CONNECTING LINES
            ================================================== */}

            <svg
              className="
                absolute
                inset-0
                w-full
                h-full
                pointer-events-none
                z-15
                hidden
                md:block
              "
              viewBox="0 0 1152 780"
              preserveAspectRatio="none"
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
                    width="1152"
                    height="780"
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
                    stroke={
                      hoveredId === c.id
                        ? "rgba(255,255,255,0.75)"
                        : "rgba(255,255,255,0.50)"
                    }
                    strokeWidth="1.25"
                    strokeDasharray={
                      hoveredId === c.id
                        ? "none"
                        : "4 3"
                    }
                    vectorEffect="non-scaling-stroke"
                    mask={`url(#np-mask-${i})`}
                    className="transition-all duration-300"
                  />

                  <circle
                    cx={c.dot.cx}
                    cy={c.dot.cy}
                    r="3.5"
                    fill="#ffffff"
                    className={`np-dot-${i} opacity-0`}
                  />
                </React.Fragment>
              ))}
            </svg>

            {/* =================================================
                4 FEATURE CALLOUTS
            ================================================== */}

            <div
              className="
                relative
                z-20
                w-full
                md:h-full
                grid
                grid-cols-1
                md:grid-cols-2
                gap-y-8
                min-[480px]:gap-y-10
                sm:gap-y-12
                md:gap-y-36
                justify-between
              "
            >
              {/* 001: TOP LEFT */}
              <div
                className="
                  w-full
                  max-w-full
                  sm:max-w-[340px]
                  md:max-w-[270px]
                  space-y-2
                  cursor-pointer
                  transition-transform
                  duration-200
                  hover:translate-x-1
                "
                onMouseEnter={() => setHoveredId("f1")}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div className={`np-badge-0 ${BADGE}`}>
                  {features[0].badge}
                </div>

                <h3 className={`${TITLE}`}>
                  <SplitText
                    text={features[0].title}
                    letterClass="np-l0"
                  />
                </h3>

                <p className={DESC}>
                  <SplitText
                    text={features[0].description}
                    letterClass="np-l0"
                  />
                </p>
              </div>

              {/* 002: TOP RIGHT */}
              <div
                className="
                  w-full
                  max-w-full
                  sm:max-w-[340px]
                  md:max-w-[280px]
                  -space-y-2
                  md:text-left
                  md:ml-auto
                  cursor-pointer
                  transition-transform
                  duration-200
                  hover:-translate-x-1
                "
                onMouseEnter={() => setHoveredId("f2")}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div
                  className={`np-badge-1 mb-2 ${BADGE}`}
                >
                  {features[1].badge}
                </div>

                <h3 className={`${TITLE} mb-2`}>
                  <SplitText
                    text={features[1].title}
                    letterClass="np-l1"
                  />
                </h3>

                <p className={DESC}>
                  <SplitText
                    text={features[1].description}
                    letterClass="np-l1"
                  />
                </p>
              </div>

              {/* Mobile/tablet space */}
              <div
                aria-hidden="true"
                className="
                  md:hidden
                  h-[300px]
                  min-[480px]:h-[340px]
                  sm:h-[400px]
                "
              />

              {/* 003: BOTTOM LEFT */}
              <div
                className="
                  w-full
                  max-w-full
                  sm:max-w-[340px]
                  md:max-w-[270px]
                  space-y-2
                  cursor-pointer
                  transition-transform
                  duration-200
                  hover:translate-x-1
                  mt-auto
                "
                onMouseEnter={() => setHoveredId("f3")}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div className={`np-badge-2 ${BADGE}`}>
                  {features[2].badge}
                </div>

                <h3 className={TITLE}>
                  <SplitText
                    text={features[2].title}
                    letterClass="np-l2"
                  />
                </h3>

                <p className={DESC}>
                  <SplitText
                    text={features[2].description}
                    letterClass="np-l2"
                  />
                </p>
              </div>

              {/* 004: BOTTOM RIGHT */}
              <div
                className="
                  w-full
                  max-w-full
                  sm:max-w-[340px]
                  md:max-w-[280px]
                  space-y-2
                  md:text-left
                  md:ml-auto
                  cursor-pointer
                  transition-transform
                  duration-200
                  hover:-translate-x-1
                  mt-auto
                "
                onMouseEnter={() => setHoveredId("f4")}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div className={`np-badge-3 ${BADGE}`}>
                  {features[3].badge}
                </div>

                <h3 className={TITLE}>
                  <SplitText
                    text={features[3].title}
                    letterClass="np-l3"
                  />
                </h3>

                <p className={DESC}>
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
