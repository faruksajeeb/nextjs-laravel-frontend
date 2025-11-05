"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import ScrollToTop from "./ScrollToTop";

export default function BigFooter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState({ ok: null, msg: "" });
  const [loading, setLoading] = useState(false);

  function validateEmail(v) {
    return /\S+@\S+\.\S+/.test(v);
  }

  async function subscribe(e) {
    e.preventDefault();
    setStatus({ ok: null, msg: "" });

    if (!email.trim()) return setStatus({ ok: false, msg: "Please enter your email." });
    if (!validateEmail(email)) return setStatus({ ok: false, msg: "Invalid email address." });

    setLoading(true);
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) throw new Error("Subscription failed");
      setStatus({ ok: true, msg: "🎉 Subscribed successfully!" });
      setEmail("");
    } catch (err) {
      setStatus({ ok: false, msg: err.message });
    } finally {
      setLoading(false);
    }
  }

  return (
    <footer
      id="contact"
      className="bg-gradient-to-br from-indigo-500 via-sky-500 to-purple-600 text-white mt-10 py-14 shadow-inner"
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand */}
        <div>
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white font-bold shadow-lg">
              TA
            </div>
            <div>
              <div className="text-xl font-extrabold tracking-wide">Travelo</div>
              <div className="text-sm opacity-80">Curated journeys & guides</div>
            </div>
          </Link>

          <p className="text-sm opacity-90 mt-4 max-w-sm">
            Your trusted travel partner — connecting you with the world through unforgettable experiences.
          </p>

          <div className="mt-6 flex items-center gap-3">
            {["facebook", "instagram", "twitter"].map((icon) => (
              <a
                key={icon}
                href="#"
                aria-label={icon}
                className="p-2 rounded-md bg-white/20 hover:bg-white/30 transition"
              >
                <i className={`ri-${icon}-fill text-lg`}></i>
              </a>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <h6 className="font-semibold text-lg">Contact</h6>
          <p className="text-sm opacity-90 mt-2">
            info@travelo.com
            <br />
            +880 1234 567890
          </p>

          <div className="mt-6 grid grid-cols-2 gap-2 text-sm">
            <Link href="/about" className="hover:underline">About</Link>
            <Link href="/packages" className="hover:underline">Packages</Link>
            <Link href="/destinations" className="hover:underline">Destinations</Link>
            <Link href="/contact" className="hover:underline">Contact</Link>
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h6 className="font-semibold text-lg">Newsletter</h6>
          <p className="text-sm opacity-90 mt-2">
            Join our tribe of travelers for exclusive deals & inspiration.
          </p>

          <form onSubmit={subscribe} className="mt-4 flex items-center max-w-md">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              className="flex-1 p-2 rounded-l-md bg-white text-gray-800 placeholder-gray-400 focus:outline-none"
            />
            <button
              type="submit"
              disabled={loading}
              className="px-4 py-2 rounded-r-md bg-gray-900 hover:bg-gray-800 transition text-white font-semibold"
            >
              {loading ? "..." : "Subscribe"}
            </button>
          </form>

          <div className="mt-3 text-sm">
            {status.ok && <div className="text-green-100">{status.msg}</div>}
            {status.ok === false && <div className="text-yellow-200">{status.msg}</div>}
          </div>
        </div>
      </div>

      <div className="border-t border-white/20 mt-10 pt-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between text-sm opacity-80">
          <div>© {new Date().getFullYear()} Travelo. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:underline">Privacy</Link>
            <Link href="/terms" className="hover:underline">Terms</Link>
          </div>
            {/* Go to Top Button */}
            <ScrollToTop/>
        </div>
      </div>
    </footer>
  );
}
