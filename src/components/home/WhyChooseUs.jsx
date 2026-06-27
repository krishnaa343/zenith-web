import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../common/SectionHeader';
import { fadeInUp, staggerContainer } from '../../utils/animations';
import {
  Smartphone,
  Search,
  Zap,
  ShieldCheck,
  Briefcase,
  TrendingUp,
  MessageSquare,
  LifeBuoy,
} from 'lucide-react';

const FEATURES = [
  {
    icon: Smartphone,
    title: 'Responsive Websites',
    description: 'Interfaces optimized for mobile and desktop screens to ensure consistent experiences.',
  },
  {
    icon: Search,
    title: 'SEO Ready',
    description: 'Built-in local and technical SEO best practices to support search engine indexing.',
  },
  {
    icon: Zap,
    title: 'Fast Loading',
    description: 'Clean React codebases designed to improve page load times and user retention.',
  },
  {
    icon: ShieldCheck,
    title: 'Secure Development',
    description: 'Standard security practices and SSL configurations integrated into all deployments.',
  },
  {
    icon: Briefcase,
    title: 'Business Focused',
    description: 'Digital solutions designed to help generate real leads and client interest.',
  },
  {
    icon: TrendingUp,
    title: 'Scalable Solutions',
    description: 'Modularity that makes it easy to add features as your business grow.',
  },
  {
    icon: MessageSquare,
    title: 'Transparent Communication',
    description: 'Clear documentation, timeline updates, and straightforward progress reports.',
  },
  {
    icon: LifeBuoy,
    title: 'Long-Term Support',
    description: 'Post-launch maintenance programs and server support tailored to your needs.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="section-white select-none">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <SectionHeader
          label="Foundational Pillars"
          title="Engineered for Professional Performance"
          subtitle="We focus on performance, security, and aesthetics. Here is how we build every application."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {FEATURES.map((feat, i) => {
            const Icon = feat.icon;
            return (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="premium-card p-7 flex flex-col items-start gap-5"
              >
                <div className="icon-box">
                  <Icon size={18} />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">
                    {feat.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {feat.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
