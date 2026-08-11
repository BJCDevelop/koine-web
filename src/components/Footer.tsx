import KoineLogo from "./KoineLogo";

const INSTAGRAM_URL = "https://www.instagram.com/koineconsultora";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-koine-dark py-12 px-6">
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-6">
        {/* Logo */}
        <a
          href="#inicio"
          className="font-[family-name:var(--font-cormorant-garamond)] text-3xl tracking-wide"
        >
          <KoineLogo textColor="text-white" accentColor="text-koine-terracota" />
        </a>

        {/* Tagline */}
        <p className="font-[family-name:var(--font-dm-sans)] text-white/50 text-sm tracking-widest uppercase">
          Un lenguaje común.
        </p>

        {/* Redes sociales */}
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Seguinos en Instagram"
          className="group inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 shrink-0 transition-transform group-hover:scale-110"
          >
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
          </svg>
          <span className="font-[family-name:var(--font-dm-sans)] text-sm">
            Seguinos en Instagram
          </span>
        </a>

        {/* Links */}
        <nav className="flex flex-wrap justify-center gap-6">
          {["#inicio", "#servicios", "#equipo", "#contacto"].map((href) => {
            const label =
              href === "#inicio"
                ? "Inicio"
                : href === "#servicios"
                ? "Servicios"
                : href === "#equipo"
                ? "Equipo"
                : "Contacto";
            return (
              <a
                key={href}
                href={href}
                className="font-[family-name:var(--font-dm-sans)] text-white/50 text-sm hover:text-white transition-colors"
              >
                {label}
              </a>
            );
          })}
        </nav>

        {/* Coming soon */}
        <p className="font-[family-name:var(--font-dm-sans)] text-white/30 text-xs text-center">
          Próximamente: contenidos de Koiné en formato digital.
        </p>

        {/* Copyright */}
        <p className="font-[family-name:var(--font-dm-sans)] text-white/25 text-xs">
          © {year} Koiné Consultora Educativa
        </p>
      </div>
    </footer>
  );
}
