import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Check, ShieldCheck, Clock, TrendingUp, Users, Award, Eye, Rocket, Globe } from 'lucide-react';
import SEOHead from '../components/common/SEOHead';
import SectionHeader from '../components/common/SectionHeader';
import { pageTransition, fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from '../utils/animations';

const VALUES = [
  {
    icon: Award,
    title: 'Design Fidelity',
    desc: 'We follow strict design checks and performance audits to deliver clean, modern interfaces.',
  },
  {
    icon: ShieldCheck,
    title: 'Absolute Integrity',
    desc: 'We operate with complete clarity on project milestones, scope, payment terms, and delivery schedules.',
  },
  {
    icon: Rocket,
    title: 'Performant Stack',
    desc: 'We build with fast, modern web tech like React and Vite to ensure fast page loads.',
  },
  {
    icon: Clock,
    title: 'Timely Execution',
    desc: 'We map out milestones to deliver your project on schedule.',
  },
  {
    icon: Users,
    title: 'Client Aligned',
    desc: 'Every layout choice, SEO keyword, and custom tool is designed to support your business goals.',
  },
  {
    icon: Globe,
    title: 'Dedicated Care',
    desc: 'We provide hosting configuration support, Google reinstatements, and post-launch maintenance.',
  },
];

export default function About() {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
      className="bg-white min-h-screen"
    >
      <SEOHead
        title="About — Professional Digital Agency Austin"
        description="Learn more about Zenith Web Solutions' corporate mission, vision, core design standards, and execution values."
      />

      {/* Hero Banner */}
      <section className="relative pt-44 pb-24 overflow-hidden bg-white select-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] rounded-full bg-blue-100/60 blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
          <span className="section-badge">Corporate Profile</span>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-none text-slate-900 text-balance">
            About Zenith Web Solutions
          </h1>
          <p className="text-sm sm:text-base text-slate-500 max-w-2xl mx-auto leading-relaxed text-balance">
            A professional US-based digital solutions firm specializing in premium custom website design, local search marketing, and search compliance.
          </p>
        </div>
      </section>

      {/* Mission & Vision Sections */}
      <section className="pb-32 px-6 sm:px-8 lg:px-12 bg-white select-none">
        <div className="max-w-6xl mx-auto space-y-32">

          {/* Mission */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInLeft}
              className="lg:col-span-7 space-y-6 text-left"
            >
              <span className="text-[10px] font-bold tracking-widest uppercase text-blue-600">
                Our Mission
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
                Empowering Businesses Through Digital Excellence
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                At Zenith Web Solutions, our mission is to build robust, high-performing websites and configure visibility profiles that attract qualified business inquiries. We strive to create secure digital frameworks that allow businesses to compete, rank, and grow in their local service markets.
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInRight}
              className="lg:col-span-5 hidden lg:block"
            >
              <div className="w-full h-72 rounded-3xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 flex items-center justify-center p-8">
                <div className="text-center space-y-3">
                  <div className="text-4xl font-black text-slate-900">DESIGN</div>
                  <div className="text-3xl font-bold text-blue-600">ENGINEER</div>
                  <div className="text-2xl font-semibold text-amber-500">SCALE</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Vision */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInLeft}
              className="lg:col-span-5 hidden lg:block"
            >
              <div className="w-full h-72 rounded-3xl bg-gradient-to-br from-slate-50 to-blue-50 border border-slate-200 flex items-center justify-center p-8">
                <Eye className="text-blue-600" size={64} />
              </div>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInRight}
              className="lg:col-span-7 space-y-6 text-left"
            >
              <span className="text-[10px] font-bold tracking-widest uppercase text-blue-600">
                Our Vision
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
                Setting the Standard for Digital Solutions
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                We envision being a trusted digital partner recognized for high-performing designs, transparent operations, and search integrity. Our goal is to demystify SEO optimization, clean development, and business profile reinstatements so local companies can run operations with confidence.
              </p>
            </motion.div>
          </div>

        </div>
      </section>

      {/* Values Section */}
      <section className="section-gray select-none">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <SectionHeader
            label="Corporate Values"
            title="The Pillars of Zenith Web Solutions"
            subtitle="We hold ourselves to strict execution standards. Here are the core ideals that guide our daily design, code writing, and optimization workflows."
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {VALUES.map((val, i) => {
              const Icon = val.icon;
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
                      {val.title}
                    </h3>
                    <p className="text-sm text-slate-500 leading-relaxed">
                      {val.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="section-white select-none">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-12">
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-900">Why Partner with Zenith</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-left max-w-2xl mx-auto">
            {[
              'Dedicated technical project management',
              'Structured 30/70 transparent payments',
              'Completely custom design layouts',
              'SEO-first semantic structure',
              'Full deployment and server support',
              'Prompt support communication channels',
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-3.5 text-sm text-slate-600">
                <Check className="text-blue-600 flex-shrink-0" size={16} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 bg-slate-900 text-center select-none">
        <div className="max-w-3xl mx-auto px-6 space-y-6">
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">Ready to Work with Us?</h2>
          <p className="text-sm text-slate-400 leading-relaxed">
            Reach out to our agency consulting team to design custom layouts, multi-tier platforms, or comprehensive search marketing campaigns.
          </p>
          <div className="pt-4">
            <Link
              to="/contact"
              className="btn-premium py-3.5 px-8 rounded-xl text-sm"
              aria-label="Contact Zenith"
            >
              Get Free Consultation
            </Link>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
