import React, { useEffect, useState, useRef } from "react";

function ToastMessage({ playSound }) {
  const [show, setShow] = useState(true);
  const audioRef = useRef(null);

  useEffect(() => {
    if (playSound && audioRef.current) {
      audioRef.current.play().catch(() => {});
    }

    const timer = setTimeout(() => setShow(false), 10000);
    return () => clearTimeout(timer);
  }, [playSound]);

  if (!show) return null;

  return (
    <>
      {/* Ding sound */}
      <audio ref={audioRef}>
        <source src="/ding.mp3" type="audio/mp3" />
      </audio>

      {/* Toast Box */}
      <div className="fixed top-6 left-1/2 transform -translate-x-1/2 bg-white text-pink-700 border border-pink-300 px-4 py-3 rounded-xl shadow-lg z-50 text-sm md:text-base animate-fadeIn flex items-center gap-3">
        💻 <span>For the best experience, please open this on your laptop ❤️</span>
        <button
          onClick={() => setShow(false)}
          className="ml-auto text-pink-700 hover:text-red-500 text-xl font-bold focus:outline-none"
          aria-label="Close Toast"
        >
          &times;
        </button>
      </div>

      {/* Fade-in animation */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px) translateX(-50%);
          }
          to {
            opacity: 1;
            transform: translateY(0) translateX(-50%);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-in-out;
        }
      `}</style>
    </>
  );
}

export default ToastMessage;
