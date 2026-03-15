interface KoineLogoProps {
  textColor?: string;
  accentColor?: string;
  className?: string;
}

export default function KoineLogo({
  textColor = "text-koine-dark",
  accentColor = "text-koine-terracota",
  className = "",
}: KoineLogoProps) {
  return (
    <span className={`font-bold ${textColor} ${className}`}>
      Koin<span className={`font-bold ${accentColor}`}>é</span>
    </span>
  );
}
