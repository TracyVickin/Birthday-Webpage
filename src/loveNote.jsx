import React, { useState, useEffect } from "react";

function LoveNote() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 500);
  }, []);

  return (
    <div className="relative flex justify-center items-center min-h-screen my-6" 
         style={{ backgroundColor: "rgba(205, 133, 157, 0.3)" }} >
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full max-w-[1200px] max-h-[1000px] h-full object-cover z-0 opacity-50 rounded-xl"
      >
        <source src="/heroImage.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay Content */}
      <div
        className={`relative z-10 text-center transition-opacity duration-1000 ${
          isVisible ? "opacity-100" : "opacity-0"
        } p-6 text-black`}
      >
        <h1 className="text-5xl font-bold mb-4 ">Happy Birthday, My Heart!</h1>
        <p className="text-xl text-black font-bold">
        My King,<br></br>

            I still remember the day we met how normal it seemed, how unaware I was of what you would come to mean to me. <br></br>I never imagined that moment would lead me here, writing this letter with a heart so full of love for you.
            At first,<br></br> I didn’t think much of it. You were kind, you were warm, and then, without even realizing it, I started to smile more.<br></br> Laugh more. Feel more. Slowly, gently, I grew to like you... then love you... and now I can’t stop loving you.<br></br>
            Every moment we’ve shared has become a memory I treasure, the silly and funny ones, the quiet ones, the deep <br></br>conversations, and even the annoying moments. Being with you made me believe in love again. Not just the kind <br></br>you see in movies, but real love, patient, kind, grounding. You’ve shown me that love isn’t always fireworks.<br></br> Sometimes it’s warmth, comfort, safety... home.
            I find myself always looking forward to being around you, <br></br>to seeing your face, hearing your voice, feeling your touch. And every time I leave you, damn!! i feel a quite ache making <br></br>me feel sick. I feel incomplete, like I’ve left a part of me behind because in many ways, I have discovered that <br></br>we bond and connect well.
            You are special to me in a way I can't fully describe. You're not just someone I love; <br></br>you're someone I cherish, someone I always want to spend time with and always want in my space,<br></br> someone I thank the universe for every single day.
            I am so grateful for you, for us, and for the love we share. <br></br>Thank you for being you, for being mine, for taking care of me and my Heart and for making every day feel like<br></br> a beautiful adventure.
            I love you so much AYANFE MI, more than I’ve ever loved anyone.<br></br> And I will keep loving you in all the quiet ways and loud ways, in every version of myself, through every <br></br>season we walk through together.
            Every moment with you is a gift, and today we celebrate the most amazing person I know. <br></br>I love you forever MY MAN. 💌
        </p>
      </div>
    </div>
  );
}

export default LoveNote;
