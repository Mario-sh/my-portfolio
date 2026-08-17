import {
  Github,
  Linkedin,
  Link2Icon,
} from "lucide-react";
import XIcon from "../components/XIcon";

export const personalInfo = {
  name: "Mario Lokossou",
  // Nom complet, utilisé pour le SEO (meta description, title étendu) plutôt que dans le Hero.
  fullName: "Mario Miguel Dylane Lokossou Soton",
  alias: "Mario",
  location: "Cotonou, Bénin",
  role: "Full-Stack Engineer · AI Integration",
  college: "ESGIS Cotonou",
  // TODO: ajouter l'URL du site de votre école si vous voulez que "ESGIS Cotonou" soit un lien
  collegeUrl: "",
  avatarUrl: "/assets/ME.jpg", // TODO: remplacer par votre photo
  aboutText:
    "Je conçois des applications web robustes et j'intègre des capacités IA concrètes — RAG, APIs LLM, automatisation. En formation en architecture logicielle à l'ESGIS, je cherche un stage ou une opportunité pour construire des systèmes qui comptent.",
  aboutText1: "Étudiant en 3ème année à ",
  aboutText2:
    ", je me forme à l'architecture logicielle tout en construisant des projets réels — applications web fullstack, intégrations d'APIs LLM, automatisation. Mon objectif : devenir Software Engineer spécialisé IA.",
};

// TODO(contenu): skills à remplacer par votre vraie stack (Mario a mentionné web + mobile + IA)
export const skills = [
  {
    category: "Frontend",
    items: [
      { name: "React", icon: "https://cdn.simpleicons.org/react" },
      { name: "Vite", icon: "https://cdn.simpleicons.org/vite" },
      { name: "TailwindCSS", icon: "https://cdn.simpleicons.org/tailwindcss" },
      { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs", invertDark: true },
      { name: "Shadcn-UI", icon: "https://cdn.simpleicons.org/shadcnui", invertDark: true },
      { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript" },
    ],
  },
  {
    category: "Mobile",
    items: [
      { name: "Flutter", icon: "https://cdn.simpleicons.org/flutter" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs" },
      { name: "Express.js", icon: "https://cdn.simpleicons.org/express", invertDark: true },
      { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb" },
      { name: "MySQL", icon: "https://cdn.simpleicons.org/mysql" },
      { name: "PostgreSQL", icon: "https://cdn.simpleicons.org/postgresql" },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Git", icon: "https://cdn.simpleicons.org/git" },
      { name: "Python", icon: "https://cdn.simpleicons.org/python" },
      { name: "Docker", icon: "https://cdn.simpleicons.org/docker" },
      { name: "Prisma", icon: "https://cdn.simpleicons.org/prisma", invertDark: true },
      { name: "Redux/Zustand", icon: "https://cdn.simpleicons.org/redux" },
    ],
  },
];

export const facts = [
  "Étudiant",
  "Développeur Web & Logiciel",
  "Passionné d'IA",
  "Hackathons IA",
  "Futur AI Engineer",
];

// TODO(contenu): timeline à remplacer par votre vrai parcours (hackathons, succès, dates réelles)
export const timeline = [
  {
    year: "2026",
    detail:
      "Focused on mastering advanced tools and preparing for professional opportunities.",
    more:
      "Actively building production-level projects and seeking roles in full-stack development and AI-driven systems.",
  },
  {
    year: "2025",
    detail:
      "Began exploring Artificial Intelligence and its practical applications.",
    more:
      "Studied AI models, experimented with integrations, and built projects to enhance automation and intelligent features.",
  },
  {
    year: "2023",
    detail:
      "Advanced into modern web development by building full-stack projects.",
    more:
      "Worked with frontend and backend technologies, integrating APIs and developing scalable applications.",
  },
  {
    year: "2021",
    detail:
      "Developed multiple CLI-based projects to strengthen problem-solving and coding skills.",
    more:
      "Focused on writing efficient logic, improving debugging ability, and gaining confidence in building functional tools.",
  },
  {
    year: "2020",
    detail:
      "Discovered programming and web development using Termux on mobile.",
    more:
      "Learned core programming concepts, scripting, and built small automation projects to understand real-world applications.",
  },
  {
    year: "2019",
    detail:
      "Started exploring electronics through hands-on DIY projects, focusing on transistor-based circuits and core components.",
    more:
      "Built a strong foundation by understanding how circuits behave at a fundamental level and experimenting with practical implementations.",
  },
];

// TODO(contenu): contactItems à remplacer par vos vrais liens (GitHub, LinkedIn, email, etc.)
export const contactItems = [
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/aj-seven",
    href: "https://github.com/aj-seven",
    color: "text-foreground",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/ajseven",
    href: "https://www.linkedin.com/in/ajseven",
    color: "text-blue-600",
  },
  {
    icon: XIcon,
    label: "X",
    value: "x.com/its_ajseven",
    href: "https://x.com/its_ajseven",
    color: "text-foreground",
  },
  {
    icon: Link2Icon,
    label: "Discord",
    value: "Discord",
    href: "https://discord.com/users/.ajseven",
    color: "text-indigo-500",
  },
];

// TODO(contenu): projectData à remplacer par vos vrais projets
export const projectData = [
  {
    name: "AI-Hub",
    description: "AI Hub - Multi-model assistant for content and chat.",
    tech: ["NextJS", "React", "TypeScript", "TailwindCSS", "Shadcn", "Tauri"],
    live: "https://ai-hubx.vercel.app/",
    github: "https://github.com/aj-seven/ai-hub",
    category: "Web",
  },
  {
    name: "Done Today",
    description: "Track what you achieve every day. One thing at a time.",
    tech: ["NextJS", "React", "TypeScript", "TailwindCSS", "MongoDB"],
    live: "https://done-today.vercel.app",
    github: "https://github.com/donetoday-app/donetoday",
    category: "Web",
  },
  {
    name: "Landing Page",
    description: "Simple Landing Page.",
    tech: [
      "NextJS",
      "React",
      "TypeScript",
      "TailwindCSS",
      "Shadcn",
      "Framer-motion",
    ],
    live: "https://landing-page-ajseven.vercel.app",
    github: "https://github.com/aj-seven/landing-page",
    category: "Web",
  },
  {
    name: "PostalMapper",
    description:
      "A digital address card generator based on postal code with QR support, export options. Built with React & Tailwind.",
    tech: ["React", "TailwindCSS", "QRCode"],
    live: "https://postal-mapper.vercel.app",
    github: "https://github.com/aj-seven/postal-mapper",
    category: "Web",
  },
  {
    name: "Sketchify",
    description: "Convert Images to sketches with Adjustable effects.",
    tech: ["React", "TailwindCSS", "Canvas"],
    live: "https://sketchify-app.vercel.app",
    github: "https://github.com/aj-seven/sketchify",
    category: "Web",
  },
  {
    name: "Task Quest",
    description: "A simple yet modern task tracker built for productivity.",
    tech: ["React", "TailwindCSS"],
    live: "https://task-quest.pages.dev",
    github: "https://github.com/aj-seven/task-quest",
    category: "Web",
  },
  {
    name: "Color Tailor",
    description: "A color palette generator built with React & Tailwind.",
    tech: ["React", "TailwindCSS", "chroma-js"],
    live: "https://color-tailor.vercel.app",
    github: "https://github.com/aj-seven/color-tailor",
    category: "Web",
  },
  {
    name: "Android-Sysinfo",
    description: "A tool that efficiently displays Android system details.",
    tech: ["Linux", "Termux", "Android"],
    github: "https://github.com/aj-seven/Android-Sysinfo",
    category: "CLI",
  },
];

// TODO(contenu): lien vers votre vrai CV
export const resume = {
  "full-stack-developer": "https://rxresu.me/aj-seven/full-stack-developer",
};
