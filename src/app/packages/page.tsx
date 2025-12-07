"use client";

import { Suspense } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import PackagesContent from "./PackagesContent";

export default function PackagesPage() {
  return (
    <main className="min-h-screen bg-[#fffbf2]">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/packages-hero.png"
            alt="Varanasi Boat"
            fill
            className="object-cover brightness-[0.7]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-[#fffbf2]" />
        </div>
        <div className="relative z-10 text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold text-white mb-4 text-shadow-lg"
          >
            Curated Journeys
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-orange-100 max-w-2xl mx-auto"
          >
            Choose the perfect itinerary to experience the soul of Kashi.
          </motion.p>
        </div>
      </section>

      <Suspense fallback={
        <div className="max-w-7xl mx-auto px-4 py-16 -mt-20 relative z-20">
          <div className="text-center text-neutral-600">Loading packages...</div>
        </div>
      }>
        <PackagesContent />
      </Suspense>
    </main>
  );
}
