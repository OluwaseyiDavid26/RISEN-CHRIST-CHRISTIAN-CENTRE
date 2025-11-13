import React from "react";
import { motion } from "framer-motion";

// import Header from "../Components/Navbar";
// import Footer from "../Components/Footer";

// IMPORT ALL YOUR ARTICLE IMAGES
import article1 from "../assets/article-img1.avif";
import article2 from "../assets/article-img2.avif";
import article3 from "../assets/article-img3.avif";
import article6 from "../assets/article5.avif";
import article5 from "../assets/article4.avif";

// FULL ARTICLE LIST
const fullArticles = [
  {
    title: "WORSHIP",
    description: "The Heart Of Worship: What It Truly Means To Worship God",
    image: article1,
  },
  {
    title: "SPIRITUAL WARFARE",
    description: "Overcoming Spiritual Battles: The Armor Of God Explained",
    image: article2,
  },
  {
    title: "PURPOSE",
    description: "Living A Purpose-Driven Life: Discovering God’s Plan For You",
    image: article3,
  },
  {
    title: "PRAYER",
    description: "The Power Of Prayer: How To Build A Stronger Prayer Life",
    image: article5,
  },
  {
    title: "WORSHIP",
    description: "The Heart Of Worship: What It Truly Means To Worship God",
    image: article6,
  },
];

function Articles() {
  return (
    <>
      {/* <Header /> */}

      <section className="w-full py-16 px-4 bg-white">
        {/* Page Title */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl font-bold text-center text-gray-800 mb-16"
        >
          ARTICLES
        </motion.h1>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14 max-w-7xl mx-auto">
          {fullArticles.map((article, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              className="w-full"
            >
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-64 object-cover rounded-xl shadow-md"
              />

              <h3 className="text-sm font-semibold text-gray-700 mt-4 uppercase">
                {article.title}
              </h3>

              <p className="text-lg text-gray-800 font-medium mt-1 leading-relaxed">
                {article.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* <Footer /> */}
    </>
  );
}

export default Articles;
