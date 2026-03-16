"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MessageCircle, Lightbulb, Users } from "lucide-react";

const values = [
  {
    icon: <MessageCircle size={36} strokeWidth={1.5} />,
    title: "Escuchamos antes de proponer",
    text: "Estamos convencidas que la mejor intervención es la que nace de entender primero. Por eso cada proceso comienza con un diagnóstico real, y cada propuesta se construye desde la realidad de quien la necesita.",
  },
  {
    icon: <Lightbulb size={36} strokeWidth={1.5} />,
    title: "Formación con calidez",
    text: "Creemos que el conocimiento transforma más cuando viene acompañado de escucha y cercanía. Eso se refleja en cada propuesta que diseñamos.",
  },
  {
    icon: <Users size={36} strokeWidth={1.5} />,
    title: "Entendemos a cada parte",
    text: "Docentes, directivos, familias: conocemos cada rol porque los hemos habitado. Esa experiencia guía cada propuesta.",
  },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="nosotros" className="bg-koine-terracota/40 py-24 px-6">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 32 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="max-w-3xl mx-auto text-center"
      >
        <h2 className="font-[family-name:var(--font-cormorant-garamond)] text-4xl md:text-5xl font-medium text-koine-dark mb-8">
          Un nombre con historia y propósito
        </h2>

        <p className="font-[family-name:var(--font-dm-sans)] text-base md:text-lg text-koine-dark/80 leading-relaxed mb-10">
          Koin<span className="text-koine-terracota font-bold">é</span> era el griego común que hablaba todo el mundo mediterráneo
          antiguo: el idioma que permitía entenderse más allá de las
          diferencias. Tomamos ese nombre porque creemos que docentes, familias
          e instituciones pueden descubrir un lenguaje compartido: uno que incluya y
          que invite a construir juntos.
        </p>
      </motion.div>

      {/* Values */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {values.map((v, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
            className="bg-[#FDF8F3] border border-[#E8956A]/20 rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 text-center"
            style={{ borderTop: "4px solid #C4622D" }}
          >
            <span className="text-koine-terracota mb-4 flex justify-center">{v.icon}</span>
            <h3 className="font-[family-name:var(--font-cormorant-garamond)] text-xl font-bold text-koine-dark mb-3">
              {v.title}
            </h3>
            <p className="font-[family-name:var(--font-dm-sans)] text-sm text-koine-dark/70 leading-relaxed">
              {v.text}
            </p>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-14">
        <a
          href="#servicios"
          className="font-[family-name:var(--font-dm-sans)] inline-block bg-koine-terracota text-white text-sm font-medium px-8 py-3.5 rounded-full shadow-lg hover:shadow-2xl hover:-translate-y-0.5 hover:bg-koine-salmon transition-all duration-200"
        >
          Conocé nuestros servicios
        </a>
      </div>
    </section>
  );
}
