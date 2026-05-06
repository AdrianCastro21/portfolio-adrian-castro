import { motion } from "motion/react";
import { Briefcase, Code } from "lucide-react";

export function ExperienceSkillsSection() {
  const experiences = [
    {
      role: "Senior Product Designer",
      company: "IDS",
      period: "2021 — Present",
      impact: "Led the design of enterprise management tools, optimizing data entry processes and establishing a unified design system that increased development velocity by 30%."
    },
    {
      role: "UX/UI Designer",
      company: "Keobra / Cemex",
      period: "2018 — 2021",
      impact: "Spearheaded digital transformation initiatives, converting legacy systems into modern web applications for the construction sector."
    },
    {
      role: "Product Designer",
      company: "Freelance / EdTech",
      period: "2016 — 2018",
      impact: "Partnered with early-stage startups to validate ideas, design MVPs, and launch educational platforms."
    }
  ];

  const skillCategories = [
    {
      title: "Product & Strategy",
      skills: ["Product Strategy", "Design Sprints", "Agile Methodologies", "Stakeholder Management", "Roadmapping"]
    },
    {
      title: "UX Design",
      skills: ["User Research", "Information Architecture", "Wireframing", "Usability Testing", "Journey Mapping"]
    },
    {
      title: "UI Design",
      skills: ["Design Systems", "Interaction Design", "Prototyping", "Visual Design", "Accessibility (a11y)"]
    },
    {
      title: "Tools & Tech",
      skills: ["Figma", "Miro", "Webflow", "HTML/CSS", "AI Prompts (Midjourney, ChatGPT)"]
    }
  ];

  return (
    <section className="py-24 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          {/* Experience Column */}
          <div>
            <div className="flex items-center gap-4 mb-12">
              <div className="p-3 bg-indigo-50 dark:bg-indigo-900/30 rounded-2xl text-indigo-600 dark:text-indigo-400">
                <Briefcase className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Experience</h2>
            </div>
            
            <div className="space-y-12 relative before:absolute before:inset-0 before:ml-[11px] before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 dark:before:via-slate-800 before:to-transparent">
              {experiences.map((exp, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative pl-8 md:pl-0"
                >
                  <div className="md:flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <div className="absolute left-0 md:left-1/2 w-6 h-6 rounded-full bg-white dark:bg-slate-950 border-4 border-indigo-500 shadow -translate-x-1/2" />
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white">{exp.role}</h3>
                    </div>
                    <span className="text-sm font-medium text-slate-500 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full mt-2 md:mt-0 inline-block">
                      {exp.period}
                    </span>
                  </div>
                  <h4 className="text-indigo-600 dark:text-indigo-400 font-medium mb-3">{exp.company}</h4>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    {exp.impact}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Skills Column */}
          <div>
            <div className="flex items-center gap-4 mb-12">
              <div className="p-3 bg-rose-50 dark:bg-rose-900/30 rounded-2xl text-rose-600 dark:text-rose-400">
                <Code className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Expertise</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {skillCategories.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-3xl border border-slate-100 dark:border-slate-800"
                >
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">{category.title}</h3>
                  <ul className="space-y-2">
                    {category.skills.map((skill, i) => (
                      <li key={i} className="text-slate-600 dark:text-slate-400 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-700" />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}