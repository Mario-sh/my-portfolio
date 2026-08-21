import { useState } from "react";
import Navbar from "./components/Navbar";
import GlobalBackground from "./components/Background";
import BottomNavBar from "./components/BottomNavBar";
import ErrorBoundary from "./components/ErrorBoundary";
import TerminalMode from "./terminal/TerminalMode";
import Hero from "./sections/Hero";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import { useTheme } from "./hooks/useTheme";
import { useLanguage } from "./i18n/LanguageContext";

import { Routes, Route, Link } from "react-router-dom";

const App = () => {
  const { theme, toggleTheme } = useTheme();
  const { t } = useLanguage();

  const [terminalMode, setTerminalMode] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("terminal-mode") === "true";
    }
    return false;
  });

  const handleTerminalToggle = (value: boolean) => {
    setTerminalMode(value);
    localStorage.setItem("terminal-mode", String(value));
  };

  return (
    <div className="w-full min-h-screen bg-background text-foreground relative">
      <GlobalBackground />
      <Navbar
        terminalMode={terminalMode}
        setTerminalMode={handleTerminalToggle}
        theme={theme}
        toggleTheme={toggleTheme}
      />

      <ErrorBoundary>
        {!terminalMode ? (
          <main className="w-full">
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Hero />
                    <About />
                    <Projects limit={4} />
                    <Skills />
                    <Contact />
                    <BottomNavBar />
                  </>
                }
              />
              <Route
                path="/projects"
                element={
                  <div>
                    <Projects />
                    <div className="flex justify-center pb-24">
                      <Link to="/" className="px-8 py-4 rounded-full border border-border text-muted font-bold hover:bg-card hover:text-foreground transition-all">
                        ← {t.nav.backHome}
                      </Link>
                    </div>
                  </div>
                }
              />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        ) : (
          <TerminalMode setTerminalMode={handleTerminalToggle} />
        )}
      </ErrorBoundary>
    </div>
  );
};

export default App;
