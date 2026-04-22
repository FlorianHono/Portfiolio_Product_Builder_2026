import { Outlet, Link, useLocation } from 'react-router-dom';

function Layout() {
  const location = useLocation();
  const currentPath = location.pathname;

  const navLinks = [
    { path: '/', label: 'Accueil' },
    { path: '/services', label: 'Services' },
    { path: '/projets', label: 'Projets' },
    { path: '/stack', label: 'Stack' },
    { path: '/methode', label: 'Méthode' },
    { path: '/a-propos', label: 'À Propos' },
  ];

  return (
    <>
      <header className="fixed top-0 z-50 w-full bg-surface/90 backdrop-blur-md border-b-[0.5px] border-outline-variant/30 flex justify-between items-center px-6 md:px-12 py-6">
        <div className="text-xl font-black tracking-[0.2em] text-on-surface font-inter uppercase">
          FLORIAN HONORÉ
        </div>
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
        <Link to="/contact" className="bg-primary-container text-white px-6 py-2 font-space font-bold uppercase text-xs tracking-widest hover:brightness-110 transition-all duration-150">
          Contact
        </Link>
      </header>

      <main className="ml-0 pt-[80px]">
        <Outlet />
      </main>

      <footer className="bg-surface border-t border-outline-variant/30 flex flex-col md:flex-row justify-between items-center px-6 md:px-12 py-12 w-full gap-4">
        <div className="font-space text-[10px] tracking-[0.2em] uppercase text-on-surface-variant text-center md:text-left">
            © 2026 FLORIAN HONORÉ. TOUS DROITS RÉSERVÉS.
        </div>
        <div className="flex gap-8">
            <a className="font-space text-[10px] tracking-[0.2em] uppercase text-on-surface-variant hover:text-primary transition-all duration-100" href="https://www.linkedin.com/in/florian-honoré-dwwm/" target="_blank" rel="noopener noreferrer">LINKEDIN</a>
            <Link className="font-space text-[10px] tracking-[0.2em] uppercase text-on-surface-variant hover:text-primary transition-all duration-100" to="/mentions-legales">MENTIONS LÉGALES</Link>
        </div>
      </footer>
    </>
  );
}

export default Layout;
