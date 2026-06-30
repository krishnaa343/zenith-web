import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { COMPANY } from '../../utils/constants';
import Magnetic from '../fx/Magnetic';
import Marquee from '../fx/Marquee';
import Reveal from '../fx/Reveal';
import MaskReveal from '../fx/MaskReveal';

export default function HomeCTA() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const marqueeX = useTransform(scrollYProgress, [0, 1], ['0%', '-12%']);
  const glow = useTransform(scrollYProgress, [0, 0.5, 1], [0.06, 0.16, 0.06]);

  return (
    <section ref={ref} className="relative bg-[var(--color-ink)] text-white overflow-hidden">
      {/* Oversized ghost marquee behind */}
      <motion.div style={{ x: marqueeX }} className="absolute inset-x-0 top-1/2 -translate-y-1/2 pointer-events-none select-none">
        <div className="whitespace-nowrap text-[22vw] leading-none font-medium tracking-tighter text-white/[0.04]">
          let&apos;s talk — let&apos;s talk — let&apos;s talk —
        </div>
      </motion.div>

      {/* Soft radial glow that breathes with scroll */}
      <motion.div style={{ opacity: glow }} className="absolute inset-0 pointer-events-none">
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] rounded-full"
          style={{ background: 'radial-gradient(circle, #ffffff, transparent 60%)' }}
        />
      </motion.div>

      <div className="relative z-10 edge max-w-[100rem] mx-auto py-32 sm:py-48 flex flex-col items-center text-center">
        <Reveal variant="fade">
          <span className="overline !text-white/50">Have a project in mind?</span>
        </Reveal>

        <h2 className="mt-8 text-[clamp(2.75rem,9vw,9rem)] leading-[0.9] tracking-[-0.045em] font-medium text-white">
          <MaskReveal>Let&apos;s build</MaskReveal>
          <MaskReveal delay={0.08}>something <span className="serif-italic font-normal">exceptional.</span></MaskReveal>
        </h2>

        <Reveal variant="up" delay={0.2} className="mt-14">
          <Magnetic strength={0.5} className="rounded-full">
            <Link
              to="/contact"
              data-cursor="hover"
              className="group inline-flex items-center gap-4 bg-white text-[var(--color-ink)] rounded-full pl-9 pr-3 py-3 text-lg font-medium transition-colors duration-500 hover:bg-transparent hover:text-white border border-white"
            >
              Start a project
              <span className="w-12 h-12 rounded-full bg-[var(--color-ink)] text-white flex items-center justify-center transition-all duration-500 group-hover:bg-white group-hover:text-[var(--color-ink)] group-hover:rotate-45">
                <ArrowUpRight size={20} />
              </span>
            </Link>
          </Magnetic>
        </Reveal>

        <Reveal variant="fade" delay={0.35} className="mt-10">
          <a
            href={`mailto:${COMPANY.email}`}
            data-cursor="hover"
            className="link-underline text-white/60 hover:text-white text-base"
          >
            or say {COMPANY.email}
          </a>
        </Reveal>
      </div>

      {/* Bottom keyword marquee */}
      <div className="relative z-10 border-t border-white/10 py-6">
        <Marquee duration={26}>
          {['Design', 'Development', 'SEO', 'Branding', 'Strategy', 'Growth'].map((w, idx) => (
            <span key={idx} className="text-white/40 text-sm uppercase tracking-[0.3em] px-8">{w}</span>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
