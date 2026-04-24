import { useEffect } from 'react';

/**
 * SEO Component for managing page titles and meta descriptions.
 * @param {Object} props
 * @param {string} props.title - The title of the page.
 * @param {string} [props.description] - The meta description of the page.
 */
const SEO = ({ title, description }) => {
  useEffect(() => {
    document.title = `${title} | Florian Honoré - Product Builder`;
    
    if (description) {
      updateMetaTag('description', description);
      updateMetaTag('og:description', description, true);
    }
    
    updateMetaTag('og:title', `${title} | Florian Honoré`, true);
    updateMetaTag('og:type', 'website', true);
    updateMetaTag('og:url', window.location.href, true);
    updateMetaTag('og:image', `${window.location.origin}/og-image.png`, true);
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:image', `${window.location.origin}/og-image.png`);

    // JSON-LD Structured Data
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Florian Honoré - Product Builder",
      "url": "https://florian-honore.com/",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://florian-honore.com/search?q={search_term_string}",
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
