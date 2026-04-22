export default function Methode() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="px-6 md:px-12 pt-12 pb-20 max-w-[1600px] mx-auto">
        <span className="font-space text-sm tracking-[0.4em] uppercase text-primary mb-5 block font-bold reveal delay-1">
          Florian Honoré Portfolio
        </span>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-6">
          <h1
            className="font-inter font-black tracking-[-0.04em] text-on-surface leading-none reveal delay-2"
            style={{ fontSize: 'clamp(3rem, 9vw, 8rem)', lineHeight: '0.85' }}
          >
            MÉTHODE
          </h1>
          <p className="font-space text-secondary text-base md:text-lg max-w-sm leading-relaxed border-l-2 border-primary pl-6 reveal delay-3">
            Je ne livre pas des outils, je règle des problèmes. La tech est un moyen, pas une fin.
          </p>
        </div>
        <div className="h-px w-full bg-outline-variant/30" />
      </section>

      {/* Approche Section */}
      <section className="px-6 md:px-12 pb-32 max-w-[1600px] mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <span className="font-space text-4xl font-black text-outline-variant">01</span>
          <h2 className="font-inter font-black text-3xl uppercase tracking-tighter">Approche</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-outline-variant/30 border border-outline-variant/30">
          <div className="bg-surface p-10 flex flex-col h-full hover:bg-surface-container-lowest transition-colors group reveal delay-2">
            <span className="material-symbols-outlined text-primary mb-6 text-3xl">bolt</span>
            <h3 className="font-inter font-black text-xl uppercase mb-4 tracking-tighter">Proto rapide</h3>
            <p className="font-space text-sm text-secondary leading-relaxed">
              De l'idée à quelque chose qui tourne, le plus vite possible. On affine ensuite.
            </p>
          </div>

          <div className="bg-surface p-10 flex flex-col h-full hover:bg-surface-container-lowest transition-colors group reveal delay-3">
            <span className="material-symbols-outlined text-primary mb-6 text-3xl">smart_toy</span>
            <h3 className="font-inter font-black text-xl uppercase mb-4 tracking-tighter">IA Native</h3>
            <p className="font-space text-sm text-secondary leading-relaxed">
              L'IA est intégrée dès le départ, pas ajoutée en dernier.
            </p>
          </div>

          <div className="bg-surface p-10 flex flex-col h-full hover:bg-surface-container-lowest transition-colors group reveal delay-4">
            <span className="material-symbols-outlined text-primary mb-6 text-3xl">layers</span>
            <h3 className="font-inter font-black text-xl uppercase mb-4 tracking-tighter">Low-code first</h3>
            <p className="font-space text-sm text-secondary leading-relaxed">
              Je choisis l'outil le plus rapide qui fait le job. Pas le plus impressionnant.
            </p>
          </div>

          <div className="bg-surface p-10 flex flex-col h-full hover:bg-surface-container-lowest transition-colors group reveal delay-5">
            <span className="material-symbols-outlined text-primary mb-6 text-3xl">visibility</span>
            <h3 className="font-inter font-black text-xl uppercase mb-4 tracking-tighter">Veille</h3>
            <p className="font-space text-sm text-secondary leading-relaxed">
              Je teste les nouveaux outils en continu. Ce que j'utilise aujourd'hui n'existait pas il y a 2 ans.
            </p>
          </div>
        </div>
      </section>

      {/* Bottom CTA (Simple & clean) */}
      <section className="bg-on-surface py-20 px-6 md:px-12 flex flex-col items-center text-center">
        <h2 className="font-inter font-black text-3xl md:text-5xl uppercase tracking-tighter leading-tight mb-10" style={{ color: 'var(--color-surface)' }}>
          On définit ton projet ensemble ?
        </h2>
        <a 
          href="mailto:honoreflorian.dwwm@gmail.com"
          className="bg-primary-container text-white px-10 py-5 font-space font-bold uppercase tracking-widest text-sm hover:scale-105 transition-transform"
        >
          Me contacter
        </a>
      </section>
    </div>
  );
}
