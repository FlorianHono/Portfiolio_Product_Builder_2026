import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import SectionHeader from '../components/SectionHeader';
import CTABanner from '../components/CTABanner';

const services = [
  {
    num: '01',
    title: 'Automatisation IA',
    pourQui: "Tu as des tâches répétitives qui bouffent du temps à ton équipe.",
    ceFaireDesc: "Prospection automatisée, reporting, traitement de données, emails personnalisés par IA. Je connecte tes outils entre eux et j'intègre des LLMs directement dans tes workflows.",
    ceRecois: "Un système qui tourne sans toi. Documenté, testé, opérationnel.",
    outils: ['N8N', 'Make', 'Claude API', 'OpenAI', 'Brevo', 'Apollo.io', 'Gmail', 'Google Analytics'],
  },
  {
    num: '02',
    title: 'Développement Low-Code',
    pourQui: "Tu as besoin d'un outil interne, d'un back-office ou d'une app métier, sans monter une équipe dev.",
    ceFaireDesc: "Je conçois et développe des applications web sur mesure. Interface, logique métier, base de données, API. Du prototype à la mise en production.",
    ceRecois: "Une app utilisable par ton équipe dès le premier jour. Livrée en semaines, pas en mois.",
    outils: ['Weweb', 'Softr', 'Framer', 'Webflow', 'Xano', 'Airtable', 'Retool', 'Supabase', 'Antigravity'],
  },
  {
    num: '03',
    title: 'Reporting & Données',
    pourQui: "Tu prends des décisions sur des données éparpillées dans dix outils différents.",
    ceFaireDesc: "Je centralise tes indicateurs clés dans un dashboard unique, connecté à tes sources en temps réel. GA4, CRM, base de données, tout au même endroit.",
    ceRecois: "Une vision claire de ce qui se passe dans ton business, sans ouvrir dix onglets.",
    outils: ['N8N', 'Airtable', 'PostgreSQL', 'Supabase', 'Google Analytics', 'Retool', 'Xano'],
  },
];

export default function Services() {
  return (
    <>
      <SEO 
        title="Services" 
        description="Services de product building : automatisations IA, développement low-code et reporting de données."
      />
      <SectionHeader 
        label="Florian Honoré Portfolio"
        title="SERVICES"
        description="Ce que je construis pour toi, de A à Z."
      />

        {/* Services */}
        <div className="space-y-0 px-6 md:px-12 lg:px-24 max-w-[1600px] mx-auto">
          {services.map((s, i) => (
            <div key={s.num} 
                 className={`group border-t border-outline-variant/30 py-16 grid grid-cols-1 lg:grid-cols-12 gap-8 hover:border-primary transition-colors duration-500 reveal`}
                 style={{ animationDelay: `${0.4 + i * 0.15}s` }}>

              {/* Numéro + Titre */}
              <div className="lg:col-span-3">
                <span className="font-space text-xs font-bold text-primary block mb-3">{s.num}</span>
                <h2 className="font-inter font-black text-2xl md:text-3xl uppercase tracking-tight text-on-surface">
                  {s.title}
                </h2>
              </div>

              {/* Contenu */}
              <div className="lg:col-span-6 space-y-8">
                <div>
                  <p className="font-space text-[10px] uppercase tracking-[0.25em] text-primary mb-2">Pour qui</p>
                  <p className="font-space text-secondary text-sm leading-relaxed">{s.pourQui}</p>
                </div>
                <div>
                  <p className="font-space text-[10px] uppercase tracking-[0.25em] text-primary mb-2">Ce que je fais</p>
                  <p className="font-space text-secondary text-sm leading-relaxed">{s.ceFaireDesc}</p>
                </div>
                <div>
                  <p className="font-space text-[10px] uppercase tracking-[0.25em] text-primary mb-2">Ce que tu reçois</p>
                  <p className="font-space text-on-surface text-sm leading-relaxed font-medium">{s.ceRecois}</p>
                </div>
              </div>

              {/* Outils + CTA */}
              <div className="lg:col-span-3 flex flex-col justify-between gap-8">
                <div>
                  <p className="font-space text-[10px] uppercase tracking-[0.25em] text-primary mb-3">Outils</p>
                  <div className="flex flex-wrap gap-2">
                    {s.outils.map((o) => (
                      <span key={o} className="px-3 py-1 bg-surface-container font-space text-[10px] uppercase tracking-widest text-on-surface-variant border border-outline-variant/50">
                        {o}
                      </span>
                    ))}
                  </div>
                </div>
                <Link
                  to="/contact"
                  className="group/btn relative inline-flex items-center justify-center bg-primary-container text-white px-6 py-3 font-space font-bold uppercase tracking-widest text-xs overflow-hidden w-fit"
                >
                  <span className="relative z-10">Démarrer un projet</span>
                  <div className="absolute inset-0 bg-[#d94a12] translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300"></div>
                </Link>
              </div>

              {/* Ligne de progression au hover */}
              <div className="lg:col-span-12">
                <div className="h-[1px] w-0 bg-primary group-hover:w-full transition-all duration-700 mt-2"></div>
              </div>
            </div>
          ))}
          <div className="border-t border-outline-variant/30" />
        </div>

      <CTABanner 
        title="Un projet qui ne rentre pas<br />dans ces cases ? Parlons-en."
        buttonText="On en parle ?"
      />
    </>
  );
}
