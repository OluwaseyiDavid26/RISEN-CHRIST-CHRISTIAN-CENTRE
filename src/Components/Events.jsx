import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { db } from "../firebase";
import { collection, query, orderBy, getDocs } from "firebase/firestore";

function Events() {
  const [events, setEvents] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  const parseDate = (dateStr) => {
    try {
      const d = new Date(dateStr);
      if (isNaN(d)) {
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
        const q = query(collection(db, "events"), orderBy("createdAt", "desc"));
        const querySnapshot = await getDocs(q);
        const fetchedEvents = querySnapshot.docs.map(doc => {
          const data = doc.data();
          const { month, day } = parseDate(data.date);
          return {
            id: doc.id,
            title: data.title,
            dateObj: data.date,
            displayMonth: month,
            displayDay: day,
            category: "EVENT",
            image: data.image
          };
        });
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
    return (
      <section className="px-6 py-24 bg-cream-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <div className="skeleton h-4 w-32 mx-auto mb-4 rounded-full" />
            <div className="skeleton h-12 w-3/4 mx-auto mb-4 rounded-lg" />
            <div className="skeleton h-6 w-2/3 mx-auto rounded-lg" />
          </div>
          <div className="hidden lg:grid lg:grid-cols-12 gap-12 items-center">
            <div className="col-span-5 space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex gap-6 items-center p-6 rounded-2xl bg-white border border-gray-100">
                  <div className="skeleton w-16 h-14 rounded-lg" />
                  <div className="flex-1 space-y-2">
                    <div className="skeleton h-3 w-16 rounded-full" />
                    <div className="skeleton h-5 w-3/4 rounded-lg" />
                  </div>
                </div>
              ))}
            </div>
            <div className="col-span-7">
              <div className="skeleton w-full h-[600px] rounded-2xl" />
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (events.length === 0) {
    return (
      <section className="px-6 py-24 bg-cream-50 text-center">
        <div className="max-w-xl mx-auto">
          <p className="text-gold-500 text-sm uppercase tracking-widest font-semibold mb-4">Gatherings</p>
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gray-900 mb-4">Upcoming Events</h2>
          <p className="text-gray-500 mb-8">No events scheduled right now. Check back soon for new gatherings.</p>
          <Link to="/events">
            <button className="btn-primary">View All Events</button>
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="px-6 py-24 bg-cream-50 text-gray-900 relative">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold-400/5 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.p
            className="text-gold-500 text-sm uppercase tracking-widest font-semibold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Gatherings
          </motion.p>
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mb-6 text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Upcoming Events
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl text-gray-600 font-light leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Join us for life-changing gatherings designed to strengthen your
            faith, build community, and experience God&rsquo;s presence like never
            before.
          </motion.p>
        </div>

        {/* -------- MOBILE VIEW (STACKED CARDS) -------- */}
        <div className="block lg:hidden">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              className="glass-card p-6 mb-6 relative overflow-hidden group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-gold-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10 flex flex-col gap-4">
                {event.image && (
                  <div className="w-full aspect-video overflow-hidden rounded-xl">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                )}
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-gold-600 font-semibold mb-2">
                      {event.category}
                    </p>
                    <h3 className="text-xl font-playfair font-bold text-gray-900 mb-2">{event.title}</h3>
                    <p className="text-sm text-gray-500 font-medium">{event.dateObj}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* -------- DESKTOP VIEW (HOVER + IMAGE) -------- */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-12 items-center">
          {/* Event List */}
          <div className="col-span-5 space-y-4">
            {events.map((event, index) => (
              <motion.div
                key={event.id}
                className={`group flex items-center justify-between p-6 rounded-2xl cursor-pointer transition-all duration-300 border border-transparent ${
                  activeIndex === index ? "bg-white border-gray-200 shadow-md" : "hover:bg-white/50"
                }`}
                onMouseEnter={() => setActiveIndex(index)}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
              >
                <div className="flex gap-6 items-center">
                  <div className="text-center w-16">
                    <p className={`text-xs font-bold uppercase tracking-widest transition-colors ${activeIndex === index ? "text-gold-600" : "text-gray-400"}`}>
                      {event.displayMonth}
                    </p>
                    <p className={`text-3xl font-playfair font-bold transition-colors ${activeIndex === index ? "text-gray-900" : "text-gray-400"}`}>
                      {event.displayDay}
                    </p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-gray-400 font-semibold mb-1">
                      {event.category}
                    </p>
                    <h3 className={`text-xl font-playfair font-semibold transition-colors ${activeIndex === index ? "text-gray-900" : "text-gray-600 group-hover:text-gray-900"}`}>
                      {event.title}
                    </h3>
                  </div>
                </div>
                <span className={`text-2xl transition-transform duration-300 ${activeIndex === index ? "text-gold-600 translate-x-2" : "text-transparent -translate-x-4 group-hover:text-gray-300 group-hover:translate-x-0"}`}>
                  &#8594;
                </span>
              </motion.div>
            ))}
          </div>

          {/* Dynamic Image */}
          <div className="col-span-7 relative w-full h-[600px] overflow-hidden rounded-2xl shadow-lg border border-gray-200">
            <AnimatePresence mode="wait">
              {events[activeIndex]?.image ? (
                <motion.div
                  key={events[activeIndex].image}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className="absolute inset-0"
                >
                  <img
                    src={events[activeIndex].image}
                    alt={events[activeIndex].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-80" />
                  <div className="absolute bottom-10 left-10 right-10">
                    <p className="text-gold-400 text-sm font-semibold tracking-widest uppercase mb-2 drop-shadow-md">{events[activeIndex].dateObj}</p>
                    <h3 className="text-4xl font-playfair font-bold text-white drop-shadow-lg">{events[activeIndex].title}</h3>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="placeholder"
                  className="absolute inset-0 bg-gray-50 flex flex-col items-center justify-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                  </div>
                  <span className="text-gray-400 font-medium tracking-wide text-sm">Event Details Pending</span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Button */}
        <motion.div
          className="flex justify-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Link to="/events">
            <button className="btn-ghost">View All Events</button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default Events;
