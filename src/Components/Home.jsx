import React, { useState, useEffect } from "react";
import Hero from "../Components/Hero.jsx";
import Hero2 from "../Components/Hero2.jsx";
import Empires from "../Components/Empires.jsx";
import Popular from "../Components/Popular.jsx";
import Events from "../Components/Events.jsx";
import Experience from "../Components/Experiences.jsx";
import Resources from "../Components/Resources.jsx";
import Salvation from "../Components/Salvation.jsx";
import Salvation2 from "../Components/Salvation2.jsx";
import Worship from "../Components/Worship.jsx";

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
    <div className="relative">
      {/* Live Stream Popup */}
      {showPopup && liveSettings?.isLive && liveSettings?.link && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
          <div className="bg-white rounded-lg shadow-2xl w-full max-w-4xl overflow-hidden relative">
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-2 right-2 p-2 bg-gray-200 rounded-full hover:bg-gray-300 z-10"
            >
              <X size={24} />
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
            <div className="p-4 bg-red-600 text-white flex justify-between items-center">
              <span className="font-bold text-lg animate-pulse">🔴 LIVE NOW</span>
              <button
                onClick={() => setShowPopup(false)}
                className="text-sm underline hover:text-gray-200"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <Hero />
      <Hero2 />
      <Empires />
      <Popular />
      <Events />
      <Experience />
      <Resources />
      <Salvation />
      <Salvation2 />
      <Worship />
    </div>
  );
}

export default Home;
