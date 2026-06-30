import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star } from 'lucide-react';
import { TESTIMONIALS } from '../../utils/constants';
import Reveal from '../fx/Reveal';
import Marquee from '../fx/Marquee';

const EASE = [0.16, 1, 0.3, 1];
const LOGOS = ['Capital Group', 'Prime Developers', 'Atelier', 'Northwind', 'Boutique Co.', 'Meridian', 'Vance & Co.'];

export default function Testimonials() {
  const [i, setI] = useState(0);
  const active = TESTIMONIALS[i];

  useEffect(() => {
    const id = setInterval(() => setI((p) => (p + 1) % TESTIMONIALS.length), 6000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="bg-[var(--color-bg-primary)] py-28 sm:py-40 overflow-hidden">
      <div className="edge max-w-[80rem] mx-auto">
        <Reveal variant="fade" className="text-center">
          <span className="overline">(05) — Words from clients</span>
        </Reveal>

        <div className="mt-12 sm:mt-16 min-h-[40vh] flex flex-col items-center justify-center text-center">
          <div className="flex items-center gap-1.5 mb-10">
            {[...Array(active.rating)].map((_, s) => (
              <Star key={s} size={18} className="fill-[var(--color-ink)] text-[var(--color-ink)]" />
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.blockquote
              key={i}
              initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -24, filter: 'blur(8px)' }}
              transition={{ duration: 0.7, ease: EASE }}
              className="text-[clamp(1.6rem,3.6vw,3.25rem)] leading-[1.12] tracking-[-0.02em] text-[var(--color-ink)] font-medium max-w-5xl"
            >
              <span className="serif-italic text-[var(--color-muted)]">“</span>
              {active.text}
              <span className="serif-italic text-[var(--color-muted)]">”</span>
            </motion.blockquote>
          </AnimatePresence>

          <div className="mt-10 flex items-center gap-4">
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setI(idx)}
                  aria-label={`Show testimonial ${idx + 1}`}
                  className="h-1.5 rounded-full transition-all duration-500"
                  style={{
                    width: idx === i ? '2rem' : '0.5rem',
                    backgroundColor: idx === i ? 'var(--color-ink)' : 'var(--color-border-strong)',
                  }}
                />
              ))}
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={`meta-${i}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-6 text-sm"
            >
              <span className="font-medium text-[var(--color-ink)]">{active.name}</span>
              <span className="text-[var(--color-muted)]"> — {active.company}</span>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Client wordmark marquee */}
      <div className="mt-20 sm:mt-28 border-y border-[var(--color-border)] py-8">
        <Marquee duration={30}>
          {LOGOS.map((logo, idx) => (
            <span key={idx} className="font-display text-2xl sm:text-3xl text-[var(--color-muted)] px-10 whitespace-nowrap">
              {logo}
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
