import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { SERVICES } from '../../utils/constants';
import SectionHeader from '../common/SectionHeader';
import { fadeInUp, staggerContainer } from '../../utils/animations';

export default function ServicesPreview() {
  const previewServices = SERVICES.slice(0, 6);

  return (
    <section className="section-gray select-none">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <SectionHeader
          label="Areas of Expertise"
          title="Digital Products Built for Real Business Growth"
          subtitle="We craft layouts, interfaces, and visibility systems that attract premium business leads."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {previewServices.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                variants={fadeInUp}
                className="premium-card p-8 flex flex-col justify-between"
              >
                <div>
                  <div className="icon-box mb-6">
                    <Icon size={20} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed mb-8">
                    {service.short}
                  </p>
                </div>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-blue-600 hover:text-blue-700 transition-colors group"
                  aria-label={`Learn more about ${service.title}`}
                >
                  Discover Service <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        <div className="mt-14 text-center">
          <Link to="/services" className="btn-premium-secondary py-3 px-8 rounded-xl text-sm" aria-label="View all expertise areas">
            Explore All Services
          </Link>
        </div>
      </div>
    </section>
  );
}
