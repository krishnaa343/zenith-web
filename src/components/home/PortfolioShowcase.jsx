import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { PORTFOLIO_PROJECTS } from '../../utils/constants';
import { projectImage } from '../../utils/projectImages';
import Reveal from '../fx/Reveal';
import MaskReveal from '../fx/MaskReveal';

const imageMask = { hidden: { y: '102%' }, show: { y: 0 } };

function ProjectCard({ project, image, offset }) {
  return (
    <Link
      to={`/portfolio/${project.id}`}
      data-cursor="view"
      data-cursor-label="View"
      className={`group block ${offset ? 'lg:mt-32' : ''}`}
    >
      {/* Mask reveal — image wipes up into the frame. The whileInView trigger
          sits on the (un-clipped) outer wrapper and propagates to the child;
          triggering on the translated child would deadlock against the
          overflow-hidden clip (IO would see a zero intersection rect). */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="overflow-hidden rounded-[1.75rem] aspect-[4/5] sm:aspect-[5/6]"
      >
        <motion.div
          variants={imageMask}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="w-full h-full will-reveal"
        >
          <img
            src={image}
            alt={`${project.industry} project`}
            className="w-full h-full object-cover transition-transform duration-[1.1s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]"
          />
        </motion.div>
      </motion.div>

      <div className="flex items-start justify-between gap-4 mt-6">
        <div>
          <h3 className="text-2xl sm:text-3xl font-medium tracking-tight text-[var(--color-ink)]">
            {project.industry}
          </h3>
          <p className="mt-2 text-sm text-[var(--color-muted)]">
            {project.tech.join(' · ')}
          </p>
        </div>
        <span className="mt-1 w-11 h-11 rounded-full border border-[var(--color-border-strong)] flex items-center justify-center text-[var(--color-ink)] transition-all duration-500 group-hover:bg-[var(--color-ink)] group-hover:text-[var(--color-bg-primary)] group-hover:rotate-45 shrink-0">
          <ArrowUpRight size={18} />
        </span>
      </div>
    </Link>
  );
}

export default function PortfolioShowcase() {
  const projects = PORTFOLIO_PROJECTS.slice(0, 4);

  return (
    <section className="bg-[var(--color-bg-primary)] py-28 sm:py-40 overflow-hidden">
      <div className="edge max-w-[100rem] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16 sm:mb-24">
          <div>
            <Reveal variant="fade"><span className="overline">(03) — Selected work</span></Reveal>
            <h2 className="mt-6 text-[clamp(2.5rem,7vw,6.5rem)] leading-[0.92] tracking-[-0.045em] text-[var(--color-ink)] font-medium">
              <MaskReveal>Selected</MaskReveal>
              <MaskReveal delay={0.08}><span className="serif-italic font-normal">case studies.</span></MaskReveal>
            </h2>
          </div>
          <Reveal variant="up" delay={0.1}>
            <Link to="/portfolio" data-cursor="hover" className="link-underline text-[var(--color-ink)] font-medium">
              View all work <ArrowUpRight size={18} />
            </Link>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} image={projectImage(p.id)} offset={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
