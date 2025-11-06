// app/components/GalleryLightbox.jsx
"use client";

import { useState } from "react";

export default function GalleryLightbox({ images }) {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {images.map((img, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedImg(img)}
            className="overflow-hidden rounded-lg focus:outline-none"
          >
            <img
              src={img}
              alt={`Gallery ${idx + 1}`}
              className="w-full h-28 object-cover transform hover:scale-105 transition"
            />
          </button>
        ))}
      </div>

      {selectedImg && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4"
          onClick={() => setSelectedImg(null)}
        >
          <button
            aria-label="Close"
            className="absolute top-6 right-6 text-white text-2xl"
            onClick={() => setSelectedImg(null)}
          >
            ✕
          </button>
          <img
            src={selectedImg}
            alt="Preview"
            className="max-h-[90vh] max-w-[90vw] rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
