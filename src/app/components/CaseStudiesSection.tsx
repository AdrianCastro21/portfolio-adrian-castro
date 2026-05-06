import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import imgProject1 from "figma:asset/25bbf741622842b7d474ce34ff39d9127ba13da3.png";
import imgProject2 from "figma:asset/44587e6a8589f21f0960652efd5c8f32bc55e408.png";
import imgProject3 from "figma:asset/abe65d4d8e3d3ae9eda828545ed2812f6b855410.png";

export function CaseStudiesSection() {
  const projects = [
  {
    title: "HR Management System",
    description: "Transformed manual Excel processes into an automated platform...",
    metrics: ["40% time saved", "Process automation", "Enterprise SaaS"],
    image: imgProject1,
    href: "/case-study/staffing-system",
  },
  {
    title: "Construction Innovation",
    description: "Led Design Sprints to discover new business opportunities...",
    metrics: ["5+ Design Sprints", "Stakeholder alignment", "Rapid Prototyping"],
    image: imgProject2,
    href: "/case-study/construction-innovation",
  },
  {
    title: "EdTech Learning Platform",
    description: "Redesigned the core learning experience...",
    metrics: ["+25% Engagement", "Gamification", "UX Research"],
    image: imgProject3,
    href: "/case-study/meditate-app",
  }
];

  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-16">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4"
            >
              Selected Work
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-slate-600 dark:text-slate-400 max-w-xl"
            >
              A glimpse into how I solve complex problems through design.
            </motion.p>
          </div>
          <motion.a 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            href="#" 
            className="hidden md:flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-semibold hover:gap-3 transition-all"
          >
            View all projects <ArrowUpRight className="w-5 h-5" />
          </motion.a>
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
                View Case Study
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}