import React from "react";
import { motion } from "framer-motion";

import events1 from "../assets/events-1.png";
import events2 from "../assets/events-2.png";
import events4 from "../assets/events-4.png";
import events3 from "../assets/events-3.png";
import events5 from "../assets/events-1.png";

const events = [
  {
    title: "PRAYER",
    date: "March 15, 2025 – Prayer & Prophetic Night",
    description:
      "A night of intense prayer, prophetic <br/> Declarations, And Divine Breakthroughs.",
    image: events1,
  },
  {
    title: "CONFERENCE",
    date: "April 5, 2025 – Kingdom Builders Conference",
    description:
      "A powerful gathering of Believers to Equip <br/> And Empower Kingdom Ambassadors.",
    image: events2,
  },
  {
    title: "RETREAT",
    date: "April 19, 2025 – Youth & Singles Retreat",
    description:
      "A time of refreshing, networking <br/> And spiritual growth for young people.",
    image: events4,
  },
  {
    title: "HEALING",
    date: "May 10, 2025 – Healing & Deliverance Service",
    description:
      "Experience the supernatural power of God for healing,  restoration, and deliverance.",
    image: events4,
  },
  {
    title: "SPECIAL SERVICES",
    date: "June 1, 2025 – Pentecost Celebration Service",
    description:
      "Commemorating the outpouring of the Holy <br/> Spirit with worship and impartation",
    image: events3,
  },
  {
    title: "THANKSGIVING",
    date: "July 20, 2025 – Annual Thanksgiving",
    description:
      "A time to reflect, give thanks <br/> And celebrate God’s faithfulness.",
    image: events5,
  },
];

function UpcomingEvents() {
  return (
    <section className="w-full py-16 px-4 mb-8">
      {/* Animated Heading */}
      <motion.h2
        className="text-6xl font-medium text-center mb-12"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Upcoming Events
      </motion.h2>

      {/* Event Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 w-full px-4 sm:px-6 lg:px-8">
        {events.map((event, index) => (
          <motion.div
            key={index}
            className=""
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-[350px] object-cover rounded-xl shadow-md"
            />
            <h3 className="text-lg font-semibold mt-6 uppercase text-left">
              {event.title}
            </h3>
            <p className="text-sm font-medium text-gray-800 text-left">
              {event.date}
            </p>
            <p
              className="text-sm text-gray-600 mt-4 text-left"
              dangerouslySetInnerHTML={{ __html: event.description }}
            />
            {/* <p className="text-sm text-gray-600 mt-1 text-left">
              dangerouslySetInnerHTML={{ __html: event.description }}
            </p> */}
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default UpcomingEvents;
