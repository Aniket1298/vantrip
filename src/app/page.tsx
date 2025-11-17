
import Link from "next/link";
import Carousel from "./components/Carousel";
// ...existing code...
import Image from "next/image";

export default function Home() {
  const samplePackages = [
    { title: "Varanasi Essentials", price: 6999, days: 3, summary: "A compact 3-day itinerary covering must-see experiences.", image: '/carousel/e83ec978-76a8-4503-a983-db45ec0e28b1.jpg' },
    { title: "Varanasi Explorer", price: 10999, days: 5, summary: "A deeper 5-day journey including Sarnath, food walk and more.", image: '/carousel/b74ea1d4-e0b5-4558-b048-c21b5bc2507d.jpg' },
  ];

  const testimonials = [
    { name: "Asha R.", quote: "Magical experience — the boat ride and aarti were unforgettable!" },
    { name: "James M.", quote: "Well-organized and informative. Highly recommend the heritage tour." },
  ];

  return (
    <main className="pb-12">
      {/* Top carousel */}
      <div className="mb-8">
        <Carousel
          images={[
            "/carousel/e83ec978-76a8-4503-a983-db45ec0e28b1.jpg",
            "/carousel/b74ea1d4-e0b5-4558-b048-c21b5bc2507d.jpg",
            "/carousel/aaf73f31-ca6c-4b1a-976e-de256b135a7b.jpg",
          ]}
        />
      </div>

      {/* Hero */}
      <section className="-mt-20 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-white via-[#fff7ec] to-[#fbeee0] rounded-2xl shadow-2xl p-8 md:p-12 border border-[#f3e7d7] flex flex-col items-center text-center">
          <div className="w-full max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">Experience Varanasi — The City of Light</h1>
            <p className="text-lg text-neutral-700 mb-6">Walk the ghats, witness the Ganga Aarti, explore ancient temples, and taste the unique flavors of this timeless city. Our curated trips make it easy to experience the best of Varanasi.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/packages" className="btn inline-block px-6 py-3 rounded-lg bg-[#be6b00] text-white font-semibold shadow">Explore packages</Link>
              <Link href="/temples" className="inline-block px-6 py-3 rounded-lg border border-[#be6b00] text-[#be6b00] bg-white">Discover temples</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="card">
            <h3 className="text-lg font-semibold mb-2">Local experts</h3>
            <p className="text-sm text-neutral-600">Experienced guides who know the ghats, rituals, and hidden corners of Varanasi.</p>
          </div>
          <div className="card">
            <h3 className="text-lg font-semibold mb-2">Hassle-free booking</h3>
            <p className="text-sm text-neutral-600">Transparent pricing, secure payments, and reliable pickups from station/airport.</p>
          </div>
          <div className="card">
            <h3 className="text-lg font-semibold mb-2">Small groups & private options</h3>
            <p className="text-sm text-neutral-600">Choose small-group or private itineraries for a personalized experience.</p>
          </div>
        </div>
      </section>

      {/* Packages teaser */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 mt-10">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Popular packages</h2>
          <Link href="/packages" className="text-sm text-[#be6b00]">View all</Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {samplePackages.map((p) => (
            <div key={p.title} className="card p-6 flex items-center gap-6">
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2">{p.title}</h3>
                <p className="text-neutral-600 mb-4">{p.summary}</p>
                <div className="flex items-center gap-4">
                  <div className="text-lg font-bold">₹{p.price.toLocaleString()}</div>
                  <div className="text-sm text-neutral-500">{p.days} days</div>
                </div>
              </div>
              <div className="w-36 h-24 rounded-lg overflow-hidden border border-[#f3e7d7]">
                <Image src={p.image} alt={`${p.title} preview`} width={144} height={96} className="w-full h-full object-cover" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 mt-10">
        <h2 className="text-2xl font-bold mb-6">Traveler stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t) => (
            <blockquote key={t.name} className="card">
              <p className="text-neutral-700 mb-4">“{t.quote}”</p>
              <footer className="text-sm text-neutral-500">— {t.name}</footer>
            </blockquote>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 mt-12">
        <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col sm:flex-row items-center justify-between border border-[#f3e7d7]">
          <div>
            <h3 className="text-xl font-bold">Ready to explore Varanasi?</h3>
            <p className="text-neutral-600">Choose a package or get in touch for a custom itinerary.</p>
          </div>
          <div className="mt-4 sm:mt-0">
            <Link href="/packages" className="inline-block px-6 py-3 rounded-lg border border-neutral-200 text-neutral-700 bg-white font-semibold hover:bg-[#fff7ec] shadow-sm">Book a trip</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
