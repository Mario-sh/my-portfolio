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
      fullNameNote: string;
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
      bio: "Étudiant en L3 architecture logicielle à l'ESGIS. Je construis des apps web fullstack et j'intègre des capacités IA concrètes (APIs LLM, assistants contextuels). Ouvert à un stage Software Engineer / AI pour 2026–2027.",
      ctaWork: "Travaux sélectionnés",
      ctaContact: "Discutons ensemble",
    },
    about: {
      heading: "Qui suis-je ?",
      subheading: "Parcours, projets livrés et jalons techniques.",
      bioBefore: "Étudiant en 3ᵉ année à ",
      bioAfter:
        ", je me forme à l'architecture logicielle tout en livrant des projets réels : apps web fullstack, APIs LLM et automatisation. Objectif : Software Engineer spécialisé IA.",
      fullNameNote: "Nom complet : Mario Miguel Dylane Lokossou Soton (alias Dylane Lokossou, Mario Lokossou Soton)",
      facts: ["2 hackathons IA", "Freelance PME 2024–26", "L3 Architecture logicielle", "Bilingue FR/EN"],
      timelineEyebrow: "Parcours",
      readMore: "Lire la suite",
      showLess: "Réduire",
    },
    skills: {
      heading: "Ma Stack",
      subheading: "Technologies que j'utilise au quotidien sur mes projets et missions.",
      categories: { languages: "Langages", frameworks: "Frameworks", data: "Data", devops: "DevOps", ai: "IA", tools: "Outils" },
    },
    projects: {
      heading: "Projets phares",
      subheading: "Apps web, intégrations IA et hackathons — du besoin au déploiement.",
      filterAll: "Tous",
      source: "Code source",
      liveDemo: "Voir le site",
      viewMore: "Voir plus de projets",
      fallbackDescription: "Construire les produits numériques de demain.",
      categories: { web: "Web", hackathon: "Hackathon", university: "Université" },
    },
    contact: {
      heading: "Discutons",
      subheading: "Ouvert à un stage Software Engineer / AI, et aux collaborations intéressantes.",
      headlineStart: "Construisons de ",
      headlineAccent: "meilleurs",
      headlineEnd: " produits.",
      body: "Ouvert à un stage Software Engineer / AI (2026–2027), ou simplement à échanger.",
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
      bio: "Third-year software architecture student at ESGIS. I build full-stack web apps and ship real AI features (LLM APIs, context-aware assistants). Open to a Software Engineer / AI internship for 2026–2027.",
      ctaWork: "Selected Works",
      ctaContact: "Start a Conversation",
    },
    about: {
      heading: "Who Am I",
      subheading: "Path, shipped projects, and technical milestones.",
      bioBefore: "Third-year student at ",
      bioAfter:
        ", training in software architecture while shipping real work: full-stack web apps, LLM APIs, and automation. Goal: Software Engineer specialized in AI.",
      fullNameNote: "Full name: Mario Miguel Dylane Lokossou Soton (aka Dylane Lokossou, Mario Lokossou Soton)",
      facts: ["2 AI hackathons", "Freelance 2024–26", "BSc Software Architecture (Y3)", "Bilingual FR/EN"],
      timelineEyebrow: "Timeline",
      readMore: "Read Insight",
      showLess: "Show Less",
    },
    skills: {
      heading: "My Stack",
      subheading: "Technologies I use day to day on projects and client work.",
      categories: { languages: "Languages", frameworks: "Frameworks", data: "Data", devops: "DevOps", ai: "AI", tools: "Tools" },
    },
    projects: {
      heading: "Featured Projects",
      subheading: "Web apps, AI integrations, and hackathons — from problem to deploy.",
      filterAll: "All",
      source: "Source",
      categories: { web: "Web", hackathon: "Hackathon", university: "University" },
      liveDemo: "Live Demo",
      viewMore: "View More Projects",
      fallbackDescription: "Building the future of digital experiences.",
    },
    contact: {
      heading: "Get In Touch",
      subheading: "Open to a Software Engineer / AI internship, and to collaborations worth shipping.",
      headlineStart: "Let's build ",
      headlineAccent: "better",
      headlineEnd: " products.",
      body: "Open to a Software Engineer / AI internship (2026–2027), or just a good conversation.",
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
