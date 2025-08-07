import { motion } from "framer-motion";
import image10 from "../assets/image-10.png";
import image11 from "../assets/image-11.png";

function Hero2() {
  return (
    <section className="flex flex-col lg:flex-row items-start gap-10 justify-between px-6 py-10">
      {/* Left Text Section (No delay) */}
      <motion.div
        className="w-full lg:w-1/3"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Who Are We</h2>
        <p className="text-base text-gray-600 leading-relaxed mb-6">
          At Risen Christ Christian Centre, we are a faith-driven <br />
          community committed to spreading the love and truth <br />
          of Jesus Christ. Our mission is to nurture believers, <br />
          empower leaders, and impact lives through the <br />
          transforming power of God’s Word.
        </p>
        <button className="border border-gray-800 px-4 py-2 rounded hover:bg-gray-600 hover:text-white-200 transition">
          Read About Us
        </button>
      </motion.div>

      {/* Right Image Section */}
      <div className="w-full flex flex-col sm:flex-row gap-4">
        {/* Image 1 - Delay 1.5s */}
        <motion.div
          className="flex-1 flex-col mb-4 mt-4 items-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <img
            src={image10}
            alt="Our Vision"
            className="w-full h-[620px] object-cover rounded-lg shadow-md"
          />
          <h3 className="text-xl font-semibold text-gray-800 mt-2">
            Our Vision
          </h3>
          <p className="text-base mt-4 mb-4">
            Raising a generation of believers who walk in faith, demonstrate
            God’s love, and bring light to the world.
          </p>
          <button className="border border-gray-800 px-4 py-2 rounded hover:bg-gray-600 hover:text-white-200 transition">
            Learn More
          </button>
        </motion.div>

        {/* Image 2 - Delay 2.5s (1.5s + 1s) */}
        <motion.div
          className="flex-1 flex-col mt-4 mb-4 items-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <img
            src={image11}
            alt="Our Leadership"
            className="w-full h-[620px] object-cover rounded-lg shadow-md"
          />
          <h3 className="text-xl font-semibold text-gray-800 mt-2">
            Our Leadership
          </h3>
          <p className="text-base mt-4 mb-4">
            Pastor Raji Babatunde and our ministers guide and teach with
            passion, helping you grow in your walk with Christ.
          </p>
          <button className="border border-gray-800 px-4 py-2 rounded hover:bg-gray-600 hover:text-white-200 transition">
            Learn More
          </button>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero2;
