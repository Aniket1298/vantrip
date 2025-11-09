import BoatRideCard from "../components/BoatRideCard";

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
    <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="bg-gradient-to-br from-white via-[#fff7ec] to-[#fbeee0] rounded-2xl shadow-xl p-8 md:p-12 border border-[#f3e7d7] mb-12">
        <h1 className="text-4xl font-bold mb-4">Boat Rides on the Sacred Ganges</h1>
        <p className="text-lg text-neutral-700">
          Experience the spiritual heart of Varanasi from the river Ganges. Choose from our carefully curated 
          selection of boat rides, each offering a unique perspective of the ancient ghats and timeless 
          rituals that define this holy city. From mesmerizing sunrise tours to romantic evening cruises, 
          find your perfect way to connect with the divine Ganga.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {boatRides.map((ride) => (
          <BoatRideCard
            key={ride.title}
            title={ride.title}
            description={ride.description}
            duration={ride.duration}
            price={ride.price}
            timing={ride.timing}
            highlights={ride.highlights}
          />
        ))}
      </div>
    </main>
  );
}