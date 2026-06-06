"use client";

import { motion } from "framer-motion";

export default function Page() {
  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-hidden">
      <section className="relative flex flex-col items-center justify-center text-center px-6 py-28">
        <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-900/50 via-black to-cyan-900/40" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-5xl"
        >
          <p className="uppercase tracking-[0.4em] text-cyan-400 text-sm mb-4">
            Cards • Capsules • Collectibles
          </p>

          <h1 className="text-6xl md:text-8xl font-extrabold mb-6 text-fuchsia-400 drop-shadow-[0_0_30px_rgba(217,70,239,0.9)]">
            THE GACHA POINT
          </h1>

          <p className="text-xl md:text-3xl text-gray-300 mb-4">
            Malta's Future Home For Cards, Capsules & Collectibles
          </p>

          <p className="text-cyan-400 text-xl font-semibold mb-10">
            Your Next Rare Pull Is Waiting.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="px-8 py-4 rounded-2xl bg-fuchsia-500 hover:bg-fuchsia-400 transition font-semibold"
            >
              Join The Journey
            </a>

            <a
              href="#about"
              className="px-8 py-4 rounded-2xl border border-cyan-500/40 hover:border-cyan-300 transition"
            >
              Discover More
            </a>
          </div>
        </motion.div>
      </section>

      <section id="about" className="px-6 py-20 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-fuchsia-500/10 rounded-3xl p-8 border border-fuchsia-500/30">
            <h2 className="text-2xl font-bold mb-4">🎴 Pokémon & TCG</h2>
            <p className="text-gray-300">
              English booster packs, sealed products and future trading card game releases.
            </p>
          </div>

          <div className="bg-cyan-500/10 rounded-3xl p-8 border border-cyan-500/30">
            <h2 className="text-2xl font-bold mb-4">🎁 Gacha Experience</h2>
            <p className="text-gray-300">
              Inspired by Japanese capsule culture and surprise collectible experiences.
            </p>
          </div>

          <div className="bg-fuchsia-500/10 rounded-3xl p-8 border border-fuchsia-500/30">
            <h2 className="text-2xl font-bold mb-4"> Built For Malta</h2>
            <p className="text-gray-300">
              A modern concept designed for collectors, tourists, anime fans and TCG enthusiasts.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 bg-white/5 border-y border-white/10">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-fuchsia-400 mb-6">
            The Vision
          </h2>

          <p className="text-lg text-gray-300 mb-12">
            Bringing premium vending experiences, authentic products and a thriving collector community to Malta.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="rounded-2xl bg-black/40 p-6 border border-white/10">
              <h3 className="font-bold mb-2">🚀 Premium Machines</h3>
              <p className="text-gray-400 text-sm">
                High-traffic locations with a modern and eye-catching setup.
              </p>
            </div>

            <div className="rounded-2xl bg-black/40 p-6 border border-white/10">
              <h3 className="font-bold mb-2">✅ Authentic Products</h3>
              <p className="text-gray-400 text-sm">
                Sourced from trusted European distributors.
              </p>
            </div>

            <div className="rounded-2xl bg-black/40 p-6 border border-white/10">
              <h3 className="font-bold mb-2">🎮 Community First</h3>
              <p className="text-gray-400 text-sm">
                Social content, events and future collector experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-10 text-cyan-400">
            Coming Soon Locations
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-3xl bg-fuchsia-500/10 border border-fuchsia-500/30 p-8">
              <h3 className="text-2xl font-bold text-fuchsia-400 mb-3">
                📍 Tigné Point
              </h3>
              <p className="text-gray-300">
                Planned first location for The Gacha Point experience.
              </p>
            </div>

            <div className="rounded-3xl bg-cyan-500/10 border border-cyan-500/30 p-8">
              <h3 className="text-2xl font-bold text-cyan-400 mb-3">
                🌴 More Malta Locations
              </h3>
              <p className="text-gray-300">
                Additional locations are already being explored.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="px-6 py-24 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-fuchsia-400">
            Business Enquiries
          </h2>

          <p className="text-gray-300 mb-8 text-lg">
            Interested in hosting a machine, partnering with us or learning more?
          </p>

          <a
            href="mailto:islandpokedrop@gmail.com"
            className="inline-block px-8 py-4 rounded-2xl bg-fuchsia-500 hover:bg-fuchsia-400 transition font-semibold"
          >
            Contact Us
          </a>

          <p className="text-gray-400 mt-6">
            islandpokedrop@gmail.com
          </p>

          <div className="flex justify-center gap-6 text-gray-400 text-sm mt-10">
            <span>Instagram (Coming Soon)</span>
            <span>TikTok (Coming Soon)</span>
          </div>
        </div>
      </section>
    </div>
  );
}
