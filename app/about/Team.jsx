"use client";
import { useState } from "react";
import Image from "next/image";
import PlaceholderImage from "@/public/placeholder.png";
export default function Team({ p }) {
  const [imgSrc, setImgSrc] = useState(p.img || PlaceholderImage);
    const [hasError, setHasError] = useState(false);
  return (
    <div
      key={p.name}
      className="bg-gradient-to-tr from-indigo-700/80 to-purple-700/70 rounded-2xl p-4 text-center shadow-lg hover:scale-105 transition-transform"
    >
      <Image
        src={imgSrc}
        alt={p.name}
        onError={() => {
          setImgSrc(PlaceholderImage);
          setHasError(true);
        }}
        width={112}   // 112px = h-28
  height={112}  // same as height
        className="mx-auto h-28 w-28 rounded-full object-cover border-2 border-white/30"
      />
      <div className="mt-3 font-semibold text-white">{p.name}</div>
      <div className="text-sm text-white/80">{p.role}</div>
    </div>
  );
}
