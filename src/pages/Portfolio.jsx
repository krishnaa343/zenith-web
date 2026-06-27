import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Info } from 'lucide-react';
import SEOHead from '../components/common/SEOHead';
import SectionHeader from '../components/common/SectionHeader';
import { PORTFOLIO_CATEGORIES, PORTFOLIO_PROJECTS } from '../utils/constants';
import { pageTransition, fadeInUp, staggerContainer } from '../utils/animations';

const GRADIENT_PAIRS = [
  'from-blue-50 to-indigo-100',
  'from-slate-50 to-blue-100',
  'from-emerald-50 to-teal-100',
  'from-amber-50 to-orange-100',
  'from-violet-50 to-purple-100',
  'from-pink-50 to-rose-100',
  'from-cyan-50 to-sky-100',
  'from-lime-50 to-green-100',
  'from-orange-50 to-amber-100',
];

const TEXT_COLORS = [
  'text-blue-700', 'text-indigo-700', 'text-teal-700',
  'text-orange-700', 'text-violet-700', 'text-rose-700',
  'text-sky-700', 'text-green-700', 'text-amber-700',
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All'
    ? PORTFOLIO_PROJECTS
    : PORTFOLIO_PROJECTS.filter(p => p.category === activeCategory);

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
      className="bg-white min-h-screen"
    >
      <SEOHead
        title="Portfolio — Selected Case Studies"
        description="Explore selected design concepts and layouts crafted for local businesses: construction contractors, plumbing schedulers, law offices, and dental clinics."
      />

      {/* Hero Banner */}
      <section className="relative pt-44 pb-24 overflow-hidden bg-white select-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] rounded-full bg-blue-100/60 blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
          <span className="section-badge">Selected Works</span>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-none text-slate-900 text-balance">
            Project Case Studies
          </h1>
          <p className="text-sm sm:text-base text-slate-500 max-w-2xl mx-auto leading-relaxed text-balance">
            Explore our curated selection of design mockups and layout prototypes built to demonstrate capability across diverse industry sectors.
          </p>
        </div>
      </section>

      {/* Category filters */}
      <section className="pb-12 select-none px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {PORTFOLIO_CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2.5 text-xs font-semibold rounded-full border transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-100'
                      : 'bg-white text-slate-600 border-slate-200 hover:border-blue-300 hover:text-blue-600'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="pb-32 px-6 sm:px-8 lg:px-12 bg-slate-50">
        <div className="max-w-7xl mx-auto pt-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredProjects.map((project, idx) => {
                const heightClass = idx % 3 === 0 ? 'h-56' : idx % 3 === 1 ? 'h-64' : 'h-72';
                const gradient = GRADIENT_PAIRS[idx % GRADIENT_PAIRS.length];
                const textColor = TEXT_COLORS[idx % TEXT_COLORS.length];

                return (
                  <motion.div
                    key={project.id}
                    variants={fadeInUp}
                    className="bg-white border border-slate-200 rounded-2xl overflow-hidden flex flex-col hover:border-blue-200 hover:shadow-lg transition-all duration-300"
                  >
                    {/* Visual Card Mockup */}
                    <div className={`relative ${heightClass} bg-gradient-to-br ${gradient} overflow-hidden group select-none`}>
                      <div className="absolute inset-0 flex items-center justify-center p-6 transition-transform duration-700 group-hover:scale-105">
                        <div className="space-y-2 text-center">
                          <span className={`text-[9px] uppercase font-bold tracking-widest ${textColor} bg-white/60 px-3 py-1 rounded-full border border-white/80`}>
                            Prototype Concept
                          </span>
                          <div className={`text-2xl font-black ${textColor}`}>{project.industry} Portal</div>
                        </div>
                      </div>

                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span className="text-[10px] uppercase font-bold tracking-widest text-white border border-white/40 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
                          View Case Study
                        </span>
                      </div>
                    </div>

                    {/* Project details */}
                    <div className="p-7 space-y-4 flex-grow flex flex-col justify-between">
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-[9px] uppercase font-bold tracking-widest text-slate-400">
                            {project.category}
                          </span>
                          <div className="flex gap-2">
                            {project.tech.slice(0, 2).map((t, index) => (
                              <span key={index} className="text-[9px] text-blue-600 font-semibold bg-blue-50 px-2 py-0.5 rounded">
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>

                        <h3 className="text-base font-bold text-slate-900 leading-snug">
                          {project.industry} Digital Experience
                        </h3>

                        <p className="text-sm text-slate-500 leading-relaxed line-clamp-3">
                          {project.overview}
                        </p>
                      </div>

                      <Link
                        to={`/portfolio/${project.id}`}
                        className="w-full btn-premium-secondary py-2.5 rounded-xl text-xs font-bold justify-center inline-flex items-center gap-1.5 mt-4"
                      >
                        View Case Study <ArrowUpRight size={14} />
                      </Link>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>

          {/* Info Banner */}
          <div className="mt-16 max-w-3xl mx-auto rounded-xl bg-blue-50 border border-blue-100 p-6 flex items-start gap-4 select-none">
            <Info className="text-blue-500 flex-shrink-0 mt-0.5" size={20} />
            <div>
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Concept Showcase Notice</h4>
              <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                These case studies represent sample architectural mockups designed by our engineers to showcase custom React grids, local search schema models, and interface responsiveness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 bg-slate-900 text-center select-none">
        <div className="max-w-3xl mx-auto px-6 space-y-6">
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">Have a Custom Project in Mind?</h2>
          <p className="text-sm text-slate-400 leading-relaxed">
            Partner with Zenith Web Solutions to design and code a custom layout tailored specifically to your company&apos;s brand and leads objectives.
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
