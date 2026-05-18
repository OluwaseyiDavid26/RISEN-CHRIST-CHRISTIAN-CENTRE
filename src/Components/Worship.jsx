import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Worship() {
  return (
    <>
      {/* Light Golden Section */}
      <section className="w-full py-24 px-6 bg-gradient-to-br from-[#fcfbfa] to-[#f5f1e6] border-y border-gray-100 text-center relative overflow-hidden">
        {/* Subtle texture overlay */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 pointer-events-none mix-blend-overlay"></div>
        
        <div className="max-w-3xl mx-auto relative z-10">
          <motion.p
             className="text-[#B8860B] text-sm uppercase tracking-[0.2em] font-semibold mb-4"
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6 }}
             viewport={{ once: true }}
          >
            Partnership
          </motion.p>
          
          {/* Heading */}
          <motion.h2
            className="text-4xl md:text-5xl font-playfair font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Worship Through Your Generosity
          </motion.h2>

          {/* Paragraph */}
          <motion.p
            className="text-lg md:text-xl text-gray-700 font-light leading-relaxed mb-10 font-outfit"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Your giving spreads the gospel, supports church initiatives, and
            impacts lives. Every seed sown advances God’s kingdom and brings
            hope.
          </motion.p>

          <Link to="/giving">
            <motion.button
              className="px-10 py-4 bg-gradient-to-r from-[#D4AF37] to-[#C5A017] text-white font-bold uppercase tracking-widest text-sm rounded-full hover:shadow-[0_8px_25px_rgba(212,175,55,0.4)] hover:-translate-y-1 transition-all duration-300"
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
      <div className="w-full h-16 bg-white"></div>
    </>
  );
}

export default Worship;
