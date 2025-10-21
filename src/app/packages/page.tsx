import PackageCard from "../components/PackageCard";
import Itinerary from "../components/Itinerary";
import BookingForm from "../components/BookingForm";

export default function PackagesPage() {
  const pricePerPerson = 6999; // example price

  const days = [
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

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold mb-4">Varanasi 3-day package</h1>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-4">
          <PackageCard title="Varanasi Essentials" pricePerPerson={pricePerPerson} days={3} summary="A compact 3-day itinerary covering must-see experiences in Varanasi." />
          <Itinerary days={days} />
        </div>

        <div className="space-y-4">
          <BookingForm pricePerPerson={pricePerPerson} />
        </div>
      </div>
    </div>
  );
}
