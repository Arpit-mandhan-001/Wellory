import React from 'react'

const CANHero1 = () => {
  return (
    <div className="absolute bottom-[9%] left-1/2 z-10 flex w-[250px] -translate-x-1/2 flex-col items-center sm:w-[300px] md:w-[330px] lg:w-[350px]">


  {/* Green glow behind the can */}
  <div
    aria-hidden="true"
    className="absolute -inset-10 -z-10 rounded-full bg-[#D7FF3D]/10 blur-3xl"
  />

  {/* Transparent can image */}
  <div className="relative w-full">
    <img
      src="/image/lemon.png"
      alt="Dates Cola"
      className="relative z-10 h-auto w-full object-contain"
    />
  </div>

  {/* Rock pedestal */}
  <div
    aria-hidden="true"
    className="-mt-2 h-8 w-[75%] rounded-[50%] bg-gradient-to-b from-neutral-700 to-black opacity-90 blur-[1px] sm:h-10"
  />
</div>
  )
}

export default CANHero1