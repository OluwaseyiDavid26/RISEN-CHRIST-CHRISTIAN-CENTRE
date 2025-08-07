import { motion } from "framer-motion";

function Worship() {
  return (
    <>
      {/* Dark Section */}
      <section className="w-full py-20 px-4 bg-[#2e2e2e] text-center">
        <div className="max-w-3xl mx-auto">
          {/* Heading */}
          <motion.h2
            className="text-4xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Worship Through Your Generosity
          </motion.h2>

          {/* Paragraph */}
          <motion.p
            className="text-lg text-white leading-relaxed mb-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Your giving spreads the gospel, supports church initiatives, and
            impacts lives. Every seed sown advances God’s kingdom and brings
            hope.
          </motion.p>

          {/* Button */}
          <motion.button
            className="mt-2 px-6 py-3 bg-[#ff004f] text-white font-bold rounded hover:bg-[#e60045] transition"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Give Now
          </motion.button>
        </div>
      </section>

      {/* White Spacer */}
      <div className="w-full h-16 bg-white"></div>
    </>
  );
}

export default Worship;
