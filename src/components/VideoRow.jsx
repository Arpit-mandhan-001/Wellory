import React from "react";

const videos = [
  "/video/video1.mp4",
  "/video/video2.mp4",
  "/video/video3.mp4",
];

const VideoRow = ({
  width = "w-full",
}) => {
  return (
    <div
  className={`
    ${width}
    grid
    grid-cols-1
    sm:grid-cols-2
    lg:grid-cols-3
    gap-3
    px-3
  `}
>
  {videos.map((video, index) => (
    <div
      key={index}
      className="
        mt-2
        sm:mt-4
        rounded-2xl
        sm:rounded-3xl
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

  );
};

export default VideoRow;
