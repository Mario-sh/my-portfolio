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

import { Routes, Route } from "react-router-dom";

const App = () => {
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
    <div className="w-full min-h-screen bg-[#050505] text-white relative">
      <GlobalBackground />
      <Navbar terminalMode={terminalMode} setTerminalMode={handleTerminalToggle} />

      <ErrorBoundary>
        {!terminalMode ? (
          <main className="w-full">
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <section id="home"><Hero /></section>
                    <section id="about"><About /></section>
                    <section id="projects"><Projects limit={4} /></section>
                    <section id="skills"><Skills /></section>
                    <section id="contact"><Contact /></section>
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
                      <a href="/" className="px-8 py-4 rounded-full border border-white/10 text-zinc-400 font-bold hover:bg-white/5 hover:text-white transition-all">
                        ← Retour à l'accueil
                      </a>
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
