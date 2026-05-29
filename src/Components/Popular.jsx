import { motion } from "framer-motion";
import image10 from "../assets/image-10.png";
import image11 from "../assets/image-11.png";
import image12 from "../assets/image-12.png";
import image13 from "../assets/image-13.png";

function Popular() {
  const branches = [
    { img: image11, name: "Lagos Branch" },
    { img: image10, name: "Abuja Branch" },
    { img: image12, name: "Port Harcourt Branch" },
    { img: image13, name: "Ibadan Branch" },
  ];

  return (
    <section className="px-6 py-24 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center md:text-left mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <p className="text-gold-500 text-sm uppercase tracking-widest font-semibold mb-2">
            Locations
          </p>
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gray-900">
            Popular Branches
          </h2>
        </motion.div>

        {/* Images Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {branches.map((branch, index) => (
            <motion.div
              key={index}
              className="flex flex-col group cursor-pointer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="overflow-hidden rounded-2xl shadow-sm mb-4 border border-gray-100 group-hover:border-gold-400/30 group-hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)] group-hover:-translate-y-1 transition-all duration-500">
                <img
                  src={branch.img}
                  alt={branch.name}
                  className="w-full h-[350px] object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
                />
              </div>
              <h3 className="text-lg font-playfair font-semibold text-gray-900 group-hover:text-gold-500 transition-colors">
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
