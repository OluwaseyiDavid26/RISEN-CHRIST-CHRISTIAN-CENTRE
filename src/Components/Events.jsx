import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import events1 from "../assets/events-1.png";
import events2 from "../assets/events-2.png";
import events3 from "../assets/events-3.png";
import events4 from "../assets/events-4.png";
import events5 from "../assets/events-5.png";

function Events() {
  const events = [
    {
      date: "MAR 25",
      title: "Sunday Worship Service",
      category: "WORSHIP",
      image: events1,
    },
    {
      date: "MAR 25",
      title: "Empowerment Conference",
      category: "CONFERENCE",
      image: events2,
    },
    {
      date: "MAR 25",
      title: "Community Music Festival",
      category: "MUSIC",
      image: events3,
    },
    {
      date: "MAR 25",
      title: "Creative Arts Workshop",
      category: "DAY",
      image: events4,
    },
    {
      date: "MAR 25",
      title: "Summer Spiritual Retreat",
      category: "DAY",
      image: events5,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="px-6 py-12 bg-[#2E2E2E] text-white">
      <div className="w-full">
        {/* Header */}
        <motion.h2
          className="text-4xl font-bold mb-2 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Events
        </motion.h2>

        <motion.p
          className="text-center text-2xl text-gray-300 mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
        >
          Join us for life-changing gatherings designed to strengthen your
          faith, build community, and experience God’s presence like never
          before.
        </motion.p>

        {/* -------- MOBILE VIEW (STACKED BABY CARDS) -------- */}
        <div className="block md:hidden">
          {events.map((event, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-4 rounded-lg mb-6 text-center shadow-md"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <p className="text-xs uppercase text-gray-400 mb-1">
                {event.category}
              </p>
              <h3 className="text-lg font-semibold mb-3">{event.title}</h3>
              <img
                src={event.image}
                alt={event.title}
                className="w-full rounded-lg mb-3"
              />
              <p className="text-sm text-gray-400">{event.date}</p>
            </motion.div>
          ))}
        </div>

        {/* -------- DESKTOP VIEW (HOVER + IMAGE) -------- */}
        <div className="hidden md:grid md:grid-cols-2 gap-8">
          {/* Event List */}
          <div className="space-y-4">
            {events.map((event, index) => (
              <motion.div
                key={index}
                className={`flex justify-between items-center hover:bg-[#ff0e40] p-4 border-b border-gray-700 cursor-pointer ${
                  activeIndex === index ? "bg-gray-800" : ""
                }`}
                onMouseEnter={() => setActiveIndex(index)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.15,
                  ease: "easeOut",
                }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <div className="flex gap-4">
                  <div className="text-center">
                    <p className="text-sm text-gray-400">
                      {event.date.split(" ")[0]}
                    </p>
                    <p className="text-xl font-bold">
                      {event.date.split(" ")[1]}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs uppercase text-gray-400">
                      {event.category}
                    </p>
                    <h3 className="text-lg font-semibold">{event.title}</h3>
                  </div>
                </div>
                <span className="text-xl">&#8594;</span>
              </motion.div>
            ))}
          </div>

          {/* Dynamic Image */}
          <AnimatePresence mode="wait">
            <motion.img
              key={events[activeIndex].image}
              src={events[activeIndex].image}
              alt={events[activeIndex].title}
              className="w-full h-[500px] object-cover rounded-lg shadow-lg"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5 }}
            />
          </AnimatePresence>
        </div>

        {/* Button */}
        <motion.div
          className="flex justify-center mt-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Link to="/events">
            <button className="border bg-[#ff0e40] border-gray-800 px-6 py-3 rounded hover:bg-gray-600 hover:text-white transition">
              View All Events
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default Events;
