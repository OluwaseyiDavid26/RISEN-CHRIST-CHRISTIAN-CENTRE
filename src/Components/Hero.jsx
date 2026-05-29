import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

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
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-black/40 via-black/10 to-transparent z-20 pointer-events-none" />

      {/* Background image — left half, asymmetric */}
      <motion.div
        className="absolute inset-0 md:left-0 md:w-1/2 h-full z-0 overflow-hidden"
        style={{ y: prefersReducedMotion ? 0 : useTransform(scrollY, [0, 1000], ["0%", "15%"]) }}
      >
        <div
          className="absolute inset-0 bg-no-repeat bg-contain bg-center md:bg-left opacity-15 md:opacity-100 transition-opacity duration-1000"
          style={{
            backgroundImage: `url('/church_images/jesus_sketch.jpg')`,
            backgroundPosition: 'left center',
          }}
        />
        <div className="hidden md:block absolute inset-y-0 right-0 w-1/3 bg-gradient-to-r from-transparent to-cream-50" />
      </motion.div>

      {/* Content — offset right */}
      <div className="max-w-7xl mx-auto px-6 lg:px-16 relative z-10 w-full h-full flex items-center">
        <div className="grid grid-cols-1 md:grid-cols-12 w-full gap-8">
          <div className="hidden md:block md:col-span-5 lg:col-span-6" />

          <motion.div
            className="col-span-1 md:col-span-7 lg:col-span-6 flex flex-col justify-center text-center md:text-left pt-48 md:pt-32 pb-16"
            style={{ opacity: prefersReducedMotion ? 1 : opacity }}
          >
            <motion.p
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-gold-500 font-semibold tracking-widest uppercase text-xs md:text-sm mb-4 drop-shadow-sm"
            >
              Welcome to the presence of God
            </motion.p>

            <motion.h1
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-playfair font-bold text-gray-900 leading-[1.05] mb-6"
            >
              Risen Christ <br />
              <span className="text-gold-500">
                Christian Centre
              </span>
            </motion.h1>

            <motion.p
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
              className="text-gray-600 text-base sm:text-lg md:text-xl font-light leading-relaxed mb-10 max-w-xl mx-auto md:mx-0"
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

              <button className="btn-ghost w-full sm:w-auto">
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
