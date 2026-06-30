import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Reveal from '../fx/Reveal';

const STEPS = [
  { n: '01', title: 'Discovery', desc: 'We align on goals, audience, and positioning — then define a scope with no ambiguity.' },
  { n: '02', title: 'Strategy', desc: 'Competitor audits, keyword maps, and an architecture built for search and conversion.' },
  { n: '03', title: 'Design', desc: 'High-fidelity, custom interfaces — considered typography, spacing, and motion.' },
  { n: '04', title: 'Build', desc: 'Clean, componentized React. Fast, accessible, and ready for the search engines.' },
  { n: '05', title: 'Launch & grow', desc: 'Deploy, monitor, and optimize. We treat your site as a living asset, not a one-off.' },
];

export default function ProcessTimeline() {
  const listRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: listRef, offset: ['start center', 'end center'] });

  return (
    <section className="bg-[var(--color-bg-secondary)] py-28 sm:py-40 overflow-hidden">
      <div className="edge max-w-[100rem] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">

        {/* Sticky left */}
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-32">
            <Reveal variant="fade"><span className="overline">(04) — How we work</span></Reveal>
            <h2 className="mt-6 text-[clamp(2.5rem,5.5vw,5rem)] leading-[0.95] tracking-[-0.04em] text-[var(--color-ink)] font-medium">
              A proven<br /><span className="serif-italic font-normal">framework.</span>
            </h2>
            <p className="mt-6 max-w-sm text-[var(--color-body)] leading-relaxed">
              Five deliberate phases, refined across dozens of launches — so every project moves with momentum and zero guesswork.
            </p>
            <Reveal variant="up" delay={0.15} className="mt-8">
              <Link to="/process" data-cursor="hover" className="link-underline text-[var(--color-ink)] font-medium">
                The full process <ArrowUpRight size={18} />
              </Link>
            </Reveal>
          </div>
        </div>

        {/* Steps */}
        <div ref={listRef} className="lg:col-span-7 relative pl-8 lg:pl-12">
          {/* Track + progress fill */}
          <div className="absolute left-0 top-2 bottom-2 w-px bg-[var(--color-border-strong)]" />
          <motion.div
            style={{ scaleY: scrollYProgress }}
            className="absolute left-0 top-2 bottom-2 w-px bg-[var(--color-ink)] origin-top"
          />

          {STEPS.map((s) => (
            <Reveal key={s.n} variant="up" amount={0.5} className="relative pb-0 py-8 lg:py-12 border-b border-[var(--color-border)] last:border-b-0">
              <span className="absolute -left-[2.1rem] lg:-left-[3.1rem] top-9 lg:top-13 w-3 h-3 rounded-full bg-[var(--color-ink)] -translate-x-1/2" />
              <div className="flex items-baseline gap-5">
                <span className="font-display italic text-3xl sm:text-4xl text-[var(--color-muted)] leading-none">{s.n}</span>
                <div>
                  <h3 className="text-2xl sm:text-4xl font-medium tracking-tight text-[var(--color-ink)]">{s.title}</h3>
                  <p className="mt-3 max-w-md text-[var(--color-body)] leading-relaxed">{s.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
