import { useEffect } from 'react';

/**
 * SEO Component for managing page titles and meta descriptions.
 * @param {Object} props
 * @param {string} props.title - The title of the page.
 * @param {string} [props.description] - The meta description of the page.
 */
const SEO = ({ title, description }) => {
  useEffect(() => {
    const baseTitle = "Florian Honoré | Développeur No-Code & Automatisation IA / Intégrateur Web";
    const finalTitle = !title || title === "Florian Honoré" || title === "Accueil" || title === "Home" ? baseTitle : `${title} | ${baseTitle}`;
    
    document.title = finalTitle;
    
    const finalDescription = description || "Je conçois vos sites, apps et automatisations, avec l'IA là où elle sert vraiment. Opérationnel vite, sans usine à gaz. Disponible en freelance, CDD ou CDI, remote ou Île-de-France.";
    
    updateMetaTag('description', finalDescription);
    updateMetaTag('og:description', finalDescription, true);
    
    updateMetaTag('og:title', finalTitle, true);
    updateMetaTag('og:type', 'website', true);
    updateMetaTag('og:url', window.location.href, true);

    // JSON-LD Structured Data
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Florian Honoré | Développeur No-Code & Automatisation IA / Intégrateur Web",
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
    
  }, [title, description]);

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
