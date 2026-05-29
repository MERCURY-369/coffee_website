"use client";

import { motion } from "framer-motion";

const beans = Array.from({ length: 18 });

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-black via-[#120b07] to-black text-white">

      {/* Floating Beans */}
      <div className="absolute inset-0 overflow-hidden">
        {beans.map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2.5 h-4 bg-amber-700 rounded-full opacity-30"
            initial={{
              y: "100vh",
              x: Math.random() * 1200,
            }}
            animate={{
              y: "-10vh",
              x: Math.random() * 1200,
              rotate: 360,
            }}
            transition={{
              duration: 8 + Math.random() * 6,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,170,60,0.12),transparent_60%)]" />

      {/* NAV */}
      <header className="relative flex items-center justify-between px-10 py-6">
        <h1 className="text-lg tracking-[0.3em] text-amber-500">
          MERCURY
        </h1>

        <nav className="hidden md:flex gap-8 text-sm text-gray-300">
          <a>Home</a>
          <a>Shop</a>
          <a>About</a>
        </nav>
      </header>

      {/* HERO */}
      <section className="relative flex flex-col items-center justify-center text-center min-h-[80vh] px-6">

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-bold leading-tight"
        >
          Premium Coffee <br />
          <span className="text-amber-500">Perfectly Dipped</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-6 max-w-xl text-gray-400"
        >
          Experience luxury dip coffee bags crafted for modern mornings.
          Smooth. Bold. Effortless energy.
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="mt-8 px-8 py-3 rounded-full bg-amber-500 text-black font-semibold shadow-lg hover:shadow-amber-500/40 transition"
        >
          Shop Now
        </motion.button>
      </section>

      {/* PRODUCT PREVIEW */}
      <section className="relative px-10 py-20 grid md:grid-cols-3 gap-8">

        {["Arabica Blend", "Dark Roast", "Signature Dip"].map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -10 }}
            className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-lg"
          >
            <h3 className="text-xl font-semibold text-amber-400">{item}</h3>
            <p className="text-sm text-gray-400 mt-2">
              Premium crafted coffee experience for daily energy.
            </p>
          </motion.div>
        ))}

      </section>
    </main>
  );
}