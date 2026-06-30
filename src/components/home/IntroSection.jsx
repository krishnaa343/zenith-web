import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Reveal from '../fx/Reveal';
import RevealText from '../fx/RevealText';
import MaskReveal from '../fx/MaskReveal';
import Counter from '../fx/Counter';

const STATS = [
  { value: 50, suffix: '+', label: 'Projects shipped' },
  { value: 99, suffix: '%', label: 'Client satisfaction' },
  { value: 2.5, suffix: 'x', decimals: 1, label: 'Average ROI' },
  { value: null, display: '24/7', label: 'Active support' },
];

export default function IntroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const imgY = useTransform(scrollYProgress, [0, 1], ['12%', '-12%']);

  return (
    <section ref={ref} className="bg-[var(--color-bg-primary)] py-28 sm:py-40 overflow-hidden">
      <div className="edge max-w-[100rem] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-16 gap-x-10">

          {/* Left — editorial statement */}
          <div className="lg:col-span-7">
            <Reveal variant="fade">
              <span className="overline">(01) — Who we are</span>
            </Reveal>
            <h2 className="mt-8 text-[clamp(2.25rem,5.5vw,5rem)] leading-[0.98] tracking-[-0.04em] text-[var(--color-ink)] font-medium">
              <MaskReveal delay={0}>A studio obsessed</MaskReveal>
              <MaskReveal delay={0.08}>with <span className="serif-italic font-normal">craft, clarity</span></MaskReveal>
              <MaskReveal delay={0.16}>&amp; measurable growth.</MaskReveal>
            </h2>
          </div>

          {/* Right — paragraph + CTA */}
          <div className="lg:col-span-5 lg:pt-4 flex flex-col justify-end">
            <RevealText as="p" className="text-lg sm:text-xl text-[var(--color-body)] leading-relaxed max-w-md">
              We pair editorial design with disciplined engineering — building fast, search-ready websites that look like nothing else in your industry and quietly outperform everything in it.
            </RevealText>
            <Reveal variant="up" delay={0.2} className="mt-8">
              <Link to="/about" data-cursor="hover" className="link-underline text-[var(--color-ink)] font-medium text-base">
                More about the studio
                <ArrowUpRight size={18} />
              </Link>
            </Reveal>
          </div>
        </div>

        {/* Stats row + overlapping image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mt-24 lg:mt-32 items-end">
          <div className="lg:col-span-7 order-2 lg:order-1 grid grid-cols-2 gap-x-8 gap-y-12">
            {STATS.map((s, i) => (
              <Reveal key={i} variant="up" index={i} className="border-t border-[var(--color-border-strong)] pt-5">
                <div className="font-display italic text-5xl sm:text-6xl text-[var(--color-ink)] leading-none">
                  <Counter value={s.value} suffix={s.suffix} decimals={s.decimals || 0} display={s.display} />
                </div>
                <div className="mt-3 text-sm text-[var(--color-muted)] font-medium">{s.label}</div>
              </Reveal>
            ))}
          </div>

          <div className="lg:col-span-5 order-1 lg:order-2">
            <Reveal variant="scale" className="overflow-hidden rounded-[1.75rem]">
              <div className="overflow-hidden rounded-[1.75rem] h-[320px] sm:h-[420px]">
                <motion.img
                  style={{ y: imgY, scale: 1.15 }}
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop"
                  alt="Studio workspace"
                  className="w-full h-full object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
