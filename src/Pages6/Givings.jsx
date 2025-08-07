import React from "react";
import { motion } from "framer-motion";

import accesslogo from "../assets/access-logo.png";
import unionlogo from "../assets/union-logo.png";
import moniepointlogo from "../assets/moniepoint-logo.png";

function Givings() {
  return (
    <motion.section
      className="w-full px-4 py-16 bg-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      {/* Title Section */}
      <motion.div
        className="text-center mb-12"
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-5xl font-bold mb-2">WAYS TO GIVE</h2>
        <p className="text-gray-600 text-lg">
          Give securely through our online platform.
        </p>
      </motion.div>

      {/* Bank Details */}
      <motion.div
        className="max-w-xl mx-auto"
        initial={{ scale: 0.95, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <h3 className="text-3xl font-semibold text-center mb-8">
          Bank Details
        </h3>

        {/* Account Name */}
        <motion.div
          className="mb-6"
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-3xl font-semibold">Account Name</p>
          <p className="text-gray-600">The Risen Christ Christian Centre</p>
        </motion.div>

        {/* Bank Cards */}
        {[
          { logo: accesslogo, number: "3067034997" },
          { logo: unionlogo, number: "85066830686" },
          { logo: moniepointlogo, number: "7346982647" },
        ].map((bank, index) => (
          <motion.div
            key={index}
            className="mb-6"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <img src={bank.logo} alt="Bank Logo" className="h-12 mb-2" />
            <p className="text-lg font-semibold">Account Number</p>
            <p className="text-gray-700">{bank.number}</p>
            <hr className="mt-3 border-gray-300" />
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}

export default Givings;
