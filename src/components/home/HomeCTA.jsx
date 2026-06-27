import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { fadeInUp } from '../../utils/animations';

export default function HomeCTA() {
  return (
    <section className="relative py-28 overflow-hidden bg-slate-900 select-none">
      {/* Glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-blue-600/20 blur-3xl pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-6 sm:px-8 text-center space-y-8 z-10">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-3xl sm:text-5xl font-black text-white leading-tight tracking-tight"
        >
          Let&apos;s Build Something World-Class.
        </motion.h2>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-base text-slate-400 max-w-2xl mx-auto leading-relaxed"
        >
          Book a discovery call to discuss design mockups, technical SEO sitemaps, Google reinstatements, or custom mobile application flows.
        </motion.p>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="pt-4"
        >
          <Link
            to="/contact"
            className="btn-premium py-4 px-10 rounded-xl text-sm inline-flex items-center gap-2 group"
            aria-label="Request Free Consultation"
          >
            Get Started <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
