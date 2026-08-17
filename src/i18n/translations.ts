export type Lang = "fr" | "en";

export const translations: Record<
  Lang,
  {
    nav: {
      home: string;
      about: string;
      projects: string;
      skills: string;
      contact: string;
      themeToLight: string;
      themeToDark: string;
      toggleTerminal: string;
      toggleLanguage: string;
      backHome: string;
    };
    hero: {
      intro: string; // préfixe affiché uniquement sur mobile, ex. "I'm "
      bio: string;
      ctaWork: string;
      ctaContact: string;
    };
    about: {
      heading: string;
      subheading: string;
      bioBefore: string;
      bioAfter: string;
      facts: string[];
      timelineEyebrow: string;
      readMore: string;
      showLess: string;
    };
    skills: {
      heading: string;
      subheading: string;
    };
    projects: {
      heading: string;
      subheading: string;
      filterAll: string;
      source: string;
      liveDemo: string;
      viewMore: string;
      fallbackDescription: string;
    };
    contact: {
      heading: string;
      subheading: string;
      headlineStart: string;
      headlineAccent: string;
      headlineEnd: string;
      body: string;
      ctaContact: string;
      ctaResume: string;
    };
    notFound: {
      title: string;
      body: string;
      cta: string;
    };
    errorBoundary: {
      title: string;
      body: string;
      cta: string;
    };
  }
> = {
  fr: {
    nav: {
      home: "Accueil",
      about: "À propos",
      projects: "Projets",
      skills: "Compétences",
      contact: "Contact",
      themeToLight: "Passer en mode clair",
      themeToDark: "Passer en mode sombre",
      toggleTerminal: "Basculer le terminal",
      toggleLanguage: "Switch to English",
      backHome: "Retour à l'accueil",
    },
    hero: {
      intro: "Je suis ",
      bio: "Je conçois des applications web robustes et j'intègre des capacités IA concrètes — RAG, APIs LLM, automatisation. En formation en architecture logicielle à l'ESGIS, je cherche un stage ou une opportunité pour construire des systèmes qui comptent.",
      ctaWork: "Travaux sélectionnés",
      ctaContact: "Discutons ensemble",
    },
    about: {
      heading: "Qui suis-je",
      subheading: "Un parcours chronologique à travers mon évolution professionnelle et mes réalisations techniques.",
      bioBefore: "Étudiant en 3ème année à ",
      bioAfter:
        ", je me forme à l'architecture logicielle tout en construisant des projets réels — applications web fullstack, intégrations d'APIs LLM, automatisation. Mon objectif : devenir Software Engineer spécialisé IA.",
      facts: ["Étudiant", "Développeur Web & Logiciel", "Passionné d'IA", "Hackathons IA", "Futur AI Engineer"],
      timelineEyebrow: "Parcours",
      readMore: "Lire la suite",
      showLess: "Réduire",
    },
    skills: {
      heading: "Ma Stack",
      subheading: "Une sélection des technologies que j'utilise pour construire des produits performants.",
    },
    projects: {
      heading: "Projets phares",
      subheading: "Une sélection de mes réalisations les plus significatives, des applications web aux expérimentations.",
      filterAll: "Tous",
      source: "Code source",
      liveDemo: "Voir le site",
      viewMore: "Voir plus de projets",
      fallbackDescription: "Construire les produits numériques de demain.",
    },
    contact: {
      heading: "Discutons",
      subheading: "Construisons quelque chose ensemble. Je suis toujours ouvert aux nouvelles opportunités et collaborations.",
      headlineStart: "Construisons de ",
      headlineAccent: "meilleurs",
      headlineEnd: " produits.",
      body: "Ouvert aux opportunités intéressantes ou simplement à une conversation.",
      ctaContact: "Discutons ensemble",
      ctaResume: "CV",
    },
    notFound: {
      title: "Page introuvable",
      body: "Cette page n'existe pas ou a été déplacée.",
      cta: "Retour à l'accueil",
    },
    errorBoundary: {
      title: "Un problème est survenu",
      body: "Quelque chose s'est mal passé pendant l'affichage de cette page.",
      cta: "Retour à l'accueil",
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      projects: "Projects",
      skills: "Skills",
      contact: "Contact",
      themeToLight: "Switch to light mode",
      themeToDark: "Switch to dark mode",
      toggleTerminal: "Toggle terminal",
      toggleLanguage: "Passer en français",
      backHome: "Back to home",
    },
    hero: {
      intro: "I'm ",
      bio: "I build robust web applications and integrate real AI capabilities — RAG, LLM APIs, automation. Currently studying software architecture at ESGIS, I'm looking for an internship or opportunity to build systems that matter.",
      ctaWork: "Selected Works",
      ctaContact: "Start a Conversation",
    },
    about: {
      heading: "Who Am I",
      subheading: "A chronological journey through my professional growth and engineering milestones.",
      bioBefore: "Third-year student at ",
      bioAfter:
        ", training in software architecture while building real projects — full-stack web apps, LLM API integrations, automation. My goal: becoming a Software Engineer specialized in AI.",
      facts: ["Student", "Web & Software Developer", "AI Enthusiast", "AI Hackathons", "Future AI Engineer"],
      timelineEyebrow: "Timeline",
      readMore: "Read Insight",
      showLess: "Show Less",
    },
    skills: {
      heading: "My Stack",
      subheading: "A curated selection of technologies I use to build high-performance products.",
    },
    projects: {
      heading: "Featured Projects",
      subheading: "A collection of my most impactful work, from web applications to creative experiments.",
      filterAll: "All",
      source: "Source",
      liveDemo: "Live Demo",
      viewMore: "View More Projects",
      fallbackDescription: "Building the future of digital experiences.",
    },
    contact: {
      heading: "Get In Touch",
      subheading: "Let's build something great together. I'm always open to new opportunities and collaborations.",
      headlineStart: "Let's build ",
      headlineAccent: "better",
      headlineEnd: " products.",
      body: "Open for interesting opportunities or just a meaningful chat.",
      ctaContact: "Start a Conversation",
      ctaResume: "Resume",
    },
    notFound: {
      title: "Page not found",
      body: "This page doesn't exist or has moved.",
      cta: "Back to home",
    },
    errorBoundary: {
      title: "Something went wrong",
      body: "Something broke while rendering this page.",
      cta: "Back to home",
    },
  },
};
