"use client";
import { Send } from "lucide-react";
import { motion } from "framer-motion";
import { personalInfo, contactItems } from "../data/userData";
import { useLanguage } from "../i18n/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();

  return (
    <motion.section
      id="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-[90vh] w-full max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-center px-4 sm:px-6 lg:px-8 gap-12 lg:gap-16 relative z-10 pt-24 pb-20 scroll-mt-20"
    >
      {/* Left Content */}
      <div className="flex-1 text-left max-w-2xl space-y-4 relative z-10">
        <div className="space-y-4">
          {/* Name & Role */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8, ease: "circOut" }}
            className="text-4xl sm:text-6xl lg:text-8xl font-black leading-[0.9] tracking-tighter text-foreground"
          >
            <span className="block">
              <span className="sm:hidden">{t.hero.intro}</span>
              {personalInfo.name}
            </span>
            <span className="block text-muted text-2xl sm:text-4xl lg:text-6xl leading-[1.15] font-bold">
              {personalInfo.role}
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-muted leading-relaxed max-w-lg"
          >
            {t.hero.bio}
          </motion.p>
        </div>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center gap-4 pt-4"
        >
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-foreground text-background font-black text-base hover:opacity-90 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 group shadow-xl whitespace-nowrap"
            >
              {t.hero.ctaWork}
            </a>

            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-black text-base transition-all duration-300 flex items-center justify-center gap-2 group shadow-xl shadow-blue-500/20 whitespace-nowrap"
            >
              {t.hero.ctaContact}
              <Send className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={18} />
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-6 sm:gap-5 pt-2 sm:pt-0">
            <div className="h-5 w-px bg-border hidden sm:block" />
            {contactItems
              .filter((i) => ["GitHub", "LinkedIn", "X", "Discord"].includes(i.label))
              .map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted hover:text-foreground transition-all hover:scale-110 active:scale-95"
                  title={item.label}
                >
                  <item.icon size={26} strokeWidth={2.2} />
                </a>
              ))}
          </div>
        </motion.div>
      </div>

      {/* Right: Avatar */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="relative flex-shrink-0"
      >
        <div className="relative group">
          {/* Offset frame: carte décalée derrière la photo, façon pile de fiches */}
          <div className="absolute -bottom-4 -right-4 w-[300px] md:w-[340px] lg:w-[380px] aspect-square rounded-3xl border-2 border-blue-500/30 transition-transform duration-500 group-hover:translate-x-1 group-hover:translate-y-1" />

          {/* Avatar Container */}
          <div className="relative w-[300px] md:w-[340px] lg:w-[380px] aspect-square rounded-3xl overflow-hidden border border-border shadow-2xl bg-card">
            <picture>
              <source srcSet={personalInfo.avatarWebpUrl} type="image/webp" />
              <img
                src={personalInfo.avatarUrl}
                alt={personalInfo.name}
                className="w-full h-full object-cover scale-105 group-hover:scale-100 grayscale group-hover:grayscale-0 transition-all duration-700"
              />
            </picture>

            {/* Overlay Effects */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-background/30 group-hover:via-transparent transition-all duration-700" />
          </div>

          {/* Glow */}
          <div className="absolute -inset-12 bg-blue-500/10 blur-[90px] rounded-full -z-10 opacity-0 group-hover:opacity-80 transition-opacity duration-700" />
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
