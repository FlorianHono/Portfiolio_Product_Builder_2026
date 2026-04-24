import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import CTABanner from '../components/CTABanner';
import profilePic from '../assets/florian.png';

const LogoYottascale = () => (
  <div className="flex items-center gap-3">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L2 22H22L12 2Z" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="2"/>
      <path d="M12 10L7 20H17L12 10Z" fill="currentColor"/>
    </svg>
    <span className="font-inter font-bold tracking-widest uppercase">Yottascale</span>
  </div>
);

const LogoEnclin = () => (
  <div className="flex items-center gap-3">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="2" width="20" height="20" rx="2" stroke="currentColor" strokeWidth="2"/>
      <circle cx="12" cy="12" r="4" fill="currentColor"/>
    </svg>
    <span className="font-inter font-bold tracking-widest uppercase">Enclin</span>
  </div>
);

const LogoCampus = () => (
  <div className="flex items-center gap-3">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 3L22 9L12 15L2 9L12 3Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
      <path d="M5 11L12 15.5L19 11" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
    </svg>
    <span className="font-inter font-bold tracking-widest uppercase">Campus Consulting</span>
  </div>
);

const LogoPada1 = () => (
  <div className="flex items-center gap-3">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 12H20M12 4V20" stroke="currentColor" strokeWidth="2"/>
      <path d="M12 4L20 12L12 20L4 12L12 4Z" stroke="currentColor" strokeWidth="2"/>
    </svg>
    <span className="font-inter font-bold tracking-widest uppercase">Pada1</span>
  </div>
);

const LogoPolites = () => (
  <div className="flex items-center gap-3">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
      <path d="M12 2C12 2 16 8 16 12C16 16 12 22 12 22C12 22 8 16 8 12C8 8 12 2 12 2Z" fill="currentColor"/>
    </svg>
    <span className="font-inter font-bold tracking-widest uppercase">Polites</span>
  </div>
);

const Marquee = () => {
  const logos = [LogoYottascale, LogoEnclin, LogoPada1, LogoPolites, LogoCampus];
  const repeatedLogos = [...logos, ...logos, ...logos, ...logos];

  return (
    <div className="overflow-hidden whitespace-nowrap relative w-full marquee-mask pt-2 pb-4">
      <div className="inline-flex w-max animate-scroll gap-16 md:gap-24 text-on-surface-variant/80 hover:text-on-surface-variant transition-colors duration-500">
        {repeatedLogos.map((Logo, idx) => (
          <div key={idx} className="flex-shrink-0 opacity-70 hover:opacity-100 transition-opacity">
            <Logo />
          </div>
        ))}
      </div>
    </div>
  );
};

export default function Accueil() {
  useEffect(() => {
    // Subtle parallax effect for hero background
    const handleMouseMove = (e) => {
      const img = document.querySelector('.parallax-bg');
      if (!img) return;
      const moveX = (e.clientX - window.innerWidth / 2) * 0.02;
      const moveY = (e.clientY - window.innerHeight / 2) * 0.02;
      img.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.1)`;
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      <SEO 
        title="Product Builder IA & No-Code" 
        description="Florian Honoré, Product Builder spécialisé en IA et No-Code. Je construis vos automatisations et interfaces en quelques semaines."
      />
      <section className="relative min-h-[calc(100vh-80px)] flex flex-col pt-12 md:pt-16 px-6 md:px-12 lg:px-24 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-[0.12] pointer-events-none overflow-hidden mix-blend-multiply">
          <img
            alt="Workflow automation diagram"
            className="parallax-bg w-[120%] h-[120%] -translate-x-[10%] -translate-y-[10%] object-cover scale-110"
            src="https://lh3.googleusercontent.com/aida/ADBb0ugY6OtPSFzDElhf0BvBRDp7EvIgUp7kE8JP24TPjZf9GXKTgGyLHjRtYPfifez5JVg_4yv0DX-tfXrHLstoPRHGa7Hl8X9zQMnbhmEpu0lpNv1T3IqU216jFyd4b15RqIKfQOhYjC41ruGPFBCeFZAmKpiMHG4ljV6rwDdxgOHRJQaF8rfLci8fCcX9Jt7rt-mVkAz4iu5m1pvcDIRe7_L2Kpgue0MWSMrqKqz2Wp7a7GOKc84OmsgPCA"
            loading="lazy"
          />
        </div>

        <div className="relative z-10 w-full max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 xl:col-span-8">
              <span className="font-space text-sm md:text-base tracking-[0.4em] uppercase text-primary mb-5 block font-bold reveal delay-1">
                Florian Honoré Portfolio
              </span>
              <h1 className="font-inter font-black text-huge tracking-[-0.04em] text-on-surface mb-7 drop-shadow-sm reveal delay-2">
                PRODUCT<br />
                <span className="inline-block relative">
                   BUILDER
                  <div className="absolute -right-4 md:-right-12 top-1/2 w-8 md:w-24 h-[1.5px] md:h-[4px] bg-primary"></div>
                </span>
              </h1>
              <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 mb-10">
                <span className="font-space text-lg md:text-2xl tracking-[0.2em] uppercase text-on-surface font-bold">Plus vite</span>
                <span className="hidden md:block w-2 h-2 bg-primary"></span>
                <span className="font-space text-lg md:text-2xl tracking-[0.2em] uppercase text-on-surface font-bold">Sans équipe tech lourde</span>
              </div>

              <div className="max-w-xl">
                <p className="font-space text-lg md:text-xl text-secondary leading-relaxed mb-8 font-light">
                  Je construis les systèmes que ton équipe n'a pas le temps de créer, automatisations, agents IA, ainsi que des interfaces. <span className="text-primary font-medium italic">Opérationnel en semaines.</span>
                </p>
                <div className="flex flex-col sm:flex-row gap-6 reveal delay-4">
                  <Link to="/projets" className="group relative inline-flex items-center justify-center bg-primary-container text-white px-8 py-3 font-space font-bold uppercase tracking-widest text-xs overflow-hidden">
                    <span className="relative z-10 transition-colors">Voir mes projets</span>
                    <div className="absolute inset-0 bg-[#d94a12] translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                  </Link>
                  <Link to="/contact" className="inline-flex items-center justify-center border-2 border-on-surface px-8 py-3 font-space font-bold uppercase tracking-widest text-xs hover:bg-on-surface hover:text-surface transition-all duration-300">
                    Démarrer un projet
                  </Link>
                </div>

                <div className="mt-10 pt-6 border-t border-outline-variant/30 overflow-hidden w-full max-w-[100vw]">
                  <p className="font-space text-xs text-outline uppercase tracking-[0.2em] mb-4">Ils ont gagné du temps :</p>
                  <div className="-mx-2">
                    <Marquee />
                  </div>
                </div>
              </div>
            </div>

            {/* Photo Section */}
            <div className="lg:col-span-5 xl:col-span-4 hidden lg:flex justify-end items-center relative pr-4 self-stretch">
              <div className="relative animate-hero-entry opacity-0 -translate-y-32" style={{ animationDelay: '0.4s' }}>
                <div className="relative border border-outline-variant/30 p-2">
                  <img 
                    src={profilePic}
                    alt="Florian Honoré"
                    className="w-[450px] h-[550px] object-cover object-[center_15%] filter grayscale contrast-[1.1] brightness-[1.05] mix-blend-multiply"
                    loading="lazy"
                  />
                  {/* Architectural accents */}
                  <div className="absolute -top-1 -right-1 w-8 h-8 border-t-2 border-r-2 border-primary"></div>
                  <div className="absolute -bottom-1 -left-1 w-8 h-8 border-b-2 border-l-2 border-primary"></div>
                  <div className="absolute top-full mt-4 right-0 font-space text-[10px] tracking-[0.3em] text-outline uppercase">
                    Ref. / Product Builder 2026
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-12 right-12 hidden md:block">
          <div className="flex items-center gap-4 rotate-90 origin-right translate-x-12 translate-y-24">
            <span className="w-12 h-[1px] bg-outline-variant"></span>
            <div className="font-space text-[10px] tracking-[0.3em] text-outline uppercase">
              SCROLL TO EXPLORE / 01
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-12 lg:px-24 py-20 border-t-[1px] border-outline-variant/30 bg-surface relative z-20">
        <div className="flex flex-col md:flex-row justify-between items-start mb-16 max-w-[1600px] mx-auto">
          <h2 className="font-inter font-black text-display-2 uppercase tracking-tighter text-on-surface reveal">Services</h2>
          <div className="max-w-md mt-6 md:mt-0 font-space text-secondary text-sm leading-relaxed uppercase tracking-widest border-l-[2px] border-primary pl-6 reveal delay-1">
            Tu veux aller vite, sans recruter une équipe tech. Je construis ce dont tu as besoin et tu gardes la main.
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-[1600px] mx-auto">
          <div className="border-t-[1px] border-outline-variant/30 pt-8 flex flex-col group hover:border-primary transition-colors duration-500">
            <span className="font-space text-xs font-bold text-primary mb-4 block">01</span>
            <h3 className="font-inter font-bold text-2xl uppercase mb-6 text-on-surface">Automatisation IA</h3>
            <p className="text-secondary font-space text-sm leading-relaxed mb-8 flex-grow">
              Tes tâches répétitives tournent en boucle et bouffent du temps à ton équipe. Je les automatise avec l'IA (prospection, reporting, traitement de données) sans que tu aies à t'en occuper.
            </p>
            <Link to="/projets" className="inline-flex items-center gap-2 font-space text-xs uppercase tracking-widest text-on-surface group-hover:text-primary transition-colors mb-6 mt-auto w-fit">
              Voir un exemple <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </Link>
            <div className="h-[2px] w-0 bg-primary group-hover:w-full transition-all duration-500"></div>
          </div>

          <div className="border-t-[1px] border-outline-variant/30 pt-8 flex flex-col group hover:border-primary transition-colors duration-500">
            <span className="font-space text-xs font-bold text-primary mb-4 block">02</span>
            <h3 className="font-inter font-bold text-2xl uppercase mb-6 text-on-surface">Développement Low-Code</h3>
            <p className="text-secondary font-space text-sm leading-relaxed mb-8 flex-grow">
              Une app interne, un back-office, un outil sur mesure. Développé en quelques semaines, pas en plusieurs mois. Sans compromis sur la qualité.
            </p>
            <Link to="/projets" className="inline-flex items-center gap-2 font-space text-xs uppercase tracking-widest text-on-surface group-hover:text-primary transition-colors mb-6 mt-auto w-fit">
              Voir un exemple <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </Link>
            <div className="h-[2px] w-0 bg-primary group-hover:w-full transition-all duration-500"></div>
          </div>

          <div className="border-t-[1px] border-outline-variant/30 pt-8 flex flex-col group hover:border-primary transition-colors duration-500">
            <span className="font-space text-xs font-bold text-primary mb-4 block">03</span>
            <h3 className="font-inter font-bold text-2xl uppercase mb-6 text-on-surface">Reporting & Données</h3>
            <p className="text-secondary font-space text-sm leading-relaxed mb-8 flex-grow">
              Tu prends des décisions sur des données éparpillées dans dix outils différents. Je centralise tout dans un dashboard clair, en temps réel.
            </p>
            <Link to="/projets" className="inline-flex items-center gap-2 font-space text-xs uppercase tracking-widest text-on-surface group-hover:text-primary transition-colors mb-6 mt-auto w-fit">
              En savoir plus <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </Link>
            <div className="h-[2px] w-0 bg-primary group-hover:w-full transition-all duration-500"></div>
          </div>
        </div>
      </section>

      <section className="bg-surface-container-low px-6 md:px-12 lg:px-24 py-20 border-y-[1px] border-outline-variant/30">
        <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row gap-12 lg:gap-20">
          <div className="w-full md:w-1/3">
            <h2 className="font-inter font-black text-display-2 uppercase tracking-tighter text-on-surface">Stack</h2>
            <p className="mt-8 font-space text-secondary text-sm uppercase tracking-[0.15em] leading-relaxed">
              Des outils choisis pour aller vite, connecter tout, et ne rien casser.
            </p>
          </div>
          <div className="w-full md:w-2/3 space-y-[1px] bg-outline-variant/30">
            <div className="bg-surface-container-low py-8 flex items-center group cursor-default">
              <div className="flex items-center gap-8">
                <span className="font-space text-[10px] text-outline group-hover:text-primary transition-colors">01</span>
                <div className="flex flex-col">
                  <span className="font-inter font-bold text-lg uppercase tracking-wider text-on-surface">Automations</span>
                  <span className="font-space text-xs text-secondary mt-1">Pour que tes processus tournent sans intervention humaine.</span>
                </div>
              </div>
            </div>

            <div className="bg-surface-container-low py-8 flex items-center group cursor-default">
              <div className="flex items-center gap-8">
                <span className="font-space text-[10px] text-outline group-hover:text-primary transition-colors">02</span>
                <div className="flex flex-col">
                  <span className="font-inter font-bold text-lg uppercase tracking-wider text-on-surface">Bases de Données</span>
                  <span className="font-space text-xs text-secondary mt-1">La colonne vertébrale de chaque produit que je construis.</span>
                </div>
              </div>
            </div>

            <div className="bg-surface-container-low py-8 flex items-center group cursor-default">
              <div className="flex items-center gap-8">
                <span className="font-space text-[10px] text-outline group-hover:text-primary transition-colors">03</span>
                <div className="flex flex-col">
                  <span className="font-inter font-bold text-lg uppercase tracking-wider text-on-surface">Intelligence Artificielle</span>
                  <span className="font-space text-xs text-secondary mt-1">Des LLMs intégrés directement dans tes outils métier.</span>
                </div>
              </div>
            </div>

            <div className="bg-surface-container-low py-8 flex items-center group cursor-default">
              <div className="flex items-center gap-8">
                <span className="font-space text-[10px] text-outline group-hover:text-primary transition-colors">04</span>
                <div className="flex flex-col">
                  <span className="font-inter font-bold text-lg uppercase tracking-wider text-on-surface">No-Code Front</span>
                  <span className="font-space text-xs text-secondary mt-1">Des interfaces pro livrées en semaines, pas en mois.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner 
        title="TU VEUX<br />ALLER PLUS VITE ?"
        subtitle="Dis-moi ce qui te prend trop de temps. On règle ça ensemble."
        buttonText="Lancer le projet"
      />
    </>
  );
}
