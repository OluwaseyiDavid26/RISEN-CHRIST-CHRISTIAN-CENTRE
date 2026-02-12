// import React from "react";
// import { motion } from "framer-motion";
// import pst1 from "../assets/pst-1.avif";
// import pst2 from "../assets/pst-2.avif";
// import pst3 from "../assets/pst-3.avif";
// import pst4 from "../assets/pst-4.avif";

// const pastors = [
//   {
//     image: pst1,
//     title: "LEAD PASTOR",
//     name: "Pastor Raji Bashir Babatunde",
//     description:
//       "Bringing vision and direction to the church, our Lead Pastor is passionate about teaching the Word, leading by example, and shepherding God’s people.",
//   },
//   {
//     image: pst2,
//     title: "LEAD PASTOR",
//     name: "Pastor Raji-Babatunde Idowu",
//     description:
//       "Raji Babatunde Idowu is a preacher of the word of God, a fervent prayer warrior, and a counsellor. She is a children's minister and has been the Deputy Coordinator of the Boanerges Fellowship since 2009. She is a Business Educator by training, and she is joyfully married to Raji Bashir Babatunde. They are both blessed with many children both biological and spiritual.",
//   },
//   {
//     image: pst3,
//     title: "Resident Minister",
//     name: "Minister Olapade Emmanuel Olalekan",
//     description:
//       "Olapade Olalekan holds a B.Tech. degree in Agricultural Engineering from Ladoke Akintola University of Technology, Ogbomoso. He is happily married to Omolade Olapade, and they are currently blessed with a daughter, Jael.",
//   },
//   {
//     image: pst4,
//     title: "(HOD MUSIC)",
//     name: "Minister Abe Isaac Tolushe ",
//     description:
//       "Abe Tolushe holds an MB,BS degree in Medicine and Surgery from the University of Ilorin, Kwara State. He is happily married to Abimbola Abe, and they are blessed with two children, Emmanuella and Emmanuel.",
//   },
//   {
//     image: pst4,
//     title: "(HOD Visitation and Follow up)",
//     name: "Minister Omorinoye Praise Yinjesu",
//     description:
//       "Omorinoye Praise holds a B.Sc. in Accounting from Ekiti State University, Ado Ekiti. She is happily married to Omorinoye Wale, and they are blessed with two sons, Jeshurun and Jason.",
//   },
// ];

// function Leadership() {
//   return (
//     <section className="py-16 bg-white">
//       <div className="w-full px-4 text-center">
//         <motion.h2
//           className="text-4xl font-semibold mb-4"
//           initial={{ opacity: 0, y: -30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//         >
//           Leadership
//         </motion.h2>
//         <motion.p
//           className="text-gray-600 mb-12"
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//           viewport={{ once: true }}
//         >
//           At The Risen Christ Christian Centre, our leadership team is committed
//           to serving with wisdom, humility, and love. Each leader plays a vital
//           role in guiding the church and ensuring spiritual growth within the
//           community.
//         </motion.p>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
//           {pastors.map((pastor, index) => (
//             <motion.div
//               key={index}
//               className="rounded-lg overflow-hidden"
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: index * 0.2 }}
//               viewport={{ once: true }}
//             >
//               <img
//                 src={pastor.image}
//                 alt={pastor.name}
//                 className="w-full h-[450px] object-cover"
//               />
//               <div className="text-left">
//                 <h3 className="text-sm font-bold mt-2 text-gray-800 uppercase">
//                   {pastor.title}
//                 </h3>
//                 <h4 className="text-xl font-semibold mt-2 text-gray-900">
//                   {pastor.name}
//                 </h4>
//                 <p className="text-sm text-gray-600 mt-2">
//                   {pastor.description}
//                 </p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Leadership;
import React from "react";
import { motion } from "framer-motion";
import Minlekan from "../assets/Minlekan.JPG";
import Minpraise from "../assets/Minpraise.jpeg";

const DRIVE_BASE_URL = "https://drive.google.com/thumbnail?id=";
const DRIVE_SIZE = "&sz=w1000";

const imageUrls = {
  pst1: `${DRIVE_BASE_URL}1Bs5Fjbllklq4QEioqs1yyWuty7-xB_Gu${DRIVE_SIZE}`,
  pst2: `${DRIVE_BASE_URL}1IMA4EYKapsIPsnR4xk0vgyH0hPCkMbf0${DRIVE_SIZE}`,
  pst3: `${DRIVE_BASE_URL}1Xq7naGrwt9PlfWUtyMuvEF54fzT3U5Rh${DRIVE_SIZE}`,
  pst4: `${DRIVE_BASE_URL}1wQ2LgltS0OyXHSAwcFB3hyDhIxq5f2GH${DRIVE_SIZE}`,
};

const pastors = [
  {
    image: imageUrls.pst1,
    title: "LEAD PASTOR",
    name: "Pastor Raji Bashir Babatunde",
    description:
      "Bringing vision and direction to the church, our Lead Pastor is passionate about teaching the Word, leading by example, and shepherding God's people.",
  },
  {
    image: imageUrls.pst2,
    title: "LEAD PASTOR",
    name: "Pastor Raji-Babatunde Idowu",
    description:
      "Raji Babatunde Idowu is a preacher of the word of God, a fervent prayer warrior, and a counsellor. She is a children's minister and has been the Deputy Coordinator of the Boanerges Fellowship since 2009. She is a Business Educator by training, and she is joyfully married to Raji Bashir Babatunde. They are both blessed with many children both biological and spiritual.",
  },
  {
    image: Minlekan,
    title: "Resident Minister",
    name: "Minister Olapade Emmanuel Olalekan",
    description:
      "Olapade Olalekan holds a B.Tech. degree in Agricultural Engineering from Ladoke Akintola University of Technology, Ogbomoso. He is happily married to Omolade Olapade, and they are currently blessed with a daughter, Jael.",
  },
  {
    image: imageUrls.pst4,
    title: "(HOD MUSIC)",
    name: "Minister Abe Isaac Tolushe",
    description:
      "Abe Tolushe holds an MB,BS degree in Medicine and Surgery from the University of Ilorin, Kwara State. He is happily married to Abimbola Abe, and they are blessed with two children, Emmanuella and Emmanuel.",
  },
  {
    image: Minpraise,
    title: "(HOD Visitation and Follow up)",
    name: "Minister Omorinoye Praise Yinjesu",
    description:
      "Omorinoye Praise holds a B.Sc. in Accounting from Ekiti State University, Ado Ekiti. She is happily married to Omorinoye Wale, and they are blessed with two sons, Jeshurun and Jason.",
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
              <div className="w-full h-[450px] bg-gray-100 flex items-center justify-center overflow-hidden">
                <img
                  src={pastor.image}
                  alt={pastor.name}
                  className="w-full h-full object-cover object-top"
                  onError={(e) => {
                    e.target.src =
                      "https://via.placeholder.com/400x450?text=Pastor+Image";
                  }}
                />
              </div>
              <div className="text-left mt-4">
                <h3 className="text-sm font-bold text-gray-800 uppercase">
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
