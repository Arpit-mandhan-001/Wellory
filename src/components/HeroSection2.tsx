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

      <div className="absolute inset-y-0 left-0 z-20 flex w-full max-w-xl flex-col justify-center gap-6 px-6 md:px-12 lg:max-w-2xl -translate-y-8">
        <h1 className="leading-[0.95]">
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
            className={`${marker.className} mt-6 block -rotate-2 text-5xl uppercase text-[#D7FF3D] sm:text-6xl md:text-7xl lg:text-8xl`}
          >
            Chase the Rush.
          </span>
        </h1>

        <p className="max-w-sm text-black font-poppins font-bold text-base leading-relaxed  sm:text-lg">
          Late nights. Early mornings.
          <br />
          Full throttle.
        </p>

        <Link
          href="/enarj"
          className="group inline-flex w-fit items-center gap-3 rounded-md bg-[#D7FF3D] px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-black transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 hover:shadow-[0_20px_45px_-15px_#D7FF3D] active:translate-y-0"
        >
          Explore Enarj
          <ArrowRight className="h-4 w-4 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1" />
        </Link>
      </div>

      <div className="absolute inset-x-0 bottom-0 z-30 px-6 pb-8 sm:px-12">
        <div className="mx-auto grid w-[60%] grid-cols-3 gap-4 bg-[#010f2c] pt-2 pb-2 pl-4 pr-4 rounded-4xl">
          {stats.map((stat, i) => (
            <StatItem key={stat.number} {...stat} divider={i !== 0} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection2;
