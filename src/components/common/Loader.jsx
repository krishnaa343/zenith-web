import React from 'react';
import { motion } from 'framer-motion';

export default function Loader() {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-bg-primary text-white select-none">
      <div className="relative flex items-center justify-center">
        {/* Ring 1 */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
          className="w-16 h-16 rounded-full border-2 border-t-accent-primary border-r-transparent border-b-highlight border-l-transparent"
        />
        {/* Ring 2 */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
          className="absolute w-10 h-10 rounded-full border-2 border-t-highlight border-r-transparent border-b-accent-secondary border-l-transparent"
        />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="mt-8 text-[9px] font-bold tracking-widest uppercase text-text-secondary"
      >
        Zenith Web Solutions
      </motion.div>
    </div>
  );
}
