import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Search } from 'lucide-react';

export default function WhyChooseUs() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section ref={containerRef} className="bg-[var(--color-bg-primary)] py-24 lg:py-32 overflow-hidden flex justify-center px-4 sm:px-6 lg:px-8">
      
      {/* Massive Rounded Container */}
      <div className="relative w-full max-w-[90rem] h-[600px] lg:h-[750px] rounded-[2.5rem] overflow-hidden shadow-2xl group">
        
        {/* Full Width Background Image */}
        <div className="absolute inset-0 w-full h-full overflow-hidden bg-gray-200">
          <motion.img 
            style={{ scale: imgScale }}
            src="https://images.unsplash.com/photo-1542314831-c6a4d1400e11?q=80&w=2070&auto=format&fit=crop" 
            alt="Urban Billboard" 
            className="w-full h-full object-cover origin-bottom"
          />
        </div>

        {/* Left Side Floating Widget (Not cheaper, not cheat) */}
        <div className="absolute top-10 left-6 lg:top-20 lg:left-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/95 backdrop-blur-md p-8 rounded-3xl shadow-lg max-w-sm border border-white/20"
          >
            <p className="text-[#e23b3b] text-xs font-bold uppercase tracking-wider mb-4">crezco</p>
            <h3 className="text-2xl lg:text-3xl font-sans font-medium text-[var(--color-primary)] leading-[1.2] tracking-tight">
              Not cheaper, not cheat.<br/>
              <span className="text-gray-500">Free payments</span><br/>
              for everyone.
            </h3>
          </motion.div>
        </div>

        {/* Right Side Glass Card */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="absolute top-0 right-0 bottom-0 w-full md:w-[50%] lg:w-[45%] bg-white/40 backdrop-blur-3xl border-l border-white/50 flex flex-col justify-center p-10 lg:p-16 shadow-[-20px_0_40px_rgba(0,0,0,0.05)]"
        >
          {/* Typography block exactly matching screenshot */}
          <div className="mb-10">
            <h2 className="text-[3.5rem] lg:text-[4.5rem] xl:text-[5.5rem] font-sans font-medium text-[var(--color-primary)] leading-[0.95] tracking-tight">
              We reach
            </h2>
            <h2 className="text-[4rem] lg:text-[5rem] xl:text-[6rem] font-display italic font-normal text-[var(--color-primary)] leading-[0.9]">
              across <br /> America
            </h2>
          </div>
          
          <p className="text-[1.1rem] lg:text-[1.15rem] text-gray-800 leading-relaxed font-sans mb-12 max-w-md font-medium">
            Our media reaches 6 out of 10 Americans weekly. That's a vast audience including plenty of smaller ones too.
          </p>

          {/* Search Bar Input */}
          <div className="bg-white rounded-xl p-4 lg:p-5 flex items-center gap-4 shadow-sm max-w-md transition-shadow hover:shadow-md">
            <Search size={22} className="text-blue-300" strokeWidth={2.5} />
            <input 
              type="text" 
              placeholder="Search your market" 
              className="bg-transparent outline-none border-none w-full text-[var(--color-primary)] font-sans placeholder:text-gray-400 font-medium"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}

