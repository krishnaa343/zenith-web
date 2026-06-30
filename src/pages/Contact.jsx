import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import SEOHead from '../components/common/SEOHead';
import PageHero from '../components/common/PageHero';
import Reveal from '../components/fx/Reveal';
import Magnetic from '../components/fx/Magnetic';
import { COMPANY, SERVICES } from '../utils/constants';
import { pageTransition } from '../utils/animations';

const fieldBase =
  'w-full bg-transparent border-b border-[var(--color-border-strong)] py-3 text-lg text-[var(--color-ink)] placeholder:text-[var(--color-muted)] focus:border-[var(--color-ink)] outline-none transition-colors';

export default function Contact({ addToast }) {
  const [formData, setFormData] = useState({
    name: '', businessName: '', email: '', service: 'Website Design', message: '',
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const t = {};
    if (!formData.name.trim()) t.name = 'Full name is required';
    if (!formData.email.trim()) t.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) t.email = 'Email is invalid';
    if (!formData.message.trim()) t.message = 'Please share a few details';
    setErrors(t);
    return Object.keys(t).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
    if (errors[name]) setErrors((p) => ({ ...p, [name]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) {
      addToast?.('Please correct the highlighted fields.', 'error');
      return;
    }
    addToast?.('Message received — we’ll reply within 24 hours.', 'success');
    setFormData({ name: '', businessName: '', email: '', service: 'Website Design', message: '' });
  };

  const details = [
    { label: 'Email', value: COMPANY.email, href: `mailto:${COMPANY.email}` },
    { label: 'Studio', value: COMPANY.address },
    { label: 'Hours', value: COMPANY.hours },
  ];

  return (
    <motion.div initial="initial" animate="animate" exit="exit" variants={pageTransition} className="bg-[var(--color-bg-primary)]">
      <SEOHead
        title="Contact — Start a Project"
        description="Book a free discovery call to discuss design, development, technical SEO, or local search visibility."
      />

      <PageHero
        eyebrow="(Contact)"
        titleLines={['Let’s start', <span key="i" className="serif-italic font-normal">a conversation.</span>]}
        lede="Tell us about your business and goals. Our team will review your footprint and reply within one business day."
      />

      <section className="edge max-w-[100rem] mx-auto pb-28 sm:pb-40">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Form */}
          <Reveal variant="up" className="lg:col-span-7">
            <form onSubmit={handleSubmit} noValidate className="space-y-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div>
                  <label htmlFor="name" className="overline block mb-2">Full name *</label>
                  <input id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Jane Doe" className={fieldBase} />
                  {errors.name && <span className="text-sm text-[var(--color-ink)]/60 mt-2 block">{errors.name}</span>}
                </div>
                <div>
                  <label htmlFor="businessName" className="overline block mb-2">Business</label>
                  <input id="businessName" name="businessName" value={formData.businessName} onChange={handleChange} placeholder="Acme Co." className={fieldBase} />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div>
                  <label htmlFor="email" className="overline block mb-2">Email *</label>
                  <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="jane@acme.com" className={fieldBase} />
                  {errors.email && <span className="text-sm text-[var(--color-ink)]/60 mt-2 block">{errors.email}</span>}
                </div>
              </div>

              <div>
                <label htmlFor="service" className="overline block mb-2">Interested in</label>
                <select id="service" name="service" value={formData.service} onChange={handleChange} className={`${fieldBase} cursor-pointer`}>
                  {SERVICES.map((s) => <option key={s.id} value={s.title}>{s.title}</option>)}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="overline block mb-2">Project goals *</label>
                <textarea id="message" name="message" rows={4} value={formData.message} onChange={handleChange} placeholder="Briefly describe your goals, budget, or visibility challenges…" className={`${fieldBase} resize-y`} />
                {errors.message && <span className="text-sm text-[var(--color-ink)]/60 mt-2 block">{errors.message}</span>}
              </div>

              <Magnetic strength={0.4}>
                <button type="submit" data-cursor="hover" className="btn-primary group">
                  Send request
                  <ArrowUpRight size={18} className="transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </Magnetic>
            </form>
          </Reveal>

          {/* Details */}
          <Reveal variant="up" delay={0.1} className="lg:col-span-4 lg:col-start-9">
            <div className="border-t border-[var(--color-border-strong)]">
              {details.map((d) => (
                <div key={d.label} className="py-6 border-b border-[var(--color-border)]">
                  <span className="overline">{d.label}</span>
                  {d.href ? (
                    <a href={d.href} data-cursor="hover" className="mt-2 block text-xl text-[var(--color-ink)] link-underline w-fit break-all">{d.value}</a>
                  ) : (
                    <span className="mt-2 block text-xl text-[var(--color-ink)] leading-snug">{d.value}</span>
                  )}
                </div>
              ))}
              <div className="pt-8 flex items-center gap-3">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-[var(--color-ink)]/40 animate-ping" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--color-ink)]" />
                </span>
                <span className="overline">Available for new projects</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </motion.div>
  );
}
