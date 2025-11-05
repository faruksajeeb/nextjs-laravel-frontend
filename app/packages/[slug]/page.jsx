// app/packages/[slug]/page.jsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

/* --- sample packages list (replace or fetch from API) --- */
const PACKAGES = [
  {
    id: "bali-7d",
    title: "7-Day Bali Escape",
    slug: "bali-7d",
    hero:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1400&auto=format&fit=crop",
    price: 8990,
    duration: 7,
    region: "Asia",
    overview:
      "Experience the best of Bali — temples, rice terraces, beaches and a relaxed island pace. Perfect for couples and small groups.",
    itinerary: [
      { day: 1, title: "Arrival & Uluwatu", desc: "Arrive at Ngurah Rai Airport. Transfer to Uluwatu. Sunset at Uluwatu Temple." },
      { day: 2, title: "Cultural Ubud", desc: "Visit Tegallalang Rice Terraces, Ubud Market and an evening kecak dance." },
      { day: 3, title: "Mount Batur Sunrise", desc: "Early morning hike to Mount Batur, hot springs and local breakfast." },
      { day: 4, title: "Nusa Penida Day Trip", desc: "Boat trip to Nusa Penida and beachtime." },
      { day: 5, title: "Leisure Day", desc: "Free day to explore, spa or relax on the beach." },
      { day: 6, title: "Temple & Local Village", desc: "Visit Besakih Temple and a traditional village." },
      { day: 7, title: "Departure", desc: "Transfer to airport." },
    ],
    inclusions: ["Accommodation (6 nights)", "Daily breakfast", "All transfers", "Selected tours & entrance fees", "English-speaking guide"],
    exclusions: ["International flights", "Travel insurance", "Personal expenses", "Tips for guides"],
    gallery: [
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1493558103817-58b2924bce98?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop",
    ],
    tags: ["beach", "culture", "relax"],
  },
  // add other packages as needed
];

export default function PackageDetail({ params }) {
  const { slug } = params || {};
  const pkg = PACKAGES.find((p) => p.slug === slug);

  // Not found
  if (!pkg) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6 bg-black text-white">
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Package not found</h2>
          <p className="text-gray-400 mb-6">We couldn't find the package you're looking for.</p>
          <Link href="/packages" className="inline-block bg-indigo-600 text-white px-4 py-2 rounded-md">
            Back to packages
          </Link>
        </div>
      </div>
    );
  }

  return <ClientPackageDetail pkg={pkg} />;
}

/* -------------------------------------------------
   Client-side detail component (lightbox / booking)
   ------------------------------------------------- */
function ClientPackageDetail({ pkg }) {
  const [selectedImg, setSelectedImg] = useState(null);
  const [date, setDate] = useState("");
  const [travelers, setTravelers] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // lock scroll when lightbox open
    document.body.style.overflow = selectedImg ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [selectedImg]);

  function openLightbox(src) {
    setSelectedImg(src);
  }
  function closeLightbox() {
    setSelectedImg(null);
  }

  async function requestBooking() {
    if (!date) {
      alert("Please select a travel date.");
      return;
    }
    setLoading(true);
    try {
      // example: navigate to booking page with prefilled params
      const url = `/booking?pkg=${encodeURIComponent(pkg.slug)}&date=${encodeURIComponent(date)}&travelers=${travelers}`;
      window.location.href = url;
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-1 lg:grid-cols-3 gap-8 text-white">
        {/* left / main */}
        <div className="lg:col-span-2 space-y-6">
          {/* hero */}
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <img src={pkg.hero} alt={pkg.title} className="w-full h-80 object-cover" />
          </div>

          {/* header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-extrabold">{pkg.title}</h1>
              <p className="text-sm text-gray-300 mt-1">{pkg.region} • {pkg.duration} days</p>

              <div className="mt-3 flex flex-wrap gap-2">
                {pkg.tags?.map((t) => (
                  <span key={t} className="text-xs px-2 py-1 rounded-full bg-white/6 border border-white/10 text-white/90">
                    #{t}
                  </span>
                ))}
              </div>
            </div>

            <div className="text-right">
              <div className="text-sm text-gray-300">Starting from</div>
              <div className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-pink-300 to-orange-400">
                ৳{Number(pkg.price).toLocaleString()}
              </div>
              <div className="text-xs text-gray-400 mt-1">per person</div>
            </div>
          </div>

          {/* overview */}
          <section className="bg-white/5 backdrop-blur-md p-6 rounded-2xl shadow-lg">
            <h2 className="text-lg font-semibold">Overview</h2>
            <p className="text-gray-300 mt-3 leading-relaxed">{pkg.overview}</p>
          </section>

          {/* itinerary */}
          <section className="bg-white/5 backdrop-blur-md p-6 rounded-2xl shadow-lg">
            <h2 className="text-lg font-semibold">Itinerary</h2>
            <div className="mt-4 space-y-4">
              {pkg.itinerary.map((i) => (
                <article key={i.day} className="p-4 rounded-xl border border-white/6 bg-white/3">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="flex p-5 h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-pink-500 text-white font-semibold">
                        Day {i.day}
                      </div>
                      <div>
                        <div className="font-semibold">{i.title}</div>
                        {/* optional location */}
                      </div>
                    </div>
                    <div className="text-sm text-gray-400">
                      {pkg.duration >= i.day ? `${i.day}/${pkg.duration}` : ""}
                    </div>
                  </div>
                  <p className="text-gray-300 mt-3">{i.desc}</p>
                </article>
              ))}
            </div>
          </section>

          {/* included / excluded */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <section className="bg-white/5 backdrop-blur-md p-6 rounded-2xl shadow-lg">
              <h3 className="font-semibold">What's included</h3>
              <ul className="mt-3 space-y-2 text-gray-300">
                {pkg.inclusions.map((inc) => (
                  <li key={inc} className="flex items-start gap-3">
                    <span className="mt-1 text-indigo-300">✓</span>
                    <span>{inc}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="bg-white/5 backdrop-blur-md p-6 rounded-2xl shadow-lg">
              <h3 className="font-semibold">What's not included</h3>
              <ul className="mt-3 space-y-2 text-gray-300">
                {pkg.exclusions.map((exc) => (
                  <li key={exc} className="flex items-start gap-3">
                    <span className="mt-1 text-yellow-300">—</span>
                    <span>{exc}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* gallery */}
          <section className="bg-white/5 backdrop-blur-md p-6 rounded-2xl shadow-lg">
            <h3 className="font-semibold">Gallery</h3>
            <div className="mt-3 grid grid-cols-2 sm:grid-cols-3 gap-3">
              {pkg.gallery.map((g, idx) => (
                <button
                  key={idx}
                  onClick={() => openLightbox(g)}
                  className="overflow-hidden rounded-lg focus:outline-none"
                  aria-label={`Open image ${idx + 1}`}
                >
                  <img src={g} alt={`${pkg.title} ${idx + 1}`} className="w-full h-28 object-cover transform hover:scale-105 transition" />
                </button>
              ))}
            </div>
          </section>
        </div>

        {/* sidebar */}
        <aside className="lg:col-span-1">
          <div className="sticky top-6 bg-white/6 backdrop-blur-md border border-white/8 rounded-2xl p-5 shadow-xl">
            <div className="text-sm text-gray-300">Starting from</div>
            <div className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-pink-300 to-orange-400">
              ৳{Number(pkg.price).toLocaleString()}
            </div>
            <div className="text-xs text-gray-400 mt-1">per person</div>

            <div className="mt-4">
              <label className="text-sm text-gray-300">Travel Date</label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="mt-1 w-full p-3 rounded-lg bg-white/6 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div className="mt-3">
              <label className="text-sm text-gray-300">Travelers</label>
              <select
                value={travelers}
                onChange={(e) => setTravelers(Number(e.target.value))}
                className="mt-1 w-full p-3 rounded-lg bg-white/6 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                {Array.from({ length: 8 }, (_, i) => i + 1).map((n) => (
                  <option key={n} value={n}>
                    {n}
                  </option>
                ))}
              </select>
            </div>

            <button
              onClick={requestBooking}
              disabled={loading}
              className="mt-4 w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-500 to-pink-500 text-white px-4 py-3 rounded-lg font-semibold shadow-md hover:scale-105 transition disabled:opacity-60"
            >
              {loading ? "Processing…" : "Request Booking"}
            </button>

            <div className="mt-4 text-sm text-gray-400">
              <div>Flexible cancellation — free within 7 days.</div>
            </div>

            <div className="mt-4">
              <Link href="/packages" className="text-sm text-indigo-300 hover:underline">
                ← Back to packages
              </Link>
            </div>
          </div>

          <div className="mt-4 p-4 bg-white/6 rounded-lg shadow-sm text-sm text-gray-300">
            <div className="font-semibold">Need help?</div>
            <div className="mt-2">
              Contact our travel specialists:
              <br />
              <a href="tel:+8801234567890" className="text-indigo-300 hover:underline">+880 1234 567890</a>
              <br />
              <a href="mailto:info@travelo.com" className="text-indigo-300 hover:underline">info@travelo.com</a>
            </div>
          </div>
        </aside>
      </main>

      {/* lightbox */}
      {selectedImg && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          onClick={closeLightbox}
        >
          <button
            aria-label="Close image"
            className="absolute top-6 right-6 text-white text-2xl"
            onClick={closeLightbox}
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
