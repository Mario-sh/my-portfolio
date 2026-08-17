"use client";

import { motion } from "framer-motion";
import { Zap, Sparkles, Code2 } from "lucide-react";
import { skills } from "../data/userData";
import { useLanguage } from "../i18n/LanguageContext";

// Icônes Lucide utilisées quand une techno n'a pas de logo de marque disponible
// (voir le commentaire dans userData.ts).
const fallbackIcons = { zap: Zap, sparkles: Sparkles, code: Code2 };

const Skills = () => {
  const { t } = useLanguage();
  return (
    <section id="skills" className="w-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-32 pb-24 min-h-screen text-foreground relative z-10 scroll-mt-32">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-100px" }}
        className="w-full max-w-6xl"
      >
        <div className="flex flex-col items-center mb-12 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl lg:text-6xl font-black mb-6 text-foreground tracking-tighter"
          >
            {t.skills.heading}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-base md:text-lg lg:text-xl text-muted max-w-2xl mx-auto font-medium"
          >
            {t.skills.subheading}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {skills.map((categoryGroup, categoryIndex) => (
            <motion.div
              key={categoryGroup.categoryKey}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.1, duration: 0.6 }}
              className="p-4 rounded-3xl border border-border bg-card flex flex-col"
            >
              <div className="flex items-center gap-4 mb-6">
                <h3 className="font-mono text-sm font-semibold text-blue-600 uppercase tracking-widest pl-3 border-l-2 border-blue-600">
                  {t.skills.categories[categoryGroup.categoryKey]}
                </h3>
              </div>

              <div className="grid grid-cols-4 gap-2">
                {categoryGroup.items.map((item, index) => {
                  const Fallback = item.fallback ? fallbackIcons[item.fallback] : null;
                  return (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05, duration: 0.3 }}
                      className="group flex flex-col items-center gap-2 p-2 rounded-2xl border border-border bg-card hover:bg-card-strong transition-all duration-300"
                    >
                      <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center">
                        {Fallback ? (
                          <Fallback size={20} className="text-muted group-hover:text-foreground transition-colors" />
                        ) : (
                          <img
                            src={"icon" in item ? item.icon : undefined}
                            alt={item.name}
                            className={`w-full h-full object-contain ${"invertDark" in item && item.invertDark ? 'dark:invert' : ''}`}
                          />
                        )}
                      </div>
                      <span className="font-mono text-[10px] sm:text-xs font-medium text-muted group-hover:text-foreground transition-colors text-center uppercase tracking-tighter">
                        {item.name}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
