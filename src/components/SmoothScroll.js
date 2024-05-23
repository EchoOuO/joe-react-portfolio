import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { Scrollbar } from 'smooth-scrollbar-react';

export default function SmoothScroll({ children }) {
  const { pathname } = useLocation();
  const ref = useRef(null);

  useEffect(() => {
    ref.current.scrollTo(0,0);
  }, [pathname]);

  // return null
  return (
    <Scrollbar ref={ref}>
      {children}
    </Scrollbar>
  );
}