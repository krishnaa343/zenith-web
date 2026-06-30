import React, { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import SEOHead from '../components/common/SEOHead';
import PageHero from '../components/common/PageHero';
import CTASection from '../components/common/CTASection';
import Reveal from '../components/fx/Reveal';
import { PROCESS_STEPS } from '../utils/constants';
import { pageTransition } from '../utils/animations';

export default function Process() {
  const listRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: listRef, offset: ['start center', 'end center'] });

  return (
    <motion.div initial="initial" animate="animate" exit="exit" variants={pageTransition} className="bg-[var(--color-bg-primary)]">
      <SEOHead
        title="Process — How We Work"
        description="Our structured delivery pipeline: discovery, strategy, design, development, QA, SEO, deployment, and ongoing support."
      />

      <PageHero
        eyebrow="(How we work)"
        titleLines={['A proven', <span key="i" className="serif-italic font-normal">framework.</span>]}
        lede="Nine deliberate phases, refined across dozens of launches — so every project moves with momentum and zero guesswork."
      />

      <section className="edge max-w-[100rem] mx-auto pb-28 sm:pb-40 grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-32">
            <span className="overline">The pipeline</span>
            <p className="mt-5 text-lg text-[var(--color-body)] leading-relaxed max-w-xs">
              From the first call to long after launch, every stage is mapped, transparent, and accountable.
            </p>
          </div>
        </div>

        <div ref={listRef} className="lg:col-span-8 relative pl-8 lg:pl-12">
          <div className="absolute left-0 top-2 bottom-2 w-px bg-[var(--color-border-strong)]" />
          <motion.div style={{ scaleY: scrollYProgress }} className="absolute left-0 top-2 bottom-2 w-px bg-[var(--color-ink)] origin-top" />

          {PROCESS_STEPS.map((step) => (
            <Reveal key={step.step} variant="up" amount={0.5} className="relative py-8 lg:py-11 border-b border-[var(--color-border)] last:border-b-0">
              <span className="absolute -left-[2.1rem] lg:-left-[3.1rem] top-10 lg:top-12 w-3 h-3 rounded-full bg-[var(--color-ink)] -translate-x-1/2" />
              <div className="flex items-baseline gap-5">
                <span className="font-display italic text-3xl sm:text-4xl text-[var(--color-muted)] leading-none tabular-nums">
                  {String(step.step).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-medium tracking-tight text-[var(--color-ink)]">{step.title}</h3>
                  <p className="mt-3 max-w-lg text-[var(--color-body)] leading-relaxed">{step.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CTASection
        eyebrow="Ready to begin?"
        titleLines={['Let’s start', <span key="i" className="serif-italic font-normal">with phase one.</span>]}
        lede="A free consultation to map your sitemap, timeline, and goals."
        ctaLabel="Book a consultation"
      />
    </motion.div>
  );
}
