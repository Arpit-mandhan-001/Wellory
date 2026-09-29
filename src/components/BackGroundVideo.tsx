import React from "react";

const BackGroundVideo = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background video */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/video/video1.mp4" type="video/mp4" />
      </video>

      {/* Optional dark overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content */}
      {/* <div className="w-fit translate-x-3 rounded-full px-5 py-2 md:px-6 md:py-3">
  <span
    className="
      block bg-gradient-to-r from-red-600 to-[#6D102A]
      bg-clip-text text-5xl leading-none tracking-tight
      text-transparent
      md:text-[66px]
    "
  >
    ENARJ
  </span>
</div> */}

    </section>
  );
};

export default BackGroundVideo;
