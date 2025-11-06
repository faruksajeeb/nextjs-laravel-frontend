"use client";
import { useState } from "react";
import Link from "next/link";
export default function BookingForm({pkg}) {
  const [date, setDate] = useState("");

  const [travelers, setTravelers] = useState(1);
  const [loading, setLoading] = useState(false);

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
          <Link
            href="/packages"
            className="text-sm text-indigo-300 hover:underline"
          >
            ← Back to packages
          </Link>
        </div>
      </div>

      <div className="mt-4 p-4 bg-white/6 rounded-lg shadow-sm text-sm text-gray-300">
        <div className="font-semibold">Need help?</div>
        <div className="mt-2">
          Contact our travel specialists:
          <br />
          <a
            href="tel:+8801234567890"
            className="text-indigo-300 hover:underline"
          >
            +880 1234 567890
          </a>
          <br />
          <a
            href="mailto:info@travelo.com"
            className="text-indigo-300 hover:underline"
          >
            info@travelo.com
          </a>
        </div>
      </div>
    </aside>
  );
}
