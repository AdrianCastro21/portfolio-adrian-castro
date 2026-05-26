import React from "react";
import { Outlet, useLocation } from "react-router";
import { ScrollToTop } from "./ScrollToTop";
import { LanguageToggle } from "./LanguageToggle";
import { useLanguage } from "../i18n/LanguageContext";
import { PageTranslator } from "./PageTranslator";

export function Root() {
  const { language } = useLanguage();
  const location = useLocation();
  const langQuery = `lang=${language}`;
  const copy = {
    es: {
      projects: "Proyectos",
      process: "Proceso",
      experience: "Experiencia",
      contact: "Contacto",
      talk: "Hablemos",
    },
    en: {
      projects: "Projects",
      process: "Process",
      experience: "Experience",
      contact: "Contact",
      talk: "Let's talk",
    },
  }[language];

  React.useEffect(() => {
    const url = new URL(window.location.href);
    if (url.searchParams.get("lang") !== language) {
      url.searchParams.set("lang", language);
      window.history.replaceState({}, "", url.toString());
    }
  }, [language, location.pathname, location.hash]);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 font-sans antialiased text-slate-900 dark:text-slate-50 selection:bg-indigo-500/30">
      <ScrollToTop />
      <PageTranslator />
      {/* Top Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <a href={`/?${langQuery}`} className="font-bold text-xl tracking-tight">Adrián Castro</a>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600 dark:text-slate-300">
            <a href={`/?${langQuery}#work`} className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">{copy.projects}</a>
            <a href={`/?${langQuery}#process`} className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">{copy.process}</a>
            <a href={`/?${langQuery}#experience`} className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">{copy.experience}</a>
            <a href={`/?${langQuery}#contact`} className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">{copy.contact}</a>
          </div>
          <div className="flex items-center gap-3">
            <LanguageToggle />
            <a
              href={`/?${langQuery}#contact`}
              className="hidden sm:inline-flex px-4 py-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-sm font-medium rounded-full hover:bg-slate-800 dark:hover:bg-slate-200 transition-colors"
            >
              {copy.talk}
            </a>
          </div>
        </div>
      </nav>

      <main className="pt-16">
        <Outlet />
      </main>
      
      {/* Footer is handled per page or here if universal */}
    </div>
  );
}
