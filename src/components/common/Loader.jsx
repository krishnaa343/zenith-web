import React from 'react';
import { motion } from 'framer-motion';

export default function Loader() {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[var(--color-bg-primary)] select-none">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1.4, repeat: Infinity, ease: 'linear' }}
        className="w-12 h-12 rounded-full border border-[var(--color-border-strong)] border-t-[var(--color-ink)]"
      />
      <motion.div
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="mt-7 overline"
      >
        Zenith
      </motion.div>
    </div>
  );
}
