import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Check, ArrowUpRight } from 'lucide-react';
import SEOHead from '../components/common/SEOHead';
import PageHero from '../components/common/PageHero';
import SectionHeader from '../components/common/SectionHeader';
import CTASection from '../components/common/CTASection';
import Reveal from '../components/fx/Reveal';
import Magnetic from '../components/fx/Magnetic';
import { PRICING_PLANS } from '../utils/constants';
import { pageTransition } from '../utils/animations';

function PlanCard({ plan }) {
  const dark = plan.highlighted;
  return (
    <div
      className={`flex flex-col rounded-[1.75rem] border p-8 sm:p-10 h-full transition-transform duration-500 ${
        dark
          ? 'bg-[var(--color-ink)] border-[var(--color-ink)] text-white lg:-translate-y-4'
          : 'bg-[var(--color-bg-card)] border-[var(--color-border)] text-[var(--color-ink)]'
      }`}
    >
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-medium">{plan.name}</h3>
        {dark && <span className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] bg-white/15 px-3 py-1 rounded-full">Popular</span>}
      </div>
      <p className={`mt-4 leading-relaxed ${dark ? 'text-white/60' : 'text-[var(--color-body)]'}`}>{plan.description}</p>

      <div className={`mt-8 pt-8 border-t ${dark ? 'border-white/15' : 'border-[var(--color-border)]'}`}>
        <span className="font-display italic text-4xl">Custom</span>
        <span className={`block mt-2 overline ${dark ? '!text-white/45' : ''}`}>Bespoke proposal</span>
      </div>

      <ul className="mt-8 space-y-3.5 flex-grow">
        {plan.features.map((feat, i) => (
          <li key={i} className={`flex items-start gap-3 ${dark ? 'text-white/80' : 'text-[var(--color-body)]'}`}>
            <Check size={16} className={`mt-1 shrink-0 ${dark ? 'text-white' : 'text-[var(--color-ink)]'}`} />
            <span className="leading-snug">{feat}</span>
          </li>
        ))}
      </ul>

      <Magnetic strength={0.35} className="mt-10 w-full">
        <Link
          to="/contact"
          data-cursor="hover"
          className={`w-full justify-center btn-${dark ? 'primary' : 'secondary'} ${dark ? '!bg-white !text-[var(--color-ink)] !border-white hover:!bg-transparent hover:!text-white' : ''}`}
        >
          Request a quote <ArrowUpRight size={16} />
        </Link>
      </Magnetic>
    </div>
  );
}

export default function Pricing() {
  return (
    <motion.div initial="initial" animate="animate" exit="exit" variants={pageTransition} className="bg-[var(--color-bg-primary)]">
      <SEOHead
        title="Pricing — Transparent Engagement Tiers"
        description="Starter, Business, and Enterprise tiers with transparent milestone-based payment terms for every web engagement."
      />

      <PageHero
        eyebrow="(Investment)"
        titleLines={['Transparent', <span key="i" className="serif-italic font-normal">pricing.</span>]}
        lede="Every engagement is scoped to a clear proposal — fixed deliverables, honest timelines, no surprises."
      />

      <section className="edge max-w-[100rem] mx-auto pb-24 sm:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {PRICING_PLANS.map((plan, i) => (
            <Reveal key={plan.name} variant="up" index={i} className="h-full">
              <PlanCard plan={plan} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Payment terms */}
      <section className="bg-[var(--color-bg-secondary)] py-28 sm:py-40">
        <div className="edge max-w-[100rem] mx-auto">
          <SectionHeader
            label="(Payment terms)"
            titleLines={['Simple', <span key="i" className="serif-italic font-normal">milestones.</span>]}
            subtitle="To keep development focused on your project, we work on a standard two-stage schedule."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { pct: '30%', label: 'Advance retainer', desc: 'Due before kickoff. Secures your timeline slot, schedules design mockups, and initiates competitor research.' },
              { pct: '70%', label: 'On completion', desc: 'Due after the site is built, approved during testing, and successfully deployed to your live domain.' },
            ].map((t, i) => (
              <Reveal key={i} variant="up" index={i} className="bento-card p-10">
                <span className="font-display italic text-6xl text-[var(--color-ink)]">{t.pct}</span>
                <h3 className="mt-4 overline">{t.label}</h3>
                <p className="mt-4 text-[var(--color-body)] leading-relaxed">{t.desc}</p>
              </Reveal>
            ))}
          </div>
          <Reveal variant="fade" className="mt-8">
            <p className="overline">* Ongoing SEO &amp; maintenance plans are billed monthly.</p>
          </Reveal>
        </div>
      </section>

      <CTASection
        eyebrow="Need a custom model?"
        titleLines={['Let’s structure', <span key="i" className="serif-italic font-normal">the right plan.</span>]}
        lede="Enterprise support, API integrations, or multi-location SEO — we'll tailor the engagement."
        ctaLabel="Get started"
      />
    </motion.div>
  );
}
