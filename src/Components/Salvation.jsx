import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Salvation() {
  return (
    <section className="w-full py-24 px-6 bg-white text-center relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-[300px] bg-[#D4AF37]/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-3xl mx-auto relative z-10">
        <motion.p
           className="text-[#C5A017] text-sm uppercase tracking-[0.2em] font-semibold mb-4"
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6 }}
           viewport={{ once: true }}
        >
          New Beginnings
        </motion.p>
        
        {/* Heading */}
        <motion.h2
          className="text-4xl md:text-5xl font-playfair font-bold text-gray-900 mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Salvation
        </motion.h2>

        {/* Paragraph */}
        <motion.p
          className="text-lg md:text-xl text-gray-600 font-light leading-relaxed mb-10 font-outfit"
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

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.4, duration: 0.6 }}
           viewport={{ once: true }}
        >
          <Link to="/sinners">
            <button className="px-10 py-4 border border-[#D4AF37] text-[#B8860B] font-bold uppercase tracking-widest text-sm rounded-full hover:bg-[#D4AF37] hover:text-white transition-all duration-300 shadow-sm hover:shadow-[0_8px_20px_rgba(212,175,55,0.25)]">
              Pray the Sinner's Prayer
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default Salvation;
