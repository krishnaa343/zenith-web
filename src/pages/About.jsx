import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Award, ShieldCheck, Rocket, Clock, Users, Globe, Check } from 'lucide-react';
import SEOHead from '../components/common/SEOHead';
import PageHero from '../components/common/PageHero';
import SectionHeader from '../components/common/SectionHeader';
import CTASection from '../components/common/CTASection';
import Reveal from '../components/fx/Reveal';
import MaskReveal from '../components/fx/MaskReveal';
import Counter from '../components/fx/Counter';
import { pageTransition } from '../utils/animations';

const VALUES = [
  { icon: Award, title: 'Design fidelity', desc: 'Strict design checks and performance audits deliver clean, modern interfaces — every time.' },
  { icon: ShieldCheck, title: 'Absolute integrity', desc: 'Complete clarity on milestones, scope, payment terms, and delivery schedules.' },
  { icon: Rocket, title: 'Performant stack', desc: 'Built on fast, modern web tech — React and Vite — for instant page loads.' },
  { icon: Clock, title: 'Timely execution', desc: 'We map milestones and deliver your project on schedule, without drama.' },
  { icon: Users, title: 'Client aligned', desc: 'Every layout, keyword, and custom tool is designed to support your business goals.' },
  { icon: Globe, title: 'Dedicated care', desc: 'Hosting setup, Google reinstatements, and post-launch maintenance — handled.' },
];

const STATS = [
  { value: 50, suffix: '+', label: 'Projects shipped' },
  { value: 8, suffix: 'yrs', label: 'Combined craft' },
  { value: 99, suffix: '%', label: 'Client satisfaction' },
];

const DIFFERENTIATORS = [
  'Dedicated technical project management',
  'Structured 30 / 70 transparent payments',
  'Completely custom design — no templates',
  'SEO-first semantic structure',
  'Full deployment and server support',
  'Prompt, human support channels',
];

function SplitBlock({ eyebrow, titleLines, body, image, alt, flip }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['12%', '-12%']);
  return (
    <div ref={ref} className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
      <div className={`lg:col-span-6 ${flip ? 'lg:order-2' : ''}`}>
        <Reveal variant="fade"><span className="overline">{eyebrow}</span></Reveal>
        <h2 className="mt-6 text-[clamp(2rem,4.5vw,3.75rem)] leading-[1.0] tracking-[-0.035em] text-[var(--color-ink)] font-medium">
          {titleLines.map((l, i) => <MaskReveal key={i} delay={i * 0.08}>{l}</MaskReveal>)}
        </h2>
        <Reveal variant="up" delay={0.15}>
          <p className="mt-7 text-lg text-[var(--color-body)] leading-relaxed max-w-md">{body}</p>
        </Reveal>
      </div>
      <div className={`lg:col-span-6 ${flip ? 'lg:order-1' : ''}`}>
        <Reveal variant="scale" className="overflow-hidden rounded-[1.75rem]">
          <div className="overflow-hidden rounded-[1.75rem] h-[340px] sm:h-[460px]">
            <motion.img style={{ y, scale: 1.15 }} src={image} alt={alt} className="w-full h-full object-cover" />
          </div>
        </Reveal>
      </div>
    </div>
  );
}

export default function About() {
  return (
    <motion.div initial="initial" animate="animate" exit="exit" variants={pageTransition} className="bg-[var(--color-bg-primary)]">
      <SEOHead
        title="About — A Premium Digital Studio in Austin"
        description="Zenith Web Solutions is a US-based digital studio specializing in premium custom website design, local search marketing, and search compliance."
      />

      <PageHero
        eyebrow="(About)"
        titleLines={['A studio built', <span key="i" className="serif-italic font-normal">on craft.</span>]}
        lede="A US-based digital studio designing, engineering, and ranking websites for brands that refuse to blend in."
      />

      <section className="edge max-w-[100rem] mx-auto py-20 sm:py-28 space-y-28 sm:space-y-40">
        <SplitBlock
          eyebrow="(01) — Our mission"
          titleLines={['Empowering brands', <span key="i" className="serif-italic font-normal">through design.</span>]}
          body="We build robust, high-performing websites and visibility systems that attract qualified inquiries — secure digital frameworks that let businesses compete, rank, and grow in their markets."
          image="https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1600&auto=format&fit=crop"
          alt="Studio meeting space"
        />
        <SplitBlock
          flip
          eyebrow="(02) — Our vision"
          titleLines={['Setting the', <span key="i" className="serif-italic font-normal">standard.</span>]}
          body="We aim to be the digital partner recognized for high-performing design, transparent operations, and search integrity — demystifying SEO and clean engineering so local companies operate with confidence."
          image="https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1600&auto=format&fit=crop"
          alt="Designers at work"
        />
      </section>

      {/* Stats */}
      <section className="bg-[var(--color-ink)] py-20 sm:py-28">
        <div className="edge max-w-[100rem] mx-auto grid grid-cols-1 sm:grid-cols-3 gap-12 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-white/12">
          {STATS.map((s, i) => (
            <Reveal key={i} variant="up" index={i} className="flex flex-col items-center text-center px-4 pt-8 sm:pt-0">
              <div className="font-display italic text-6xl sm:text-7xl text-white leading-none">
                <Counter value={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-4 text-sm text-white/55 font-medium">{s.label}</div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="edge max-w-[100rem] mx-auto py-28 sm:py-40">
        <SectionHeader
          label="(03) — Principles"
          titleLines={['What guides', <span key="i" className="serif-italic font-normal">the work.</span>]}
          subtitle="The ideals behind every design decision, line of code, and optimization we ship."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--color-border)] border border-[var(--color-border)] rounded-[1.5rem] overflow-hidden">
          {VALUES.map((v, i) => {
            const Icon = v.icon;
            return (
              <Reveal key={i} variant="fade" index={i % 3} className="bg-[var(--color-bg-primary)] p-8 sm:p-10 group">
                <Icon size={26} strokeWidth={1.5} className="text-[var(--color-ink)] transition-transform duration-500 group-hover:-translate-y-1" />
                <h3 className="mt-8 text-xl font-medium text-[var(--color-ink)]">{v.title}</h3>
                <p className="mt-3 text-[var(--color-body)] leading-relaxed">{v.desc}</p>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Differentiators */}
      <section className="bg-[var(--color-bg-secondary)] py-28 sm:py-40">
        <div className="edge max-w-[100rem] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <SectionHeader
              label="(04) — Why Zenith"
              titleLines={['The difference', <span key="i" className="serif-italic font-normal">is in the detail.</span>]}
            />
          </div>
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-6 self-center">
            {DIFFERENTIATORS.map((item, i) => (
              <Reveal key={i} variant="up" index={i % 2} className="flex items-start gap-4 border-t border-[var(--color-border-strong)] pt-5">
                <Check size={18} className="text-[var(--color-ink)] mt-1 shrink-0" />
                <span className="text-[var(--color-ink)] text-lg leading-snug">{item}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Ready to work together?"
        titleLines={['Let’s make', <span key="i" className="serif-italic font-normal">something great.</span>]}
        lede="Tell us about your brand and goals — we'll map the path from idea to launch."
      />
    </motion.div>
  );
}
