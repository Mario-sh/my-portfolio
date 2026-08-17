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
      categories: { languages: string; frameworks: string; data: string; devops: string; ai: string; tools: string };
    };
    projects: {
      heading: string;
      subheading: string;
      filterAll: string;
      source: string;
      liveDemo: string;
      viewMore: string;
      fallbackDescription: string;
      categories: { web: string; hackathon: string; university: string };
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
    terminal: {
      welcome: string;
      tryHelp: string;
      helloImAlias: string; // ex. "Hi! I'm " (suivi de l'alias)
      availableCommands: string;
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
      bio: "Je conçois des applications web robustes et j'intègre des capacités IA concrètes : RAG, APIs LLM, automatisation. En formation en architecture logicielle à l'ESGIS, je cherche un stage ou une opportunité pour construire des systèmes qui comptent.",
      ctaWork: "Travaux sélectionnés",
      ctaContact: "Discutons ensemble",
    },
    about: {
      heading: "Qui suis-je ?",
      subheading: "Un aperçu chronologique de mon évolution et de mes réalisations techniques.",
      bioBefore: "Étudiant en 3ᵉ année à ",
      bioAfter:
        ", je me forme à l'architecture logicielle tout en construisant des projets réels, entre applications web fullstack, intégrations d'APIs LLM et automatisation. Mon objectif : devenir Software Engineer spécialisé IA.",
      facts: ["8+ projets", "2 hackathons IA", "2+ ans d'expérience", "20+ technologies", "Bilingue FR/EN"],
      timelineEyebrow: "Parcours",
      readMore: "Lire la suite",
      showLess: "Réduire",
    },
    skills: {
      heading: "Ma Stack",
      subheading: "Une sélection des technologies que j'utilise pour construire des produits performants.",
      categories: { languages: "Langages", frameworks: "Frameworks", data: "Data", devops: "DevOps", ai: "IA", tools: "Outils" },
    },
    projects: {
      heading: "Projets phares",
      subheading: "Un aperçu de mes réalisations les plus marquantes, des applications web aux expérimentations créatives.",
      filterAll: "Tous",
      source: "Code source",
      liveDemo: "Voir le site",
      viewMore: "Voir plus de projets",
      fallbackDescription: "Construire les produits numériques de demain.",
      categories: { web: "Web", hackathon: "Hackathon", university: "Université" },
    },
    contact: {
      heading: "Discutons",
      subheading: "Construisons quelque chose ensemble. Je suis toujours ouvert aux nouvelles opportunités et collaborations.",
      headlineStart: "Construisons de ",
      headlineAccent: "meilleurs",
      headlineEnd: " produits.",
      body: "Ouvert aux opportunités intéressantes, ou simplement à échanger.",
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
    terminal: {
      welcome: "Bienvenue, invité 👋",
      tryHelp: "Tapez help pour voir la liste des commandes.",
      helloImAlias: "Salut ! Je suis ",
      availableCommands: "Commandes disponibles :",
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
      bio: "I build robust web applications and integrate real AI capabilities: RAG, LLM APIs, automation. Currently studying software architecture at ESGIS, I'm looking for an internship or opportunity to build systems that matter.",
      ctaWork: "Selected Works",
      ctaContact: "Start a Conversation",
    },
    about: {
      heading: "Who Am I",
      subheading: "A chronological look at my growth and technical milestones so far.",
      bioBefore: "Third-year student at ",
      bioAfter:
        ", training in software architecture while building real projects, from full-stack web apps to LLM API integrations and automation. My goal: becoming a Software Engineer specialized in AI.",
      facts: ["8+ projects", "2 AI hackathons", "2+ years experience", "20+ technologies", "Bilingual FR/EN"],
      timelineEyebrow: "Timeline",
      readMore: "Read Insight",
      showLess: "Show Less",
    },
    skills: {
      heading: "My Stack",
      subheading: "A curated selection of technologies I use to build high-performance products.",
      categories: { languages: "Languages", frameworks: "Frameworks", data: "Data", devops: "DevOps", ai: "AI", tools: "Tools" },
    },
    projects: {
      heading: "Featured Projects",
      subheading: "A look at my most meaningful work, from web applications to creative experiments.",
      filterAll: "All",
      source: "Source",
      categories: { web: "Web", hackathon: "Hackathon", university: "University" },
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
      body: "Open for interesting opportunities, or just a good conversation.",
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
    terminal: {
      welcome: "Welcome, Guest 👋",
      tryHelp: "Try typing help to see the list of commands.",
      helloImAlias: "Hi! I'm ",
      availableCommands: "Available commands:",
    },
  },
};
