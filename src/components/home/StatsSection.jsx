import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../../utils/animations';

const STATS = [
  { value: '50+', label: 'Digital Products Shipped' },
  { value: '98%', label: 'Retention & Satisfaction' },
  { value: '2-4 Wks', label: 'Average Project Delivery' },
  { value: '24/7', label: 'Priority Support Channels' },
];

export default function StatsSection() {
  return (
    <section className="bg-slate-900 py-20 select-none">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12"
        >
          {STATS.map((stat, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="text-center space-y-3"
            >
              <div className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-none tracking-tight">
                {stat.value}
              </div>
              <div className="text-[10px] sm:text-xs font-bold tracking-widest text-slate-400 uppercase">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
