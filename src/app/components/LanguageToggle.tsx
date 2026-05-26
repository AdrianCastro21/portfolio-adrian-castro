import { useLanguage, type Language } from "../i18n/LanguageContext";

const options: Language[] = ["es", "en"];

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div
      className="flex h-9 items-center rounded-full border border-slate-200 bg-white p-1 text-xs font-semibold text-slate-500 shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400"
      aria-label={language === "es" ? "Cambiar idioma" : "Change language"}
    >
      {options.map((option) => {
        const isActive = option === language;

        return (
          <button
            key={option}
            type="button"
            onClick={() => setLanguage(option)}
            className={`h-7 rounded-full px-3 uppercase transition-colors ${
              isActive
                ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900"
                : "hover:text-slate-900 dark:hover:text-white"
            }`}
            aria-pressed={isActive}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}
