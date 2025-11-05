// app/destinations/[slug]/page.jsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import DestinationMap from "../../components/DestinationMap";

/* Sample data — replace with API fetch if needed */
const DESTINATIONS = [
  {
    slug: "bali",
    name: "Bali, Indonesia",
    hero: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1600&auto=format&fit=crop",
    excerpt:
      "Beaches, temples, rice terraces and island culture — for relaxation and adventure.",
    description:
      "Bali offers a rich blend of cultural experiences, surfable beaches, scenic rice terraces, and friendly local communities. Ideal for honeymooners, families, and solo travelers alike.",
    highlights: [
      "Uluwatu & its sunset temple",
      "Ubud rice terraces and arts scene",
      "Nusa Penida day trips",
      "Mount Batur sunrise trek",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1493558103817-58b2924bce98?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=800&auto=format&fit=crop",
    ],
    tips: [
      "Carry modest clothing for temple visits.",
      "Rent a scooter only if experienced; traffic is busy.",
      "Try local warung food — fresh and affordable.",
    ],
  },
  // add more destinations...
];

/* Sample packages — in a real app fetch from API and filter */
const PACKAGES = [
  {
    id: "bali-7d",
    title: "7-Day Bali Escape",
    slug: "bali-7d",
    destination: "bali",
    price: 8990,
    duration: 7,
  },
  {
    id: "bali-4d",
    title: "4-Day Ubud & Beaches",
    slug: "bali-4d",
    destination: "bali",
    price: 4990,
    duration: 4,
  },
  {
    id: "kyoto-5d",
    title: "5-Day Kyoto Highlights",
    slug: "kyoto-5d",
    destination: "kyoto",
    price: 7990,
    duration: 5,
  },
];

export default function DestinationView({ params }) {
  const { slug } = params || {};
  const dest = DESTINATIONS.find((d) => d.slug === slug);

  // local UI state
  const [selectedImg, setSelectedImg] = useState(null);

  useEffect(() => {
    document.body.style.overflow = selectedImg ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [selectedImg]);

  if (!dest) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6 bg-black text-white">
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Destination not found</h2>
          <p className="text-gray-400 mb-6">Try browsing other destinations.</p>
          <Link
            href="/destinations"
            className="inline-block bg-indigo-600 text-white px-4 py-2 rounded-md"
          >
            Back to Destinations
          </Link>
        </div>
      </div>
    );
  }

  const related = PACKAGES.filter((p) => p.destination === dest.slug);

  return (
    <>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-white">
        {/* Hero */}
        <div className="rounded-2xl overflow-hidden shadow-2xl mb-8">
          <div className="relative h-64 md:h-96">
            <img
              src={dest.hero}
              alt={dest.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60"></div>
            <div className="absolute left-6 bottom-6">
              <h1 className="text-3xl md:text-4xl font-extrabold">
                {dest.name}
              </h1>
              <p className="text-sm text-gray-300 mt-1 max-w-lg">
                {dest.excerpt}
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: main content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Description & highlights */}
            <section className="bg-white/5 backdrop-blur-md p-6 rounded-2xl shadow-lg">
              <h2 className="text-xl font-semibold">About {dest.name}</h2>
              <p className="text-gray-300 mt-3 leading-relaxed">
                {dest.description}
              </p>

              <div className="mt-4">
                <h3 className="font-medium text-white">Highlights</h3>
                <ul className="mt-2 space-y-2 text-gray-300">
                  {dest.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-3">
                      <span className="mt-1 text-indigo-300">•</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Related packages */}
            <section className="bg-white/5 backdrop-blur-md p-6 rounded-2xl shadow-lg">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">
                  Packages for {dest.name}
                </h3>
                <Link
                  href="/packages"
                  className="text-sm text-indigo-300 hover:underline"
                >
                  All packages
                </Link>
              </div>

              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                {related.length ? (
                  related.map((p) => (
                    <article
                      key={p.id}
                      className="rounded-xl overflow-hidden bg-white/6 border border-white/6 p-4 flex items-start gap-4"
                    >
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-semibold text-white">
                              {p.title}
                            </h4>
                            <div className="text-xs text-gray-300">
                              {p.duration} days
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-pink-300 to-orange-400">
                              ৳{Number(p.price).toLocaleString()}
                            </div>
                            <div className="text-xs text-gray-400">
                              per person
                            </div>
                          </div>
                        </div>

                        <p className="text-sm text-gray-300 mt-3">
                          A curated experience focusing on the best of{" "}
                          {dest.name}.
                        </p>

                        <div className="mt-3 flex items-center gap-2">
                          <Link
                            href={`/packages/${p.slug}`}
                            className="px-3 py-2 text-sm rounded-lg bg-white/10 hover:bg-white/20 transition"
                          >
                            View Details
                          </Link>
                          <Link
                            href={`/booking?pkg=${encodeURIComponent(p.slug)}`}
                            className="px-3 py-2 text-sm rounded-lg bg-gradient-to-r from-indigo-500 to-pink-500 text-white"
                          >
                            Book
                          </Link>
                        </div>
                      </div>
                    </article>
                  ))
                ) : (
                  <div className="col-span-full text-gray-400">
                    No packages yet for this destination.
                  </div>
                )}
              </div>
            </section>

            {/* Gallery */}
            <section className="bg-white/5 backdrop-blur-md p-6 rounded-2xl shadow-lg">
              <h3 className="text-lg font-semibold">Photos</h3>
              <div className="mt-3 grid grid-cols-2 sm:grid-cols-3 gap-3">
                {dest.gallery.map((g, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedImg(g)}
                    className="overflow-hidden rounded-lg focus:outline-none"
                  >
                    <img
                      src={g}
                      alt={`${dest.name} ${i + 1}`}
                      className="w-full h-28 object-cover transform hover:scale-105 transition"
                    />
                  </button>
                ))}
              </div>
            </section>

            {/* Travel tips */}
            <section className="bg-white/5 backdrop-blur-md p-6 rounded-2xl shadow-lg">
              <h3 className="text-lg font-semibold">Travel tips</h3>
              <ul className="mt-3 space-y-2 text-gray-300">
                {dest.tips.map((t) => (
                  <li key={t} className="flex items-start gap-3">
                    <span className="mt-1 text-indigo-300">✓</span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Map placeholder */}
            <section className="bg-white/4 p-6 rounded-2xl shadow-md text-gray-300">
              <h3 className="font-semibold">Map</h3>
              <div className="mt-3 w-full h-48 rounded-md bg-black/40 flex items-center justify-center text-sm text-gray-400">
                {/* Map Section */}
                <DestinationMap location={destination.location} />
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="space-y-4">
            <div className="bg-white/6 backdrop-blur-md border border-white/8 rounded-2xl p-5 shadow-lg sticky top-6">
              <div className="text-sm text-gray-300">Explore {dest.name}</div>
              <div className="mt-3 flex gap-2">
                <Link
                  href="/packages"
                  className="flex-1 px-3 py-2 rounded-md bg-white/10 text-sm hover:bg-white/20 text-white"
                >
                  All Packages
                </Link>
                <Link
                  href={`/booking?pkg=${related[0]?.slug || ""}`}
                  className="flex-1 px-3 py-2 rounded-md bg-gradient-to-r from-indigo-500 to-pink-500 text-white"
                >
                  Quick Book
                </Link>
              </div>

              <div className="mt-4 text-sm text-gray-400">
                Need help? <br />
                <a
                  href="tel:+8801234567890"
                  className="text-indigo-300 hover:underline"
                >
                  +880 1234 567890
                </a>
              </div>
            </div>

            <div className="p-4 bg-white/6 rounded-lg shadow-sm text-sm text-gray-300">
              <div className="font-semibold">Best time to visit</div>
              <div className="mt-2 text-gray-300">
                April — October (dry season)
              </div>
            </div>
          </aside>
        </div>
      </main>

      {/* Lightbox */}
      {selectedImg && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4"
          onClick={() => setSelectedImg(null)}
        >
          <button
            aria-label="Close"
            className="absolute top-6 right-6 text-white text-2xl"
            onClick={() => setSelectedImg(null)}
          >
            ✕
          </button>
          <img
            src={selectedImg}
            alt="Preview"
            className="max-h-[90vh] max-w-[90vw] rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
