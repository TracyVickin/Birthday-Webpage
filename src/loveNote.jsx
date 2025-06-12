import React, { useState, useEffect } from "react";

function LoveNote() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className="relative flex justify-center items-center min-h-screen py-10 px-4"
      style={{ backgroundColor: "rgba(205, 133, 157, 0.3)" }}
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-40"
      >
        <source src="/heroImage.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay Content */}
      <div
        className={`relative z-10 max-w-4xl w-full transition-opacity duration-1000 ${
          isVisible ? "opacity-100" : "opacity-0"
        } bg-white/5 backdrop-blur-md p-6 md:p-10 rounded-xl shadow-lg text-black text-center`}
      >
        <h1 className="text-3xl md:text-5xl font-bold mb-6">
          Happy Birthday, My Heart! 💖
        </h1>
        <p className="text-base md:text-lg leading-relaxed whitespace-pre-wrap text-black font-medium text-left">
          My King,

          I still remember the day we met — how normal it seemed, how unaware I was of what you would come to mean to me.
          I never imagined that moment would lead me here, writing this letter with a heart so full of love for you.

          At first, I didn’t think much of it. You were kind, you were warm, and then, without even realizing it,
          I started to smile more. Laugh more. Feel more. Slowly, gently, I grew to like you... then love you...
          and now I can’t stop loving you.

          Every moment we’ve shared has become a memory I treasure: the silly and funny ones, the quiet ones,
          the deep conversations, and even the annoying moments. Being with you made me believe in love again —
          not just the kind you see in movies, but real love — patient, kind, grounding.

          You’ve shown me that love isn’t always fireworks. Sometimes it’s warmth, comfort, safety... home.

          I find myself always looking forward to being around you — to seeing your face, hearing your voice,
          feeling your touch. And every time I leave you, damn!! I feel a quiet ache, like I’ve left a part of me behind.

          You are special to me in a way I can't fully describe. You're not just someone I love; you're someone I cherish,
          someone I always want to spend time with, someone I thank the universe for every single day.

          Thank you for being you, for being mine, for taking care of me and my heart, and for making every day feel like a beautiful adventure.

          I love you so much AYANFE MI — more than I’ve ever loved anyone. And I will keep loving you in all the quiet ways and loud ways,
          in every version of myself, through every season we walk through together.

          Every moment with you is a gift, and today we celebrate the most amazing person I know.

          I love you forever, MY MAN. 💌
        </p>
      </div>
    </div>
  );
}

export default LoveNote;
