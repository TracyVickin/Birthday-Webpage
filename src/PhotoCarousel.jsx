import React, { useState } from "react";

const mediaItems = [
  { type: "image", src: "/picture1.jpeg", alt: "Picture 1"},
  { type: "video", src: "/video1.mp4", alt: "Video 1" },
  { type: "image", src: "/picture2.jpeg", alt: "Picture 2"},
  { type: "video", src: "/video2.mp4", alt: "Video 2" },
  { type: "image", src: "/picture3.jpeg", alt: "Picture 3"},
  { type: "video", src: "/video3.mp4", alt: "Video 3" },
  { type: "video", src: "/video9.mp4", alt: "Video 9" },
  { type: "video", src: "/video4.mp4", alt: "Video 4" },
  { type: "image", src: "/picture4.jpeg", alt: "Picture 4"},
  { type: "video", src: "/video5.mp4", alt: "Video 5" },
  { type: "video", src: "/video6.jpeg", alt: "Video 6" },
  { type: "video", src: "/video7.jpeg", alt: "Video 7"},
  { type: "video", src: "/video8.jpeg", alt: "Video 8"},
  { type: "video", src: "/video10.mp4", alt: "Video 10"},
  { type: "video", src: "/video11.mp4", alt: "Video 11"},
  { type: "video", src: "/video12.mp4", alt: "Video 12"},
  { type: "video", src: "/video13.mp4", alt: "Video 13"},
];

 function PhotoCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? mediaItems.length - 1 : prevIndex - 1
    );
  };

  const next = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === mediaItems.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentItem = mediaItems[currentIndex];

  return (
    <div
      className="relative mx-auto overflow-hidden rounded-lg shadow-lg max-h-[900px] w-full py-6 my-6"
      style={{ backgroundColor: "rgba(205, 133, 157, 0.3)" }}
    >
      <h1 className="text-4xl text-center font-bold mb-4  text-pink-500">Our Memories</h1>
      <div className="max-w-[1100px] h-[800px] bg-black mx-auto flex items-center justify-center rounded">
        {currentItem.type === "image" ? (
          <img
            src={currentItem.src}
            alt={currentItem.alt}
            className="w-full h-full object-cover rounded"
          />
        ) : (
          <video
            src={currentItem.src}
            controls
            className="w-full h-full object-cover rounded"
          />
        )}
      </div>

      {/* Previous Button */}
      <button
        onClick={prev}
        className="absolute left-2 top-1/2 -translate-y-1/2  bg-white text-pink-500 border border-pink-300 hover:bg-pink-50  p-3 rounded-full shadow"
      >
        &#8592; Previous
      </button>

      {/* Next Button */}
      <button
        onClick={next}
        className="absolute right-2 top-1/2 -translate-y-1/2  bg-white text-pink-500 border border-pink-300 hover:bg-pink-50 p-3 rounded-full shadow"
      >
        Next &#8594;
      </button>
    </div>
  );
}

export default PhotoCarousel;
