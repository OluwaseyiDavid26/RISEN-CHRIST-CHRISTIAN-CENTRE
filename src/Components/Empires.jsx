import { motion } from "framer-motion";

function Empires() {
  return (
    <section className="w-full py-20 px-4 bg-white text-center">
      <div className="max-w-3xl mx-auto">
        {/* Heading */}
        <motion.h2
          className="text-4xl font-bold text-gray-800 mb-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          Empires
        </motion.h2>

        {/* Paragraph */}
        <motion.p
          className="text-lg text-gray-600 leading-relaxed mb-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          At Risen Christ Christian Centre, we believe in the power of community
          and the importance of reaching beyond borders. Our Empires represent
          the different branches of our church, each serving as a beacon of
          faith, hope, and transformation in its location.
        </motion.p>

        {/* Subheading */}
        <motion.h3
          className="text-2xl font-semibold text-gray-800 mb-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          Find a Branch Near You
        </motion.h3>

        {/* Button */}
        <motion.button
          className="mt-2 px-6 py-3 border border-gray-800 text-gray-800 rounded hover:bg-gray-800 hover:text-white transition"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 1.2 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          See All Branches
        </motion.button>
      </div>
    </section>
  );
}

export default Empires;
