import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import SectionHeader from '../common/SectionHeader';
import { TESTIMONIALS } from '../../utils/constants';
import { fadeInUp, staggerContainer } from '../../utils/animations';

export default function Testimonials() {
  return (
    <section className="section-gray select-none">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <SectionHeader
          label="Proven Results"
          title="What Client Partnerships Deliver"
          subtitle="Read honest feedback from operations officers and business leaders who trust us with their design and search presence."
        />

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
              className="premium-card p-8 flex flex-col justify-between"
            >
              <div className="space-y-5">
                {/* Rating */}
                <div className="flex gap-1">
                  {[...Array(item.rating)].map((_, idx) => (
                    <Star key={idx} className="text-amber-400 fill-amber-400" size={15} />
                  ))}
                </div>
                <p className="text-sm italic text-slate-600 leading-relaxed">
                  &ldquo;{item.text}&rdquo;
                </p>
              </div>

              <div className="mt-7 border-t border-slate-100 pt-5 flex flex-col">
                <span className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                  {item.name}
                </span>
                <span className="text-[11px] text-slate-400 tracking-wider uppercase mt-1">
                  {item.company}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
