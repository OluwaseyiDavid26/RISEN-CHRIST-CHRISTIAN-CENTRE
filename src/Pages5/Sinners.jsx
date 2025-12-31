// import React from "react";
// import { motion } from "framer-motion";
// import sinner from "../assets/sinners2.JPG";

// function Sinners() {
//   return (
//     <motion.section
//       className="w-full bg-white text-center px-4 py-12"
//       initial={{ opacity: 0 }}
//       whileInView={{ opacity: 1 }}
//       viewport={{ once: true }}
//       transition={{ duration: 1 }}
//     >
//       {/* Heading and Intro Paragraph */}
//       <motion.div
//         className="max-w-2xl mx-auto"
//         initial={{ y: 30, opacity: 0 }}
//         whileInView={{ y: 0, opacity: 1 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.8 }}
//       >
//         <h2 className="text-3xl md:text-4xl font-semibold mb-4">
//           Sinner’s Prayer
//         </h2>
//         <p className="text-lg text-gray-700">
//           Are you ready to start a new life with Jesus? No matter where you've
//           been or what you've done, His love and mercy are waiting for you.
//           Salvation is a free gift, and today is the perfect time to receive it.
//         </p>
//       </motion.div>

//       {/* Full Width Image */}
//       <motion.div
//         className="w-full h-[80vh] md:h-screen mt-6 overflow-hidden px-4 sm:px-6 lg:px-8"
//         initial={{ scale: 0.95, opacity: 0 }}
//         whileInView={{ scale: 1, opacity: 1 }}
//         viewport={{ once: true }}
//         transition={{ duration: 1 }}
//       >
//         <img
//           src={sinner}
//           alt="Sinner's Prayer"
//           className="w-full h-full object-cover rounded-xl"
//         />
//       </motion.div>

//       {/* Prayer Content */}
//       <motion.div
//         className="px-6 py-12 text-left"
//         initial={{ y: 30, opacity: 0 }}
//         whileInView={{ y: 0, opacity: 1 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.8 }}
//       >
//         <h2 className="text-xl md:text-xl font-medium mb-4">
//           Pray This Prayer From Your Heart
//         </h2>
//         <p className="text-lg text-gray-700 max-w-2xl">
//           "Lord Jesus, I come to You today just as I am. I acknowledge that I am
//           a sinner and that I need Your forgiveness. I believe You died on the
//           cross for my sins and rose again to give me eternal life. Today, I
//           surrender my life to You. Come into my heart, be my Lord and Savior,
//           and help me to live for You. Thank You for Your grace, Your mercy, and
//           Your love. In Jesus’ name, I pray. Amen."
//         </p>
//       </motion.div>
//     </motion.section>
//   );
// }

// export default Sinners;

import React from "react";
import { motion } from "framer-motion";

// Google Drive Image URL
const sinner =
  "https://lh3.googleusercontent.com/d/1xkSjAknv5fzJLeQ-fm4AJrT_IlaCPUdX";

function Sinners() {
  return (
    <motion.section
      className="w-full bg-white text-center px-4 py-12"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      {/* Heading and Intro Paragraph */}
      <motion.div
        className="max-w-2xl mx-auto"
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          Sinner's Prayer
        </h2>
        <p className="text-lg text-gray-700">
          Are you ready to start a new life with Jesus? No matter where you've
          been or what you've done, His love and mercy are waiting for you.
          Salvation is a free gift, and today is the perfect time to receive it.
        </p>
      </motion.div>

      {/* Full Width Image */}
      <motion.div
        className="w-full h-[80vh] md:h-screen mt-6 overflow-hidden px-4 sm:px-6 lg:px-8"
        initial={{ scale: 0.95, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <img
          src={sinner}
          alt="Sinner's Prayer"
          className="w-full h-full object-cover rounded-xl"
        />
      </motion.div>

      {/* Prayer Content */}
      <motion.div
        className="px-6 py-12 text-left"
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-xl md:text-xl font-medium mb-4">
          Pray This Prayer From Your Heart
        </h2>
        <p className="text-lg text-gray-700 max-w-2xl">
          "Lord Jesus, I come to You today just as I am. I acknowledge that I am
          a sinner and that I need Your forgiveness. I believe You died on the
          cross for my sins and rose again to give me eternal life. Today, I
          surrender my life to You. Come into my heart, be my Lord and Savior,
          and help me to live for You. Thank You for Your grace, Your mercy, and
          Your love. In Jesus' name, I pray. Amen."
        </p>
      </motion.div>
    </motion.section>
  );
}

export default Sinners;
