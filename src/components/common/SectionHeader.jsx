import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from '../../utils/animations';

export default function SectionHeader({
  label,
  title,
  subtitle,
  centered = true,
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeInUp}
      className={`max-w-4xl mb-16 md:mb-20 ${centered ? 'text-center mx-auto' : 'text-left'}`}
    >
      {label && (
        <span className="inline-block text-xs font-bold tracking-widest uppercase mb-4 text-primary bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100">
          {label}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-950 leading-tight tracking-tight mb-5">
        {title}
      </h2>
      {subtitle && (
        <p className="text-sm sm:text-base text-gray-500 leading-relaxed font-light max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
