import React from "react";
import { motion } from "framer-motion";
import image10 from "../assets/photo1.avif"; // Replace with your actual image
import image12 from "../assets/photo2.avif"; // Replace with your actual image
import image13 from "../assets/photo3.avif"; // Replace with your actual image

function PhotoGallery() {
  return (
    <motion.section
      className="w-full py-16 px-4 bg-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      {/* Header */}
      <div className="w-full mb-12">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-bold text-gray-800 mb-2">
            Photo Gallery
          </h1>
          <p className="text-gray-600 text-lg">
            Relive powerful moments there.
          </p>
        </motion.div>
      </div>

      {/* Images Grid */}
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {[image10, image12, image13].map((img, index) => (
          <motion.div
            key={index}
            className="w-full overflow-hidden rounded-lg shadow"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
          >
            <img
              src={img}
              alt={`Gallery ${index + 1}`}
              className="w-full h-[500px] object-cover transform hover:scale-105 transition duration-300"
            />
          </motion.div>
        ))}
      </div>

      {/* See More Button */}
      <motion.div
        className="flex justify-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
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

export default PhotoGallery;
