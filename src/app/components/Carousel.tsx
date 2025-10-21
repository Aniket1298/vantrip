"use client";

import React, { useEffect, useState } from "react";

export default function Carousel({ images }: { images: string[] }) {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const slides = Array.isArray(images) ? images : [];
  const len = slides.length;
  const delay = 3500;

  useEffect(() => {
    if (isPaused || len === 0) return;
    const id = window.setInterval(() => setIndex((i) => (i + 1) % len), delay);
    return () => window.clearInterval(id);
  }, [isPaused, len]);

  // reset index when slides change
  useEffect(() => setIndex(0), [len]);

  if (len === 0) return null;

  const fallback = "/file.svg";

  const prev = () => setIndex((i) => (i - 1 + len) % len);
  const next = () => setIndex((i) => (i + 1) % len);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div
        className="relative w-full overflow-hidden rounded-lg shadow-lg"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div
          className="flex transition-transform duration-700 ease-out"
          style={{ transform: `translateX(-${index * 100}%)`, willChange: "transform" }}
        >
          {slides.map((src, i) => (
            <div key={i} className="flex-none w-full relative">
              <div className="w-full h-72 sm:h-96 md:h-[520px] lg:h-[520px] bg-neutral-100 dark:bg-neutral-800 relative">
                <img
                  src={src}
                  alt={`carousel-${i}`}
                  loading="lazy"
                  decoding="async"
                  onError={(e) => {
                    const t = e.currentTarget as HTMLImageElement;
                    if (t.src !== fallback) t.src = fallback;
                  }}
                  style={{ transform: "translateZ(0)", backfaceVisibility: "hidden" }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>

        <button
          aria-label="Previous"
          onClick={prev}
          className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/70 p-2 shadow-sm hover:bg-white"
        >
          ‹
        </button>
        <button
          aria-label="Next"
          onClick={next}
          className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/70 p-2 shadow-sm hover:bg-white"
        >
          ›
        </button>

        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2 w-8 rounded-full ${i === index ? "bg-white" : "bg-white/50"}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}