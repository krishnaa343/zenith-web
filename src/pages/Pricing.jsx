import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Check, Info, ArrowUpRight } from 'lucide-react';
import SEOHead from '../components/common/SEOHead';
import SectionHeader from '../components/common/SectionHeader';
import { PRICING_PLANS } from '../utils/constants';
import { pageTransition, fadeInUp, staggerContainer } from '../utils/animations';

export default function Pricing() {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
      className="bg-white min-h-screen"
    >
      <SEOHead
        title="Investment Options — Starter, Business & Enterprise Tiers"
        description="Review our Starter, Business, and Enterprise digital agency plan tiers. View transparent payment terms details for web deployments."
      />

      {/* Hero Banner */}
      <section className="relative pt-44 pb-24 overflow-hidden bg-white select-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] rounded-full bg-blue-100/60 blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
          <span className="section-badge">Investment Options</span>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-none text-slate-900 text-balance">
            Transparent Pricing Plans
          </h1>
          <p className="text-sm sm:text-base text-slate-500 max-w-2xl mx-auto leading-relaxed text-balance">
            We prepare detailed scoping proposals for each engagement, ensuring clear timelines and feature deliverables.
          </p>
        </div>
      </section>

      {/* Pricing Matrix Section */}
      <section className="pb-32 px-6 bg-white select-none">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            label="Service Tiers"
            title="Design & Development Packages"
            subtitle="All projects receive clean React components, responsive layouts, speed optimization, and technical SEO structure."
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch"
          >
            {PRICING_PLANS.map((plan) => (
              <motion.div
                key={plan.name}
                variants={fadeInUp}
                className={`border flex flex-col justify-between overflow-hidden transition-all duration-300 rounded-2xl ${
                  plan.highlighted
                    ? 'border-blue-400 shadow-2xl shadow-blue-50 bg-white lg:-translate-y-2'
                    : 'border-slate-200 bg-white hover:border-blue-200 hover:shadow-lg'
                }`}
              >
                {/* Header */}
                <div className={`p-8 pb-6 text-center relative border-b ${plan.highlighted ? 'border-blue-100 bg-blue-50' : 'border-slate-100'}`}>
                  {plan.highlighted && (
                    <span className="absolute top-0 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[9px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-b-xl">
                      Most Popular
                    </span>
                  )}
                  <h3 className={`text-xl font-bold mt-2 ${plan.highlighted ? 'text-blue-700' : 'text-slate-900'}`}>
                    {plan.name}
                  </h3>
                  <p className="text-xs text-slate-500 mt-2.5 leading-relaxed max-w-xs mx-auto">
                    {plan.description}
                  </p>
                  <div className={`text-2xl font-black mt-6 uppercase tracking-wider ${plan.highlighted ? 'text-blue-700' : 'text-slate-900'}`}>
                    Custom Quote
                  </div>
                  <span className="text-[9px] text-slate-400 uppercase tracking-widest mt-1.5 block">
                    Bespoke proposal scoping
                  </span>
                </div>

                {/* Features */}
                <div className="p-8 flex-grow space-y-5">
                  <h4 className="text-[10px] font-bold text-slate-700 tracking-widest uppercase">
                    Key Features:
                  </h4>
                  <ul className="space-y-3.5">
                    {plan.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-slate-600">
                        <Check className="text-emerald-500 mt-0.5 flex-shrink-0" size={15} />
                        <span className="leading-relaxed">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div className="p-8 pt-0">
                  <Link
                    to="/contact"
                    className={`w-full py-3.5 rounded-xl font-semibold justify-center text-sm flex items-center transition-all ${
                      plan.highlighted
                        ? 'btn-premium'
                        : 'btn-premium-secondary'
                    }`}
                    aria-label={`Request quote for ${plan.name}`}
                  >
                    Request a Quote
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Payment Terms Information Box */}
          <div className="mt-24 max-w-4xl mx-auto rounded-2xl bg-slate-50 border border-slate-200 shadow-sm overflow-hidden select-none">
            {/* Header band */}
            <div className="bg-white border-b border-slate-200 p-6 flex items-center gap-3">
              <Info className="text-blue-600" size={20} />
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                Payment Terms & Milestones
              </h3>
            </div>

            {/* Content body */}
            <div className="p-8 sm:p-10 space-y-8">
              <p className="text-sm text-slate-600 leading-relaxed max-w-3xl">
                To keep development resources dedicated to your project, Zenith Web Solutions operates on a standard milestone payment schedule:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* 30% advance */}
                <div className="p-6 rounded-xl bg-white border border-blue-100 flex flex-col space-y-4">
                  <div>
                    <span className="text-3xl font-black text-blue-600">30%</span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mt-1 block">Advance Retainer</span>
                  </div>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    Required prior to project kickoff. Secures your timeline slot, schedules design mockups, and initiates competitor search research.
                  </p>
                </div>

                {/* 70% remainder */}
                <div className="p-6 rounded-xl bg-white border border-amber-100 flex flex-col space-y-4">
                  <div>
                    <span className="text-3xl font-black text-amber-500">70%</span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mt-1 block">Project Completion</span>
                  </div>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    Due after the website is completed, approved by you during testing, and successfully deployed to your live domain.
                  </p>
                </div>
              </div>

              <div className="text-[10px] text-slate-400 uppercase tracking-widest text-center">
                * Note: Ongoing SEO programs and maintenance plans are billed monthly.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 bg-slate-900 text-center select-none">
        <div className="max-w-3xl mx-auto px-6 space-y-6">
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">Need a Custom Engagement Model?</h2>
          <p className="text-sm text-slate-400 leading-relaxed">
            Reach out to our office to structure custom enterprise support terms, API database integrations, or multi-location SEO plans.
          </p>
          <div className="pt-4">
            <Link
              to="/contact"
              className="btn-premium py-3.5 px-8 rounded-xl text-sm inline-flex items-center gap-1.5"
              aria-label="Request quote"
            >
              Get Started Today <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
