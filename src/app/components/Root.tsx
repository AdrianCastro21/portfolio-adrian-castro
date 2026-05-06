import { Outlet } from "react-router";

export function Root() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 font-sans antialiased text-slate-900 dark:text-slate-50 selection:bg-indigo-500/30">
      {/* Top Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <a href="/" className="font-bold text-xl tracking-tight">KO.</a>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600 dark:text-slate-300">
            <a href="/#work" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Proyectos</a>
            <a href="/#process" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Proceso</a>
            <a href="/#experience" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Experiencia</a>
            <a href="/#contact" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Contacto</a>
          </div>
          <a 
            href="/#contact" 
            className="px-4 py-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-sm font-medium rounded-full hover:bg-slate-800 dark:hover:bg-slate-200 transition-colors"
          >
            Hablemos
          </a>
        </div>
      </nav>

      <main className="pt-16">
        <Outlet />
      </main>
      
      {/* Footer is handled per page or here if universal */}
    </div>
  );
}
