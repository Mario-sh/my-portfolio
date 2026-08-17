import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { translations, type Lang } from "./translations";

type LanguageContextValue = {
  lang: Lang;
  toggleLanguage: () => void;
  t: (typeof translations)[Lang];
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

const getInitialLang = (): Lang => {
  if (typeof window === "undefined") return "fr";
  const saved = localStorage.getItem("lang");
  if (saved === "fr" || saved === "en") return saved;
  // Le site cible d'abord un public francophone (Bénin) ; on ne se cale sur
  // navigator.language que si l'utilisateur est explicitement anglophone.
  return navigator.language?.toLowerCase().startsWith("en") ? "en" : "fr";
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>(getInitialLang);

  useEffect(() => {
    document.documentElement.lang = lang;
    localStorage.setItem("lang", lang);
  }, [lang]);

  const toggleLanguage = () => setLang((l) => (l === "fr" ? "en" : "fr"));

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within a LanguageProvider");
  return ctx;
};
