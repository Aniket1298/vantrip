"use client";
import PackageCard from "../components/PackageCard";
import Itinerary from "../components/Itinerary";
import BookingForm from "../components/BookingForm";
import Carousel from "../components/Carousel";
import { useState } from "react";

export default function PackagesPage() {
  const [selected, setSelected] = useState<3 | 5 | null>(3);
  const [showCarousel, setShowCarousel] = useState(true);

  // Carousel images (public/carousel/*)
  const carouselImages = [
    "/carousel/e83ec978-76a8-4503-a983-db45ec0e28b1.jpg",
    "/carousel/b74ea1d4-e0b5-4558-b048-c21b5bc2507d.jpg",
    "/carousel/aaf73f31-ca6c-4b1a-976e-de256b135a7b.jpg",
    "/carousel/779e9917-bea4-4cfc-9923-c1ce18748eed.jpg",
    "/carousel/4b25780b-16eb-4f85-9285-d7b1b14d45aa.jpg",
    "/carousel/43929d67-a5dd-4627-b862-08ae386653e0.jpg",
    "/carousel/35365c60-ddfb-4fd6-8b0d-9da04df94e3c.jpg",
    "/carousel/26575e1e-2d00-4a04-9735-0408475ecc2a.jpg",
  ];

  // 3-day package
  const price3 = 6999;
  const days3 = [
    {
      day: 1,
      title: "Arrival & Ghat Walk",
      points: [
        "Pickup from Varanasi railway station / airport",
        "Check-in to hotel",
        "Evening Ghat walk and Ganga Aarti",
      ],
    },
    {
      day: 2,
      title: "Temple Tour",
      points: ["Breakfast at hotel", "Visit Kashi Vishwanath Temple", "Explore local markets"],
    },
    {
      day: 3,
      title: "Boat Ride & Departure",
      points: ["Early morning boat ride on the Ganges", "Return to hotel and checkout", "Drop at station/airport"],
    },
  ];

  // 5-day package
  const price5 = 10999;
  const days5 = [
    {
      day: 1,
      title: "Arrival & Ghat Walk",
      points: [
        "Pickup from Varanasi railway station / airport",
        "Check-in to hotel",
        "Evening Ghat walk and Ganga Aarti",
      ],
    },
    {
      day: 2,
      title: "Temple Tour",
      points: [
        "Breakfast at hotel",
        "Visit Kashi Vishwanath Temple",
        "Visit Sankat Mochan Hanuman Temple",
        "Explore local markets",
      ],
    },
    {
      day: 3,
      title: "Sarnath & Silk Weaving",
      points: [
        "Excursion to Sarnath (Buddhist site)",
        "Visit silk weaving workshops",
        "Evening at leisure",
      ],
    },
    {
      day: 4,
      title: "Boat Ride & Food Walk",
      points: [
        "Early morning boat ride on the Ganges",
        "Guided street food walk",
        "Optional yoga session",
      ],
    },
    {
      day: 5,
      title: "Departure",
      points: [
        "Breakfast at hotel",
        "Checkout",
        "Drop at station/airport",
      ],
    },
  ];

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8">
      {/* Carousel toggleable at the top */}
      {showCarousel && (
        <div className="mb-8">
          <Carousel images={carouselImages} />
        </div>
      )}
      <h1 className="text-3xl font-bold mb-8">Choose your Varanasi package</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* 3-day card */}
        <div
          className={`group transition-all duration-300 rounded-2xl shadow-xl border-2 cursor-pointer bg-gradient-to-br from-white via-[#fff7ec] to-[#fbeee0] ${selected === 3 ? "border-[#be6b00] ring-2 ring-[#be6b00]/40 scale-[1.025]" : "border-neutral-200 hover:border-[#be6b00]/60 hover:scale-[1.01]"}`}
          onClick={() => setSelected(3)}
        >
          <div className="p-8 sm:p-7 md:p-8">
            <PackageCard
              title="Varanasi Essentials"
              pricePerPerson={price3}
              days={3}
              summary="A compact 3-day itinerary covering must-see experiences in Varanasi."
            />
            {selected === 3 && (
              <>
                <div className="mt-6">
                  <Itinerary days={days3} />
                </div>
                <div className="mt-6">
                  <BookingForm pricePerPerson={price3} />
                </div>
              </>
            )}
          </div>
        </div>

        {/* 5-day card */}
        <div
          className={`group transition-all duration-300 rounded-2xl shadow-xl border-2 cursor-pointer bg-gradient-to-br from-white via-[#fff7ec] to-[#fbeee0] ${selected === 5 ? "border-[#be6b00] ring-2 ring-[#be6b00]/40 scale-[1.025]" : "border-neutral-200 hover:border-[#be6b00]/60 hover:scale-[1.01]"}`}
          onClick={() => setSelected(5)}
        >
          <div className="p-8 sm:p-7 md:p-8">
            <PackageCard
              title="Varanasi Explorer"
              pricePerPerson={price5}
              days={5}
              summary="A deeper 5-day journey including Sarnath, silk weaving, food walk, and more temples."
            />
            {selected === 5 && (
              <>
                <div className="mt-6">
                  <Itinerary days={days5} />
                </div>
                <div className="mt-6">
                  <BookingForm pricePerPerson={price5} />
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      {/* Toggle button at the bottom */}
      <div className="flex justify-center mt-10">
        <button
          className="btn px-6 py-2 rounded-lg text-base font-semibold shadow-md bg-[#be6b00] hover:bg-[#a45a00] text-white transition"
          onClick={() => setShowCarousel((v) => !v)}
        >
          {showCarousel ? "Hide Photos" : "Show Photos"}
        </button>
      </div>
    </div>
  );
}
