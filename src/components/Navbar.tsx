"use client";

import { useState, useEffect } from "react";
import KoineLogo from "./KoineLogo";

const links = [
  { label: "Inicio", href: "#inicio" },
  { label: "Acerca de", href: "#nosotros" },
  { label: "Servicios", href: "#servicios" },
  { label: "Equipo", href: "#equipo" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-koine-cream/90 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-[72px] flex items-center justify-between">
        {/* Logo */}
        <a
          href="#inicio"
          className={`font-[family-name:var(--font-cormorant-garamond)] text-3xl tracking-wide transition-colors ${
            scrolled ? "text-koine-dark" : "text-white"
          }`}
        >
          <KoineLogo
            textColor={scrolled ? "text-koine-dark" : "text-white"}
            accentColor="text-koine-terracota"
          />
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`font-[family-name:var(--font-dm-sans)] text-sm font-medium transition-colors ${
                  scrolled
                    ? "text-koine-dark hover:text-koine-terracota"
                    : "text-white hover:text-koine-salmon"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Menú"
        >
          <span
            className={`block w-6 h-0.5 transition-all duration-300 ${scrolled ? "bg-koine-dark" : "bg-white"} ${open ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 transition-all duration-300 ${scrolled ? "bg-koine-dark" : "bg-white"} ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 transition-all duration-300 ${scrolled ? "bg-koine-dark" : "bg-white"} ${open ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-koine-cream/95 backdrop-blur-md border-t border-koine-salmon/20 px-6 py-4">
          <ul className="flex flex-col gap-4">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="font-[family-name:var(--font-dm-sans)] text-base font-medium text-koine-dark hover:text-koine-terracota transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
