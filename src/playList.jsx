// src/playList.js

import React, { useState } from "react";
import ReactPlayer from "react-player";

const videos = [
  {
    title: "This Song Describes How Much I Love You",
    url: "https://www.youtube.com/watch?v=Rj3hEAOyZqQ&list=RDRj3hEAOyZqQ&start_radio=1",
  },
  {
    title: "You Made Me Love This Song, (i think about you, your touch whenever I hear it)",
    url: "https://www.youtube.com/watch?v=Mx92lTYxrJQ",
  },
  {
    title: "Song Three",
    url: "https://www.youtube.com/watch?v=VIDEO_ID_3",
  },
];

export default function Playlist() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prev) => (prev === 0 ? videos.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrentIndex((prev) => (prev === videos.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="my-6 px-4 text-center" 
    style={{ backgroundColor: "rgba(205, 133, 157, 0.3)" }}>
      <h2 className="text-4xl font-bold mb-4 text-pink-500">Songs That Expresses Our Love</h2>
      <h3 className="text-xl mb-2 text-gray-800">{videos[currentIndex].title}</h3>

      <div className="max-w-[11000px] mx-auto shadow-lg rounded overflow-hidden">
        <ReactPlayer
          url={videos[currentIndex].url}
          controls
          width="100%"
          height="400px"
        />
      </div>

      <div className="mt-4 flex justify-center gap-4">
        <button
          onClick={prev}
          className="px-4 py-2 bg-white text-pink-500 border border-pink-300 rounded hover:bg-pink-50 shadow"
        >
          ⬅ Previous
        </button>
        <button
          onClick={next}
          className="px-4 py-2 bg-white text-pink-500 border border-pink-300 rounded hover:bg-pink-50 shadow"
        >
          Next ➡
        </button>
      </div>
    </div>
  );
}
