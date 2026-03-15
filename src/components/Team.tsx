"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const members = [
  {
    name: "Bárbara Helueni",
    role: "Magíster en Educación (UdeSA) · Licenciada en Sociología (UBA)",
    bio: "Bárbara es Magíster en Educación (UdeSA) y Licenciada en Sociología (UBA), especializada en evaluación para el aprendizaje, gestión y fortalecimiento institucional. Su trayectoria abarca la docencia en escuelas de contextos vulnerables, la política educativa y una amplia trayectoria en el IIPE UNESCO acompañando equipos ministeriales de América Latina y el Caribe.",
    photo: "/images/perfil-barbie.png",
  },
  {
    name: "Micaela Del Percio",
    role: "Licenciada en Gestión de Instituciones Educativas",
    bio: "Micaela es Licenciada y Profesora de Nivel Inicial y Primario. Trabaja con primera infancia y niños de nivel primario, coordina equipos docentes y acompaña a familias. Su propuesta pedagógica pone en el centro el juego, la exploración y el vínculo como motores del aprendizaje. Cuenta con formación especializada en articulación entre niveles inicial y primario, y en educación en contextos de vulnerabilidad.",
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
              <div className="w-48 h-48 rounded-full overflow-hidden ring-4 ring-koine-salmon/40">
                <Image
                  src={member.photo}
                  alt={member.name}
                  width={192}
                  height={192}
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
