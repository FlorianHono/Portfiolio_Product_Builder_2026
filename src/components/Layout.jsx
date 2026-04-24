import { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';

function Layout() {
  const location = useLocation();
  const currentPath = location.pathname;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { path: '/', label: 'Accueil' },
    { path: '/services', label: 'Services' },
    { path: '/projets', label: 'Projets' },
    { path: '/stack', label: 'Stack' },
    { path: '/methode', label: 'Méthode' },
    { path: '/a-propos', label: 'À Propos' },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <header className="fixed top-0 z-[100] w-full bg-surface/90 backdrop-blur-md border-b-[0.5px] border-outline-variant/30 flex justify-between items-center px-6 md:px-12 py-6">
        <Link to="/" className="text-xl font-black tracking-[0.2em] text-on-surface font-inter uppercase">
          FLORIAN HONORÉ
        </Link>
        
        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.path}
              to={link.path}
              className={`relative group cursor-pointer font-space text-sm tracking-[0.2em] uppercase transition-all duration-150 ${
                currentPath === link.path 
                  ? 'font-bold text-primary' 
                  : 'text-on-surface opacity-50 hover:opacity-100'
              }`}
            >
              {link.label}
              {currentPath === link.path && (
                <div className="absolute -bottom-2 left-0 w-full h-[1px] bg-primary"></div>
              )}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link to="/contact" className="hidden sm:block bg-primary-container text-white px-6 py-2 font-space font-bold uppercase text-xs tracking-widest hover:brightness-110 transition-all duration-150">
            Contact
          </Link>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={toggleMenu}
            className="lg:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5 focus:outline-none z-[110]"
            aria-label="Menu"
          >
            <span className={`w-full h-0.5 bg-on-surface transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-full h-0.5 bg-on-surface transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-full h-0.5 bg-on-surface transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-[90] bg-surface transition-all duration-500 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full justify-center px-12 gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.path}
              to={link.path}
              onClick={() => setIsMenuOpen(false)}
              className={`font-inter font-black text-4xl uppercase tracking-tighter transition-all ${
                currentPath === link.path ? 'text-primary' : 'text-on-surface'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link 
            to="/contact" 
            onClick={() => setIsMenuOpen(false)}
            className="mt-8 font-space font-bold text-lg uppercase tracking-widest text-primary flex items-center gap-4"
          >
            Lancer un projet <span className="text-2xl">→</span>
          </Link>
        </div>
        
        {/* Decorative architectural element in menu */}
        <div className="absolute bottom-12 left-12 font-space text-[10px] tracking-[0.4em] text-outline-variant uppercase">
          Florian Honoré / Product Builder
        </div>
      </div>

      <main className="ml-0 pt-[80px]">
        <Outlet />
      </main>

      <footer className="bg-surface border-t border-outline-variant/30 flex flex-col md:flex-row justify-between items-center px-6 md:px-12 py-12 w-full gap-8">
        <div className="font-space text-[10px] tracking-[0.2em] uppercase text-on-surface-variant text-center md:text-left">
            © 2026 FLORIAN HONORÉ. TOUS DROITS RÉSERVÉS.
        </div>
        <div className="flex flex-wrap justify-center gap-8">
            <a className="font-space text-[10px] tracking-[0.2em] uppercase text-on-surface-variant hover:text-primary transition-all duration-100" href="https://www.linkedin.com/in/florian-honoré-dwwm/" target="_blank" rel="noopener noreferrer">LINKEDIN</a>
            <Link className="font-space text-[10px] tracking-[0.2em] uppercase text-on-surface-variant hover:text-primary transition-all duration-100" to="/mentions-legales">MENTIONS LÉGALES</Link>
        </div>
      </footer>
    </>
  );
}

export default Layout;

