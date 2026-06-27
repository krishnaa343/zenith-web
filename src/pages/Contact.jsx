import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Clock, MapPin, Send, Compass } from 'lucide-react';
import SEOHead from '../components/common/SEOHead';
import { COMPANY, SERVICES } from '../utils/constants';
import { pageTransition, fadeInLeft, fadeInRight } from '../utils/animations';

export default function Contact({ addToast }) {
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    email: '',
    phone: '',
    service: 'Website Design',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = 'Full Name is required';
    if (!formData.email.trim()) {
      tempErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Email address is invalid';
    }
    if (!formData.message.trim()) tempErrors.message = 'Message content is required';
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) {
      if (addToast) addToast('Please correct form validation errors.', 'error');
      return;
    }
    if (addToast) {
      addToast('Message received! We will follow up within 24 hours.', 'success');
    }
    setFormData({ name: '', businessName: '', email: '', phone: '', service: 'Website Design', message: '' });
  };

  const inputBase = "w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition";

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
      className="bg-white min-h-screen select-none"
    >
      <SEOHead
        title="Contact — Free Digital Strategy Consultation"
        description="Book a digital strategy call to discuss design layouts, technical SEO, API custom dashboard integrations, or local search visibility maps."
      />

      {/* Hero Banner */}
      <section className="relative pt-44 pb-24 overflow-hidden bg-white">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] rounded-full bg-blue-100/60 blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
          <span className="section-badge">Get In Touch</span>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-none text-slate-900 text-balance">
            Project Discovery Call
          </h1>
          <p className="text-sm sm:text-base text-slate-500 max-w-2xl mx-auto leading-relaxed text-balance">
            Submit your business profile details. Our engineering consulting team will analyze your search footprint and reach out.
          </p>
        </div>
      </section>

      {/* Contact Grid Section */}
      <section className="pb-32 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

            {/* Left form column */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInLeft}
              className="lg:col-span-7 bg-white border border-slate-200 p-8 sm:p-10 rounded-2xl shadow-sm"
            >
              <h2 className="text-lg font-bold text-slate-900 mb-6 uppercase tracking-wider">
                Discovery Form
              </h2>

              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-[9px] font-bold text-slate-500 uppercase tracking-widest mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text" id="name" name="name"
                      value={formData.name} onChange={handleChange}
                      className={`${inputBase} ${errors.name ? 'border-rose-400 ring-1 ring-rose-400' : ''}`}
                      placeholder="Jane Doe"
                    />
                    {errors.name && <span className="text-[10px] text-rose-500 font-semibold mt-1 block">{errors.name}</span>}
                  </div>

                  {/* Business Name */}
                  <div>
                    <label htmlFor="businessName" className="block text-[9px] font-bold text-slate-500 uppercase tracking-widest mb-2">
                      Business Name
                    </label>
                    <input
                      type="text" id="businessName" name="businessName"
                      value={formData.businessName} onChange={handleChange}
                      className={inputBase} placeholder="Acme Corporation"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-[9px] font-bold text-slate-500 uppercase tracking-widest mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email" id="email" name="email"
                      value={formData.email} onChange={handleChange}
                      className={`${inputBase} ${errors.email ? 'border-rose-400 ring-1 ring-rose-400' : ''}`}
                      placeholder="jane@example.com"
                    />
                    {errors.email && <span className="text-[10px] text-rose-500 font-semibold mt-1 block">{errors.email}</span>}
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-[9px] font-bold text-slate-500 uppercase tracking-widest mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel" id="phone" name="phone"
                      value={formData.phone} onChange={handleChange}
                      className={inputBase} placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>

                {/* Service dropdown */}
                <div>
                  <label htmlFor="service" className="block text-[9px] font-bold text-slate-500 uppercase tracking-widest mb-2">
                    Service Interested In
                  </label>
                  <select
                    id="service" name="service"
                    value={formData.service} onChange={handleChange}
                    className={`${inputBase} cursor-pointer`}
                  >
                    {SERVICES.map((serv) => (
                      <option key={serv.id} value={serv.title}>{serv.title}</option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-[9px] font-bold text-slate-500 uppercase tracking-widest mb-2">
                    Project Goals *
                  </label>
                  <textarea
                    id="message" name="message" rows={5}
                    value={formData.message} onChange={handleChange}
                    className={`${inputBase} resize-y ${errors.message ? 'border-rose-400 ring-1 ring-rose-400' : ''}`}
                    placeholder="Briefly describe your goals, budget, or visibility issues..."
                  />
                  {errors.message && <span className="text-[10px] text-rose-500 font-semibold mt-1 block">{errors.message}</span>}
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full btn-premium py-3.5 rounded-xl text-sm cursor-pointer inline-flex items-center justify-center gap-1.5"
                  >
                    Send Request <Send size={14} />
                  </button>
                </div>
              </form>
            </motion.div>

            {/* Right details column */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInRight}
              className="lg:col-span-5 space-y-5 w-full"
            >
              {/* Info cards */}
              {[
                { icon: Mail, label: 'Email Address', value: COMPANY.email, href: `mailto:${COMPANY.email}` },
                { icon: Phone, label: 'Phone Number', value: COMPANY.phone, href: `tel:${COMPANY.phone}` },
                { icon: Clock, label: 'Business Hours', value: COMPANY.hours },
                { icon: MapPin, label: 'Office Location', value: COMPANY.address },
              ].map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-start gap-4 bg-white border border-slate-200 p-6 rounded-xl hover:border-blue-200 transition-colors">
                  <div className="icon-box flex-shrink-0">
                    <Icon size={18} />
                  </div>
                  <div>
                    <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{label}</h3>
                    {href ? (
                      <a href={href} className="text-sm font-semibold text-slate-900 mt-1 block hover:text-blue-600 break-all transition-colors">
                        {value}
                      </a>
                    ) : (
                      <span className="text-sm font-semibold text-slate-900 mt-1 block leading-snug">{value}</span>
                    )}
                  </div>
                </div>
              ))}

              {/* Map Box */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-100 border border-blue-100 rounded-xl overflow-hidden shadow-sm select-none">
                <div className="h-52 flex flex-col items-center justify-center p-6 text-center">
                  <Compass className="text-blue-600 mb-3 animate-spin [animation-duration:15s]" size={36} />
                  <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">Austin Headquarters</h4>
                  <p className="text-xs text-slate-500 max-w-xs mt-1.5 leading-relaxed">
                    {COMPANY.address}
                  </p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </motion.div>
  );
}
