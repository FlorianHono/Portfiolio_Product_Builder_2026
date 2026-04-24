import SEO from '../components/SEO';
import SectionHeader from '../components/SectionHeader';
import CTABanner from '../components/CTABanner';

export default function Methode() {
  return (
    <div className="w-full">
      <SEO 
        title="Méthode" 
        description="L'approche de Florian Honoré : prototypage rapide, IA native et focus sur les résultats business."
      />
      <SectionHeader 
        label="Florian Honoré Portfolio"
        title="MÉTHODE"
        description="Je ne livre pas des outils, je règle des problèmes. La tech est un moyen, pas une fin."
      />

      {/* Approche Section */}
      <section className="px-6 md:px-12 lg:px-24 pb-32 max-w-[1600px] mx-auto">
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

      <CTABanner 
        title="On définit ton projet ensemble ?"
        buttonText="Me contacter"
        href="mailto:honoreflorian.dwwm@gmail.com"
      />
    </div>
  );
}
