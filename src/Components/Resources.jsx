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

// import { useState } from "react";
// import { motion } from "framer-motion";
// import { FaVideo, FaImage, FaPodcast, FaMusic, FaBook } from "react-icons/fa";

// import image10 from "../assets/image-10.png";
// import image11 from "../assets/image-11.png";
// import image12 from "../assets/image-12.png";
// import image13 from "../assets/image-13.png";

// // Image mapping for cleaner code
// const IMAGE_MAP = {
//   image10,
//   image11,
//   image12,
//   image13,
// };

// // Resource data - easier to maintain
// const RESOURCES_DATA = [
//   {
//     title: "Watch",
//     items: [
//       {
//         img: "image10",
//         icon: FaVideo,
//         name: "Videos",
//         description: "Faith-filled videos and sermons",
//         link: "/resources/videos",
//       },
//       {
//         img: "image13",
//         icon: FaImage,
//         name: "Photo Gallery",
//         description: "Memorable moments captured",
//         link: "/resources/gallery",
//       },
//     ],
//   },
//   {
//     title: "Listen",
//     items: [
//       {
//         img: "image11",
//         name: "Audio & Podcast",
//         icon: FaPodcast,
//         description: "Listen to powerful messages",
//         link: "/resources/podcast",
//       },
//       {
//         img: "image13",
//         name: "Music",
//         icon: FaMusic,
//         description: "Insights for daily living",
//         link: "/resources/music",
//       },
//     ],
//   },
//   {
//     title: "Read",
//     items: [
//       {
//         img: "image12",
//         name: "Articles",
//         icon: FaBook,
//         description: "Faith-building write-ups",
//         link: "/resources/articles",
//       },
//     ],
//   },
// ];

// // Reusable ResourceItem component
// function ResourceItem({ item, itemKey, hoveredItem, setHoveredItem }) {
//   const isHovered = hoveredItem === itemKey;
//   const IconComponent = item.icon;

//   return (
//     <motion.div
//       className="flex justify-between items-center p-5 gap-4 bg-white hover:bg-red-600 cursor-pointer transition-colors duration-300 rounded-lg shadow-sm group"
//       onMouseEnter={() => setHoveredItem(itemKey)}
//       onMouseLeave={() => setHoveredItem(null)}
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//       viewport={{ once: true }}
//       role="button"
//       tabIndex={0}
//       aria-label={`Navigate to ${item.name}`}
//     >
//       {/* Icon/Image Circle */}
//       <motion.div
//         className="w-14 h-14 rounded-full bg-gray-700 flex items-center justify-center overflow-hidden flex-shrink-0"
//         whileHover={{ scale: 1.1 }}
//         transition={{ type: "spring", stiffness: 300, damping: 15 }}
//       >
//         {isHovered && IconComponent ? (
//           <IconComponent size={28} color="white" />
//         ) : (
//           <img
//             src={IMAGE_MAP[item.img]}
//             alt={item.name}
//             className="w-full h-full object-cover"
//           />
//         )}
//       </motion.div>

//       {/* Text Content */}
//       <div className="flex-1 min-w-0">
//         <h4 className="text-lg font-semibold text-gray-800 group-hover:text-white transition-colors duration-300 truncate">
//           {item.name}
//         </h4>
//         <p className="text-sm text-gray-600 group-hover:text-gray-100 transition-colors duration-300">
//           {item.description}
//         </p>
//       </div>

//       {/* Arrow */}
//       <motion.span
//         className="text-2xl text-gray-400 group-hover:text-white transition-colors duration-300 flex-shrink-0"
//         whileHover={{ x: 5 }}
//         transition={{ type: "tween", duration: 0.2 }}
//         aria-hidden="true"
//       >
//         →
//       </motion.span>
//     </motion.div>
//   );
// }

// function Resources() {
//   const [hoveredItem, setHoveredItem] = useState(null);

//   return (
//     <section className="px-4 sm:px-6 py-12 md:py-16 bg-gray-50 text-gray-800">
//       {/* Header */}
//       <div className="max-w-5xl mx-auto text-center mb-12">
//         <motion.h2
//           className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//         >
//           Resources
//         </motion.h2>
//         <motion.p
//           className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto"
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ delay: 0.2, duration: 0.6 }}
//           viewport={{ once: true }}
//         >
//           Explore a rich collection of faith-building materials to help you grow
//           spiritually and stay connected to God's Word.
//         </motion.p>
//       </div>

//       {/* Resources Grid */}
//       <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
//         {RESOURCES_DATA.map((resource, groupIndex) => (
//           <motion.div
//             key={groupIndex}
//             className="space-y-4"
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: groupIndex * 0.15 }}
//             viewport={{ once: true }}
//           >
//             {/* Category Title */}
//             <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
//               {resource.title}
//             </h3>

//             {/* Category Items */}
//             <div className="space-y-4">
//               {resource.items.map((item, itemIndex) => {
//                 const itemKey = `${groupIndex}-${itemIndex}`;
//                 return (
//                   <ResourceItem
//                     key={itemKey}
//                     item={item}
//                     itemKey={itemKey}
//                     hoveredItem={hoveredItem}
//                     setHoveredItem={setHoveredItem}
//                   />
//                 );
//               })}
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }

// export default Resources;

// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import { FaVideo, FaImage, FaPodcast, FaMusic, FaBook } from "react-icons/fa";

// import image10 from "../assets/image-10.png";
// import image11 from "../assets/image-11.png";
// import image12 from "../assets/image-12.png";
// import image13 from "../assets/image-13.png";

// // Image mapping
// const IMAGE_MAP = {
//   image10,
//   image11,
//   image12,
//   image13,
// };

// // ✅ Updated links to match your actual files
// const RESOURCES_DATA = [
//   {
//     title: "WATCH",
//     items: [
//       {
//         img: "image10",
//         icon: FaVideo,
//         name: "Videos",
//         description: "video messages from our pastors",
//         // link: "/Pages4/AudioMessage",
//       },
//       {
//         img: "image13",
//         icon: FaImage,
//         name: "Photo Gallery",
//         description: "Relive powerful moments in pictures",
//         // link: "/Pages4/PhotoGallery",
//       },
//     ],
//   },
//   {
//     title: "LISTEN",
//     items: [
//       {
//         img: "image11",
//         name: "Audio & Podcast",
//         icon: FaPodcast,
//         description: "Listen to our audios on the go and be inspired",
//         // link: "/Pages4/Podcast",
//       },
//       {
//         img: "image13",
//         name: "Music",
//         icon: FaMusic,
//         description: "Spirit-filled worship and gospel songs",
//         // link: "/Pages4/Music",
//       },
//     ],
//   },
//   {
//     title: "READ",
//     items: [
//       {
//         img: "image12",
//         name: "Articles",
//         icon: FaBook,
//         description: "Insightful teachings and faith-based topics",
//         // link: "/Pages4/Articles",
//       },
//     ],
//   },
// ];

// // Reusable ResourceItem component
// function ResourceItem({ item, itemKey, hoveredItem, setHoveredItem }) {
//   const isHovered = hoveredItem === itemKey;
//   const IconComponent = item.icon;

//   return (
//     <motion.div
//       className="flex justify-between items-center p-5 gap-4 bg-white hover:bg-red-600 cursor-pointer transition-colors duration-300 rounded-lg shadow-sm group"
//       onMouseEnter={() => setHoveredItem(itemKey)}
//       onMouseLeave={() => setHoveredItem(null)}
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//       viewport={{ once: true }}
//     >
//       {/* Icon/Image Circle */}
//       <motion.div
//         className="w-14 h-14 rounded-full bg-gray-700 flex items-center justify-center overflow-hidden flex-shrink-0"
//         whileHover={{ scale: 1.1 }}
//         transition={{ type: "spring", stiffness: 300, damping: 15 }}
//       >
//         {isHovered && IconComponent ? (
//           <IconComponent size={28} color="white" />
//         ) : (
//           <img
//             src={IMAGE_MAP[item.img]}
//             alt={item.name}
//             className="w-full h-full object-cover"
//           />
//         )}
//       </motion.div>

//       {/* Text Content */}
//       <div className="flex-1 min-w-0">
//         <h4 className="text-lg font-semibold text-gray-800 group-hover:text-white transition-colors duration-300 truncate">
//           {item.name}
//         </h4>
//         <p className="text-sm text-gray-600 group-hover:text-gray-100 transition-colors duration-300">
//           {item.description}
//         </p>
//       </div>

//       {/* Arrow */}
//       <motion.span
//         className="text-2xl text-gray-400 group-hover:text-white transition-colors duration-300 flex-shrink-0"
//         whileHover={{ x: 5 }}
//         transition={{ type: "tween", duration: 0.2 }}
//       >
//         →
//       </motion.span>
//     </motion.div>
//   );
// }

// function Resources() {
//   const [hoveredItem, setHoveredItem] = useState(null);

//   return (
//     <section className="px-4 sm:px-6 py-12 md:py-16 bg-gray-50 text-gray-800">
//       {/* Header */}
//       <div className="max-w-5xl mx-auto text-center mb-12">
//         <motion.h2
//           className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//         >
//           Resources
//         </motion.h2>

//         <motion.p
//           className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto"
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ delay: 0.2, duration: 0.6 }}
//           viewport={{ once: true }}
//         >
//           Explore a rich collection of faith-building materials to help you grow
//           spiritually and stay connected to God's Word.
//         </motion.p>
//       </div>

//       {/* Resource Grid */}
//       <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
//         {RESOURCES_DATA.map((resource, groupIndex) => (
//           <motion.div
//             key={groupIndex}
//             className="space-y-4"
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: groupIndex * 0.15 }}
//             viewport={{ once: true }}
//           >
//             <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
//               {resource.title}
//             </h3>

//             <div className="space-y-4">
//               {resource.items.map((item, itemIndex) => {
//                 const itemKey = `${groupIndex}-${itemIndex}`;

//                 return (
//                   // <Link to={item.link} key={itemKey} className="no-underline">
//                   //   <ResourceItem
//                   //     item={item}
//                   //     itemKey={itemKey}
//                   //     hoveredItem={hoveredItem}
//                   //     setHoveredItem={setHoveredItem}
//                   //   />
//                   // </Link>
//                 );
//               })}
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }

// export default Resources;
