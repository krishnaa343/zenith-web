import React from 'react';
import { motion } from 'framer-motion';
import { TESTIMONIALS } from '../../utils/constants';
import { fadeInUp, staggerContainer } from '../../utils/animations';

export default function Testimonials() {
  return (
    <section className="bg-[var(--color-bg-secondary)] py-24 sm:py-32 relative overflow-hidden">
      <div className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-16 relative z-10">
        
        <div className="mb-24 max-w-4xl">
          <div className="badge-pill mb-6">
            Client Success
          </div>
          <h2 className="text-4xl md:text-6xl font-sans font-medium text-[var(--color-primary)] leading-[1.05] tracking-tight mb-6">
            Don't just take <br />
            <span className="font-display italic font-normal">our word for it.</span>
          </h2>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {TESTIMONIALS.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="bento-card p-10 flex flex-col group bg-[var(--color-bg-primary)] border-none shadow-none"
            >
              <p className="text-[1.1rem] font-sans text-[var(--color-primary)] leading-relaxed flex-grow font-medium mb-12">
                "{item.text}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white border border-[var(--color-border)] flex items-center justify-center text-[var(--color-primary)] font-display italic text-lg">
                  {item.name.charAt(0)}
                </div>
                <div className="flex flex-col">
                  <span className="text-[1rem] font-sans font-medium text-[var(--color-primary)]">
                    {item.name}
                  </span>
                  <span className="text-[0.85rem] font-sans text-[var(--color-muted)]">
                    {item.company}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
