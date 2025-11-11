import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Event() {
  return (
    <section className="w-full py-20 px-4 bg-white text-center">
      <div className="max-w-3xl mx-auto">
        {/* Animated Title */}
        <motion.h2
          className="text-6xl font-bold text-gray-800 mb-6"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Events
        </motion.h2>

        {/* Animated Paragraph */}
        <motion.p
          className="text-lg text-gray-600 leading-relaxed mb-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          At The Risen Christ Christian Centre, we believe in the power of
          gathering together for worship, prayer, and spiritual growth. Our
          events are designed to strengthen your faith, build community, and
          bring divine encounters. Join us for upcoming programs and special
          services!
        </motion.p>
      </div>
    </section>
  );
}

export default Event;
