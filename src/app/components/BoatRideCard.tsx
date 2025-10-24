"use client";

import Image from "next/image";
import Link from "next/link";

interface BoatRideCardProps {
  title: string;
  description: string;
  imageSrc: string;
  duration: string;
  price: number;
  timing: string;
  highlights: string[];
}

export default function BoatRideCard({ 
  title, 
  description, 
  imageSrc, 
  duration, 
  price, 
  timing,
  highlights 
}: BoatRideCardProps) {
  return (
    <div className="group bg-gradient-to-br from-white via-[#fff7ec] to-[#fbeee0] rounded-2xl shadow-xl border-2 border-neutral-200 overflow-hidden transition-all duration-300 hover:border-[#be6b00]/60 hover:scale-[1.02]">
      <div className="aspect-video relative overflow-hidden">
        <Image
          src={imageSrc}
          alt={`${title} boat ride`}
          fill
          className="object-cover transform group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold">{title}</h3>
          <div className="text-right">
            <div className="text-2xl font-bold text-[#be6b00]">₹{price}</div>
            <div className="text-sm text-neutral-500">per person</div>
          </div>
        </div>
        
        <p className="text-neutral-600 mb-4">{description}</p>
        
        <div className="space-y-2 mb-4">
          <div className="flex gap-2 text-sm">
            <span className="font-semibold min-w-[80px]">Duration:</span>
            <span>{duration}</span>
          </div>
          <div className="flex gap-2 text-sm">
            <span className="font-semibold min-w-[80px]">Timings:</span>
            <span>{timing}</span>
          </div>
        </div>

        <div className="mb-4">
          <h4 className="text-sm font-semibold mb-2">Highlights:</h4>
          <ul className="text-sm text-neutral-600 space-y-1">
            {highlights.map((highlight, index) => (
              <li key={index} className="flex items-start">
                <span className="text-[#be6b00] mr-2">•</span>
                {highlight}
              </li>
            ))}
          </ul>
        </div>

        <Link 
          href="/book" 
          className="inline-block w-full text-center bg-[#be6b00] text-white py-2 px-4 rounded-lg font-semibold hover:bg-[#a45a00] transition-colors"
        >
          Book Now
        </Link>
      </div>
    </div>
  );
}