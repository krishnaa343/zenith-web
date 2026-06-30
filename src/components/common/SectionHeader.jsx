import React from 'react';
import Reveal from '../fx/Reveal';
import MaskReveal from '../fx/MaskReveal';

/**
 * Monochrome editorial section intro. `title` may be a string or node(s).
 * Pass an array to `titleLines` for masked multi-line reveals.
 */
export default function SectionHeader({ label, title, titleLines, subtitle, align = 'left', dark = false }) {
  const alignClass = align === 'center' ? 'text-center mx-auto items-center' : 'text-left';
  const inkClass = dark ? 'text-white' : 'text-[var(--color-ink)]';
  const subClass = dark ? 'text-white/60' : 'text-[var(--color-body)]';

  return (
    <div className={`flex flex-col max-w-3xl mb-14 sm:mb-20 ${alignClass}`}>
      {label && (
        <Reveal variant="fade">
          <span className={`overline ${dark ? '!text-white/45' : ''}`}>{label}</span>
        </Reveal>
      )}
      <h2 className={`mt-6 text-[clamp(2rem,5vw,4.5rem)] leading-[0.98] tracking-[-0.04em] font-medium ${inkClass}`}>
        {titleLines
          ? titleLines.map((l, i) => <MaskReveal key={i} delay={i * 0.08}>{l}</MaskReveal>)
          : title}
      </h2>
      {subtitle && (
        <Reveal variant="up" delay={0.15}>
          <p className={`mt-6 text-lg leading-relaxed ${subClass} ${align === 'center' ? 'max-w-2xl mx-auto' : 'max-w-xl'}`}>
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  );
}
