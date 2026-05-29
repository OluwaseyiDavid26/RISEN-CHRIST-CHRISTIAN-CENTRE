import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const pastorImg = "/church_images/WhatsApp Image 2026-05-13 at 11.43.30 PM.jpeg";

function Hero() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const { scrollY } = useScroll();

  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  useEffect(() => {
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mql.matches);
    const handler = (e) => setPrefersReducedMotion(e.matches);
    mql.addEventListener?.("change", handler);
    return () => mql.removeEventListener?.("change", handler);
  }, []);

  return (
    <section className="relative w-full min-h-[100dvh] overflow-hidden bg-cream-50 flex items-center">
      {/* Top gradient for navbar readability */}
      <div className="absolute top-0 left-0 w-full h-48 bg-gradient-to-b from-black/60 via-black/25 to-transparent z-20 pointer-events-none" />

      {/* Decorative floating shapes */}
      {!prefersReducedMotion && (
        <>
          <motion.div
            className="absolute top-[15%] left-[8%] w-24 h-24 md:w-40 md:h-40 rounded-full bg-gold-400/8 blur-2xl"
            animate={{ y: [0, -20, 0], scale: [1, 1.05, 1] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-[20%] right-[5%] w-32 h-32 md:w-48 md:h-48 rounded-full bg-gold-500/6 blur-3xl"
            animate={{ y: [0, 15, 0], scale: [1, 0.95, 1] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
        </>
      )}

      {/* Background image — left side, sharp edge with gold accent line */}
      <motion.div
        className="absolute inset-0 md:left-0 md:w-[48%] h-full z-0 overflow-hidden"
        style={{ y: prefersReducedMotion ? 0 : useTransform(scrollY, [0, 1000], ["0%", "15%"]) }}
      >
        {/* Mobile dark overlay for text readability */}
        <div className="absolute inset-0 bg-dark-900/50 md:bg-transparent z-10 md:z-0" />
        <div
          className="absolute inset-0 bg-no-repeat bg-cover bg-center"
          style={{
            backgroundImage: `url('${pastorImg}')`,
          }}
        />
      </motion.div>

      {/* Content — offset right */}
      <div className="max-w-7xl mx-auto px-6 lg:px-16 relative z-10 w-full h-full flex items-center">
        <div className="grid grid-cols-1 md:grid-cols-12 w-full gap-8">
          <div className="hidden md:block md:col-span-6 lg:col-span-6" />

          <motion.div
            className="col-span-1 md:col-span-6 lg:col-span-6 flex flex-col justify-center text-center md:text-left pt-48 md:pt-32 pb-16 relative"
            style={{ opacity: prefersReducedMotion ? 1 : opacity }}
          >
            {/* Vertical accent line — inside text column, before text */}
            <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 h-40 w-[3px] bg-gold-400/80 shadow-[0_0_20px_rgba(107,63,160,0.4)] rounded-full" />

            {/* Decorative gold line */}
            <motion.div
              initial={prefersReducedMotion ? {} : { scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="w-12 h-[2px] bg-gold-400 mb-6 origin-left mx-auto md:mx-0"
            />

            <motion.p
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-gold-400 font-semibold tracking-widest uppercase text-xs md:text-sm mb-4 drop-shadow-sm"
            >
              Welcome to the presence of God
            </motion.p>

            <motion.h1
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-playfair font-bold text-white md:text-gray-900 leading-[1.05] mb-6"
            >
              Risen Christ <br />
              <span className="text-gold-400 md:text-gold-500">
                Christian Centre
              </span>
            </motion.h1>

            <motion.p
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
              className="text-white/90 md:text-gray-600 text-base sm:text-lg md:text-xl font-light leading-relaxed mb-10 max-w-xl mx-auto md:mx-0"
            >
              Experience the power of His presence, a community of boundless love, and a place for spiritual renewal and divine encounter.
            </motion.p>

            <motion.div
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
              className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start"
            >
              <button className="btn-primary w-full sm:w-auto">
                Watch Messages
              </button>

              <button className="btn-ghost w-full sm:w-auto text-white md:text-gray-700 border-white/30 md:border-gray-300 hover:border-gold-400 hover:text-gold-400 md:hover:text-gold-500">
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
