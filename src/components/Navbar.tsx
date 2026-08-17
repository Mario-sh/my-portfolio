"use client";

import { useState, useEffect } from "react";
import { Terminal, Code2, Github, Sun, Moon, Languages } from "lucide-react";
import { contactItems } from "../data/userData";
import type { Theme } from "../hooks/useTheme";
import { useLanguage } from "../i18n/LanguageContext";

const githubUrl = contactItems.find((i) => i.label === "GitHub")?.href ?? "#";

type Props = {
  terminalMode: boolean;
  setTerminalMode: (v: boolean) => void;
  theme: Theme;
  toggleTheme: () => void;
};

const Navbar = ({ terminalMode, setTerminalMode, theme, toggleTheme }: Props) => {
  const [scrolled, setScrolled] = useState(false);
  const { lang, toggleLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${terminalMode ? "py-0" : scrolled ? "py-3" : "py-4"
        }`}
    >
      <div className={`mx-auto transition-all duration-500 ${terminalMode ? "max-w-full px-0 mt-2" : "max-w-7xl px-1.5 sm:px-4 lg:px-6"
        }`}>
        <div
          className={`relative flex items-center justify-between px-2 sm:px-4 transition-all duration-500 ${terminalMode
            ? "bg-black text-green-400 border-b border-green-500/30 rounded-none py-2"
            : `py-3 rounded-2xl ${scrolled
              ? "bg-background/50 backdrop-blur-xl backdrop-saturate-150 shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_8px_30px_-8px_rgba(0,0,0,0.25)] ring-1 ring-inset ring-white/15 dark:ring-white/10"
              : "bg-transparent"
            }`
            }`}
        >
          {/* Logo */}
          <a
            href="/"
            aria-label={t.nav.backHome}
            onClick={(e) => {
              if (terminalMode) {
                e.preventDefault();
              }
            }}
            className="flex items-center group shrink-0"
          >
            <div className={`p-1.5 sm:p-2 rounded-xl border transition-all duration-300 ${terminalMode ? "border-green-500/50 bg-green-500/10" : "border-border bg-card group-hover:border-blue-500/50"
              }`}>
              {terminalMode ? (
                <Terminal size={18} className="text-green-500 sm:w-[22px] sm:h-[22px]" />
              ) : (
                <Code2 size={18} className="text-blue-500 sm:w-[22px] sm:h-[22px]" />
              )}
            </div>
          </a>

          {/* Controls */}
          <div className="flex items-center gap-1 sm:gap-2 shrink-0">
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 p-1.5 sm:px-3 sm:py-1.5 rounded-xl border border-border bg-card hover:bg-card-strong transition-all group"
            >
              <Github size={17} className="text-muted group-hover:text-foreground transition-colors sm:w-[22px] sm:h-[22px]" />
            </a>

            {!terminalMode && (
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-1 px-1.5 sm:px-3 h-[32px] sm:h-[38px] rounded-xl border border-border bg-card text-muted hover:text-foreground hover:border-blue-500/30 transition-all duration-300"
                title={t.nav.toggleLanguage}
              >
                <Languages size={15} className="sm:w-[18px] sm:h-[18px]" />
                <span className="font-mono text-[10px] sm:text-xs font-semibold uppercase">{lang}</span>
              </button>
            )}

            {!terminalMode && (
              <button
                onClick={toggleTheme}
                className="p-1.5 sm:p-2 rounded-xl border border-border bg-card text-muted hover:text-foreground hover:border-blue-500/30 transition-all duration-300"
                title={theme === "dark" ? t.nav.themeToLight : t.nav.themeToDark}
              >
                {theme === "dark" ? <Sun size={17} className="sm:w-[22px] sm:h-[22px]" /> : <Moon size={17} className="sm:w-[22px] sm:h-[22px]" />}
              </button>
            )}

            <button
              onClick={() => setTerminalMode(!terminalMode)}
              className={`p-1.5 sm:p-2 rounded-xl border transition-all duration-300 ${terminalMode
                ? "border-green-500/50 bg-green-500/20 text-green-400"
                : "border-border bg-card text-muted hover:text-foreground hover:border-blue-500/30"
                }`}
              title={t.nav.toggleTerminal}
            >
              <Terminal size={17} className="sm:w-[22px] sm:h-[22px]" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
