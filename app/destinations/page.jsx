import DestinationGrid from "./DestinationGrid";

export const metadata = {
  title: "Destinations",
  description: "This is destinations page",
};
export default function DestinationsPage() {
  const destinations = [
    {
      id: 1,
      slug: "bali",
      name: "Bali, Indonesia",
      subtitle: "Beaches & Culture",
      img: "https://images.unsplash.com/photo-1493558103817-58b2924bce98?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=placeholder",
      price: 4990,
      tags: ["beach", "culture"],
      popular: true,
    },
    {
      id: 2,
      slug: "kyoto",
      name: "Kyoto, Japan",
      subtitle: "Temples & Seasons",
      img: "https://images.unsplash.com/photo-1549692520-acc6669e2f0c?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=placeholder",
      price: 5990,
      tags: ["history", "temples"],
    },
    {
      id: 3,
      slug: "swiss-alps",
      name: "Swiss Alps, Switzerland",
      subtitle: "Mountains & Hiking",
      img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=placeholder",
      price: 8990,
      tags: ["mountains", "hiking"],
    },
    {
      id: 4,
      slug: "cape-town",
      name: "Cape Town, South Africa",
      subtitle: "Coast & Wildlife",
      img: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=placeholder",
      price: 6990,
      tags: ["coast", "wildlife"],
    },
    // ...more
  ];

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-15">
      <h2 className="text-4xl sm:text-5xl font-extrabold mb-10 py-15 text-center bg-gradient-to-r from-indigo-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent">
        Explore Destinations
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {destinations.map((d) => (
          <DestinationGrid key={d.id} d={d}/>
        ))}
      </div>
    </main>
  );
}
