import React from "react";
import { motion } from "framer-motion";
import pst1 from "../assets/pst-1.avif";
import pst2 from "../assets/pst-2.avif";
import pst3 from "../assets/pst-3.avif";
import pst4 from "../assets/pst-4.avif";

const pastors = [
  {
    image: pst1,
    title: "LEAD PASTOR",
    name: "PASTOR NAME",
    description:
      "Bringing vision and direction to the church, our Lead Pastor is passionate about teaching the Word, leading by example, and shepherding God’s people.",
  },
  {
    image: pst2,
    title: "LEAD PASTOR",
    name: "PASTOR NAME",
    description:
      "Bringing vision and direction to the church, our Lead Pastor is passionate about teaching the Word, leading by example, and shepherding God’s people.",
  },
  {
    image: pst3,
    title: "LEAD PASTOR",
    name: "PASTOR NAME",
    description:
      "Bringing vision and direction to the church, our Lead Pastor is passionate about teaching the Word, leading by example, and shepherding God’s people.",
  },
  {
    image: pst4,
    title: "LEAD PASTOR",
    name: "PASTOR NAME",
    description:
      "Bringing vision and direction to the church, our Lead Pastor is passionate about teaching the Word, leading by example, and shepherding God’s people.",
  },
];

function Leadership() {
  return (
    <section className="py-16 bg-white">
      <div className="w-full px-4 text-center">
        <motion.h2
          className="text-4xl font-semibold mb-4"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Leadership
        </motion.h2>
        <motion.p
          className="text-gray-600 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          At The Risen Christ Christian Centre, our leadership team is committed
          to serving with wisdom, humility, and love. Each leader plays a vital
          role in guiding the church and ensuring spiritual growth within the
          community.
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {pastors.map((pastor, index) => (
            <motion.div
              key={index}
              className="rounded-lg overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <img
                src={pastor.image}
                alt={pastor.name}
                className="w-full h-[450px] object-cover"
              />
              <div className="text-left">
                <h3 className="text-sm font-bold mt-2 text-gray-800 uppercase">
                  {pastor.title}
                </h3>
                <h4 className="text-xl font-semibold mt-2 text-gray-900">
                  {pastor.name}
                </h4>
                <p className="text-sm text-gray-600 mt-2">
                  {pastor.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Leadership;
