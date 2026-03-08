"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

const WHATSAPP_NUMBER = "5491100000000"; // Replace with real number

type Status = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, role, message }),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      setName(""); setEmail(""); setRole(""); setMessage("");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contacto" className="bg-white py-24 px-6">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="max-w-xl mx-auto text-center"
      >
        <h2 className="font-[family-name:var(--font-cormorant-garamond)] text-4xl md:text-5xl font-medium text-koine-dark mb-6">
          Hablemos
        </h2>
        <p className="font-[family-name:var(--font-dm-sans)] text-koine-dark/75 text-base md:text-lg leading-relaxed mb-10">
          ¿Querés saber más sobre lo que hacemos, o tenés una idea de lo que
          necesitás y querés conversarlo? Escribinos. De ahí en adelante, lo
          construimos juntos.
        </p>

        {/* Contact buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="font-[family-name:var(--font-dm-sans)] inline-flex items-center justify-center gap-3 bg-[#25D366] text-white text-sm font-medium px-8 py-4 rounded-full hover:bg-[#1ebe5d] transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5 shrink-0"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            Escribinos por WhatsApp
          </a>

          <a
            href="mailto:contacto@koine.edu.ar"
            className="font-[family-name:var(--font-dm-sans)] inline-flex items-center justify-center gap-3 bg-koine-terracota text-white text-sm font-medium px-8 py-4 rounded-full hover:bg-koine-salmon transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5 shrink-0"
            >
              <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
              <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
            </svg>
            Escribinos por correo
          </a>
        </div>

        {/* Form */}
        <div className="bg-koine-cream rounded-2xl p-8 text-left">
          {status === "success" ? (
            <div className="text-center py-8">
              <p className="font-[family-name:var(--font-cormorant-garamond)] text-2xl text-koine-terracota mb-2">
                ¡Gracias!
              </p>
              <p className="font-[family-name:var(--font-dm-sans)] text-sm text-koine-dark/70">
                Recibimos tu consulta y te respondemos a la brevedad.
              </p>
            </div>
          ) : (
            <>
            <h3 className="font-[family-name:var(--font-cormorant-garamond)] text-2xl font-medium text-koine-dark mb-6">
              O completá este formulario
            </h3>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Tu nombre"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="font-[family-name:var(--font-dm-sans)] w-full border border-koine-dark/20 rounded-xl px-4 py-3 text-sm text-koine-dark bg-white focus:outline-none focus:border-koine-terracota"
              />
              <input
                type="email"
                placeholder="Tu email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="font-[family-name:var(--font-dm-sans)] w-full border border-koine-dark/20 rounded-xl px-4 py-3 text-sm text-koine-dark bg-white focus:outline-none focus:border-koine-terracota"
              />
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="font-[family-name:var(--font-dm-sans)] w-full border border-koine-dark/20 rounded-xl px-4 py-3 text-sm text-koine-dark bg-white focus:outline-none focus:border-koine-terracota"
              >
                <option value="">Soy...</option>
                <option value="directivo">Directivo/a</option>
                <option value="docente">Docente</option>
                <option value="familia">Familia</option>
                <option value="otro">Otro</option>
              </select>
              <textarea
                rows={4}
                placeholder="¿En qué podemos ayudarte?"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className="font-[family-name:var(--font-dm-sans)] w-full border border-koine-dark/20 rounded-xl px-4 py-3 text-sm text-koine-dark bg-white focus:outline-none focus:border-koine-terracota resize-none"
              />

              {status === "error" && (
                <p className="font-[family-name:var(--font-dm-sans)] text-xs text-red-600">
                  Hubo un problema al enviar. Por favor intentá de nuevo o
                  escribinos por WhatsApp.
                </p>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="font-[family-name:var(--font-dm-sans)] bg-koine-terracota text-white text-sm font-medium py-3.5 rounded-full hover:bg-koine-salmon transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "loading" ? "Enviando..." : "Enviar consulta"}
              </button>
            </form>
            </>
          )}
        </div>
      </motion.div>
    </section>
  );
}
