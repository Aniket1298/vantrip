
import Link from "next/link";
import Carousel from "./components/Carousel";

export default function Home() {
  return (
    <main>

      <section className="relative overflow-visible">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-8 lg:px-12 flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2 animate-hero-fade">
            <div className="bg-gradient-to-br from-white via-[#fff7ec] to-[#fbeee0] rounded-2xl shadow-xl p-10 md:p-12 border border-[#f3e7d7]">
              <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 tracking-tight text-[#18181b]">Experience Varanasi — The City of Light</h1>
              <p className="mt-2 text-lg text-neutral-700 mb-6">
                Walk the ghats, witness the Ganga Aarti, and explore ancient temples with our curated 3-day package.<br />
                Immerse yourself in timeless rituals and local stories.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-4">
                <Link href="/packages" className="btn px-6 py-3 text-base font-semibold shadow-md bg-[#be6b00] hover:bg-[#a45a00] text-white transition rounded-lg">Explore the trip package</Link>
                <Link href="/temples" className="btn px-6 py-3 text-base font-semibold border border-[#be6b00] text-[#be6b00] bg-white hover:bg-[#fff7ec] transition rounded-lg">Learn more</Link>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="w-full max-w-md rounded-2xl shadow-2xl overflow-hidden border border-[#f3e7d7] bg-white">
              <img src="/file.svg" alt="Varanasi imagery" className="w-full h-52 sm:h-72 object-cover" />
            </div>
          </div>
        </div>
      </section>
      <Carousel
        images={[
          "/carousel/e83ec978-76a8-4503-a983-db45ec0e28b1.jpg",
          "/carousel/b74ea1d4-e0b5-4558-b048-c21b5bc2507d.jpg",
          "/carousel/aaf73f31-ca6c-4b1a-976e-de256b135a7b.jpg",
          "/carousel/779e9917-bea4-4cfc-9923-c1ce18748eed.jpg",
          "/carousel/4b25780b-16eb-4f85-9285-d7b1b14d45aa.jpg",
          "/carousel/43929d67-a5dd-4627-b862-08ae386653e0.jpg",
          "/carousel/35365c60-ddfb-4fd6-8b0d-9da04df94e3c.jpg",
          "/carousel/26575e1e-2d00-4a04-9735-0408475ecc2a.jpg",
        ]}
      />
    </main>
  );
}
