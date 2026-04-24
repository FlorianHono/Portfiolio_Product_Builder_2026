import SEO from '../components/SEO';

export default function Contact() {
  return (
    <div className="w-full">
      <SEO 
        title="Contact" 
        description="Contactez Florian Honoré pour vos projets d'automatisation IA et de product building. Réservez un call ou envoyez un email."
      />
      {/* Header Info */}
      <section className="px-6 md:px-12 lg:px-24 pt-12 pb-20 max-w-[1600px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-baseline gap-4 mb-12 border-b border-outline-variant/30 pb-6">
          <span className="font-space text-[10px] tracking-[0.4em] uppercase text-primary font-bold">STATUS : DISPONIBLE</span>
          <span className="font-space text-[10px] tracking-[0.4em] uppercase text-secondary font-bold">LOC: PARIS / REMOTE</span>
        </div>
        
        <h1 
          className="font-inter font-black tracking-[-0.04em] text-on-surface leading-[0.85] uppercase mb-16 reveal delay-1"
          style={{ fontSize: 'clamp(2.5rem, 12vw, 8.5rem)' }}
        >
          TRAVAILLONS<br/>
          <span className="text-primary">ENSEMBLE.</span>
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Section 01 - Intention */}
          <div className="lg:col-span-7">
            <div className="mb-12 reveal delay-2">
              <span className="font-space text-xs tracking-[0.2em] uppercase text-primary font-bold block mb-6">01. INTENTION</span>
              <p className="font-inter text-2xl md:text-3xl font-black leading-tight max-w-xl mb-8 tracking-tighter uppercase">
                Tu as un projet à automatiser ou à construire ? Réserve un call de 30 min, on regarde ensemble ce qui est faisable.
              </p>
              
              <a 
                href="https://cal.com/florian-honore-rzzjky/30min" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center bg-primary-container text-white px-8 md:px-10 py-4 md:py-5 font-space font-bold uppercase tracking-widest text-xs md:text-sm overflow-hidden"
              >
                <span className="relative z-10">RÉSERVER UN CALL →</span>
                <div className="absolute inset-0 bg-[#d94a12] -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
              </a>

              <p className="mt-8 font-space text-secondary text-sm">
                Tu préfères écrire ? <a href="mailto:honoreflorian.dwwm@gmail.com" className="text-on-surface font-bold border-b border-primary hover:text-primary transition-colors">honoreflorian.dwwm@gmail.com</a>
              </p>
            </div>
          </div>

          {/* Section 02 - Direct */}
          <div className="lg:col-span-5 border-l border-outline-variant/30 lg:pl-16 reveal delay-3">
            <span className="font-space text-xs tracking-[0.2em] uppercase text-primary font-bold block mb-12">02. DIRECT</span>
            
            <div className="space-y-12">
              <div>
                <span className="font-space text-[10px] uppercase tracking-widest text-secondary block mb-4">EMAIL</span>
                <a 
                  className="font-inter text-xl md:text-2xl font-black tracking-tight hover:text-primary transition-colors block uppercase" 
                  href="mailto:honoreflorian.dwwm@gmail.com"
                >
                  honoreflorian.dwwm@gmail.com
                </a>
              </div>

              <div>
                <span className="font-space text-[10px] uppercase tracking-widest text-secondary block mb-6">RÉSEAUX</span>
                <ul className="space-y-4">
                  <li>
                    <a 
                      className="group font-inter text-xl md:text-2xl font-black tracking-tight hover:text-primary transition-colors flex items-center justify-between uppercase" 
                      href="https://www.linkedin.com/in/florian-honore-dwwm/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      LINKEDIN
                      <span className="material-symbols-outlined text-sm group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">north_east</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Visual Decoration */}
            <div className="mt-20 pt-16 border-t border-outline-variant/30 grayscale opacity-40">
               <div className="font-inter text-7xl font-black text-outline-variant/20 tracking-tighter leading-none select-none">
                 PARIS<br/>2026
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
