"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Clock, MapPin, Info } from "lucide-react";

export default function TemplesPage() {
  const temples = [
    {
      name: "Kashi Vishwanath Temple",
      description: "One of the most famous Hindu temples dedicated to Lord Shiva. The temple stands on the western bank of the holy river Ganga and is one of the twelve Jyotirlingas.",
      imageSrc: "/temples/kashi-vishwanath.jpg",
      timing: "3:00 AM - 11:00 PM",
      significance: "Main temple of Varanasi, believed to be the first Jyotirlinga"
    },
    {
      name: "Sankat Mochan Hanuman Temple",
      description: "A sacred temple dedicated to Lord Hanuman, founded by saint-poet Tulsidas. Known for its spiritual atmosphere and morning/evening aartis.",
      imageSrc: "/temples/sankat-mochan.jpg",
      timing: "5:00 AM - 10:00 PM",
      significance: "Founded by Goswami Tulsidas, author of the Ramcharitmanas"
    },
    {
      name: "Durga Temple (Monkey Temple)",
      description: "A beautiful red-colored temple dedicated to Goddess Durga, known for its unique architecture and the monkeys that reside in the temple premises.",
      imageSrc: "/temples/durga-temple.jpg",
      timing: "4:00 AM - 9:00 PM",
      significance: "Built in Nagara style architecture in the 18th century"
    },
    {
      name: "Tulsi Manas Temple",
      description: "Modern marble temple dedicated to Lord Rama, built where Tulsidas wrote the famous Ramcharitmanas. Features beautiful carvings depicting scenes from the epic.",
      imageSrc: "/temples/tulsi-manas.jpg",
      timing: "5:30 AM - 12:00 PM, 4:00 PM - 9:00 PM",
      significance: "Site where Ramcharitmanas was written"
    },
    {
      name: "New Vishwanath Temple",
      description: "Located in BHU campus, this modern temple is also known as Birla Temple. Features marble construction with a unique blend of temple architecture styles.",
      imageSrc: "/temples/new-vishwanath.jpg",
      timing: "4:00 AM - 11:00 PM",
      significance: "Largest temple within a university campus"
    },
    {
      name: "Annapurna Temple",
      description: "Dedicated to Annapurna, the goddess of food. Located near the Kashi Vishwanath temple, it's an important shrine for food and nourishment.",
      imageSrc: "/temples/annapurna.jpg",
      timing: "4:30 AM - 10:00 PM",
      significance: "Important shrine for Anna Daan (food donation)"
    },
    {
      name: "Nepali Temple",
      description: "A wooden temple built in Nepali architecture style, featuring intricate carvings. Also known as Kathwala Temple.",
      imageSrc: "/temples/nepali-temple.jpg",
      timing: "6:00 AM - 8:00 PM",
      significance: "Unique wooden architecture with Nepali craftsmanship"
    },
    {
      name: "Kaal Bhairav Temple",
      description: "Ancient temple dedicated to Kaal Bhairav, the fierce manifestation of Shiva and the guardian deity of Varanasi.",
      imageSrc: "/temples/kaal-bhairav.jpg",
      timing: "5:00 AM - 11:00 PM",
      significance: "Protector deity of Varanasi"
    }
  ];

  return (
    <main className="min-h-screen bg-[#fffbf2]">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/temples-hero.png"
            alt="Kashi Vishwanath Temple"
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
            Sacred Temples
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-orange-100"
          >
            Discover the divine temples that have drawn pilgrims for centuries.
          </motion.p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-16 -mt-20 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {temples.map((temple, idx) => (
            <motion.div
              key={temple.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="relative h-56 bg-neutral-200 overflow-hidden">
                {temple.imageSrc && (
                  <Image
                    src={temple.imageSrc}
                    alt={temple.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-neutral-900 mb-3 group-hover:text-[#d97706] transition-colors">
                  {temple.name}
                </h3>
                <p className="text-neutral-600 text-sm mb-4 line-clamp-3">{temple.description}</p>

                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2 text-neutral-700">
                    <Clock size={16} className="mt-0.5 text-[#d97706] shrink-0" />
                    <span><strong>Timing:</strong> {temple.timing}</span>
                  </div>
                  <div className="flex items-start gap-2 text-neutral-700">
                    <Info size={16} className="mt-0.5 text-[#d97706] shrink-0" />
                    <span className="line-clamp-2"><strong>Significance:</strong> {temple.significance}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}