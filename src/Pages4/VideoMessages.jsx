import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { db } from "../firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

function VideoMessages() {
  const navigate = useNavigate();
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const q = query(collection(db, "resources"), where("type", "==", "video"));
        const querySnapshot = await getDocs(q);
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setVideos(data);
      } catch (error) {
        console.error("Error fetching videos:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchVideos();
  }, []);

  return (
    <motion.section
      className="w-full py-16 px-4 bg-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      {/* Header Section */}
      <motion.div
        className="w-full px-4 sm:px-6 lg:px-8 mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-5xl font-bold text-gray-800 mb-2">
          Video Messages
        </h2>
        <p className="text-gray-600 text-lg">
          Experience powerful messages that will uplift and transform your life.
        </p>
      </motion.div>

      {/* Grid Section */}
      {loading ? (
        <div className="text-center py-10">Loading Videos...</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {videos.length === 0 ? (
            <div className="col-span-full text-center">No video messages found.</div>
          ) : (
            videos.map((item, index) => (
              <motion.div
                key={item.id}
                className="w-full flex flex-col"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.2 }}
              >
                {/* Video/Image */}
                <div className="w-full h-[300px] mb-4 rounded-lg shadow overflow-hidden bg-black">
                  {item.link && item.link.includes("youtube.com") ? (
                    <iframe
                      width="100%"
                      height="100%"
                      src={item.link.replace("watch?v=", "embed/")}
                      title={item.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  ) : (
                    <video
                      src={item.link}
                      controls
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>

                {/* Text */}
                <div className="mb-2">
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                  <p className="text-gray-500 text-sm" dangerouslySetInnerHTML={{ __html: item.description }} />
                </div>

                {/* Button aligned to the right (if needed) */}
                {/* 
                    <div className="flex justify-end mt-auto">
                    <button className="border px-4 py-2 rounded hover:bg-gray-100 flex items-center gap-2 text-sm">
                        Download
                    </button>
                    </div> 
                    */}
              </motion.div>
            ))
          )}
        </div>
      )}

      {/* See More Button */}
      <motion.div
        className="flex justify-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <a
          onClick={() => navigate("/video-messages-2")}
          className="bg-[#ff0e40] rounded-md px-6 py-3 text-white text-lg font-semibold hover:bg-[#e00c3a] transition duration-300 cursor-pointer text-center capitalize"
        >
          See More
        </a>
      </motion.div>
    </motion.section>
  );
}

export default VideoMessages;
