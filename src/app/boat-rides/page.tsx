"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Clock, Users, Star } from "lucide-react";

export default function BoatRidesPage() {
  const boatRides = [
    {
      title: "Sunrise Boat Ride",
      description: "Experience the magical sunrise over the Ganges as the city awakens. Watch morning rituals and ceremonies along the ghats.",
      duration: "2 hours",
      price: 999,
      timing: "4:30 AM - 6:30 AM",
      highlights: [
        "Witness the spectacular sunrise over the Ganges",
        "See morning rituals at main ghats",
        "Professional guide explaining traditions",
        "Visit to Manikarnika Ghat",
        "Tea and snacks included"
      ]
    },
    {
      title: "Evening Ganga Aarti",
      description: "Witness the mesmerizing Ganga Aarti ceremony from the river. Perfect view of the grand ritual at Dashashwamedh Ghat.",
      duration: "2.5 hours",
      price: 1299,
      timing: "5:00 PM - 7:30 PM",
      highlights: [
        "Prime view of the Ganga Aarti ceremony",
        "Evening boat ride along illuminated ghats",
        "Live classical music on boat",
        "Professional photographer",
        "Flower ceremony included"
      ]
    },
    {
      title: "Full Moon Boat Ride",
      description: "A serene night ride under the full moon, experiencing the spiritual atmosphere of Varanasi after dark.",
      duration: "1.5 hours",
      price: 1499,
      timing: "8:00 PM - 9:30 PM",
      highlights: [
        "Moonlit ride on the Ganges",
        "View of illuminated ghats",
        "Traditional music performance",
        "Special puja ceremony",
        "Light refreshments served"
      ]
    },
    {
      title: "Heritage Ghat Tour",
      description: "Comprehensive tour covering all major ghats, with detailed explanations of their history and significance.",
      duration: "3 hours",
      price: 1799,
      timing: "7:00 AM - 10:00 AM",
      highlights: [
        "Visit all 88 major ghats",
        "Expert historian guide",
        "Photo opportunities",
        "Breakfast included",
        "Visit to hidden temples"
      ]
    },
    {
      title: "Sunset Photography Tour",
      description: "Perfect for photography enthusiasts. Capture the golden hour light on the ghats and river life.",
      duration: "2 hours",
      price: 1599,
      timing: "4:30 PM - 6:30 PM",
      highlights: [
        "Professional photography guide",
        "Best sunset viewpoints",
        "Traditional boat",
        "Camera equipment available",
        "Photo editing workshop included"
      ]
    },
    {
      title: "Private Romantic Ride",
      description: "Exclusive boat ride for couples with decorated boat and personalized service.",
      duration: "1.5 hours",
      price: 2499,
      timing: "Available on request",
      highlights: [
        "Decorated private boat",
        "Champagne and snacks",
        "Live instrumental music",
        "Professional photographer",
        "Flower ceremony"
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-[#fffbf2]">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/boat-rides-hero.png"
            alt="Boat Rides on the Ganges"
            fill
            className="object-cover brightness-[0.6]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-[#fffbf2]" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold text-white mb-4 text-shadow-lg"
          >
            Boat Rides
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-orange-100"
          >
            Experience the spiritual heart of Varanasi from the sacred Ganges.
          </motion.p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-16 -mt-20 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {boatRides.map((ride, idx) => (
            <motion.div
              key={ride.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 group relative overflow-hidden shadow-lg border border-neutral-100"
            >
              <div className="absolute top-0 right-0 bg-[#d97706] text-white px-4 py-2 rounded-bl-2xl font-bold shadow-lg">
                ₹{ride.price}
              </div>

              <div className="mt-8">
                <h3 className="text-2xl font-bold text-neutral-900 mb-2 group-hover:text-[#d97706] transition-colors">
                  {ride.title}
                </h3>
                <p className="text-neutral-600 mb-4">{ride.description}</p>

                <div className="flex items-center gap-4 text-sm text-neutral-700 mb-6 pb-6 border-b border-neutral-200">
                  <div className="flex items-center gap-1">
                    <Clock size={16} className="text-[#d97706]" />
                    <span>{ride.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users size={16} className="text-[#d97706]" />
                    <span>{ride.timing}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="font-bold text-sm uppercase tracking-wide text-neutral-700 mb-3">Highlights</h4>
                  <ul className="space-y-2">
                    {ride.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-neutral-600">
                        <Star size={14} className="text-[#d97706] mt-1 shrink-0 fill-current" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="mt-6 w-full py-3 bg-[#d97706] text-white rounded-xl font-semibold hover:bg-[#b45309] transition-colors shadow-lg">
                  Book Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}