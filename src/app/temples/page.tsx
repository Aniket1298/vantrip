import TempleCard from "../components/TempleCard";

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
    <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="bg-gradient-to-br from-white via-[#fff7ec] to-[#fbeee0] rounded-2xl shadow-xl p-8 md:p-12 border border-[#f3e7d7] mb-12">
        <h1 className="text-4xl font-bold mb-4">Sacred Temples of Varanasi</h1>
        <p className="text-lg text-neutral-700">
          Discover the divine temples of Varanasi, each with its unique history and spiritual significance. 
          From the magnificent Kashi Vishwanath to the serene Tulsi Manas Temple, explore these architectural 
          and spiritual marvels that have drawn pilgrims for centuries.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {temples.map((temple) => (
          <TempleCard
            key={temple.name}
            name={temple.name}
            description={temple.description}
            imageSrc={temple.imageSrc}
            timing={temple.timing}
            significance={temple.significance}
          />
        ))}
      </div>
    </main>
  );
}