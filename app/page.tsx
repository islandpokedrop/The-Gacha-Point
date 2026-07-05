"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Page() {
  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-hidden">
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6">
        <Image
  src="/buildings.png"
  alt="Akihabara Buildings"
  fill
  priority
  className="object-cover absolute inset-0 opacity-100"
/>

<div className="absolute inset-0 bg-gradient-to-br from-fuchsia-950/40 via-black/20 to-cyan-950/40" />

<div
  className="absolute inset-0 opacity-10"
  style={{
    backgroundImage:
      "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
    backgroundSize: "50px 50px",
  }}
/>

<div className="absolute inset-0 bg-black/50" />
<div className="absolute top-10 left-10 w-96 h-96 bg-fuchsia-500/20 blur-[150px] rounded-full animate-pulse" />

<div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-500/20 blur-[150px] rounded-full animate-pulse" />

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/10 blur-[180px] rounded-full" />

<div className="absolute inset-0 opacity-40 pointer-events-none">
  <div className="absolute top-24 left-20 text-fuchsia-500 text-6xl font-bold rotate-[-10deg] drop-shadow-[0_0_25px_rgba(217,70,239,1)] animate-pulse">
    東京
  </div>
{/* Floating Neon Signs */}

<motion.div
  animate={{
  y: [0, 20, 0],
  opacity: [1, 0.5, 1],
}}
  transition={{
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="absolute top-32 left-16 z-10"
>
  <div className="px-6 py-3 rounded-xl border border-fuchsia-500 bg-black/40 backdrop-blur-md text-fuchsia-400 text-xl font-bold shadow-[0_0_25px_rgba(217,70,239,1)]">
    ポケモン
  </div>
</motion.div>

<motion.div
  animate={{
  y: [0, 20, 0],
  opacity: [1, 0.5, 1],
}}
  transition={{
    duration: 5,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="absolute top-52 right-20 z-10"
>
  <div className="px-6 py-3 rounded-xl border border-cyan-500 bg-black/40 backdrop-blur-md text-cyan-300 text-xl font-bold shadow-[0_0_25px_rgba(34,211,238,1)]">
    ガチャ
  </div>
</motion.div>

<motion.div
  animate={{
  y: [0, 20, 0],
  opacity: [1, 0.5, 1],
}}
  transition={{
    duration: 6,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="absolute bottom-40 left-24 z-10"
>
  <div className="px-6 py-3 rounded-xl border border-fuchsia-500 bg-black/40 backdrop-blur-md text-fuchsia-300 text-lg font-bold shadow-[0_0_25px_rgba(217,70,239,1)]">
    TCG
  </div>
</motion.div>

<motion.div
  animate={{
  y: [0, 20, 0],
  opacity: [1, 0.5, 1],
}}
  transition={{
    duration: 5,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  
  className="absolute bottom-52 right-24 z-10"
>
  <div className="px-6 py-3 rounded-xl border border-fuchsia-500 bg-black/40 backdrop-blur-md text-fuchsia-400 text-xl font-bold shadow-[0_0_25px_rgba(217,70,239,1)] animate-pulse">
    ANIME
  </div>
</motion.div>
  <div className="absolute top-40 right-24 text-cyan-400 text-5xl font-bold rotate-[8deg] drop-shadow-[0_0_25px_rgba(34,211,238,1)] animate-pulse">
    ガチャ
  </div>

  <div className="absolute bottom-32 left-1/4 text-fuchsia-400 text-4xl font-bold drop-shadow-[0_0_25px_rgba(217,70,239,1)] animate-pulse">
    アニメ
  </div>

  <div className="absolute bottom-24 right-1/4 text-cyan-300 text-5xl font-bold drop-shadow-[0_0_25px_rgba(34,211,238,1)] animate-pulse">
    ポケモン
  </div>
</div>
{/* Cyberpunk Rain */}
<div className="absolute inset-0 overflow-hidden pointer-events-none">
  {[...Array(80)].map((_, i) => (
    <div
  key={i}
  className="absolute opacity-50"
  style={{
    left: `${i * 2.5}%`,
    animation: "rain 4s linear infinite",
    animationDelay: `${i * 0.1}s`,
    width: "3px",
    height: "50px",
    background:
      "linear-gradient(to bottom, rgba(34,211,238,0), rgba(34,211,238,1), rgba(34,211,238,0))",
    boxShadow: "0 0 10px rgba(34,211,238,0.8)",
  }}
/>
  ))}
</div>
<div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-ping" />

<div className="absolute top-1/3 right-1/4 w-3 h-3 bg-fuchsia-500 rounded-full animate-pulse" />

<div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-cyan-300 rounded-full animate-ping" />

<div className="absolute bottom-1/3 right-1/3 w-4 h-4 bg-fuchsia-400 rounded-full animate-pulse" />

<div className="absolute top-1/2 left-20 w-2 h-2 bg-white rounded-full animate-ping" />

<div className="absolute top-20 right-32 w-2 h-2 bg-cyan-300 rounded-full animate-pulse" />

<div className="absolute bottom-24 left-24 w-2 h-2 bg-fuchsia-300 rounded-full animate-pulse" />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-5xl"
        >
          <motion.div
  animate={{ y: [0, -10, 0] }}
  transition={{
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut",
  }}
>
  <Image
    src="/logo.png"
    alt="The Gacha Point Logo"
    width={700}
    height={700}
    priority
    className="mx-auto mb-6 drop-shadow-[0_0_40px_rgba(217,70,239,0.8)]"
  />
</motion.div>
          <p className="uppercase tracking-[0.4em] text-cyan-400 text-sm mb-4">
  🇯🇵 Akihabara Inspired • Malta Based • Collectibles Culture
</p>

          
<div className="mt-4 inline-block px-4 py-2 border border-cyan-400 rounded-lg bg-cyan-500/10 text-cyan-300 text-sm tracking-widest">
  秋葉原 STYLE • MALTA EDITION
</div>
          <p className="text-cyan-400 text-xl font-semibold mb-10 animate-pulse">
  ✨ Your Next Rare Pull Is Waiting ✨
</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="px-8 py-4 rounded-2xl bg-fuchsia-500 hover:bg-fuchsia-400 transition font-semibold"
            >
              🎴 Join The Adventure
            </a>

            <a
              href="#about"
              className="px-8 py-4 rounded-2xl border border-cyan-500/40 hover:border-cyan-300 transition"
            >
              ⚡ Explore The World
            </a>
          </div>
        </motion.div>
      </section>

      <section id="about" className="px-6 py-20 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-fuchsia-500/10 rounded-3xl p-8 border border-fuchsia-500/30 hover:scale-105 hover:shadow-[0_0_30px_rgba(217,70,239,0.6)] transition-all duration-300">
            <h2 className="text-2xl font-bold mb-4">🎴 Pokémon & TCG</h2>
            <p className="text-gray-300">
              English booster packs, sealed products and future trading card game releases
            </p>
          </div>

          <div className="bg-cyan-500/10 rounded-3xl p-8 border border-cyan-500/30 hover:scale-105 hover:shadow-[0_0_30px_rgba(217,70,239,0.6)] transition-all duration-300">
            <h2 className="text-2xl font-bold mb-4">🎁 Gacha Experience</h2>
            <p className="text-gray-300">
              Inspired by Japanese capsule culture and surprise collectible experiences.
            </p>
          </div>

          <div className="bg-fuchsia-500/10 rounded-3xl p-8 border border-fuchsia-500/30 hover:scale-105 hover:shadow-[0_0_30px_rgba(217,70,239,0.6)] transition-all duration-300">
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
<section className="py-20 text-center">
  <h2 className="text-4xl font-bold text-fuchsia-400 mb-12">
    Featured Universes
  </h2>

  <div className="flex flex-wrap justify-center gap-4">
    <div className="px-6 py-3 rounded-full border border-yellow-400 text-yellow-300">
      ⚡ Pokémon
    </div>

    <div className="px-6 py-3 rounded-full border border-cyan-400 text-cyan-300">
      🏴‍☠️ One Piece
    </div>

    <div className="px-6 py-3 rounded-full border border-fuchsia-400 text-fuchsia-300">
      🐉 Dragon Ball
    </div>

    <div className="px-6 py-3 rounded-full border border-green-400 text-green-300">
      🥷 Naruto
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
<section className="py-10 text-center">
  <div className="inline-block px-6 py-3 rounded-full bg-fuchsia-500/20 border border-fuchsia-500 text-fuchsia-300 animate-pulse">
    🚀 FIRST MACHINE OPENING SOON IN MALTA
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

    <form
      action="https://formspree.io/f/meewedkj"
      method="POST"
      className="flex flex-col gap-4"
    >
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        required
        className="px-5 py-4 rounded-2xl bg-white/10 border border-fuchsia-500 text-white"
      />

      <input
        type="email"
        name="email"
        placeholder="Your Email"
        required
        className="px-5 py-4 rounded-2xl bg-white/10 border border-fuchsia-500 text-white"
      />

      <textarea
        name="message"
        placeholder="Your Message"
        required
        rows={5}
        className="px-5 py-4 rounded-2xl bg-white/10 border border-fuchsia-500 text-white"
      />

      <button
        type="submit"
        className="px-8 py-4 rounded-2xl bg-fuchsia-500 hover:bg-fuchsia-400 transition font-semibold"
      >
        Send Message 🚀
      </button>
    </form>

    <p className="text-gray-400 mt-8">
      kevinthegachapoint@gmail.com
    </p>

    <div className="flex justify-center gap-6 text-gray-400 text-sm mt-6">
      <span>Instagram (Coming Soon)</span>
      <span>TikTok (Coming Soon)</span>
    </div>
  </div>
</section>

<footer className="border-t border-fuchsia-500/20 py-8 text-center text-gray-500">
  <p className="text-fuchsia-400">
    © 2026 The Gacha Point • Malta
  </p>

  <p className="mt-2 text-sm">
    
    🎴 Pokémon • 🎁 Gacha • ✨ Collectibles
  </p>
</footer>

</div>
  );
}