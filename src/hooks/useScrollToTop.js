import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function useScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Lenis owns the scroll position when active; fall back to native.
    if (window.__lenis) {
      window.__lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
    // Layout changed with the new route — recalc scroll-driven triggers.
    requestAnimationFrame(() => ScrollTrigger.refresh());
  }, [pathname]);

  return null;
}
