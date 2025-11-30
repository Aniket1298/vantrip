"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Clock, Star, ArrowRight } from "lucide-react";
import BookingForm from "../components/BookingForm";

export default function PackagesPage() {
  const [selected, setSelected] = useState<3 | 5 | null>(3);

  const packages = [
    {
      id: 3,
      title: "Varanasi Essentials",
      price: 6999,
      days: 3,
      summary: "A compact 3-day itinerary covering must-see experiences.",
      image: "/package-1.png",
      rating: 4.8,
      itinerary: [
        { day: 1, title: "Arrival & Ghat Walk", points: ["Pickup from station/airport", "Check-in to hotel", "Evening Ghat walk & Ganga Aarti"] },
        { day: 2, title: "Temple Tour", points: ["Morning Kashi Vishwanath Darshan", "Explore ancient lanes & markets", "Evening boat ride"] },
        { day: 3, title: "Departure", points: ["Sunrise boat ride", "Breakfast & Checkout", "Drop at station/airport"] }
      ]
    },
    {
      id: 5,
      title: "Varanasi Explorer",
      price: 10999,
      days: 5,
      summary: "A deeper 5-day journey including Sarnath, food walk and more.",
      image: "/package-2.png",
      rating: 4.9,
      itinerary: [
        { day: 1, title: "Arrival & Introduction", points: ["VIP Pickup", "Welcome drink & Check-in", "Evening Aarti from private boat"] },
        { day: 2, title: "Spiritual Core", points: ["Kashi Vishwanath & Sankat Mochan", "Guided heritage walk", "Evening cultural show"] },
        { day: 3, title: "Sarnath Excursion", points: ["Visit Dhamek Stupa & Museum", "Silk weaving workshop visit", "Leisure evening"] },
        { day: 4, title: "Culture & Cuisine", points: ["Morning Yoga on Ghats", "Famous street food tour", "Evening music session"] },
        { day: 5, title: "Farewell", points: ["Morning free for shopping", "Checkout & Departure"] }
      ]
    }
  ];

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

      <section className="max-w-7xl mx-auto px-4 py-16 -mt-20 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

          {/* Package Selection List */}
          <div className="lg:col-span-5 space-y-6">
            {packages.map((pkg) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                whileHover={{ scale: 1.02 }}
                onClick={() => setSelected(pkg.id as 3 | 5)}
                className={`cursor-pointer rounded-2xl overflow-hidden border-2 transition-all duration-300 relative ${selected === pkg.id
                    ? "border-[#d97706] shadow-2xl ring-4 ring-orange-100"
                    : "border-transparent shadow-lg hover:shadow-xl bg-white"
                  }`}
              >
                <div className="relative h-48">
                  <Image src={pkg.image} alt={pkg.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-2xl font-bold">{pkg.title}</h3>
                    <div className="flex items-center gap-4 text-sm text-orange-200 mt-1">
                      <span className="flex items-center gap-1"><Clock size={14} /> {pkg.days} Days</span>
                      <span className="flex items-center gap-1"><Star size={14} className="fill-current" /> {pkg.rating}</span>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 bg-[#d97706] text-white px-3 py-1 rounded-full font-bold shadow-lg">
                    ₹{pkg.price.toLocaleString()}
                  </div>
                </div>
                <div className={`p-6 ${selected === pkg.id ? "bg-orange-50" : "bg-white"}`}>
                  <p className="text-neutral-600 mb-4">{pkg.summary}</p>
                  <div className="flex items-center text-[#d97706] font-semibold text-sm uppercase tracking-wide">
                    View Details <ArrowRight size={16} className="ml-2" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Details Panel */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              {selected && (
                <motion.div
                  key={selected}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="bg-white rounded-3xl shadow-2xl border border-neutral-100 overflow-hidden sticky top-24"
                >
                  <div className="p-8 bg-[#d97706] text-white relative overflow-hidden">
                    <div className="absolute inset-0 bg-noise opacity-20" />
                    <div className="relative z-10">
                      <h2 className="text-3xl font-bold mb-2">
                        {packages.find(p => p.id === selected)?.title} Itinerary
                      </h2>
                      <p className="text-orange-100">A day-by-day guide to your spiritual journey.</p>
                    </div>
                  </div>

                  <div className="p-8">
                    <div className="space-y-8 relative before:absolute before:left-[19px] before:top-2 before:bottom-2 before:w-0.5 before:bg-neutral-200">
                      {packages.find(p => p.id === selected)?.itinerary.map((day, idx) => (
                        <div key={idx} className="relative pl-12">
                          <div className="absolute left-0 top-1 w-10 h-10 bg-white border-4 border-[#d97706] rounded-full flex items-center justify-center font-bold text-neutral-700 z-10">
                            {day.day}
                          </div>
                          <h4 className="text-xl font-bold text-neutral-900 mb-2">{day.title}</h4>
                          <ul className="space-y-2">
                            {day.points.map((point, i) => (
                              <li key={i} className="flex items-start gap-3 text-neutral-600">
                                <Check size={18} className="text-[#d97706] mt-1 shrink-0" />
                                <span>{point}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>

                    <div className="mt-12 pt-8 border-t border-neutral-100">
                      <h3 className="text-xl font-bold mb-6">Book this Package</h3>
                      <BookingForm pricePerPerson={packages.find(p => p.id === selected)?.price || 0} />
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </section>
    </main>
  );
}
