import SEO from '../components/SEO';
import SectionHeader from '../components/SectionHeader';
import { useLanguage } from '../context/LanguageContext';
import { useTranslation } from '../translations';

export default function Stack() {
  const { language } = useLanguage();
  const { t } = useTranslation(language);

  return (
    <div className="flex-1 px-6 md:px-12 lg:px-24 py-16 bg-surface">
      <SEO 
        title={t('stack.page.seoTitle')} 
        description={t('stack.page.seoDesc')}
      />
      <div className="max-w-6xl mx-auto mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-outline-variant pb-12">
        <div className="max-w-2xl reveal delay-1">
          <span className="font-label text-[10px] uppercase tracking-[0.3em] text-primary mb-4 block">{t('stack.page.sysTech')}</span>
          <h1 className="text-display-2 md:text-display-1 font-headline font-black uppercase tracking-tighter leading-none text-on-surface" dangerouslySetInnerHTML={{ __html: t('stack.page.h1') }}></h1>
        </div>
        <div className="md:text-right reveal delay-2">
          <p className="font-label text-sm uppercase tracking-widest text-secondary max-w-xs mb-4">
              {t('stack.page.desc')}
          </p>
          <div className="flex gap-2 justify-start md:justify-end">
            <div className="h-[1px] w-12 bg-primary self-center"></div>
            <span className="font-label text-xs uppercase tracking-widest">{t('stack.page.version')}</span>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-px bg-outline-variant border border-outline-variant reveal delay-3">
        <div className="md:col-span-8 bg-surface-container-lowest p-8 flex flex-col justify-between min-h-[320px]">
          <div className="flex justify-between items-start">
            <div className="font-label text-3xl font-light text-outline-variant">01</div>
            <div className="flex gap-2">
              <span className="bg-primary-container text-on-primary-container px-3 py-1 font-label text-[10px] font-bold tracking-widest uppercase">{t('stack.page.labels.advanced')}</span>
            </div>
          </div>
          <div>
            <h3 className="font-headline text-4xl font-bold uppercase tracking-tight mb-4">{t('stack.page.labels.llm')}</h3>
            <div className="flex flex-wrap gap-4 items-center">
              <span className="font-label text-lg tracking-widest uppercase">Claude</span>
              <span className="w-1.5 h-1.5 bg-outline-variant rounded-full"></span>
              <span className="font-label text-lg tracking-widest uppercase text-secondary">OpenAI</span>
              <span className="w-1.5 h-1.5 bg-outline-variant rounded-full"></span>
              <span className="font-label text-lg tracking-widest uppercase">Prompt Eng.</span>
            </div>
          </div>
        </div>

        <div className="md:col-span-4 bg-surface-container p-8 flex items-center justify-center relative overflow-hidden group">
          <img className="object-cover w-full h-full opacity-30 grayscale contrast-125 absolute inset-0" alt="Abstract neural networks" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCiCrpJ0Z_IuGFopYUZBaaIp7CPVDL0S2QzEf11jYSBroBkNsv2xy8ZXplJR9BQ6YDGtMF1LGq5pQ1MSs0xyQ1DVU7GwkTJVvxCwzNkZ9ZxN0_F3SP-O7FHUsuA_0trwLGzXjz2Q0K2RHp9qlaskWPIN-4Ci3Y0sxY0J7LmnlXYx8Sy3MOsKUjf3sc8Q_7wcoX96KH6xowrE_uIwKDvuNrzJ5b7Muu69vEbCepCA5JjbF3Yb_33BkL6WxV9gWY2YI2xB7RU4rkVD5w" loading="lazy"/>
          <div className="relative z-10 text-center">
            <span className="material-symbols-outlined text-4xl text-primary">psychology</span>
          </div>
        </div>

        <div className="md:col-span-4 bg-surface-container-high p-8 border-t md:border-t-0 border-outline-variant flex flex-col justify-between min-h-[320px]">
          <div className="flex justify-between items-start">
            <div className="font-label text-3xl font-light text-outline-variant">02</div>
            <span className="bg-primary-container text-on-primary-container px-3 py-1 font-label text-[10px] font-bold tracking-widest uppercase">{t('stack.page.labels.advanced')}</span>
          </div>
          <div>
            <h3 className="font-headline text-3xl font-bold uppercase tracking-tight mb-4">{t('stack.page.labels.automation')}</h3>
            <p className="font-label text-sm uppercase tracking-widest text-secondary mb-2">n8n, MAKE</p>
          </div>
        </div>

        <div className="md:col-span-4 bg-surface-container-lowest p-8 border-t border-l border-outline-variant flex flex-col justify-between min-h-[320px]">
          <div className="flex justify-between items-start">
            <div className="font-label text-3xl font-light text-outline-variant">03</div>
            <span className="bg-primary-container text-on-primary-container px-3 py-1 font-label text-[10px] font-bold tracking-widest uppercase">{t('stack.page.labels.intermediate')}</span>
          </div>
          <div>
            <h3 className="font-headline text-3xl font-bold uppercase tracking-tight mb-4">{t('stack.page.labels.backend')}</h3>
            <p className="font-label text-sm uppercase tracking-widest text-secondary">Xano, Airtable, Supabase</p>
          </div>
        </div>

        <div className="md:col-span-4 bg-surface-container-low p-8 border-t border-l border-outline-variant flex flex-col justify-between min-h-[320px]">
          <div className="flex justify-between items-start">
            <div className="font-label text-3xl font-light text-outline-variant">04</div>
            <span className="bg-primary-container text-on-primary-container px-3 py-1 font-label text-[10px] font-bold tracking-widest uppercase">{t('stack.page.labels.intermediate')}</span>
          </div>
          <div>
            <h3 className="font-headline text-3xl font-bold uppercase tracking-tight mb-4">{t('stack.page.labels.frontend')}</h3>
            <p className="font-label text-sm uppercase tracking-widest text-secondary">Figma, Framer, Webflow, Weweb</p>
          </div>
        </div>

        <div className="md:col-span-6 bg-surface-container-lowest p-8 border-t border-outline-variant flex flex-col justify-between min-h-[320px]">
          <div className="flex justify-between items-start">
            <div className="font-label text-3xl font-light text-outline-variant">05</div>
            <div className="flex gap-2">
              <span className="bg-primary-container text-on-primary-container px-3 py-1 font-label text-[10px] font-bold tracking-widest uppercase">{t('stack.page.labels.intermediate')}</span>
            </div>
          </div>
          <div>
            <h3 className="font-headline text-4xl font-bold uppercase tracking-tight mb-6">{t('stack.page.labels.operations')}</h3>
            <div className="grid grid-cols-2 gap-4">
              <span className="font-label text-xs tracking-widest uppercase border-b border-outline-variant pb-1">Retool</span>
              <span className="font-label text-xs tracking-widest uppercase border-b border-outline-variant pb-1">Freshdesk</span>
              <span className="font-label text-xs tracking-widest uppercase border-b border-outline-variant pb-1">Apollo</span>
              <span className="font-label text-xs tracking-widest uppercase border-b border-outline-variant pb-1">GA4 / Brevo</span>
            </div>
          </div>
        </div>

        <div className="md:col-span-3 bg-surface-container-high p-8 border-t border-l border-outline-variant flex flex-col justify-between min-h-[320px]">
          <div className="flex justify-between items-start">
            <div className="font-label text-3xl font-light text-outline-variant">06</div>
            <span className="bg-primary-container text-on-primary-container px-3 py-1 font-label text-[10px] font-bold tracking-widest uppercase">{t('stack.page.labels.advanced')}</span>
          </div>
          <div>
            <h3 className="font-headline text-2xl font-bold uppercase tracking-tight mb-4">{t('stack.page.labels.cms')}</h3>
            <p className="font-label text-sm uppercase tracking-widest text-secondary">Softr, Wordpress</p>
          </div>
        </div>

        <div className="md:col-span-3 bg-[#1a1c1b] text-[#faf9f7] p-8 border-t md:border-l border-outline-variant flex flex-col justify-between min-h-[320px]">
          <div className="flex justify-between items-start">
            <div className="font-label text-3xl font-light text-neutral-600">07</div>
            <span className="bg-primary-container text-white px-2 py-1 font-label text-[8px] font-bold tracking-widest uppercase">{t('stack.page.labels.labs')}</span>
          </div>
          <div>
            <h3 className="font-headline text-2xl font-bold uppercase tracking-tight mb-4">{t('stack.page.labels.prototyping')}</h3>
            <p className="font-label text-sm uppercase tracking-widest text-neutral-400">Stitch, Antigravity</p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-16 flex flex-col md:flex-row justify-between items-start gap-8 opacity-60">
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined text-sm">info</span>
          <p className="font-label text-[10px] uppercase tracking-widest leading-relaxed" dangerouslySetInnerHTML={{ __html: t('stack.page.labels.info') }}>
          </p>
        </div>
        <div className="flex flex-col items-end">
          <span className="font-label text-[10px] uppercase tracking-[0.2em] font-bold text-primary">{t('stack.page.labels.dispTech')}</span>
          <span className="font-label text-2xl font-black uppercase tracking-tighter">{t('stack.page.labels.date')}</span>
        </div>
      </div>
    </div>
  );
}
