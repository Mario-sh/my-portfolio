"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Github, ArrowUpRight } from "lucide-react";
import clsx from "clsx";
import { projectData } from "../data/userData";

const categories = Array.from(new Set(projectData.map((p) => p.category)));

const Projects = ({ limit }: { limit?: number }) => {
  const [activeCategory, setActiveCategory] = useState("all");

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
            Featured Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-base md:text-lg lg:text-xl text-muted max-w-2xl mx-auto font-medium"
          >
            A collection of my most impactful work, from web applications to creative experiments.
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
            All
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
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid gap-4 md:grid-cols-2 max-w-6xl mx-auto sm:px-0">
          {displayProjects.map((project) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="rounded-3xl p-4 border border-border bg-card hover:border-blue-500/30 hover:bg-card-strong transition-all duration-500 text-left flex flex-col h-full group"
            >
              <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-blue-500 transition-colors">{project.name}</h3>
              <p className="text-base text-muted mb-6 flex-grow leading-relaxed">
                {project.description || "Building the future of digital experiences."}
              </p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="bg-card border border-border px-2.5 py-1 rounded-lg font-mono text-[11px] text-muted font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between mt-auto pt-4 border-t border-border">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors font-bold"
                  >
                    <Github size={18} /> Source
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs font-semibold text-blue-600 dark:text-blue-500 hover:text-blue-500 dark:hover:text-blue-400 transition-colors uppercase tracking-widest"
                  >
                    Live Demo →
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {limit && filteredProjects.length > limit && (
          <div className="mt-16 flex justify-center">
            <a
              href="/projects"
              className="px-8 py-3.5 rounded-full border border-border text-foreground font-black text-base transition-all duration-300 hover:bg-card hover:border-blue-500/30 flex items-center gap-2 group"
            >
              View More Projects
              <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>
        )}
      </motion.div>
    </section>
  );
};

export default Projects;
