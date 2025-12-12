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
              We are raising a generation of royalty whose lives are touched and
              fixed with the word of the Lord (The Emperor), who in return will
              join hands with the Emperor to fix the decadence in the world by
              extinguishing the gross darkness in it via the light of the word
              and representing Christ as Royal Ambassador. The Christ Empire was
              founded by Pastor Raji Bashir Babatunde on February 29, 2020, in
              Ilorin, Kwara State, Nigeria
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
              Our vision is to fix the decadence in the world by bringing an end
              to the reign of darkness in every life, even as we help people
              rediscover their royalty and enjoy the full benefit of redemption
              as we prepare every man for Christ’s second coming.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
