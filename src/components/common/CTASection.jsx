import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import Magnetic from '../fx/Magnetic';
import Reveal from '../fx/Reveal';
import MaskReveal from '../fx/MaskReveal';

/**
 * Shared dark closing CTA used at the foot of every sub-page.
 * `titleLines` renders as masked rising lines; the second line is typically italic.
 */
export default function CTASection({
  eyebrow = 'Have a project in mind?',
  titleLines = ['Let’s build', <span key="i" className="serif-italic font-normal">something exceptional.</span>],
  lede,
  ctaLabel = 'Start a project',
  ctaTo = '/contact',
}) {
  return (
    <section className="relative bg-[var(--color-ink)] text-white overflow-hidden">
      <div className="relative z-10 edge max-w-[100rem] mx-auto py-28 sm:py-40 flex flex-col items-center text-center">
        <Reveal variant="fade">
          <span className="overline !text-white/45">{eyebrow}</span>
        </Reveal>

        <h2 className="mt-8 text-[clamp(2.25rem,7.5vw,7rem)] leading-[0.92] tracking-[-0.045em] font-medium">
          {titleLines.map((line, i) => (
            <MaskReveal key={i} delay={i * 0.08}>{line}</MaskReveal>
          ))}
        </h2>

        {lede && (
          <Reveal variant="up" delay={0.15} className="mt-8 max-w-xl">
            <p className="text-lg text-white/65 leading-relaxed">{lede}</p>
          </Reveal>
        )}

        <Reveal variant="up" delay={0.25} className="mt-12">
          <Magnetic strength={0.5} className="rounded-full">
            <Link
              to={ctaTo}
              data-cursor="hover"
              className="group inline-flex items-center gap-4 bg-white text-[var(--color-ink)] rounded-full pl-9 pr-3 py-3 text-lg font-medium transition-colors duration-500 hover:bg-transparent hover:text-white border border-white"
            >
              {ctaLabel}
              <span className="w-12 h-12 rounded-full bg-[var(--color-ink)] text-white flex items-center justify-center transition-all duration-500 group-hover:bg-white group-hover:text-[var(--color-ink)] group-hover:rotate-45">
                <ArrowUpRight size={20} />
              </span>
            </Link>
          </Magnetic>
        </Reveal>
      </div>
    </section>
  );
}
