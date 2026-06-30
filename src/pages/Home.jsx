import React from 'react';
import { motion } from 'framer-motion';
import SEOHead from '../components/common/SEOHead';
import HeroSection from '../components/home/HeroSection';
import MarqueeStrip from '../components/home/MarqueeStrip';
import IntroSection from '../components/home/IntroSection';
import ServicesShowcase from '../components/home/ServicesShowcase';
import PortfolioShowcase from '../components/home/PortfolioShowcase';
import ProcessTimeline from '../components/home/ProcessTimeline';
import Testimonials from '../components/home/Testimonials';
import HomeCTA from '../components/home/HomeCTA';
import { pageTransition } from '../utils/animations';

export default function Home() {
  return (
    <motion.div initial="initial" animate="animate" exit="exit" variants={pageTransition}>
      <SEOHead
        title="Premium Web Design & SEO Studio — Austin"
        description="Zenith Web Solutions is a digital studio designing, building, and ranking high-performing websites for brands that refuse to blend in."
      />

      <HeroSection />
      <MarqueeStrip />
      <IntroSection />
      <ServicesShowcase />
      <PortfolioShowcase />
      <ProcessTimeline />
      <Testimonials />
      <HomeCTA />
    </motion.div>
  );
}
