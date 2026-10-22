import { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

/**
 * SEO Component for managing page titles and meta descriptions.
 * @param {Object} props
 * @param {string} props.title - The title of the page.
 * @param {string} [props.description] - The meta description of the page.
 */
const SEO = ({ title, description }) => {
  const { language } = useLanguage();

  useEffect(() => {
    const isEn = language === 'en';
    const baseTitle = isEn
      ? "Florian Honoré | No-Code Developer & AI Automation / Web Integrator"
      : "Florian Honoré | Développeur No-Code & Automatisation IA / Intégrateur Web";

    let finalTitle;
    if (
      !title || 
      title === "Florian Honoré" || 
      title === "Accueil" || 
      title === "Home" || 
      title === baseTitle ||
      title.includes("Florian Honoré | Développeur No-Code") ||
      title.includes("Florian Honoré | No-Code Developer")
    ) {
      finalTitle = baseTitle;
    } else {
      finalTitle = `${title} | ${baseTitle}`;
    }
    
    document.title = finalTitle;
    
    const defaultDesc = isEn
      ? "I build your websites, apps, and automations, with AI plugged in where it actually helps. Operational fast, without bloated systems. Available freelance, contract or perm, remote or Paris area."
      : "Je conçois vos sites, apps et automatisations, avec l'IA là où elle sert vraiment. Opérationnel vite, sans usine à gaz. Disponible en freelance, CDD ou CDI, remote ou Île-de-France.";
      
    const finalDescription = description || defaultDesc;
    
    updateMetaTag('description', finalDescription);
    updateMetaTag('og:description', finalDescription, true);
    
    updateMetaTag('og:title', finalTitle, true);
    updateMetaTag('og:type', 'website', true);
    updateMetaTag('og:url', window.location.href, true);

    // JSON-LD Structured Data
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": baseTitle,
      "description": finalDescription,
      "inLanguage": isEn ? "en" : "fr",
      "url": "https://florianhonore.fr/",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://florianhonore.fr/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    script.id = 'json-ld';
    
    // Remove old script if exists
    const oldScript = document.getElementById('json-ld');
    if (oldScript) oldScript.remove();
    
    document.head.appendChild(script);
    
  }, [title, description, language]);

  const updateMetaTag = (name, content, isProperty = false) => {
    const attr = isProperty ? 'property' : 'name';
    let element = document.querySelector(`meta[${attr}="${name}"]`);
    if (element) {
      element.setAttribute('content', content);
    } else {
      element = document.createElement('meta');
      element.setAttribute(attr, name);
      element.content = content;
      document.head.appendChild(element);
    }
  };

  return null;
};

export default SEO;
