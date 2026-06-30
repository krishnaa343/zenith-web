import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import SEOHead from '../components/common/SEOHead';
import CTASection from '../components/common/CTASection';
import Reveal from '../components/fx/Reveal';
import MaskReveal from '../components/fx/MaskReveal';
import { PORTFOLIO_PROJECTS } from '../utils/constants';
import { projectImage } from '../utils/projectImages';
import { pageTransition } from '../utils/animations';

const imageMask = { hidden: { y: '101%' }, show: { y: 0 } };

export default function ProjectDetail() {
  const { id } = useParams();
  const project = PORTFOLIO_PROJECTS.find((p) => p.id === parseInt(id, 10));

  if (!project) {
    return (
      <div className="min-h-screen bg-[var(--color-bg-primary)] flex flex-col items-center justify-center px-6 text-center">
        <h1 className="text-4xl font-medium text-[var(--color-ink)] mb-4">Case study not found</h1>
        <p className="text-[var(--color-body)] mb-8">The project you’re looking for doesn’t exist.</p>
        <Link to="/portfolio" className="btn-primary"><ArrowLeft size={16} /> Back to work</Link>
      </div>
    );
  }

  const blocks = [
    { n: '01', label: 'The challenge', body: project.challenge },
    { n: '02', label: 'The solution', body: project.solution },
    { n: '03', label: 'The outcome', body: project.outcome },
  ];

  return (
    <motion.div initial="initial" animate="animate" exit="exit" variants={pageTransition} className="bg-[var(--color-bg-primary)]">
      <SEOHead
        title={`${project.industry} — Case Study`}
        description={`Design and engineering case study for our custom ${project.industry} project concept.`}
      />

      {/* Header */}
      <section className="edge max-w-[100rem] mx-auto pt-40 sm:pt-52 pb-12 sm:pb-16">
        <Reveal variant="fade" className="mb-8">
          <Link to="/portfolio" data-cursor="hover" className="inline-flex items-center gap-2 overline hover:text-[var(--color-ink)] transition-colors">
            <ArrowLeft size={14} /> All work
          </Link>
        </Reveal>
        <Reveal variant="fade"><span className="overline">{project.category}</span></Reveal>
        <h1 className="mt-7 display-hero text-[clamp(2.5rem,8vw,7rem)] text-[var(--color-ink)]">
          <MaskReveal>{project.industry}</MaskReveal>
          <MaskReveal delay={0.08}><span className="serif-italic font-normal">portal.</span></MaskReveal>
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-10">
          <Reveal variant="up" delay={0.15} className="lg:col-span-7">
            <p className="text-lg sm:text-xl text-[var(--color-body)] leading-relaxed">{project.overview}</p>
          </Reveal>
          <Reveal variant="up" delay={0.25} className="lg:col-span-4 lg:col-start-9">
            <h4 className="overline mb-4">Built with</h4>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t, i) => (
                <span key={i} className="badge-pill">{t}</span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Hero image */}
      <section className="edge max-w-[100rem] mx-auto pb-20 sm:pb-28">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="overflow-hidden rounded-[2rem] aspect-[16/10]">
          <motion.div variants={imageMask} transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }} className="w-full h-full will-reveal">
            <img src={projectImage(project.id)} alt={`${project.industry} project`} className="w-full h-full object-cover" />
          </motion.div>
        </motion.div>
      </section>

      {/* Case study blocks */}
      <section className="edge max-w-[100rem] mx-auto pb-28 sm:pb-40">
        <div className="border-t border-[var(--color-border)]">
          {blocks.map((b) => (
            <Reveal key={b.n} variant="up" amount={0.4} className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 py-12 sm:py-16 border-b border-[var(--color-border)]">
              <div className="lg:col-span-4 flex items-baseline gap-5">
                <span className="font-display italic text-3xl text-[var(--color-muted)]">{b.n}</span>
                <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-[var(--color-ink)]">{b.label}</h2>
              </div>
              <p className="lg:col-span-7 lg:col-start-6 text-lg text-[var(--color-body)] leading-relaxed">{b.body}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <CTASection
        eyebrow="Want one like this?"
        titleLines={['Start your', <span key="i" className="serif-italic font-normal">case study.</span>]}
        lede="Custom sitemaps, layouts, and localized SEO — designed around your business."
        ctaLabel="Start a project"
      />
    </motion.div>
  );
}
