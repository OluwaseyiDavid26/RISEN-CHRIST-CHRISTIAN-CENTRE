import React from "react";
import visionimg2 from "../assets/vision-img2.png";
import { motion } from "framer-motion";

function Vision() {
  return (
    <section className="bg-[#2e2e2e] text-white py-16 px-6 md:px-20 overflow-hidden">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center md:items-stretch gap-10">
        {/* Left: Image */}
        <motion.div
          className="w-full md:w-1/2 h-[500px]"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <img
            src={visionimg2}
            alt="Founder"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </motion.div>

        {/* Right: Text */}
        <motion.div
          className="w-full md:w-1/2 flex items-center"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="text-left">
            <h2 className="text-4xl font-semibold mb-6 leading-snug">
              The Visioneer
            </h2>
            <p className="text-base text-gray-300 leading-relaxed">
              [Pastor Raji Bashir Babatunde], the Visioneer of The Risen Christ
              Christian Centre, is a passionate servant of God with a deep
              calling to lead people into a life-changing encounter with Jesus.
              With a heart for revival and spiritual transformation, they have
              dedicated their life to building a church rooted in faith, prayer,
              and the power of the Holy Spirit.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Vision;
