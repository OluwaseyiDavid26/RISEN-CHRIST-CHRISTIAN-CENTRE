import React, { useState, useEffect } from "react";
import Hero from "../Components/Hero.jsx";
import Empires from "../Components/Empires.jsx";
import Popular from "../Components/Popular.jsx";
import Events from "../Components/Events.jsx";
import Experience from "../Components/Experiences.jsx";
import Resources from "../Components/Resources.jsx";
import Salvation from "../Components/Salvation.jsx";
import Worship from "../Components/Worship.jsx";
import Gallery from "../Components/Gallery.jsx";

import { db } from "../firebase";
import { doc, onSnapshot } from "firebase/firestore";
import { X } from "lucide-react";

function Home() {
  const [liveSettings, setLiveSettings] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const unsubscribe = onSnapshot(doc(db, "settings", "livestream"), (doc) => {
      if (doc.exists()) {
        const data = doc.data();
        setLiveSettings(data);
        if (data.isLive) {
          setShowPopup(true);
        }
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="relative bg-[#0a0a0a]">
      {/* Live Stream Popup */}
      {showPopup && liveSettings?.isLive && liveSettings?.link && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0a0a0a]/90 backdrop-blur-md p-4">
          <div className="bg-[#121212] border border-white/10 rounded-2xl shadow-2xl w-full max-w-4xl overflow-hidden relative">
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-4 right-4 p-2 bg-black/50 rounded-full hover:bg-[var(--color-gold-500)] hover:text-black text-white transition-all z-10"
            >
              <X size={20} />
            </button>
            <div className="aspect-video w-full">
              <iframe
                width="100%"
                height="100%"
                src={liveSettings.link} // Ensure this is an embed URL
                title="Live Stream"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="p-4 bg-[var(--color-gold-500)] text-[#0a0a0a] flex justify-between items-center">
              <span className="font-bold text-lg tracking-widest uppercase flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-red-600 rounded-full animate-pulse" />
                LIVE NOW
              </span>
              <button
                onClick={() => setShowPopup(false)}
                className="text-sm font-semibold uppercase tracking-widest hover:text-white transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <Hero />
      <Gallery />
      <Empires />
      <Popular />
      <Events />
      <Experience />
      <Resources />
      <Salvation />
      <Worship />
    </div>
  );
}

export default Home;
