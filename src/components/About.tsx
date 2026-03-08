"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const values = [
  {
    icon: "👂",
    title: "Escuchamos antes de proponer",
    text: "Cada proceso arranca con un diagnóstico real. No traemos recetas: construimos respuestas a partir de la realidad de cada institución o familia.",
  },
  {
    icon: "🎓",
    title: "Formación con calidez",
    text: "Combinamos rigor pedagógico con empatía genuina. Nuestros talleres, capacitaciones y acompañamientos lo reflejan.",
  },
  {
    icon: "🏫",
    title: "Conocemos la educación por dentro",
    text: "Docentes, directivos, familias: entendemos cada rol porque los hemos habitado. Esa experiencia guía cada intervención.",
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
          Koiné era el griego común que hablaba todo el mundo mediterráneo
          antiguo: el idioma que permitía entenderse más allá de las
          diferencias. Tomamos ese nombre porque creemos que docentes, familias
          e instituciones pueden descubrir un lenguaje compartido: uno que incluya y
          que invite a construir juntos.
        </p>

        {/* <p className="font-[family-name:var(--font-dm-sans)] text-base md:text-lg text-koine-dark/80 leading-relaxed mb-16">
          Somos una consultora educativa que acompaña a quienes educan:
          instituciones, docentes y familias. Con compromiso, calidez y un
          lenguaje que todos podemos compartir.
        </p> */}
      </motion.div>

      {/* Values */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {values.map((v, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
            className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-sm text-center"
          >
            <span className="text-4xl mb-4 block">{v.icon}</span>
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
          className="font-[family-name:var(--font-dm-sans)] inline-block bg-koine-terracota text-white text-sm font-medium px-8 py-3.5 rounded-full hover:bg-koine-salmon transition-colors"
        >
          Conocé nuestros servicios
        </a>
      </div>
    </section>
  );
}
