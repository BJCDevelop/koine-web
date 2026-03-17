"use client";

import { motion } from "framer-motion";
import KoineLogo from "./KoineLogo";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen bg-koine-salmon overflow-hidden flex flex-col items-center justify-center text-center px-6 py-24"
    >
      {/* Video background — desktop */}
      <video
        className="hidden md:block absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        poster="/videos/hero-desktop-poster.jpg"
        aria-hidden="true"
      >
        <source src="/videos/hero-desktop-opt.webm" type="video/webm" />
        <source src="/videos/hero-desktop-full.mp4" type="video/mp4" />
      </video>

      {/* Video background — mobile */}
      <video
        className="block md:hidden absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        poster="/videos/hero-mobile-poster.jpg"
        aria-hidden="true"
      >
        <source src="/videos/hero-mobile-opt.webm" type="video/webm" />
        <source src="/videos/hero-mobile-full.mp4" type="video/mp4" />
      </video>

      {/* Overlay — over video on desktop, over salmon fallback on mobile */}
      <div className="absolute inset-0 bg-koine-dark/45" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 max-w-3xl"
      >
        {/* Logo */}
        <h1 className="font-[family-name:var(--font-cormorant-garamond)] text-6xl md:text-8xl tracking-wide mb-2">
          <KoineLogo textColor="text-white" accentColor="text-koine-terracota" />
        </h1>

        {/* Subtitle */}
        <p className="font-[family-name:var(--font-dm-sans)] text-white/60 text-xs md:text-sm tracking-[0.25em] uppercase mb-10">
          Consultora educativa
        </p>

        {/* Tagline */}
        <p className="font-[family-name:var(--font-cormorant-garamond)] italic text-2xl md:text-4xl text-white/90 leading-relaxed mb-12">
          Cuando el lenguaje es{" "}
          <span className="text-koine-salmon">común</span>, crecemos en{" "}
          <span className="text-koine-salmon">comunidad</span>.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#servicios"
            className="font-[family-name:var(--font-dm-sans)] bg-koine-terracota text-white text-sm font-medium px-8 py-3.5 rounded-full shadow-lg hover:shadow-2xl hover:-translate-y-0.5 hover:bg-koine-salmon transition-all duration-200"
          >
            Conocé nuestros servicios
          </a>
          <a
            href="#contacto"
            className="font-[family-name:var(--font-dm-sans)] bg-white text-koine-dark text-sm font-medium px-8 py-3.5 rounded-full shadow-lg hover:shadow-2xl hover:-translate-y-0.5 hover:bg-koine-cream transition-all duration-200"
          >
            Escribinos
          </a>
        </div>
      </motion.div>
    </section>
  );
}
