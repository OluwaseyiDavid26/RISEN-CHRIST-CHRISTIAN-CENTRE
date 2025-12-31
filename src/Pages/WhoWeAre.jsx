import React from "react";
import { motion } from "framer-motion";
import whoimg from "../assets/light.JPG";

function WhoWeAre() {
  return (
    <section className="min-h-screen bg-white">
      <div className="grid w-full max-w-[1440px] mx-auto grid-cols-1 lg:grid-cols-[35%_65%]">
        {/* Left Side: Text aligned to top */}
        <motion.div
          className="px-6 py-12 md:px-8 lg:py-12"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="space-y-6">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 font-playfair">
              Bringing Light to <br /> the Nations
            </h1>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              In The Christ Empire, we celebrate love, which is God himself. We
              live together as a family; we ensure everybody is somebody, and we
              preach the totality of the word of God as a tool to fix the world
              and position every believer to enjoy the full package of
              redemption.
            </p>
          </div>
        </motion.div>

        {/* Right Side: Image */}
        <motion.div
          className="h-[60vh] sm:h-[70vh] lg:h-[100vh] w-full"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <img
            src={whoimg}
            alt="Who We Are"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default WhoWeAre;
