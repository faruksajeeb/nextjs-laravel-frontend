// app/packages/[slug]/page.jsx

import { notFound } from "next/navigation";
import Garray from "./Gallary";
import BookingForm from "./BookingForm";

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

export async function generateMetadata({ params }) {
  const { slug } = params || {};
  const pkg = PACKAGES.find((p) => p.slug === slug);

  if (!pkg) {
    return {
      title: "Package not found",
      description: "The package you are looking for does not exist.",
    };
  }

  return {
    title: pkg.title,
    description: pkg.overview,
    openGraph: {
      title: pkg.title,
      description: pkg.overview,
      type: "website",
      images: [
        {
          url: pkg.hero,
          width: 1200,
          height: 630,
          alt: pkg.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: pkg.title,
      description: pkg.overview,
      images: [pkg.hero],
    },
  };
}

export default function PackageDetail({ params }) {
  const { slug } = params || {};
  const pkg = PACKAGES.find((p) => p.slug === slug);

  // Not found
  if (!pkg) {
    notFound();
  }

  return <ClientPackageDetail pkg={pkg} />;
}

function ClientPackageDetail({ pkg }) {

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
          <Garray pkg={pkg}/>
        </div>

        {/* sidebar */}
        <BookingForm pkg={pkg}/>
      </main>

     
    </>
  );
}
