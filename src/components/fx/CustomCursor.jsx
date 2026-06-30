import { useEffect, useRef } from 'react';

/**
 * Bespoke two-part cursor: an instant dot (blend-difference) and a lagged
 * ring that morphs on hover. Interactive elements opt in via:
 *   data-cursor="hover"  → ring expands
 *   data-cursor="view"   → ring fills + shows a label (data-cursor-label)
 * Disabled on touch / coarse-pointer devices.
 */
export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const labelRef = useRef(null);

  useEffect(() => {
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (!fine) return;

    const body = document.body;
    body.classList.add('has-custom-cursor');

    const dot = dotRef.current;
    const ring = ringRef.current;
    const label = labelRef.current;

    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let dx = mx, dy = my, rx = mx, ry = my;
    let visible = false;
    let rafId;

    const onMove = (e) => {
      mx = e.clientX;
      my = e.clientY;
      if (!visible) { visible = true; body.classList.remove('cursor--hidden'); }
    };
    const onLeaveWindow = () => { body.classList.add('cursor--hidden'); visible = false; };

    const render = () => {
      dx += (mx - dx) * 0.85;
      dy += (my - dy) * 0.85;
      rx += (mx - rx) * 0.16;
      ry += (my - ry) * 0.16;
      dot.style.transform = `translate3d(${dx}px, ${dy}px, 0) translate(-50%, -50%)`;
      ring.style.transform = `translate3d(${rx}px, ${ry}px, 0) translate(-50%, -50%)`;
      rafId = requestAnimationFrame(render);
    };
    rafId = requestAnimationFrame(render);

    const onOver = (e) => {
      const el = e.target.closest?.('[data-cursor], a, button, input, textarea, [role="button"]');
      body.classList.remove('cursor--hover', 'cursor--view');
      if (!el) return;
      const type = el.getAttribute && el.getAttribute('data-cursor');
      if (type === 'view') {
        body.classList.add('cursor--view');
        label.textContent = el.getAttribute('data-cursor-label') || 'View';
      } else {
        body.classList.add('cursor--hover');
      }
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    window.addEventListener('mouseover', onOver, { passive: true });
    document.addEventListener('mouseleave', onLeaveWindow);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseover', onOver);
      document.removeEventListener('mouseleave', onLeaveWindow);
      body.classList.remove('has-custom-cursor', 'cursor--hover', 'cursor--view', 'cursor--hidden');
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring" aria-hidden="true">
        <span ref={labelRef} className="cursor-ring__label" />
      </div>
    </>
  );
}
