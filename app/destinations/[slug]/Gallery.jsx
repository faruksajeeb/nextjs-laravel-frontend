"use client";
import { useState, useEffect } from "react";
export default function Gallery({dest}) {
  // local UI state
  const [selectedImg, setSelectedImg] = useState(null);

  useEffect(() => {
    document.body.style.overflow = selectedImg ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [selectedImg]);

  return (
    <>
      <section className="bg-white/5 backdrop-blur-md p-6 rounded-2xl shadow-lg">
        <h3 className="text-lg font-semibold">Photos</h3>
        <div className="mt-3 grid grid-cols-2 sm:grid-cols-3 gap-3">
          {dest.gallery.map((g, i) => (
            <button
              key={i}
              onClick={() => setSelectedImg(g)}
              className="overflow-hidden rounded-lg focus:outline-none"
            >
              <img
                src={g}
                alt={`${dest.name} ${i + 1}`}
                className="w-full h-28 object-cover transform hover:scale-105 transition"
              />
            </button>
          ))}
        </div>
      </section>
      {/* Lightbox */}
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
