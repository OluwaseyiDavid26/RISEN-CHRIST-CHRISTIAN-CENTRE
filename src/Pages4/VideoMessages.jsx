import React from "react";
import { motion } from "framer-motion";
import Video from "../assets/videoMessage.mp4";

function VideoMessages() {
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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {[1, 2, 3].map((item, index) => (
          <motion.div
            key={index}
            className="w-full"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
          >
            {/* Image */}
            <video
              src={Video}
              controls
              className="w-full h-[300px] object-cover mb-4 rounded-lg shadow"
            />

            {/* Text */}
            <div className="mb-2">
              <h3 className="font-semibold text-lg">Glorious King</h3>
              <p className="text-gray-500 text-sm">The Risen Christ Choir</p>
            </div>

            {/* Button aligned to the right */}
            <div className="flex justify-end">
              <button className="border px-4 py-2 rounded hover:bg-gray-100 flex items-center gap-2 text-sm">
                Download
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3"
                  />
                </svg>
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* See More Button */}
      <motion.div
        className="flex justify-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <a
          href="#"
          className="bg-[#ff0e40] rounded-md px-6 py-3 text-white text-lg font-semibold hover:bg-[#e00c3a] transition duration-300 cursor-pointer text-center capitalize"
        >
          See More
        </a>
      </motion.div>
    </motion.section>
  );
}

export default VideoMessages;
