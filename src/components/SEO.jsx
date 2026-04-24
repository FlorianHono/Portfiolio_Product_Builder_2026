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
