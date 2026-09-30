import Link from "next/link";
import { Anton, Permanent_Marker, Inter } from "next/font/google";
import { ArrowRight, Gauge, Zap, Mountain, Activity } from "lucide-react";
import Navbar from "./Navbar";

const anton = Anton({ subsets: ["latin"], weight: "400" });
const marker = Permanent_Marker({ subsets: ["latin"], weight: "400" });
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const stats: {
  number: string;
  label: string;
  icon: typeof Gauge;
  align:
    | "items-start text-left"
    | "items-center text-center"
    | "items-end text-right";
}[] = [
  {
    number: "01",
    label: "Adrenaline",
    icon: Activity,
    align: "items-start text-left",
  },
  {
    number: "02",
    label: "Energy",
    icon: Zap,
    align: "items-center text-center",
  },
  {
    number: "03",
    label: "Rush",
    icon: Mountain,
    align: "items-end text-right",
  },
];

function StatItem({
  number,
  label,
  icon: Icon,
  align,
  divider,
}: {
  number: string;
  label: string;
  icon: typeof Gauge;
  align: string;
  divider: boolean;
}) {
  return (
    <div
      className={`group flex flex-col gap-2 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 ${align} ${
        divider ? "sm:border-l sm:border-white/15 sm:pl-8" : ""
      }`}
    >
      <span className="flex items-center gap-2">
        <span
          className={`${anton.className} text-lg italic text-[#D7FF3D] transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:tracking-wide group-hover:drop-shadow-[0_0_12px_rgba(215,255,61,0.45)] sm:text-xl`}
        >
          {number}
        </span>

        <Icon
          className="h-5 w-5 text-[#D7FF3D] transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:rotate-6 group-hover:scale-110 group-hover:drop-shadow-[0_0_10px_rgba(215,255,61,0.45)]"
          strokeWidth={2}
        />
      </span>

      <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-white transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:tracking-[0.32em] sm:text-sm">
        {label}
      </span>
    </div>
  );
}

const HeroSection2 = () => {
  return (
    <section
      className={`relative h-screen w-full overflow-hidden bg-black text-white ${inter.className}`}
    >
      <div className="absolute inset-x-0 top-0 z-50">
        <Navbar />
      </div>

      <img
        src="/image/image2bike.png"
        className="block h-screen w-full object-cover"
        alt=""
      />

      <div className="absolute inset-y-0 left-0 z-20 flex w-full max-w-xl translate-y-5 flex-col justify-center gap-6 px-5 sm:px-6 md:px-12 lg:max-w-2xl ">
        <h1 className="relative -top-35 md:top-0 leading-[0.95]">
          <span
            className={`${anton.className} block text-4xl italic uppercase text-white sm:text-5xl md:text-6xl lg:text-7xl`}
          >
            Larger than
          </span>
          <span
            className={`${anton.className} block text-4xl italic uppercase text-white sm:text-5xl md:text-6xl lg:text-7xl`}
          >
            Life
          </span>
          <span
            className={`${marker.className} mt-2 mb-10 block -rotate-2 text-3xl uppercase tracking-wide text-[#fdf905] sm:text-xl md:text-5xl lg:text-8xl`}
          >
            <span className="whitespace-nowrap md:hidden">Chase the</span>
            <span className="hidden md:inline">
              Chase
              <br />
              the
            </span>
            <br />
            Rush.
          </span>
        </h1>

        {/* <p className="max-w-sm text-black font-poppins font-bold text-base leading-relaxed  sm:text-lg">
          Late nights. Early mornings.
          <br />
          Full throttle.
        </p> */}

        <Link
          href="/enarj"
          className="group inline-flex w-fit items-center gap-3 rounded-md bg-[#D7FF3D] px-6 py-3.5 text-[10px] sm:text-xs md:text-xl font-bold uppercase tracking-wide text-black transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 hover:shadow-[0_20px_45px_-15px_#D7FF3D] active:translate-y-0"
        >
          Explore Enarj
          <ArrowRight className="h-4 w-4 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1" />
        </Link>
      </div>

      <div className="absolute inset-x-0 bottom-0 z-30 px-3 pb-4 sm:px-6 sm:pb-8 md:px-12">
        <div className="mx-auto grid w-full max-w-4xl grid-cols-3 gap-1 rounded-4xl bg-[#010f2c] px-2 py-2 sm:gap-4 sm:px-4 md:w-[60%]">
          {stats.map((stat, i) => (
            <StatItem key={stat.number} {...stat} divider={i !== 0} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection2;
