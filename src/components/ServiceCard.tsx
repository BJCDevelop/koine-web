"use client";

import React from "react";
import { ChevronDown } from "lucide-react";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  isOpen: boolean;
  onToggle: () => void;
}

export default function ServiceCard({
  icon,
  title,
  description,
  isOpen,
  onToggle,
}: ServiceCardProps) {
  return (
    <div
      className="group bg-[#FDF8F3] border border-[#E8956A]/20 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 text-center cursor-pointer"
      style={{ borderTop: "4px solid #C4622D" }}
      onClick={onToggle}
    >
      {/* Icon + Title — always visible, min-h equalizes resting height across all cards */}
      <div className="p-8 pb-6 min-h-[190px] flex flex-col items-center justify-center">
        <div className="flex justify-center mb-4 text-koine-terracota">{icon}</div>
        <h3 className="font-[family-name:var(--font-cormorant-garamond)] text-xl font-bold text-koine-dark leading-snug">
          {title}
        </h3>
        {/* Chevron — mobile only tap hint */}
        <div className="md:hidden flex justify-center mt-4">
          <ChevronDown
            size={20}
            className={`text-koine-terracota transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </div>
      </div>

      {/* Description — Mobile: state-controlled accordion */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height] duration-300 ease-in-out px-8 ${
          isOpen ? "max-h-[500px] pb-8" : "max-h-0"
        }`}
      >
        <p className="font-[family-name:var(--font-dm-sans)] text-sm text-koine-dark/70 leading-relaxed">
          {description}
        </p>
      </div>

      {/* Description — Desktop: in-flow expansion on hover, pushes CTA down */}
      <div className="hidden md:block overflow-hidden max-h-0 group-hover:max-h-[500px] transition-[max-height] duration-300 ease-in-out px-8 group-hover:pb-8">
        <p className="font-[family-name:var(--font-dm-sans)] text-sm text-koine-dark/70 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
