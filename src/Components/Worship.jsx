import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Worship() {
  return (
    <>
      {/* Light Golden Section */}
      <section className="w-full py-28 px-6 bg-gradient-to-br from-cream-50 to-cream-100 border-y border-gray-100 text-center relative overflow-hidden">
        <div className="absolute bottom-12 left-12 w-16 h-16 border border-gold-400/10 rounded-full pointer-events-none hidden lg:block" />
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
             className="text-gold-600 text-sm uppercase tracking-widest font-semibold mb-4"
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6 }}
             viewport={{ once: true }}
          >
            Partnership
          </motion.p>

          {/* Heading */}
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Worship Through Your Generosity
          </motion.h2>

          {/* Paragraph */}
          <motion.p
            className="text-lg md:text-xl text-gray-700 font-light leading-relaxed mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Your giving spreads the gospel, supports church initiatives, and
            impacts lives. Every seed sown advances God&rsquo;s kingdom and brings
            hope.
          </motion.p>

          <Link to="/giving">
            <motion.button
              className="btn-primary"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
            >
              Give Now
            </motion.button>
          </Link>
        </div>
      </section>

      {/* White Spacer to blend with footer smoothly */}
      <div className="w-full h-16 bg-white" />
    </>
  );
}

export default Worship;
