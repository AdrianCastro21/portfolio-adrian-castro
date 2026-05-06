import { motion } from "motion/react";
import { Search, PenTool, Layout, CheckCircle2, Rocket } from "lucide-react";

export function ProcessSection() {
  const steps = [
    {
      icon: <Search className="w-6 h-6" />,
      title: "Descubrimiento",
      description: "Entender el problema, las necesidades de usuario y los objetivos de negocio."
    },
    {
      icon: <PenTool className="w-6 h-6" />,
      title: "Definición",
      description: "Sintetizar investigación en hallazgos accionables y requerimientos claros."
    },
    {
      icon: <Layout className="w-6 h-6" />,
      title: "Diseño",
      description: "Prototipado iterativo, desde wireframes de baja fidelidad hasta interfaces pulidas."
    },
    {
      icon: <CheckCircle2 className="w-6 h-6" />,
      title: "Validación",
      description: "Probar con usuarios reales para asegurar que la solución responde al objetivo."
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Entrega",
      description: "Colaborar con ingeniería para asegurar una implementación fluida."
    }
  ];

  return (
    <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-indigo-500/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-rose-500/10 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Cómo trabajo
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 text-lg max-w-2xl mx-auto"
          >
            Un enfoque estructurado y flexible para construir productos que importan.
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row justify-between gap-8 relative">
          {/* Connecting line for desktop */}
          <div className="hidden lg:block absolute top-10 left-[10%] right-[10%] h-[2px] bg-slate-800" />
          
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="relative flex flex-col items-center text-center max-w-[240px] mx-auto lg:mx-0"
            >
              <div className="w-20 h-20 rounded-full bg-slate-800 border-4 border-slate-900 flex items-center justify-center mb-6 relative z-10 text-indigo-400">
                {step.icon}
              </div>
              <div className="absolute top-10 -right-4 w-8 h-[2px] bg-indigo-500 hidden lg:block opacity-0 lg:opacity-100" />
              
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
