import React from "react";
import { motion } from "framer-motion";

function CommitmentForm() {
  return (
    <motion.section
      className="w-full px-4 py-16 bg-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      {/* Heading and Subtext */}
      <motion.div
        className="max-w-3xl mx-auto text-center mb-12"
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Sinner’s Commitment Form
        </h2>
        <p className="text-gray-700 text-lg">
          If you just prayed this prayer and accepted Jesus as your Lord and
          Savior, we’d love to connect with you, pray for you, and help you grow
          in your new journey of faith. Please fill out the form below so we can
          support you.
        </p>
      </motion.div>

      {/* Form */}
      <form className="max-w-4xl mx-auto space-y-6">
        {[
          { label: "Name", type: "text", placeholder: "Enter Name" },
          { label: "Email", type: "email", placeholder: "Enter Email" },
          {
            label: "Phone Number",
            type: "tel",
            placeholder: "Enter Phone Number",
          },
        ].map((field, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {field.label}
            </label>
            <input
              type={field.type}
              placeholder={field.placeholder}
              className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </motion.div>
        ))}

        {/* Location */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Location
          </label>
          <select className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500">
            <option>Select...</option>
            <option>Lagos</option>
            <option>Abuja</option>
            <option>Port Harcourt</option>
            <option>Other</option>
          </select>
        </motion.div>

        {/* Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Message
          </label>
          <textarea
            rows="4"
            placeholder="We would love to hear from you"
            className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
        </motion.div>

        {/* Submit Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <button
            type="submit"
            className="w-full bg-pink-600 text-white font-medium py-3 rounded-md hover:bg-pink-700 transition duration-300"
          >
            Submit
          </button>
        </motion.div>
      </form>
    </motion.section>
  );
}

export default CommitmentForm;
