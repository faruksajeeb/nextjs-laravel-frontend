// app/packages/page.jsx
"use client";
import { useMemo, useState } from "react";
import PackageGrid from "./PackageGrid";

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
      title: "10-Day Swiss Alps Adventure",
      duration: 10,
      price: 17990,
      region: "Europe",
      tags: ["mountains", "hiking"],
      slug: "/packages/swiss-10d",
      excerpt: "Alpine scenery, cable cars, and cozy chalets in Switzerland.",
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
      excerpt: "City culture + safari game drives to see the Big Five in South Africa.",
      img: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: "iceland-6d",
      title: "6-Day Iceland Ring Road",
      duration: 6,
      price: 11500,
      region: "Europe",
      tags: ["nature", "adventure"],
      slug: "/packages/iceland-6d",
      excerpt: "Waterfalls, glaciers, black sand beaches, and Northern Lights potential.",
      img: "https://images.unsplash.com/photo-1506765518292-6284f33b1e32?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: "nyc-4d",
      title: "4-Day NYC City Break",
      duration: 4,
      price: 5200,
      region: "North America",
      tags: ["city", "culture"],
      slug: "/packages/nyc-4d",
      excerpt: "The best of Manhattan: Broadway, museums, and iconic landmarks.",
      img: "https://images.unsplash.com/photo-1541336021430-81f7259c8490?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: "rome-7d",
      title: "7-Day Ancient Rome Tour",
      duration: 7,
      price: 9500,
      region: "Europe",
      tags: ["history", "food"],
      slug: "/packages/rome-7d",
      excerpt: "Explore the Colosseum, Vatican City, and enjoy authentic Italian cuisine.",
      img: "https://images.unsplash.com/photo-1517478810756-c0c1737e8c33?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: "patagonia-12d",
      title: "12-Day Patagonia Trek",
      duration: 12,
      price: 19800,
      region: "South America",
      tags: ["mountains", "adventure"],
      slug: "/packages/patagonia-12d",
      excerpt: "Glaciers, remote trails, and stunning wilderness in Argentina and Chile.",
      img: "https://images.unsplash.com/photo-1533518464309-8b093358055c?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: "galapagos-9d",
      title: "9-Day Galapagos Wildlife Cruise",
      duration: 9,
      price: 22000,
      region: "South America",
      tags: ["wildlife", "marine"],
      slug: "/packages/galapagos-9d",
      excerpt: "An intimate cruise exploring unique endemic species and volcanic islands.",
      img: "https://images.unsplash.com/photo-1516235123909-24238e83160a?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: "thailand-14d",
      title: "14-Day Thailand Grand Tour",
      duration: 14,
      price: 11990,
      region: "Asia",
      tags: ["beach", "food", "city"],
      slug: "/packages/thailand-14d",
      excerpt: "Bangkok\'s buzz, northern temples, and island hopping in the south.",
      img: "https://images.unsplash.com/photo-1506973035817-69974c050942?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: "peru-8d",
      title: "8-Day Machu Picchu & Cusco",
      duration: 8,
      price: 13500,
      region: "South America",
      tags: ["history", "hiking"],
      slug: "/packages/peru-8d",
      excerpt: "Trek the Inca Trail or take the scenic route to the lost city of the Incas.",
      img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: "egypt-6d",
      title: "6-Day Nile & Pyramids",
      duration: 6,
      price: 9900,
      region: "Africa",
      tags: ["history", "culture"],
      slug: "/packages/egypt-6d",
      excerpt: "A deep dive into ancient Egyptian civilization with a short Nile cruise.",
      img: "https://images.unsplash.com/photo-1601362772596-f9435b86e09c?q=80&w=1200&auto=format&fit=crop",
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
          <PackageGrid key={pkg.id} pkg={pkg} />
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
