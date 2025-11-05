// components/Logo.jsx
import Link from "next/link";

export default function Logo({ compact = false }) {
  return (
    <Link href="/" className="flex items-center gap-3">
      <div
        className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold shadow-lg
          bg-gradient-to-br from-indigo-500 via-pink-500 to-yellow-400`}
        aria-hidden="true"
      >
        TA
      </div>

      <div className={`${compact ? "hidden" : "block"}`}>
        <div className="text-lg font-extrabold tracking-tight text-gray-900">
          Travelo
        </div>
        <div className="text-xs text-white-500">
          Curated journeys • Local experts
        </div>
      </div>
    </Link>
  );
}
