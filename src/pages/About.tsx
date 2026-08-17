"use client";

import { motion, AnimatePresence } from "framer-motion";
import { personalInfo } from "../data/userData";
import { timelineContent } from "../i18n/content";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";

const About = () => {
  const [expandedIds, setExpandedIds] = useState<Record<number, boolean>>({});
  const { t, lang } = useLanguage();
  const timeline = timelineContent[lang];

  const toggleExpand = (index: number) => {
    setExpandedIds((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <section id="about" className="w-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-32 pb-24 min-h-screen text-foreground relative z-10 scroll-mt-32">
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
            {t.about.heading}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-base md:text-lg lg:text-xl text-muted max-w-2xl mx-auto font-medium"
          >
            {t.about.subheading}
          </motion.p>
        </div>

        {/* Intro */}
        <div className="grid lg:grid-cols-5 gap-12 items-start mb-12">
          <div className="lg:col-span-3">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-base md:text-xl lg:text-2xl text-muted leading-relaxed font-medium"
            >
              {t.about.bioBefore}
              {personalInfo.collegeUrl ? (
                <a
                  href={personalInfo.collegeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-blue-500 underline decoration-blue-500/30 transition-colors"
                >
                  {personalInfo.college}
                </a>
              ) : (
                <span className="text-foreground font-bold">{personalInfo.college}</span>
              )}
              {t.about.bioAfter}
            </motion.p>
          </div>

          <div className="lg:col-span-2 flex flex-wrap gap-2">
            {t.about.facts.map((fact, i) => (
              <motion.div
                key={fact}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                className="px-4 py-2 rounded-xl font-mono text-xs font-semibold uppercase tracking-widest border border-border bg-card text-muted hover:text-foreground hover:border-blue-500/30 transition-all duration-300"
              >
                {fact}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Timeline Header */}
        <div className="flex flex-col items-center mb-12 text-center">
          <h3 className="font-mono text-sm font-semibold text-blue-600 uppercase tracking-[0.3em]">
            {t.about.timelineEyebrow}
          </h3>
          <div className="h-px w-24 bg-blue-600/30" />
        </div>

        {/* Timeline : ligne centrale, cartes alternées gauche/droite en desktop, colonne unique en mobile */}
        <div className="max-w-4xl mx-auto relative">
          {/* Ligne centrale */}
          <div className="absolute left-4 md:left-1/2 top-2 bottom-2 w-px bg-gradient-to-b from-blue-600/50 via-border to-transparent md:-translate-x-1/2" />

          {timeline.map((item, i) => {
            const hasMore = "more" in item && typeof item.more === "string";
            const isLeft = i % 2 === 0;

            const card = (
              <div className="p-5 rounded-3xl border border-border bg-card hover:bg-card-strong hover:border-blue-500/20 transition-all duration-500 relative overflow-hidden">
                <span className="inline-block mb-2 font-mono text-xs font-semibold text-blue-600 uppercase tracking-widest">
                  {item.year}
                </span>
                <p className="text-lg md:text-xl font-bold text-foreground leading-relaxed">
                  {item.detail}
                </p>

                <AnimatePresence>
                  {expandedIds[i] && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="text-muted mt-2 text-base leading-relaxed"
                    >
                      {item.more}
                    </motion.p>
                  )}
                </AnimatePresence>

                {hasMore && (
                  <button
                    onClick={() => toggleExpand(i)}
                    className="mt-4 flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-widest text-blue-600 hover:text-blue-400 transition-colors"
                  >
                    {expandedIds[i] ? (
                      <><Minus size={14} /> {t.about.showLess}</>
                    ) : (
                      <><Plus size={14} /> {t.about.readMore}</>
                    )}
                  </button>
                )}
              </div>
            );

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: isLeft ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="relative mb-8 last:mb-0 md:grid md:grid-cols-2 md:gap-x-10"
              >
                {/* Point sur la ligne */}
                <span className="absolute left-4 md:left-1/2 top-6 md:top-8 h-3.5 w-3.5 -translate-x-1/2 rounded-full bg-blue-600 border-2 border-background shadow-[0_0_12px_rgba(37,99,235,0.5)] z-10" />

                <div className="pl-12 md:pl-0 md:col-start-1">{isLeft && card}</div>
                <div className="pl-12 md:pl-0 md:col-start-2">{!isLeft && card}</div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

export default About;
