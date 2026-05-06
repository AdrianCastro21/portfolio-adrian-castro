import { motion } from "motion/react";
import { ArrowLeft, ArrowRight, ArrowUpRight, BarChart3, Users, Briefcase, BoxSelect, CheckCircle2, AlertTriangle, Layers, Shuffle, ShieldCheck } from "lucide-react";
import { Link } from "react-router";
import { Button } from "../components/Button";

export function CaseStudyMeditate() {
  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen">
      {/* 1. Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-20 px-6 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
        <div className="container mx-auto max-w-5xl">
          <Link to="/" className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-indigo-600 mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Volver al portafolio
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-wrap gap-4 mb-6">
              <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-semibold uppercase tracking-wider rounded-full">Caso de estudio</span>
              <span className="px-3 py-1 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-xs font-semibold uppercase tracking-wider rounded-full">Consultoría IT</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight leading-[1.1]">
              Meditate App
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-10 max-w-3xl leading-relaxed">
              Transformando un proceso manual y fragmentado en una plataforma centralizada para la toma de decisiones.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-y border-slate-100 dark:border-slate-800 mb-12">
              <div>
                <p className="text-sm text-slate-500 mb-1">Rol</p>
                <p className="font-semibold text-slate-900 dark:text-white">Product Designer</p>
                <p className="text-sm text-slate-500">End-to-end</p>
              </div>
              <div>
                <p className="text-sm text-slate-500 mb-1">Contexto</p>
                <p className="font-semibold text-slate-900 dark:text-white">Consultoría IT</p>
                <p className="text-sm text-slate-500">Herramienta interna</p>
              </div>
              <div>
                <p className="text-sm text-slate-500 mb-1">Duración</p>
                <p className="font-semibold text-slate-900 dark:text-white">12 semanas</p>
                <p className="text-sm text-slate-500">Descubrimiento a MVP</p>
              </div>
              <div>
                <p className="text-sm text-slate-500 mb-1">Plataforma</p>
                <p className="font-semibold text-slate-900 dark:text-white">App web</p>
                <p className="text-sm text-slate-500">Enfoque desktop</p>
              </div>
            </div>

            {/* Impact Block */}
            <div className="bg-indigo-600 rounded-3xl p-8 md:p-10 text-white shadow-xl shadow-indigo-600/20">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-indigo-200 mb-6">Impacto clave</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                <div className="flex flex-col gap-2">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white mb-2">
                    <Layers className="w-5 h-5" />
                  </div>
                  <p className="font-semibold">Reducido</p>
                  <p className="text-indigo-200 text-sm">el cambio entre sistemas</p>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white mb-2">
                    <BarChart3 className="w-5 h-5" />
                  </div>
                  <p className="font-semibold">Eliminado</p>
                  <p className="text-indigo-200 text-sm">el seguimiento manual</p>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white mb-2">
                    <Users className="w-5 h-5" />
                  </div>
                  <p className="font-semibold">Reducida</p>
                  <p className="text-indigo-200 text-sm">la carga cognitiva</p>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white mb-2">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <p className="font-semibold">Más rápida</p>
                  <p className="text-indigo-200 text-sm">la toma de decisiones</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. TL;DR */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800">
              <div className="w-10 h-10 rounded-full bg-rose-50 dark:bg-rose-900/30 text-rose-500 flex items-center justify-center mb-6">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-lg mb-2">El problema</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                Proceso manual, fragmentado y poco confiable bajo alta presión de tiempo.
              </p>
            </div>
            <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800">
              <div className="w-10 h-10 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-500 flex items-center justify-center mb-6">
                <Shuffle className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-lg mb-2">La solución</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                Sistema centralizado con matching como apoyo para decidir, no como automatización total.
              </p>
            </div>
            <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800">
              <div className="w-10 h-10 rounded-full bg-emerald-50 dark:bg-emerald-900/30 text-emerald-500 flex items-center justify-center mb-6">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-lg mb-2">El resultado</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                Mayor eficiencia operativa y toma de decisiones significativamente más rápida.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. Problem Section & 4. User Section */}
      <section className="py-20 px-6 bg-white dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Problem */}
            <div>
              <h2 className="text-3xl font-bold mb-6">El problema</h2>
              <p className="text-slate-600 dark:text-slate-400 mb-8 text-lg">
                El reto original era integrar un algoritmo de matching. Sin embargo, el descubrimiento reveló que el problema real no era encontrar candidatos, sino operar dentro del entorno caótico donde se tomaban las decisiones.
              </p>
              
              <ul className="space-y-4 mb-10">
                <li className="flex gap-4">
                  <div className="mt-1 w-6 h-6 rounded-full bg-rose-100 dark:bg-rose-900/50 flex items-center justify-center flex-shrink-0 text-rose-500">
                    <span className="w-2 h-2 rounded-full bg-current" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white">Sistemas fragmentados</h4>
                    <p className="text-slate-500 dark:text-slate-400 text-sm">Saltar entre CRM, Excel y herramientas internas.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="mt-1 w-6 h-6 rounded-full bg-rose-100 dark:bg-rose-900/50 flex items-center justify-center flex-shrink-0 text-rose-500">
                    <span className="w-2 h-2 rounded-full bg-current" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white">Flujos manuales</h4>
                    <p className="text-slate-500 dark:text-slate-400 text-sm">Alta carga cognitiva para rastrear quién está disponible y cuándo.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="mt-1 w-6 h-6 rounded-full bg-rose-100 dark:bg-rose-900/50 flex items-center justify-center flex-shrink-0 text-rose-500">
                    <span className="w-2 h-2 rounded-full bg-current" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white">Datos desactualizados</h4>
                    <p className="text-slate-500 dark:text-slate-400 text-sm">Baja confianza en los datos, lo que generaba verificaciones ineficientes.</p>
                  </div>
                </li>
              </ul>
              
              <blockquote className="border-l-4 border-indigo-500 pl-6 py-2">
                <p className="text-xl font-medium italic text-slate-800 dark:text-slate-200">
                  "Si no respondes rápido, pierdes el proyecto."
                </p>
              </blockquote>
            </div>

            {/* User */}
            <div className="bg-slate-50 dark:bg-slate-950 p-8 md:p-10 rounded-3xl border border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900/50 rounded-full flex items-center justify-center text-indigo-600">
                  <Users className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500">Perfil de usuario</h3>
                  <p className="text-2xl font-bold text-slate-900 dark:text-white">Resource Manager</p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-indigo-600 dark:text-indigo-400 flex items-center gap-2 mb-3">
                    <CheckCircle2 className="w-4 h-4" /> Necesidades clave
                  </h4>
                  <ul className="text-slate-600 dark:text-slate-400 text-sm space-y-2">
                    <li>• Rapidez para identificar candidatos</li>
                    <li>• Claridad sobre disponibilidad de candidatos</li>
                    <li>• Datos confiables y actualizados</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-rose-600 dark:text-rose-400 flex items-center gap-2 mb-3">
                    <AlertTriangle className="w-4 h-4" /> Frustraciones
                  </h4>
                  <ul className="text-slate-600 dark:text-slate-400 text-sm space-y-2">
                    <li>• Cambio constante entre sistemas</li>
                    <li>• Baja confianza en bases de datos existentes</li>
                    <li>• Información incompleta en perfiles</li>
                  </ul>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* 5. Key Insight */}
      <section className="py-24 px-6 bg-indigo-600 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-white rounded-full blur-[100px] -translate-y-1/2" />
        </div>
        <div className="container mx-auto max-w-4xl relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            "El problema no era encontrar candidatos. <br className="hidden md:block"/>
            <span className="text-indigo-200">Era habilitar decisiones rápidas con información confiable."</span>
          </h2>
        </div>
      </section>

      {/* 6. Cambio de enfoque & 7. Strategy */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
            <div>
              <h2 className="text-3xl font-bold mb-8">Cambio de enfoque</h2>
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="flex-1 bg-slate-100 dark:bg-slate-800/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-700">
                  <span className="text-rose-500 font-semibold text-sm uppercase tracking-wider mb-2 block">Antes</span>
                  <p className="font-medium text-slate-900 dark:text-white">Integración de algoritmo de matching</p>
                  <p className="text-sm text-slate-500 mt-2">Enfocado únicamente en automatizar la selección de candidatos.</p>
                </div>
                <div className="hidden sm:flex items-center text-slate-300">
                  <ArrowRight className="w-6 h-6" />
                </div>
                <div className="flex-1 bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-2xl border border-indigo-100 dark:border-indigo-800/50">
                  <span className="text-indigo-600 font-semibold text-sm uppercase tracking-wider mb-2 block">Después</span>
                  <p className="font-medium text-slate-900 dark:text-white">Sistema de apoyo a decisiones</p>
                  <p className="text-sm text-indigo-700/70 dark:text-indigo-300 mt-2">Dar a reclutadores un contexto centralizado y confiable.</p>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold mb-8">Estrategia central</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="mt-1 flex-shrink-0 text-indigo-500"><Layers className="w-5 h-5" /></div>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white">Centralizar información</h4>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">Reunir todos los datos necesarios en una vista unificada.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="mt-1 flex-shrink-0 text-indigo-500"><BoxSelect className="w-5 h-5" /></div>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white">Reducir el espacio de decisión</h4>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">Mostrar primero la información más relevante.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="mt-1 flex-shrink-0 text-indigo-500"><ShieldCheck className="w-5 h-5" /></div>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white">Mantener el control humano</h4>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">El algoritmo sugiere; la persona decide.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Product Decisions */}
      <section className="py-20 px-6 bg-slate-900 text-white">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold mb-12 text-center">Decisiones clave de producto</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-800 p-8 rounded-3xl">
              <div className="text-indigo-400 mb-4"><span className="text-4xl font-bold opacity-30">01</span></div>
              <h3 className="text-xl font-bold mb-3">Apoyo, no automatización</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Posicionamos el algoritmo de matching como un motor de recomendaciones, no como un asignador automático. Esto mantuvo a la persona dentro del ciclo para decisiones con dinámicas relacionales complejas.
              </p>
            </div>
            <div className="bg-slate-800 p-8 rounded-3xl">
              <div className="text-indigo-400 mb-4"><span className="text-4xl font-bold opacity-30">02</span></div>
              <h3 className="text-xl font-bold mb-3">Centralización completa</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Instead of linking out to the CRM or HR tool, we pulled key profile data, CVs, and availability into a single modal to eliminate tool switching.
              </p>
            </div>
            <div className="bg-slate-800 p-8 rounded-3xl">
              <div className="text-indigo-400 mb-4"><span className="text-4xl font-bold opacity-30">03</span></div>
              <h3 className="text-xl font-bold mb-3">Flujo de aplicación estructurado</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Created a clear pipeline (Suggested → Shortlisted → Assigned) replacing ad-hoc email chains and scattered spreadsheets.
              </p>
            </div>
            <div className="bg-slate-800 p-8 rounded-3xl">
              <div className="text-indigo-400 mb-4"><span className="text-4xl font-bold opacity-30">04</span></div>
              <h3 className="text-xl font-bold mb-3">Señales de confianza en los datos</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Agregamos timestamps visibles ("Actualizado hace 2 h") para aumentar la confianza en los datos consultados y reducir llamadas de verificación innecesarias.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Solution Section (UI Mockups) */}
      <section className="py-24 px-6 bg-slate-50 dark:bg-slate-950">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">La solución</h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              A unified platform broken down into focused modules, designed strictly around the recruiter's mental model.
            </p>
          </div>

          <div className="space-y-24">
            
            {/* Panel Mockup */}
            <div className="flex flex-col lg:flex-row gap-10 items-center">
              <div className="w-full lg:w-3/5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xl overflow-hidden">
                {/* Abstract UI Header */}
                <div className="h-12 border-b border-slate-100 dark:border-slate-800 flex items-center px-4 gap-4">
                  <div className="flex gap-2"><div className="w-3 h-3 rounded-full bg-rose-400"/><div className="w-3 h-3 rounded-full bg-amber-400"/><div className="w-3 h-3 rounded-full bg-emerald-400"/></div>
                  <div className="h-6 w-48 bg-slate-100 dark:bg-slate-800 rounded-md"></div>
                </div>
                {/* Abstract UI Body */}
                <div className="p-6">
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="h-24 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 p-4 flex flex-col justify-between">
                      <div className="w-16 h-4 bg-slate-200 dark:bg-slate-700 rounded"></div>
                      <div className="w-10 h-8 bg-indigo-500/20 dark:bg-indigo-500/40 rounded"></div>
                    </div>
                    <div className="h-24 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 p-4 flex flex-col justify-between">
                      <div className="w-16 h-4 bg-slate-200 dark:bg-slate-700 rounded"></div>
                      <div className="w-12 h-8 bg-slate-200 dark:bg-slate-700 rounded"></div>
                    </div>
                    <div className="h-24 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 p-4 flex flex-col justify-between">
                      <div className="w-16 h-4 bg-slate-200 dark:bg-slate-700 rounded"></div>
                      <div className="w-8 h-8 bg-slate-200 dark:bg-slate-700 rounded"></div>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="w-2/3 h-48 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700 p-4">
                       <div className="w-32 h-4 bg-slate-200 dark:bg-slate-700 rounded mb-4"></div>
                       <div className="space-y-3">
                         <div className="w-full h-8 bg-slate-200 dark:bg-slate-700 rounded"></div>
                         <div className="w-full h-8 bg-slate-200 dark:bg-slate-700 rounded"></div>
                         <div className="w-full h-8 bg-slate-200 dark:bg-slate-700 rounded"></div>
                       </div>
                    </div>
                    <div className="w-1/3 h-48 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700 p-4">
                       <div className="w-24 h-4 bg-slate-200 dark:bg-slate-700 rounded mb-4"></div>
                       <div className="w-full h-32 rounded-full bg-slate-200 dark:bg-slate-700/50 flex items-center justify-center">
                         <div className="w-24 h-24 rounded-full bg-white dark:bg-slate-900 border-4 border-slate-50 dark:border-slate-800"></div>
                       </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-2/5">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center text-indigo-600">
                    <BarChart3 className="w-4 h-4" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Panel</h3>
                </div>
                <p className="text-slate-600 dark:text-slate-400 mb-6">
                  Provides high-level metrics, actionable alerts, and a rapid overview of the current resource landscape.
                </p>
                <ul className="text-sm font-medium space-y-2 text-slate-700 dark:text-slate-300">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-indigo-500" /> Alertas accionables sobre roles sin cubrir</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-indigo-500" /> Métricas de banca visibles al instante</li>
                </ul>
              </div>
            </div>

            {/* Consultants & Projects Mockup */}
            <div className="flex flex-col lg:flex-row-reverse gap-10 items-center">
              <div className="w-full lg:w-3/5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xl overflow-hidden">
                {/* Abstract UI Header */}
                <div className="h-12 border-b border-slate-100 dark:border-slate-800 flex items-center px-4 gap-4">
                  <div className="flex gap-2"><div className="w-3 h-3 rounded-full bg-slate-200 dark:bg-slate-700"/><div className="w-3 h-3 rounded-full bg-slate-200 dark:bg-slate-700"/></div>
                  <div className="h-6 w-32 bg-slate-100 dark:bg-slate-800 rounded-md"></div>
                </div>
                {/* Abstract UI Body */}
                <div className="flex h-72">
                  <div className="w-1/3 border-r border-slate-100 dark:border-slate-800 p-4 space-y-3">
                    <div className="w-full h-10 bg-slate-100 dark:bg-slate-800 rounded-lg"></div>
                    <div className="w-full h-10 bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-100 dark:border-indigo-800/50 rounded-lg relative before:absolute before:left-0 before:top-2 before:bottom-2 before:w-1 before:bg-indigo-500 before:rounded-r"></div>
                    <div className="w-full h-10 bg-slate-50 dark:bg-slate-800/50 rounded-lg"></div>
                    <div className="w-full h-10 bg-slate-50 dark:bg-slate-800/50 rounded-lg"></div>
                  </div>
                  <div className="w-2/3 p-6 flex flex-col gap-4">
                    <div className="flex items-start justify-between">
                      <div className="flex gap-4">
                        <div className="w-16 h-16 rounded-full bg-slate-200 dark:bg-slate-700"></div>
                        <div className="space-y-2 mt-2">
                          <div className="w-32 h-5 bg-slate-200 dark:bg-slate-700 rounded"></div>
                          <div className="w-24 h-3 bg-slate-100 dark:bg-slate-800 rounded"></div>
                        </div>
                      </div>
                      <div className="w-20 h-8 bg-indigo-500 rounded-md"></div>
                    </div>
                    <div className="flex gap-2 mt-2">
                      <div className="w-16 h-6 rounded-full bg-slate-100 dark:bg-slate-800"></div>
                      <div className="w-20 h-6 rounded-full bg-slate-100 dark:bg-slate-800"></div>
                      <div className="w-14 h-6 rounded-full bg-slate-100 dark:bg-slate-800"></div>
                    </div>
                    <div className="w-full h-px bg-slate-100 dark:bg-slate-800 my-2"></div>
                    <div className="w-3/4 h-3 bg-slate-200 dark:bg-slate-700 rounded"></div>
                    <div className="w-5/6 h-3 bg-slate-200 dark:bg-slate-700 rounded"></div>
                    <div className="w-1/2 h-3 bg-slate-200 dark:bg-slate-700 rounded"></div>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-2/5">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center text-indigo-600">
                    <Users className="w-4 h-4" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Consultores y matching</h3>
                </div>
                <p className="text-slate-600 dark:text-slate-400 mb-6">
                  Perfiles detallados alimentados por múltiples sistemas, mostrando disponibilidad, habilidades y porcentaje de match contra los requerimientos del proyecto.
                </p>
                <ul className="text-sm font-medium space-y-2 text-slate-700 dark:text-slate-300">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-indigo-500" /> Indicadores de actualización de datos</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-indigo-500" /> Porcentaje de matching del algoritmo</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-indigo-500" /> Flujo de asignación en un clic</li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 10. Integración del sistema Diagram */}
      <section className="py-24 px-6 bg-white dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12">Integración del sistema</h2>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12">
            {/* External Systems */}
            <div className="flex flex-col gap-4">
              <div className="px-6 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm font-medium">Base de datos de CVs</div>
              <div className="px-6 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm font-medium">Registro de tiempo</div>
              <div className="px-6 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm font-medium">CRM / Proyectos</div>
              <div className="px-6 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm font-medium">Facturación</div>
            </div>
            
            {/* Connecting Arrows */}
            <div className="flex md:flex-col gap-2 items-center text-slate-300 dark:text-slate-600 rotate-90 md:rotate-0">
              <ArrowRight className="w-6 h-6" />
              <ArrowRight className="w-6 h-6" />
              <ArrowRight className="w-6 h-6" />
              <ArrowRight className="w-6 h-6" />
            </div>

            {/* Central Platform */}
            <div className="w-48 h-48 rounded-full bg-indigo-50 dark:bg-indigo-900/30 border-4 border-indigo-500 flex flex-col items-center justify-center shadow-xl">
              <Layers className="w-10 h-10 text-indigo-600 dark:text-indigo-400 mb-2" />
              <span className="font-bold text-slate-900 dark:text-white text-center leading-tight">Plataforma<br/>central</span>
            </div>
          </div>
          
          <p className="text-slate-500 max-w-lg mx-auto">
            La plataforma funciona como un paso evolutivo hacia un ERP unificado, tomando datos de sistemas aislados para crear una fuente única de verdad para la toma de decisiones.
          </p>
        </div>
      </section>

      {/* 11. Validation & 12. Results */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-2xl font-bold mb-6">Validación</h2>
            <div className="bg-slate-100 dark:bg-slate-800/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 mb-6">
              <ul className="space-y-3 font-medium text-slate-700 dark:text-slate-300">
                <li className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-indigo-500" /> 5 Resource Managers evaluaron el prototipo
                </li>
                <li className="flex items-center gap-3">
                  <BoxSelect className="w-5 h-5 text-indigo-500" /> Prototipo no funcional
                </li>
              </ul>
            </div>
            <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Objetivos:</h4>
            <ul className="list-disc list-inside text-slate-600 dark:text-slate-400 space-y-1 ml-4 text-sm">
              <li>Validar la propuesta de valor de la centralización.</li>
              <li>Probar qué tan intuitivo era el flujo de la aplicación.</li>
            </ul>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold mb-6">Resultados</h2>
            
            <div className="mb-6">
              <h4 className="font-semibold text-emerald-600 dark:text-emerald-400 mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" /> Qué funcionó
              </h4>
              <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                <li className="pl-4 border-l-2 border-emerald-100 dark:border-emerald-900/50">Alto valor percibido en la centralización.</li>
                <li className="pl-4 border-l-2 border-emerald-100 dark:border-emerald-900/50">Flujo mejorado y natural.</li>
                <li className="pl-4 border-l-2 border-emerald-100 dark:border-emerald-900/50">Las alertas impulsaron acciones inmediatas de forma efectiva.</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-rose-600 dark:text-rose-400 mb-3 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4" /> Puntos de fricción
              </h4>
              <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                <li className="pl-4 border-l-2 border-rose-100 dark:border-rose-900/50">Baja explicabilidad del score de matching.</li>
                <li className="pl-4 border-l-2 border-rose-100 dark:border-rose-900/50">Confusión en algunos estados de aplicación.</li>
                <li className="pl-4 border-l-2 border-rose-100 dark:border-rose-900/50">Baja visibilidad general de roles abiertos.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 13. Impact */}
      <section className="py-24 px-6 bg-slate-900 text-white">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-center mb-12">Impacto de negocio</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-6">
              <div className="text-4xl md:text-5xl font-bold text-indigo-400 mb-2">↓</div>
              <p className="font-semibold mb-1">Carga operativa</p>
              <p className="text-xs text-slate-400">Reducida significativamente</p>
            </div>
            <div className="p-6">
              <div className="text-4xl md:text-5xl font-bold text-indigo-400 mb-2">100%</div>
              <p className="font-semibold mb-1">Procesos manuales</p>
              <p className="text-xs text-slate-400">Eliminados del flujo</p>
            </div>
            <div className="p-6">
              <div className="text-4xl md:text-5xl font-bold text-indigo-400 mb-2">0</div>
              <p className="font-semibold mb-1">Cambio de herramientas</p>
              <p className="text-xs text-slate-400">Durante la toma de decisiones</p>
            </div>
            <div className="p-6">
              <div className="text-4xl md:text-5xl font-bold text-indigo-400 mb-2">↑</div>
              <p className="font-semibold mb-1">Velocidad percibida</p>
              <p className="text-xs text-slate-400">Aumentó drásticamente</p>
            </div>
          </div>
        </div>
      </section>

      {/* 14. Siguientes pasos & 15. Learning */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          
          <div className="bg-indigo-50 dark:bg-indigo-900/20 p-8 md:p-12 rounded-3xl border border-indigo-100 dark:border-indigo-800/50 mb-16 text-center">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-4">Aprendizaje clave</h3>
            <p className="text-xl md:text-2xl font-medium text-slate-900 dark:text-white leading-relaxed">
              "En sistemas complejos, el valor no viene de automatizar decisiones, sino de estructurar información confiable para habilitar mejores decisiones, más rápido."
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6">Siguientes pasos</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl">
                <div className="w-2 h-2 rounded-full bg-slate-300 dark:bg-slate-700" />
                <span className="text-sm font-medium">Mejorar la explicabilidad del matching</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl">
                <div className="w-2 h-2 rounded-full bg-slate-300 dark:bg-slate-700" />
                <span className="text-sm font-medium">Mejorar la visibilidad de roles abiertos</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl">
                <div className="w-2 h-2 rounded-full bg-slate-300 dark:bg-slate-700" />
                <span className="text-sm font-medium">Integrar candidatos externos</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl">
                <div className="w-2 h-2 rounded-full bg-slate-300 dark:bg-slate-700" />
                <span className="text-sm font-medium">Medir impacto en producción</span>
              </div>
            </div>
          </div>
          
        </div>
      </section>

      {/* 16. Navigation */}
      <section className="py-12 px-6 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950">
        <div className="container mx-auto max-w-5xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <Link to="/">
            <Button variant="outline" className="gap-2">
              <ArrowLeft className="w-4 h-4" /> Volver al portafolio
            </Button>
          </Link>
          <Link to="/">
            <Button className="gap-2">
              Siguiente caso de estudio <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>
      
    </div>
  );
}