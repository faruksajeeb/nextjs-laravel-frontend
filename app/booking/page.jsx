"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function BookingPage({ searchParams }) {
  // Optional: prefill package from query string ?pkg=bali-7d
   // unwrap the searchParams object
  const params = React.use(searchParams);
  const prefillPackage = params?.pkg || "";

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    pkg: prefillPackage,
    date: "",
    travelers: 1,
    budget: "",
    notes: "",
    _hp: "", // honeypot
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ ok: null, msg: "" });

  useEffect(() => {
    // if searchParams changes (client navigation), keep pkg in sync
    setForm((s) => ({ ...s, pkg: prefillPackage }));
  }, [prefillPackage]);

  function update(e) {
    const { name, value } = e.target;
    // ensure travelers is a number
    setForm((s) => ({ ...s, [name]: name === "travelers" ? Number(value) : value }));
    setStatus({ ok: null, msg: "" });
  }

  function validate() {
    if (!form.fullName.trim()) return "Full name is required.";
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) return "Please enter a valid email.";
    if (!form.phone.trim()) return "Phone number is required.";
    if (!form.date) return "Please select a travel date.";
    if (!form.travelers || form.travelers < 1) return "Please enter number of travelers (at least 1).";
    return null;
  }

  async function submit(e) {
    e.preventDefault();
    setStatus({ ok: null, msg: "" });

    // honeypot - simple spam check
    if (form._hp) {
      setStatus({ ok: false, msg: "Spam detected." });
      return;
    }

    const err = validate();
    if (err) {
      setStatus({ ok: false, msg: err });
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: form.fullName,
          email: form.email,
          phone: form.phone,
          pkg: form.pkg,
          date: form.date,
          travelers: form.travelers,
          budget: form.budget,
          notes: form.notes,
        }),
      });

      const body = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(body.message || "Failed to submit booking.");

      setStatus({ ok: true, msg: "Booking request submitted! We will contact you shortly." });
      setForm({
        fullName: "",
        email: "",
        phone: "",
        pkg: prefillPackage,
        date: "",
        travelers: 1,
        budget: "",
        notes: "",
        _hp: "",
      });
    } catch (err) {
      setStatus({ ok: false, msg: err.message || "An error occurred." });
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-2xl font-extrabold text-white mb-2">Request a Booking</h2>
      <p className="text-sm text-gray-300 mb-6">
        Fill this form and our travel specialist will reach out to confirm availability and next steps.
      </p>

      <form
        onSubmit={submit}
        className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-lg space-y-4"
        noValidate
      >
        {/* ARIA live status */}
        <div aria-live="polite" className="min-h-[1.25rem]">
          {status.ok === true && <div className="text-sm text-green-300 bg-green-900/30 px-3 py-2 rounded">{status.msg}</div>}
          {status.ok === false && <div className="text-sm text-yellow-200 bg-red-900/30 px-3 py-2 rounded">{status.msg}</div>}
        </div>

        {/* honeypot */}
        <input type="text" name="_hp" value={form._hp} onChange={update} className="hidden" autoComplete="off" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <label className="block">
            <span className="text-sm text-white/90">Full name</span>
            <input
              name="fullName"
              value={form.fullName}
              onChange={update}
              className="mt-1 w-full p-3 rounded-lg bg-white/6 border border-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Your full name"
              required
            />
          </label>

          <label className="block">
            <span className="text-sm text-white/90">Email</span>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={update}
              className="mt-1 w-full p-3 rounded-lg bg-white/6 border border-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="you@domain.com"
              required
            />
          </label>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <label className="block">
            <span className="text-sm text-white/90">Phone</span>
            <input
              name="phone"
              value={form.phone}
              onChange={update}
              className="mt-1 w-full p-3 rounded-lg bg-white/6 border border-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="+880 1XXX XXX XXX"
              required
            />
          </label>

          <label className="block">
            <span className="text-sm text-white/90">Package (optional)</span>
            <div className="mt-1 flex gap-2">
              <input
                name="pkg"
                value={form.pkg}
                onChange={update}
                placeholder="e.g. bali-7d"
                className="flex-1 p-3 rounded-lg bg-white/6 border border-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              {form.pkg && (
                <Link
                  href={form.pkg.startsWith("/") ? form.pkg : `/packages/${encodeURIComponent(form.pkg)}`}
                  className="inline-flex items-center px-3 py-2 rounded-lg bg-white/10 text-white text-sm hover:bg-white/20 transition"
                >
                  View package
                </Link>
              )}
            </div>
          </label>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <label className="block">
            <span className="text-sm text-white/90">Travel date</span>
            <input
              name="date"
              type="date"
              value={form.date}
              onChange={update}
              className="mt-1 w-full p-3 rounded-lg bg-white/6 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </label>

          <label className="block">
            <span className="text-sm text-white/90">Travelers</span>
            <input
              name="travelers"
              type="number"
              min={1}
              max={20}
              value={form.travelers}
              onChange={update}
              className="mt-1 w-full p-3 rounded-lg bg-white/6 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </label>

          <label className="block">
            <span className="text-sm text-white/90">Budget (optional)</span>
            <input
              name="budget"
              value={form.budget}
              onChange={update}
              placeholder="e.g. ৳12000 per person"
              className="mt-1 w-full p-3 rounded-lg bg-white/6 border border-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </label>
        </div>

        <label className="block">
          <span className="text-sm text-white/90">Special requests or notes</span>
          <textarea
            name="notes"
            value={form.notes}
            onChange={update}
            rows={4}
            className="mt-1 w-full p-3 rounded-lg bg-white/6 border border-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Any dietary restrictions, room preferences, or mobility requirements..."
          />
        </label>

        <div className="flex items-center gap-3">
          <button
            type="submit"
            disabled={loading}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-pink-500 text-white px-5 py-3 rounded-lg font-semibold shadow-md hover:scale-105 transition disabled:opacity-60"
          >
            {loading ? "Submitting…" : "Request Booking"}
          </button>

          <Link href="/packages" className="text-sm text-indigo-300 hover:underline">
            Choose a package
          </Link>
        </div>
      </form>

      <div className="mt-6 text-sm text-gray-300 bg-white/4 p-4 rounded-lg shadow-sm">
        <div className="font-semibold text-white">What happens next?</div>
        <ol className="mt-2 space-y-1 list-decimal list-inside text-gray-300">
          <li>We receive your request and check availability.</li>
          <li>A travel specialist contacts you to confirm details and pricing.</li>
          <li>We hold the booking and send a secure payment link (if required).</li>
        </ol>
      </div>
    </main>
  );
}
