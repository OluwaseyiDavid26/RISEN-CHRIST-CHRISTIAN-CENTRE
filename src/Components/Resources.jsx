import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaVideo, FaImage, FaPodcast, FaMusic, FaBook } from "react-icons/fa";

import image10 from "../assets/image-10.png";
import image11 from "../assets/image-11.png";
import image12 from "../assets/image-12.png";
import image13 from "../assets/image-13.png";

// Image mapping
const IMAGE_MAP = {
  image10,
  image11,
  image12,
  image13,
};

// Resource data with correct route paths
const RESOURCES_DATA = [
  {
    title: "WATCH",
    items: [
      {
        img: "image10",
        icon: FaVideo,
        name: "Videos",
        description: "video messages from our pastors",
        link: "/video-messages",
      },
      {
        img: "image13",
        icon: FaImage,
        name: "Photo Gallery",
        description: "Relive powerful moments in pictures",
        link: "/photo-gallery",
      },
    ],
  },
  {
    title: "LISTEN",
    items: [
      {
        img: "image11",
        name: "Audio & Podcast",
        icon: FaPodcast,
        description: "Listen to our audios on the go and be inspired",
        link: "/podcast",
      },
      {
        img: "image13",
        name: "Music",
        icon: FaMusic,
        description: "Spirit-filled worship and gospel songs",
        link: "/music",
      },
    ],
  },
  {
    title: "READ",
    items: [
      {
        img: "image12",
        name: "Articles",
        icon: FaBook,
        description: "Insightful teachings and faith-based topics",
        link: "/articles",
      },
    ],
  },
];

// Reusable ResourceItem component
function ResourceItem({ item, itemKey, hoveredItem, setHoveredItem }) {
  const isHovered = hoveredItem === itemKey;
  const IconComponent = item.icon;

  return (
    <motion.div
      className="flex justify-between items-center p-4 gap-4 bg-white rounded-xl border border-gray-100 hover:border-gold-400/30 cursor-pointer transition-all duration-300 group shadow-[0_1px_2px_rgba(0,0,0,0.04)] hover:shadow-md"
      onMouseEnter={() => setHoveredItem(itemKey)}
      onMouseLeave={() => setHoveredItem(null)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      {/* Icon/Image Circle */}
      <motion.div
        className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center overflow-hidden flex-shrink-0 border border-gray-100 group-hover:border-gold-400/40 transition-colors"
        whileHover={{ scale: 1.08 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {isHovered && IconComponent ? (
          <IconComponent size={20} className="text-gold-400 transition-colors" />
        ) : (
          <img
            src={IMAGE_MAP[item.img]}
            alt={item.name}
            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
          />
        )}
      </motion.div>

      {/* Text Content */}
      <div className="flex-1 min-w-0">
        <h4 className="text-base font-semibold text-gray-900 group-hover:text-gold-600 transition-colors duration-300 truncate">
          {item.name}
        </h4>
        <p className="text-xs tracking-wide text-gray-500 group-hover:text-gray-700 transition-colors duration-300 mt-0.5">
          {item.description}
        </p>
      </div>

      {/* Arrow */}
      <span
        className="text-xl text-transparent group-hover:text-gold-400 transition-all duration-300 flex-shrink-0 -translate-x-2 group-hover:translate-x-0"
        aria-hidden="true"
      >
        &#8594;
      </span>
    </motion.div>
  );
}

function Resources() {
  const [hoveredItem, setHoveredItem] = useState(null);

  return (
    <section className="px-4 sm:px-6 py-24 md:py-32 bg-cream-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-gray-100/50 to-transparent pointer-events-none" />

      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-16 relative z-10">
        <motion.p
          className="text-gold-500 text-sm uppercase tracking-widest font-semibold mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Spiritual Growth
        </motion.p>

        <motion.h2
          className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-gray-900 mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Resources
        </motion.h2>

        <motion.p
          className="text-gray-600 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          Explore a rich collection of faith-building materials to help you grow
          spiritually and stay connected to God&rsquo;s Word.
        </motion.p>
      </div>

      {/* Resource Grid — asymmetric 2-col on desktop to break 3-equal pattern */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
        {RESOURCES_DATA.map((resource, groupIndex) => (
          <motion.div
            key={groupIndex}
            className={`space-y-6 ${groupIndex === 2 ? "md:col-span-2 md:max-w-lg md:mx-auto" : ""}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: groupIndex * 0.15 }}
            viewport={{ once: true }}
          >
            {/* Category Title */}
            <h3 className="text-xl md:text-2xl font-playfair font-bold text-gray-900 border-b border-gray-200 pb-4">
              {resource.title}
            </h3>

            {/* Category Items */}
            <div className="space-y-3">
              {resource.items.map((item, itemIndex) => {
                const itemKey = `${groupIndex}-${itemIndex}`;

                return (
                  <Link
                    to={item.link}
                    key={itemKey}
                    className="block no-underline focus-visible:rounded-xl focus-ring"
                  >
                    <ResourceItem
                      item={item}
                      itemKey={itemKey}
                      hoveredItem={hoveredItem}
                      setHoveredItem={setHoveredItem}
                    />
                  </Link>
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
