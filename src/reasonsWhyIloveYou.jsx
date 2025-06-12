import React from "react";
import { motion } from "framer-motion";

const reasons = [
  "You’re my precious gift.Loving you is the most beautiful part of my life, and I’m grateful for you every day.",
  "Your love feels like home.Wherever we are, being with you feels like the safest, warmest place in the world.",
  "You love me even when I’m moody. i appreciate your efforts in lifting my spirits and making me smile.",
  "You give the warmest, safest hugs.",
  "You remember the little things. You pay attention to me,my body and everyother details that make me feel special and loved.",
  "You’re my favorite notification. Fuck!! you have no idea how much i smile when i see notifications from you",
  "You always check on me even when you're busy.",
  "You inspire me to be better.Your passion and drive push me to chase my dreams alongside you.",
  "You love the weird parts of me, like my dance moves or my funny face whenever i'm upset or when i act funny, and that means everything.",
  "You’re my favorite person to do nothing with.",
  "Funny times with you lights up my world. Whether it’s your funny dance or the way you randomly position your legs in front of the mirror like your boxing, you make every moment brighter"
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function ReasonsWhyILoveYou() {
  return (
    <motion.div
      className="py-10 px-6 bg-rose-50 text-center"
      initial="hidden"
      animate="show"
      variants={containerVariants}
    >
      <motion.h2
        className="text-4xl font-bold mb-6 text-pink-500"
        variants={itemVariants}
      >
        Reasons Why I Love You
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {reasons.map((reason, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-2xl shadow-lg p-6 border border-pink-100 hover:shadow-xl transition duration-300"
            variants={itemVariants}
          >
            <span className="text-2xl text-pink-500 font-bold">❤️ {index + 1}</span>
            <p className="mt-2 text-gray-700 italic">{reason}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
