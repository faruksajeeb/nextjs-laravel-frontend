// app/not-found.js
"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-indigo-950 text-white px-6 py-12">
      <div className="text-center max-w-lg mx-auto">
        {/* Animated 404 number */}
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-[120px] md:text-[150px] font-extrabold bg-gradient-to-r from-pink-500 via-indigo-400 to-yellow-400 bg-clip-text text-transparent drop-shadow-lg"
        >
          404
        </motion.h1>

        {/* Subtitle */}
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-2xl md:text-3xl font-bold mt-2"
        >
          Oops! Page Not Found
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-4 text-gray-300"
        >
          The page you’re looking for doesn’t exist or may have been moved.
        </motion.p>

        {/* Back to home button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-10"
        >
          <Link
            href="/"
            className="relative z-10 inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-semibold 
  bg-gradient-to-r from-indigo-500 to-pink-500 shadow-lg shadow-pink-500/30 
  hover:from-indigo-400 hover:to-pink-400 transition-all duration-300"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </Link>
        </motion.div>

        {/* Decorative background effect */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }}
          transition={{ delay: 1.2, duration: 1.2 }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_60%)]"
        ></motion.div>
      </div>
    </main>
  );
}
