import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { Scrollbar } from 'smooth-scrollbar-react';

export default function SmoothScroll({ children, setOffsetY }) {
  const { pathname } = useLocation();
  const ref = useRef(null);
  
  useEffect(() => {
    if (ref.current) {
      ref.current.scrollTo(0,0);
    }
  }, [pathname]);
  
  useEffect(()=>{
    const { scrollbar } = ref.current;
    
    // doesn't work = =
    if (scrollbar) {
      const scrollHandler = () => {
        setOffsetY(scrollbar.scrollTop);
        console.log(123)
      }
      scrollbar.addListener(scrollHandler);
      return () => scrollbar.removeListener(scrollHandler);
    }
  },[])

  // return null
  return (
    <Scrollbar ref={ref}>
      {children}
    </Scrollbar>
  );
}