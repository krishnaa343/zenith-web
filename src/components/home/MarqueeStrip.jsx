import React from 'react';
import Marquee from '../fx/Marquee';

const WORDS = ['Web Design', 'Development', 'Local SEO', 'Branding', 'Strategy', 'Growth'];

function Item({ label }) {
  return (
    <span className="inline-flex items-center">
      <span className="display-hero text-[clamp(2.5rem,7vw,6rem)] text-[var(--color-ink)] px-8 whitespace-nowrap">
        {label}
      </span>
      <span className="serif-italic text-[clamp(1.5rem,3vw,3rem)] text-[var(--color-muted)]">✳</span>
    </span>
  );
}

export default function MarqueeStrip() {
  return (
    <section className="bg-[var(--color-bg-primary)] border-y border-[var(--color-border)] py-10 sm:py-14 overflow-hidden">
      <Marquee duration={38}>
        {WORDS.map((w, i) => (
          <Item key={i} label={w} />
        ))}
      </Marquee>
    </section>
  );
}
