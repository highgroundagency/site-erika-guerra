import { useEffect, useState } from 'react';

export function useScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };
    const onScroll = () => {
      if (raf) return;
      raf = window.requestAnimationFrame(() => {
        update();
        raf = 0;
      });
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (raf) window.cancelAnimationFrame(raf);
    };
  }, []);

  return progress;
}

/**
 * Returns a boolean that flips true once the user scrolls past `threshold` pixels.
 * Uses rAF + only updates state when the boolean actually changes — so the consumer
 * doesn't re-render on every scroll event.
 */
export function useScrolledPast(threshold = 60) {
  const [past, setPast] = useState(false);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      setPast((prev) => {
        const next = window.scrollY > threshold;
        return prev === next ? prev : next;
      });
    };
    const onScroll = () => {
      if (raf) return;
      raf = window.requestAnimationFrame(() => {
        update();
        raf = 0;
      });
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (raf) window.cancelAnimationFrame(raf);
    };
  }, [threshold]);

  return past;
}
