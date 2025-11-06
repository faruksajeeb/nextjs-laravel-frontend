"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function HeroSection() {
  const router = useRouter();
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!destination) return;
    router.push(
      `/destinations?query=${encodeURIComponent(destination)}&date=${date}`
    );
  };

  return (
    <section className="relative bg-gradient-to-br from-indigo-50 via-black to-indigo-100 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/38238/maldives-ile-beach-sun-38238.jpeg"
          alt="Travel background"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-800/50 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-30 lg:py-40 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div className="space-y-6 text-white">
          <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight drop-shadow-md">
            Discover Your Next <br /> Adventure With Us
          </h2>
          <p className="text-indigo-100 max-w-lg text-lg">
            Explore hand-picked destinations, exclusive packages, and seamless
            experiences — designed to make every journey unforgettable.
          </p>

          <div className="flex gap-3">
            <Link
              className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-indigo-600  text-white-700 border border-white/60  font-semibold px-6 py-3 rounded-full shadow-md hover:bg-indigo-50 transition-transform transform hover:scale-105"
              href="/packages"
            >
              🌎 Explore Packages
            </Link>
            <Link
              className="inline-flex items-center gap-2 border border-white/60 text-white px-6 py-5 rounded-full hover:bg-white/10 backdrop-blur-sm transition-transform transform hover:scale-105"
              href="/contact"
            >
              📞 Contact Us
            </Link>
          </div>

          {/* Glass Search Form */}
          <div className="mt-8 bg-white/20 backdrop-blur-md p-4 rounded-2xl shadow-lg w-full max-w-md border border-white/30">
            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 sm:grid-cols-3 gap-2"
            >
              <input
                className="p-2 rounded-md bg-white/80 border-none text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-indigo-500"
                placeholder="Destination (e.g. Bali)"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
              />
              <input
                className="p-2 rounded-md bg-white/80 border-none text-gray-700 focus:ring-2 focus:ring-indigo-500"
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
              <button
                type="submit"
                className="bg-indigo-600 text-white font-semibold p-2 rounded-md hover:bg-indigo-700 transition-all"
              >
                Search
              </button>
            </form>
          </div>
        </div>

        {/* Right Image Card */}
        <div className="relative">
          <div className="rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-all duration-500">
            <img
              alt="hero"
              src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=1600&auto=format&fit=crop"
              className="w-full h-96 object-cover"
            />
          </div>

          <div className="absolute bottom-6 left-6 bg-white rounded-xl p-4 shadow-xl border w-64 animate-fadeIn">
            <div className="text-xs text-gray-500">Featured Trip</div>
            <div className="font-semibold text-gray-800">
              7-Day Bali Escape
            </div>
            <div className="text-sm text-indigo-600 font-medium">
              Starting at ৳8990
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
