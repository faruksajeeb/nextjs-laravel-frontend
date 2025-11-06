// app/error.js
"use client";

import Link from "next/link";
import * as React from "react";

export default function AppError({ error, reset }) {
  // Defensive: error may be undefined in some environments
  const msg = (error && (error.message || String(error))) || "An unexpected error occurred.";

  // Only show stack in development (avoid leaking internals in production)
  const isDev = process.env.NODE_ENV === "development";
  const stack = isDev && error?.stack ? error.stack : null;

  // prefill mail for reporting
  const mailBody = encodeURIComponent(
    `Hello,\n\nI encountered an error in the Travelo app:\n\nMessage: ${msg}\n\nStack:\n${stack || "stack hidden"}\n\nURL: ${typeof window !== "undefined" ? window.location.href : "unknown"}\n\nPlease investigate.\n`
  );
  const mailto = `mailto:bugs@travelo.com?subject=${encodeURIComponent(
    "Error report: Travelo"
  )}&body=${mailBody}`;

  return (
    <main className="min-h-screen flex items-center justify-center bg-black text-white px-4">
      <div className="max-w-3xl w-full bg-white/5 backdrop-blur-md border border-white/8 rounded-2xl p-6 md:p-10 shadow-xl">
        <div className="flex items-start gap-4">
          <div className="flex-none">
            <div className="h-12 w-12 rounded-full bg-gradient-to-br from-indigo-500 to-pink-500 flex items-center justify-center text-white text-xl font-bold">
              !
            </div>
          </div>

          <div className="flex-1">
            <h1 className="text-2xl md:text-3xl font-extrabold">Something went wrong</h1>
            <p className="text-sm text-gray-300 mt-2">
              Sorry — we ran into a problem while loading this page. You can try again or go back to the homepage.
            </p>

            <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:gap-3 gap-3">
              <button
                onClick={() => {
                  // reset is provided by Next.js; guard for safety
                  try {
                    reset?.();
                  } catch (e) {
                    // fallback: reload the page
                    if (typeof window !== "undefined") window.location.reload();
                  }
                }}
                className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-500 to-pink-500 text-white font-semibold shadow-md hover:scale-105 transition"
              >
                Retry
              </button>

              <Link
                href="/"
                className="inline-flex items-center justify-center px-4 py-2 rounded-lg border border-white/10 text-white/90 hover:bg-white/5 transition text-center"
              >
                Home
              </Link>

              <a
                href={mailto}
                className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-white/6 text-indigo-200 hover:bg-white/10 transition text-sm"
              >
                Report issue
              </a>
            </div>

            <div className="mt-6 bg-white/4 p-4 rounded-lg text-sm text-gray-200">
              <div className="font-medium">Error message</div>
              <div className="mt-2 break-words text-yellow-100">{msg}</div>

              {stack && (
                <details className="mt-3 text-xs text-gray-300">
                  <summary className="cursor-pointer">Show stack trace</summary>
                  <pre className="mt-2 max-h-48 overflow-auto text-xs text-gray-200">{stack}</pre>
                </details>
              )}
            </div>

            <div className="mt-4 text-xs text-gray-400">
              If this keeps happening, please contact support or report the issue.
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
