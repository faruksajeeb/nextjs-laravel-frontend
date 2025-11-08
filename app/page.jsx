// app/page.jsx (or wherever your HomePage lives)
import Link from "next/link";
import HeroSection from "./components/HeroSection";
import Testimonials from "./components/Testimonials";
import ReadyToPlan from "./components/ReadyToPlan";

export default function HomePage() {
  const destinations = [
    {
      name: "Bali, Indonesia",
      subtitle: "Beaches & Culture",
      img: "https://images.unsplash.com/photo-1493558103817-58b2924bce98?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=placeholder",
      price: 4990,
      slug: "bali",
    },
    {
      name: "Kyoto, Japan",
      subtitle: "Temples & Seasons",
      img: "https://images.unsplash.com/photo-1549692520-acc6669e2f0c?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=placeholder",
      price: 5990,
      slug: "kyoto",
    },
    {
      name: "Swiss Alps, Switzerland",
      subtitle: "Mountains & Hiking",
      img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=placeholder",
      price: 8990,
      slug: "swiss-alps",
    },
    {
      name: "Cape Town, South Africa",
      subtitle: "Coast & Wildlife",
      img: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=placeholder",
      price: 6990,
      slug: "cape-town",
    },
  ];

  return (
    <main className=" mx-auto">
      {/* keep your hero component (already improved earlier) */}
      <HeroSection />

      {/* FEATURED DESTINATIONS */}
      <section
        id="destinations"
        aria-labelledby="popular-destinations"
        className="max-w-7xl mx-auto py-12"
      >
        <div className="flex items-center justify-between mb-6">
          <h3 id="popular-destinations" className="text-2xl font-bold">
            Popular Destinations
          </h3>
          <Link
            href="/destinations"
            className="text-sm text-white-600 hover:underline"
            aria-label="View all destinations"
          >
            View all
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((d) => (
            <article
              key={d.name}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transform transition will-change-transform hover:-translate-y-1"
            >
              <div className="relative h-44">
                <img
                  src={d.img}
                  alt={d.name}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
                <div className="absolute left-4 bottom-4 text-white">
                  <div className="font-semibold">{d.name}</div>
                  <div className="text-sm">{d.subtitle}</div>
                </div>
              </div>

              <div className="p-4">
                <div className="flex items-center justify-between">
                  <div className="text-indigo-600 font-semibold">
                    {/* show price in local currency format */}৳
                    {d.price.toLocaleString()}
                  </div>

                  <div className="flex items-center gap-2">
                    <Link
                      href={`/destinations/${d.slug}`}
                      className="text-sm px-3 py-1 border rounded-md text-gray-700 hover:bg-gray-50"
                    >
                      View
                    </Link>

                    <Link
                      href={`/booking?pkg=${encodeURIComponent(d.slug)}`}
                      className="text-sm bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-3 py-1 rounded-md shadow-sm hover:brightness-105 transition"
                      aria-label={`Book ${d.name}`}
                    >
                      Book
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section
        id="packages"
        className="max-w-7xl mx-auto bg-gradient-to-br from-indigo-900 via-indigo-800 to-indigo-700 py-12 px-6 rounded-3xl shadow-xl text-white"
      >
        <h3 className="text-2xl font-bold mb-8 text-center md:text-left">
          Our Services
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-sky-600/60 backdrop-blur-sm hover:bg-sky-500/80 hover:scale-105 transition-transform shadow-lg">
            <div className="text-5xl">✈️</div>
            <h4 className="font-semibold mt-3">Flight Booking</h4>
            <p className="text-sm text-gray-200 mt-2">
              Competitive fares and flexible options across major airlines.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-sky-600/60 backdrop-blur-sm hover:bg-sky-500/80 hover:scale-105 transition-transform shadow-lg">
            <div className="text-5xl">🏨</div>
            <h4 className="font-semibold mt-3">Hotel Reservations</h4>
            <p className="text-sm text-gray-200 mt-2">
              Hand-picked stays to match your travel style and budget.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-sky-600/60 backdrop-blur-sm hover:bg-sky-500/80 hover:scale-105 transition-transform shadow-lg">
            <div className="text-5xl">🧭</div>
            <h4 className="font-semibold mt-3">Local Guides</h4>
            <p className="text-sm text-gray-200 mt-2">
              Experienced guides and curated local experiences.
            </p>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS + CTA */}
      <section className="">
        <Testimonials />
        <ReadyToPlan/>
      </section>
    </main>
  );
}
