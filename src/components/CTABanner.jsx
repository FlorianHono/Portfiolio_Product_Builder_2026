import React from 'react';
import { Link } from 'react-router-dom';

/**
 * CTABanner Component for the bottom call-to-action section.
 */
const CTABanner = ({ title, subtitle, buttonText = "Démarrer un projet", buttonLink = "/contact", href }) => {
  const buttonClasses = "group relative inline-flex items-center justify-center bg-primary-container text-white px-8 py-4 font-space font-bold uppercase tracking-widest text-xs overflow-hidden flex-shrink-0";
  const buttonContent = (
    <>
      <span className="relative z-10">{buttonText}</span>
      <div className="absolute inset-0 bg-[#d94a12] -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
    </>
  );

  return (
    <section className="bg-on-surface py-20 px-6 md:px-12 lg:px-24 flex flex-col md:flex-row items-center justify-between gap-8 w-full">
      <div className="flex flex-col items-center md:items-start text-center md:text-left">
        <h2 className="font-inter font-black text-display-3 md:text-display-2 uppercase tracking-tighter leading-tight" style={{ color: 'var(--color-surface)' }}>
          {title.split('<br />').map((line, i) => (
            <React.Fragment key={i}>
              {line}
              {i < title.split('<br />').length - 1 && <br />}
            </React.Fragment>
          ))}
        </h2>
        {subtitle && (
          <p className="mt-4 font-space text-secondary-fixed text-sm uppercase tracking-[0.2em] opacity-70">
            {subtitle}
          </p>
        )}
      </div>
      
      {href ? (
        <a href={href} className={buttonClasses}>
          {buttonContent}
        </a>
      ) : (
        <Link to={buttonLink} className={buttonClasses}>
          {buttonContent}
        </Link>
      )}
    </section>
  );
};

export default CTABanner;
