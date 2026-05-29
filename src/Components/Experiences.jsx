import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import image10 from "../assets/image-10.png";
import { db } from "../firebase";
import { doc, onSnapshot } from "firebase/firestore";

function Experience() {
  const [liveSettings, setLiveSettings] = useState(null);

  useEffect(() => {
    // Listen to live stream settings
    const unsubscribe = onSnapshot(doc(db, "settings", "livestream"), (docSnapshot) => {
      if (docSnapshot.exists()) {
        setLiveSettings(docSnapshot.data());
      }
    });

    return () => unsubscribe();
  }, []);

  const isLive = liveSettings?.isLive && liveSettings?.link;

  // Helper to extract YouTube Embed URL from any YouTube link
  const getEmbedUrl = (url) => {
    if (!url) return "";
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11)
      ? "https://www.youtube.com/embed/" + match[2]
      : url; 
  };

  const prefersReducedMotion = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  return (
    <section className="px-6 py-24 bg-cream-50">
      <div className="max-w-6xl mx-auto w-full">
        {/* Title + Paragraph */}
        <motion.div
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-gold-500 text-sm uppercase tracking-widest font-semibold mb-4">
            Connect Online
          </p>
          <h2 className="text-3xl md:text-5xl font-playfair font-bold text-gray-900 mb-6">
            Experience God&rsquo;s Presence from Anywhere
          </h2>
          <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto leading-relaxed">
            Can&rsquo;t make it in person? Join us online and be part of our worship,
            teachings, and special events from wherever you are. Stay connected
            and grow in faith with our live-streamed services.
          </p>
        </motion.div>

        {/* Media Content: Live Stream Iframe OR Static Image */}
        <motion.div
          initial={prefersReducedMotion ? {} : { opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full rounded-2xl shadow-xl border border-gray-200 mb-8 overflow-hidden bg-gray-900 aspect-video relative"
        >
          {liveSettings?.link ? (
            <iframe
              className="w-full h-full relative z-10"
              src={getEmbedUrl(liveSettings.link)}
              title="Live Stream"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen>
            </iframe>
          ) : (
            <div className="relative w-full h-full group">
              <img
                src={image10}
                alt="Livestream placeholder"
                className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-700"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                 <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm border border-white/40 flex items-center justify-center mb-4">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="white" className="ml-1"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                 </div>
                 <span className="text-white font-playfair text-xl tracking-wide font-medium">Service Offline</span>
              </div>
            </div>
          )}
        </motion.div>

        {/* Text / Status Info */}
        <motion.div
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
        >
          {isLive && (
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="w-3 h-3 bg-red-600 rounded-full animate-pulse shadow-[0_0_10px_red]"></span>
              <p className="text-lg font-bold text-red-600 tracking-widest uppercase">LIVE NOW</p>
            </div>
          )}
        </motion.div>

        {/* Button */}
        {!isLive && (
          <motion.div
            className="flex justify-center mt-8"
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <button className="btn-primary">
              Watch Previous Services
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}

export default Experience;
