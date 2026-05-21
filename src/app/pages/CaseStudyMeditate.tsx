import { motion } from "motion/react";
import {
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  Award,
  CalendarDays,
  CheckCircle2,
  Clock3,
  HeartPulse,
  Leaf,
  MessageCircle,
  Search,
  Sparkles,
  Trophy,
  Users,
} from "lucide-react";
import { Link } from "react-router";
import { Button } from "../components/Button";
import { SystemImageCarousel, type SystemImageSlide } from "../components/SystemImageCarousel";

const researchSteps = [
  "Entrevistas",
  "User persona",
  "Mapa de empatía",
  "Definición",
  "Ideación",
  "Gamificación",
  "Arquitectura del sitio",
  "Prototipado",
  "Prueba de concepto",
];

const siteArchitecture = [
  "Inicio",
  "Reto de 21 días",
  "Meditar",
  "Logros",
  "Minutero",
  "Comunidad",
];

const gamification = [
  "Reto flor de loto de 21 días",
  "Sistema de medallas",
  "Registro de sentimientos",
  "Contador de días seguidos",
  "Recordatorios",
  "Grupos de personas que meditan",
];

// Para usar capturas reales, importa tus imagenes desde src/assets y agrega image: nombreImportado en cada slide.
const florecerSlides: SystemImageSlide[] = [
  {
    eyebrow: "App móvil",
    title: "Inicio y registro emocional",
    description: "Pantalla para registrar cómo se siente el usuario, revisar el avance del reto de 21 días y acceder a meditaciones rápidas para la rutina.",
    orientation: "mobile",
    accent: "lime",
  },
  {
    eyebrow: "App móvil",
    title: "Reto de 21 días",
    description: "Secuencia guiada para principiantes con sesiones breves, avance visible y contenido progresivo.",
    orientation: "mobile",
    accent: "indigo",
  },
  {
    eyebrow: "App móvil",
    title: "Meditación durante la rutina",
    description: "Accesos a meditaciones cortas pensadas para momentos cotidianos como caminar, comer, bañarse o antes de dormir.",
    orientation: "mobile",
    accent: "slate",
  },
  {
    eyebrow: "App móvil",
    title: "Logros y minutero",
    description: "Espacio para mostrar medallas, días seguidos y temporizador para que el usuario pase de meditación guiada a práctica autónoma.",
    orientation: "mobile",
    accent: "rose",
  },
];

function PhoneMockup({ title, subtitle, variant = "home" }: { title: string; subtitle: string; variant?: "home" | "progress" | "timer" }) {
  return (
    <div className="mx-auto w-full max-w-[290px] rounded-[2rem] border-4 border-slate-900 bg-white p-4 shadow-2xl dark:border-slate-700 dark:bg-slate-950">
      <div className="mx-auto mb-5 h-5 w-24 rounded-full bg-slate-900 dark:bg-slate-700" />
      <div className="mb-5">
        <p className="text-sm text-slate-500 dark:text-slate-400">{subtitle}</p>
        <h4 className="mt-1 text-xl font-bold text-slate-900 dark:text-white">{title}</h4>
      </div>
      {variant === "home" && (
        <div className="space-y-5">
          <div className="flex justify-between">
            {["", "", "", "", ""].map((_, index) => (
              <span key={index} className="h-10 w-10 rounded-full bg-amber-100 text-center text-xl leading-10">
                {index < 2 ? "•" : index === 3 ? "–" : ""}
              </span>
            ))}
          </div>
          <div className="rounded-2xl bg-[#d6d600] p-5 text-slate-900">
            <p className="text-sm">Tu progreso</p>
            <p className="mt-1 text-3xl font-bold">0/21</p>
            <div className="mt-5 rounded-xl bg-white p-3">
              <p className="text-sm font-bold">Día 1 ¿Qué es la meditación?</p>
              <p className="text-xs text-slate-500">5 min</p>
            </div>
          </div>
          <div>
            <p className="mb-3 text-sm font-bold text-slate-900 dark:text-white">Meditar durante tu rutina</p>
            <div className="grid grid-cols-2 gap-3">
              <div className="h-20 rounded-xl bg-slate-100 dark:bg-slate-800" />
              <div className="h-20 rounded-xl bg-indigo-50 dark:bg-indigo-950" />
            </div>
          </div>
        </div>
      )}
      {variant === "progress" && (
        <div className="space-y-4">
          {[1, 2, 3].map((day) => (
            <div key={day} className="rounded-2xl border border-slate-100 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-900">
              <div className="mb-3 flex items-center justify-between">
                <span className="text-sm font-bold text-slate-900 dark:text-white">Día {day}</span>
                <CheckCircle2 className="h-5 w-5 text-[#9ca000]" />
              </div>
              <div className="h-2 rounded-full bg-slate-200 dark:bg-slate-800">
                <div className="h-2 w-2/3 rounded-full bg-[#d6d600]" />
              </div>
            </div>
          ))}
          <div className="rounded-2xl bg-slate-900 p-4 text-white dark:bg-slate-800">
            <Trophy className="mb-2 h-5 w-5 text-[#d6d600]" />
            <p className="text-sm font-semibold">Medalla desbloqueada</p>
          </div>
        </div>
      )}
      {variant === "timer" && (
        <div className="space-y-5 text-center">
          <div className="mx-auto flex h-40 w-40 items-center justify-center rounded-full border-[12px] border-[#d6d600]">
            <div>
              <p className="text-4xl font-bold text-slate-900 dark:text-white">05:00</p>
              <p className="text-xs text-slate-500">Respira</p>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {[3, 5, 10].map((minute) => (
              <span key={minute} className="rounded-full bg-slate-100 px-3 py-2 text-xs font-semibold dark:bg-slate-800">
                {minute} min
              </span>
            ))}
          </div>
          <div className="rounded-xl bg-[#d6d600] py-3 text-sm font-bold text-slate-900">Iniciar</div>
        </div>
      )}
    </div>
  );
}

export function CaseStudyMeditate() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-white">
      <section className="border-b border-slate-200 bg-white px-6 pb-16 pt-24 dark:border-slate-800 dark:bg-slate-900 md:pb-20 md:pt-32">
        <div className="container mx-auto max-w-5xl">
          <Link to="/#work" className="mb-8 inline-flex items-center text-sm font-medium text-slate-500 transition-colors hover:text-indigo-600">
            <ArrowLeft className="mr-2 h-4 w-4" /> Volver a proyectos
          </Link>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="mb-6 flex flex-wrap gap-4">
              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                Caso de estudio
              </span>
              <span className="rounded-full bg-lime-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-lime-700 dark:bg-lime-900/30 dark:text-lime-300">
                UX / UI
              </span>
              <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400">
                App de meditación
              </span>
            </div>

            <div className="grid gap-12 lg:grid-cols-[1fr_340px] lg:items-center">
              <div>
                <h1 className="mb-6 max-w-4xl text-5xl font-bold leading-[1.05] tracking-tight text-slate-900 dark:text-white md:text-6xl lg:text-7xl">
                  Florecer
                </h1>
                <p className="mb-10 max-w-3xl text-xl leading-relaxed text-slate-600 dark:text-slate-400 md:text-2xl">
                  App de meditación diseñada para guiar a principiantes e integrar la práctica en momentos cotidianos de su rutina.
                </p>

                <div className="grid grid-cols-2 gap-8 border-y border-slate-100 py-8 dark:border-slate-800 md:grid-cols-4">
                  <div>
                    <p className="mb-1 text-sm text-slate-500">Proyecto</p>
                    <p className="font-semibold text-slate-900 dark:text-white">Florecer</p>
                    <p className="text-sm text-slate-500">Meditación</p>
                  </div>
                  <div>
                    <p className="mb-1 text-sm text-slate-500">Tareas</p>
                    <p className="font-semibold text-slate-900 dark:text-white">UX / UI</p>
                    <p className="text-sm text-slate-500">Research y prototipo</p>
                  </div>
                  <div>
                    <p className="mb-1 text-sm text-slate-500">Diseñador</p>
                    <p className="font-semibold text-slate-900 dark:text-white">Adrián Castro</p>
                    <p className="text-sm text-slate-500">End-to-end</p>
                  </div>
                  <div>
                    <p className="mb-1 text-sm text-slate-500">Año</p>
                    <p className="font-semibold text-slate-900 dark:text-white">2023</p>
                    <p className="text-sm text-slate-500">App móvil</p>
                  </div>
                </div>
              </div>
              <PhoneMockup title="Hola Manuel" subtitle="¿Cómo te sientes hoy?" />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="container mx-auto grid max-w-5xl gap-8 md:grid-cols-3">
          <div className="rounded-3xl border border-slate-100 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <AlertTriangle className="mb-5 h-8 w-8 text-rose-500" />
            <h3 className="mb-3 text-lg font-bold">El problema</h3>
            <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              Las personas principiantes quieren meditar, pero la falta de guía clara provoca confusión, frustración y abandono de la práctica.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-100 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <Leaf className="mb-5 h-8 w-8 text-lime-600" />
            <h3 className="mb-3 text-lg font-bold">La solución</h3>
            <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              Una experiencia guiada que enseña a meditar en 21 días y permite practicar durante acciones cotidianas.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-100 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <Sparkles className="mb-5 h-8 w-8 text-indigo-500" />
            <h3 className="mb-3 text-lg font-bold">El aprendizaje</h3>
            <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              La motivación más fuerte no fue la gamificación, sino hacer que meditar se sintiera accesible dentro de la vida diaria.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white px-6 py-20 dark:border-slate-800 dark:bg-slate-900">
        <div className="container mx-auto grid max-w-5xl gap-16 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="mb-6 text-3xl font-bold">Investigación</h2>
            <p className="mb-6 text-lg leading-relaxed text-slate-600 dark:text-slate-400">
              Se entrevistaron 9 personas con distintos niveles de experiencia en meditación: 3 principiantes, 3 intermedios y 3 avanzados. El objetivo fue entender cómo se inicia la práctica, cómo se sostiene y qué impide integrarla a la rutina.
            </p>
            <div className="rounded-3xl bg-slate-50 p-6 dark:bg-slate-950">
              <MessageCircle className="mb-4 h-6 w-6 text-indigo-500" />
              <p className="text-lg font-medium italic text-slate-800 dark:text-slate-200">
                "A veces no tengo tiempo de meditar porque hago muchas cosas durante el día."
              </p>
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {researchSteps.map((step) => (
              <div key={step} className="rounded-2xl bg-[#d6d600] px-5 py-4 text-sm font-bold text-slate-900">
                {step}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="container mx-auto max-w-5xl">
          <div className="grid gap-12 lg:grid-cols-[360px_1fr] lg:items-start">
            <div className="rounded-3xl border border-slate-200 bg-white p-8 dark:border-slate-800 dark:bg-slate-900">
              <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-lime-100 text-lime-700 dark:bg-lime-900/40 dark:text-lime-300">
                <Users className="h-10 w-10" />
              </div>
              <h2 className="mb-2 text-3xl font-bold">Manuel</h2>
              <p className="mb-6 text-slate-500">32 años · Ciudad de México</p>
              <p className="leading-relaxed text-slate-600 dark:text-slate-400">
                Trabaja algunos días desde casa, vive de forma independiente y busca balance entre responsabilidades, salud mental y vida personal.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-3xl bg-white p-7 dark:bg-slate-900">
                <h3 className="mb-4 text-xl font-bold">Metas</h3>
                <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
                  <li>Conseguir balance entre responsabilidades y vida personal.</li>
                  <li>Combatir el estrés.</li>
                  <li>Reducir ansiedad y depresión.</li>
                  <li>Tener momentos de paz y descanso.</li>
                </ul>
              </div>
              <div className="rounded-3xl bg-white p-7 dark:bg-slate-900">
                <h3 className="mb-4 text-xl font-bold">Frustraciones</h3>
                <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
                  <li>Sus responsabilidades le dejan poco tiempo libre.</li>
                  <li>Le cuesta mantener momentos de tranquilidad.</li>
                  <li>Ha intentado meditar, pero no sabe por dónde empezar.</li>
                </ul>
              </div>
              <div className="rounded-3xl bg-slate-900 p-7 text-white md:col-span-2">
                <h3 className="mb-4 text-xl font-bold text-[#d6d600]">Insight</h3>
                <p className="text-lg leading-relaxed">
                  Manuel quiere meditar porque se lo recomendaron para tratar ansiedad y depresión, pero necesita guía, estructura y una forma realista de incorporar la práctica a su vida diaria.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-900 px-6 py-24 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="mb-6 text-sm font-semibold uppercase tracking-wider text-[#d6d600]">Pregunta guía</p>
          <h2 className="text-4xl font-bold leading-tight md:text-5xl">
            ¿Cómo podríamos guiar a Manuel para que integre la práctica de la meditación en su vida?
          </h2>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="container mx-auto max-w-5xl">
          <div className="mb-12 max-w-3xl">
            <h2 className="mb-5 text-3xl font-bold">Definición de la solución</h2>
            <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-400">
              Florecer combina aprendizaje progresivo, meditaciones para momentos cotidianos y dinámicas de gamificación que apoyan la formación del hábito sin convertirse en el centro de la experiencia.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl bg-white p-7 dark:bg-slate-900">
              <CalendarDays className="mb-4 h-7 w-7 text-lime-600" />
              <h3 className="mb-3 text-xl font-bold">Reto de 21 días</h3>
              <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                Un recorrido guiado para aprender conceptos básicos y construir una práctica inicial.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-7 dark:bg-slate-900">
              <Clock3 className="mb-4 h-7 w-7 text-indigo-500" />
              <h3 className="mb-3 text-xl font-bold">Meditación en rutina</h3>
              <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                Sesiones cortas para practicar al despertar, caminar, comer, bañarse o antes de dormir.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-7 dark:bg-slate-900">
              <Award className="mb-4 h-7 w-7 text-amber-500" />
              <h3 className="mb-3 text-xl font-bold">Logros y progreso</h3>
              <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                Medallas, días seguidos y registro emocional como señales de avance y motivación.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white px-6 py-20 dark:border-slate-800 dark:bg-slate-900">
        <div className="container mx-auto grid max-w-5xl gap-12 lg:grid-cols-2">
          <div>
            <h2 className="mb-6 text-3xl font-bold">Arquitectura del producto</h2>
            <p className="mb-8 leading-relaxed text-slate-600 dark:text-slate-400">
              La estructura prioriza el estado emocional y el reto de aprendizaje, dejando las meditaciones por rutina como accesos rápidos.
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              {siteArchitecture.map((item) => (
                <div key={item} className="rounded-2xl border border-slate-200 px-5 py-4 text-sm font-bold dark:border-slate-800">
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="mb-6 text-3xl font-bold">Gamificación</h2>
            <p className="mb-8 leading-relaxed text-slate-600 dark:text-slate-400">
              Las dinámicas se diseñaron como apoyo para motivar continuidad, especialmente alrededor del reto de 21 días y el registro de progreso.
            </p>
            <div className="space-y-3">
              {gamification.map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-2xl bg-[#d6d600] px-5 py-4 text-sm font-bold text-slate-900">
                  <Trophy className="h-4 w-4" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="container mx-auto max-w-5xl">
          <div className="mb-14 text-center">
            <h2 className="mb-4 text-3xl font-bold">Diseño de interfaz</h2>
            <p className="mx-auto max-w-2xl text-slate-600 dark:text-slate-400">
              Dejé espacios para integrar capturas reales del sistema. Por ahora se muestran mockups de muestra con la estructura visual de la app.
            </p>
          </div>

          <div className="grid gap-10 lg:grid-cols-3">
            <PhoneMockup title="Inicio" subtitle="Estado emocional y progreso" />
            <PhoneMockup title="Reto 21 días" subtitle="Aprendizaje progresivo" variant="progress" />
            <PhoneMockup title="Minutero" subtitle="Meditación autónoma" variant="timer" />
          </div>

          <div className="mt-16">
            <SystemImageCarousel slides={florecerSlides} />
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white px-6 py-20 dark:border-slate-800 dark:bg-slate-900">
        <div className="container mx-auto max-w-5xl">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <h2 className="mb-6 text-3xl font-bold">Validación</h2>
              <div className="rounded-3xl bg-slate-50 p-7 dark:bg-slate-950">
                <Search className="mb-4 h-7 w-7 text-indigo-500" />
                <p className="leading-relaxed text-slate-600 dark:text-slate-400">
                  La prueba de concepto ayudó a identificar qué elementos generaban motivación y qué partes requerían mayor exploración.
                </p>
              </div>
            </div>
            <div className="space-y-5">
              <div className="rounded-3xl border border-emerald-100 bg-emerald-50 p-6 dark:border-emerald-900/50 dark:bg-emerald-950/30">
                <HeartPulse className="mb-3 h-6 w-6 text-emerald-600" />
                <h3 className="mb-2 font-bold">Lo más valioso</h3>
                <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                  Los usuarios expresaron fuerte interés en meditar durante momentos cotidianos porque resuelve el obstáculo principal: la falta de tiempo.
                </p>
              </div>
              <div className="rounded-3xl border border-lime-100 bg-lime-50 p-6 dark:border-lime-900/50 dark:bg-lime-950/30">
                <CheckCircle2 className="mb-3 h-6 w-6 text-lime-700" />
                <h3 className="mb-2 font-bold">Qué motivó</h3>
                <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                  Hubo preferencia por elementos relacionados con el reto de 21 días, las meditaciones guiadas y la transición de principiante a práctica autónoma.
                </p>
              </div>
              <div className="rounded-3xl border border-amber-100 bg-amber-50 p-6 dark:border-amber-900/50 dark:bg-amber-950/30">
                <AlertTriangle className="mb-3 h-6 w-6 text-amber-600" />
                <h3 className="mb-2 font-bold">A explorar</h3>
                <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                  El personaje virtual no mostró una conexión significativa con los usuarios, por lo que se recomienda evaluar mejor su rol dentro de la experiencia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-900 px-6 py-24 text-white">
        <div className="container mx-auto max-w-4xl">
          <p className="mb-5 text-sm font-semibold uppercase tracking-wider text-[#d6d600]">Conclusión</p>
          <h2 className="mb-8 text-3xl font-bold leading-tight md:text-5xl">
            Florecer funciona mejor cuando convierte la meditación en una práctica accesible, guiada y compatible con la vida diaria.
          </h2>
          <p className="text-lg leading-relaxed text-slate-300">
            Como siguiente paso, se sugiere probar la integración de meditaciones durante un periodo más prolongado para medir la adopción real del hábito y evaluar con más detalle la transición de principiante a avanzado.
          </p>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-50 px-6 py-12 dark:border-slate-800 dark:bg-slate-950">
        <div className="container mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 sm:flex-row">
          <Link to="/#work">
            <Button variant="outline" className="gap-2">
              <ArrowLeft className="h-4 w-4" /> Volver a proyectos
            </Button>
          </Link>
          <Link to="/case-study/staffing-system">
            <Button className="gap-2">
              Siguiente caso: Staffing <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
