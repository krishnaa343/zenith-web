import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { NAV_LINKS } from '../../utils/constants';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md border-b border-gray-200/80 py-4 shadow-sm'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-12">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group" aria-label="Zenith Web Solutions Home">
            <span className="text-xl font-black tracking-tight text-gray-900">
              Zenith<span className="text-primary font-medium text-sm ml-1.5 uppercase tracking-widest">Web</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10">
            <div className="flex items-center gap-8">
              {NAV_LINKS.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`text-xs font-semibold uppercase tracking-wider transition-colors duration-200 hover:text-primary ${
                      isActive
                        ? 'text-primary'
                        : 'text-gray-500'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>

            {/* Consultation CTA */}
            <Link to="/contact" className="btn-premium py-2.5 px-6 text-xs rounded-xl inline-flex items-center gap-1.5" aria-label="Get Free Consultation">
              Get Started <ArrowUpRight size={14} />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-gray-500 hover:text-gray-900 focus:outline-none"
              aria-expanded={isOpen}
              aria-label="Toggle main menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-white border-b border-gray-200 shadow-lg"
          >
            <div className="px-6 pt-2 pb-8 space-y-3">
              {NAV_LINKS.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`block px-3 py-3 rounded-xl text-sm font-semibold tracking-wide transition-colors ${
                      isActive
                        ? 'bg-blue-50 text-primary'
                        : 'text-gray-600 hover:text-primary hover:bg-slate-50'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <div className="pt-4 border-t border-gray-200">
                <Link
                  to="/contact"
                  className="w-full text-center btn-premium py-3 rounded-xl text-sm inline-flex justify-center items-center gap-1.5"
                  aria-label="Get Free Consultation"
                >
                  Get Started <ArrowUpRight size={16} />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
