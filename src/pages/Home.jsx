import React from 'react';
import { motion } from 'framer-motion';
import SEOHead from '../components/common/SEOHead';
import HeroSection from '../components/home/HeroSection';
import StatsSection from '../components/home/StatsSection';
import ServicesPreview from '../components/home/ServicesPreview';
import WhyChooseUs from '../components/home/WhyChooseUs';
import ProcessPreview from '../components/home/ProcessPreview';
import Testimonials from '../components/home/Testimonials';
import HomeCTA from '../components/home/HomeCTA';
import { pageTransition } from '../utils/animations';

export default function Home() {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
    >
      <SEOHead
        title="Web Design & Digital Marketing Austin"
        description="Zenith Web Solutions builds high-performing responsive websites, enhances local search engine rankings, and provides Google Business Profile management."
      />

      <HeroSection />
      <StatsSection />
      <ServicesPreview />
      <WhyChooseUs />
      <ProcessPreview />
      <Testimonials />
      <HomeCTA />
    </motion.div>
  );
}
