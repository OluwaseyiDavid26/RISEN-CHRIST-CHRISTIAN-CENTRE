import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { db } from "../firebase";
import { collection, getDocs, query, orderBy } from "firebase/firestore";

function UpcomingEvents() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const q = query(collection(db, "events"));
        const querySnapshot = await getDocs(q);
        const eventsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setEvents(eventsData);
      } catch (error) {
        console.error("Error fetching events:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  if (loading) {
    return (
      <section className="w-full py-16 px-4 mb-8 text-center">
        <div className="text-xl">Loading Events...</div>
      </section>
    );
  }

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
        {events.length === 0 ? (
          <div className="col-span-full text-center text-gray-500">No upcoming events found.</div>
        ) : (
          events.map((event, index) => (
            <motion.div
              key={event.id}
              className="flex flex-col h-full bg-white rounded-xl shadow-md overflow-hidden"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-full aspect-[4/3] overflow-hidden bg-gray-100">
                <img
                  src={event.image || "https://via.placeholder.com/400x350?text=No+Image"}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-4 flex flex-col flex-1">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold uppercase text-left">
                    {event.title}
                  </h3>
                  <p className="text-sm font-medium text-gray-800 text-left mt-2">
                    {event.date}
                  </p>
                  <div
                    className="text-sm text-gray-600 mt-4 text-left"
                    dangerouslySetInnerHTML={{ __html: event.description }}
                  />
                </div>
              </div>
            </motion.div>
          ))
        )}
      </div>
    </section>
  );
}

export default UpcomingEvents;
