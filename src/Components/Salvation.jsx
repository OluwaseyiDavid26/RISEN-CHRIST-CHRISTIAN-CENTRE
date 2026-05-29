import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Salvation() {
  return (
    <section className="w-full py-28 px-6 bg-white text-center relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-[300px] bg-gold-400/5 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute top-12 right-12 w-20 h-20 border border-gold-400/10 rounded-full pointer-events-none hidden lg:block" />

      <div className="max-w-3xl mx-auto relative z-10">
        {/* Decorative gold line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="w-12 h-[2px] bg-gold-400 mb-6 origin-center mx-auto"
        />

        <motion.p
           className="text-gold-500 text-sm uppercase tracking-widest font-semibold mb-4"
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6 }}
           viewport={{ once: true }}
        >
          New Beginnings
        </motion.p>

        {/* Heading */}
        <motion.h2
          className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-gray-900 mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Salvation
        </motion.h2>

        {/* Paragraph */}
        <motion.p
          className="text-lg md:text-xl text-gray-600 font-light leading-relaxed mb-10 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          No matter who you are or what you&rsquo;ve been through, God&rsquo;s love is for
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
            <button className="btn-ghost">
              Pray the Sinner&rsquo;s Prayer
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default Salvation;
