import { Link } from 'react-router-dom';

// Project images are located in src/assets/
import imgWorkflow from '../assets/workflow_automatisé.png';
import imgRapport from '../assets/rapport_hebdo.png';
import imgPolites from '../assets/polites.png';
import imgPada1 from '../assets/Pada1_work.png';
import imgEnclin from '../assets/Enclin.png';

const projets = [
  {
    num: '01',
    category: 'AUTOMATISATION',
    client: 'YOTTASCALE',
    desc: "L'équipe perdait des heures chaque semaine sur la prospection manuelle. J'ai automatisé l'intégralité du pipeline avec N8N et Claude API, de la collecte Apollo.io à l'envoi personnalisé via Brevo.",
    outils: ['N8N', 'Claude API', 'Brevo', 'Apollo.io'],
    img: imgWorkflow,
    alt: "workflow_automatisé",
    reverse: false,
  },
  {
    num: '02',
    category: 'DATA REPORTING',
    client: 'YOTTASCALE',
    desc: "Les données business étaient éparpillées entre Gmail, GA4 et des exports manuels. J'ai centralisé tout ça dans un dashboard temps réel connecté via N8N et Claude API.",
    outils: ['N8N', 'Claude API', 'GA4', 'Gmail'],
    img: imgRapport,
    alt: "rapport_hebdo",
    reverse: true,
  },
  {
    num: '03',
    category: 'INTERNAL TOOL',
    client: 'POLITES',
    desc: "Pas d'interface interne, tout se gérait dans des tableurs. J'ai conçu et développé un back-office complet sur Retool, opérationnel en quelques semaines.",
    outils: ['Retool', 'Airtable', 'Freshdesk'],
    img: imgPolites,
    alt: "Polites",
    reverse: false,
  },
  {
    num: '04',
    category: 'BUSINESS APP',
    client: 'PADA1',
    desc: "Une app métier construite de zéro, design UI/UX sur Figma, développement sur Weweb, backend sur Xano. Livré dans le cadre d'un contrat pro.",
    outils: ['Figma', 'Weweb', 'Xano', 'Airtable'],
    img: imgPada1,
    alt: "Pada1_work",
    reverse: true,
  },
  {
    num: '05',
    category: 'LOWCODE & FORMATION',
    client: 'ENCLIN',
    desc: "Design UI/UX et site multipage sur Framer. Formation des équipes à la conception d'applications web no-code sur Softr et Airtable.",
    outils: ['Figma', 'Framer', 'Softr', 'Airtable'],
    img: imgEnclin,
    alt: "Enclin",
    reverse: false,
  },
];

export default function Projets() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="px-6 md:px-12 pt-12 pb-20 max-w-[1600px] mx-auto">
        <span className="font-space text-sm tracking-[0.4em] uppercase text-primary mb-5 block font-bold reveal delay-1">
          Florian Honoré Portfolio
        </span>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-20">
          <h1 className="font-inter font-black tracking-[-0.04em] text-on-surface leading-none reveal delay-2"
              style={{ fontSize: 'clamp(3rem, 9vw, 8.5rem)', lineHeight: '0.85' }}>
            PROJETS
          </h1>
          <p className="font-space text-secondary text-base md:text-lg max-w-sm leading-relaxed border-l-2 border-primary pl-6 reveal delay-3">
            Archives sélectionnées. 2024. 2026.
          </p>
        </div>
        <div className="h-px w-full bg-outline-variant/30 mb-0" />
      </section>

      {/* Liste projets */}
      <section className="px-6 md:px-12 max-w-[1600px] mx-auto pb-32 space-y-0">
        {projets.map((p, i) => (
          <article 
            key={p.num} 
            className="group border-t border-outline-variant/30 py-20 reveal"
            style={{ animationDelay: `${0.4 + i * 0.15}s` }}
          >
            <div className={`flex flex-col ${p.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 md:gap-20 items-start`}>
              {/* Texte */}
              <div className="lg:w-2/5 flex flex-col justify-between py-2">
                <div>
                  <span className={`font-space text-xs tracking-widest text-primary font-bold mb-4 block ${p.reverse ? 'lg:text-right' : ''}`}>
                    {p.num} / {p.category} / {p.client}
                  </span>
                  <h2 className={`font-inter font-black text-4xl md:text-5xl uppercase leading-none mb-6 ${p.reverse ? 'lg:text-right' : ''}`}>
                    {p.client}
                  </h2>
                  <p className={`text-secondary font-space text-sm leading-relaxed mb-8 max-w-sm ${p.reverse ? 'lg:ml-auto lg:text-right' : ''}`}>
                    {p.desc}
                  </p>
                  <div className={`flex flex-wrap gap-2 ${p.reverse ? 'lg:justify-end' : ''}`}>
                    {p.outils.map((o) => (
                      <span key={o} className="font-space text-[10px] px-3 py-1 bg-surface-container tracking-widest uppercase border border-outline-variant/50 text-on-surface-variant">
                        {o}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Image résultat */}
              <div className="lg:w-3/5">
                <div className="relative overflow-hidden aspect-[16/9] bg-surface-container">
                  <span className="absolute top-4 left-4 z-10 font-space text-[10px] bg-primary text-white px-3 py-1 tracking-widest uppercase">
                    Résultat
                  </span>
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    alt={p.alt}
                    src={p.img}
                  />
                </div>
              </div>
            </div>
            
            {/* Ligne de progression hover */}
            <div className="h-[1px] w-0 bg-primary group-hover:w-full transition-all duration-700 mt-12" />
          </article>
        ))}
      </section>

      {/* Bandeau bas */}
      <section className="bg-on-surface py-20 px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-8">
        <h2 className="font-inter font-black text-2xl md:text-4xl uppercase tracking-tighter leading-tight" style={{ color: 'var(--color-surface)' }}>
          Prêt à lancer<br />le prochain projet ?
        </h2>
        <Link
          to="/contact"
          className="group relative inline-flex items-center justify-center bg-primary-container text-white px-8 py-4 font-space font-bold uppercase tracking-widest text-xs overflow-hidden flex-shrink-0"
        >
          <span className="relative z-10">Démarrer un projet</span>
          <div className="absolute inset-0 bg-[#d94a12] -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
        </Link>
      </section>
    </div>
  );
}
