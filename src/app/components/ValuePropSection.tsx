import { motion } from "motion/react";
import { Lightbulb, Layers, TrendingUp } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";

export function ValuePropSection() {
  const { language } = useLanguage();
  const copy = {
    es: {
      title: "Diseño más allá de interfaces",
      description: "Aporto un enfoque estratégico al diseño para asegurar que cada interfaz sirva a un propósito mayor.",
      values: [
        {
          title: "Pensamiento de producto",
          description: "Enfocarme en el porqué antes del cómo. Alinear necesidades de usuario con objetivos de negocio para construir las soluciones correctas."
        },
        {
          title: "Diseño end-to-end",
          description: "Desde descubrimiento y estrategia hasta UI de alta fidelidad y prototipado. Ownership completo del proceso."
        },
        {
          title: "Impacto medible",
          description: "Traducir decisiones de diseño en métricas como mayor engagement, menos tickets de soporte y mejor conversión."
        }
      ],
    },
    en: {
      title: "Design beyond interfaces",
      description: "I bring a strategic design approach so every interface serves a larger product purpose.",
      values: [
        {
          title: "Product thinking",
          description: "Focusing on the why before the how. Aligning user needs with business goals to build the right solutions."
        },
        {
          title: "End-to-end design",
          description: "From discovery and strategy to high-fidelity UI and prototyping, with full ownership of the design process."
        },
        {
          title: "Measurable impact",
          description: "Translating design decisions into metrics like stronger engagement, fewer support tickets, and better conversion."
        }
      ],
    },
  }[language];

  const values = [
    {
      icon: <Lightbulb className="w-8 h-8 text-indigo-500" />,
      ...copy.values[0],
    },
    {
      icon: <Layers className="w-8 h-8 text-indigo-500" />,
      ...copy.values[1],
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-indigo-500" />,
      ...copy.values[2],
    }
  ];

  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4"
          >
            {copy.title}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600 dark:text-slate-400"
          >
            {copy.description}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.2 }}
              className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-md transition-shadow"
            >
              <div className="w-14 h-14 rounded-2xl bg-indigo-50 dark:bg-indigo-500/10 flex items-center justify-center mb-6">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{value.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
