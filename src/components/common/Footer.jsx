import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { COMPANY, NAV_LINKS } from '../../utils/constants';
import Magnetic from '../fx/Magnetic';

const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="bg-[var(--color-ink)] text-[var(--color-bg-primary)] pt-24 pb-10 overflow-hidden">
      <div className="edge max-w-[100rem] mx-auto">

        {/* Big contact statement */}
        <div className="border-b border-white/12 pb-16 sm:pb-20">
          <span className="overline !text-white/45">Let's connect</span>
          <a
            href={`mailto:${COMPANY.email}`}
            data-cursor="hover"
            className="group block mt-6 w-fit max-w-full"
          >
            <span className="display-hero text-[clamp(1.6rem,5.4vw,4.5rem)] text-white leading-[0.95] inline-flex items-start gap-3 break-all">
              {COMPANY.email}
              <ArrowUpRight
                className="mt-1 sm:mt-2 w-[0.5em] h-[0.5em] shrink-0 text-white/60 transition-all duration-500 group-hover:rotate-45 group-hover:text-white"
              />
            </span>
          </a>
        </div>

        {/* Columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 py-16">
          <div className="md:col-span-5">
            <span className="font-display text-3xl italic tracking-tight text-white">Zenith.</span>
            <p className="mt-5 max-w-sm text-white/55 leading-relaxed">
              We design, build & rank digital experiences for brands that refuse to blend in.
            </p>
            <Magnetic strength={0.4} className="mt-8">
              <Link to="/contact" data-cursor="hover" className="btn-primary bg-white text-[var(--color-ink)] border-transparent hover:bg-transparent hover:text-white hover:border-white">
                Start a project <ArrowUpRight size={18} />
              </Link>
            </Magnetic>
          </div>

          <div className="md:col-span-3 md:col-start-7">
            <h3 className="overline !text-white/45 mb-6">Navigate</h3>
            <ul className="space-y-3.5">
              {NAV_LINKS.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} data-cursor="hover" className="text-white/70 hover:text-white transition-colors duration-300 text-[0.98rem]">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <h3 className="overline !text-white/45 mb-6">Contact</h3>
            <ul className="space-y-3.5 text-[0.98rem] text-white/70">
              <li><a href={`tel:${COMPANY.phone}`} data-cursor="hover" className="hover:text-white transition-colors">{COMPANY.phone}</a></li>
              <li className="leading-relaxed">{COMPANY.address}</li>
              <li className="leading-relaxed">{COMPANY.hours}</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/12 flex flex-col sm:flex-row justify-between items-center gap-5 text-[0.82rem] text-white/45">
          <p>© {year} {COMPANY.name}. All rights reserved.</p>
          <div className="flex gap-7">
            <span data-cursor="hover" className="hover:text-white transition-colors cursor-pointer">Privacy</span>
            <span data-cursor="hover" className="hover:text-white transition-colors cursor-pointer">Terms</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
