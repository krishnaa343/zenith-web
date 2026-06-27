import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Check, CheckCircle2, ChevronDown, ArrowRight } from 'lucide-react';
import SEOHead from '../components/common/SEOHead';
import SectionHeader from '../components/common/SectionHeader';
import { SERVICES } from '../utils/constants';
import { pageTransition, fadeInUp, staggerContainer } from '../utils/animations';

export default function Services() {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
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
        title="Expertise — Website Design, Full-Stack Dev, Local SEO"
        description="Explore our digital agency capabilities: custom React layouts, Technical SEO indexing audits, Google reinstatements, and secure custom APIs."
      />

      {/* Hero Banner */}
      <section className="relative pt-44 pb-24 overflow-hidden bg-white select-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] rounded-full bg-blue-100/60 blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
          <span className="section-badge">Our Expertise</span>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-none text-slate-900 text-balance">
            Digital Engineering Services
          </h1>
          <p className="text-sm sm:text-base text-slate-500 max-w-2xl mx-auto leading-relaxed text-balance">
            We offer custom website design, technical search engine optimization, local profile management, and custom database integrations.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="pb-32 px-6 sm:px-8 lg:px-12 bg-white select-none">
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            label="Service Options"
            title="Explore Our Capabilities"
            subtitle="Click on any capability card below to expand and view detailed overviews, deliverables, benefits, and inclusions."
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="space-y-4"
          >
            {SERVICES.map((service) => {
              const Icon = service.icon;
              const isExpanded = expandedId === service.id;

              return (
                <motion.div
                  key={service.id}
                  variants={fadeInUp}
                  className={`bg-white border transition-all duration-400 overflow-hidden rounded-2xl ${
                    isExpanded
                      ? 'border-blue-200 shadow-lg shadow-blue-50'
                      : 'border-slate-200 hover:border-blue-200 hover:shadow-md'
                  }`}
                >
                  {/* Card Header (Toggler) */}
                  <button
                    onClick={() => toggleExpand(service.id)}
                    className="w-full flex items-center justify-between p-6 sm:p-7 text-left cursor-pointer focus:outline-none"
                    aria-expanded={isExpanded}
                  >
                    <div className="flex items-center gap-4 sm:gap-5 pr-4">
                      <div className="icon-box flex-shrink-0">
                        <Icon size={20} />
                      </div>
                      <div>
                        <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                          {service.title}
                        </h3>
                        <p className="text-xs text-slate-500 mt-1 leading-relaxed line-clamp-1 max-w-lg hidden sm:block">
                          {service.short}
                        </p>
                      </div>
                    </div>
                    <motion.div
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 flex-shrink-0"
                    >
                      <ChevronDown size={16} />
                    </motion.div>
                  </button>

                  {/* Expanded Content */}
                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <div className="px-6 pb-8 sm:px-7 border-t border-slate-100 pt-7 space-y-8">
                          {/* Overview & Why Us */}
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-2">
                              <h4 className="text-[10px] font-bold tracking-widest uppercase text-blue-600">
                                Overview
                              </h4>
                              <p className="text-sm text-slate-600 leading-relaxed">
                                {service.overview}
                              </p>
                            </div>
                            <div className="space-y-2">
                              <h4 className="text-[10px] font-bold tracking-widest uppercase text-blue-600">
                                Our Methodology
                              </h4>
                              <p className="text-sm text-slate-600 leading-relaxed">
                                {service.whyUs}
                              </p>
                            </div>
                          </div>

                          {/* Inclusions & Benefits */}
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-slate-100">
                            <div className="space-y-3">
                              <h4 className="text-[10px] font-bold tracking-widest uppercase text-blue-600">
                                What&apos;s Included
                              </h4>
                              <ul className="space-y-2.5">
                                {service.included.map((inc, index) => (
                                  <li key={index} className="flex items-start gap-2.5 text-sm text-slate-600">
                                    <CheckCircle2 className="text-amber-500 mt-0.5 flex-shrink-0" size={14} />
                                    <span>{inc}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div className="space-y-3">
                              <h4 className="text-[10px] font-bold tracking-widest uppercase text-blue-600">
                                Strategic Benefits
                              </h4>
                              <ul className="space-y-2.5">
                                {service.benefits.map((ben, index) => (
                                  <li key={index} className="flex items-start gap-2.5 text-sm text-slate-600">
                                    <Check className="text-emerald-500 mt-0.5 flex-shrink-0" size={14} />
                                    <span>{ben}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>

                          {/* Action Button */}
                          <div className="pt-6 border-t border-slate-100 flex justify-end">
                            <Link
                              to="/contact"
                              className="btn-premium py-2.5 px-6 rounded-xl text-xs inline-flex items-center gap-1.5"
                              aria-label={`Inquire about ${service.title}`}
                            >
                              Inquire About Service <ArrowRight size={14} />
                            </Link>
                          </div>
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

      {/* Services Bottom CTA */}
      <section className="py-24 bg-slate-900 text-center select-none">
        <div className="max-w-3xl mx-auto px-6 space-y-6">
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">Need a Bespoke Solution?</h2>
          <p className="text-sm text-slate-400 leading-relaxed">
            Reach out to our engineering team to design custom layouts, multi-tier platforms, or comprehensive search marketing campaigns.
          </p>
          <div className="pt-4">
            <Link
              to="/contact"
              className="btn-premium py-3.5 px-8 rounded-xl text-sm"
              aria-label="Request quote"
            >
              Get Free Consultation
            </Link>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
