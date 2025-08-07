import { motion } from "framer-motion";

function Salvation() {
  return (
    <section className="w-full py-20 px-4 bg-white text-center">
      <div className="max-w-3xl mx-auto">
        {/* Heading */}
        <motion.h2
          className="text-4xl font-bold text-gray-800 mb-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Salvation
        </motion.h2>

        {/* Paragraph */}
        <motion.p
          className="text-lg text-gray-600 leading-relaxed mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          No matter who you are or what you’ve been through, God’s love is for
          you. Jesus died for your sins so you can have a new life in Him.
          Today, you can make the most important decision of your life—
          accepting Jesus Christ as your Lord and Savior.
        </motion.p>
      </div>
    </section>
  );
}

export default Salvation;
