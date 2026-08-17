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
  avatarUrl: "/assets/avatar.jpg",
  avatarWebpUrl: "/assets/avatar.webp",
  // Bio (Hero), intro/suite "Who Am I" et badges de facts sont bilingues :
  // voir src/i18n/translations.ts (t.hero.bio / t.about.bioBefore·bioAfter / t.about.facts)
};

// Icônes vérifiées une à une sur cdn.simpleicons.org (certaines marques n'y ont pas d'icône :
// OpenAI a été retiré du dépôt Simple Icons suite à une demande de la marque, Groq et VS Code
// n'y sont simplement pas encore listés. Pour ces trois-là, `fallback` prend le relais dans
// Skills.tsx / CommandData.tsx avec une icône Lucide à la place d'un logo de marque.
type SkillItem = { name: string; icon?: string; invertDark?: boolean; fallback?: "zap" | "sparkles" | "code" };

export const skills: { categoryKey: "languages" | "frameworks" | "data" | "devops" | "ai" | "tools"; items: SkillItem[] }[] = [
  {
    categoryKey: "languages" as const,
    items: [
      { name: "HTML", icon: "https://cdn.simpleicons.org/html5" },
      { name: "CSS", icon: "https://cdn.simpleicons.org/css" },
      { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript" },
      { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript" },
      { name: "PHP", icon: "https://cdn.simpleicons.org/php" },
      { name: "Python", icon: "https://cdn.simpleicons.org/python" },
      { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
      { name: "C / C++", icon: "https://cdn.simpleicons.org/cplusplus" },
      { name: "Shell", icon: "https://cdn.simpleicons.org/gnubash" },
      { name: "Linux", icon: "https://cdn.simpleicons.org/linux", invertDark: true },
    ],
  },
  {
    categoryKey: "frameworks" as const,
    items: [
      { name: "React", icon: "https://cdn.simpleicons.org/react" },
      { name: "Laravel", icon: "https://cdn.simpleicons.org/laravel" },
      { name: "Tailwind CSS", icon: "https://cdn.simpleicons.org/tailwindcss" },
      { name: "Django + DRF", icon: "https://cdn.simpleicons.org/django", invertDark: true },
      { name: "FastAPI", icon: "https://cdn.simpleicons.org/fastapi" },
    ],
  },
  {
    categoryKey: "data" as const,
    items: [
      { name: "MySQL", icon: "https://cdn.simpleicons.org/mysql" },
      { name: "Pandas", icon: "https://cdn.simpleicons.org/pandas", invertDark: true },
    ],
  },
  {
    categoryKey: "devops" as const,
    items: [
      { name: "Docker", icon: "https://cdn.simpleicons.org/docker" },
      { name: "Git", icon: "https://cdn.simpleicons.org/git" },
      { name: "GitHub", icon: "https://cdn.simpleicons.org/github", invertDark: true },
    ],
  },
  {
    categoryKey: "ai" as const,
    items: [
      { name: "Groq", fallback: "zap" as const },
      { name: "OpenAI", fallback: "sparkles" as const },
      { name: "Anthropic", icon: "https://cdn.simpleicons.org/anthropic", invertDark: true },
    ],
  },
  {
    categoryKey: "tools" as const,
    items: [
      { name: "VS Code", fallback: "code" as const },
    ],
  },
];

// Le parcours (timeline) est bilingue : voir src/i18n/content.ts (timelineContent).

export const contactItems = [
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/Mario-sh",
    href: "https://github.com/Mario-sh",
    color: "text-foreground",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/mariolokossou",
    href: "https://www.linkedin.com/in/mariolokossou",
    color: "text-blue-600",
  },
  {
    icon: XIcon,
    label: "X",
    value: "@Ma_rio1",
    href: "https://x.com/Ma_rio1",
    color: "text-foreground",
  },
  {
    icon: Link2Icon,
    label: "Discord",
    value: "_shadow_404",
    // Discord n'expose plus de profil public par pseudo depuis le passage aux "display names" ;
    // pas de lien cliquable possible, on affiche juste le pseudo.
    href: undefined,
    color: "text-indigo-500",
  },
];

// Les projets sont bilingues (nom/description/catégorie) : voir src/i18n/content.ts (projectContent).

// CV par langue : lien externe (CVDesignR) en français, PDF local en anglais.
export const resume = {
  fr: "https://cvdesignr.com/p/6a106e75d946e?hl=fr_FR",
  en: "/assets/Mario_Lokossou_CV_EN_v2.pdf",
};
