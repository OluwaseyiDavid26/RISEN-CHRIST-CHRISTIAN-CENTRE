import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Sample images from the church_images folder
const images = [
  "/church_images/WhatsApp Image 2026-05-13 at 11.43.20 PM (1).jpeg",
  "/church_images/WhatsApp Image 2026-05-13 at 11.43.20 PM.jpeg",
  "/church_images/WhatsApp Image 2026-05-13 at 11.43.21 PM (1).jpeg",
  "/church_images/WhatsApp Image 2026-05-13 at 11.43.21 PM (2).jpeg",
  "/church_images/WhatsApp Image 2026-05-13 at 11.43.21 PM.jpeg",
  "/church_images/WhatsApp Image 2026-05-13 at 11.43.22 PM.jpeg",
  "/church_images/WhatsApp Image 2026-05-13 at 11.43.24 PM (1).jpeg",
  "/church_images/WhatsApp Image 2026-05-13 at 11.43.24 PM.jpeg",
];

function Gallery() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <section className="px-6 py-24 bg-[#0a0a0a] relative">
      {/* Background decorations */}
      <div className="absolute top-1/2 left-0 w-full h-[300px] bg-[var(--color-gold-500)]/5 blur-[120px] rounded-full pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.p
            className="text-[var(--color-gold-400)] text-sm uppercase tracking-[0.2em] font-semibold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Memories
          </motion.p>
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mb-6 text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Church Life
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-gray-300 font-light leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            A glimpse into the life and joy of our vibrant congregation.
          </motion.p>
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6 space-y-6">
          {images.map((img, index) => (
            <motion.div
              key={index}
              className="break-inside-avoid relative group cursor-pointer rounded-2xl overflow-hidden glass-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => setSelectedImg(img)}
            >
              <div className="w-full relative">
                {/* Randomize image height slightly for masonry effect if all images are same size */}
                <img
                  src={img}
                  alt={`Church Life ${index + 1}`}
                  className="w-full h-auto object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                  loading="lazy"
                />
              </div>
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                 <span className="text-white font-playfair font-medium text-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">View Memory</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0a0a0a]/95 backdrop-blur-md p-4 sm:p-10"
            onClick={() => setSelectedImg(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors"
              onClick={() => setSelectedImg(null)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              src={selectedImg}
              alt="Enlarged Church Life"
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Gallery;
