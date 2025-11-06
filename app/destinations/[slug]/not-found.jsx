import Link from "next/link";
export default function NotFound() {
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
