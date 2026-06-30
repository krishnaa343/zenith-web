import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import SEOHead from '../components/common/SEOHead';
import Magnetic from '../components/fx/Magnetic';
import MaskReveal from '../components/fx/MaskReveal';
import Reveal from '../components/fx/Reveal';
import { pageTransition } from '../utils/animations';

export default function NotFound() {
  return (
    <motion.div
      initial="initial" animate="animate" exit="exit" variants={pageTransition}
      className="min-h-screen flex flex-col items-center justify-center bg-[var(--color-ink)] text-white text-center edge select-none"
    >
      <SEOHead title="404 — Page Not Found" description="The requested page could not be found." />

      <h1 className="display-hero text-[clamp(6rem,28vw,22rem)] text-white leading-none">
        <MaskReveal>404</MaskReveal>
      </h1>
      <Reveal variant="up" delay={0.1}>
        <p className="mt-6 text-xl text-white/70 max-w-md">
          This page drifted off the <span className="serif-italic">grid.</span> Let’s get you back.
        </p>
      </Reveal>
      <Reveal variant="up" delay={0.2} className="mt-10">
        <Magnetic strength={0.45}>
          <Link to="/" data-cursor="hover" className="btn-primary bg-white text-[var(--color-ink)] border-transparent hover:bg-transparent hover:text-white hover:border-white">
            <ArrowLeft size={18} /> Back home
          </Link>
        </Magnetic>
      </Reveal>
    </motion.div>
  );
}
