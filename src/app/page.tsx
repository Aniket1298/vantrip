
import Link from "next/link";
import Carousel from "./components/Carousel";

export default function Home() {
  return (
    <main>
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

      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2 animate-hero-fade">
            <h1 className="text-4xl sm:text-5xl font-bold">Experience Varanasi — The City of Light</h1>
            <p className="mt-4 text-neutral-700 dark:text-neutral-300">
              Walk the ghats, witness the Ganga Aarti, and explore ancient temples with our curated 3-day package.
              Immerse yourself in timeless rituals and local stories.
            </p>

            <div className="mt-6 flex gap-4">
              <Link href="/packages" className="rounded-md bg-[#be6b00] px-4 py-2 text-white font-medium">Explore the trip package</Link>
              <Link href="/temples" className="rounded-md border px-4 py-2">Learn more</Link>
            </div>
          </div>

          <div className="md:w-1/2 flex justify-center">
            <div className="w-full max-w-md rounded-lg shadow-lg overflow-hidden">
              <img src="/file.svg" alt="Varanasi imagery" className="w-full h-44 sm:h-64 object-cover" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
