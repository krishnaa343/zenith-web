import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';
import SEOHead from '../components/common/SEOHead';
import PageHero from '../components/common/PageHero';
import CTASection from '../components/common/CTASection';
import Reveal from '../components/fx/Reveal';
import { FAQ_DATA } from '../utils/constants';
import { pageTransition } from '../utils/animations';

const EASE = [0.16, 1, 0.3, 1];

function FaqRow({ faq, index, isOpen, onToggle }) {
  return (
    <Reveal variant="up" amount={0.4} className="border-b border-[var(--color-border)]">
      <button onClick={onToggle} data-cursor="hover" className="w-full text-left py-7 sm:py-8 flex items-start gap-5 sm:gap-8 group" aria-expanded={isOpen}>
        <span className="text-sm font-medium text-[var(--color-muted)] w-8 shrink-0 tabular-nums pt-1.5">
          {String(index + 1).padStart(2, '0')}
        </span>
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-6">
            <h3 className="text-xl sm:text-3xl leading-[1.15] tracking-[-0.02em] text-[var(--color-ink)] font-medium">
              {faq.question}
            </h3>
            <span className={`shrink-0 mt-1 w-9 h-9 rounded-full border border-[var(--color-border-strong)] flex items-center justify-center text-[var(--color-ink)] transition-all duration-500 ${isOpen ? 'bg-[var(--color-ink)] text-[var(--color-bg-primary)] rotate-45' : 'group-hover:bg-[var(--color-ink)] group-hover:text-[var(--color-bg-primary)]'}`}>
              <Plus size={16} />
            </span>
          </div>
          <AnimatePresence initial={false}>
            {isOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.45, ease: EASE }}
                className="overflow-hidden"
              >
                <p className="pt-5 max-w-2xl text-lg text-[var(--color-body)] leading-relaxed">{faq.answer}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </button>
    </Reveal>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <motion.div initial="initial" animate="animate" exit="exit" variants={pageTransition} className="bg-[var(--color-bg-primary)]">
      <SEOHead
        title="FAQ — Common Questions"
        description="Answers on project timelines, SEO, app development, Google profile reinstatements, and payment terms."
      />

      <PageHero
        eyebrow="(FAQ)"
        titleLines={['Questions,', <span key="i" className="serif-italic font-normal">answered.</span>]}
        lede="Clear, professional responses on delivery, SEO, reinstatements, and how we work together."
      />

      <section className="edge max-w-[100rem] mx-auto pb-28 sm:pb-40">
        <div className="border-t border-[var(--color-border)] max-w-5xl">
          {FAQ_DATA.map((faq, i) => (
            <FaqRow
              key={i}
              faq={faq}
              index={i}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </section>

      <CTASection
        eyebrow="Still have questions?"
        titleLines={['Let’s talk', <span key="i" className="serif-italic font-normal">it through.</span>]}
        lede="Custom apps, GBP reinstatements, or API work — ask us anything."
        ctaLabel="Get in touch"
      />
    </motion.div>
  );
}
