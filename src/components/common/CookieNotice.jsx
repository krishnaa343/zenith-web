import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CookieNotice() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem('zenith-cookies-accepted');
    if (!accepted) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1500);
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
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="fixed bottom-0 left-0 w-full z-50 p-6 flex items-center justify-center select-none"
        >
          <div className="max-w-3xl w-full bg-[#0b1020]/90 backdrop-blur-xl border border-white/5 p-5 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 shadow-2xl">
            <p className="text-xs text-text-secondary leading-relaxed font-light text-center sm:text-left">
              We use cookies to improve your user experience and analyze website traffic. By using our site, you agree to our use of cookies.
            </p>
            <button
              onClick={handleAccept}
              className="btn-luxury py-2 px-6 rounded-full text-xs cursor-pointer flex-shrink-0"
            >
              Accept Consent
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
