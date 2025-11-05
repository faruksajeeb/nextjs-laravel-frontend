// app/layout.jsx (improved)
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Travelo — Curated journeys",
  description: "Hand-picked itineraries, local experts, and flexible booking.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100 min-h-screen`}
      >
        {/* Skip link for accessibility */}
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-white focus:px-3 focus:py-2 focus:rounded-md focus:shadow-md"
        >
          Skip to content
        </a>

        <div className="flex flex-col min-h-screen">
          <Header />

          <main id="content" className="flex-1 w-full ">
            <div className=" mx-auto px-3 lg:px-0">
              {children}
            </div>
          </main>

          <Footer />
        </div>
      </body>
    </html>
  );
}
