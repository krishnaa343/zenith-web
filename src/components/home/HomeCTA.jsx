import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { fadeInUp } from '../../utils/animations';

export default function HomeCTA() {
  return (
    <section className="relative py-32 sm:py-40 bg-[var(--color-bg-primary)] overflow-hidden">
      <div className="relative max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-16 text-center z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="bento-card bg-white p-16 sm:p-24 max-w-5xl mx-auto flex flex-col items-center border border-[var(--color-border)]"
        >
          <div className="badge-pill mb-8">Ready?</div>
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-sans font-medium text-[var(--color-primary)] leading-[1.05] tracking-tight mb-8">
            Build your next <br/>
            <span className="font-display italic font-normal">big thing.</span>
          </h2>
          <p className="text-xl text-[var(--color-body)] font-sans max-w-2xl mx-auto leading-relaxed mb-12">
            Let's discuss how we can help you scale your business with world-class digital products and engineering.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/contact" className="btn-primary" aria-label="Start a Project">
              Start a Project
            </Link>
            <Link to="/services" className="btn-secondary" aria-label="View Services">
              View Services
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
