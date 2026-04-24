import SEO from '../components/SEO';

export default function MentionsLegales() {
  const sections = [
    {
      num: '01',
      title: 'Éditeur du site',
      content: (
        <div className="space-y-1">
          <p>Florian Honoré</p>
          <p>Activité : Product Builder, Développeur Low-Code & Expert en Automatisation IA</p>
          <p>Statut : Auto-entrepreneur / Freelance</p>
          <p>Localisation : Champigny-sur-Marne, Île-de-France, France</p>
          <p>Téléphone : <a href="tel:+33768717015" className="text-primary hover:underline">+33 7 68 71 70 15</a></p>
          <p>Email : <a href="mailto:honoreflorian.dwwm@gmail.com" className="text-primary hover:underline">honoreflorian.dwwm@gmail.com</a></p>
          <p>Site web : <a href="https://florianhonore.fr" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">florianhonore.fr</a></p>
        </div>
      ),
    },
    {
      num: '02',
      title: 'Hébergement',
      content: (
        <div className="space-y-1">
          <p>Hostinger International Ltd.</p>
          <p>61 Lordou Vironos Street, 6023 Larnaca, Chypre</p>
          <p>Site : <a href="https://www.hostinger.fr" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.hostinger.fr</a></p>
        </div>
      ),
    },
    {
      num: '03',
      title: 'Propriété intellectuelle',
      content: (
        <p>L'ensemble du contenu de ce site (textes, visuels, structure, code) est la propriété exclusive de Florian Honoré, sauf mention contraire. Toute reproduction, distribution ou utilisation sans autorisation préalable est strictement interdite.</p>
      ),
    },
    {
      num: '04',
      title: 'Données personnelles',
      content: (
        <p>Ce site ne collecte aucune donnée personnelle sans votre consentement explicite. Les informations transmises via le formulaire de contact sont utilisées uniquement pour répondre à vos demandes et ne sont jamais cédées à des tiers. Conformément au RGPD et à la loi Informatique et Libertés, vous disposez d'un droit d'accès, de rectification et de suppression de vos données. Pour exercer ce droit : <a href="mailto:honoreflorian.dwwm@gmail.com" className="text-primary hover:underline">honoreflorian.dwwm@gmail.com</a></p>
      ),
    },
    {
      num: '05',
      title: 'Cookies',
      content: (
        <p>Ce site peut utiliser des cookies techniques nécessaires à son bon fonctionnement. Aucun cookie publicitaire ou de tracking tiers n'est utilisé sans votre accord.</p>
      ),
    },
    {
      num: '06',
      title: 'Responsabilité',
      content: (
        <p>Florian Honoré s'efforce de maintenir les informations de ce site à jour et exactes, mais ne peut garantir leur exhaustivité ni leur exactitude à tout moment. Les liens vers des sites tiers sont fournis à titre indicatif. Florian Honoré n'est pas responsable de leur contenu.</p>
      ),
    },
    {
      num: '07',
      title: 'Droit applicable',
      content: (
        <p>Les présentes mentions légales sont régies par le droit français. Tout litige relève de la compétence des tribunaux français.</p>
      ),
    },
  ];

  return (
    <div className="w-full">
      <SEO 
        title="Mentions Légales" 
        description="Informations légales concernant le site de Florian Honoré."
      />
    <section className="min-h-screen px-6 md:px-12 lg:px-24 py-20 max-w-5xl mx-auto">
      <span className="font-space text-sm tracking-[0.4em] uppercase text-primary mb-6 block font-bold">
        Informations légales
      </span>
      <h1 className="font-inter font-black text-display-3 md:text-display-2 uppercase tracking-tighter text-on-surface mb-16">
        Mentions Légales
      </h1>

      <div className="space-y-0">
        {sections.map((s) => (
          <div key={s.num} className="border-t border-outline-variant/30 py-10 flex flex-col md:flex-row md:gap-16">
            <div className="flex items-start gap-4 md:w-64 flex-shrink-0 mb-4 md:mb-0">
              <span className="font-space text-[10px] text-primary font-bold">{s.num}</span>
              <h2 className="font-inter font-bold text-sm uppercase tracking-wider text-on-surface">
                {s.title}
              </h2>
            </div>
            <div className="font-space text-sm text-secondary leading-relaxed">
              {s.content}
            </div>
          </div>
        ))}
        <div className="border-t border-outline-variant/30 pt-10" />
      </div>
    </section>
    </div>
  );
}
