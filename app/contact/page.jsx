// app/contact/page.jsx
"use client";

import { useState } from "react";
import Link from "next/link";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    _hp: "", // honeypot for bots
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ ok: null, msg: "" });

  function update(e) {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
    setStatus({ ok: null, msg: "" });
  }

  function validate() {
    if (!form.name.trim()) return "Name is required.";
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) return "Please enter a valid email.";
    if (!form.message.trim()) return "Message can't be empty.";
    return null;
  }

  async function submit(e) {
    e.preventDefault();
    setStatus({ ok: null, msg: "" });

    // simple honeypot check
    if (form._hp) {
      setStatus({ ok: false, msg: "Spam detected." });
      return;
    }

    const err = validate();
    if (err) return setStatus({ ok: false, msg: err });

    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          subject: form.subject,
          message: form.message,
        }),
      });

      const body = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(body.message || "Failed to send message.");

      setStatus({ ok: true, msg: "Message sent — we will get back to you shortly." });
      setForm({ name: "", email: "", phone: "", subject: "", message: "", _hp: "" });
    } catch (err) {
      setStatus({ ok: false, msg: err.message || "An error occurred." });
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-white">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* left: form */}
        <section className="lg:col-span-2">
          <h2 className="text-3xl font-extrabold mb-2">Get in touch</h2>
          <p className="text-sm text-gray-300 mb-6">
            Questions, custom itineraries, or group bookings — drop us a message and we'll reply within 24 hours.
          </p>

          <form
            onSubmit={submit}
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-lg space-y-4"
            noValidate
          >
            {/* status */}
            <div aria-live="polite" className="min-h-[1.25rem]">
              {status.ok === true && (
                <div className="text-sm text-green-300 bg-green-900/30 px-3 py-2 rounded">{status.msg}</div>
              )}
              {status.ok === false && (
                <div className="text-sm text-yellow-200 bg-red-900/30 px-3 py-2 rounded">{status.msg}</div>
              )}
            </div>

            {/* honeypot (hidden) */}
            <input type="text" name="_hp" value={form._hp} onChange={update} className="hidden" autoComplete="off" />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <label className="block">
                <span className="text-sm text-gray-200">Name</span>
                <input
                  name="name"
                  value={form.name}
                  onChange={update}
                  className="mt-1 w-full p-3 rounded-lg bg-white/6 border border-white/10 placeholder-white/60 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Your full name"
                  required
                />
              </label>

              <label className="block">
                <span className="text-sm text-gray-200">Email</span>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={update}
                  className="mt-1 w-full p-3 rounded-lg bg-white/6 border border-white/10 placeholder-white/60 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="you@domain.com"
                  required
                />
              </label>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <label className="block">
                <span className="text-sm text-gray-200">Phone (optional)</span>
                <input
                  name="phone"
                  value={form.phone}
                  onChange={update}
                  className="mt-1 w-full p-3 rounded-lg bg-white/6 border border-white/10 placeholder-white/60 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="+880 1XXX XXX XXX"
                />
              </label>

              <label className="block">
                <span className="text-sm text-gray-200">Subject (optional)</span>
                <input
                  name="subject"
                  value={form.subject}
                  onChange={update}
                  className="mt-1 w-full p-3 rounded-lg bg-white/6 border border-white/10 placeholder-white/60 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Trip inquiry, group booking, etc."
                />
              </label>
            </div>

            <label className="block">
              <span className="text-sm text-gray-200">Message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={update}
                rows={6}
                className="mt-1 w-full p-3 rounded-lg bg-white/6 border border-white/10 placeholder-white/60 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Tell us your travel dates, group size, preferences..."
                required
              />
            </label>

            <div className="flex items-center gap-3">
              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-pink-500 text-white px-5 py-3 rounded-lg font-semibold shadow-md hover:scale-105 transition disabled:opacity-60"
              >
                {loading ? "Sending…" : "Send Message"}
              </button>

              <Link href="/" className="text-sm text-indigo-300 hover:underline">
                Back to home
              </Link>
            </div>
          </form>

          {/* contact cards */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white/3 border border-white/6 rounded-xl p-4">
              <h4 className="font-semibold text-white">Office</h4>
              <p className="text-sm text-gray-300 mt-2">
                Travelo — 123 Travel St<br />
                Dhaka, Bangladesh
              </p>
              <p className="text-sm text-gray-300 mt-2">
                Email: <a href="mailto:info@travelo.com" className="text-indigo-300 hover:underline">info@travelo.com</a><br />
                Phone: <a href="tel:+8801234567890" className="text-indigo-300 hover:underline">+880 1234 567890</a>
              </p>
            </div>

            <div className="bg-white/3 border border-white/6 rounded-xl p-4">
              <h4 className="font-semibold text-white">Working hours</h4>
              <p className="text-sm text-gray-300 mt-2">
                Mon - Fri: 9:00 — 18:00<br />
                Sat: 10:00 — 14:00<br />
                Sun: Closed
              </p>
            </div>
          </div>
        </section>

        {/* right: sticky card */}
        <aside className="lg:col-span-1">
          <div className="sticky top-6 bg-white/4 backdrop-blur-md border border-white/8 rounded-2xl p-6 shadow">
            <h4 className="font-semibold text-white">Quick contact</h4>
            <p className="text-sm text-gray-300 mt-2">Phone: <a href="tel:+8801234567890" className="text-indigo-300 hover:underline">+880 1234 567890</a></p>
            <p className="text-sm text-gray-300 mt-1">Email: <a href="mailto:info@travelo.com" className="text-indigo-300 hover:underline">info@travelo.com</a></p>

            <div className="mt-4">
              <h4 className="font-semibold text-white">Map</h4>
              <div className="mt-2 w-full h-40 bg-white/6 rounded-md flex items-center justify-center text-sm text-gray-300">
                Map placeholder — replace with embed
              </div>
            </div>

            <div className="mt-4">
              <h4 className="font-semibold text-white">Follow us</h4>
              <div className="mt-2 flex gap-3">
                <a href="#" className="text-indigo-300 hover:underline">Facebook</a>
                <a href="#" className="text-indigo-300 hover:underline">Instagram</a>
                <a href="#" className="text-indigo-300 hover:underline">Twitter</a>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}
