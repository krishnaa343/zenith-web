import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CookieNotice() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem('zenith-cookies-accepted');
    if (!accepted) {
      const timer = setTimeout(() => setIsVisible(true), 1800);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('zenith-cookies-accepted', 'true');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-4 left-0 w-full z-[60] px-4 flex justify-center select-none"
        >
          <div className="glass-card max-w-2xl w-full p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-[var(--color-body)] leading-relaxed text-center sm:text-left">
              We use cookies to improve your experience and analyze traffic. By using our site, you agree to our use of cookies.
            </p>
            <button
              onClick={handleAccept}
              data-cursor="hover"
              className="btn-primary py-2.5 px-6 text-sm shrink-0"
            >
              Accept
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
