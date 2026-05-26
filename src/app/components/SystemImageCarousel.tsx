import { useState } from "react";
import { ChevronLeft, ChevronRight, Image as ImageIcon } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";

export type SystemImageSlide = {
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
  eyebrow?: string;
  orientation?: "desktop" | "mobile";
  accent?: "indigo" | "lime" | "rose" | "slate";
};

const accentClasses = {
  indigo: "from-indigo-500/20 to-indigo-100 dark:from-indigo-500/20 dark:to-indigo-950/50",
  lime: "from-lime-400/30 to-lime-50 dark:from-lime-400/20 dark:to-lime-950/50",
  rose: "from-rose-400/20 to-rose-50 dark:from-rose-400/20 dark:to-rose-950/50",
  slate: "from-slate-300/40 to-slate-50 dark:from-slate-700/40 dark:to-slate-950",
};

function SampleDesktop({ accent = "indigo" }: { accent?: SystemImageSlide["accent"] }) {
  return (
    <div className={`rounded-2xl bg-gradient-to-br ${accentClasses[accent || "indigo"]} p-4`}>
      <div className="overflow-hidden rounded-xl border border-white/70 bg-white shadow-xl dark:border-slate-700 dark:bg-slate-900">
        <div className="flex h-11 items-center gap-3 border-b border-slate-100 px-4 dark:border-slate-800">
          <span className="h-3 w-3 rounded-full bg-rose-400" />
          <span className="h-3 w-3 rounded-full bg-amber-400" />
          <span className="h-3 w-3 rounded-full bg-emerald-400" />
          <div className="ml-3 h-5 w-40 rounded-md bg-slate-100 dark:bg-slate-800" />
        </div>
        <div className="grid min-h-[360px] grid-cols-[180px_1fr]">
          <div className="border-r border-slate-100 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-950">
            <div className="mb-6 h-9 w-24 rounded-lg bg-slate-900 dark:bg-slate-700" />
            <div className="space-y-3">
              <div className="h-9 rounded-lg bg-indigo-100 dark:bg-indigo-950" />
              <div className="h-9 rounded-lg bg-slate-200/70 dark:bg-slate-800" />
              <div className="h-9 rounded-lg bg-slate-200/70 dark:bg-slate-800" />
              <div className="h-9 rounded-lg bg-slate-200/70 dark:bg-slate-800" />
            </div>
          </div>
          <div className="p-6">
            <div className="mb-6 flex items-start justify-between">
              <div>
                <div className="mb-3 h-7 w-56 rounded-lg bg-slate-200 dark:bg-slate-700" />
                <div className="h-4 w-72 rounded bg-slate-100 dark:bg-slate-800" />
              </div>
              <div className="h-10 w-28 rounded-lg bg-indigo-600" />
            </div>
            <div className="mb-5 grid grid-cols-3 gap-4">
              <div className="h-24 rounded-xl bg-slate-50 dark:bg-slate-800" />
              <div className="h-24 rounded-xl bg-slate-50 dark:bg-slate-800" />
              <div className="h-24 rounded-xl bg-indigo-50 dark:bg-indigo-950/50" />
            </div>
            <div className="space-y-3">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="grid grid-cols-5 gap-4 rounded-lg border border-slate-100 p-3 dark:border-slate-800">
                  <div className="h-4 rounded bg-slate-200 dark:bg-slate-700" />
                  <div className="h-4 rounded bg-slate-200 dark:bg-slate-700" />
                  <div className="h-4 rounded bg-slate-200 dark:bg-slate-700" />
                  <div className="h-4 rounded bg-indigo-100 dark:bg-indigo-900/50" />
                  <div className="h-4 rounded bg-slate-200 dark:bg-slate-700" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SampleMobile({ accent = "lime" }: { accent?: SystemImageSlide["accent"] }) {
  return (
    <div className={`flex justify-center rounded-2xl bg-gradient-to-br ${accentClasses[accent || "lime"]} p-8`}>
      <div className="w-full max-w-[280px] rounded-[2rem] border-4 border-slate-900 bg-white p-4 shadow-2xl dark:border-slate-700 dark:bg-slate-950">
        <div className="mx-auto mb-5 h-5 w-24 rounded-full bg-slate-900 dark:bg-slate-700" />
        <div className="mb-5 h-7 w-40 rounded-lg bg-slate-200 dark:bg-slate-700" />
        <div className="mb-4 grid grid-cols-5 gap-2">
          {[1, 2, 3, 4, 5].map((item) => (
            <div key={item} className="h-10 rounded-full bg-amber-100 dark:bg-amber-950/60" />
          ))}
        </div>
        <div className="mb-5 rounded-2xl bg-[#d6d600] p-5">
          <div className="mb-3 h-5 w-24 rounded bg-white/70" />
          <div className="mb-5 h-8 w-20 rounded bg-white/80" />
          <div className="h-14 rounded-xl bg-white" />
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="h-24 rounded-xl bg-slate-100 dark:bg-slate-800" />
          <div className="h-24 rounded-xl bg-indigo-50 dark:bg-indigo-950" />
        </div>
      </div>
    </div>
  );
}

export function SystemImageCarousel({ slides }: { slides: SystemImageSlide[] }) {
  const { language } = useLanguage();
  const copy = {
    es: {
      sampleImage: "Imagen de muestra",
      previous: "Ver imagen anterior",
      next: "Ver imagen siguiente",
      replace: "Reemplazar por captura final",
      view: "Ver",
    },
    en: {
      sampleImage: "Sample image",
      previous: "View previous image",
      next: "View next image",
      replace: "Replace with final screenshot",
      view: "View",
    },
  }[language];
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSlide = slides[activeIndex];

  const goToPrevious = () => {
    setActiveIndex((current) => (current === 0 ? slides.length - 1 : current - 1));
  };

  const goToNext = () => {
    setActiveIndex((current) => (current === slides.length - 1 ? 0 : current + 1));
  };

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 md:p-6">
      <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            {activeSlide.eyebrow || copy.sampleImage} {activeIndex + 1}/{slides.length}
          </p>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{activeSlide.title}</h3>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-600 dark:text-slate-400">{activeSlide.description}</p>
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={goToPrevious}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition-colors hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-600 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-indigo-950"
            aria-label={copy.previous}
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={goToNext}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-white transition-colors hover:bg-indigo-600 dark:bg-white dark:text-slate-900 dark:hover:bg-indigo-200"
            aria-label={copy.next}
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="relative overflow-hidden rounded-2xl">
        {activeSlide.image ? (
          <div className="bg-slate-100 dark:bg-slate-950">
            <img
              src={activeSlide.image}
              alt={activeSlide.imageAlt || activeSlide.title}
              className={`mx-auto max-h-[620px] w-full object-contain ${activeSlide.orientation === "mobile" ? "max-w-[420px] p-6" : ""}`}
            />
          </div>
        ) : (
          <>
            {activeSlide.orientation === "mobile" ? <SampleMobile accent={activeSlide.accent} /> : <SampleDesktop accent={activeSlide.accent} />}
            <div className="absolute bottom-4 right-4 flex items-center gap-2 rounded-full bg-white/90 px-3 py-2 text-xs font-semibold text-slate-600 shadow-sm backdrop-blur dark:bg-slate-900/90 dark:text-slate-300">
              <ImageIcon className="h-4 w-4" />
              {copy.replace}
            </div>
          </>
        )}
      </div>

      <div className="mt-5 flex justify-center gap-2">
        {slides.map((slide, index) => (
          <button
            key={slide.title}
            type="button"
            onClick={() => setActiveIndex(index)}
            className={`h-2.5 rounded-full transition-all ${index === activeIndex ? "w-8 bg-indigo-600" : "w-2.5 bg-slate-300 dark:bg-slate-700"}`}
            aria-label={`${copy.view} ${slide.title}`}
          />
        ))}
      </div>
    </div>
  );
}
