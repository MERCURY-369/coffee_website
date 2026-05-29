"use client";

import { motion } from "framer-motion";

const beans = Array.from({ length: 12 });

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#0f0c08] text-white overflow-hidden flex items-center justify-center">

      {/* Floating Beans Background */}
      <div className="absolute inset-0 overflow-hidden">
        {beans.map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-5 bg-amber-900 rounded-full opacity-40"
            initial={{ y: "100vh", x: Math.random() * 1000 }}
            animate={{
              y: "-10vh",
              x: Math.random() * 1000,
              rotate: 360,
            }}
            transition={{
              duration: 8 + Math.random() * 5,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* Soft Glow Layer */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,180,80,0.08),transparent)]" />

      {/* Main Content */}
      <div className="relative text-center px-6">

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl font-bold tracking-tight"
        >
          Premium Coffee,  
          <span className="text-amber-500"> Perfectly Dipped</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="mt-6 text-lg text-gray-300 max-w-xl mx-auto"
        >
          Experience smooth dip coffee bags crafted for modern mornings.
          Rich aroma. Zero effort. Pure energy.
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="mt-8 px-8 py-3 rounded-full bg-amber-500 text-black font-semibold shadow-lg"
        >
          Shop Now
        </motion.button>

      </div>
    </main>
  );
}