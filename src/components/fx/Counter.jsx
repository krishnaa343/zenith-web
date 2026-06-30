import { useEffect, useRef, useState } from 'react';
import { useInView, animate } from 'framer-motion';

/**
 * Counts from 0 → `value` when scrolled into view. `prefix`/`suffix` frame the
 * number; `decimals` controls precision. If `display` is given it's shown as-is.
 */
export default function Counter({ value, prefix = '', suffix = '', decimals = 0, display, className = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const [text, setText] = useState(display ?? `${prefix}0${suffix}`);

  useEffect(() => {
    if (!inView || value == null) return;
    const controls = animate(0, value, {
      duration: 1.8,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setText(`${prefix}${v.toFixed(decimals)}${suffix}`),
    });
    return () => controls.stop();
  }, [inView, value, prefix, suffix, decimals]);

  return <span ref={ref} className={`tabular-nums ${className}`}>{display ?? text}</span>;
}
