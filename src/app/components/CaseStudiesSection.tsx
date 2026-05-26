import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import imgProject1 from "../../assets/Mockup_staffing.png";
import imgProject2 from "../../assets/Mockup_keobra.png";
import imgProject3 from "../../assets/Mockup_meditacion.png";
import { useLanguage } from "../i18n/LanguageContext";

export function CaseStudiesSection() {
  const { language } = useLanguage();
  const copy = {
    es: {
      title: "Proyectos seleccionados",
      description: "Una mirada a cómo resuelvo problemas complejos a través del diseño.",
      viewCase: "Ver caso de estudio",
      projects: [
        {
          title: "Sistema de gestión de RR. HH.",
          description: "Transformé procesos manuales en Excel en una plataforma automatizada...",
          metrics: ["Automatización de procesos", "SaaS empresarial"],
        },
        {
          title: "Arqui Keobra",
          description: "Cree un producto que conecta Arquitectos con personas que construyen...",
          metrics: ["Ux UI Design", "Construcción"],
        },
        {
          title: "Florecer app de meditación",
          description: "Diseñé una experiencia guiada para que principiantes integren la meditación a su rutina diaria...",
          metrics: ["Gamificación", "Meditación"],
        }
      ],
    },
    en: {
      title: "Selected projects",
      description: "A look at how I solve complex problems through design.",
      viewCase: "View case study",
      projects: [
        {
          title: "HR staffing management system",
          description: "I transformed manual Excel-based workflows into an automated platform...",
          metrics: ["Process automation", "Enterprise SaaS"],
        },
        {
          title: "Arqui Keobra",
          description: "I created a product that connects architects with people building their homes...",
          metrics: ["UX/UI Design", "Construction"],
        },
        {
          title: "Florecer meditation app",
          description: "I designed a guided experience to help beginners bring meditation into their daily routine...",
          metrics: ["Gamification", "Meditation"],
        }
      ],
    },
  }[language];

  const projects = [
  {
    ...copy.projects[0],
    image: imgProject1,
    href: "/case-study/staffing-system",
  },
  {
    ...copy.projects[1],
    image: imgProject2,
    href: "/case-study/construction-innovation",
  },
  {
    ...copy.projects[2],
    image: imgProject3,
    href: "/case-study/meditate-app",
  }
];

  return (
    <section id="work" className="py-24 scroll-mt-24">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-16">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4"
            >
              {copy.title}
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-slate-600 dark:text-slate-400 max-w-xl"
            >
              {copy.description}
            </motion.p>
          </div>
          
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.a
             href={project.href}
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="group cursor-pointer flex flex-col h-full"
            >
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden mb-6 bg-slate-100 dark:bg-slate-800">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-slate-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.metrics.map((metric, i) => (
                  <span key={i} className="px-3 py-1 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-xs font-semibold rounded-full">
                    {metric}
                  </span>
                ))}
              </div>
              
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                {project.title}
              </h3>
              
              <p className="text-slate-600 dark:text-slate-400 mb-6 flex-grow">
                {project.description}
              </p>
              
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-white mt-auto group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
                {copy.viewCase}
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
