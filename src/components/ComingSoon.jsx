import Image from "next/image";
import { spaceGrotesk } from "../font";

const LIME = "text-[#00E5FF]";

export default function ComingSoon() {
  return (
    <main className="min-h-[85vh] bg-[#080808] text-white">
      {/* ───────── Main 50 / 50 Layout ───────── */}
      <section className="grid min-h-[calc(100vh-150px)] w-full lg:grid-cols-2">
        {/* ───────── Left: Content ───────── */}
        <div className="flex items-center px-6 py-20 sm:px-10 md:px-16 lg:px-20 xl:px-24 -mt-15">
          <div className="w-full max-w-[780px]">
            <h1 className="sm:text-3xl md:text-5xl lg:text-6xl uppercase leading-[0.95] tracking-[0.005em]">
              <span className="block text-[#f4f4f4] tracking-tighter font-semibold">More Goodness.</span>

              <span
  className={`block w-max text-[40px] sm:text-[40px] md:text-[60px] lg:text-[75px] font-bold tracking-tight mt-4 sm:mt-4 md:mt-2 ${LIME}`}
>
  Coming Soon.
</span>

            </h1>

            <p className="mt-8 text-xl font-semibold tracking-tight text-[#ececec] sm:mt-10 sm:text-2xl lg:text-[1.75rem] font-raleway">
              <span className={` pr-2`}>WELLORY</span>
              is just getting started.
            </p>

            <p className="mt-3 max-w-[38rem] text-[15px] leading-[1.7] text-[#e6e6e6] sm:text-lg md:text-xl md:leading-[1.65]">
              We’re working on a range of health-focused products designed to
              support an active, energetic lifestyle with the same focus on
              taste, quality and thoughtful ingredients.
            </p>

            <div className="mt-8 sm:mt-5">
              <p
                className={`text-lg font-semibold sm:text-xl md:text-[1.4rem] ${LIME}`}
              >
                More products. More ways to feel good.
              </p>
            </div>
          </div>
        </div>

        {/* ───────── Right: Image + Logo ───────── */}
        <div className="relative flex min-h-[500px] items-center justify-center overflow-hidden lg:min-h-0">
          {/* Product image */}
          <div className="relative h-full w-full">
            <Image
              src="/image/comingSoon.png"
              alt="ENARJ Coffee and Lemon energy drink cans on a dark stone surface"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />

            {/* Dark gradients to blend image */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#080808] via-transparent to-transparent lg:w-[35%]" />

            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[25%] bg-gradient-to-t from-[#080808] to-transparent" />

            <div className="pointer-events-none absolute inset-x-0 top-0 h-[15%] bg-gradient-to-b from-[#080808]/50 to-transparent" />
          </div>
        </div>
      </section>

      {/* ───────── Footer ───────── */}
      <footer className="flex w-full flex-col items-center justify-center bg-gradient-to-b from-[#050505] via-[#070707] to-[#080808] px-5 py-8 sm:py-10 -mt-10">
        <p className="mt-5 text-center text-[9px] font-medium uppercase tracking-[0.3em] text-white/90 sm:mt-6 sm:text-[11px] sm:tracking-[0.34em]">
          Energy for today. Wellness for what’s next.
        </p>
      </footer>
    </main>
  );
}
