import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Empires() {
  return (
    <section className="w-full py-24 px-6 bg-[#0a0a0a] text-center relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] bg-[var(--color-gold-500)]/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.p
          className="text-[var(--color-gold-400)] text-sm uppercase tracking-[0.2em] font-semibold mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          Our Branches
        </motion.p>
        
        <motion.h2
          className="text-4xl md:text-5xl lg:text-6xl font-bold font-playfair text-white mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          Empires
        </motion.h2>

        <motion.div
          className="glass-card p-8 md:p-12 mb-12 shadow-2xl relative overflow-hidden group"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light">
            At <span className="text-white font-medium">Risen Christ Christian Centre</span>, we believe in the power of community
            and the importance of reaching beyond borders. Our Empires represent
            the different branches of our church, each serving as a beacon of
            faith, hope, and transformation in its location.
          </p>
        </motion.div>

        <motion.h3
          className="text-xl md:text-2xl font-medium font-playfair text-white mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          Find a Branch Near You
        </motion.h3>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <Link to="/empire">
            <button className="px-8 py-3.5 border border-[var(--color-gold-500)] text-[var(--color-gold-500)] font-bold uppercase tracking-[0.15em] text-sm rounded-full hover:bg-[var(--color-gold-500)] hover:text-[#0a0a0a] transition-all duration-300 shadow-[0_0_15px_rgba(230,185,61,0.15)] hover:shadow-[0_0_25px_rgba(230,185,61,0.4)]">
              See All Branches
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default Empires;
