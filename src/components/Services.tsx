"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Puzzle, Compass, Sprout, Handshake } from "lucide-react";
import ServiceCard from "./ServiceCard";

const services = [
  {
    icon: <Puzzle size={36} strokeWidth={1.5} />,
    title: "Talleres y capacitaciones",
    description:
      "Cada equipo es único. Por eso nuestros talleres y capacitaciones se diseñan a medida, con un enfoque innovador, didáctico y lúdico. Desde un taller de 2 horas hasta una jornada institucional completa, en formato presencial o híbrido.",
  },
  {
    icon: <Compass size={36} strokeWidth={1.5} />,
    title: "Coaching pedagógico focalizado",
    description:
      "A veces el desafío es concreto y necesita foco. Trabajamos junto a directivos y docentes en las situaciones que más importan: convivencia, vínculo con familias, desafíos institucionales puntuales. Un acompañamiento directo, con herramientas y resultados reales.",
  },
  {
    icon: <Sprout size={36} strokeWidth={1.5} />,
    title: "Acompañamiento integral",
    description:
      "Algunas instituciones necesitan más que un taller. El acompañamiento integral es un proceso profundo que empieza por escuchar y entender la realidad de cada institución. Diagnóstico, plan de mejora, acompañamiento a equipos y seguimiento con indicadores. Todo a medida, con impacto real y duradero.",
  },
  {
    icon: <Handshake size={36} strokeWidth={1.5} />,
    title: "Talleres para familias",
    description:
      "Educar en casa también se aprende. Nuestros talleres para familias combinan conocimiento pedagógico con un clima de escucha y cercanía. Espacios para entender mejor cada etapa, acompañar con más herramientas y construir un vínculo más sólido con la escuela.",
  },
];

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

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

        {/* 4 cards — 1 col mobile, 2x2 tablet, 4 col desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
            >
              <ServiceCard
                {...s}
                isOpen={openIndex === i}
                onToggle={() => handleToggle(i)}
              />
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-14">
          <a
            href="#contacto"
            className="font-[family-name:var(--font-dm-sans)] inline-block bg-koine-terracota text-white text-base font-medium px-10 py-4 rounded-full shadow-lg hover:shadow-2xl hover:-translate-y-0.5 hover:bg-koine-salmon transition-all duration-200"
          >
            ¿Querés saber más? Escribinos
          </a>
        </div>
      </motion.div>
    </section>
  );
}
