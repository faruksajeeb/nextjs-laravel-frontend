"use client";
import { useState, useEffect } from "react";
export default function Garray({ pkg }) {
  const [selectedImg, setSelectedImg] = useState(null);

  useEffect(() => {
    // lock scroll when lightbox open
    document.body.style.overflow = selectedImg ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [selectedImg]);

  function openLightbox(src) {
    setSelectedImg(src);
  }
  function closeLightbox() {
    setSelectedImg(null);
  }
  return (
    <>
      <section className="bg-white/5 backdrop-blur-md p-6 rounded-2xl shadow-lg">
        <h3 className="font-semibold">Gallery</h3>
        <div className="mt-3 grid grid-cols-2 sm:grid-cols-3 gap-3">
          {pkg.gallery.map((g, idx) => (
            <button
              key={idx}
              onClick={() => openLightbox(g)}
              className="overflow-hidden rounded-lg focus:outline-none"
              aria-label={`Open image ${idx + 1}`}
            >
              <img
                src={g}
                alt={`${pkg.title} ${idx + 1}`}
                className="w-full h-28 object-cover transform hover:scale-105 transition"
              />
            </button>
          ))}
        </div>
      </section>
      {/* lightbox */}
      {selectedImg && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          onClick={closeLightbox}
        >
          <button
            aria-label="Close image"
            className="absolute top-6 right-6 text-white text-2xl"
            onClick={closeLightbox}
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
