import React from "react";

function Footer() {
  return (
    <footer className="w-full bg-gradient-to-r from-[#3a5d88] via-[#4878ba] to-[#e48bb9] text-white py-6 shadow-inner">
      <div className="max-w-4xl mx-auto text-center px-4">
        <p className="text-sm mb-2">
          Made with 💖 by Your Queen
        </p>
        <p className="text-xs text-[#fafbfd]">
          <span className="text-lg text-[#fafbfd]">This love story is forever.</span>
          <br />
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;