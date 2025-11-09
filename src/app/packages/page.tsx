"use client";
import PackageCard from "../components/PackageCard";
import Itinerary from "../components/Itinerary";
import BookingForm from "../components/BookingForm";
import { useState } from "react";

export default function PackagesPage() {
  const [selected, setSelected] = useState<3 | 5 | null>(3);

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
      {/* Carousel removed as per design */}
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
      {/* photos removed */}
    </div>
  );
}
