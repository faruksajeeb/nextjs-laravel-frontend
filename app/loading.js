// app/loading.js
"use client";

import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-950 via-black to-purple-950 text-white">
      <motion.div
        className="w-16 h-16 border-4 border-t-transparent border-indigo-500 rounded-full animate-spin mb-6"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
      ></motion.div>

      <motion.h1
        className="text-xl font-semibold tracking-wide"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Loading<span className="text-indigo-400">...</span>
      </motion.h1>
    </div>
  );
}
