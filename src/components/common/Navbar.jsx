import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../../utils/constants';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <>
      <nav className="fixed top-6 left-0 w-full z-50 px-4 sm:px-6 flex justify-center pointer-events-none">
        
        {/* The White Pill Navbar */}
        <div className="bg-white rounded-full px-4 sm:px-6 py-3 flex items-center justify-between w-full max-w-[80rem] shadow-xl border border-[var(--color-border)] pointer-events-auto">
          
          {/* Left Links */}
          <div className="hidden lg:flex items-center gap-1 w-1/3">
            {NAV_LINKS.slice(0, 3).map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`nav-pill ${isActive ? 'active' : ''}`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Center Logo */}
          <Link 
            to="/" 
            className="flex items-center justify-center w-full lg:w-1/3 font-display text-2xl font-medium tracking-tight text-[var(--color-primary)] uppercase"
            aria-label="Zenith Web Solutions Home"
          >
            Zenith
          </Link>

          {/* Right Links & CTA */}
          <div className="hidden lg:flex items-center justify-end gap-4 w-1/3">
            <Link
              to="/services"
              className={`nav-pill ${location.pathname === '/services' ? 'active' : ''}`}
            >
              Services ⌄
            </Link>
            <Link to="/contact" className="btn-primary py-2.5 px-6 rounded-full text-sm" aria-label="Get in touch">
              Get in touch
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-[var(--color-primary)] focus:outline-none"
              aria-expanded={isOpen}
              aria-label="Toggle main menu"
            >
              {isOpen ? <X size={20} strokeWidth={2} /> : <Menu size={20} strokeWidth={2} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-[var(--color-bg-primary)] pt-32"
          >
            <div className="px-6 py-8 space-y-4 flex flex-col">
              {NAV_LINKS.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`block p-4 rounded-2xl text-xl font-sans font-medium transition-colors ${
                      isActive
                        ? 'bg-[var(--color-primary)] text-white'
                        : 'text-[var(--color-primary)] hover:bg-white'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <div className="pt-8">
                <Link
                  to="/contact"
                  className="btn-primary w-full py-4 text-center"
                  aria-label="Get Free Consultation"
                >
                  Get in touch
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
