import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { ArrowDownRight, ArrowUpRight } from 'lucide-react';
import { COMPANY } from '../../utils/constants';
import Magnetic from '../fx/Magnetic';

const EASE = [0.16, 1, 0.3, 1];

const line = {
  hidden: { y: '115%' },
  show: (i) => ({ y: 0, transition: { duration: 1.1, ease: EASE, delay: 0.5 + i * 0.12 } }),
};

export default function HeroSection() {
  const { scrollY } = useScroll();
  const imgY = useTransform(scrollY, [0, 900], ['0%', '22%']);
  const imgScale = useTransform(scrollY, [0, 900], [1, 1.18]);
  const contentY = useTransform(scrollY, [0, 700], [0, -90]);
  const fade = useTransform(scrollY, [0, 500], [1, 0]);

  // Mouse parallax
  const px = useSpring(useMotionValue(0), { stiffness: 60, damping: 18, mass: 0.4 });
  const py = useSpring(useMotionValue(0), { stiffness: 60, damping: 18, mass: 0.4 });
  const onMouseMove = (e) => {
    const nx = e.clientX / window.innerWidth - 0.5;
    const ny = e.clientY / window.innerHeight - 0.5;
    px.set(nx * 28);
    py.set(ny * 28);
  };

  return (
    <section
      onMouseMove={onMouseMove}
      className="relative min-h-[100svh] flex flex-col justify-between overflow-hidden bg-[var(--color-ink)] pt-28 pb-8"
    >
      {/* Cinematic background with clip reveal + parallax */}
      <motion.div
        initial={{ clipPath: 'inset(100% 0% 0% 0%)' }}
        animate={{ clipPath: 'inset(0% 0% 0% 0%)' }}
        transition={{ duration: 1.4, ease: EASE }}
        className="absolute inset-0 z-0"
      >
        <motion.div style={{ y: imgY, scale: imgScale }} className="absolute inset-0">
          <motion.img
            style={{ x: px, y: py, scale: 1.08 }}
            initial={{ scale: 1.25 }}
            animate={{ scale: 1.08 }}
            transition={{ duration: 2.4, ease: 'easeOut' }}
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
            alt="Modern architectural facade"
            className="w-full h-full object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/40" />
        <div className="absolute inset-0 bg-[var(--color-ink)]/20 mix-blend-multiply" />
      </motion.div>

      <motion.div style={{ y: contentY }} className="relative z-10 edge w-full flex-grow flex flex-col justify-between">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="flex items-center justify-between gap-4 text-white/80"
        >
          <div className="flex items-center gap-3">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-white/70 animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
            </span>
            <span className="overline !text-white/70">Available for new projects</span>
          </div>
          <span className="overline !text-white/70 hidden sm:block">Austin · Worldwide</span>
        </motion.div>

        {/* Headline */}
        <div className="py-6">
          <h1 className="display-hero text-white text-[clamp(2.75rem,12.5vw,12rem)]">
            <span className="reveal-mask">
              <motion.span custom={0} variants={line} initial="hidden" animate="show" className="inline-block">
                We build
              </motion.span>
            </span>
            <span className="reveal-mask">
              <motion.span custom={1} variants={line} initial="hidden" animate="show" className="inline-block">
                <span className="serif-italic font-normal">beautiful</span> digital
              </motion.span>
            </span>
            <span className="reveal-mask">
              <motion.span custom={2} variants={line} initial="hidden" animate="show" className="inline-block">
                experiences<span className="serif-italic">.</span>
              </motion.span>
            </span>
          </h1>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: EASE, delay: 1.1 }}
            className="max-w-md"
          >
            <p className="text-lg text-white/85 font-sans leading-relaxed mb-6">
              {COMPANY.name} designs, builds & ranks websites for brands that refuse to blend in.
            </p>
            <Magnetic strength={0.4}>
              <Link
                to="/contact"
                data-cursor="hover"
                className="btn-primary bg-white text-[var(--color-ink)] border-transparent hover:bg-transparent hover:text-white hover:border-white group"
              >
                Start a project
                <ArrowUpRight size={18} className="transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </Magnetic>
          </motion.div>

          {/* Scroll cue */}
          <motion.div style={{ opacity: fade }} className="hidden md:flex flex-col items-end gap-3 text-white/70">
            <span className="overline !text-white/60">Scroll to explore</span>
            <motion.span
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            >
              <ArrowDownRight size={26} strokeWidth={1.25} />
            </motion.span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
