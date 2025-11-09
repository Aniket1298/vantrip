"use client";

import Image from "next/image";

interface TempleCardProps {
  name: string;
  description: string;
  imageSrc: string;
  timing?: string;
  significance?: string;
}

export default function TempleCard({ name, description, imageSrc, timing, significance }: TempleCardProps) {
  return (
    <div className="group bg-gradient-to-br from-white via-[#fff7ec] to-[#fbeee0] rounded-2xl shadow-xl border-2 border-neutral-200 overflow-hidden transition-all duration-300 hover:border-[#be6b00]/60 hover:scale-[1.02]">
      <div className="aspect-[4/3] relative overflow-hidden">
        <Image
          src={imageSrc}
          alt={`${name} temple`}
          fill
          className="object-cover transform group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{name}</h3>
        <p className="text-neutral-600 mb-4">{description}</p>
        {timing && (
          <div className="text-sm">
            <span className="font-semibold">Timing:</span> {timing}
          </div>
        )}
        {significance && (
          <div className="mt-2 text-sm text-neutral-500">
            <span className="font-semibold">Significance:</span> {significance}
          </div>
        )}
      </div>
    </div>
  );
}