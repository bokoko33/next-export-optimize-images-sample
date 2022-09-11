import { useState, useLayoutEffect } from 'react';
import { MQ_MAX } from '~/lib/constants';

export const useDevice = () => {
  const [isMobile, setIsMobile] = useState(false);

  useLayoutEffect(() => {
    const updateIsMobile = (e) => {
      setIsMobile(e.matches);
    };

    const mql = window.matchMedia(MQ_MAX);
    mql.addEventListener('change', updateIsMobile);
    updateIsMobile(mql);

    return () => window.removeEventListener('resize', updateIsMobile);
  }, []);

  return { isMobile };
};
