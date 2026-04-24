import { useState, useEffect } from 'react';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAboveFooter, setIsAboveFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Visibility toggle
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      // Footer detection
      const footer = document.getElementById('main-footer');
      if (footer) {
        const footerRect = footer.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        // If the top of the footer is within the viewport
        if (footerRect.top < windowHeight) {
          setIsAboveFooter(true);
        } else {
          setIsAboveFooter(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed right-8 z-[150] w-12 h-12 flex items-center justify-center bg-surface text-on-surface border border-outline-variant/50 rounded-full shadow-2xl transition-all duration-500 transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
      } ${
        isAboveFooter ? 'bottom-[120px]' : 'bottom-8'
      } hover:bg-primary hover:text-white hover:border-primary hover:-translate-y-2 group`}
      aria-label="Retour en haut"
    >
      <span className="material-symbols-outlined transition-transform duration-300 group-hover:-translate-y-1">
        north
      </span>
      {/* Subtle architectural accent */}
      <div className="absolute inset-0 border border-primary/20 rounded-full scale-110 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
    </button>
  );
};

export default BackToTop;
