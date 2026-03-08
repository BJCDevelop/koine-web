"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import ServiceCard from "./ServiceCard";

const services = [
  {
    icon: "📚",
    title: "Talleres y Capacitaciones",
    audience: "Docentes y equipos directivos",
    description:
      "Talleres y capacitaciones con enfoque innovador, didáctico y lúdico. Cada propuesta se diseña considerando el contexto del equipo. Formatos: taller único (2-4 hs), serie de encuentros, jornada institucional. Modalidad presencial o híbrida.",
  },
  {
    icon: "🎯",
    title: "Coaching Pedagógico Focalizado",
    audience: "Directivos y docentes",
    description:
      "Trabajo en conjunto con directivos y docentes en planificación y ejecución con herramientas pedagógicas probadas. Abordaje de temáticas específicas como convivencia, vínculo con familias, y desafíos institucionales puntuales.",
    featured: true,
  },
  {
    icon: "🤝",
    title: "Acompañamiento Integral",
    audience: "Instituciones educativas",
    description:
      "La línea más robusta. Comienza con un diagnóstico profundo de la institución y se desarrolla un plan de trabajo a medida. Incluye: diagnóstico institucional, plan de mejora, acompañamiento a equipos, seguimiento con indicadores e informe final.",
  },
];

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="servicios" className="bg-white py-24 px-6">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto"
      >
        <div className="text-center mb-14">
          <h2 className="font-[family-name:var(--font-cormorant-garamond)] text-4xl md:text-5xl font-medium text-koine-dark">
            Nuestros servicios
          </h2>
        </div>

        {/* Main 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
            >
              <ServiceCard {...s} />
            </motion.div>
          ))}
        </div>

        {/* 4th card — smaller / differentiated */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-koine-cream border border-koine-dark/10 rounded-2xl p-8 flex flex-col md:flex-row md:items-center gap-4 md:gap-8"
        >
          <span className="text-4xl">👨‍👩‍👧</span>
          <div className="flex-1">
            <span className="font-[family-name:var(--font-dm-sans)] text-xs font-medium uppercase tracking-widest text-koine-salmon">
              Familias · Contratado por instituciones
            </span>
            <h3 className="font-[family-name:var(--font-cormorant-garamond)] text-2xl font-medium text-koine-dark mt-1 mb-2">
              Talleres para Familias
            </h3>
            <p className="font-[family-name:var(--font-dm-sans)] text-sm text-koine-dark/70 leading-relaxed">
              Espacios de encuentro donde las familias reciben herramientas
              pedagógicas concretas. Foco escolar y pedagógico.
            </p>
          </div>
        </motion.div>

        <div className="text-center mt-14">
          <a
            href="#contacto"
            className="font-[family-name:var(--font-dm-sans)] inline-block bg-koine-terracota text-white text-sm font-medium px-8 py-3.5 rounded-full hover:bg-koine-salmon transition-colors"
          >
            ¿Querés saber más? Escribinos
          </a>
        </div>
      </motion.div>
    </section>
  );
}
