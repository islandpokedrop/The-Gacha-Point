export default function Page() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center px-6 py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-black to-pink-900/30" />

        <div className="relative z-10 max-w-4xl">
          <p className="uppercase tracking-[0.3em] text-pink-400 text-sm mb-4">
            Malta Collectibles Experience
          </p>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
            The Gacha Point
          </h1>

          <p className="text-lg md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Pokémon cards, collectibles, mystery pulls & Japanese-inspired vending machines — coming soon to Malta.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="px-8 py-4 rounded-2xl bg-pink-500 hover:bg-pink-400 transition font-semibold shadow-lg"
            >
              Follow The Journey
            </a>

            <a
              href="#about"
              className="px-8 py-4 rounded-2xl border border-white/20 hover:border-pink-400 hover:text-pink-300 transition"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="px-6 py-20 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 shadow-xl">
            <h2 className="text-2xl font-bold mb-4">Pokémon & TCG</h2>
            <p className="text-gray-300 leading-relaxed">
              English booster packs, collectible cards, sealed products and future TCG drops for collectors across Malta.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 shadow-xl">
            <h2 className="text-2xl font-bold mb-4">Gacha Experience</h2>
            <p className="text-gray-300 leading-relaxed">
              Inspired by Japanese capsule culture, The Gacha Point brings surprise pulls and collectible fun into physical vending machines.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 shadow-xl">
            <h2 className="text-2xl font-bold mb-4">Built For Malta</h2>
            <p className="text-gray-300 leading-relaxed">
              A modern collectible concept designed for locals, tourists, anime fans and TCG lovers around the island.
            </p>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="px-6 py-20 bg-white/5 border-y border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Your Next Pull Starts Here.
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed mb-10">
            The vision is simple: create Malta’s most exciting vending experience for Pokémon cards, mystery collectibles, anime culture and trading card fans.
          </p>

          <div className="grid sm:grid-cols-3 gap-4 text-left">
            <div className="rounded-2xl bg-black/40 p-6 border border-white/10">
              <p className="text-pink-400 font-semibold mb-2">01</p>
              <h3 className="font-bold mb-2">Premium Machines</h3>
              <p className="text-gray-400 text-sm">
                Clean and modern vending machines placed in high-traffic Malta locations.
              </p>
            </div>

            <div className="rounded-2xl bg-black/40 p-6 border border-white/10">
              <p className="text-pink-400 font-semibold mb-2">02</p>
              <h3 className="font-bold mb-2">Authentic Products</h3>
              <p className="text-gray-400 text-sm">
                Genuine TCG products sourced through trusted European suppliers.
              </p>
            </div>

            <div className="rounded-2xl bg-black/40 p-6 border border-white/10">
              <p className="text-pink-400 font-semibold mb-2">03</p>
              <h3 className="font-bold mb-2">Community Driven</h3>
              <p className="text-gray-400 text-sm">
                Social media openings, collector content and future events for the local TCG scene.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-6 py-24 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">
            Coming Soon To Malta
          </h2>

          <p className="text-gray-300 mb-8 text-lg">
            Follow the project and be the first to know when the first Gacha Point machine launches.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-5 py-4 rounded-2xl bg-white/10 border border-white/10 text-white w-full sm:w-auto flex-1 max-w-md"
            />

            <button className="px-8 py-4 rounded-2xl bg-pink-500 hover:bg-pink-400 transition font-semibold">
              Notify Me
            </button>
          </div>

          <div className="flex justify-center gap-6 text-gray-400 text-sm">
            <a href="#" className="hover:text-pink-400 transition">
              Instagram
            </a>

            <a href="#" className="hover:text-pink-400 transition">
              TikTok
            </a>

            <a href="#" className="hover:text-pink-400 transition">
              Contact
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
