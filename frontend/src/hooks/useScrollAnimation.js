import { useEffect } from 'react';

/**
 * Custom hook that triggers scroll-triggered animations using IntersectionObserver.
 * Add class 'scroll-animate', 'scroll-animate-left', 'scroll-animate-right',
 * or 'scroll-animate-scale' to any element to animate it on scroll.
 */
const useScrollAnimation = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = document.querySelectorAll(
      '.scroll-animate, .scroll-animate-left, .scroll-animate-right, .scroll-animate-scale'
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
};

export default useScrollAnimation;
