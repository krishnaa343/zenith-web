import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { SERVICES } from '../../utils/constants';
import Reveal from '../fx/Reveal';

const EASE = [0.16, 1, 0.3, 1];

const PREVIEWS = [
  'https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=1200&auto=format&fit=crop',
];

export default function ServicesShowcase() {
  const items = SERVICES.slice(0, 6);
  const [active, setActive] = useState(null);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const x = useSpring(mx, { stiffness: 180, damping: 22, mass: 0.4 });
  const y = useSpring(my, { stiffness: 180, damping: 22, mass: 0.4 });

  const onMove = (e) => {
    mx.set(e.clientX);
    my.set(e.clientY);
  };

  return (
    <section className="bg-[var(--color-ink)] text-[var(--color-bg-primary)] py-28 sm:py-40 relative overflow-hidden">
      <div className="edge max-w-[100rem] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16 sm:mb-24">
          <div>
            <Reveal variant="fade"><span className="overline !text-white/50">(02) — What we do</span></Reveal>
            <Reveal variant="up" delay={0.05}>
              <h2 className="mt-6 text-[clamp(2.5rem,6vw,5.5rem)] leading-[0.95] tracking-[-0.04em] text-white font-medium">
                Capabilities,<br /><span className="serif-italic font-normal text-white/80">end to end.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal variant="up" delay={0.1}>
            <Link to="/services" data-cursor="hover" className="link-underline text-white/80 hover:text-white font-medium">
              All services <ArrowUpRight size={18} />
            </Link>
          </Reveal>
        </div>

        {/* Interactive list */}
        <div onMouseMove={onMove} onMouseLeave={() => setActive(null)} className="border-t border-white/12">
          {items.map((service, i) => (
            <Link
              key={service.id}
              to="/services"
              data-cursor="view"
              data-cursor-label="Explore"
              onMouseEnter={() => setActive(i)}
              className="group block border-b border-white/12"
            >
              <Reveal variant="up" index={i % 4} amount={0.4}>
                <div className="relative flex items-center gap-6 py-7 sm:py-9 transition-opacity duration-500"
                  style={{ opacity: active === null || active === i ? 1 : 0.32 }}
                >
                  <span className="text-sm font-medium text-white/40 w-10 shrink-0 tabular-nums">
                    0{i + 1}
                  </span>
                  <h3 className="flex-1 text-[clamp(1.75rem,4.5vw,3.5rem)] leading-[1.02] tracking-[-0.03em] text-white font-medium transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-3">
                    {service.title}
                  </h3>
                  <p className="hidden lg:block max-w-xs text-sm text-white/55 leading-relaxed">
                    {service.short}
                  </p>
                  <ArrowUpRight
                    size={28}
                    strokeWidth={1.25}
                    className="shrink-0 text-white/40 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:text-white group-hover:rotate-45"
                  />
                </div>
              </Reveal>
            </Link>
          ))}
        </div>
      </div>

      {/* Cursor-trailing preview */}
      <motion.div
        style={{ x, y }}
        className="pointer-events-none fixed top-0 left-0 z-[60] hidden lg:block"
      >
        <AnimatePresence>
          {active !== null && (
            <motion.div
              key={active}
              initial={{ opacity: 0, scale: 0.85, rotate: -4 }}
              animate={{ opacity: 1, scale: 1, rotate: -2 }}
              exit={{ opacity: 0, scale: 0.85, rotate: 4 }}
              transition={{ duration: 0.5, ease: EASE }}
              className="absolute -translate-x-1/2 -translate-y-1/2 w-[300px] h-[380px] rounded-[1.5rem] overflow-hidden shadow-2xl"
            >
              <img src={PREVIEWS[active]} alt="" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/10" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
