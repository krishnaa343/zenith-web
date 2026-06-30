import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { NAV_LINKS } from '../../utils/constants';
import Magnetic from '../fx/Magnetic';

const EASE = [0.16, 1, 0.3, 1];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (v) => setScrolled(v > 40));

  useEffect(() => { setIsOpen(false); }, [location.pathname]);

  const primaryLinks = NAV_LINKS.filter((l) => ['/', '/portfolio', '/about', '/process'].includes(l.path));
  const rightLinks = NAV_LINKS.filter((l) => ['/services', '/pricing'].includes(l.path));

  return (
    <>
      <motion.nav
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: EASE, delay: 0.2 }}
        className="fixed top-4 sm:top-6 left-0 w-full z-[80] edge flex justify-center pointer-events-none"
      >
        <motion.div
          animate={{
            maxWidth: scrolled ? '52rem' : '80rem',
            paddingTop: scrolled ? '0.5rem' : '0.75rem',
            paddingBottom: scrolled ? '0.5rem' : '0.75rem',
          }}
          transition={{ duration: 0.6, ease: EASE }}
          className="glass-card !rounded-full px-3 sm:px-4 flex items-center justify-between w-full pointer-events-auto"
        >
          {/* Left links */}
          <div className="hidden lg:flex items-center gap-1 flex-1">
            {primaryLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link key={link.path} to={link.path} className={`nav-pill ${isActive ? 'active' : ''}`}>
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Center monogram */}
          <Link
            to="/"
            aria-label="Zenith Web Solutions — Home"
            className="flex items-center justify-center px-3 lg:flex-1 lg:px-0"
          >
            <span className="font-display text-xl sm:text-2xl font-medium tracking-tight text-[var(--color-ink)] leading-none">
              Zenith<span className="serif-italic">.</span>
            </span>
          </Link>

          {/* Right links + CTA */}
          <div className="hidden lg:flex items-center justify-end gap-2 flex-1">
            {rightLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link key={link.path} to={link.path} className={`nav-pill ${isActive ? 'active' : ''}`}>
                  {link.label}
                </Link>
              );
            })}
            <Magnetic strength={0.5} className="shrink-0">
              <Link
                to="/contact"
                data-cursor="hover"
                className="btn-primary py-2.5 px-5 text-sm group whitespace-nowrap"
                aria-label="Get in touch"
              >
                Get in touch
                <ArrowUpRight size={16} className="transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </Magnetic>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen((v) => !v)}
            className="flex items-center lg:hidden p-2 text-[var(--color-ink)]"
            aria-expanded={isOpen}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </motion.div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: EASE }}
            className="fixed inset-0 z-[70] bg-[var(--color-bg-primary)] pt-28 lg:hidden"
          >
            <div className="edge py-8 flex flex-col">
              {NAV_LINKS.map((link, i) => {
                const isActive = location.pathname === link.path;
                return (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: EASE, delay: 0.05 + i * 0.04 }}
                    className="overflow-hidden border-b border-[var(--color-border)]"
                  >
                    <Link
                      to={link.path}
                      className={`block py-5 font-display text-4xl tracking-tight transition-colors ${
                        isActive ? 'italic text-[var(--color-ink)]' : 'text-[var(--color-ink)]/70 hover:text-[var(--color-ink)]'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}
              <Link to="/contact" className="btn-primary w-full mt-10 py-4">
                Get in touch <ArrowUpRight size={18} />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
