// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { Anton, Plus_Jakarta_Sans, Caveat } from "next/font/google";

// /* ───────────────────────── Fonts ───────────────────────── */
// const anton = Anton({
//   subsets: ["latin"],
//   weight: "400",
//   variable: "--font-anton",
// });
// const jakarta = Plus_Jakarta_Sans({
//   subsets: ["latin"],
//   variable: "--font-jakarta",
// });
// const caveat = Caveat({
//   subsets: ["latin"],
//   weight: ["500", "700"],
//   variable: "--font-script",
// });

// /* ─────────────────── Dummy images — replace later ───────────────────
//    Swap each URL for your own file, e.g. "/images/hero-gym.jpg" (in /public). */
// const IMG = {
//   heroGym: "/image/gym.png",
//   heroParty: "/image/runner.png",
//   cricketer: "/image/Car.png",
//   runner: "/image/runner.png",
//   restaurant: "/image/chutneez.jpeg",
//   drinking: "/image/coffee.png",
//   party: "/image/lemon.png",
// };

// /* ───────────────────── Constants ───────────────────── */
// const LIME = "#E0FF3F";

// /* ───────────────────── Small pieces ───────────────────── */
// function Photo({ src, alt, className = "" }) {
//   // eslint-disable-next-line @next/next/no-img-element
//   return (
//     <img
//       src={src}
//       alt={alt}
//       loading="lazy"
//       className={`block h-full w-full object-cover ${className}`}
//     />
//   );
// }

// function Swoosh({ className = "" }) {
//   return (
//     <svg
//       viewBox="0 0 140 14"
//       fill="none"
//       className={className}
//       aria-hidden="true"
//     >
//       <path
//         d="M2 11C30 4 80 3 138 2"
//         stroke={LIME}
//         strokeWidth="3.5"
//         strokeLinecap="round"
//       />
//     </svg>
//   );
// }

// const iconProps = {
//   width: 52,
//   height: 52,
//   viewBox: "0 0 64 64",
//   fill: "none",
//   stroke: LIME,
//   strokeWidth: 2.4,
//   strokeLinecap: "round",
//   strokeLinejoin: "round",
// };

// function RunIcon() {
//   return (
//     <svg {...iconProps} aria-hidden="true">
//       <circle cx="40" cy="12" r="5" />
//       <path d="M30 24l9-3 7 8 8 2M39 21l-5 13 10 6-2 12M34 34l-8 8-10 2M8 30h12M4 38h12M10 46h10" />
//     </svg>
//   );
// }

// function ClocheIcon() {
//   return (
//     <svg {...iconProps} aria-hidden="true">
//       <path d="M8 44a24 24 0 0148 0zM32 20v-4M28 14h8M4 48h56M10 54h44" />
//     </svg>
//   );
// }

// function BoltIcon() {
//   return (
//     <svg
//       width="24"
//       height="26"
//       viewBox="0 0 24 26"
//       fill="none"
//       stroke={LIME}
//       strokeWidth="1.8"
//       strokeLinejoin="round"
//       aria-hidden="true"
//     >
//       <path d="M13.5 2L3 15h7.5L9 24l12-14h-8l.5-8z" />
//     </svg>
//   );
// }

// /* ───────────────────── Page ───────────────────── */
// export default function AboutPage() {
//   return (
//     <div
//       className={`${anton.variable} ${jakarta.variable} ${caveat.variable} min-h-screen overflow-x-hidden bg-[#0a0a0a] font-[family-name:var(--font-jakarta)] text-white`}
//     >
//       <div className="bg-black">
//         <Navbar />
//       </div>

//       {/* ───────── 1. Hero ───────── */}
//       <section className="relative h-[330px] overflow-hidden bg-black sm:h-[380px] md:h-[clamp(400px,37vw,560px)]">
//         {/* Gym / Runner image */}
//         <div className="relative h-full w-full overflow-hidden">
//           <Photo
//             src={IMG.heroGym}
//             alt="Athlete training in the gym"
//             className="h-full w-full object-cover object-center -translate-x-0 md:-translate-x-70"
//           />
//         </div>

//         {/* Party image - desktop only */}
//         <div className="absolute inset-0 hidden md:block md:[clip-path:polygon(60%_0,100%_0,100%_100%,44%_100%)]">
//           <Photo
//             src={IMG.heroParty}
//             alt="Crowd celebrating at a night event"
//             className="h-full w-full object-cover object-center md:translate-x-90"
//           />

//           <div className="absolute inset-0 bg-gradient-to-br from-red-900/50 to-purple-900/40 mix-blend-multiply" />
//         </div>

//         {/* Dark overlay */}
//         <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/25 to-black/70" />

//         {/* Content */}
//         <div className="absolute inset-0 flex flex-col items-center justify-center px-6 pt-10 text-center">
//           <h1 className="text-5xl md:text-8xl font-black">WELLORY</h1>

//           <h1 className="mt-4 text-sm font-medium uppercase tracking-[0.5em] sm:mt-6 sm:text-lg md:text-xl">
//             About&nbsp;Us
//           </h1>
//         </div>
//       </section>

//       {/* ───────── 2. Born from sport ───────── */}
//       <section
//         className="relative bg-[#0b0b0c]"
//         style={{
//           clipPath:
//             "polygon(0 12px,6% 4px,14% 10px,24% 2px,36% 9px,48% 3px,60% 10px,72% 2px,84% 8px,94% 3px,100% 9px,100% 100%,0 100%)",
//           marginTop: "-12px",
//         }}
//       >
//         <div className="mx-auto grid max-w-[1280px] items-end gap-0 px-5 pt-14 sm:px-8 md:min-h-[340px] md:grid-cols-12 md:px-10 md:pt-0 lg:px-12">
//           <div className="flex gap-5 pb-10 md:col-span-6 md:self-center md:py-14">
//             <span className="mt-1 w-[3px] shrink-0 self-stretch bg-[#E0FF3F] md:h-[120px] md:self-start" />
//             <div>
//               <h2 className="text-[1.9rem] font-bold leading-[1.12] tracking-tight sm:text-4xl lg:text-[2.6rem]">
//                 Born from sport.
//                 <br />
//                 Built for the lifestyle.
//                 <br />
//                 <span className="text-[#E0FF3F]">Made for energy.</span>
//               </h2>
//               <p className="mt-6 max-w-[27rem] text-[15px] leading-[1.7] text-white/90 sm:text-base">
//                 ENARJ comes from a simple belief — you shouldn’t have to choose
//                 between the life you love and the energy to keep up with it.
//               </p>
//             </div>
//           </div>

//           <div className="mx-auto h-[300px] w-full max-w-[340px] md:col-span-3 md:h-[320px] md:max-w-none lg:h-[330px]">
//             <Photo
//               src={IMG.cricketer}
//               alt="Cricketer batting"
//               className="object-contain object-bottom"
//             />
//           </div>

//         </div>
//       </section>

//       {/* ───────── 3. Sport & hospitality ───────── */}
//       <section className="grid md:grid-cols-[27.6%_1fr_27.6%]">
//         <div className="h-64 sm:h-80 md:h-auto md:min-h-[390px]">
//           <Photo src={IMG.runner} alt="Athlete sprinting up stairs" />
//         </div>

//         <div className="flex flex-col justify-center gap-10 bg-[#0a0d0f] px-6 py-12 sm:px-12 md:gap-12 md:px-8 lg:px-14">
//           <article className="flex gap-5">
//             <div className="shrink-0">
//               <RunIcon />
//             </div>
//             <div>
//               <h3 className="text-[13px] font-bold uppercase tracking-[0.12em]">
//                 Rooted in sport
//               </h3>
//               <p className="mt-3 max-w-[21rem] text-[13px] leading-[1.75] text-white/85">
//                 Our journey is rooted in sport, fitness and hospitality. Founded
//                 by a passionate athlete and former Ranji Trophy player, ENARJ
//                 was created from years of living an active lifestyle and
//                 understanding what it takes to stay switched on.
//               </p>
//             </div>
//           </article>

//           <article className="flex gap-5">
//             <div className="shrink-0">
//               <ClocheIcon />
//             </div>
//             <div>
//               <h3 className="text-[13px] font-bold uppercase tracking-[0.12em]">
//                 A hospitality legacy
//               </h3>
//               <p className="mt-3 max-w-[21rem] text-[13px] leading-[1.75] text-white/85">
//                 With over 15 years of experience in hospitality, from Drinks at
//                 Stake to fine-dine restaurants and Chutneez across Delhi, our
//                 journey has always been about great experiences, great people
//                 and great drinks.
//               </p>
//             </div>
//           </article>
//         </div>

//         <div className="h-64 sm:h-80 md:h-auto md:min-h-[390px]">
//           <Photo src={IMG.restaurant} alt="Restaurant with a neon sign" className="object-right"/>
//         </div>
//       </section>

//       {/* ───────── 4. Next chapter ───────── */}
//       <section className="relative overflow-hidden bg-[#0a0a0a]">
//         <div className="grid md:min-h-[430px] md:grid-cols-[42%_1fr]">
//           <div className="relative z-10 flex flex-col justify-center px-6 py-12 sm:px-10 md:py-14 lg:pl-16">
//             <h2 className="font-[family-name:var(--font-anton)] text-[1.9rem] uppercase leading-tight sm:text-4xl lg:text-[2.35rem]">
//               <span className="mr-4 italic text-[#E0FF3F]">ENARJ</span>
//               is the next chapter.
//             </h2>
//             <p className="mt-5 max-w-[26rem] text-[15px] leading-[1.65] text-white/95 sm:text-base">
//               Made for the ones who train hard, stay out late, chase goals and
//               keep moving. Whether it’s an early morning workout, a long day, a
//               late-night party or the next big thing — ENARJ is made to keep up.
//             </p>

//             <div className="mt-9 -rotate-[7deg] font-[family-name:var(--font-script)] italic">
//               <p className="text-3xl font-medium text-white/90 sm:text-4xl">
//                 Train. Party. Repeat.
//               </p>
//               <p className="-mt-1 pl-6 text-2xl font-bold uppercase text-white sm:text-3xl">
//                 Keep moving.
//               </p>
//               <Swoosh className="-mt-1 ml-6 w-48 sm:w-56" />
//             </div>
//           </div>

//           <div className="relative h-[360px] sm:h-[440px] md:h-auto">
//             <div className="absolute inset-y-0 left-0 w-[62%]  md:left-[-6%]">
//               <Photo
//                 src={IMG.drinking}
//                 alt="Athlete drinking an ENARJ"
//                 className="scale-90 object-[center_60%]"
//               />
//               <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-transparent to-transparent" />
//             </div>
//             <div
//               className="absolute inset-y-0 right-0 w-[64%]"
//               style={{ clipPath: "polygon(10% 0, 100% 0, 100% 100%, 0 100%)" }}
//             >
//               <Photo
//                 src={IMG.party}
//                 alt="Woman enjoying a night out next to ENARJ cans"
//                 className="object-[center_65%]"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
//             </div>
//             <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
//           </div>
//         </div>
//       </section>

//       {/* ───────── 5. Flavour strip ───────── */}
//       <footer className="flex items-center justify-center gap-4 px-5 pb-12 pt-8 sm:gap-6 md:pb-14">
//         <span className="h-px max-w-[360px] flex-1 bg-white/35" />
//         <BoltIcon />
//         <p className="whitespace-nowrap text-[10px] font-medium uppercase tracking-[0.35em] text-white/90 sm:text-[11px]">
//           Coffee <span className="mx-2 sm:mx-3">/</span> Lemon
//         </p>
//         <span className="h-px max-w-[360px] flex-1 bg-white/35" />
//       </footer>
//     </div>
//   );
// }

import Image from "next/image";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import { Anton, Manrope } from "next/font/google";

const display = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
});
const body = Manrope({ subsets: ["latin"], variable: "--font-body" });

const IMG = {
  heroGym: "/image/gym.png",
  heroParty: "/image/runner.png",
  cricketer: "/image/Trophy.webp",
  runner1: "/image/runner1122.jpg",
  runner: "/image/runner.png",
  restaurant: "/image/chutneez.jpeg",
  drinking: "/image/coffee.png",
  party: "/image/lemon.png",
};

/* Palette
   black   #000000
   lemon   #FFE14D
   white   #FFFFFF
   orange  #FF5A1F
   coffee  #8A5A32
   dark    #111111
*/

const MARQUEE = [
  "Sport",
  "Fitness",
  "Hospitality",
  "Date-based energy",
  "Coffee",
  "Lemon",
  "Keep moving",
];

const JOURNEY = [
  {
    n: "01",
    title: "On the field",
    text: "A passionate athlete and former Ranji Trophy player (India's premier first-class cricket championship), our founder has always believed in the power of an active life.",
    img: IMG.runner1,
    alt: "Wellory founder, former Ranji Trophy cricketer",
  },
  {
    n: "02",
    title: "In the kitchen",
    text: "Over 15 years in hospitality in Delhi, India, including Drinks at Stake, fine dining restaurants and Chutneez. His career has always revolved around great food, drinks, and people",
    img: IMG.restaurant,
    alt: "Chutneez restaurant, Delhi",
  },
  {
    n: "03",
    title: "In your hand",
    text: "Wellory is the next chapter: ENARJ, a date-based energy drink in refreshing Coffee and Lemon flavours, made for people who keep moving.",
    img: IMG.drinking,
    alt: "Wellory Coffee energy drink",
  },
];

export default function AboutPage() {
  return (
    <main
      className={`${display.variable} ${body.variable} bg-black text-white antialiased`}
      style={{ fontFamily: "var(--font-body), system-ui, sans-serif" }}
    >
      <style>{`
        @keyframes wl-marquee { to { transform: translateX(-50%); } }
        .wl-marquee { animation: wl-marquee 28s linear infinite; }
        @media (prefers-reduced-motion: reduce) { .wl-marquee { animation: none; } }
      `}</style>

      <Navbar />
      {/* HERO */}
      <section className="relative h-[330px] overflow-hidden bg-black sm:h-[380px] md:h-[clamp(400px,37vw,560px)]">
        {/* Gym / Runner image */}
        <div className="relative h-full w-full overflow-hidden">
          <img
            src="/image/gym.png"
            alt="Athlete training in the gym"
            className="h-full w-full object-cover object-center -translate-x-0 md:-translate-x-70"
          />
        </div>

        {/* Party image - desktop only */}
        <div className="absolute inset-0 hidden md:block md:[clip-path:polygon(60%_0,100%_0,100%_100%,44%_100%)]">
          <img
            src="/image/runner.png"
            alt="Crowd celebrating at a night event"
            className="h-full w-full object-cover object-center md:translate-x-90"
          />

          <div className="absolute inset-0 bg-gradient-to-br from-red-900/50 to-purple-900/40 mix-blend-multiply" />
        </div>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/25 to-black/70" />

        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 pt-10 text-center">
          <h1 className="text-5xl md:text-8xl font-black">WELLORY</h1>
          <h1 className="mt-4 text-sm font-medium uppercase tracking-[0.5em] sm:mt-6 sm:text-lg md:text-xl">
            About&nbsp;Us
          </h1>
          <span className="mt-6 sm:text-[14px] md:text-[20px] font-medium -tracking-tight">
            Born from sport. Driven by experience. Made for energy.
          </span>
        </div>
      </section>

      <section className="bg-[#111111] py-24 text-white lg:py-32 -mt-5">
        <div className="mx-auto max-w-7xl px-6 md:px-10 -mt-10">
          <h2
            className="max-w-4xl text-5xl uppercase leading-[0.95] md:text-7xl"
            style={{ fontFamily: "var(--font-display), Impact, sans-serif" }}
          >
            The journey behind Wellory.
          </h2>

          <ol className="mt-16 grid gap-6 lg:grid-cols-3">
            {JOURNEY.map((s) => (
              <li
                key={s.n}
                className="group overflow-hidden rounded-[2rem] bg-[#1A1A1A]"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={s.img}
                    alt={s.alt}
                    fill
                    sizes="(min-width:1024px) 30vw, 100vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />

                  <span
                    className="absolute left-4 top-4 rounded-full bg-[#FFE14D] px-4 py-1 text-xl text-black"
                    style={{
                      fontFamily: "var(--font-display), Impact, sans-serif",
                    }}
                  >
                    {s.n}
                  </span>
                </div>

                <div className="p-7">
                  <h3
                    className="text-3xl uppercase text-[#FFE14D]"
                    style={{
                      fontFamily: "var(--font-display), Impact, sans-serif",
                    }}
                  >
                    {s.title}
                  </h3>

                  <p className="mt-3 leading-relaxed text-white/80">{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FOUNDER STORY */}
      <section
        id="story"
        className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-24 md:px-10 lg:grid-cols-2 lg:py-32 -mt-31"
      >
        <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] bg-[#111111]">
          <Image
            src={IMG.cricketer}
            alt="Wellory founder, former Ranji Trophy cricketer"
            fill
            sizes="(min-width:1024px) 45vw, 100vw"
            className="object-cover"
          />

          <div className="absolute bottom-5 left-5 right-5 rounded-2xl bg-[#000800] p-5 text-black">
            <p
              className="text-2xl uppercase leading-none text-white"
              style={{ fontFamily: "var(--font-display), Impact, sans-serif" }}
            >
              Former Ranji Trophy player
            </p>
            <p className="mt-1 text-sm font-semibold text-white">
              Athlete first. Founder next.
            </p>
          </div>
        </div>

        <div>
          <h2
            className="text-5xl uppercase leading-[0.95] md:text-7xl"
            style={{ fontFamily: "var(--font-display), Impact, sans-serif" }}
          >
            Our Story
          </h2>

          <div className="mt-8 max-w-xl space-y-5 text-lg leading-relaxed text-white/80">
            <p>
              Wellory is built on a journey that brings together sport, fitness,
              and hospitality. Our founder is a passionate athlete and former
              Ranji Trophy player who has always believed in an active lifestyle
              and the power of staying energised.
            </p>

            <p>
              With over 15 years in hospitality, including Drinks at Stake,
              fine-dine restaurants and Chutneez across Delhi, his journey has
              always been about great food, great drinks and great people.
            </p>
          </div>

          <dl className="mt-10 grid max-w-md grid-cols-2 gap-4">
            <div className="rounded-3xl bg-[#ebce3d]/89 p-6 text-black">
              <dt className="text-sm font-semibold">In hospitality</dt>
              <dd
                className="mt-1 text-6xl"
                style={{
                  fontFamily: "var(--font-display), Impact, sans-serif",
                }}
              >
                15+
              </dd>
              <dd className="text-sm">years, across Delhi</dd>
            </div>

            <div className="rounded-3xl bg-[#FF5A1F]/80 p-6 text-white">
              <dt className="text-sm font-semibold">Flavours</dt>
              <dd
                className="mt-1 text-6xl"
                style={{
                  fontFamily: "var(--font-display), Impact, sans-serif",
                }}
              >
                2
              </dd>
              <dd className="text-sm">Coffee and Lemon</dd>
            </div>
          </dl>
        </div>
      </section>

      {/* JOURNEY */}

      {/* FLAVOURS */}
      <section className="mx-auto max-w-7xl px-6 py-24 md:px-10 lg:py-32">
        <div className="max-w-3xl -mt-10">
          <h2
            className="text-5xl uppercase leading-[0.95] md:text-7xl"
            style={{ fontFamily: "var(--font-display), Impact, sans-serif" }}
          >
            Date-based energy.
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-white/80">
            Our first product is ENARJ, a date-based energy drink with natural caffeine and B vitamins, in Coffee and Lemon flavours. A refreshing way to stay energised through your day, your workout or your next big thing.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <article className="relative min-h-[460px] overflow-hidden rounded-[2.5rem] bg-[#8A5A32] p-8 text-white">
            <Image
              src={IMG.drinking}
              alt="Wellory Coffee"
              fill
              sizes="(min-width:768px) 50vw, 100vw"
              className="object-cover opacity-70"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

            <div className="relative flex h-full min-h-[400px] flex-col justify-end">
              <h3
                className="text-6xl uppercase"
                style={{
                  fontFamily: "var(--font-display), Impact, sans-serif",
                }}
              >
                Coffee
              </h3>

              <p className="mt-2 max-w-xs font-medium">
                Smooth, bold and ready for the early session.
              </p>
            </div>
          </article>

          <article className="relative min-h-[460px] overflow-hidden rounded-[2.5rem] bg-[#FFE14D]/10 p-8 text-black">
            <Image
              src={IMG.party}
              alt="Wellory Lemon"
              fill
              sizes="(min-width:768px) 50vw, 100vw"
              className="object-cover opacity-80"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#FFE14D]/40 via-[#FFE14D]/20 to-transparent" />

            <div className="relative flex h-full min-h-[400px] flex-col justify-end">
              <h3
                className="text-6xl uppercase text-white"
                style={{
                  fontFamily: "var(--font-display), Impact, sans-serif",
                }}
              >
                Lemon
              </h3>

              <p className="mt-2 max-w-xs font-semibold text-white">
                Sharp, bright and made to keep you going.
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* CLOSING */}
      <section className="relative overflow-hidden bg-[#a23e1a] text-black">
  <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-24 lg:grid-cols-2">
    <h2
      className="relative z-10 text-[clamp(3rem,8vw,7rem)] uppercase leading-[0.9] text-white"
      style={{ fontFamily: "var(--font-display), Impact, sans-serif" }}
    >
      Keep moving. We&apos;ve got the energy.
    </h2>

    <div className="absolute inset-y-0 right-0 hidden h-full w-full lg:block">
      <Image
        src={IMG.runner}
        alt="Runner on the move"
        fill
        sizes="50vw"
        className="object-cover"
      />
    </div>

    <div className="relative z-10 lg:col-span-2">
      <Link
        href="/products"
        className="inline-block rounded-full bg-black px-9 py-4 text-lg font-bold text-[#FFFFFF] transition hover:bg-white hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FFE14D]"
      >
        SHOP ENARJ
      </Link>
    </div>
  </div>
</section>
    </main>
  );
}
