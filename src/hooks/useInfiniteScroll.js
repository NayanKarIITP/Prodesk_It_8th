import { useEffect } from 'react';

/**
 * @param {Function} callback - Function to run when target is visible (fetch next page)
 * @param {Object} targetRef - React ref attached to a div at the bottom of your list
 */
export const useInfiniteScroll = (callback, targetRef) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // If the loader div enters the viewport, trigger the callback
        if (entry.isIntersecting) {
          callback();
        }
      },
      { threshold: 1.0 } // Trigger only when 100% of the target is visible
    );

    const currentTarget = targetRef.current;
    if (currentTarget) {
      observer.observe(currentTarget);
    }

    return () => {
      if (currentTarget) {
        observer.unobserve(currentTarget);
      }
    };
  }, [callback, targetRef]);
};