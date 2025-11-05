import Link from "next/link";

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
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-4xl sm:text-5xl font-extrabold mb-10 text-center bg-gradient-to-r from-indigo-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent">
        Explore Destinations
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {destinations.map((d) => (
          <article
            key={d.id}
            className="relative rounded-2xl overflow-hidden shadow-lg transform hover:scale-105 transition-all bg-white/5 backdrop-blur-md border border-white/10"
            aria-labelledby={`dest-title-${d.id}`}
          >
            {/* Image */}
            <Link href={`/destinations/${d.slug}`} className="block" aria-label={`Open ${d.name} destination`}>
              <img
                src={d.img}
                alt={d.name}
                loading="lazy"
                className="w-full h-48 object-cover"
              />
            </Link>

            {/* Content */}
            <div className="p-5">
              <h3 id={`dest-title-${d.id}`} className="font-semibold text-white text-lg">
                <Link href={`/destinations/${d.slug}`} className="hover:underline">
                  {d.name}
                </Link>
              </h3>
              <p className="text-sm text-gray-300 mt-1">{d.subtitle}</p>

              <div className="mt-4 flex items-center justify-between gap-4">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="font-bold text-lg bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-pink-300 to-orange-400">
                    ৳{Number(d.price).toLocaleString()}
                  </span>

                  {/* tags */}
                  <div className="flex gap-2 flex-wrap">
                    {d.tags?.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-2 py-0.5 rounded-full bg-white/6 text-white/90 border border-white/5"
                      >
                        #{t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* View button */}
                <Link
                  href={`/destinations/${d.slug}`}
                  className="relative inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold text-white
                             bg-gradient-to-r from-indigo-500/60 to-pink-500/60 backdrop-blur-sm
                             hover:from-indigo-500 hover:to-pink-500 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
                  aria-label={`View ${d.name}`}
                >
                  View
                  <span className="absolute inset-0 rounded-lg bg-white/10 opacity-0 hover:opacity-20 transition" />
                </Link>
              </div>
            </div>

            {/* overlay badge */}
            {d.popular && (
              <div className="absolute top-3 left-3">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-amber-400 text-black shadow">
                  ★ Popular
                </span>
              </div>
            )}

            {/* image hover gradient (subtle) */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 hover:opacity-60 transition-opacity rounded-2xl pointer-events-none"></div>
          </article>
        ))}
      </div>
    </main>
  );
}
