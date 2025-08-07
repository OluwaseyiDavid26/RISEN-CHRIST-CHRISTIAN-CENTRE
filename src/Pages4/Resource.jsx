import React from "react";
import { motion } from "framer-motion";

function Resource() {
  return (
    <section className="w-full py-20 px-4 bg-white text-center">
      <motion.div
        className="max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <motion.h2
          className="text-5xl font-bold text-gray-800 mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          viewport={{ once: true }}
        >
          Resources
        </motion.h2>

        <motion.p
          className="text-lg text-gray-600 leading-relaxed mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
        >
          At The Risen Christ Christian Centre, we believe in empowering
          believers with spirit-filled resources to grow in their faith, deepen
          their understanding of God’s Word, and live victoriously. Explore a
          variety of materials designed to nourish your spiritual journey.
        </motion.p>
      </motion.div>
    </section>
  );
}

export default Resource;
