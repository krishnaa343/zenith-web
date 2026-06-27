import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import SectionHeader from '../common/SectionHeader';
import { fadeInUp, staggerContainer } from '../../utils/animations';

const STEPS = [
  { step: '01', title: 'Discovery', desc: 'Understanding your goals and requirements.' },
  { step: '02', title: 'Strategy', desc: 'Competitor analysis & keyword planning.' },
  { step: '03', title: 'Design', desc: 'High-fidelity Figma layout mockups.' },
  { step: '04', title: 'Build', desc: 'Clean, performant React coding.' },
  { step: '05', title: 'Launch', desc: 'Technical SEO & production deployment.' },
];

export default function ProcessPreview() {
  return (
    <section className="section-white select-none">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <SectionHeader
          label="Execution Pipeline"
          title="From Initial Strategy to Production Launch"
          subtitle="Our systematic project delivery process helps launch design and optimization campaigns on schedule."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mt-12"
        >
          {STEPS.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="premium-card p-7 flex flex-col gap-4"
            >
              <div className="text-xs font-bold text-blue-600 uppercase tracking-widest">
                Step {item.step}
              </div>
              <div className="space-y-2">
                <h3 className="text-base font-bold text-slate-900">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-14 text-center">
          <Link
            to="/process"
            className="btn-premium-secondary py-3 px-8 rounded-xl text-sm inline-flex items-center gap-2 group"
            aria-label="View our full workflow process details"
          >
            Explore Detailed Workflow <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
