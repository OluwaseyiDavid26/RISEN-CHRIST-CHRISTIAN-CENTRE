import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

function Hero() {
  const [isLowEnd, setIsLowEnd] = useState(false);
  const { scrollY } = useScroll();
  
  // Parallax effects optimized for performance
  const backgroundY = useTransform(scrollY, [0, 1000], ["0%", "20%"]);
  const textY = useTransform(scrollY, [0, 800], ["0%", "40%"]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  useEffect(() => {
    // Basic check for low-end devices to reduce animation overhead if needed
    const isMobile = window.innerWidth <= 768;
    const isLowPower = navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4;
    setIsLowEnd(isMobile || isLowPower);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden bg-white flex items-center justify-center">
      {/* Background Image with Parallax */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ 
          y: isLowEnd ? 0 : backgroundY,
        }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000"
          style={{
            backgroundImage: `url('/church_images/jesus_hero.png')`,
          }}
        />
        {/* Light Heavenly Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/30 to-white/90" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-yellow-100/40 via-transparent to-transparent mix-blend-overlay" />
      </motion.div>

      {/* Hero Content */}
      <motion.div 
        className="relative z-10 text-center px-6 md:px-12 w-full max-w-6xl mx-auto mt-24"
        style={{ 
          y: isLowEnd ? 0 : textY,
          opacity: opacity
        }}
      >
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-[#B8860B] font-medium tracking-[0.3em] uppercase text-sm md:text-base mb-6 drop-shadow-sm"
        >
          Welcome to the presence of God
        </motion.p>
        
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-playfair font-bold text-gray-900 leading-tight mb-8 drop-shadow-md"
        >
          RISEN CHRIST <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#C5A017] to-[#B8860B]">
            CHRISTIAN CENTRE
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
          className="text-gray-700 text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto font-light leading-relaxed mb-12 drop-shadow-sm"
        >
          Experience the power of His presence, a community of boundless love, and a place for spiritual renewal and divine encounter.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <button className="w-full sm:w-auto px-10 py-4 bg-gradient-to-r from-[#D4AF37] to-[#C5A017] text-white font-semibold uppercase tracking-widest text-sm rounded-full hover:shadow-[0_8px_25px_rgba(212,175,55,0.4)] hover:-translate-y-1 transition-all duration-300 border border-[#D4AF37]/50">
            Watch Messages
          </button>
          
          <button className="w-full sm:w-auto px-10 py-4 bg-white/60 backdrop-blur-md border border-[#D4AF37]/30 text-[#B8860B] font-semibold uppercase tracking-widest text-sm rounded-full hover:bg-white hover:shadow-[0_8px_25px_rgba(212,175,55,0.15)] hover:-translate-y-1 transition-all duration-300">
            Join Us This Sunday
          </button>
        </motion.div>
      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-[#B8860B] text-xs uppercase tracking-[0.2em] mb-3 font-medium">Scroll to explore</span>
        <div className="w-[1px] h-[50px] overflow-hidden relative bg-gray-200">
          <motion.div
            animate={{ y: [-50, 50] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            className="w-full h-full bg-gradient-to-b from-transparent via-[#D4AF37] to-transparent absolute top-0"
          />
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;
