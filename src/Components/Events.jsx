import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { db } from "../firebase"; // Import db
import { collection, query, orderBy, getDocs } from "firebase/firestore";

function Events() {
  const [events, setEvents] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  // Helper to parse date string "March 15, 2025" -> { month: "MAR", day: "15" }
  const parseDate = (dateStr) => {
    try {
      const d = new Date(dateStr);
      if (isNaN(d)) {
        // Fallback if Date parsing fails or for formats like "Every Sunday"
        return { month: "EVENT", day: "" };
      }
      const month = d.toLocaleString('default', { month: 'short' }).toUpperCase();
      const day = d.getDate();
      return { month, day };
    } catch (e) {
      return { month: "EVENT", day: "" };
    }
  };

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        // Fetch specific fields? No, just get all and map
        // Ordering by 'createdAt' desc ensures new events replace previous ones in the sense of being top of list? 
        // Or user said "ascending format" -> likely by date? 
        // Since date is string, sorting by date is hard. 
        // Let's sort by createdAt desc (Newest created first) as "New event should replace previous" usually implies LIFO or standard blog feed style.
        // Wait, "possibly assending format" usually means Date Ascending (Upcoming -> Future).
        // Getting them by createdAt for now, we can sort client side if needed.

        const q = query(collection(db, "events"), orderBy("createdAt", "desc"));
        const querySnapshot = await getDocs(q);
        const fetchedEvents = querySnapshot.docs.map(doc => {
          const data = doc.data();
          const { month, day } = parseDate(data.date);
          return {
            id: doc.id,
            title: data.title,
            dateObj: data.date, // Keep original string
            displayMonth: month,
            displayDay: day,
            category: "EVENT", // Default category as we don't have it in DB yet
            image: data.image
          };
        });

        // If "Ascending format" means Date Ascending (Upcoming), we should try to sort.
        // But since date is free text, safe to stick with createdAt or just take them as is.
        // Let's stick to the fetched order (Newest created first) which usually satisfies "replace previous".

        setEvents(fetchedEvents);
      } catch (error) {
        console.error("Error fetching events:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  if (loading) {
    return <div className="text-center py-20 text-white">Loading events...</div>;
  }

  // If no events, hide section or show message? User didn't specify, but let's just render safe.
  if (events.length === 0) {
    return null; // Or return empty component
  }

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
              key={event.id}
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
              {event.image && (
                <div className="w-full aspect-video overflow-hidden rounded-lg mb-3">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <p className="text-sm text-gray-400">{event.dateObj}</p>
            </motion.div>
          ))}
        </div>

        {/* -------- DESKTOP VIEW (HOVER + IMAGE) -------- */}
        <div className="hidden md:grid md:grid-cols-2 gap-8">
          {/* Event List */}
          <div className="space-y-4">
            {events.map((event, index) => (
              <motion.div
                key={event.id}
                className={`flex justify-between items-center hover:bg-[#ff0e40] p-4 border-b border-gray-700 cursor-pointer ${activeIndex === index ? "bg-gray-800" : ""
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
                  <div className="text-center w-16">
                    <p className="text-sm text-gray-400">
                      {event.displayMonth}
                    </p>
                    <p className="text-xl font-bold">
                      {event.displayDay}
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
          <div className="relative w-full h-[500px] overflow-hidden rounded-lg shadow-lg">
            <AnimatePresence mode="wait">
              {events[activeIndex]?.image ? (
                <motion.img
                  key={events[activeIndex].image}
                  src={events[activeIndex].image}
                  alt={events[activeIndex].title}
                  className="absolute inset-0 w-full h-full object-cover"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                />
              ) : (
                <motion.div
                  key="placeholder"
                  className="absolute inset-0 bg-gray-700 flex items-center justify-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <span className="text-gray-500">No Image Available</span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
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
