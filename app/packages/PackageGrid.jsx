"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ImageOff } from "lucide-react";
import PlaceholderImage from '@/public/placeholder.png'

export default function PackageGrid({ pkg }) {
  const [imgSrc, setImgSrc] = useState(pkg.img || PlaceholderImage);
  const [hasError, setHasError] = useState(false);

  return (
    <article
      key={pkg.id}
      className="relative rounded-2xl overflow-hidden shadow-xl transform hover:scale-[1.02] transition bg-white/5 backdrop-blur-md border border-pink-300 flex flex-col"
    >
      {/* image */}
      <div className="relative h-48 w-full">
        <Image
          src={imgSrc}
          alt={pkg.title}
          fill
          className="object-cover"
          placeholder="blur"
           blurDataURL="..." 
          onError={() => {
            setImgSrc(PlaceholderImage);
            setHasError(true);
          }}
          
        />
        {hasError && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/40">
            <ImageOff className="w-10 h-10 text-gray-400" />
          </div>
        )}
      </div>

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
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M5 12h14"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 5l7 7-7 7"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
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
  );
}
