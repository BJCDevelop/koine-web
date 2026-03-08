"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const members = [
  {
    name: "Bárbara Helueni",
    role: "Magister en Educación. Licenciada en Sociología. Especializada en Evaluación y Diagnóstico Institucional.",
    bio: "Bárbara suma la perspectiva del sistema: la evaluación, el diagnóstico, la experiencia internacional (IIPE UNESCO) y equipos ministeriales. Y también la de ser mamá.",
    photo: "/images/perfil-barbie.png",
  },
  {
    name: "Micaela del Percio",
    role: "Licenciada en Gestión de Instituciones Educativas. Docente de Nivel Inicial y Primario.",
    bio: "Mica trae la mirada del aula: los años frente a chicos de inicial y primer grado, el conocimiento de lo que pasa adentro de una clase de verdad. Su experiencia directa con niños y familias le da a Koiné una base concreta e invaluable.",
    photo: "/images/perfil-mica.png",
  },
];

export default function Team() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="equipo" className="bg-koine-dark py-24 px-6">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto"
      >
        <div className="text-center mb-6">
          <h2 className="font-[family-name:var(--font-cormorant-garamond)] text-4xl md:text-5xl font-medium text-white mb-6">
            Quiénes somos
          </h2>
          {/* <p className="font-[family-name:var(--font-dm-sans)] text-white/75 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            Somos Micaela y Bárbara. Nos une la convicción de que la educación
            transforma, y que para hacerlo necesita de personas comprometidas,
            bien formadas y dispuestas a escuchar.
          </p> */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-14">
          {members.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
              className="flex flex-col items-center text-center gap-6"
            >
              {/* Photo */}
              <div className="w-36 h-36 rounded-full overflow-hidden ring-2 ring-koine-salmon/40">
                <Image
                  src={member.photo}
                  alt={member.name}
                  width={144}
                  height={144}
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <h3 className="font-[family-name:var(--font-cormorant-garamond)] text-2xl font-medium text-white mb-1">
                  {member.name}
                </h3>
                <p className="font-[family-name:var(--font-dm-sans)] text-koine-salmon text-sm font-medium mb-4">
                  {member.role}
                </p>
                <p className="font-[family-name:var(--font-dm-sans)] text-white/70 text-sm leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="font-[family-name:var(--font-cormorant-garamond)] italic text-xl md:text-2xl text-white/80 text-center mt-16 max-w-2xl mx-auto leading-relaxed"
        >
          Juntas combinan rigor académico con experiencia práctica, saber
          técnico con empatía, y una profunda pasión por acompañar procesos
          educativos reales.
        </motion.p>
      </motion.div>
    </section>
  );
}
