import React, { useState } from "react";

const videos = [
  "/video/video1.mp4",
  "/video/video2.mp4",
  "/video/video3.mp4",
];

const VideoRow = ({ width = "w-full" }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextVideo = () => {
    setCurrentIndex((prev) => (prev + 1) % videos.length);
  };

  const prevVideo = () => {
    setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length);
  };

  return (
    <div className={`${width} px-3`}>
      {/* Mobile: One video + arrows */}
      <div className="relative sm:hidden">
        <div
          className="
            mt-2
            rounded-2xl
            overflow-hidden
            bg-black
            w-full
            aspect-[9/16]
          "
        >
          <video
            key={videos[currentIndex]}
            src={videos[currentIndex]}
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full object-cover"
          />
        </div>

        {/* Left Arrow */}
        <button
          onClick={prevVideo}
          className="
            absolute
            left-2
            top-1/2
            -translate-y-1/2
            w-10
            h-10
            rounded-full
            bg-black/50
            text-white
            flex
            items-center
            justify-center
            text-2xl
            hover:bg-black/70
            transition
          "
          aria-label="Previous video"
        >
          &#10094;
        </button>

        {/* Right Arrow */}
        <button
          onClick={nextVideo}
          className="
            absolute
            right-2
            top-1/2
            -translate-y-1/2
            w-10
            h-10
            rounded-full
            bg-black/50
            text-white
            flex
            items-center
            justify-center
            text-2xl
            hover:bg-black/70
            transition
          "
          aria-label="Next video"
        >
          &#10095;
        </button>

        {/* Dots */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
          {videos.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 w-2 rounded-full transition ${
                currentIndex === index
                  ? "bg-white"
                  : "bg-white/40"
              }`}
              aria-label={`Go to video ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Desktop / Tablet: Existing Grid */}
      <div className="hidden sm:grid grid-cols-2 lg:grid-cols-3 gap-3">
        {videos.map((video, index) => (
          <div
            key={index}
            className="
              mt-4
              rounded-3xl
              lg:rounded-4xl
              overflow-hidden
              bg-black
              w-full
              aspect-[9/16]
            "
          >
            <video
              src={video}
              autoPlay
              muted
              loop
              playsInline
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoRow;
