/**
 * Seamless infinite marquee. Renders the children twice so the -50% keyframe
 * loops without a seam. Pauses on hover. `reverse` flips direction.
 */
export default function Marquee({ children, duration = 32, reverse = false, className = '' }) {
  return (
    <div className={`marquee overflow-hidden ${className}`}>
      <div
        className="marquee-track flex w-max"
        style={{ '--marquee-duration': `${duration}s`, animationDirection: reverse ? 'reverse' : 'normal' }}
      >
        <div className="flex shrink-0 items-center">{children}</div>
        <div className="flex shrink-0 items-center" aria-hidden="true">{children}</div>
      </div>
    </div>
  );
}
