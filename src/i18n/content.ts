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
      more: "Acquisition de bases solides en réseaux, programmation et algorithmique, ainsi qu'en architecture système et bases de données relationnelles, à travers la résolution de problèmes et des projets concrets.",
    },
    {
      year: "2025",
      detail: "Développeur web chez Ghinel, startup dédiée à la préservation culturelle par la technologie.",
      more: "Contribution au développement de solutions numériques pour valoriser et préserver le patrimoine culturel.",
    },
    {
      year: "2024–2026",
      detail: "Développeur freelance fullstack pour des PME et organisations.",
      more: "Sites sur-mesure de la maquette à la prod (ex. Cécile Goudou, Strateek) — frontend, intégrations et mise en ligne.",
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
      more: "Built solid foundations in networking, programming, and algorithms, as well as system architecture and relational databases, through hands-on problem-solving and real projects.",
    },
    {
      year: "2025",
      detail: "Web developer at Ghinel, a startup focused on cultural preservation through technology.",
      more: "Contributed digital solutions to promote and preserve cultural heritage.",
    },
    {
      year: "2024–2026",
      detail: "Freelance full-stack developer for small businesses and organizations.",
      more: "Custom sites from mockup to production (e.g. Cécile Goudou, Strateek) — frontend, integrations, and deploy.",
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
        "Site et assistant IA pour une agence marketing : frontend React/TS et assistant contextuel (Groq) qui répond 24/7 aux questions sur l'entreprise. Code client non public.",
      tech: ["React", "TypeScript", "API Groq"],
      live: "https://strateek-digitalagency.onrender.com/",
      category: "web",
    },
    {
      name: "Academic Twins",
      description:
        "Plateforme de suivi académique (hackathon HACKBYIFRI) : frontend React/Vite et API Django/DRF avec l'équipe Shadow-404 — démo live disponible.",
      tech: ["React", "Vite", "Django", "DRF"],
      live: "https://academictwins.vercel.app/register",
      github: "https://github.com/Mario-sh/Shadow-404_HACKBYIFRI_2026",
      category: "hackathon",
    },
    {
      name: "Régulation Foncière IA",
      description:
        "App de régulation foncière assistée par l'IA (hackathon ASIN/Luxdev) : React/TS + FastAPI, construite en équipe (Les Mentats) sous contrainte de temps.",
      tech: ["React", "TypeScript", "Python", "FastAPI"],
      live: "https://les-mentats-luxdev-hackaton-ia-2025.vercel.app/",
      github: "https://github.com/elonmelonm/les_mentats-luxdev-hackaton-ia-2025",
      category: "hackathon",
    },
    {
      name: "Cécile Goudou",
      description: "Site vitrine pro pour une journaliste : identité, parcours et contenus, livré en production.",
      tech: [],
      live: "https://cecilegoudou.com",
      category: "web",
    },
    {
      name: "TheSocialNetwork",
      description: "Réseau social type Facebook (projet univ.) : posts, interactions et UI dynamique en PHP/AJAX.",
      tech: ["PHP", "AJAX"],
      github: "https://github.com/Mario-sh/TheSocialNetwork",
      category: "university",
    },
    {
      name: "BiblioTech",
      // TODO: ajouter le lien GitHub une fois le repo publié
      description: "Gestion de bibliothèque (emprunt, catalogue) en Laravel — projet universitaire.",
      tech: ["Laravel"],
      category: "university",
    },
    {
      name: "Sudoku",
      description: "Jeu de Sudoku en Java pour pratiquer la POO et la logique métier.",
      tech: ["Java", "POO"],
      category: "university",
    },
    {
      name: "Démineur",
      description: "Jeu du démineur en C — structures de données et gestion mémoire.",
      tech: ["C"],
      category: "university",
    },
  ],
  en: [
    {
      name: "Strateek",
      description:
        "Website and AI assistant for a marketing agency: React/TS frontend plus a context-aware Groq assistant answering company questions 24/7. Client code is private.",
      tech: ["React", "TypeScript", "Groq API"],
      live: "https://strateek-digitalagency.onrender.com/",
      category: "web",
    },
    {
      name: "Academic Twins",
      description:
        "Academic tracking platform (HACKBYIFRI hackathon): React/Vite frontend and Django/DRF API with the Shadow-404 team — live demo available.",
      tech: ["React", "Vite", "Django", "DRF"],
      live: "https://academictwins.vercel.app/register",
      github: "https://github.com/Mario-sh/Shadow-404_HACKBYIFRI_2026",
      category: "hackathon",
    },
    {
      name: "AI Land Regulation",
      description:
        "AI-assisted land regulation app (ASIN/Luxdev hackathon): React/TS + FastAPI, built with Les Mentats under a tight deadline.",
      tech: ["React", "TypeScript", "Python", "FastAPI"],
      live: "https://les-mentats-luxdev-hackaton-ia-2025.vercel.app/",
      github: "https://github.com/elonmelonm/les_mentats-luxdev-hackaton-ia-2025",
      category: "hackathon",
    },
    {
      name: "Cécile Goudou",
      description: "Professional showcase site for a journalist: brand, career, and content — shipped to production.",
      tech: [],
      live: "https://cecilegoudou.com",
      category: "web",
    },
    {
      name: "TheSocialNetwork",
      description: "Facebook-style social network (university project): posts, interactions, and dynamic UI in PHP/AJAX.",
      tech: ["PHP", "AJAX"],
      github: "https://github.com/Mario-sh/TheSocialNetwork",
      category: "university",
    },
    {
      name: "BiblioTech",
      // TODO: add the GitHub link once the repo is public
      description: "Library management app (loans, catalog) in Laravel — university project.",
      tech: ["Laravel"],
      category: "university",
    },
    {
      name: "Sudoku",
      description: "Sudoku game in Java to practice OOP and game logic.",
      tech: ["Java", "OOP"],
      category: "university",
    },
    {
      name: "Minesweeper",
      description: "Minesweeper in C — data structures and memory handling.",
      tech: ["C"],
      category: "university",
    },
  ],
};
