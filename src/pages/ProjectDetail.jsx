import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowUpRight, Cpu, Target, Layers } from 'lucide-react';
import SEOHead from '../components/common/SEOHead';
import { PORTFOLIO_PROJECTS } from '../utils/constants';
import { pageTransition, fadeInUp } from '../utils/animations';

export default function ProjectDetail() {
  const { id } = useParams();
  const project = PORTFOLIO_PROJECTS.find(p => p.id === parseInt(id));

  if (!project) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center pt-24 px-6 text-center select-none">
        <h1 className="text-3xl font-black mb-4 text-slate-900">Case Study Not Found</h1>
        <p className="text-slate-500 text-sm mb-6">The requested project case study could not be located.</p>
        <Link to="/portfolio" className="btn-premium py-2.5 px-6 rounded-xl text-xs inline-flex items-center gap-2">
          <ArrowLeft size={14} /> Back to Portfolio
        </Link>
      </div>
    );
  }

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
      className="bg-white min-h-screen select-none"
    >
      <SEOHead
        title={`${project.industry} Case Study — ${project.category}`}
        description={`Read the engineering and design case study details for our custom ${project.industry} project.`}
      />

      {/* Hero Header */}
      <section className="relative pt-44 pb-20 overflow-hidden bg-white">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] rounded-full bg-blue-100/60 blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto px-6 space-y-6">
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 text-xs text-slate-500 hover:text-blue-600 transition-colors uppercase tracking-wider font-semibold"
          >
            <ArrowLeft size={14} /> Back to Portfolio
          </Link>

          <div className="space-y-4">
            <span className="section-badge">{project.category}</span>
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-tight text-slate-900">
              {project.industry} Digital Portal
            </h1>
            <p className="text-sm sm:text-base text-slate-500 leading-relaxed">
              {project.overview}
            </p>
          </div>

          {/* Tech stack badges */}
          <div className="flex flex-wrap gap-2 pt-2">
            {project.tech.map((tag, idx) => (
              <span
                key={idx}
                className="text-[10px] font-semibold text-blue-700 bg-blue-50 border border-blue-100 px-3.5 py-1.5 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Structured Case Study Grid */}
      <section className="pb-32 px-6 sm:px-8 lg:px-12 bg-slate-50">
        <div className="max-w-4xl mx-auto pt-16 space-y-6">

          {/* Challenge */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="premium-card p-8 sm:p-10 space-y-4"
          >
            <div className="flex items-center gap-3">
              <div className="icon-box">
                <Target size={18} />
              </div>
              <h2 className="text-base sm:text-lg font-bold text-slate-900 uppercase tracking-wider">
                The Challenge
              </h2>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed pl-12">
              {project.challenge}
            </p>
          </motion.div>

          {/* Solution */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="premium-card p-8 sm:p-10 space-y-4"
          >
            <div className="flex items-center gap-3">
              <div className="icon-box">
                <Cpu size={18} />
              </div>
              <h2 className="text-base sm:text-lg font-bold text-slate-900 uppercase tracking-wider">
                The Engineering Solution
              </h2>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed pl-12">
              {project.solution}
            </p>
          </motion.div>

          {/* Outcome */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="premium-card p-8 sm:p-10 space-y-4"
          >
            <div className="flex items-center gap-3">
              <div className="icon-box">
                <Layers size={18} />
              </div>
              <h2 className="text-base sm:text-lg font-bold text-slate-900 uppercase tracking-wider">
                Strategic Outcome
              </h2>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed pl-12">
              {project.outcome}
            </p>
          </motion.div>

          {/* Bottom disclaimer */}
          <div className="rounded-xl border border-slate-200 bg-blue-50 p-5 text-center text-xs text-slate-500 leading-relaxed">
            Disclaimer: This project study details a design mock template generated for capabilities presentation. Actual portal builds are hosted on direct private client staging servers.
          </div>
        </div>
      </section>

      {/* Case Study Bottom CTA */}
      <section className="py-24 bg-slate-900 text-center select-none">
        <div className="max-w-3xl mx-auto px-6 space-y-6">
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">Need a Similar Experience Built?</h2>
          <p className="text-sm text-slate-400 leading-relaxed">
            Reach out to our agency design consulting office to explore custom sitemaps, grid mockups, and localized SEO setups.
          </p>
          <div className="pt-4">
            <Link
              to="/contact"
              className="btn-premium py-3.5 px-8 rounded-xl text-sm inline-flex items-center gap-1.5"
              aria-label="Contact Zenith"
            >
              Start Project Discovery <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
