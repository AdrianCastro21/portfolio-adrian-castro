import React from "react";

export type Language = "es" | "en";

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
};

const LanguageContext = React.createContext<LanguageContextValue | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = React.useState<Language>(() => {
    if (typeof window === "undefined") return "es";
    const savedLanguage = window.localStorage.getItem("portfolio-language");
    return savedLanguage === "en" ? "en" : "es";
  });

  const setLanguage = React.useCallback((nextLanguage: Language) => {
    setLanguageState(nextLanguage);
    window.localStorage.setItem("portfolio-language", nextLanguage);
    document.documentElement.lang = nextLanguage;
  }, []);

  React.useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = React.useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }

  return context;
}
