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
      : url; // Fallback to original if regex fails (though likely won't work if it's a standard watch link)
  };

  return (
    <section className="px-6 py-12 bg-gray-50">
      <div className="w-full">
        {/* Title + Paragraph */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Experience God’s Presence from Anywhere
          </h2>
          <p className="text-lg text-gray-600 mb-6 max-w-xl mx-auto">
            Can’t make it in person? Join us online and be part of our worship,
            teachings, and special events from wherever you are. Stay connected
            and grow in faith with our live-streamed services.
          </p>
        </motion.div>

        {/* Media Content: Live Stream Iframe OR Static Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="w-full max-w-6xl rounded-xl shadow-2xl mb-8 overflow-hidden bg-black aspect-video mx-auto"
        >
          {liveSettings?.link ? (
            <iframe
              className="w-full h-full"
              src={getEmbedUrl(liveSettings.link)}
              title="Live Stream"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen>
            </iframe>
          ) : (
            <img
              src={image10}
              alt="Livestream"
              className="w-full h-full object-cover"
            />
          )}
        </motion.div>

        {/* Text / Status Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.8 }}
        >
          {isLive && (
            <div className="flex items-center gap-2 mb-4">
              <span className="w-3 h-3 bg-red-600 rounded-full animate-pulse"></span>
              <p className="text-xl font-bold text-red-600">LIVE NOW</p>
            </div>
          )}
        </motion.div>

        {/* Button (Only show if NOT live, or maybe change text) */}
        {!isLive && (
          <motion.div
            className="flex justify-center mt-10"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.2, duration: 0.8 }}
          >
            <button className="bg-pink-600 text-white px-6 py-3 rounded hover:bg-pink-700 transition">
              Join Livestream
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}

export default Experience;
