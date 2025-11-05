// app/packages/page.jsx
"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

export default function PackagesPage() {
  const [query, setQuery] = useState("");
  const [durationFilter, setDurationFilter] = useState("any");
  const [priceRange, setPriceRange] = useState("any");

  const packages = [
    {
      id: "bali-7d",
      title: "7-Day Bali Escape",
      duration: 7,
      price: 8990,
      region: "Asia",
      tags: ["beach", "culture"],
      slug: "/packages/bali-7d",
      excerpt: "Sunsets, temples, rice terraces and relaxing beaches.",
      img: "https://images.unsplash.com/photo-1493558103817-58b2924bce98?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: "kyoto-5d",
      title: "5-Day Kyoto Highlights",
      duration: 5,
      price: 7990,
      region: "Asia",
      tags: ["culture", "history"],
      slug: "/packages/kyoto-5d",
      excerpt: "Cherry blossoms, temples and traditional ryokan stays.",
      img: "https://images.unsplash.com/photo-1549692520-acc6669e2f0c?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: "swiss-10d",
      title: "10-Day Swiss Alps",
      duration: 10,
      price: 17990,
      region: "Europe",
      tags: ["mountains", "hiking"],
      slug: "/packages/swiss-10d",
      excerpt: "Alpine scenery, cable cars and cozy chalets.",
      img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: "safari-8d",
      title: "8-Day Cape Town & Safari",
      duration: 8,
      price: 14990,
      region: "Africa",
      tags: ["wildlife", "adventure"],
      slug: "/packages/safari-8d",
      excerpt: "City culture + safari game drives to see the Big Five.",
      img: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  // filter logic (note: budget threshold set to ৳9000)
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return packages.filter((p) => {
      if (
        q &&
        !`${p.title} ${p.excerpt} ${p.region} ${p.tags.join(" ")}`
          .toLowerCase()
          .includes(q)
      )
        return false;

      if (durationFilter === "short" && p.duration > 5) return false;
      if (durationFilter === "long" && p.duration <= 5) return false;

      if (priceRange === "budget" && p.price > 9000) return false;
      if (priceRange === "premium" && p.price <= 9000) return false;

      return true;
    });
  }, [query, durationFilter, priceRange]);

  return (
    <main className="max-w-7xl mx-auto px-6 py-12">
      {/* header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
        <div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Our Packages
          </h2>
          <p className="text-sm text-gray-300 mt-1">
            Hand-picked trips with local experiences and flexible booking.
          </p>
        </div>

        {/* filters */}
        <div className="flex gap-3 items-center w-full md:w-auto">
          <label className="relative flex-1 md:flex-initial">
            <span className="sr-only">Search packages</span>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search packages, region or tag"
              className="w-full md:w-64 pl-10 pr-3 py-2 rounded-lg bg-white/5 text-white placeholder-white/60 border border-white/10 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              aria-label="Search packages"
            />
            {/* search icon */}
            <svg
              className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-white/60 pointer-events-none"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M21 21l-4.35-4.35"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle
                cx="11"
                cy="11"
                r="6"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
            </svg>
          </label>

          <select
            value={durationFilter}
            onChange={(e) => setDurationFilter(e.target.value)}
            className="p-2 rounded-lg bg-white/5 text-white border border-white/10 focus:ring-2 focus:ring-indigo-500"
            aria-label="Filter by duration"
          >
            <option value="any">Any duration</option>
            <option value="short">Short (≤ 5 days)</option>
            <option value="long">Long (&gt; 5 days)</option>
          </select>

          <select
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value)}
            className="p-2 rounded-lg bg-white/5 text-white border border-white/10 focus:ring-2 focus:ring-indigo-500"
            aria-label="Filter by price"
          >
            <option value="any">Any price</option>
            <option value="budget">Budget (≤ ৳9,000)</option>
            <option value="premium">Premium (&gt; ৳9,000)</option>
          </select>

          <button
            onClick={() => {
              setQuery("");
              setDurationFilter("any");
              setPriceRange("any");
            }}
            className="ml-1 px-3 py-2 rounded-lg bg-white/6 text-white hover:bg-white/10 transition"
            aria-label="Clear filters"
            title="Clear filters"
          >
            Clear
          </button>
        </div>
      </div>

      {/* grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((pkg) => (
          <article
            key={pkg.id}
            className="relative rounded-2xl overflow-hidden shadow-xl transform hover:scale-[1.02] transition bg-white/5 backdrop-blur-md border border-white/10 flex flex-col"
          >
            {/* image */}
            <div
              className="h-48 bg-center bg-cover"
              style={{ backgroundImage: `url(${pkg.img})` }}
              role="img"
              aria-label={pkg.title}
            />

            {/* content */}
            <div className="p-5 flex-1 flex flex-col">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-semibold text-white text-lg">{pkg.title}</h3>
                  <p className="text-sm text-gray-300 mt-1">
                    {pkg.region} • {pkg.duration} days
                  </p>
                </div>

                <div className="text-right">
                  <div className="font-bold text-lg bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-pink-300 to-orange-400">
                    ৳{pkg.price.toLocaleString()}
                  </div>
                  <div className="text-xs text-gray-400">per person</div>
                </div>
              </div>

              <p className="text-gray-300 mt-3 text-sm flex-1">{pkg.excerpt}</p>

              <div className="mt-4 flex items-center justify-between">
                <div className="flex gap-2 flex-wrap">
                  {pkg.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2 py-1 rounded-full bg-white/6 text-white/90 border border-white/5"
                    >
                      #{t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-2">
                  <Link
                    href={pkg.slug}
                    className="relative inline-flex items-center gap-2 px-3 py-2 rounded-lg text-white text-sm font-medium
                    bg-white/10 hover:bg-white/20 transition shadow"
                  >
                    View Details
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 5l7 7-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </Link>

                  <Link
                    href={`/booking?pkg=${encodeURIComponent(pkg.slug)}`}
                    className="inline-flex items-center px-3 py-2 rounded-lg text-sm font-semibold
                    bg-gradient-to-r from-indigo-500 to-pink-500 text-white shadow-md hover:scale-[1.02] transition"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          </article>
        ))}

        {filtered.length === 0 && (
          <div className="col-span-full text-center text-gray-400 py-12">
            No packages found. Try different filters.
          </div>
        )}
      </div>
    </main>
  );
}
