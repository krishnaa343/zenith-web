import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../../utils/animations';

const STATS = [
  { value: '50+', label: 'Products Shipped' },
  { value: '99%', label: 'Client Satisfaction' },
  { value: '2.5x', label: 'Average ROI' },
  { value: '24/7', label: 'Active Support' },
];

export default function StatsSection() {
  return (
    <section className="bg-[var(--color-primary)] py-24 relative overflow-hidden">
      
      <div className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-16 relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-x divide-white/10"
        >
          {STATS.map((stat, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="flex flex-col items-center text-center px-4"
            >
              <div className="text-6xl sm:text-7xl font-display font-normal italic text-white mb-4">
                {stat.value}
              </div>
              <div className="text-[0.9rem] font-sans font-medium text-[#999999]">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
