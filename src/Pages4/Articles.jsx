import React from "react";
import { motion } from "framer-motion";

import article1 from "../assets/article-img1.avif";
import article2 from "../assets/article-img2.avif";
import article3 from "../assets/article-img3.avif";

const articles = [
  {
    title: "WORSHIP",
    description:
      "The Heart Of Worship: What It Truly <br/>  Means To Worship God",
    image: article1,
  },
  {
    title: "WORSHIP",
    description:
      "The Heart Of Worship: What It Truly <br/> Means To Worship God",
    image: article2,
  },
  {
    title: "WORSHIP",
    description:
      "The Heart Of Worship: What It Truly <br/> Means To Worship God",
    image: article3,
  },
];

function Article() {
  return (
    <section className="w-full py-16 px-4 bg-white">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full px-4 sm:px-6 lg:px-8 mb-12"
      >
        <h2 className="text-5xl font-bold text-gray-800 mb-2">Articles</h2>
        <p className="text-gray-600 text-lg">
          Insightful teachings, devotionals, and faith-building messages
        </p>
      </motion.div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 w-full px-4 sm:px-6 lg:px-8">
        {articles.map((article, index) => (
          <motion.div
            key={index}
            className="text-left"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-64 object-cover rounded-xl shadow-md"
            />
            <h3 className="text-lg font-semibold mt-4 uppercase text-gray-800">
              {article.title}
            </h3>
            <p
              className="text-sm text-gray-600 mt-1"
              dangerouslySetInnerHTML={{ __html: article.description }}
            />
            {/* <p className="text-sm text-gray-600 mt-1">
              dangerouslySetInnerHTML={{ __html: article.description }}
            </p> */}
          </motion.div>
        ))}
      </div>

      {/* Button */}
      <motion.div
        className="flex justify-center mt-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <a
          href="#"
          className="bg-[#ff0e40] rounded-md px-6 py-3 text-white text-lg font-semibold hover:bg-[#e00c3a] transition duration-300 cursor-pointer text-center capitalize"
        >
          See More
        </a>
      </motion.div>
    </section>
  );
}

export default Article;
