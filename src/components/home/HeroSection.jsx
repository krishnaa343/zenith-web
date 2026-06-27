import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, TrendingUp, Search, Layers } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../../utils/animations';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden bg-white select-none">
      {/* Light dot grid background */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-70 pointer-events-none" />

      {/* Soft color washes in background */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 rounded-full bg-blue-100/40 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-[500px] h-[500px] rounded-full bg-indigo-50/40 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-32 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Text */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 text-left space-y-6 flex flex-col items-start"
          >
            {/* Badge */}
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-primary bg-blue-50 border border-blue-100 px-4 py-2 rounded-full"
            >
              <Sparkles size={12} className="text-primary" />
              Digital Agency Austin
            </motion.div>

            {/* Title */}
            <motion.h1
              variants={fadeInUp}
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-950 leading-tight tracking-tight text-balance"
            >
              Helping Businesses Grow with{' '}
              <span className="text-primary bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">
                Modern Digital Solutions.
              </span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              variants={fadeInUp}
              className="text-sm sm:text-base text-gray-500 max-w-xl leading-relaxed font-light text-balance"
            >
              We build premium responsive websites, optimize local search footprints, and deploy high-converting landing pages to attract more customers.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <Link to="/contact" className="btn-premium py-3.5 px-8 rounded-xl text-xs inline-flex items-center gap-2 group" aria-label="Get Free Consultation">
                Get Started <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/portfolio"
                className="btn-premium-secondary py-3.5 px-8 rounded-xl text-xs font-semibold"
                aria-label="Explore Portfolio"
              >
                Explore Portfolio
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Graphic Panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 hidden lg:flex justify-center"
          >
            <div className="relative w-full max-w-md h-96 flex items-center justify-center bg-slate-50 rounded-3xl border border-gray-200/60 p-2 shadow-sm overflow-hidden">
              {/* Graphic elements */}
              <div className="absolute inset-0 bg-white/40 opacity-40 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:16px_16px]" />
              
              <div className="w-full h-full bg-white rounded-2xl border border-gray-100 shadow-xl overflow-hidden flex flex-col p-6 gap-6 relative">
                {/* Simulated Growth Chart */}
                <div className="flex items-center justify-between pb-4 border-b border-gray-100">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="text-primary" size={18} />
                    <span className="text-xs font-bold text-gray-900 uppercase tracking-wider">Search Growth Index</span>
                  </div>
                  <span className="text-[10px] text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded font-bold">+184%</span>
                </div>

                <div className="flex-grow flex items-end gap-2.5 h-36 border-b border-dashed border-gray-200 pb-3">
                  {[25, 45, 30, 65, 50, 75, 60, 95, 80, 100].map((h, i) => (
                    <div
                      key={i}
                      style={{ height: `${h}%` }}
                      className="flex-grow bg-blue-500/10 hover:bg-blue-500 rounded-t-sm transition-colors duration-200 relative group"
                    >
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1.5 hidden group-hover:block bg-gray-900 text-white text-[9px] py-0.5 px-1.5 rounded shadow">
                        {h}%
                      </div>
                    </div>
                  ))}
                </div>

                {/* Simulated features indicators */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-gray-100">
                    <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-primary flex-shrink-0">
                      <Search size={14} />
                    </div>
                    <div>
                      <div className="text-[8px] font-bold text-gray-400 uppercase tracking-wider">SEO ranking</div>
                      <div className="text-xs font-bold text-gray-900">First Page</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-gray-100">
                    <div className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600 flex-shrink-0">
                      <Layers size={14} />
                    </div>
                    <div>
                      <div className="text-[8px] font-bold text-gray-400 uppercase tracking-wider">Responsive</div>
                      <div className="text-xs font-bold text-gray-900">UI verified</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
