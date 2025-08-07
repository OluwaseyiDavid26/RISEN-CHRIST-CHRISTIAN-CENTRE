import { motion } from "framer-motion";
import image10 from "../assets/image-10.png";

function Experience() {
  return (
    <section className="px-6 py-12 bg-gray-50">
      <div className="w-full">
        {/* Title + Paragraph */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-left mb-8"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Experience God’s Presence from Anywhere
          </h2>
          <p className="text-lg text-gray-600 mb-6 max-w-xl">
            Can’t make it in person? Join us online and be part of our worship,
            teachings, and special events from wherever you are. Stay connected
            and grow in faith with our live-streamed services.
          </p>
        </motion.div>

        {/* Image */}
        <motion.img
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          src={image10}
          alt="Livestream"
          className="w-full max-w-3xl h-[450px] object-cover rounded-lg shadow-md mb-6"
        />

        {/* Watch Live Now Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.8 }}
        >
          <p className="text-xl font-semibold text-gray-800">Watch Live Now</p>
          <p className="text-gray-600">
            8:45am, 10:30am, <br /> 12:15pm, & 4:00pm
          </p>
        </motion.div>

        {/* Button */}
        <motion.div
          className="flex justify-center mt-10"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.2, duration: 0.8 }}
        >
          <button className="bg-pink-600 text-white px-6 py-3 rounded hover:bg-pink-700 transition">
            Join Livestream
          </button>
        </motion.div>
      </div>
    </section>
  );
}

export default Experience;
