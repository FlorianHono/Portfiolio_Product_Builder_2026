export default function APropos() {
  return (
    <div className="w-full">
      <section className="grid grid-cols-1 lg:grid-cols-12 min-h-[calc(100vh-100px)]">
        {/* Bio Section */}
        <div className="lg:col-span-7 px-6 lg:px-24 py-12 lg:py-24 border-r border-outline-variant flex flex-col justify-center">
          <div className="mb-8">
            <span className="font-space text-primary text-xs font-bold uppercase tracking-[0.3em]">Profil / Vision</span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-black font-inter uppercase tracking-tighter leading-[0.85] mb-12">
            BUILDER.<br/><span className="text-primary">PAS JUSTE DÉVELOPPEUR.</span>
          </h1>
          <div className="max-w-xl space-y-8">
            <p className="text-xl font-space font-light leading-relaxed text-on-surface">
              Formé à l'infographie 3D et aux effets spéciaux, j'ai fait une reconversion vers le développement web avant de glisser naturellement vers le product building.
            </p>
            <p className="text-lg text-secondary leading-relaxed font-space">
              Aujourd'hui je combine les deux mondes : je pense en systèmes visuels et je construis en no-code et IA. J'automatise ce qui prend trop de temps et je construis ce qui manque.
            </p>
            <div className="pt-8 grid grid-cols-2 gap-12 border-t border-outline-variant">
              <div>
                <span className="font-space text-[10px] uppercase tracking-widest text-secondary block mb-2">Expertise</span>
                <span className="font-space font-bold text-sm">NO-CODE & IA</span>
              </div>
              <div>
                <span className="font-space text-[10px] uppercase tracking-widest text-secondary block mb-2">Focus</span>
                <span className="font-space font-bold text-sm">OPS & PRODUCT</span>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline Section */}
        <div className="lg:col-span-5 px-6 lg:px-16 py-12 lg:py-24 bg-surface-container-lowest flex flex-col">
          <div className="mb-16">
            <span className="font-space text-secondary text-[10px] uppercase tracking-[0.4em] block mb-2">Historique</span>
            <h2 className="text-2xl font-bold font-inter uppercase tracking-tight">Expériences</h2>
          </div>
          <div className="space-y-0 flex-1 relative">
            <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-outline-variant"></div>

            <div className="relative pl-12 pb-10">
              <div className="absolute left-[-4px] top-2 w-2 h-2 bg-primary"></div>
              <span className="font-space text-primary text-sm font-bold block mb-1">2026</span>
              <h3 className="text-xl font-black font-inter uppercase tracking-tight">Yottascale</h3>
              <p className="text-secondary text-sm font-space uppercase tracking-widest">PRODUCT BUILDER IA</p>
            </div>

            <div className="relative pl-12 pb-10">
              <div className="absolute left-[-4px] top-2 w-2 h-2 bg-on-surface"></div>
              <span className="font-space text-secondary text-sm font-bold block mb-1">2025</span>
              <h3 className="text-xl font-black font-inter uppercase tracking-tight">Polites</h3>
              <p className="text-secondary text-sm font-space uppercase tracking-widest">DÉVELOPPEUR LOWCODE</p>
            </div>

            <div className="relative pl-12 pb-10">
              <div className="absolute left-[-4px] top-2 w-2 h-2 bg-on-surface"></div>
              <span className="font-space text-secondary text-sm font-bold block mb-1">2025</span>
              <h3 className="text-xl font-black font-inter uppercase tracking-tight">Enclin</h3>
              <p className="text-secondary text-sm font-space uppercase tracking-widest">PRODUCT BUILDER / FORMATEUR</p>
            </div>

            <div className="relative pl-12 pb-10">
              <div className="absolute left-[-4px] top-2 w-2 h-2 bg-on-surface"></div>
              <span className="font-space text-secondary text-sm font-bold block mb-1">2023 - 2024</span>
              <h3 className="text-xl font-black font-inter uppercase tracking-tight">Pada1</h3>
              <p className="text-secondary text-sm font-space uppercase tracking-widest">DÉVELOPPEUR LOWCODE</p>
            </div>

            <div className="relative pl-12">
              <div className="absolute left-[-4px] top-2 w-2 h-2 bg-on-surface"></div>
              <span className="font-space text-secondary text-sm font-bold block mb-1">2022</span>
              <h3 className="text-xl font-black font-inter uppercase tracking-tight">Oceane Consulting</h3>
              <p className="text-secondary text-sm font-space uppercase tracking-widest">Developer Intern</p>
            </div>
          </div>
        </div>
      </section>

      {/* Banner Section */}
      <section className="h-[500px] border-y border-outline-variant overflow-hidden relative group">
        <img 
          alt="Architectural vision" 
          className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7Ff0dlOSCvBFOOBMCSxkDEjqo5cehTTiUEzn0DnB9HljU2JVYhJgoYnWpaZQu9C1RtAXQfZmqg8tnXmQm4wCkFQ58-0EXSkxZyYQq5-F4scEThU-mEEH_9jkUN7ZKivGcKtESmxYypOrQwwNtFMV_f9SQMFwawqSPKrLlI6In-S4zltjJqCBDLq_gOuJAjAY4JsTxFD0UIyrSkGaA6TWG9V-ilFClC5HNhkHCw-d9Cqf5vEeuclHW23Z00vHrv6vd0UVbAEMNtXc"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-on-surface/80 to-transparent"></div>
        <div className="absolute bottom-20 left-6 lg:left-24">
          <h2 className="font-inter font-black text-white text-5xl lg:text-8xl uppercase tracking-tighter leading-none">
            CONSTRUIRE VITE.<br/>AUTOMATISER LE RESTE.
          </h2>
        </div>
      </section>
    </div>
  );
}
