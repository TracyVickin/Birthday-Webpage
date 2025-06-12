import React from 'react';
import LoveDurationTimer from './LoveDurationTimer';

function Header() {
  return (
    <header className="bg-gradient-to-r from-[#3a5d88] via-[#4878ba] to-[#e48bb9] text-white py-6 px-4 shadow-md rounded-b-2xl">
      <div className="flex flex-col md:flex-row items-center justify-between max-w-5xl mx-auto w-full px-4">
        {/* Left Text Section */}
        <div className="text-center md:text-left">
          <h1 className="text-3xl md:text-4xl text-[#fafbfd] font-bold mb-2">
            🎉 To the Love of my Life ❤️
          </h1>
          <p className="text-lg text-white/90 italic">
            “Every love story is beautiful, but ours is my favorite.” 🎂🎁
          </p>
        </div>

        {/* Timer on the Right */}
        <div className="mt-4 md:mt-0 text-sm md:text-lg text-right">
          <LoveDurationTimer />
        </div>
      </div>
    </header>
  );
}

export default Header;
