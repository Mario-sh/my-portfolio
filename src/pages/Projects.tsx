"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Github, ArrowUpRight, Globe, Trophy, GraduationCap } from "lucide-react";
import clsx from "clsx";
import { Link } from "react-router-dom";
import { projectContent, type ProjectEntry } from "../i18n/content";
import { useLanguage } from "../i18n/LanguageContext";

const categories = Array.from(new Set(projectContent.fr.map((p) => p.category))) as ProjectEntry["category"][];

// Classes écrites en toutes lettres (pas de template interpolé) pour que Tailwind les détecte au build.
const categoryStyle: Record<ProjectEntry["category"], { icon: typeof Globe; badge: string; cardBg: string }> = {
  web: { icon: Globe, badge: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20", cardBg: "bg-gradient-to-br from-card via-card to-blue-500/[0.07]" },
  hackathon: { icon: Trophy, badge: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20", cardBg: "bg-gradient-to-br from-card via-card to-amber-500/[0.07]" },
  university: { icon: GraduationCap, badge: "bg-violet-500/10 text-violet-600 dark:text-violet-400 border-violet-500/20", cardBg: "bg-gradient-to-br from-card via-card to-violet-500/[0.07]" },
};

const Projects = ({ limit }: { limit?: number }) => {
  const { t, lang } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<"all" | ProjectEntry["category"]>("all");
  const projectData = projectContent[lang];

  const filteredProjects = projectData.filter(
    (p) => activeCategory === "all" || p.category === activeCategory
  );

  const displayProjects = limit ? filteredProjects.slice(0, limit) : filteredProjects;

  return (
    <section id="projects" className="w-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-32 pb-24 min-h-screen text-foreground relative z-10 scroll-mt-32">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="w-full max-w-6xl"
      >
        <div className="flex flex-col items-center mb-12 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl lg:text-6xl font-black mb-6 text-foreground tracking-tighter"
          >
            {t.projects.heading}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-base md:text-lg lg:text-xl text-muted max-w-2xl mx-auto font-medium"
          >
            {t.projects.subheading}
          </motion.p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-4">
          <button
            onClick={() => setActiveCategory("all")}
            className={clsx(
              "px-4 py-2 rounded-full font-mono text-xs font-semibold transition-all duration-300 uppercase tracking-widest border",
              activeCategory === "all"
                ? "bg-foreground text-background border-foreground"
                : "text-muted border-border hover:border-blue-500/30 hover:text-foreground"
            )}
          >
            {t.projects.filterAll}
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={clsx(
                "px-6 py-2 rounded-full font-mono text-xs font-semibold transition-all duration-300 uppercase tracking-widest border",
                activeCategory === cat
                  ? "bg-foreground text-background border-foreground"
                  : "text-muted border-border hover:border-blue-500/30 hover:text-foreground"
              )}
            >
              {t.projects.categories[cat]}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid gap-4 md:grid-cols-2 max-w-6xl mx-auto sm:px-0">
          {displayProjects.map((project, index) => {
            const { icon: CategoryIcon, badge, cardBg } = categoryStyle[project.category];
            const featured = index === 0;

            return (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className={clsx(
                  "rounded-3xl border border-border hover:border-blue-500/30 transition-all duration-500 text-left flex flex-col h-full group",
                  cardBg,
                  featured ? "p-6 md:col-span-2" : "p-4"
                )}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className={clsx("inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full font-mono text-[10px] font-semibold uppercase tracking-widest border", badge)}>
                    <CategoryIcon size={12} />
                    {t.projects.categories[project.category]}
                  </span>
                </div>

                <h3 className={clsx("font-bold mb-3 text-foreground group-hover:text-blue-500 transition-colors", featured ? "text-3xl" : "text-2xl")}>
                  {project.name}
                </h3>
                <p className={clsx("text-muted mb-6 flex-grow leading-relaxed", featured ? "text-lg max-w-2xl" : "text-base")}>
                  {project.description || t.projects.fallbackDescription}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="bg-card border border-border px-2.5 py-1 rounded-lg font-mono text-[11px] text-muted font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2 mt-auto pt-4 border-t border-border">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full border border-border text-sm font-bold text-muted hover:text-foreground hover:border-blue-500/30 transition-colors"
                    >
                      <Github size={16} /> {t.projects.source}
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-mono text-xs font-semibold uppercase tracking-widest transition-colors ml-auto"
                    >
                      {t.projects.liveDemo}
                      <ArrowUpRight size={14} />
                    </a>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {limit && filteredProjects.length > limit && (
          <div className="mt-16 flex justify-center">
            <Link
              to="/projects"
              className="px-8 py-3.5 rounded-full border border-border text-foreground font-black text-base transition-all duration-300 hover:bg-card hover:border-blue-500/30 flex items-center gap-2 group"
            >
              {t.projects.viewMore}
              <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </div>
        )}
      </motion.div>
    </section>
  );
};

export default Projects;
