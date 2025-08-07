import { motion } from "framer-motion";
import image10 from "../assets/image-10.png";
import image11 from "../assets/image-11.png";
import image12 from "../assets/image-12.png";
import image13 from "../assets/image-13.png";

function Popular() {
  const branches = [
    { img: image10, name: "Lagos Branch" },
    { img: image11, name: "Abuja Branch" },
    { img: image12, name: "Port Harcourt Branch" },
    { img: image13, name: "Ibadan Branch" },
  ];

  return (
    <section className="px-6 py-12">
      <div className="w-full">
        {/* Header */}
        <motion.h2
          className="text-3xl font-bold text-gray-800 mb-8 text-left"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Popular Branches
        </motion.h2>

        {/* Images Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {branches.map((branch, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.5, // Stagger based on index
                ease: "easeOut",
              }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <img
                src={branch.img}
                alt={branch.name}
                className="w-full h-[400px] object-cover rounded-lg shadow-md"
              />
              <h3 className="text-lg font-semibold text-gray-800 mt-2">
                {branch.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Popular;
