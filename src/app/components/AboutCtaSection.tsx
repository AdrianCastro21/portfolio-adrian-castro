import { motion } from "motion/react";
import { Mail, Linkedin, ArrowRight } from "lucide-react";
import { Button } from "./Button";

export function AboutCtaSection() {
  return (
    <section className="relative py-24 overflow-hidden bg-slate-950 text-white">
      {/* Psychedelic gradient mesh background */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-[-20%] left-[-10%] w-[70vw] h-[70vw] bg-indigo-600/30 rounded-full blur-[120px] mix-blend-screen animate-pulse" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] bg-rose-600/30 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute top-[20%] right-[20%] w-[50vw] h-[50vw] bg-violet-600/20 rounded-full blur-[100px] mix-blend-screen" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20 bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-3xl text-left"
          >
            <h2 className="text-2xl font-bold mb-4 text-white">Sobre mí</h2>
            <p className="text-lg text-slate-300 leading-relaxed">
              Más allá de los pixeles, me apasiona la intersección entre diseño, tecnología y comportamiento humano.
              Disfruto la innovación y la experimentación, explorando constantemente cómo las tecnologías emergentes,
              especialmente las herramientas y flujos de diseño impulsados por IA, pueden ampliar la creatividad y resolver
              problemas complejos a escala. Cuando no estoy diseñando, probablemente estoy aprendiendo una nueva herramienta
              o acompañando a diseñadores emergentes.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-5xl md:text-7xl font-extrabold mb-8 tracking-tight">
              Construyamos algo <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-rose-400">con significado.</span>
            </h2>
            <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
              Actualmente estoy abierto a nuevas oportunidades y proyectos freelance interesantes.
              Conectemos para conversar cómo puedo ayudar a tu equipo.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button size="lg" className="w-full sm:w-auto gap-2 bg-white text-slate-900 hover:bg-slate-200">
                <Mail className="w-5 h-5" /> Contáctame
              </Button>
              <div className="flex items-center gap-6">
                <a href="#" className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors group">
                  <Linkedin className="w-5 h-5" />
                  <span>LinkedIn</span>
                  <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </a>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
      
      {/* Footer */}
      <div className="absolute bottom-6 w-full text-center text-slate-500 text-sm z-10">
        <p>© {new Date().getFullYear()} • Diseñado con intención.</p>
      </div>
    </section>
  );
}
