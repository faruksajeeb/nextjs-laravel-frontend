// components/Testimonials.jsx
"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const TESTIMONIALS = [
  {
    quote:
      "Amazing support and a perfectly planned honeymoon. Everything went smoothly!",
    author: "Aisha, Dubai",
  },
  {
    quote: "Great deals and friendly service — highly recommended.",
    author: "Miguel, Spain",
  },
  {
    quote:
      "Local guides were excellent and the itinerary was spot on. Highly recommended!",
    author: "Priya, India",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const autoplayRef = useRef(null);

  // CTA form state
  const [form, setForm] = useState({ name: "", contact: "" });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ ok: null, msg: "" });

  // autoplay
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (paused) return;
    autoplayRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(autoplayRef.current);
  }, [paused]);

  function go(i) {
    setIndex(i % TESTIMONIALS.length);
  }

  function next() {
    setIndex((i) => (i + 1) % TESTIMONIALS.length);
  }

  function prev() {
    setIndex((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  }

  function update(e) {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
    setStatus({ ok: null, msg: "" });
  }

  function validate() {
    if (!form.name.trim()) return "Please enter your name.";
    if (!form.contact.trim()) return "Please enter an email or phone.";
    return null;
  }

  async function submit(e) {
    e.preventDefault();
    setStatus({ ok: null, msg: "" });
    const err = validate();
    if (err) {
      setStatus({ ok: false, msg: err });
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          contact: form.contact,
          message: "Quick quote request from Testimonials CTA",
        }),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.message || "Failed to send. Please try again.");
      }
      setStatus({ ok: true, msg: "Thanks! We'll contact you soon." });
      setForm({ name: "", contact: "" });
    } catch (err) {
      setStatus({ ok: false, msg: err.message || "An error occurred." });
    } finally {
      setLoading(false);
    }
  }

  return (
<section className="max-w-7xl mx-auto py-12">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
    {/* Left: carousel */}
    <div className="bg-indigo-800/70 backdrop-blur-md text-white p-6 rounded-2xl shadow-xl h-full flex flex-col">
      <h3 className="text-2xl font-bold">What travelers say</h3>

      <div
        className="mt-6 relative flex-1"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="overflow-hidden rounded-2xl h-full">
          <div className="relative h-full">
            {TESTIMONIALS.map((t, i) => {
              const visible = i === index;
              return (
                <article
                  key={i}
                  aria-hidden={!visible}
                  className={`absolute inset-0 p-6 bg-white rounded-2xl shadow-sm transition-opacity duration-500 ease-in-out ${
                    visible
                      ? "opacity-100 z-10"
                      : "opacity-0 z-0 pointer-events-none"
                  }`}
                >
                  <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                    “{t.quote}”
                  </p>
                  <footer className="text-sm text-gray-500 mt-4">{t.author}</footer>
                </article>
              );
            })}
          </div>
        </div>

        {/* controls */}
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-3">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="p-2 rounded-md bg-white border hover:shadow transition text-indigo-800"
            >
              ‹
            </button>
            <button
              onClick={next}
              aria-label="Next testimonial"
              className="p-2 rounded-md bg-white border hover:shadow transition text-indigo-800"
            >
              ›
            </button>
          </div>

          <div className="flex items-center gap-2">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => go(i)}
                aria-label={`Show testimonial ${i + 1}`}
                className={`w-2 h-2 rounded-full transition ${
                  i === index ? "bg-indigo-600" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="mt-18 text-sm text-white-600">
        <Link href="/testimonials" className="text-white-600 hover:underline">
          Read more reviews
        </Link>
      </div>
    </div>

    {/* Right: CTA form */}
    <aside className="bg-indigo-800/70 backdrop-blur-md text-white p-6 rounded-2xl shadow-xl border border-white/20 h-full flex flex-col">
      <h4 className="text-xl font-semibold">Plan your trip with us</h4>
      <p className="mt-3 text-sm text-white/80">
        Tell us where you want to go and we'll design a personalized itinerary.
      </p>

      <form onSubmit={submit} className="mt-4 space-y-3 flex-1 flex flex-col">
        <div>
          <label className="sr-only" htmlFor="t-name">Name</label>
          <input
            id="t-name"
            name="name"
            value={form.name}
            onChange={update}
            placeholder="Your name"
            className="w-full p-3 rounded-md bg-white/20 text-white placeholder-white/60 border border-white/30 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        <div>
          <label className="sr-only" htmlFor="t-contact">Email or phone</label>
          <input
            id="t-contact"
            name="contact"
            value={form.contact}
            onChange={update}
            placeholder="Email or phone"
            className="w-full p-3 rounded-md bg-white/20 text-white placeholder-white/60 border border-white/30 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        <div className="flex gap-3 mt-auto">
          <button
            type="submit"
            disabled={loading}
            className="flex-1 bg-white/20 text-white font-semibold px-4 py-3 rounded-md hover:bg-white/30 hover:backdrop-blur-sm transition shadow-lg"
          >
            {loading ? "Sending…" : "Get a Quote"}
          </button>
          <a
            href="tel:+8801234567890"
            className="flex-1 border border-white/40 text-center px-4 py-3 rounded-md hover:bg-white/10 transition"
          >
            Call Us
          </a>
        </div>

        <div
          role="status"
          aria-live="polite"
          className={`text-sm mt-2 ${
            status.ok === true ? "text-green-200" : "text-yellow-200"
          }`}
        >
          {status.msg}
        </div>

        <div className="text-xs text-white/60 mt-3">
          By submitting you agree to our{" "}
          <Link href="/terms" className="underline">terms</Link>.
        </div>
      </form>
    </aside>
  </div>
</section>
  );
}
