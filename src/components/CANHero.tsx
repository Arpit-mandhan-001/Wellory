import React from "react";

const CANHero = () => {
  return (
    <div
      className="
        absolute
        bottom-[7%]
        sm:bottom-[8%]
        md:bottom-[9%]
        left-1/2
        z-10
        flex
        w-[190px]
        min-[400px]:w-[215px]
        min-[480px]:w-[250px]
        sm:w-[300px]
        md:w-[330px]
        lg:w-[350px]
        -translate-x-1/2
        flex-col
        items-center
      "
    >
      {/* Green glow behind the can */}
      <div
        aria-hidden="true"
        className="
          absolute
          -inset-8
          sm:-inset-10
          -z-10
          rounded-full
          bg-[#D7FF3D]/10
          blur-3xl
        "
      />

      {/* Transparent can image */}
      <div className="relative w-full">
        <img
          src="/image/coffee.png"
          alt="Dates Cola"
          className="
            relative
            z-10
            h-auto
            w-full
            object-contain
          "
        />
      </div>

      {/* Rock pedestal */}
      {/* <div
        aria-hidden="true"
        className="
          -mt-2
          h-6
          w-[72%]
          rounded-[50%]
          bg-gradient-to-b
          from-neutral-700
          to-black
          opacity-90
          blur-[1px]
          min-[480px]:h-7
          sm:h-10
        "
      /> */}
    </div>
  );
};

export default CANHero;
