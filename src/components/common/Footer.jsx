import React from 'react';
import { Link } from 'react-router-dom';
import { COMPANY, NAV_LINKS, SERVICES } from '../../utils/constants';

export default function Footer() {
  const quickServices = SERVICES.slice(0, 5);

  return (
    <footer className="bg-[var(--color-bg-secondary)] border-t border-[var(--color-border)] text-[var(--color-body)] pt-24 pb-12 relative">
      <div className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          {/* Column 1: Brand Info */}
          <div className="space-y-6">
            <span className="text-2xl font-display italic tracking-tight text-[var(--color-primary)]">
              Zenith.
            </span>
            <p className="text-[0.95rem] font-sans leading-relaxed max-w-sm">
              We design and build digital experiences that drive growth. Our work balances high aesthetic standards with technical execution.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-[var(--color-primary)] font-sans font-medium text-[0.95rem] mb-6">Company</h3>
            <ul className="space-y-4 text-[0.95rem] font-sans">
              {NAV_LINKS.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="hover:text-[var(--color-primary)] transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="text-[var(--color-primary)] font-sans font-medium text-[0.95rem] mb-6">Expertise</h3>
            <ul className="space-y-4 text-[0.95rem] font-sans">
              {quickServices.map((service) => (
                <li key={service.id}>
                  <Link to="/services" className="hover:text-[var(--color-primary)] transition-colors duration-200">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact details */}
          <div className="space-y-4 text-[0.95rem] font-sans">
            <h3 className="text-[var(--color-primary)] font-sans font-medium text-[0.95rem] mb-6">Contact</h3>
            <div className="flex flex-col gap-2">
              <a href={`mailto:${COMPANY.email}`} className="hover:text-[var(--color-primary)] transition-colors duration-200 break-all">
                {COMPANY.email}
              </a>
              <a href={`tel:${COMPANY.phone}`} className="hover:text-[var(--color-primary)] transition-colors duration-200">
                {COMPANY.phone}
              </a>
              <span className="leading-relaxed mt-2">{COMPANY.address}</span>
            </div>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="pt-8 border-t border-[var(--color-border)] flex flex-col md:flex-row justify-between items-center gap-6 text-[0.85rem] font-sans font-medium">
          <p>© {new Date().getFullYear()} {COMPANY.name}.</p>
          <div className="flex gap-6">
            <span className="hover:text-[var(--color-primary)] transition-colors cursor-pointer">Privacy Policy</span>
            <span className="hover:text-[var(--color-primary)] transition-colors cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
