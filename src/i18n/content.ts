import type { Lang } from "./translations";

// Parcours et projets sont du contenu rédigé (pas des libellés d'UI), donc traduits
// intégralement plutôt que composés à partir de petits fragments comme dans translations.ts.

export type TimelineEntry = {
  year: string;
  detail: string;
  more?: string;
};

export const timelineContent: Record<Lang, TimelineEntry[]> = {
  fr: [
    {
      year: "2026–2027",
      detail: "Licence 3 — Architecture Logicielle à l'ESGIS Bénin (Cotonou), rentrée en septembre 2026.",
      more: "Deuxième année validée. Formation centrée sur la conception de systèmes robustes, l'architecture logicielle et les bonnes pratiques d'ingénierie.",
    },
    {
      year: "2026",
      detail: "Hackathon HACKBYIFRI : Academic Twins, une plateforme intelligente de suivi académique.",
      more: "Développée en équipe (Shadow-404) : frontend React + Vite, backend Django + DRF.",
    },
    {
      year: "Sept. 2025",
      detail: "Hackathon ASIN (Luxdev) : Régulation Foncière IA, une application de régulation foncière pilotée par l'IA.",
      more: "Stack React TSX, Python et FastAPI, développée en équipe (Les Mentats) sur un temps de hackathon.",
    },
    {
      year: "2025–2026",
      detail: "Licence 2 — Architecture Logicielle à l'ESGIS Bénin (Cotonou), validée.",
    },
    {
      year: "2025",
      detail: "Développeur web chez Ghinel, startup dédiée à la préservation culturelle par la technologie.",
      more: "Développement de solutions numériques pour la valorisation et la préservation du patrimoine culturel.",
    },
    {
      year: "2024–2026",
      detail: "Développeur freelance en fullstack pour des PME et organisations.",
      more: "Conception et développement de sites web sur-mesure, de la maquette à la mise en production.",
    },
    {
      year: "2024–2025",
      detail: "Licence 1 — Développement Web à HENSA Bénin (Godomey).",
      more: "Bases du développement web : algorithmique, structures de données, premiers frameworks.",
    },
    {
      year: "2024",
      detail: "Baccalauréat série D — CPEG La Liberté, Womey.",
    },
  ],
  en: [
    {
      year: "2026–2027",
      detail: "Bachelor's Year 3 — Software Architecture at ESGIS Bénin (Cotonou), starting September 2026.",
      more: "Second year completed. Coursework focused on designing robust systems, software architecture, and engineering best practices.",
    },
    {
      year: "2026",
      detail: "HACKBYIFRI Hackathon: Academic Twins, an intelligent academic tracking platform.",
      more: "Built with a team (Shadow-404): React + Vite frontend, Django + DRF backend.",
    },
    {
      year: "Sept. 2025",
      detail: "ASIN Hackathon (Luxdev): AI Land Regulation, an AI-driven land regulation application.",
      more: "React TSX, Python and FastAPI stack, built with a team (Les Mentats) over the hackathon.",
    },
    {
      year: "2025–2026",
      detail: "Bachelor's Year 2 — Software Architecture at ESGIS Bénin (Cotonou), completed.",
    },
    {
      year: "2025",
      detail: "Web developer at Ghinel, a startup focused on cultural preservation through technology.",
      more: "Building digital solutions to promote and preserve cultural heritage.",
    },
    {
      year: "2024–2026",
      detail: "Freelance full-stack developer for small businesses and organizations.",
      more: "Designing and building custom websites, from mockup to production.",
    },
    {
      year: "2024–2025",
      detail: "Bachelor's Year 1 — Web Development at HENSA Bénin (Godomey).",
      more: "Web development fundamentals: algorithms, data structures, first frameworks.",
    },
    {
      year: "2024",
      detail: "High school diploma (Baccalauréat, science track) — CPEG La Liberté, Womey.",
    },
  ],
};

export type ProjectEntry = {
  name: string;
  description: string;
  tech: string[];
  live?: string;
  github?: string;
  category: "web" | "hackathon" | "university";
};

export const projectContent: Record<Lang, ProjectEntry[]> = {
  fr: [
    {
      name: "Strateek",
      description:
        "Site web et assistant IA pour une agence de marketing digital, avec un assistant contextuel disponible 24h/24 pour répondre aux questions sur l'entreprise.",
      tech: ["React", "TypeScript", "API Groq"],
      live: "https://strateek-digitalagency.onrender.com/",
      // Code non partageable pour raisons de confidentialité client : redirige vers le profil GitHub.
      github: "https://github.com/Mario-sh",
      category: "web",
    },
    {
      name: "Régulation Foncière IA",
      description:
        "Application de régulation foncière pilotée par l'IA, développée lors du hackathon ASIN (Luxdev, septembre 2025).",
      tech: ["React", "TypeScript", "Python", "FastAPI"],
      live: "https://les-mentats-luxdev-hackaton-ia-2025.vercel.app/",
      github: "https://github.com/elonmelonm/les_mentats-luxdev-hackaton-ia-2025",
      category: "hackathon",
    },
    {
      name: "Academic Twins",
      description:
        "Plateforme intelligente de suivi académique, développée avec l'équipe Shadow-404 lors du hackathon HACKBYIFRI.",
      tech: ["React", "Vite", "Django", "DRF"],
      live: "https://academictwins.vercel.app/register",
      github: "https://github.com/Mario-sh/Shadow-404_HACKBYIFRI_2026",
      category: "hackathon",
    },
    {
      name: "Cécile Goudou",
      description: "Site vitrine professionnel pour une journaliste.",
      tech: [],
      live: "https://cecilegoudou.com",
      category: "web",
    },
    {
      name: "TheSocialNetwork",
      description: "Réseau social façon Facebook, développé en PHP et AJAX.",
      tech: ["PHP", "AJAX"],
      github: "https://github.com/Mario-sh/TheSocialNetwork",
      category: "university",
    },
    {
      name: "BiblioTech",
      // TODO: ajouter le lien GitHub une fois le repo publié
      description: "Application de gestion de bibliothèque développée avec Laravel.",
      tech: ["Laravel"],
      category: "university",
    },
    {
      name: "Sudoku",
      description: "Jeu de Sudoku en Java, développé en programmation orientée objet.",
      tech: ["Java", "POO"],
      category: "university",
    },
    {
      name: "Démineur",
      description: "Jeu du démineur développé en C.",
      tech: ["C"],
      category: "university",
    },
  ],
  en: [
    {
      name: "Strateek",
      description:
        "Website and AI assistant for a digital marketing agency, with a context-aware assistant answering company questions around the clock.",
      tech: ["React", "TypeScript", "Groq API"],
      live: "https://strateek-digitalagency.onrender.com/",
      // Code not shareable for client confidentiality reasons: links to the GitHub profile instead.
      github: "https://github.com/Mario-sh",
      category: "web",
    },
    {
      name: "AI Land Regulation",
      description:
        "AI-driven land regulation application, built during the ASIN Hackathon (Luxdev, September 2025).",
      tech: ["React", "TypeScript", "Python", "FastAPI"],
      live: "https://les-mentats-luxdev-hackaton-ia-2025.vercel.app/",
      github: "https://github.com/elonmelonm/les_mentats-luxdev-hackaton-ia-2025",
      category: "hackathon",
    },
    {
      name: "Academic Twins",
      description:
        "Intelligent academic tracking platform, built with the Shadow-404 team during the HACKBYIFRI hackathon.",
      tech: ["React", "Vite", "Django", "DRF"],
      live: "https://academictwins.vercel.app/register",
      github: "https://github.com/Mario-sh/Shadow-404_HACKBYIFRI_2026",
      category: "hackathon",
    },
    {
      name: "Cécile Goudou",
      description: "Professional showcase website for a journalist.",
      tech: [],
      live: "https://cecilegoudou.com",
      category: "web",
    },
    {
      name: "TheSocialNetwork",
      description: "A Facebook-style social network, built with PHP and AJAX.",
      tech: ["PHP", "AJAX"],
      github: "https://github.com/Mario-sh/TheSocialNetwork",
      category: "university",
    },
    {
      name: "BiblioTech",
      // TODO: add the GitHub link once the repo is public
      description: "Library management application built with Laravel.",
      tech: ["Laravel"],
      category: "university",
    },
    {
      name: "Sudoku",
      description: "A Sudoku game in Java, built with object-oriented programming.",
      tech: ["Java", "OOP"],
      category: "university",
    },
    {
      name: "Minesweeper",
      description: "A Minesweeper game built in C.",
      tech: ["C"],
      category: "university",
    },
  ],
};
