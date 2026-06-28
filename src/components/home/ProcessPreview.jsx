import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../../utils/animations';

const STEPS = [
  { step: '01', title: 'Discovery', desc: 'Understanding your goals, users, and market positioning.' },
  { step: '02', title: 'Architecture', desc: 'Planning the technical stack and data structures.' },
  { step: '03', title: 'Interface', desc: 'High-fidelity UI/UX design with interactive prototypes.' },
  { step: '04', title: 'Engineering', desc: 'Clean, performant front-end and back-end coding.' },
  { step: '05', title: 'Deployment', desc: 'Production release on edge networks with monitoring.' },
];

export default function ProcessPreview() {
  return (
    <section className="bg-[var(--color-bg-primary)] py-24 sm:py-32 relative overflow-hidden">
      <div className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-16 relative z-10">
        
        <div className="text-center max-w-4xl mx-auto mb-24">
          <div className="badge-pill mb-6">
            Methodology
          </div>
          <h2 className="text-4xl md:text-6xl font-sans font-medium text-[var(--color-primary)] leading-[1.05] tracking-tight mb-6">
            A proven framework <br />
            <span className="font-display italic font-normal">for success.</span>
          </h2>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-5 gap-4"
        >
          {STEPS.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="bento-card p-8 flex flex-col group bg-white hover:-translate-y-2 transition-transform duration-500"
            >
              <div className="text-sm font-sans font-medium text-[var(--color-muted)] mb-12">
                {item.step}
              </div>
              <div className="mt-auto">
                <h3 className="text-xl font-display font-medium text-[var(--color-primary)] mb-3">
                  {item.title}
                </h3>
                <p className="text-[0.95rem] font-sans text-[var(--color-body)] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-20 text-center">
          <Link
            to="/process"
            className="inline-flex items-center gap-2 text-[0.95rem] font-sans font-medium text-[var(--color-primary)] hover:opacity-70 transition-opacity group"
            aria-label="View our full workflow process details"
          >
            Read our detailed process <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
