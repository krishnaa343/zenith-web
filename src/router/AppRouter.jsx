import React, { lazy, Suspense } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import MainLayout from '../layouts/MainLayout';
import Loader from '../components/common/Loader';
import useScrollToTop from '../hooks/useScrollToTop';
import useDarkMode from '../hooks/useDarkMode';
import useToast from '../hooks/useToast';

// Lazy load page views
const Home = lazy(() => import('../pages/Home'));
const Services = lazy(() => import('../pages/Services'));
const About = lazy(() => import('../pages/About'));
const Portfolio = lazy(() => import('../pages/Portfolio'));
const ProjectDetail = lazy(() => import('../pages/ProjectDetail'));
const Process = lazy(() => import('../pages/Process'));
const Pricing = lazy(() => import('../pages/Pricing'));
const FAQ = lazy(() => import('../pages/FAQ'));
const Contact = lazy(() => import('../pages/Contact'));

export default function AppRouter() {
  useScrollToTop();
  const { isDark, toggle } = useDarkMode();
  const { toasts, addToast, removeToast } = useToast();
  const location = useLocation();

  return (
    <MainLayout
      isDark={isDark}
      toggleDarkMode={toggle}
      toasts={toasts}
      removeToast={removeToast}
    >
      <Suspense fallback={<Loader />}>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/portfolio/:id" element={<ProjectDetail />} />
            <Route path="/process" element={<Process />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/faqs" element={<FAQ />} />
            <Route path="/contact" element={<Contact addToast={addToast} />} />
            {/* Any unknown URL falls back to the home page */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </AnimatePresence>
      </Suspense>
    </MainLayout>
  );
}
