import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Plus, ArrowUpRight } from 'lucide-react';
import SEOHead from '../components/common/SEOHead';
import PageHero from '../components/common/PageHero';
import CTASection from '../components/common/CTASection';
import Reveal from '../components/fx/Reveal';
import { SERVICES } from '../utils/constants';
import { pageTransition } from '../utils/animations';

const EASE = [0.16, 1, 0.3, 1];

function ServiceRow({ service, index, isOpen, onToggle }) {
  const Icon = service.icon;
  return (
    <Reveal variant="up" amount={0.3} className="border-b border-[var(--color-border)]">
      <button
        onClick={onToggle}
        data-cursor="hover"
        className="w-full text-left py-8 sm:py-10 flex items-start gap-5 sm:gap-8 group"
        aria-expanded={isOpen}
      >
        <span className="text-sm font-medium text-[var(--color-muted)] w-8 shrink-0 tabular-nums pt-3">
          {String(index + 1).padStart(2, '0')}
        </span>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-4">
            <h3 className="text-[clamp(1.6rem,3.6vw,3rem)] leading-[1.02] tracking-[-0.03em] text-[var(--color-ink)] font-medium transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-2">
              {service.title}
            </h3>
            <span className={`shrink-0 w-11 h-11 rounded-full border border-[var(--color-border-strong)] flex items-center justify-center text-[var(--color-ink)] transition-all duration-500 ${isOpen ? 'bg-[var(--color-ink)] text-[var(--color-bg-primary)] rotate-45' : 'group-hover:bg-[var(--color-ink)] group-hover:text-[var(--color-bg-primary)]'}`}>
              <Plus size={18} />
            </span>
          </div>

          <AnimatePresence initial={false}>
            {isOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.5, ease: EASE }}
                className="overflow-hidden"
              >
                <div className="pt-8 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                  <div className="md:col-span-2 flex items-start gap-3">
                    <Icon size={22} strokeWidth={1.5} className="text-[var(--color-ink)] mt-1 shrink-0" />
                    <p className="text-lg leading-relaxed text-[var(--color-ink)]">{service.overview}</p>
                  </div>

                  <div>
                    <h4 className="overline mb-4">What&apos;s included</h4>
                    <ul className="space-y-2.5">
                      {service.included.map((inc, i) => (
                        <li key={i} className="flex items-start gap-3 text-[var(--color-body)]">
                          <span className="mt-2 w-1 h-1 rounded-full bg-[var(--color-ink)] shrink-0" />
                          <span>{inc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="overline mb-4">Benefits</h4>
                    <ul className="space-y-2.5">
                      {service.benefits.map((ben, i) => (
                        <li key={i} className="flex items-start gap-3 text-[var(--color-body)]">
                          <span className="mt-2 w-1 h-1 rounded-full bg-[var(--color-ink)] shrink-0" />
                          <span>{ben}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="md:col-span-2 pt-2">
                    <Link to="/contact" data-cursor="hover" className="link-underline text-[var(--color-ink)] font-medium">
                      Inquire about {service.title} <ArrowUpRight size={16} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </button>
    </Reveal>
  );
}

export default function Services() {
  const [openId, setOpenId] = useState(SERVICES[0]?.id ?? null);

  return (
    <motion.div initial="initial" animate="animate" exit="exit" variants={pageTransition} className="bg-[var(--color-bg-primary)]">
      <SEOHead
        title="Services — Design, Development & SEO"
        description="Custom website design, high-performance development, technical and local SEO, and Google Business Profile management."
      />

      <PageHero
        eyebrow="(Services)"
        titleLines={['Capabilities,', <span key="i" className="serif-italic font-normal">end to end.</span>]}
        lede="From first sketch to first-page ranking — a full-stack studio covering design, engineering, and search."
      />

      <section className="edge max-w-[100rem] mx-auto pb-28 sm:pb-40">
        <div className="border-t border-[var(--color-border)]">
          {SERVICES.map((service, i) => (
            <ServiceRow
              key={service.id}
              service={service}
              index={i}
              isOpen={openId === service.id}
              onToggle={() => setOpenId(openId === service.id ? null : service.id)}
            />
          ))}
        </div>
      </section>

      <CTASection
        eyebrow="Need a bespoke solution?"
        titleLines={['Let’s scope', <span key="i" className="serif-italic font-normal">your project.</span>]}
        lede="Custom layouts, multi-tier platforms, or full search campaigns — tell us what you're building."
      />
    </motion.div>
  );
}
