import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

// Automatically imported images list
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

function PhotoGallery() {
  const [selectedImg, setSelectedImg] = useState(null);
  const [visibleCount, setVisibleCount] = useState(16);
  const navigate = useNavigate();

  const loadMore = () => {
    setVisibleCount(prev => Math.min(prev + 12, images.length));
  };

  return (
    <section className="px-6 py-32 bg-[#fcfbfa] min-h-screen relative">
      <div className="absolute top-1/2 left-0 w-full h-[400px] bg-[#D4AF37]/5 blur-[150px] rounded-full pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.p
            className="text-[#C5A017] text-sm uppercase tracking-[0.2em] font-semibold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Resources / Photos
          </motion.p>
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mb-6 text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Full Photo Gallery
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-gray-600 font-light leading-relaxed font-outfit"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Relive powerful moments, joyful worship, and the vibrant life of our church community.
          </motion.p>
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {images.slice(0, visibleCount).map((img, index) => (
            <motion.div
              key={img}
              className="break-inside-avoid relative group cursor-pointer rounded-2xl overflow-hidden glass-card shadow-sm border border-gray-100 bg-white"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: (index % 8) * 0.1 }}
              viewport={{ once: true }}
              onClick={() => setSelectedImg(img)}
            >
              <div className="w-full relative overflow-hidden">
                <img
                  src={img}
                  alt={`Gallery Image ${index + 1}`}
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
                  loading="lazy"
                />
              </div>
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

        {/* Load More Button */}
        {visibleCount < images.length && (
           <motion.div 
             className="flex justify-center mt-12"
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
           >
              <button 
                onClick={loadMore}
                className="px-8 py-3 bg-white border border-gray-200 text-gray-700 font-semibold uppercase tracking-widest text-xs rounded-full hover:bg-gray-50 hover:text-gray-900 transition-all shadow-sm"
              >
                Load More Photos
              </button>
           </motion.div>
        )}

        {/* Back Button */}
        <div className="flex justify-center mt-8">
          <button
            onClick={() => navigate(-1)}
            className="text-gray-500 hover:text-[#D4AF37] text-sm uppercase tracking-widest font-semibold transition-colors"
          >
            ← Back
          </button>
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
            className="fixed inset-0 z-[100] flex items-center justify-center bg-gray-900/95 backdrop-blur-lg p-4 sm:p-10"
            onClick={() => setSelectedImg(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors p-2 bg-white/5 rounded-full hover:bg-white/10 z-[110]"
              onClick={() => setSelectedImg(null)}
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

export default PhotoGallery;
