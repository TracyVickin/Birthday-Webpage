import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

function LoveDurationTimer() {
  const [timeElapsed, setTimeElapsed] = useState('');

  useEffect(() => {
    const startDate = new Date('2024-09-15T00:00:00');
    
    const updateTimer = () => {
      const now = new Date();
      const diff = now - startDate;

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeElapsed(`${days}d ${hours}h ${minutes}m ${seconds}s`);
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="font-semibold text-white bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full shadow"
      animate={{ y: [0, -5, 0] }}
      transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
    >
      💞 We've Been Together for: {timeElapsed}
    </motion.div>
  );
}

export default LoveDurationTimer;
