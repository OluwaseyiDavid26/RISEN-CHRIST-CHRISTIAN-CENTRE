import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

function Hero() {
  const [offsetY, setOffsetY] = useState(0);

  // Parallax effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden bg-[#0a0a0a] flex items-center justify-center">
      {/* Background with Parallax */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y: offsetY * 0.5 }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/church_images/WhatsApp%20Image%202026-05-13%20at%2011.43.31%20PM.jpeg')`,
          }}
        />
        {/* Layered Gradient Overlays for Cinematic Feel */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/60 via-[#0a0a0a]/40 to-[#0a0a0a]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#0a0a0a]/50 to-[#0a0a0a]" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 md:px-12 w-full max-w-7xl mx-auto mt-20">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[var(--color-gold-400)] font-medium tracking-[0.3em] uppercase text-sm md:text-base mb-6"
        >
          Welcome to
        </motion.p>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-playfair font-bold text-white leading-tight mb-8 drop-shadow-2xl"
        >
          RISEN CHRIST <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-[var(--color-gold-500)]">
            CHRISTIAN CENTRE
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-gray-300 text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto font-light leading-relaxed mb-12"
        >
          Experience the power of God's presence, a community of love, and a place for spiritual renewal and divine encounter.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <button className="w-full sm:w-auto px-10 py-4 bg-[var(--color-gold-500)] text-[#0a0a0a] font-bold uppercase tracking-widest text-sm rounded-full hover:bg-[var(--color-gold-400)] transition-all duration-300 transform hover:scale-105 shadow-[0_0_20px_rgba(230,185,61,0.3)]">
            Watch Messages
          </button>
          
          <button className="w-full sm:w-auto px-10 py-4 bg-transparent border border-white text-white font-bold uppercase tracking-widest text-sm rounded-full hover:bg-white hover:text-[#0a0a0a] transition-all duration-300">
            Join Us This Sunday
          </button>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-gray-400 text-xs uppercase tracking-widest mb-2 font-medium">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-[1px] h-[40px] bg-gradient-to-b from-[var(--color-gold-500)] to-transparent"
        />
      </motion.div>
    </section>
  );
}

export default Hero;
