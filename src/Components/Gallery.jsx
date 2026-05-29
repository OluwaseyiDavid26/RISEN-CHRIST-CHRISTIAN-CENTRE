import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Automatically imported images list (simulated array of all images in the folder)
const images = [
  "/church_images/WhatsApp Image 2026-05-13 at 11.43.20 PM (1).jpeg",
  "/church_images/WhatsApp Image 2026-05-13 at 11.43.20 PM.jpeg",
  "/church_images/WhatsApp Image 2026-05-13 at 11.43.21 PM (1).jpeg",
  "/church_images/WhatsApp Image 2026-05-13 at 11.43.21 PM (2).jpeg",
  "/church_images/WhatsApp Image 2026-05-13 at 11.43.21 PM.jpeg",
  "/church_images/WhatsApp Image 2026-05-13 at 11.43.22 PM.jpeg",
  "/church_images/WhatsApp Image 2026-05-13 at 11.43.24 PM (1).jpeg",
  "/church_images/WhatsApp Image 2026-05-13 at 11.43.24 PM.jpeg",
  "/church_images/WhatsApp Image 2026-05-13 at 11.43.25 PM (1).jpeg",
  "/church_images/WhatsApp Image 2026-05-13 at 11.43.25 PM.jpeg",
  "/church_images/WhatsApp Image 2026-05-13 at 11.43.26 PM.jpeg",
  "/church_images/WhatsApp Image 2026-05-13 at 11.43.27 PM.jpeg",
  "/church_images/WhatsApp Image 2026-05-13 at 11.43.28 PM.jpeg",
  "/church_images/WhatsApp Image 2026-05-13 at 11.43.29 PM.jpeg",
  "/church_images/WhatsApp Image 2026-05-13 at 11.43.30 PM.jpeg",
  "/church_images/WhatsApp Image 2026-05-13 at 11.43.31 PM.jpeg",
  "/church_images/WhatsApp Image 2026-05-13 at 11.43.32 PM.jpeg",
  "/church_images/WhatsApp Image 2026-05-13 at 11.43.33 PM (1).jpeg",
  "/church_images/WhatsApp Image 2026-05-13 at 11.43.33 PM.jpeg",
  "/church_images/WhatsApp Image 2026-05-13 at 11.43.34 PM (1).jpeg",
  "/church_images/WhatsApp Image 2026-05-13 at 11.43.34 PM (2).jpeg",
  "/church_images/WhatsApp Image 2026-05-13 at 11.43.34 PM.jpeg",
  "/church_images/WhatsApp Image 2026-05-13 at 11.43.36 PM (1).jpeg",
  "/church_images/WhatsApp Image 2026-05-13 at 11.43.36 PM.jpeg",
  "/church_images/WhatsApp Image 2026-05-13 at 11.43.37 PM.jpeg",
  "/church_images/WhatsApp Image 2026-05-13 at 11.43.38 PM.jpeg",
  "/church_images/WhatsApp Image 2026-05-13 at 11.43.39 PM.jpeg",
  "/church_images/WhatsApp Image 2026-05-13 at 11.43.40 PM (1).jpeg",
  "/church_images/WhatsApp Image 2026-05-13 at 11.43.40 PM.jpeg",
  "/church_images/WhatsApp Image 2026-05-13 at 11.43.41 PM.jpeg",
  "/church_images/WhatsApp Image 2026-05-13 at 11.43.42 PM.jpeg",
  "/church_images/WhatsApp Image 2026-05-13 at 11.43.43 PM (1).jpeg",
  "/church_images/WhatsApp Image 2026-05-13 at 11.43.43 PM.jpeg"
];

function Gallery() {
  const [selectedImg, setSelectedImg] = useState(null);

  // Show only 8 images for the preview on the homepage
  const previewImages = images.slice(0, 8);

  return (
    <section className="px-6 py-24 bg-white relative border-y border-gray-100">
      {/* Background decorations */}
      <div className="absolute top-1/2 left-0 w-full h-[300px] bg-gold-400/5 blur-[120px] rounded-full pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.p
            className="text-gold-500 text-sm uppercase tracking-widest font-semibold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Memories
          </motion.p>
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mb-6 text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Church Life Gallery
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-gray-600 font-light leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            A glimpse into the life, worship, and joy of our vibrant congregation.
          </motion.p>
        </div>

        {previewImages.length === 0 ? (
          <div className="text-center py-16">
            <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
            </div>
            <p className="text-gray-500 mb-4">No photos available yet.</p>
            <a href="/photo-gallery" className="btn-ghost text-xs">View Full Gallery</a>
          </div>
        ) : (
          <>
            {/* Masonry Grid Preview */}
            <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
              {previewImages.map((img, index) => (
                <motion.div
                  key={img}
                  className="break-inside-avoid relative group cursor-pointer rounded-2xl overflow-hidden glass-card bg-gray-50"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: (index % 8) * 0.1 }}
                  viewport={{ once: true }}
                  onClick={() => setSelectedImg(img)}
                >
                  <div className="w-full relative overflow-hidden">
                    <img
                      src={img}
                      alt={`Church Life ${index + 1}`}
                      className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
                      loading="lazy"
                    />
                  </div>
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                    <div className="flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <span className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm border border-white/40 flex items-center justify-center">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg>
                        </span>
                        <span className="text-white font-playfair font-medium text-sm">Expand</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Link to Full Gallery */}
            <motion.div
              className="flex justify-center mt-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <a
                href="/photo-gallery"
                className="btn-ghost text-xs"
              >
                View Full Gallery
              </a>
            </motion.div>
          </>
        )}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-gray-900/95 backdrop-blur-lg p-4 sm:p-10"
            onClick={() => setSelectedImg(null)}
          >
            <button
              className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors p-2 bg-white/5 rounded-full hover:bg-white/10 focus-visible:rounded-full focus-ring"
              onClick={() => setSelectedImg(null)}
              aria-label="Close lightbox"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              src={selectedImg}
              alt="Enlarged Church Life"
              className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Gallery;
