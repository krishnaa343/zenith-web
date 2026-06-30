import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import SEOHead from '../components/common/SEOHead';
import PageHero from '../components/common/PageHero';
import CTASection from '../components/common/CTASection';
import Reveal from '../components/fx/Reveal';
import { PORTFOLIO_CATEGORIES, PORTFOLIO_PROJECTS } from '../utils/constants';
import { projectImage } from '../utils/projectImages';
import { pageTransition } from '../utils/animations';

const imageMask = { hidden: { y: '102%' }, show: { y: 0 } };

function ProjectCard({ project }) {
  return (
    <Link
      to={`/portfolio/${project.id}`}
      data-cursor="view"
      data-cursor-label="View"
      className="group block"
    >
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="overflow-hidden rounded-[1.5rem] aspect-[4/5]"
      >
        <motion.div variants={imageMask} transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }} className="w-full h-full will-reveal">
          <img
            src={projectImage(project.id)}
            alt={`${project.industry} project`}
            className="w-full h-full object-cover transition-transform duration-[1.1s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]"
          />
        </motion.div>
      </motion.div>
      <div className="flex items-start justify-between gap-4 mt-5">
        <div>
          <h3 className="text-xl sm:text-2xl font-medium tracking-tight text-[var(--color-ink)]">{project.industry}</h3>
          <p className="mt-1.5 text-sm text-[var(--color-muted)]">{project.tech.join(' · ')}</p>
        </div>
        <span className="mt-1 w-10 h-10 rounded-full border border-[var(--color-border-strong)] flex items-center justify-center text-[var(--color-ink)] transition-all duration-500 group-hover:bg-[var(--color-ink)] group-hover:text-[var(--color-bg-primary)] group-hover:rotate-45 shrink-0">
          <ArrowUpRight size={16} />
        </span>
      </div>
    </Link>
  );
}

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');
  const filtered = activeCategory === 'All'
    ? PORTFOLIO_PROJECTS
    : PORTFOLIO_PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <motion.div initial="initial" animate="animate" exit="exit" variants={pageTransition} className="bg-[var(--color-bg-primary)]">
      <SEOHead
        title="Work — Selected Case Studies"
        description="A curated selection of custom website concepts across plumbing, roofing, dental, law, hospitality, and more."
      />

      <PageHero
        eyebrow="(Selected work)"
        titleLines={['Case', <span key="i" className="serif-italic font-normal">studies.</span>]}
        lede="Custom concepts engineered to demonstrate range — across industries, layouts, and search strategies."
      />

      {/* Filters */}
      <section className="edge max-w-[100rem] mx-auto pb-10">
        <Reveal variant="fade">
          <div className="flex flex-wrap gap-2.5 border-t border-[var(--color-border)] pt-8">
            {PORTFOLIO_CATEGORIES.map((cat) => {
              const active = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  data-cursor="hover"
                  className={`px-5 py-2.5 text-sm font-medium rounded-full border transition-all duration-400 ${
                    active
                      ? 'bg-[var(--color-ink)] text-[var(--color-bg-primary)] border-[var(--color-ink)]'
                      : 'border-[var(--color-border-strong)] text-[var(--color-ink)] hover:bg-[var(--color-bg-secondary)]'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </Reveal>
      </section>

      {/* Grid */}
      <section className="edge max-w-[100rem] mx-auto pb-28 sm:pb-40">
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-14">
          {filtered.map((project) => (
            <motion.div layout key={project.id}>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>

        <Reveal variant="fade" className="mt-20">
          <p className="max-w-2xl text-sm text-[var(--color-muted)] leading-relaxed border-t border-[var(--color-border)] pt-6">
            Note — these case studies are concept builds crafted by our team to showcase custom layouts, local search schema, and responsive engineering. Live client work is hosted on private staging.
          </p>
        </Reveal>
      </section>

      <CTASection
        eyebrow="Have a project in mind?"
        titleLines={['Let’s build', <span key="i" className="serif-italic font-normal">yours next.</span>]}
        lede="A custom layout tailored to your brand and your leads — designed and coded from scratch."
      />
    </motion.div>
  );
}
