"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Star, MapPin, Calendar, ShieldCheck, Users } from "lucide-react";

export default function Home() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const samplePackages = [
    {
      title: "Varanasi Essentials",
      price: 6499,
      days: 3,
      summary: "A compact 3-day itinerary covering must-see experiences.",
      image: '/package-1.png',
      rating: 4.8
    },
    {
      title: "Varanasi Explorer",
      price: 10999,
      days: 5,
      summary: "A deeper 5-day journey including Sarnath, food walk and more.",
      image: '/package-2.png',
      rating: 4.9
    },
  ];

  const testimonials = [
    { name: "Asha R.", quote: "Magical experience — the boat ride and aarti were unforgettable!", role: "Traveler from Mumbai" },
    { name: "James M.", quote: "Well-organized and informative. Highly recommend the heritage tour.", role: "Traveler from UK" },
  ];

  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden">
        <motion.div
          style={{ y: y1 }}
          className="absolute inset-0 z-0"
        >
          <Image
            src="/hero-bg.png"
            alt="Varanasi Ghats"
            fill
            className="object-cover brightness-[0.65]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-[#fffbf2]" />
        </motion.div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h2 className="text-[#fef3c7] text-lg md:text-xl font-medium tracking-[0.2em] uppercase mb-4">
              Welcome to the City of Light
            </h2>
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 leading-tight text-shadow-lg">
              Timeless <span className="text-[#d97706]">Kashi</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
              Walk the ancient ghats, witness the divine Ganga Aarti, and discover the spiritual heart of India.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                href="/packages"
                className="group relative px-8 py-4 bg-[#d97706] text-white rounded-full font-semibold text-lg shadow-xl hover:bg-[#b45309] transition-all overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Explore Packages <ArrowRight size={20} />
                </span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </Link>
              <Link
                href="/temples"
                className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white rounded-full font-semibold text-lg hover:bg-white/20 transition-all"
              >
                Discover Temples
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4 relative z-20 -mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Users, title: "Local Experts", desc: "Guides who know every hidden corner and story of Kashi." },
              { icon: ShieldCheck, title: "Hassle-free", desc: "Secure payments, reliable pickups, and transparent pricing." },
              { icon: Star, title: "Premium Experience", desc: "Curated itineraries for small groups and private tours." }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="glass-card p-8 rounded-2xl text-center hover:transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-[#fef3c7] rounded-full flex items-center justify-center mx-auto mb-6 text-[#d97706]">
                  <feature.icon size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-neutral-600">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Packages */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Curated Journeys</h2>
              <p className="text-neutral-600 text-lg">Handpicked experiences for the modern pilgrim.</p>
            </div>
            <Link href="/packages" className="hidden md:flex items-center gap-2 text-[#d97706] font-semibold hover:underline">
              View all packages <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {samplePackages.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group bg-[#fffbf2] rounded-3xl overflow-hidden border border-neutral-100 shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full flex items-center gap-1 text-sm font-bold shadow-sm">
                    <Star size={14} className="text-yellow-500 fill-yellow-500" /> {p.rating}
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold group-hover:text-[#d97706] transition-colors">{p.title}</h3>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-[#d97706]">₹{p.price.toLocaleString()}</p>
                      <p className="text-xs text-neutral-500">per person</p>
                    </div>
                  </div>
                  <p className="text-neutral-600 mb-6 line-clamp-2">{p.summary}</p>
                  <div className="flex items-center gap-6 text-sm text-neutral-500 mb-8">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} /> {p.days} Days
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={16} /> Varanasi
                    </div>
                  </div>
                  <Link
                    href={`/packages?package=${p.days}`}
                    className="block w-full py-3 rounded-xl border-2 border-[#d97706] text-[#d97706] font-bold hover:bg-[#d97706] hover:text-white transition-all text-center"
                  >
                    View Itinerary
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-4 bg-[#1c1917] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-pattern"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-[#fef3c7]">Stories from the Ghats</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 text-left"
              >
                <div className="mb-4 text-[#d97706]">
                  {[1, 2, 3, 4, 5].map(s => <Star key={s} size={16} className="inline fill-current" />)}
                </div>
                <p className="text-lg italic text-gray-300 mb-6">&ldquo;{t.quote}&rdquo;</p>
                <div>
                  <p className="font-bold text-white">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4">
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-[#d97706] to-[#b45309] rounded-3xl p-12 text-center text-white shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-noise opacity-20"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Ready for a Spiritual Journey?</h2>
            <p className="text-xl text-orange-100 mb-10 max-w-2xl mx-auto">
              Let us handle the details while you immerse yourself in the magic of Varanasi.
            </p>
            <Link
              href="/contact"
              className="inline-block px-10 py-4 bg-white text-[#d97706] rounded-full font-bold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
