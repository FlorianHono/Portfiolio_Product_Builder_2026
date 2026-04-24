import React from 'react';

/**
 * SectionHeader Component for consistent page headers.
 */
const SectionHeader = ({ label, title, description, delay = 1 }) => {
  return (
    <section className="px-6 md:px-12 lg:px-24 pt-12 pb-20 max-w-[1600px] mx-auto">
      {label && (
        <span className={`font-space text-sm tracking-[0.4em] uppercase text-primary mb-5 block font-bold reveal delay-${delay}`}>
          {label}
        </span>
      )}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-6">
        <h1
          className={`font-inter font-black tracking-[-0.04em] text-on-surface leading-none reveal delay-${delay + 1}`}
          style={{ fontSize: 'clamp(2.5rem, 12vw, 8.5rem)', lineHeight: '0.85' }}
        >
          {title}
        </h1>
        {description && (
          <p className={`font-space text-secondary text-base md:text-lg max-w-sm leading-relaxed border-l-2 border-primary pl-6 reveal delay-${delay + 2}`}>
            {description}
          </p>
        )}
      </div>
      <div className="h-px w-full bg-outline-variant/30" />
    </section>
  );
};

export default SectionHeader;
