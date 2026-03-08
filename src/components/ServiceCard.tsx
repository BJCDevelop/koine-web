interface ServiceCardProps {
  icon: string;
  title: string;
  audience: string;
  description: string;
  featured?: boolean;
}

export default function ServiceCard({
  icon,
  title,
  audience,
  description,
  featured = false,
}: ServiceCardProps) {
  return (
    <div
      className={`rounded-2xl p-8 flex flex-col gap-4 transition-shadow hover:shadow-md ${
        featured
          ? "bg-koine-terracota text-white"
          : "bg-white text-koine-dark"
      }`}
    >
      <span className="text-4xl">{icon}</span>
      <div>
        <span
          className={`font-[family-name:var(--font-dm-sans)] text-xs font-medium uppercase tracking-widest ${
            featured ? "text-white/70" : "text-koine-terracota"
          }`}
        >
          {audience}
        </span>
        <h3
          className={`font-[family-name:var(--font-cormorant-garamond)] text-2xl font-medium mt-1 ${
            featured ? "text-white" : "text-koine-dark"
          }`}
        >
          {title}
        </h3>
      </div>
      <p
        className={`font-[family-name:var(--font-dm-sans)] text-sm leading-relaxed ${
          featured ? "text-white/85" : "text-koine-dark/70"
        }`}
      >
        {description}
      </p>
    </div>
  );
}
