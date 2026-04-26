import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import SectionHeader from '../components/SectionHeader';
import CTABanner from '../components/CTABanner';
import { useLanguage } from '../context/LanguageContext';
import { useTranslation } from '../translations';

export default function Services() {
  const { language } = useLanguage();
  const { t } = useTranslation(language);

  const servicesList = [
    {
      num: '01',
      title: t('services.s1.title'),
      pourQui: t('services.page.s1.pourQui'),
      ceFaireDesc: t('services.page.s1.ceFaireDesc'),
      ceRecois: t('services.page.s1.ceRecois'),
      outils: ['N8N', 'Make', 'Claude API', 'OpenAI', 'Brevo', 'Apollo.io', 'Gmail', 'Google Analytics'],
    },
    {
      num: '02',
      title: t('services.s2.title'),
      pourQui: t('services.page.s2.pourQui'),
      ceFaireDesc: t('services.page.s2.ceFaireDesc'),
      ceRecois: t('services.page.s2.ceRecois'),
      outils: ['Weweb', 'Softr', 'Framer', 'Webflow', 'Xano', 'Airtable', 'Retool', 'Supabase', 'Antigravity'],
    },
    {
      num: '03',
      title: t('services.s3.title'),
      pourQui: t('services.page.s3.pourQui'),
      ceFaireDesc: t('services.page.s3.ceFaireDesc'),
      ceRecois: t('services.page.s3.ceRecois'),
      outils: ['N8N', 'Airtable', 'PostgreSQL', 'Supabase', 'Google Analytics', 'Retool', 'Xano'],
    },
  ];

  return (
    <>
      <SEO 
        title={t('services.page.seoTitle')} 
        description={t('services.page.seoDesc')}
      />
      <SectionHeader 
        label={t('services.page.headerLabel')}
        title={t('services.page.headerTitle')}
        description={t('services.page.headerDesc')}
      />

        {/* Services */}
        <div className="space-y-0 px-6 md:px-12 lg:px-24 max-w-[1600px] mx-auto">
          {servicesList.map((s, i) => (
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
                  <p className="font-space text-[10px] uppercase tracking-[0.25em] text-primary mb-2">{t('services.page.labels.pourQui')}</p>
                  <p className="font-space text-secondary text-sm leading-relaxed">{s.pourQui}</p>
                </div>
                <div>
                  <p className="font-space text-[10px] uppercase tracking-[0.25em] text-primary mb-2">{t('services.page.labels.ceFaireDesc')}</p>
                  <p className="font-space text-secondary text-sm leading-relaxed">{s.ceFaireDesc}</p>
                </div>
                <div>
                  <p className="font-space text-[10px] uppercase tracking-[0.25em] text-primary mb-2">{t('services.page.labels.ceRecois')}</p>
                  <p className="font-space text-on-surface text-sm leading-relaxed font-medium">{s.ceRecois}</p>
                </div>
              </div>

              {/* Outils + CTA */}
              <div className="lg:col-span-3 flex flex-col justify-between gap-8">
                <div>
                  <p className="font-space text-[10px] uppercase tracking-[0.25em] text-primary mb-3">{t('services.page.labels.outils')}</p>
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
                  <span className="relative z-10">{t('services.page.labels.start')}</span>
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
        title={t('services.page.ctaTitle')}
        buttonText={t('services.page.ctaBtn')}
      />
    </>
  );
}
