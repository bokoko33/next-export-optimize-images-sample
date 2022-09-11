import { useEffect } from 'react';
import { mediaQueryListSafe } from '~/lib/mediaQuery';
import { defineViewportUnits } from '~/lib/viewportUnits';

if (typeof window !== 'undefined') {
  // Register gsap plugin
  // gsap.registerPlugin(ScrollTrigger);
}

export const useMyApp = () => {
  useEffect(() => {
    // Enable to use mediaQueryList.addEventListener() in all browsers
    mediaQueryListSafe();

    // Re-calcurate 1vh for menu in iOS Safari
    window.addEventListener('resize', defineViewportUnits);
    // Make sure that defineViewportUnits runs after new viewport has been applied
    const timeoutId = setTimeout(defineViewportUnits);

    return () => {
      window.removeEventListener('resize', defineViewportUnits);
      clearTimeout(timeoutId);
    };
    // Because this effect should run only one time
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
