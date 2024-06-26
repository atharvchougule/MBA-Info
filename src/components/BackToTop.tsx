
import  { useState, useEffect } from 'react';
import './BackToTop.css'; 

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 20) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div
      className={`back-to-top ${isVisible ? 'show' : ''}`}
      onClick={scrollToTop}
    >
      <span>&uarr;</span>
    </div>
  );
};

export default BackToTop;
