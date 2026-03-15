import KoineLogo from "./KoineLogo";

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
