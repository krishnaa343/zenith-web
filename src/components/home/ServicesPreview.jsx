import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { SERVICES } from '../../utils/constants';
import { fadeInUp, staggerContainer } from '../../utils/animations';

// Placeholder images to match the urban/tech look from the screenshots
const IMAGES = [
  "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=2064&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=2029&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
];

export default function ServicesPreview() {
  const previewServices = SERVICES.slice(0, 6);

  return (
    <section className="py-24 sm:py-32 relative bg-[var(--color-bg-secondary)] overflow-hidden">
      <div className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-16 relative z-10">
        
        {/* Section Header */}
        <div className="mb-20 max-w-4xl text-center mx-auto">
          <h2 className="text-4xl md:text-6xl font-sans font-medium text-[var(--color-primary)] leading-[1.05] tracking-tight mb-6">
            We're dedicated <br />
            <span className="font-display italic font-normal">to enriching digital environments.</span>
          </h2>
          <p className="text-lg text-[var(--color-body)] leading-relaxed max-w-2xl mx-auto font-sans mb-8">
            Our focus is on providing engaging content, convenient services, and powerful solutions tailored to the pulse of modern business.
          </p>
          <Link to="/services" className="inline-flex items-center gap-2 text-[0.95rem] font-medium hover:text-[var(--color-primary)] transition-colors">
            Find audience <ArrowUpRight size={18} />
          </Link>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {previewServices.map((service, idx) => {
            return (
              <motion.div
                key={service.id}
                variants={fadeInUp}
                className="bento-card h-[400px] flex flex-col justify-end group overflow-hidden cursor-pointer"
              >
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                  <img 
                    src={IMAGES[idx]} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Dark gradient so text is readable */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                </div>

                {/* Content Overlay */}
                <div className="relative z-10 p-8 flex flex-col h-full justify-end">
                  <div className="glass-card px-4 py-2 w-fit mb-4 text-xs font-semibold uppercase tracking-wider text-white border-white/20 bg-white/10">
                    {service.title}
                  </div>
                  <h3 className="text-2xl font-sans font-medium text-white mb-2 leading-tight">
                    {service.short}
                  </h3>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}

