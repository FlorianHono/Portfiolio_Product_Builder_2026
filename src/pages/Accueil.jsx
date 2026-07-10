import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import CTABanner from '../components/CTABanner';
import profilePic from '../assets/florian.png';
import { useLanguage } from '../context/LanguageContext';
import { useTranslation } from '../translations';

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
  const { language } = useLanguage();
  const { t } = useTranslation(language);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let requestRef;
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e) => {
      mouseX = (e.clientX - window.innerWidth / 2) * 0.02;
      mouseY = (e.clientY - window.innerHeight / 2) * 0.02;
    };

    const updateParallax = () => {
      const img = document.querySelector('.parallax-bg');
      if (img) {
        img.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) scale(1.1)`;
      }
      requestRef = requestAnimationFrame(updateParallax);
    };

    document.addEventListener('mousemove', handleMouseMove);
    requestRef = requestAnimationFrame(updateParallax);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(requestRef);
    };
  }, []);

  return (
    <>
      <SEO 
        title="Développeur No-Code & Automatisation IA · Florian Honoré" 
        description="Vous avez un projet à construire mais chaque devis est hors budget ou prend trois mois. Je construis vos sites, apps et automatisations, opérationnel en quelques jours."
      />
      <section className="relative min-h-[calc(100vh-80px)] flex flex-col pt-12 md:pt-16 px-6 md:px-12 lg:px-24 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-[0.12] pointer-events-none overflow-hidden mix-blend-multiply">
          <img
            alt="Florian Honoré, développeur no-code et automatisation IA"
            width="1920"
            height="1080"
            className="parallax-bg w-[120%] h-[120%] -translate-x-[10%] -translate-y-[10%] object-cover scale-110"
            src="https://lh3.googleusercontent.com/aida/ADBb0ugY6OtPSFzDElhf0BvBRDp7EvIgUp7kE8JP24TPjZf9GXKTgGyLHjRtYPfifez5JVg_4yv0DX-tfXrHLstoPRHGa7Hl8X9zQMnbhmEpu0lpNv1T3IqU216jFyd4b15RqIKfQOhYjC41ruGPFBCeFZAmKpiMHG4ljV6rwDdxgOHRJQaF8rfLci8fCcX9Jt7rt-mVkAz4iu5m1pvcDIRe7_L2Kpgue0MWSMrqKqz2Wp7a7GOKc84OmsgPCA"
            fetchpriority="high"
            decoding="async"
          />
        </div>

        <div className="relative z-10 w-full max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 xl:col-span-8">
              <span className="font-space text-sm md:text-base tracking-[0.4em] uppercase text-primary mb-5 block font-bold reveal delay-1">
                Florian Honoré · Développeur No-Code & Automatisation IA
              </span>
              <h1 className="font-inter font-black text-huge tracking-[-0.04em] text-on-surface mb-7 drop-shadow-sm reveal delay-2">
                PRODUCT<br />
                <span className="inline-block relative">
                   BUILDER
                  <div className="absolute -right-4 md:-right-12 top-1/2 w-8 md:w-24 h-[1.5px] md:h-[4px] bg-primary"></div>
                </span>
              </h1>
              <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 mb-10">
                <span className="font-space text-lg md:text-2xl tracking-[0.2em] uppercase text-on-surface font-bold">{t('hero.faster')}</span>
                <span className="hidden md:block w-2 h-2 bg-primary"></span>
                <span className="font-space text-lg md:text-2xl tracking-[0.2em] uppercase text-on-surface font-bold">{t('hero.noTech')}</span>
              </div>

              <div className="max-w-xl">
                {/* Accroche principale */}
                <p className="font-space text-2xl md:text-3xl text-on-surface leading-snug mb-4 font-medium reveal delay-3">
                  {t('hero.faster')}<br/>
                  <span className="text-primary">{t('hero.noTech')}</span>
                </p>
                {/* Sous-accroche tags */}
                <p className="font-space text-xs md:text-sm tracking-[0.25em] uppercase text-secondary mb-8 font-bold">
                  {t('hero.tags')}
                </p>
                <p className="font-space text-base md:text-lg text-secondary leading-relaxed mb-8 font-light">
                  {t('hero.description')} <span className="text-primary font-medium italic">{t('hero.descriptionSuffix')}</span>
                </p>
                <div className="flex flex-col sm:flex-row gap-6 reveal delay-4">
                  <Link to="/projets" className="group relative inline-flex items-center justify-center bg-primary-container text-white px-8 py-3 font-space font-bold uppercase tracking-widest text-xs overflow-hidden">
                    <span className="relative z-10 transition-colors">{t('hero.cta')}</span>
                    <div className="absolute inset-0 bg-[#d94a12] translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                  </Link>
                  <Link to="/contact" className="inline-flex items-center justify-center border-2 border-on-surface px-8 py-3 font-space font-bold uppercase tracking-widest text-xs hover:bg-on-surface hover:text-surface transition-all duration-300">
                    {t('hero.start')}
                  </Link>
                </div>

                <div className="mt-10 pt-6 border-t border-outline-variant/30 overflow-hidden w-full max-w-[100vw]">
                  <p className="font-space text-xs text-outline uppercase tracking-[0.2em] mb-4">{t('hero.clientText')}</p>
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
                    width="450"
                    height="550"
                    className="w-[450px] h-[550px] object-cover object-[center_15%] filter grayscale contrast-[1.1] brightness-[1.05] mix-blend-multiply"
                    fetchpriority="high"
                    decoding="async"
                  />
                  {/* Architectural accents */}
                  <div className="absolute -top-1 -right-1 w-8 h-8 border-t-2 border-r-2 border-primary"></div>
                  <div className="absolute -bottom-1 -left-1 w-8 h-8 border-b-2 border-l-2 border-primary"></div>
                  <div className="absolute top-full mt-4 right-0 font-space text-[10px] tracking-[0.3em] text-outline uppercase">
                    Florian Honoré · Product Builder 2026
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

      {/* Section : Vous en êtes là ? */}
      <section className="px-6 md:px-12 lg:px-24 py-20 border-t-[1px] border-outline-variant/30 bg-surface-container-lowest relative z-20">
        <div className="max-w-[1600px] mx-auto">
          <h2 className="font-inter font-black text-display-2 uppercase tracking-tighter text-on-surface mb-12 reveal">
            Vous en êtes là ?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {[
              "J'ai un projet en tête depuis des mois, mais chaque devis de dev est hors budget ou prend trois mois.",
              "Mon équipe passe ses journées à copier-coller, et des clients passent à la trappe.",
              "On me dit d'automatiser et d'utiliser l'IA, je ne sais pas par où commencer.",
              "J'ai déjà fait bricoler un truc, ça a cassé, et personne ne sait le réparer.",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-5 py-6 border-t border-outline-variant/30 group hover:border-primary transition-colors duration-300">
                <span className="font-space text-xs font-bold text-primary mt-1 flex-shrink-0">0{i + 1}</span>
                <p className="font-space text-sm md:text-base text-secondary leading-relaxed group-hover:text-on-surface transition-colors duration-300">{item}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 pt-8 border-t-2 border-primary">
            <p className="font-inter font-black text-xl md:text-2xl uppercase tracking-tighter text-on-surface">
              C'est exactement ce que je débloque.
              <span className="text-primary"> Vite, sans usine à gaz, et sans que vous ayez à tout comprendre.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Section Services */}
      <section className="px-6 md:px-12 lg:px-24 py-20 border-t-[1px] border-outline-variant/30 bg-surface relative z-20">
        <div className="flex flex-col md:flex-row justify-between items-start mb-16 max-w-[1600px] mx-auto">
          <h2 className="font-inter font-black text-display-2 uppercase tracking-tighter text-on-surface reveal">{t('services.title')}</h2>
          <div className="max-w-md mt-6 md:mt-0 font-space text-secondary text-sm leading-relaxed uppercase tracking-widest border-l-[2px] border-primary pl-6 reveal delay-1">
            {t('services.intro')}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-[1600px] mx-auto">
          <div className="border-t-[1px] border-outline-variant/30 pt-8 flex flex-col group hover:border-primary transition-colors duration-500">
            <span className="font-space text-xs font-bold text-primary mb-4 block">01</span>
            <h3 className="font-inter font-bold text-2xl uppercase mb-6 text-on-surface">{t('services.s1.title')}</h3>
            <p className="text-secondary font-space text-sm leading-relaxed mb-8 flex-grow">
              {t('services.s1.desc')}
            </p>
            <Link to="/projets" className="inline-flex items-center gap-2 font-space text-xs uppercase tracking-widest text-on-surface group-hover:text-primary transition-colors mb-6 mt-auto w-fit">
              {t('services.s1.cta')} <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </Link>
            <div className="h-[2px] w-0 bg-primary group-hover:w-full transition-all duration-500"></div>
          </div>

          <div className="border-t-[1px] border-outline-variant/30 pt-8 flex flex-col group hover:border-primary transition-colors duration-500">
            <span className="font-space text-xs font-bold text-primary mb-4 block">02</span>
            <h3 className="font-inter font-bold text-2xl uppercase mb-6 text-on-surface">{t('services.s2.title')}</h3>
            <p className="text-secondary font-space text-sm leading-relaxed mb-8 flex-grow">
              {t('services.s2.desc')}
            </p>
            <Link to="/projets" className="inline-flex items-center gap-2 font-space text-xs uppercase tracking-widest text-on-surface group-hover:text-primary transition-colors mb-6 mt-auto w-fit">
              {t('services.s2.cta')} <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </Link>
            <div className="h-[2px] w-0 bg-primary group-hover:w-full transition-all duration-500"></div>
          </div>
        </div>
      </section>


      <section className="bg-surface-container-low px-6 md:px-12 lg:px-24 py-20 border-y-[1px] border-outline-variant/30">
        <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row gap-12 lg:gap-20">
          <div className="w-full md:w-1/3">
            <h2 className="font-inter font-black text-display-2 uppercase tracking-tighter text-on-surface">{t('stack.title')}</h2>
            <p className="mt-8 font-space text-secondary text-sm uppercase tracking-[0.15em] leading-relaxed">
              {t('stack.intro')}
            </p>
          </div>
          <div className="w-full md:w-2/3 space-y-[1px] bg-outline-variant/30">
            <div className="bg-surface-container-low py-8 flex items-center group cursor-default">
              <div className="flex items-center gap-8">
                <span className="font-space text-[10px] text-outline group-hover:text-primary transition-colors">01</span>
                <div className="flex flex-col">
                  <span className="font-inter font-bold text-lg uppercase tracking-wider text-on-surface">{t('stack.i1.title')}</span>
                  <span className="font-space text-xs text-secondary mt-1">{t('stack.i1.desc')}</span>
                </div>
              </div>
            </div>

            <div className="bg-surface-container-low py-8 flex items-center group cursor-default">
              <div className="flex items-center gap-8">
                <span className="font-space text-[10px] text-outline group-hover:text-primary transition-colors">02</span>
                <div className="flex flex-col">
                  <span className="font-inter font-bold text-lg uppercase tracking-wider text-on-surface">{t('stack.i2.title')}</span>
                  <span className="font-space text-xs text-secondary mt-1">{t('stack.i2.desc')}</span>
                </div>
              </div>
            </div>

            <div className="bg-surface-container-low py-8 flex items-center group cursor-default">
              <div className="flex items-center gap-8">
                <span className="font-space text-[10px] text-outline group-hover:text-primary transition-colors">03</span>
                <div className="flex flex-col">
                  <span className="font-inter font-bold text-lg uppercase tracking-wider text-on-surface">{t('stack.i3.title')}</span>
                  <span className="font-space text-xs text-secondary mt-1">{t('stack.i3.desc')}</span>
                </div>
              </div>
            </div>

            <div className="bg-surface-container-low py-8 flex items-center group cursor-default">
              <div className="flex items-center gap-8">
                <span className="font-space text-[10px] text-outline group-hover:text-primary transition-colors">04</span>
                <div className="flex flex-col">
                  <span className="font-inter font-bold text-lg uppercase tracking-wider text-on-surface">{t('stack.i4.title')}</span>
                  <span className="font-space text-xs text-secondary mt-1">{t('stack.i4.desc')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section différenciateur */}
      <section className="px-6 md:px-12 lg:px-24 py-20 bg-surface relative z-20">
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-2">
            <div className="w-12 h-[2px] bg-primary mb-4"></div>
            <span className="font-space text-[10px] uppercase tracking-[0.3em] text-primary font-bold">Différenciateur</span>
          </div>
          <div className="lg:col-span-6">
            <h2 className="font-inter font-black text-2xl md:text-4xl uppercase tracking-tighter text-on-surface mb-6 reveal">
              L'automatisation<br/><span className="text-primary">sans perdre la main.</span>
            </h2>
            <p className="font-space text-sm md:text-base text-secondary leading-relaxed">
              Je ne livre pas une boîte noire. Chaque système que je construis est documenté, expliqué, et conçu pour que votre équipe puisse le comprendre et le faire évoluer. L'humain garde la décision là où elle compte : le reste tourne tout seul. Pas de dépendance, pas d'usine à gaz.
            </p>
          </div>
          <div className="lg:col-span-4 flex flex-col gap-4">
            {[
              { label: "Systèmes documentés", icon: "description" },
              { label: "Maintenables par votre équipe", icon: "group" },
              { label: "Pas de dépendance", icon: "link_off" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-4 py-4 border-b border-outline-variant/30">
                <span className="material-symbols-outlined text-primary text-xl">{item.icon}</span>
                <span className="font-space text-sm font-bold uppercase tracking-widest text-on-surface">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bandeau disponibilité */}
      <section className="px-6 md:px-12 lg:px-24 py-10 border-t border-outline-variant/30 bg-surface-container-lowest relative z-20">
        <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <span className="inline-block w-2 h-2 bg-primary rounded-full animate-pulse flex-shrink-0"></span>
            <p className="font-space text-sm text-secondary">
              <span className="text-on-surface font-bold">Disponible</span> pour missions freelance, CDD ou CDI. Remote ou hybride Île-de-France.
            </p>
          </div>
          <div className="flex items-center gap-6 flex-shrink-0">
            <a
              href="https://www.linkedin.com/in/florian-honore-dwwm/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-space text-[10px] uppercase tracking-widest text-secondary hover:text-primary transition-colors border-b border-outline-variant/50 hover:border-primary pb-0.5"
            >
              Profil LinkedIn
            </a>
            <Link
              to="/contact"
              className="font-space text-[10px] uppercase tracking-widest text-secondary hover:text-primary transition-colors border-b border-outline-variant/50 hover:border-primary pb-0.5"
            >
              Me contacter
            </Link>
          </div>
        </div>
      </section>

      <CTABanner 
        title={t('cta.title')}
        subtitle={t('cta.subtitle')}
        buttonText={t('cta.button')}
      />
    </>
  );
}
