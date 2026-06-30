import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

gsap.registerPlugin(ScrollTrigger);

/**
 * Line-by-line masked text reveal (the classic editorial "rise" effect),
 * powered by SplitType + GSAP ScrollTrigger. Lines are clipped and the words
 * within rise into place with an expo stagger. Waits for fonts so line breaks
 * are measured correctly, and re-splits on resize.
 */
export default function RevealText({
  as: Tag = 'span',
  children,
  className = '',
  delay = 0,
  stagger = 0.06,
  start = 'top 88%',
  duration = 1.1,
}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return;

    let split;
    let st;
    let resizeTimer;

    const build = () => {
      if (split) split.revert();
      if (st) st.kill();
      split = new SplitType(el, { types: 'lines,words', lineClass: 'rt-line' });
      el.querySelectorAll('.rt-line').forEach((l) => {
        l.style.overflow = 'hidden';
        l.style.paddingBottom = '0.06em';
      });
      gsap.set(split.words, { yPercent: 118 });
      st = ScrollTrigger.create({
        trigger: el,
        start,
        once: true,
        onEnter: () => {
          gsap.to(split.words, {
            yPercent: 0,
            duration,
            ease: 'expo.out',
            stagger,
            delay,
          });
        },
      });
    };

    const onResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        if (split) split.revert();
        if (st) st.kill();
        // After a resize we keep text visible (no second animation).
        split = new SplitType(el, { types: 'lines', lineClass: 'rt-line' });
      }, 250);
    };

    const ctx = gsap.context(() => {});
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(() => {
        build();
        ScrollTrigger.refresh();
      });
    } else {
      build();
    }

    window.addEventListener('resize', onResize);

    return () => {
      clearTimeout(resizeTimer);
      window.removeEventListener('resize', onResize);
      if (st) st.kill();
      if (split) split.revert();
      ctx.revert();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}
