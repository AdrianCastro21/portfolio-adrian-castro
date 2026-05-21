import { motion } from "motion/react";
import {
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  ClipboardList,
  CreditCard,
  FileText,
  Home,
  Layers,
  MapPin,
  MousePointerClick,
  Search,
  ShieldCheck,
  Smartphone,
  Users,
} from "lucide-react";
import { Link } from "react-router";
import { Button } from "../components/Button";
import { SystemImageCarousel, type SystemImageSlide } from "../components/SystemImageCarousel";
import paso1Modalidad from "../../assets/imgs_ArquiKeobra/sistema_constructores/Paso1_modalidad.png";
import paso2Lugar from "../../assets/imgs_ArquiKeobra/sistema_constructores/Paso2_lugar.png";
import paso3Proyecto from "../../assets/imgs_ArquiKeobra/sistema_constructores/Paso3_proyecto.png";
import paso4Datos from "../../assets/imgs_ArquiKeobra/sistema_constructores/Paso4_datos.png";
import paso5Costo from "../../assets/imgs_ArquiKeobra/sistema_constructores/Paso5_costo.png";
import paso6RevisionPago from "../../assets/imgs_ArquiKeobra/sistema_constructores/Paso6_Revision_y_pago.png";
import paso7AgendarCitaPt1 from "../../assets/imgs_ArquiKeobra/sistema_constructores/Paso7_Agendar_cita_pt1.png";
import paso7AgendarCitaPt2 from "../../assets/imgs_ArquiKeobra/sistema_constructores/Paso7_Agendar_cita_pt2.png";
import paso8RetroFinal from "../../assets/imgs_ArquiKeobra/sistema_constructores/Paso8_retro_final.png";
import listadoAsesorias from "../../assets/imgs_ArquiKeobra/sistema_arquitectos/01_listado_asesorias.png";
import detalleAgendadoPresencial from "../../assets/imgs_ArquiKeobra/sistema_arquitectos/02_detalle_agendado_presencial.png";
import detalleAgendadoVideollamada from "../../assets/imgs_ArquiKeobra/sistema_arquitectos/03_detalle_agendado_videollamada.png";
import detallePagado from "../../assets/imgs_ArquiKeobra/sistema_arquitectos/04_detalle_pagado.png";
import detalleSolicitudAsistencia from "../../assets/imgs_ArquiKeobra/sistema_arquitectos/05_detalle_solicitud_de_asistencia.png";
import detalleCotizado from "../../assets/imgs_ArquiKeobra/sistema_arquitectos/06_detalle_cotizado.png";
import detalleEnProceso from "../../assets/imgs_ArquiKeobra/sistema_arquitectos/07_detalle_en_proceso.png";
import detalleFinalizada from "../../assets/imgs_ArquiKeobra/sistema_arquitectos/08_ detalle_finalizada.png";

const autoconstructorRequirements = [
  "Elegir si requiere el servicio en línea o presencial.",
  "Definir si la asesoría es para departamento, casa o terreno.",
  "Indicar el motivo por el que requiere el servicio.",
  "Cotizar el costo con base en las especificaciones del proyecto.",
  "Ingresar datos para la visita: nombre, dirección, teléfono y correo.",
  "Realizar el pago en línea e ingresar cupones de descuento.",
];

const architectRequirements = [
  "Revisar el registro de servicios solicitados con nombre, tipo, fecha, estatus y arquitecto asignado.",
  "Filtrar solicitudes por estatus, fecha y modalidad.",
  "Consultar el detalle de cada solicitud según su estado operativo.",
  "Llenar un formulario para generar el reporte de asesoría.",
  "Registrar evidencia, ubicación, conclusiones y firma del usuario.",
  "Crear y administrar cupones para otorgar descuentos.",
];

const builderFlow = [
  "Elige modalidad",
  "Define el lugar",
  "Describe el proyecto",
  "Ingresa sus datos",
  "Conoce el costo",
  "Realiza el pago",
  "Agenda la cita",
];

const siteArchitecture = [
  "Inicio de sesión",
  "Proyectos",
  "Agenda",
  "Asesorías",
  "Listado de asesorías",
  "Detalle de solicitud",
  "Formulario de asesoría",
  "Cupones",
  "Crear cupón",
];

// Para usar capturas reales, importa tus imagenes desde src/assets y agrega image: nombreImportado en cada slide.
const keobraAutoconstructorSlides: SystemImageSlide[] = [
  {
    eyebrow: "Flujo móvil",
    title: "Selección de modalidad",
    description: "Pantallas para elegir si la asesoría será presencial o en línea y definir el tipo de inmueble.",
    image: paso1Modalidad,
    imageAlt: "Paso 1 selección de modalidad",
    orientation: "mobile",
    accent: "indigo",
  },
  {
    eyebrow: "Flujo móvil",
    title: "Lugar de la asesoría",
    description: "Definición del tipo de inmueble y contexto donde se realizará la asesoría.",
    image: paso2Lugar,
    imageAlt: "Paso 2 lugar de la asesoría",
    orientation: "mobile",
    accent: "rose",
  },
  {
    eyebrow: "Flujo móvil",
    title: "Datos del proyecto",
    description: "Captura guiada del motivo de la asesoría y detalles necesarios para entender el caso.",
    image: paso3Proyecto,
    imageAlt: "Paso 3 datos del proyecto",
    orientation: "mobile",
    accent: "slate",
  },
  {
    eyebrow: "Flujo móvil",
    title: "Datos de contacto",
    description: "Registro de la información del solicitante para continuar con la cotización y agenda.",
    image: paso4Datos,
    imageAlt: "Paso 4 datos de contacto",
    orientation: "mobile",
    accent: "lime",
  },
  {
    eyebrow: "Flujo móvil",
    title: "Costo del servicio",
    description: "Presentación del costo de la asesoría de acuerdo con las características del proyecto.",
    image: paso5Costo,
    imageAlt: "Paso 5 costo del servicio",
    orientation: "mobile",
    accent: "indigo",
  },
  {
    eyebrow: "Flujo móvil",
    title: "Revisión y pago",
    description: "Resumen previo al pago para revisar datos, costo y confirmar la contratación.",
    image: paso6RevisionPago,
    imageAlt: "Paso 6 revisión y pago",
    orientation: "mobile",
    accent: "rose",
  },
  {
    eyebrow: "Flujo móvil",
    title: "Agendar cita",
    description: "Selección de fecha y hora para programar la asesoría con el especialista asignado.",
    image: paso7AgendarCitaPt1,
    imageAlt: "Paso 7 agenda de cita parte 1",
    orientation: "mobile",
    accent: "slate",
  },
  {
    eyebrow: "Flujo móvil",
    title: "Confirmación de cita",
    description: "Visualización de la cita agendada y detalles finales de la asesoría.",
    image: paso7AgendarCitaPt2,
    imageAlt: "Paso 7 agenda de cita parte 2",
    orientation: "mobile",
    accent: "lime",
  },
  {
    eyebrow: "Flujo móvil",
    title: "Cierre del flujo",
    description: "Pantalla final de retroalimentación y cierre después de completar el proceso.",
    image: paso8RetroFinal,
    imageAlt: "Paso 8 retroalimentación final",
    orientation: "mobile",
    accent: "lime",
  },
];

const keobraArchitectSlides: SystemImageSlide[] = [
  {
    eyebrow: "Tablero web",
    title: "Listado de asesorías",
    description: "Vista para revisar solicitudes, estatus, modalidad, fechas y acciones rápidas del arquitecto.",
    image: listadoAsesorias,
    imageAlt: "Listado de asesorías del sistema de arquitectos",
    orientation: "desktop",
    accent: "indigo",
  },
  {
    eyebrow: "Tablero web",
    title: "Detalle agendado presencial",
    description: "Detalle de una asesoría presencial agendada con información del usuario, ubicación y datos operativos.",
    image: detalleAgendadoPresencial,
    imageAlt: "Detalle de asesoría agendada presencial",
    orientation: "desktop",
    accent: "slate",
  },
  {
    eyebrow: "Tablero web",
    title: "Detalle agendado por videollamada",
    description: "Detalle de solicitud para modalidad en línea con información necesaria para dar seguimiento.",
    image: detalleAgendadoVideollamada,
    imageAlt: "Detalle de asesoría agendada por videollamada",
    orientation: "desktop",
    accent: "rose",
  },
  {
    eyebrow: "Tablero web",
    title: "Detalle pagado",
    description: "Estado pagado de la solicitud con información del cliente, modalidad y acciones disponibles.",
    image: detallePagado,
    imageAlt: "Detalle de asesoría pagada",
    orientation: "desktop",
    accent: "lime",
  },
  {
    eyebrow: "Tablero web",
    title: "Solicitud de asistencia",
    description: "Formulario para registrar la asistencia, documentar información técnica y preparar el reporte.",
    image: detalleSolicitudAsistencia,
    imageAlt: "Formulario de solicitud de asistencia",
    orientation: "desktop",
    accent: "indigo",
  },
  {
    eyebrow: "Tablero web",
    title: "Detalle cotizado",
    description: "Vista de una asesoría cotizada antes de completar pago y agenda.",
    image: detalleCotizado,
    imageAlt: "Detalle de asesoría cotizada",
    orientation: "desktop",
    accent: "slate",
  },
  {
    eyebrow: "Tablero web",
    title: "Detalle en proceso",
    description: "Estado operativo para dar seguimiento a una asesoría que ya se encuentra en atención.",
    image: detalleEnProceso,
    imageAlt: "Detalle de asesoría en proceso",
    orientation: "desktop",
    accent: "rose",
  },
  {
    eyebrow: "Tablero web",
    title: "Detalle finalizado",
    description: "Cierre de la asesoría con información final y evidencia registrada.",
    image: detalleFinalizada,
    imageAlt: "Detalle de asesoría finalizada",
    orientation: "desktop",
    accent: "lime",
  },
];

function PhonePlaceholder({ title, step }: { title: string; step: string }) {
  return (
    <div className="rounded-[2rem] border-4 border-slate-900 bg-white p-4 shadow-2xl dark:border-slate-700 dark:bg-slate-900">
      <div className="mx-auto mb-4 h-5 w-24 rounded-full bg-slate-900 dark:bg-slate-700" />
      <div className="mb-5 flex items-center gap-2 border-b border-slate-100 pb-3 dark:border-slate-800">
        <div className="h-9 w-9 rounded-xl bg-rose-500" />
        <div className="h-6 flex-1 rounded-md bg-slate-100 dark:bg-slate-800" />
      </div>
      <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-indigo-600">Paso {step}</p>
      <h4 className="mb-4 text-lg font-bold text-slate-900 dark:text-white">{title}</h4>
      <div className="space-y-3">
        <div className="h-16 rounded-xl border border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-950" />
        <div className="h-16 rounded-xl border border-indigo-100 bg-indigo-50 dark:border-indigo-900/50 dark:bg-indigo-950/40" />
        <div className="h-10 rounded-lg bg-indigo-600" />
      </div>
    </div>
  );
}

function DesktopPlaceholder({ title, description }: { title: string; description: string }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl dark:border-slate-800 dark:bg-slate-900">
      <div className="flex h-12 items-center gap-3 border-b border-slate-100 px-4 dark:border-slate-800">
        <div className="flex gap-2">
          <span className="h-3 w-3 rounded-full bg-rose-400" />
          <span className="h-3 w-3 rounded-full bg-amber-400" />
          <span className="h-3 w-3 rounded-full bg-emerald-400" />
        </div>
        <div className="h-6 w-40 rounded-md bg-slate-100 dark:bg-slate-800" />
      </div>
      <div className="grid grid-cols-[160px_1fr]">
        <div className="min-h-[300px] border-r border-slate-100 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-950">
          <div className="mb-6 h-9 w-20 rounded-lg bg-rose-500" />
          <div className="space-y-3">
            <div className="h-8 rounded-md bg-indigo-100 dark:bg-indigo-950" />
            <div className="h-8 rounded-md bg-slate-200/70 dark:bg-slate-800" />
            <div className="h-8 rounded-md bg-slate-200/70 dark:bg-slate-800" />
            <div className="h-8 rounded-md bg-slate-200/70 dark:bg-slate-800" />
          </div>
        </div>
        <div className="p-6">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <h4 className="text-xl font-bold text-slate-900 dark:text-white">{title}</h4>
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{description}</p>
            </div>
            <div className="h-9 w-32 rounded-lg bg-indigo-600" />
          </div>
          <div className="space-y-3">
            {[1, 2, 3, 4, 5].map((item) => (
              <div key={item} className="grid grid-cols-5 gap-4 rounded-lg border border-slate-100 p-3 dark:border-slate-800">
                <div className="h-4 rounded bg-slate-200 dark:bg-slate-700" />
                <div className="h-4 rounded bg-slate-200 dark:bg-slate-700" />
                <div className="h-4 rounded bg-slate-200 dark:bg-slate-700" />
                <div className="h-4 rounded bg-indigo-100 dark:bg-indigo-900/50" />
                <div className="h-4 rounded bg-slate-200 dark:bg-slate-700" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function CaseStudyKeobra() {
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
              <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400">
                UX / UI
              </span>
              <span className="rounded-full bg-rose-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-rose-600 dark:bg-rose-900/30 dark:text-rose-300">
                Construcción
              </span>
            </div>

            <h1 className="mb-6 max-w-4xl text-4xl font-bold leading-[1.1] tracking-tight text-slate-900 dark:text-white md:text-5xl lg:text-6xl">
              Arqui KeObra
            </h1>
            <p className="mb-10 max-w-3xl text-xl leading-relaxed text-slate-600 dark:text-slate-400 md:text-2xl">
              Sistema para conectar a personas que autoconstruyen su vivienda con arquitectos e ingenieros especializados de KeObra.
            </p>

            <div className="mb-12 grid grid-cols-2 gap-8 border-y border-slate-100 py-8 dark:border-slate-800 md:grid-cols-4">
              <div>
                <p className="mb-1 text-sm text-slate-500">Proyecto</p>
                <p className="font-semibold text-slate-900 dark:text-white">Arqui KeObra</p>
                <p className="text-sm text-slate-500">Servicio digital</p>
              </div>
              <div>
                <p className="mb-1 text-sm text-slate-500">Tareas</p>
                <p className="font-semibold text-slate-900 dark:text-white">UX / UI</p>
                <p className="text-sm text-slate-500">Flujos y prototipo</p>
              </div>
              <div>
                <p className="mb-1 text-sm text-slate-500">Usuarios</p>
                <p className="font-semibold text-slate-900 dark:text-white">Autoconstructores</p>
                <p className="text-sm text-slate-500">Arquitectos</p>
              </div>
              <div>
                <p className="mb-1 text-sm text-slate-500">Plataformas</p>
                <p className="font-semibold text-slate-900 dark:text-white">Mobile + Web</p>
                <p className="text-sm text-slate-500">Wizard y tablero</p>
              </div>
            </div>

            <div className="grid gap-6 rounded-3xl bg-indigo-600 p-8 text-white shadow-xl shadow-indigo-600/20 md:grid-cols-4 md:p-10">
              <div>
                <Smartphone className="mb-3 h-6 w-6 text-indigo-200" />
                <p className="font-semibold">Wizard mobile</p>
                <p className="text-sm text-indigo-200">Cotización, pago y agenda</p>
              </div>
              <div>
                <ClipboardList className="mb-3 h-6 w-6 text-indigo-200" />
                <p className="font-semibold">Tablero web</p>
                <p className="text-sm text-indigo-200">Gestión de solicitudes</p>
              </div>
              <div>
                <FileText className="mb-3 h-6 w-6 text-indigo-200" />
                <p className="font-semibold">Reporte técnico</p>
                <p className="text-sm text-indigo-200">Registro de asistencia</p>
              </div>
              <div>
                <ShieldCheck className="mb-3 h-6 w-6 text-indigo-200" />
                <p className="font-semibold">Confianza</p>
                <p className="text-sm text-indigo-200">Asesoría profesional</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="container mx-auto grid max-w-5xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="mb-6 text-3xl font-bold">Contexto</h2>
            <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-400">
              En México, personas de sectores vulnerables enfrentan desafíos al autoconstruir sus viviendas por falta de conocimientos técnicos. Esto puede derivar en edificaciones inestables y riesgosas.
            </p>
            <p className="mt-5 text-lg leading-relaxed text-slate-600 dark:text-slate-400">
              KeObra propuso un servicio para brindar acceso a arquitectos e ingenieros especializados mediante asesorías presenciales o en línea, resolviendo dudas durante procesos constructivos y problemas relacionados con construcciones mal ejecutadas.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-8 dark:border-slate-800 dark:bg-slate-900">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-50 text-rose-500 dark:bg-rose-900/30">
              <AlertTriangle className="h-6 w-6" />
            </div>
            <h3 className="mb-4 text-2xl font-bold">El reto</h3>
            <p className="text-slate-600 dark:text-slate-400">
              Diseñar la experiencia de usuario e interfaz para conectar a personas que autoconstruyen su vivienda con arquitectos de KeObra, considerando necesidades distintas para quien solicita el servicio y para quien lo opera.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white px-6 py-20 dark:border-slate-800 dark:bg-slate-900">
        <div className="container mx-auto max-w-5xl">
          <div className="mb-12 max-w-3xl">
            <h2 className="mb-4 text-3xl font-bold">Usuarios y requerimientos</h2>
            <p className="text-slate-600 dark:text-slate-400">
              La experiencia se diseñó como un sistema de dos lados: un flujo guiado para autoconstructores y un tablero operativo para arquitectos.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-3xl bg-slate-50 p-8 dark:bg-slate-950">
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 dark:bg-indigo-900/30">
                  <Home className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold">Autoconstructor</h3>
              </div>
              <ul className="space-y-4">
                {autoconstructorRequirements.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-indigo-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl bg-slate-50 p-8 dark:bg-slate-950">
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-50 text-rose-600 dark:bg-rose-900/30">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold">Arquitecto</h3>
              </div>
              <ul className="space-y-4">
                {architectRequirements.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-rose-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-indigo-600 px-6 py-24 text-white">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-6 text-3xl font-bold md:text-5xl">Un servicio, dos flujos conectados</h2>
          <p className="max-w-3xl text-lg leading-relaxed text-indigo-100">
            El producto debía resolver la contratación del servicio para el usuario final y, al mismo tiempo, permitir al arquitecto dar seguimiento, registrar la asistencia y generar evidencia técnica.
          </p>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="container mx-auto max-w-5xl">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <h2 className="mb-4 text-3xl font-bold">Flujo del autoconstructor</h2>
              <p className="max-w-2xl text-slate-600 dark:text-slate-400">
                Para la contratación se propuso un wizard paso a paso que reduce incertidumbre, explica el costo y lleva al usuario hasta el pago y la agenda de la asesoría.
              </p>
            </div>
            <Smartphone className="h-10 w-10 text-indigo-500" />
          </div>

          <div className="grid gap-4 md:grid-cols-7">
            {builderFlow.map((step, index) => (
              <div key={step} className="relative rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
                <span className="mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-indigo-50 text-sm font-bold text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-300">
                  {index + 1}
                </span>
                <p className="text-sm font-semibold">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white px-6 py-24 dark:border-slate-800 dark:bg-slate-900">
        <div className="container mx-auto max-w-5xl">
          <div className="mb-14 text-center">
            <h2 className="mb-4 text-3xl font-bold">Prototipo autoconstructores</h2>
            <p className="mx-auto max-w-2xl text-slate-600 dark:text-slate-400">
              Espacios reservados para imágenes del sistema móvil. Por ahora se muestran wireframes de muestra con la estructura del flujo.
            </p>
          </div>

          <SystemImageCarousel slides={keobraAutoconstructorSlides} />

          <div className="mx-auto mt-12 max-w-3xl rounded-3xl border border-slate-100 bg-slate-50 p-8 text-center dark:border-slate-800 dark:bg-slate-950">
            <h3 className="mb-4 text-2xl font-bold">Pago y agendación</h3>
            <p className="text-slate-600 dark:text-slate-400">
              El flujo permite calcular el costo, seleccionar forma de pago, agendar fecha y hora, y confirmar la visita con los datos del asesor técnico asignado.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="container mx-auto max-w-5xl">
          <div className="mb-12 grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <h2 className="mb-4 text-3xl font-bold">Arquitectura para arquitectos</h2>
              <p className="text-slate-600 dark:text-slate-400">
                Para el tablero fue clave trabajar la arquitectura de la información e integrar asesorías y cupones dentro del sistema existente de KeObra.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {siteArchitecture.map((item) => (
                <div key={item} className="rounded-xl border border-slate-200 bg-white p-4 text-center text-sm font-medium dark:border-slate-800 dark:bg-slate-900">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white px-6 py-24 dark:border-slate-800 dark:bg-slate-900">
        <div className="container mx-auto max-w-5xl">
          <div className="mb-14 max-w-3xl">
            <h2 className="mb-4 text-3xl font-bold">Prototipo arquitectos</h2>
            <p className="text-slate-600 dark:text-slate-400">
              El sistema muestra información distinta dependiendo del estatus de la solicitud: cotizado, orden de pago, pagado, agendado, en proceso y finalizado.
            </p>
          </div>

          <div className="space-y-10">
            <SystemImageCarousel slides={keobraArchitectSlides} />
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="container mx-auto grid max-w-5xl gap-12 lg:grid-cols-2">
          <div>
            <h2 className="mb-6 text-3xl font-bold">Prueba con usuarios</h2>
            <p className="mb-6 text-slate-600 dark:text-slate-400">
              El objetivo fue evaluar si el servicio de asesorías de arquitectos resultaba valioso para los usuarios, encontrar puntos de dolor en el flujo de contratación y detectar problemas de usabilidad en la experiencia del usuario y del arquitecto durante la visita.
            </p>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
              <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-slate-500">Muestra</p>
              <p className="text-slate-700 dark:text-slate-300">
                5 mujeres de 21 a 50 años con experiencia en herramientas digitales, responsables de la toma de decisiones en su proyecto de construcción, nivel socioeconómico C-, D+ y D.
              </p>
            </div>
          </div>

          <div className="rounded-3xl bg-indigo-50 p-8 dark:bg-indigo-900/20">
            <Search className="mb-6 h-8 w-8 text-indigo-600 dark:text-indigo-300" />
            <h3 className="mb-4 text-2xl font-bold">Qué se buscó validar</h3>
            <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
              <li className="flex gap-3"><CheckCircle2 className="h-4 w-4 flex-shrink-0 text-indigo-500" /> Valor percibido del servicio profesional.</li>
              <li className="flex gap-3"><CheckCircle2 className="h-4 w-4 flex-shrink-0 text-indigo-500" /> Claridad del flujo de contratación.</li>
              <li className="flex gap-3"><CheckCircle2 className="h-4 w-4 flex-shrink-0 text-indigo-500" /> Confianza para pagar servicios en línea.</li>
              <li className="flex gap-3"><CheckCircle2 className="h-4 w-4 flex-shrink-0 text-indigo-500" /> Viabilidad de uso durante la visita en obra.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-slate-900 px-6 py-24 text-white">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-12 text-center text-3xl font-bold">Hallazgos principales</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              ["Valor del servicio", "Los usuarios perciben valor en la asesoría profesional y confían más en un ingeniero o arquitecto que en un albañil."],
              ["Confianza digital", "Existe resistencia a poner datos y pagar en línea por miedo a estafas o experiencias previas negativas."],
              ["Percepción del costo", "El costo se percibe accesible frente a la idea de que contratar un arquitecto suele ser caro."],
              ["Preferencia presencial", "La visita presencial se percibe más viable que la videollamada para revisar problemas en obra."],
              ["Escalabilidad", "Zonas de cobertura y horarios aparecen como limitantes del servicio."],
              ["Uso en visita", "Durante la visita, el arquitecto tendía a conversar y tomar fotos con celular; el reporte se generaba después."],
            ].map(([title, description]) => (
              <div key={title} className="rounded-3xl bg-slate-800 p-6">
                <h3 className="mb-3 font-bold">{title}</h3>
                <p className="text-sm leading-relaxed text-slate-400">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-16 rounded-3xl border border-indigo-100 bg-indigo-50 p-8 text-center dark:border-indigo-800/50 dark:bg-indigo-900/20 md:p-12">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">Aprendizaje clave</h3>
            <p className="text-xl font-medium leading-relaxed text-slate-900 dark:text-white md:text-2xl">
              La solución no solo debía digitalizar una asesoría: debía construir confianza alrededor de un servicio profesional que muchos usuarios no estaban acostumbrados a contratar.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
              <MapPin className="mb-3 h-5 w-5 text-indigo-500" />
              <p className="text-sm font-medium">Considerar cobertura, horarios y operación en campo.</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
              <CreditCard className="mb-3 h-5 w-5 text-indigo-500" />
              <p className="text-sm font-medium">Diseñar confianza antes de pedir pago o datos sensibles.</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
              <MousePointerClick className="mb-3 h-5 w-5 text-indigo-500" />
              <p className="text-sm font-medium">Mantener el flujo de contratación simple y guiado.</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
              <CalendarDays className="mb-3 h-5 w-5 text-indigo-500" />
              <p className="text-sm font-medium">Separar lo que ocurre durante la visita de lo que se registra después.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-50 px-6 py-12 dark:border-slate-800 dark:bg-slate-950">
        <div className="container mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 sm:flex-row">
          <Link to="/#work">
            <Button variant="outline" className="gap-2">
              <ArrowLeft className="h-4 w-4" /> Volver a proyectos
            </Button>
          </Link>
          <Link to="/case-study/meditate-app">
            <Button className="gap-2">
              Siguiente caso: Florecer <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
