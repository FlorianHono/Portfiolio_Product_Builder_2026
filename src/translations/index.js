export const translations = {
  fr: {
    nav: {
      accueil: "Accueil",
      services: "Services",
      projets: "Projets",
      stack: "Stack",
      methode: "Méthode",
      aPropos: "À Propos",
      contact: "Contact",
      launch: "Lancer un projet"
    },
    hero: {
      title: "PRODUCT BUILDER : PLUS VITE SANS ÉQUIPE TECH LOURDE",
      subtitle: "Je transforme vos idées en produits scalables avec l'IA et le No-Code.",
      cta: "Voir mes projets",
      start: "Démarrer un projet",
      faster: "Plus vite",
      noTech: "Sans équipe tech lourde",
      description: "Je construis les systèmes que ton équipe n'a pas le temps de créer, automatisations, agents IA, ainsi que des interfaces. Opérationnel en quelques jours.",
      clientText: "Ils ont gagné du temps :"
    },
    services: {
      title: "Services",
      intro: "Tu veux aller vite, sans recruter une équipe tech. Je construis ce dont tu as besoin et tu gardes la main.",
      s1: {
        title: "Automatisation IA",
        desc: "Tes tâches répétitives tournent en boucle et bouffent du temps à ton équipe. Je les automatise avec l'IA (prospection, reporting, traitement de données) sans que tu aies à t'en occuper.",
        cta: "Voir un exemple"
      },
      s2: {
        title: "Développement Low-Code",
        desc: "Une app interne, un back-office, un outil sur mesure. Développé en quelques jours, pas en plusieurs mois. Sans compromis sur la qualité.",
        cta: "Voir un exemple"
      },
      s3: {
        title: "Reporting & Données",
        desc: "Tu prends des décisions sur des données éparpillées dans dix outils différents. Je centralise tout dans un dashboard clair, en temps réel.",
        cta: "En savoir plus"
      }
    },
    stack: {
      title: "Stack",
      intro: "Des outils choisis pour aller vite, connecter tout, et ne rien casser.",
      i1: { title: "Automations", desc: "Pour que tes processus tournent sans intervention humaine." },
      i2: { title: "Bases de Données", desc: "La colonne vertébrale de chaque produit que je construis." },
      i3: { title: "Intelligence Artificielle", desc: "Des LLMs intégrés directement dans tes outils métier." },
      i4: { title: "No-Code Front", desc: "Des interfaces pro livrées en quelques jours, pas en mois." }
    },
    cta: {
      title: "TU VEUX<br />ALLER PLUS VITE ?",
      subtitle: "Dis-moi ce qui te prend trop de temps. On règle ça ensemble.",
      button: "Lancer le projet"
    },
    footer: {
      rights: "© 2026 FLORIAN HONORÉ. TOUS DROITS RÉSERVÉS.",
      legal: "MENTIONS LÉGALES"
    }
  },
  en: {
    nav: {
      accueil: "Home",
      services: "Services",
      projets: "Projects",
      stack: "Stack",
      methode: "Method",
      aPropos: "About",
      contact: "Contact",
      launch: "Start a project"
    },
    hero: {
      title: "PRODUCT BUILDER: FASTER WITHOUT A HEAVY TECH TEAM",
      subtitle: "I turn your ideas into scalable products using AI and No-Code.",
      cta: "View my projects",
      start: "Start a project",
      faster: "Faster",
      noTech: "Without a heavy tech team",
      description: "I build the systems your team doesn't have time to create, automations, AI agents, and interfaces. Operational in days.",
      clientText: "They saved time:"
    },
    services: {
      title: "Services",
      intro: "You want to move fast, without hiring a tech team. I build what you need and you keep control.",
      s1: {
        title: "AI Automation",
        desc: "Your repetitive tasks eat up your team's time. I automate them with AI (outreach, reporting, data processing) without you having to worry about it.",
        cta: "See an example"
      },
      s2: {
        title: "Low-Code Development",
        desc: "Internal apps, back-offices, custom tools. Developed in days, not months. No compromise on quality.",
        cta: "See an example"
      },
      s3: {
        title: "Reporting & Data",
        desc: "You make decisions based on scattered data. I centralize everything in a clear, real-time dashboard.",
        cta: "Learn more"
      }
    },
    stack: {
      title: "Stack",
      intro: "Tools chosen to go fast, connect everything, and not break anything.",
      i1: { title: "Automations", desc: "So your processes run without human intervention." },
      i2: { title: "Databases", desc: "The backbone of every product I build." },
      i3: { title: "Artificial Intelligence", desc: "LLMs integrated directly into your business tools." },
      i4: { title: "No-Code Front", desc: "Pro interfaces delivered in days, not months." }
    },
    cta: {
      title: "WANT TO<br />MOVE FASTER?",
      subtitle: "Tell me what's taking too much time. Let's fix it together.",
      button: "Start project"
    },
    footer: {
      rights: "© 2026 FLORIAN HONORÉ. ALL RIGHTS RESERVED.",
      legal: "LEGAL NOTICE"
    }
  }
};

export const useTranslation = (language) => {
  const t = (key) => {
    const keys = key.split('.');
    let value = translations[language];
    for (const k of keys) {
      if (value && value[k]) {
        value = value[k];
      } else {
        return key;
      }
    }
    return value;
  };
  return { t };
};
