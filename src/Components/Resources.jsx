import { useState } from "react";
import { motion } from "framer-motion";
import { FaVideo, FaImage, FaPodcast, FaMusic, FaBook } from "react-icons/fa";

import image10 from "../assets/image-10.png";
import image11 from "../assets/image-11.png";
import image12 from "../assets/image-12.png";
import image13 from "../assets/image-13.png";

function Resources() {
  const [hoveredItem, setHoveredItem] = useState(null);

  const resources = [
    {
      title: "Watch",
      items: [
        {
          img: "image10",
          icon: <FaVideo size={30} color="white" />,
          name: "Videos",
          description: "Faith-filled videos and sermons",
        },
        {
          img: "image13",
          icon: <FaImage size={30} color="white" />,
          name: "Photo Gallery",
          description: "Memorable moments captured",
        },
      ],
    },
    {
      title: "Listen",
      items: [
        {
          img: "image11",
          name: "Audio & Podcast",
          icon: <FaPodcast size={30} color="white" />,
          description: "Listen to powerful messages",
        },
        {
          img: "image13",
          name: "Music",
          icon: <FaMusic size={30} color="white" />,
          description: "Insights for daily living",
        },
      ],
    },
    {
      title: "Read",
      items: [
        {
          img: "image12",
          name: "Articles",
          icon: <FaBook size={30} color="white" />,
          description: "Faith-building write-ups",
        },
      ],
    },
  ];

  const getImage = (key) => {
    return key === "image10"
      ? image10
      : key === "image11"
      ? image11
      : key === "image12"
      ? image12
      : key === "image13"
      ? image13
      : null;
  };

  return (
    <section className="px-6 py-12 bg-gray-50 text-gray-800">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Resources
        </motion.h2>
        <motion.p
          className="text-gray-600 mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Explore a rich collection of faith-building materials to help you grow
          spiritually and stay connected to God’s Word.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mx-auto">
        {resources.map((resource, groupIndex) => (
          <motion.div
            key={groupIndex}
            className="p-4"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: groupIndex * 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-4">{resource.title}</h3>
            <div className="space-y-4">
              {resource.items.map((item, itemIndex) => {
                const itemKey = `${groupIndex}-${itemIndex}`;
                const isHovered = hoveredItem === itemKey;

                return (
                  <motion.div
                    key={itemIndex}
                    className="flex justify-between items-center p-5 gap-8 hover:bg-red-600 cursor-pointer transition rounded-lg"
                    onMouseEnter={() => setHoveredItem(itemKey)}
                    onMouseLeave={() => setHoveredItem(null)}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: itemIndex * 0.2,
                      duration: 0.5,
                    }}
                    viewport={{ once: true }}
                  >
                    <motion.div
                      className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center overflow-hidden"
                      whileHover={{ scale: 1.2 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {isHovered && item.icon ? (
                        item.icon
                      ) : (
                        <img
                          src={getImage(item.img)}
                          alt={item.name}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                      )}
                    </motion.div>

                    <div className="flex-1">
                      <h4 className="text-lg font-medium text-white md:text-gray-800">
                        {item.name}
                      </h4>
                      <p className="text-sm text-gray-300 md:text-gray-500">
                        {item.description}
                      </p>
                    </div>

                    <motion.span
                      className="text-xl text-white md:text-gray-400"
                      whileHover={{ x: 5 }}
                      transition={{ type: "tween", duration: 0.2 }}
                    >
                      →
                    </motion.span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Resources;
