import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronDown, HelpCircle, ArrowRight } from 'lucide-react';
import SEOHead from '../components/common/SEOHead';
import SectionHeader from '../components/common/SectionHeader';
import { FAQ_DATA } from '../utils/constants';
import { pageTransition, fadeInUp, staggerContainer } from '../utils/animations';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
      className="bg-white min-h-screen"
    >
      <SEOHead
        title="FAQ — Answers to Common Digital Questions"
        description="Read detailed answers to common digital queries: website timelines, SEO configurations, app pricing, reinstatements, and payment milestones."
      />

      {/* Hero Banner */}
      <section className="relative pt-44 pb-24 overflow-hidden bg-white select-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] rounded-full bg-blue-100/60 blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
          <span className="section-badge">FAQ Portal</span>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-none text-slate-900 text-balance">
            Frequently Asked Questions
          </h1>
          <p className="text-sm sm:text-base text-slate-500 max-w-2xl mx-auto leading-relaxed text-balance">
            Find clear, professional responses regarding project delivery, SEO practices, Google profile reinstatements, and payment terms.
          </p>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="pb-32 px-6 bg-white select-none">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            label="FAQS"
            title="Clear Responses for Businesses"
            subtitle="Review common questions we receive from managers prior to initiating design and ranking campaigns."
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="space-y-3"
          >
            {FAQ_DATA.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  className={`border transition-all duration-300 overflow-hidden rounded-xl ${
                    isOpen
                      ? 'border-blue-200 shadow-md shadow-blue-50 bg-blue-50/30'
                      : 'border-slate-200 bg-white hover:border-blue-200'
                  }`}
                >
                  {/* Question Header */}
                  <button
                    onClick={() => toggleFAQ(idx)}
                    className="w-full flex items-center justify-between p-6 text-left cursor-pointer focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-3.5 pr-4">
                      <HelpCircle className="text-blue-500 flex-shrink-0" size={18} />
                      <h3 className="text-sm font-bold text-slate-900 leading-snug">
                        {faq.question}
                      </h3>
                    </div>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="text-slate-400 flex-shrink-0"
                    >
                      <ChevronDown size={18} />
                    </motion.div>
                  </button>

                  {/* Answer Body */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                      >
                        <div className="px-6 pb-6 pt-2 border-t border-blue-100">
                          <p className="text-sm text-slate-600 leading-relaxed pl-8">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 bg-slate-900 text-center select-none">
        <div className="max-w-3xl mx-auto px-6 space-y-6">
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">Have a Question Not Listed Here?</h2>
          <p className="text-sm text-slate-400 leading-relaxed">
            Contact our office to clarify details about custom apps, GBP reinstate requests, or API programming options.
          </p>
          <div className="pt-4">
            <Link
              to="/contact"
              className="btn-premium py-3.5 px-8 rounded-xl text-sm inline-flex items-center gap-2 group"
              aria-label="Contact Zenith"
            >
              Get Free Consultation <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
