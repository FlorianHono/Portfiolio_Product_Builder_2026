import SEO from '../components/SEO';
import SectionHeader from '../components/SectionHeader';
import CTABanner from '../components/CTABanner';
import { useLanguage } from '../context/LanguageContext';
import { useTranslation } from '../translations';

export default function Methode() {
  const { language } = useLanguage();
  const { t } = useTranslation(language);

  return (
    <div className="w-full">
      <SEO 
        title={t('methode.seoTitle')} 
        description={t('methode.seoDesc')}
      />
      <SectionHeader 
        label={t('methode.headerLabel')}
        title={t('methode.headerTitle')}
        description={t('methode.headerDesc')}
      />

      {/* Approche Section */}
      <section className="px-6 md:px-12 lg:px-24 pb-32 max-w-[1600px] mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <span className="font-space text-4xl font-black text-outline-variant">01</span>
          <h2 className="font-inter font-black text-3xl uppercase tracking-tighter">{t('methode.approach')}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-outline-variant/30 border border-outline-variant/30">
          <div className="bg-surface p-10 flex flex-col h-full hover:bg-surface-container-lowest transition-colors group reveal delay-2">
            <span className="material-symbols-outlined text-primary mb-6 text-3xl">bolt</span>
            <h3 className="font-inter font-black text-xl uppercase mb-4 tracking-tighter">{t('methode.cards.proto.title')}</h3>
            <p className="font-space text-sm text-secondary leading-relaxed">
              {t('methode.cards.proto.desc')}
            </p>
          </div>

          <div className="bg-surface p-10 flex flex-col h-full hover:bg-surface-container-lowest transition-colors group reveal delay-3">
            <span className="material-symbols-outlined text-primary mb-6 text-3xl">smart_toy</span>
            <h3 className="font-inter font-black text-xl uppercase mb-4 tracking-tighter">{t('methode.cards.ia.title')}</h3>
            <p className="font-space text-sm text-secondary leading-relaxed">
              {t('methode.cards.ia.desc')}
            </p>
          </div>

          <div className="bg-surface p-10 flex flex-col h-full hover:bg-surface-container-lowest transition-colors group reveal delay-4">
            <span className="material-symbols-outlined text-primary mb-6 text-3xl">layers</span>
            <h3 className="font-inter font-black text-xl uppercase mb-4 tracking-tighter">{t('methode.cards.lowcode.title')}</h3>
            <p className="font-space text-sm text-secondary leading-relaxed">
              {t('methode.cards.lowcode.desc')}
            </p>
          </div>

          <div className="bg-surface p-10 flex flex-col h-full hover:bg-surface-container-lowest transition-colors group reveal delay-5">
            <span className="material-symbols-outlined text-primary mb-6 text-3xl">visibility</span>
            <h3 className="font-inter font-black text-xl uppercase mb-4 tracking-tighter">{t('methode.cards.veille.title')}</h3>
            <p className="font-space text-sm text-secondary leading-relaxed">
              {t('methode.cards.veille.desc')}
            </p>
          </div>
        </div>
      </section>

      <CTABanner 
        title={t('methode.ctaTitle')}
        buttonText={t('methode.ctaBtn')}
        href="mailto:honoreflorian.dwwm@gmail.com"
      />
    </div>
  );
}
