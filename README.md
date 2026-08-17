<p align="center">
  <h2 align="center">Mario Lokossou — Portfolio</h2>
  <p align="center">Full-Stack Engineer · AI Integration</p>
</p>

Portfolio personnel : présentation, parcours, projets, compétences, contact. Mode clair/sombre, bilingue FR/EN, et un easter egg en mode terminal.

## Stack

- React 18 + TypeScript + Vite
- Tailwind CSS (thème clair/sombre par variables CSS)
- Framer Motion
- Polices auto-hébergées : Outfit + JetBrains Mono (`@fontsource`)

## Développement

```bash
git clone https://github.com/Mario-sh/my-portfolio.git
cd my-portfolio
pnpm install
pnpm dev
```

```bash
# Build de production
pnpm build
pnpm preview
```

## Structure

- `src/data/userData.ts` — identité, compétences, contacts
- `src/i18n/` — traductions FR/EN (`translations.ts`) et contenu bilingue (parcours, projets) dans `content.ts`
- `src/pages/`, `src/sections/` — sections du site (Hero, About, Skills, Projects, Contact)
- `src/terminal/` — mode terminal (easter egg)
