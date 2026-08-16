"use client";

import { useState, useEffect } from "react";
import { Terminal, Code2, Github, Sun, Moon } from "lucide-react";
import { contactItems } from "../data/userData";
import type { Theme } from "../hooks/useTheme";

const githubUrl = contactItems.find((i) => i.label === "GitHub")?.href ?? "#";

type Props = {
  terminalMode: boolean;
  setTerminalMode: (v: boolean) => void;
  theme: Theme;
  toggleTheme: () => void;
};

const Navbar = ({ terminalMode, setTerminalMode, theme, toggleTheme }: Props) => {
  const [scrolled, setScrolled] = useState(false);

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
      <div className={`mx-auto transition-all duration-500 ${terminalMode ? "max-w-full px-0 mt-2" : "max-w-7xl px-2 sm:px-4 lg:px-6"
        }`}>
        <div
          className={`relative flex items-center justify-between px-2 sm:px-4 transition-all duration-500 ${terminalMode
            ? "bg-black text-green-400 border-b border-green-500/30 rounded-none py-2"
            : `py-3 rounded-2xl border ${scrolled
              ? "bg-background/80 backdrop-blur-xl border-border shadow-2xl"
              : "bg-transparent border-transparent"
            }`
            }`}
        >
          {/* Logo */}
          <a
            href="/"
            onClick={(e) => {
              if (terminalMode) {
                e.preventDefault();
              }
            }}
            className="flex items-center gap-2 group"
          >
            <div className={`p-2 rounded-xl border transition-all duration-300 ${terminalMode ? "border-green-500/50 bg-green-500/10" : "border-border bg-card group-hover:border-blue-500/50"
              }`}>
              {terminalMode ? (
                <Terminal size={22} className="text-green-500" />
              ) : (
                <Code2 size={22} className="text-blue-500" />
              )}
            </div>
            <div className="relative">
              <span className="font-black text-2xl tracking-tighter uppercase text-foreground flex items-baseline">
                AJ<span className={`text-[17px] ml-0.5 transition-colors ${terminalMode ? "text-muted group-hover:text-green-500" : "text-muted group-hover:text-blue-500"}`}>SEVEN</span>
              </span>
              <div className={`absolute -bottom-0.5 left-0 h-1 rounded-full transition-all duration-300 w-0 group-hover:w-full ${terminalMode ? "bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]" : "bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"}`} />
            </div>
          </a>

          {/* Controls */}
          <div className="flex items-center gap-2">
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-1.5 rounded-xl border border-border bg-card hover:bg-card-strong transition-all group"
            >
              <Github size={22} className="text-muted group-hover:text-foreground transition-colors" />
            </a>

            {!terminalMode && (
              <button
                onClick={toggleTheme}
                className="p-2 rounded-xl border border-border bg-card text-muted hover:text-foreground hover:border-blue-500/30 transition-all duration-300"
                title={theme === "dark" ? "Passer en mode clair" : "Passer en mode sombre"}
              >
                {theme === "dark" ? <Sun size={22} /> : <Moon size={22} />}
              </button>
            )}

            <button
              onClick={() => setTerminalMode(!terminalMode)}
              className={`p-2 rounded-xl border transition-all duration-300 ${terminalMode
                ? "border-green-500/50 bg-green-500/20 text-green-400"
                : "border-border bg-card text-muted hover:text-foreground hover:border-blue-500/30"
                }`}
              title="Basculer le terminal"
            >
              <Terminal size={22} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
