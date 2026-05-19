import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

function Hero() {
  const [isLowEnd, setIsLowEnd] = useState(false);
  const { scrollY } = useScroll();
  
  // Parallax effects optimized for performance
  const backgroundY = useTransform(scrollY, [0, 1000], ["0%", "15%"]);
  const textY = useTransform(scrollY, [0, 800], ["0%", "30%"]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  useEffect(() => {
    const isMobile = window.innerWidth <= 768;
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
    const isLowPower = navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4;
    setIsLowEnd(isMobile || isLowPower || isIOS);
  }, []);

  return (
    <section className="relative w-full min-h-[100dvh] overflow-hidden bg-[#fcfbfa] flex items-center">
      {/* Subtle top gradient overlay to ensure white navbar text remains readable */}
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-black/40 via-black/10 to-transparent z-20 pointer-events-none" />

      {/* Background/Left Column image - Hidden on mobile or set as background, styled on desktop */}
      <motion.div
        className="absolute inset-0 md:left-0 md:w-1/2 h-full z-0 overflow-hidden"
        style={{ y: isLowEnd ? 0 : backgroundY }}
      >
        {/* On Mobile: Subtle background overlay to avoid text overlapping */}
        <div
          className="absolute inset-0 bg-no-repeat bg-contain bg-center md:bg-left opacity-15 md:opacity-100 transition-opacity duration-1000"
          style={{
            backgroundImage: `url('/church_images/jesus_sketch.jpg')`,
            backgroundPosition: 'left center',
          }}
        />
        {/* Soft edge fading to blend the image perfectly with the light background */}
        <div className="hidden md:block absolute inset-y-0 right-0 w-1/3 bg-gradient-to-r from-transparent to-[#fcfbfa]" />
      </motion.div>

      {/* Main Content Grid */}
      <div className="container mx-auto px-6 lg:px-16 relative z-10 w-full h-full flex items-center">
        <div className="grid grid-cols-1 md:grid-cols-12 w-full gap-8">
          
          {/* Empty space on Left for desktop to allow the Jesus image to shine */}
          <div className="hidden md:block md:col-span-5 lg:col-span-6" />

          {/* Right Column: Text & Buttons (Absolutely clean and readable) */}
          <motion.div 
            className="col-span-1 md:col-span-7 lg:col-span-6 flex flex-col justify-center text-center md:text-left pt-48 md:pt-32 pb-16"
            style={{ 
              opacity: opacity
            }}
          >
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-[#C5A017] font-semibold tracking-[0.25em] uppercase text-xs md:text-sm mb-4 drop-shadow-sm font-inter"
            >
              Welcome to the presence of God
            </motion.p>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-playfair font-bold text-gray-900 leading-tight mb-6"
            >
              RISEN CHRIST <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#C5A017] to-[#B8860B]">
                CHRISTIAN CENTRE
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
              className="text-gray-600 text-base sm:text-lg md:text-xl font-light leading-relaxed mb-10 max-w-xl mx-auto md:mx-0 font-outfit"
            >
              Experience the power of His presence, a community of boundless love, and a place for spiritual renewal and divine encounter.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
              className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start"
            >
              <button className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-[#D4AF37] to-[#C5A017] text-white font-bold uppercase tracking-widest text-xs rounded-full hover:shadow-[0_8px_20px_rgba(212,175,55,0.3)] hover:-translate-y-0.5 transition-all duration-300">
                Watch Messages
              </button>
              
              <button className="w-full sm:w-auto px-8 py-3.5 bg-white border border-[#D4AF37]/40 text-[#B8860B] font-bold uppercase tracking-widest text-xs rounded-full hover:bg-[#fcfbfa] hover:shadow-[0_8px_20px_rgba(212,175,55,0.1)] hover:-translate-y-0.5 transition-all duration-300">
                Join Us Sunday
              </button>
            </motion.div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}

export default Hero;
