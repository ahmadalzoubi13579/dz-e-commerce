import { useState, useEffect } from 'react';
import { SCREEN_BREAKPOINT } from '../types';

const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState<SCREEN_BREAKPOINT>(SCREEN_BREAKPOINT.XS);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < SCREEN_BREAKPOINT.SM) {
        setScreenSize(SCREEN_BREAKPOINT.XS);
      } else if (window.innerWidth >= SCREEN_BREAKPOINT.SM && window.innerWidth < SCREEN_BREAKPOINT.MD) {
        setScreenSize(SCREEN_BREAKPOINT.SM);
      } else if (window.innerWidth >= SCREEN_BREAKPOINT.MD && window.innerWidth < SCREEN_BREAKPOINT.LG) {
        setScreenSize(SCREEN_BREAKPOINT.MD);
      } else if (window.innerWidth >= SCREEN_BREAKPOINT.LG && window.innerWidth < SCREEN_BREAKPOINT.XL) {
        setScreenSize(SCREEN_BREAKPOINT.LG);
      } else if (window.innerWidth >= SCREEN_BREAKPOINT.XL && window.innerWidth < SCREEN_BREAKPOINT.DXL) {
        setScreenSize(SCREEN_BREAKPOINT.XL);
      } else if (window.innerWidth >= SCREEN_BREAKPOINT.DXL) {
        setScreenSize(SCREEN_BREAKPOINT.DXL);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return { screenSize };
};

export { useScreenSize };
