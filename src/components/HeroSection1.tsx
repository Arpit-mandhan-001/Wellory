import Link from "next/link";
import { Anton, Permanent_Marker, Inter } from "next/font/google";
import { ArrowRight, Gauge, Zap, Mountain, Activity } from "lucide-react";
import Navbar from "./Navbar";
import CANHero from "./CANHero";

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

const HeroSection1 = () => {
  return (
    <section
      className={`relative h-screen w-full overflow-visible text-white ${inter.className}`}
    >
      {/* Mobile */}
      <img
        src="/image/banner1mob.png"
        className="block h-[110%] w-full object-contain scale-150 md:hidden"
        alt=""
      />

      {/* Desktop */}
      <img
        src="/image/banner1.png"
        className="hidden h-[100%] w-full object-contain scale-120 md:block"
        alt=""
      />

      {/* <div className="absolute inset-x-0 bottom-0 z-30 px-3 pb-4 sm:px-6 sm:pb-8 md:px-12">
        <div className="mx-auto grid w-full max-w-4xl grid-cols-3 gap-1 rounded-4xl bg-[#010f2c] px-2 py-2 sm:gap-4 sm:px-8 md:w-[60%]">
          {stats.map((stat, i) => (
            <StatItem key={stat.number} {...stat} divider={i !== 0} />
          ))}
        </div>
      </div> */}
    </section>
  );
};

export default HeroSection1;
