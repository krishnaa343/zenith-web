import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export default function HeroSection() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 300]);
  const scale = useTransform(scrollY, [0, 1000], [1, 1.1]);

  return (
    <section className="relative min-h-screen flex flex-col justify-between pt-32 pb-12 overflow-hidden bg-[var(--color-bg-primary)]">
      
      {/* Massive Background Image with Scale Animation */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.img 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop" 
          alt="Bustling Cityscape" 
          className="w-full h-full object-cover"
        />
        {/* Subtle overlay to ensure text is readable but image still pops */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent pointer-events-none"></div>
        <div className="absolute inset-0 bg-black mix-blend-overlay opacity-40 pointer-events-none"></div>
      </div>

      <div className="max-w-[100rem] mx-auto px-6 sm:px-8 lg:px-12 w-full z-10 relative flex-grow flex flex-col justify-between h-full">
        
        {/* Massive Typography matching "horizon hues" */}
        <div className="flex-grow flex items-center justify-center mt-12 overflow-hidden">
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-[12vw] leading-none font-sans font-medium text-white tracking-tighter text-center drop-shadow-2xl"
          >
            zenith <span className="font-display italic font-normal text-white/90">web</span>
          </motion.h1>
        </div>

        {/* Bottom Glassmorphic Overlay */}
        <div className="flex justify-end mt-auto">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="glass-card p-8 max-w-md backdrop-blur-3xl bg-white/10 border-white/20"
          >
            <p className="text-2xl font-sans text-white font-medium leading-tight mb-8">
              we create connections <br/> through premium <br/> digital products.
            </p>
            <Link to="/contact" className="btn-primary w-full group bg-white text-black border-transparent hover:bg-black hover:text-white hover:border-black" aria-label="Start a Project">
              Let's Talk <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </motion.div>
        </div>

      </div>
    </section>
  );
}


