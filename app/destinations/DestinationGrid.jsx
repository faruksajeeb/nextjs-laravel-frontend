import Link from "next/link";
import Image from "next/image";
export default function DestinationGrid({ d }) {
  return (
    <article
      key={d.id}
      className="relative rounded-2xl overflow-hidden shadow-lg transform hover:scale-105 transition-all bg-white/5 backdrop-blur-md border border-indigo-400"
      aria-labelledby={`dest-title-${d.id}`}
    >
      {/* Image */}
      <Link
        href={`/destinations/${d.slug}`}
        className="block"
        aria-label={`Open ${d.name} destination`}
      >
        <Image
          src={d.img}
          alt={d.name}
          loading="lazy"
           width={112}   // 112px = h-28
  height={112}  // same as height
          className="w-full h-48 object-cover"
        />
      </Link>

      {/* Content */}
      <div className="p-5">
        <h3
          id={`dest-title-${d.id}`}
          className="font-semibold text-white text-lg"
        >
          <Link href={`/destinations/${d.slug}`} className="hover:underline">
            {d.name}
          </Link>
        </h3>
        <p className="text-sm text-gray-300 mt-1">{d.subtitle}</p>

        <div className="mt-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-bold text-lg bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-pink-300 to-orange-400">
              ৳{Number(d.price).toLocaleString()}
            </span>

            {/* tags */}
            <div className="flex gap-2 flex-wrap">
              {d.tags?.map((t) => (
                <span
                  key={t}
                  className="text-xs px-2 py-0.5 rounded-full bg-white/6 text-white/90 border border-white/5"
                >
                  #{t}
                </span>
              ))}
            </div>
          </div>

          {/* View button */}
          <Link
            href={`/destinations/${d.slug}`}
            className="relative inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold text-white
                             bg-gradient-to-r from-indigo-500/60 to-pink-500/60 backdrop-blur-sm
                             hover:from-indigo-500 hover:to-pink-500 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
            aria-label={`View ${d.name}`}
          >
            View
            <span className="absolute inset-0 rounded-lg bg-white/10 opacity-0 hover:opacity-20 transition" />
          </Link>
        </div>
      </div>

      {/* overlay badge */}
      {d.popular && (
        <div className="absolute top-3 left-3">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-amber-400 text-black shadow">
            ★ Popular
          </span>
        </div>
      )}

      {/* image hover gradient (subtle) */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 hover:opacity-60 transition-opacity rounded-2xl pointer-events-none"></div>
    </article>
  );
}
