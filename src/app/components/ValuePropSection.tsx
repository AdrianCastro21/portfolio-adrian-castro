import { motion } from "motion/react";
import { Lightbulb, Layers, TrendingUp } from "lucide-react";

export function ValuePropSection() {
  const values = [
    {
      icon: <Lightbulb className="w-8 h-8 text-indigo-500" />,
      title: "Product Thinking",
      description: "Focusing on the 'why' before the 'how'. Aligning user needs with business goals to build the right solutions."
    },
    {
      icon: <Layers className="w-8 h-8 text-indigo-500" />,
      title: "End-to-End Design",
      description: "From initial discovery and strategy to high-fidelity UI and prototyping. Complete process ownership."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-indigo-500" />,
      title: "Measurable Impact",
      description: "Translating design decisions into metrics like increased engagement, reduced support tickets, and higher conversion."
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
            Design beyond interfaces
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600 dark:text-slate-400"
          >
            I bring a strategic approach to design, ensuring that every interface serves a larger purpose.
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