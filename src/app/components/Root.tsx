import { Outlet } from "react-router";
import { ScrollToTop } from "./ScrollToTop";
import { LanguageToggle } from "./LanguageToggle";
import { useLanguage } from "../i18n/LanguageContext";
import { PageTranslator } from "./PageTranslator";

export function Root() {
  const { language } = useLanguage();
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

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 font-sans antialiased text-slate-900 dark:text-slate-50 selection:bg-indigo-500/30">
      <ScrollToTop />
      <PageTranslator />
      {/* Top Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <a href="/" className="font-bold text-xl tracking-tight">Adrián Castro</a>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600 dark:text-slate-300">
            <a href="/#work" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">{copy.projects}</a>
            <a href="/#process" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">{copy.process}</a>
            <a href="/#experience" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">{copy.experience}</a>
            <a href="/#contact" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">{copy.contact}</a>
          </div>
          <div className="flex items-center gap-3">
            <LanguageToggle />
            <a
              href="/#contact"
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
