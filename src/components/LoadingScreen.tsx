import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[100] bg-navy flex flex-col items-center justify-center"
      style={{ pointerEvents: isVisible ? 'all' : 'none' }}
    >
      <div className="flex flex-col items-center">
        <span className="text-3xl font-bold tracking-tight text-white">AZATECH</span>
        <div className="w-24 h-0.5 bg-gold mt-3 overflow-hidden">
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: '0%' }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            className="w-full h-full bg-gold"
          />
        </div>
        <span className="text-[10px] tracking-[0.2em] uppercase text-gold font-medium mt-3">
          Global Supply Chain
        </span>
      </div>
    </motion.div>
  );
}