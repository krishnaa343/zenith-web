import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import SEOHead from '../components/common/SEOHead';
import { pageTransition, fadeInUp } from '../utils/animations';

export default function NotFound() {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
      className="min-h-screen flex items-center justify-center bg-bg-primary text-center text-white px-6 select-none"
    >
      <SEOHead
        title="404 — Page Not Found"
        description="The requested URL was not found on Zenith Web Solutions. Return to the home screen or contact support."
      />

      <div className="space-y-6 max-w-lg">
        {/* Giant text */}
        <motion.div
          variants={fadeInUp}
          className="text-8xl sm:text-9xl font-black bg-gradient-to-r from-accent-primary to-highlight bg-clip-text text-transparent select-none"
        >
          404
        </motion.div>

        {/* Heading */}
        <motion.h1
          variants={fadeInUp}
          className="text-lg sm:text-xl font-bold tracking-wider uppercase text-white"
        >
          Page Not Found
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={fadeInUp}
          className="text-xs sm:text-sm text-text-secondary leading-relaxed font-light max-w-sm mx-auto"
        >
          The page you are looking for does not exist or has been relocated to another route.
        </motion.p>

        {/* Redirect Action */}
        <motion.div
          variants={fadeInUp}
          className="pt-4"
        >
          <Link
            to="/"
            className="btn-luxury py-2.5 px-6 rounded-full text-xs font-bold inline-flex items-center gap-2"
            aria-label="Go to homepage"
          >
            <ArrowLeft size={14} /> Back to Dashboard
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}
