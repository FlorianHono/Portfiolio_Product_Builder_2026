import SEO from '../components/SEO';
import { useLanguage } from '../context/LanguageContext';
import { useTranslation } from '../translations';
import React from 'react';

export default function MentionsLegales() {
  const { language } = useLanguage();
  const { t } = useTranslation(language);

  const sections = [
    {
      num: '01',
      title: t('mentions.sections.s1.title'),
      content: (
        <div className="space-y-1">
          <p>{t('mentions.sections.s1.lines.0')}</p>
          <p>{t('mentions.sections.s1.lines.1')}</p>
          <p>{t('mentions.sections.s1.lines.2')}</p>
          <p>{t('mentions.sections.s1.lines.3')}</p>
          <p>{t('mentions.sections.s1.lines.4')}<a href="tel:+33768717015" className="text-primary hover:underline">+33 7 68 71 70 15</a></p>
          <p>{t('mentions.sections.s1.lines.5')}<a href="mailto:honoreflorian.dwwm@gmail.com" className="text-primary hover:underline">honoreflorian.dwwm@gmail.com</a></p>
          <p>{t('mentions.sections.s1.lines.6')}<a href="https://florianhonore.fr" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">florianhonore.fr</a></p>
        </div>
      ),
    },
    {
      num: '02',
      title: t('mentions.sections.s2.title'),
      content: (
        <div className="space-y-1">
          <p>{t('mentions.sections.s2.lines.0')}</p>
          <p>{t('mentions.sections.s2.lines.1')}</p>
          <p>{t('mentions.sections.s2.lines.2')}<a href="https://www.hostinger.fr" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.hostinger.fr</a></p>
        </div>
      ),
    },
    {
      num: '03',
      title: t('mentions.sections.s3.title'),
      content: (
        <p>{t('mentions.sections.s3.content')}</p>
      ),
    },
    {
      num: '04',
      title: t('mentions.sections.s4.title'),
      content: (
        <p>{t('mentions.sections.s4.content')}<a href="mailto:honoreflorian.dwwm@gmail.com" className="text-primary hover:underline">honoreflorian.dwwm@gmail.com</a></p>
      ),
    },
    {
      num: '05',
      title: t('mentions.sections.s5.title'),
      content: (
        <p>{t('mentions.sections.s5.content')}</p>
      ),
    },
    {
      num: '06',
      title: t('mentions.sections.s6.title'),
      content: (
        <p>{t('mentions.sections.s6.content')}</p>
      ),
    },
    {
      num: '07',
      title: t('mentions.sections.s7.title'),
      content: (
        <p>{t('mentions.sections.s7.content')}</p>
      ),
    },
  ];

  return (
    <div className="w-full">
      <SEO 
        title={t('mentions.seoTitle')} 
        description={t('mentions.seoDesc')}
      />
    <section className="min-h-screen px-6 md:px-12 lg:px-24 py-20 max-w-5xl mx-auto">
      <span className="font-space text-sm tracking-[0.4em] uppercase text-primary mb-6 block font-bold">
        {t('mentions.headerLabel')}
      </span>
      <h1 className="font-inter font-black text-display-3 md:text-display-2 uppercase tracking-tighter text-on-surface mb-16">
        {t('mentions.headerTitle')}
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
