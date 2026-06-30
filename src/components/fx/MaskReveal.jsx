import { motion } from 'framer-motion';

const EASE = [0.16, 1, 0.3, 1];
const lineVariant = { hidden: { y: '115%' }, show: { y: 0 } };

/**
 * Masked line reveal — a line of text clipped by an overflow-hidden wrapper
 * that rises into place on scroll.
 *
 * The whileInView trigger lives on the OUTER wrapper (which is never
 * translated) and propagates the variant down to the inner span. This is
 * deliberate: IntersectionObserver measures visibility through ancestor
 * clipping, so if we triggered on the inner span — which starts translated
 * fully outside the overflow-hidden wrapper — its intersection rect would be
 * zero and the reveal would never fire.
 */
export default function MaskReveal({ children, delay = 0, duration = 1, amount = 0.4, className = '' }) {
  return (
    <motion.span
      className="reveal-mask"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount }}
    >
      <motion.span
        variants={lineVariant}
        transition={{ duration, ease: EASE, delay }}
        className={`inline-block ${className}`}
      >
        {children}
      </motion.span>
    </motion.span>
  );
}
