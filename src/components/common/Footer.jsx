import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { COMPANY, NAV_LINKS, SERVICES } from '../../utils/constants';

export default function Footer() {
  const quickServices = SERVICES.slice(0, 5);

  return (
    <footer className="bg-slate-50 text-gray-500 border-t border-gray-200 pt-24 pb-12 select-none">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-16">
          {/* Column 1: Brand Info */}
          <div className="space-y-6">
            <span className="text-xl font-black tracking-tight text-gray-900">
              Zenith<span className="text-primary font-medium text-sm ml-1.5 uppercase tracking-widest">Web</span>
            </span>
            <p className="text-xs leading-relaxed text-gray-500 font-light max-w-sm">
              We design and build digital experiences that drive growth. Our work balances high aesthetic standards with technical execution.
            </p>
            <div className="pt-1 text-[9px] font-bold text-gray-400 uppercase tracking-widest">
              Based in Austin, Texas.
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-gray-950 font-bold text-xs uppercase tracking-wider mb-6">Explore</h3>
            <ul className="space-y-3.5 text-xs">
              {NAV_LINKS.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="hover:text-primary transition-colors duration-200 font-medium">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="text-gray-950 font-bold text-xs uppercase tracking-wider mb-6">Expertise</h3>
            <ul className="space-y-3.5 text-xs">
              {quickServices.map((service) => (
                <li key={service.id}>
                  <Link to="/services" className="hover:text-primary transition-colors duration-200 font-medium">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact details */}
          <div className="space-y-4 text-xs">
            <h3 className="text-gray-950 font-bold text-xs uppercase tracking-wider mb-6">Contact</h3>
            <div className="flex items-start gap-3">
              <Mail className="text-primary flex-shrink-0 mt-0.5" size={14} />
              <a href={`mailto:${COMPANY.email}`} className="hover:text-primary transition-colors duration-200 break-all font-light">
                {COMPANY.email}
              </a>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="text-primary flex-shrink-0 mt-0.5" size={14} />
              <a href={`tel:${COMPANY.phone}`} className="hover:text-primary transition-colors duration-200 font-light">
                {COMPANY.phone}
              </a>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="text-primary flex-shrink-0 mt-0.5" size={14} />
              <span className="font-light leading-relaxed text-gray-500">{COMPANY.address}</span>
            </div>
            <div className="flex items-start gap-3 pt-2">
              <Clock className="text-primary flex-shrink-0 mt-0.5" size={14} />
              <span className="text-[10px] text-gray-400 font-medium">{COMPANY.hours}</span>
            </div>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-gray-400 tracking-wider">
          <p>© {new Date().getFullYear()} {COMPANY.name.toUpperCase()}. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-6 uppercase">
            <span className="hover:text-primary transition-colors cursor-pointer">Privacy Policy</span>
            <span className="hover:text-primary transition-colors cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
