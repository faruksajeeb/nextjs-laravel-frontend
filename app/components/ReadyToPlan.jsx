import Link from "next/link";
export default function ReadyToPlan() {

  return (
    <div className="max-w-7xl mx-auto bg-gradient-to-r from-indigo-600 to-pink-500 text-white rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="text-xl font-semibold">
              Ready to plan your next trip?
            </h4>
            <p className="text-sm mt-1">
              Contact our travel specialists for a free quote and custom
              itinerary.
            </p>
          </div>

          <div className="flex gap-3">
            <Link
              href="/contact"
              className="bg-white text-indigo-600 px-5 py-3 rounded-lg font-semibold shadow-sm hover:shadow-md transition"
            >
              Contact Us
            </Link>
            <Link
              href="/packages"
              className="border border-white/40 px-5 py-3 rounded-lg"
            >
              Browse Packages
            </Link>
          </div>
        </div>
  );
}
