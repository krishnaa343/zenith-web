import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  MessageSquare, ClipboardList, Search, Compass, Code2,
  CheckSquare, Activity, Terminal, HelpCircle, ArrowRight,
} from 'lucide-react';
import SEOHead from '../components/common/SEOHead';
import SectionHeader from '../components/common/SectionHeader';
import { PROCESS_STEPS } from '../utils/constants';
import { pageTransition, fadeInLeft, fadeInRight } from '../utils/animations';

const ICONS = [
  MessageSquare, ClipboardList, Search, Compass, Code2,
  CheckSquare, Activity, Terminal, HelpCircle,
];

export default function Process() {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
      className="bg-white min-h-screen"
    >
      <SEOHead
        title="Bespoke Pipeline — Structured Project Delivery Flow"
        description="Learn about our structured 9-step project delivery flow: Consultation, Requirement gathering, UI/UX Design, Development, and SEO checks."
      />

      {/* Hero Banner */}
      <section className="relative pt-44 pb-24 overflow-hidden bg-white select-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] rounded-full bg-blue-100/60 blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
          <span className="section-badge">Our Method</span>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-none text-slate-900 text-balance">
            Execution Pipeline
          </h1>
          <p className="text-sm sm:text-base text-slate-500 max-w-2xl mx-auto leading-relaxed text-balance">
            A structured, transparent approach to delivering digital products that meet your business needs.
          </p>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="pb-32 px-6 bg-white select-none">
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            label="Detailed Pipeline"
            title="Step-by-Step Delivery"
            subtitle="From initial discovery and strategy audits to production server launches and ongoing optimization, here is what to expect."
          />

          <div className="relative mt-12 md:mt-20">
            {/* Center line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-blue-400 to-amber-400 -translate-x-1/2" />

            {/* Timeline cards */}
            <div className="space-y-16 md:space-y-24 relative z-10">
              {PROCESS_STEPS.map((step, idx) => {
                const Icon = ICONS[idx] || HelpCircle;
                const isEven = idx % 2 === 1;

                return (
                  <div
                    key={step.step}
                    className="flex flex-col md:flex-row items-start md:items-center relative"
                  >
                    {/* Node circle */}
                    <div className="absolute left-6 md:left-1/2 w-10 h-10 rounded-full bg-white border-4 border-blue-500 flex items-center justify-center -translate-x-1/2 z-20 shadow-md">
                      <span className="text-xs font-black text-blue-600">
                        {step.step}
                      </span>
                    </div>

                    {/* Left text column */}
                    <div className={`w-full md:w-1/2 pl-16 md:pl-0 md:pr-16 md:text-right ${isEven ? 'md:order-1 md:pl-16 md:pr-0 md:text-left' : ''}`}>
                      <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={isEven ? fadeInRight : fadeInLeft}
                        className="premium-card p-7 inline-block w-full max-w-lg"
                      >
                        <div className={`flex items-center gap-3.5 mb-4 ${isEven ? '' : 'md:flex-row-reverse'}`}>
                          <div className="icon-box flex-shrink-0">
                            <Icon size={18} />
                          </div>
                          <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                            {step.title}
                          </h3>
                        </div>
                        <p className="text-sm text-slate-500 leading-relaxed">
                          {step.description}
                        </p>
                      </motion.div>
                    </div>

                    {/* Spacing alignment */}
                    <div className="hidden md:block w-1/2" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 bg-slate-900 text-center select-none">
        <div className="max-w-3xl mx-auto px-6 space-y-6">
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">Ready to Kickoff Step 1?</h2>
          <p className="text-sm text-slate-400 leading-relaxed">
            Submit your consultation details to map out sitemaps, project timelines, design criteria, or search audit schedules.
          </p>
          <div className="pt-4">
            <Link
              to="/contact"
              className="btn-premium py-3.5 px-8 rounded-xl text-sm inline-flex items-center gap-2 group"
              aria-label="Request consultation"
            >
              Get Started <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
