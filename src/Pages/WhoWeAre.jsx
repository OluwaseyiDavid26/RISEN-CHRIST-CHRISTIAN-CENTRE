// import React from "react";
// import { motion } from "framer-motion";
// import whoimg from "../assets/who-img.png";

// function WhoWeAre() {
//   return (
//     <section className="min-h-screen bg-white">
//       <div
//         className="grid w-full max-w-[1440px] mx-auto"
//         style={{ gridTemplateColumns: "35% 65%" }}
//       >
//         {/* Left Side: Text aligned to top */}
//         <motion.div
//           className="px-8 py-12"
//           initial={{ opacity: 0, x: -60 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//         >
//           <div className="space-y-6">
//             <h1 className="text-5xl font-bold text-gray-800 font-playfair">
//               Bringing Light to <br /> the Nations
//             </h1>
//             <p className="text-gray-600 text-lg leading-relaxed">
//               At The Risen Christ Christian Centre, we are a community of
//               believers dedicated to spreading the love of Christ and empowering
//               lives through the Word of God. Our mission is to raise a
//               generation of Spirit-filled believers who reflect Christ’s love,
//               impact their communities, and carry the message of salvation to
//               the world.
//             </p>
//           </div>
//         </motion.div>

//         {/* Right Side: Image */}
//         <motion.div
//           className="h-[100vh] w-full"
//           initial={{ opacity: 0, x: 60 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//           viewport={{ once: true }}
//         >
//           <img
//             src={whoimg}
//             alt="Who We Are"
//             className="w-full h-full object-cover"
//           />
//         </motion.div>
//       </div>
//     </section>
//   );
// }

// export default WhoWeAre;

import React from "react";
import { motion } from "framer-motion";
import whoimg from "../assets/who-img.png";

function WhoWeAre() {
  return (
    <section className="min-h-screen bg-white">
      <div className="grid w-full max-w-[1440px] mx-auto grid-cols-1 lg:grid-cols-[35%_65%]">
        {/* Left Side: Text aligned to top */}
        <motion.div
          className="px-6 py-12 md:px-8 lg:py-12"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="space-y-6">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 font-playfair">
              Bringing Light to <br /> the Nations
            </h1>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              At The Risen Christ Christian Centre, we are a community of
              believers dedicated to spreading the love of Christ and empowering
              lives through the Word of God. Our mission is to raise a
              generation of Spirit-filled believers who reflect Christ's love,
              impact their communities, and carry the message of salvation to
              the world.
            </p>
          </div>
        </motion.div>

        {/* Right Side: Image */}
        <motion.div
          className="h-[60vh] sm:h-[70vh] lg:h-[100vh] w-full"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <img
            src={whoimg}
            alt="Who We Are"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default WhoWeAre;
