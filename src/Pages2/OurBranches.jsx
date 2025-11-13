import React from "react";
import { motion } from "framer-motion";
import image10 from "../assets/image-10.png";
import image11 from "../assets/image-11.png";
import image12 from "../assets/image-12.png";
import image13 from "../assets/accra-img.avif";
import image14 from "../assets/london-img.avif";
import image15 from "../assets/new-york-img.jpg";

const branches = [
  {
    location: "Lagos",
    address: "15 Grace Avenue, Victoria Island, Lagos, Nigeria",
    image: image11,
  },
  {
    location: "Abuja",
    address: "22 Dominion Road, Garki, Abuja, Nigeria",
    image: image10,
  },
  {
    location: "Port Harcourt",
    address: "10 Salvation Street, Rumuola,  Port Harcourt, Nigeria",
    image: image12,
  },
  {
    location: "Accra",
    address: "5 Kingdom Close, East Legon, Accra, Ghana",
    image: image13,
  },
  {
    location: "London",
    address: "78 Revival Street, Stratford, London, UK",
    image: image14,
  },
  {
    location: "New York",
    address: "320 Faith Boulevard, Brooklyn,  New York, USA",
    image: image15,
  },
];

function OurBranches() {
  return (
    <section className="w-full py-16 px-4 bg-white">
      {/* Heading with animation */}
      <motion.h2
        className="text-5xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Our Branches
      </motion.h2>

      {/* Grid with animated cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full">
        {branches.map((branch, index) => (
          <motion.div
            key={index}
            className=""
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <img
              src={branch.image}
              alt={branch.location}
              className="w-full h-[450px] object-cover rounded-xl shadow-md"
            />
            <h3 className="text-lg font-semibold mt-4 text-left">
              {branch.location}
            </h3>
            <p className="text-sm text-gray-600 text-left">{branch.address}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default OurBranches;
