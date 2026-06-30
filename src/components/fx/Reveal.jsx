import { motion } from 'framer-motion';

const EASE = [0.16, 1, 0.3, 1];

const variants = {
  up: { hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0 } },
  blur: { hidden: { opacity: 0, y: 24, filter: 'blur(12px)' }, show: { opacity: 1, y: 0, filter: 'blur(0px)' } },
  scale: { hidden: { opacity: 0, scale: 0.94 }, show: { opacity: 1, scale: 1 } },
  fade: { hidden: { opacity: 0 }, show: { opacity: 1 } },
};

/**
 * Reveal-on-scroll wrapper. `variant`: up | blur | scale | fade.
 * Composes cleanly inside staggered parents via `index`.
 */
export default function Reveal({
  children,
  as: Tag = 'div',
  variant = 'up',
  delay = 0,
  duration = 0.9,
  index = 0,
  amount = 0.3,
  className = '',
  once = true,
}) {
  const MotionTag = motion[Tag] || motion.div;
  return (
    <MotionTag
      className={className}
      variants={variants[variant]}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
      transition={{ duration, ease: EASE, delay: delay + index * 0.08 }}
    >
      {children}
    </MotionTag>
  );
}
