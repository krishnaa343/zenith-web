import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Reveal from '../fx/Reveal';
import MaskReveal from '../fx/MaskReveal';

/**
 * Editorial page header shared across all sub-pages.
 * `titleLines` is an array of nodes — each rendered as a masked rising line.
 */
export default function PageHero({ eyebrow, titleLines = [], lede, back, size = 'lg' }) {
  const titleClass =
    size === 'sm'
      ? 'text-[clamp(2.25rem,7vw,5.5rem)]'
      : 'text-[clamp(2.5rem,8.5vw,8rem)]';

  return (
    <section className="relative edge max-w-[100rem] mx-auto pt-40 sm:pt-52 pb-16 sm:pb-24">
      {back && (
        <Reveal variant="fade" className="mb-8">
          <Link
            to={back.to}
            data-cursor="hover"
            className="inline-flex items-center gap-2 overline hover:text-[var(--color-ink)] transition-colors"
          >
            <ArrowLeft size={14} /> {back.label}
          </Link>
        </Reveal>
      )}

      <Reveal variant="fade">
        <span className="overline">{eyebrow}</span>
      </Reveal>

      <h1 className={`mt-7 display-hero ${titleClass} text-[var(--color-ink)]`}>
        {titleLines.map((line, i) => (
          <MaskReveal key={i} delay={i * 0.08}>{line}</MaskReveal>
        ))}
      </h1>

      {lede && (
        <Reveal variant="up" delay={0.25} className="mt-8 max-w-xl">
          <p className="text-lg sm:text-xl text-[var(--color-body)] leading-relaxed">{lede}</p>
        </Reveal>
      )}
    </section>
  );
}
