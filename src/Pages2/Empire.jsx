import React from "react";
import { motion } from "framer-motion";
import empire from "../assets/empire-img.avif";

function Empire() {
  return (
    <section className="w-full bg-white">
      {/* Top Heading */}
      <motion.div
        className="text-center py-12"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h1 className="text-4xl md:text-5xl font-extrabold uppercase tracking-wider mt-4">
          Empires
        </h1>
      </motion.div>

      {/* Fullscreen Image */}
      <motion.div
        className="w-full h-[80vh] md:h-screen mt-6 overflow-hidden px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <img
          src={empire}
          alt="Empire"
          className="w-full h-full object-cover rounded-xl"
        />
      </motion.div>

      {/* Text Block Below Image */}
      <motion.div
        className="px-6 py-12 text-left"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h2 className="text-xl md:text-xl font-medium mb-4">
          Expanding the Kingdom, One City at a Time
        </h2>
        <p className="text-lg text-gray-700 max-w-2xl">
          At The Risen Christ Christian Centre, we believe in spreading the
          gospel far and wide, establishing Empires—our church branches—to reach
          more people with the transformative power of Christ. Each branch
          carries the same vision, passion, and commitment to raising
          Kingdom-minded believers.
        </p>
      </motion.div>
    </section>
  );
}

export default Empire;
