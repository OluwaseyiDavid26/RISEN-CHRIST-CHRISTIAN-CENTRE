import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <section className="px-6 py-16 md:px-20 bg-white">
      <div className="flex flex-col md:flex-row gap-10 md:gap-20">
        {/* Left Title */}
        <motion.div
          className="md:w-1/4"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-800">
            ABOUT <span className="font-normal">US</span>
          </h2>
        </motion.div>

        {/* Right Content */}
        <div className="md:w-3/4 flex flex-col md:flex-row gap-12">
          {/* The Church */}
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-3">
              The Church
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              At The Risen Christ Christian Centre, we are a community of
              believers dedicated to spreading the love of Christ and empowering
              lives through the Word of God. Our mission is to raise a
              generation of Spirit-filled believers who reflect Christ’s love,
              impact their communities, and carry the message of salvation to
              the world.
            </p>
          </motion.div>

          {/* Our Vision */}
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-3">
              Our Vision
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              To transform lives through the power of the gospel, raising
              Kingdom-minded believers who walk in faith, purpose, and divine
              destiny.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
