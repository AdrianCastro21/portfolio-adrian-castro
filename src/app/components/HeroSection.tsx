import { motion } from "motion/react";
import { ArrowRight, Download } from "lucide-react";
import profileImg from "../../assets/Adrian_Profilepic.JPG";
import cvPdf from "../../assets/CV_Adrian_Castro_ProductDesigner_2026.pdf";
import { useLanguage } from "../i18n/LanguageContext";

export function HeroSection() {
  const { language } = useLanguage();
  const copy = {
    es: {
      badge: "Product Designer en Ciudad de México",
      titleStart: "Diseño productos digitales que transforman",
      titleHighlight: "procesos complejos",
      titleEnd: "en soluciones claras.",
      description: "Product Designer especializado en UX/UI y estrategia, conectando negocio, tecnología y necesidades de usuario.",
      bullets: [
        "Traducir ambigüedad en sistemas estructurados",
        "Liderar ciclos de diseño de inicio a fin",
        "Impulsar impacto de negocio mediante validación con usuarios",
      ],
      viewWork: "Ver casos de estudio",
      downloadCv: "Descargar CV",
      imageAlt: "Product Designer",
      currentExploration: "Explorando actualmente",
      explorationTopic: "Proceso de diseño impulsado por IA",
    },
    en: {
      badge: "Product Designer in Mexico City",
      titleStart: "I design digital products that turn",
      titleHighlight: "complex processes",
      titleEnd: "into clear solutions.",
      description: "Product Designer specialized in UX/UI and strategy, connecting business goals, technology, and user needs.",
      bullets: [
        "Translate ambiguity into structured systems",
        "Lead end-to-end design cycles",
        "Drive business impact through user validation",
      ],
      viewWork: "View case studies",
      downloadCv: "Download CV",
      imageAlt: "Product Designer",
      currentExploration: "Currently exploring",
      explorationTopic: "AI-assisted design workflows",
    },
  }[language];

  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Subtle psychedelic background blur */}
      <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-indigo-500/20 rounded-full blur-[120px] mix-blend-multiply opacity-70 animate-pulse" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-rose-500/20 rounded-full blur-[120px] mix-blend-multiply opacity-70" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-sm font-medium text-slate-900 dark:text-slate-100 mb-6">
              <span className="w-2 h-2 rounded-full bg-indigo-500" />
              {copy.badge}
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 dark:text-white mb-6 leading-[1.1]">
              {copy.titleStart}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-rose-500">
                {copy.titleHighlight}
              </span>{" "}
              {copy.titleEnd}
            </h1>
            
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-xl leading-relaxed">
              {copy.description}
            </p>

            <ul className="space-y-3 mb-10 text-slate-700 dark:text-slate-300">
              <li className="flex items-center gap-3">
                <ArrowRight className="w-5 h-5 text-indigo-500" />
                <span>{copy.bullets[0]}</span>
              </li>
              <li className="flex items-center gap-3">
                <ArrowRight className="w-5 h-5 text-indigo-500" />
                <span>{copy.bullets[1]}</span>
              </li>
              <li className="flex items-center gap-3">
                <ArrowRight className="w-5 h-5 text-indigo-500" />
                <span>{copy.bullets[2]}</span>
              </li>
            </ul>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/#work"
                className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-slate-900 px-8 text-lg font-medium text-white transition-colors hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-200"
              >
                {copy.viewWork} <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href={cvPdf}
                download="CV_Adrian_Castro_ProductDesigner_2026.pdf"
                className="inline-flex h-14 items-center justify-center gap-2 rounded-full border border-slate-200 px-8 text-lg font-medium transition-colors hover:bg-slate-100 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 dark:border-slate-800 dark:hover:bg-slate-800 dark:hover:text-slate-50"
              >
                {copy.downloadCv} <Download className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:ml-auto"
          >
            <div className="relative w-full max-w-[480px] aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src={profileImg} 
                alt={copy.imageAlt}
                className="w-full h-full object-cover"
              />
              
              {/* Floating element for visual interest */}
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="absolute bottom-6 left-6 right-6 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md rounded-2xl p-4 shadow-lg border border-slate-200/50 dark:border-slate-700/50 flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-full bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">🔍</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">{copy.currentExploration}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{copy.explorationTopic}</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
