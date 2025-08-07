import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import { motion } from "framer-motion";

import pastor1 from "../assets/pastor-1.png";
import pastor2 from "../assets/pastor-2.png";
import pastor3 from "../assets/pastor-3.png";
import pastor4 from "../assets/pastor-4.png";
function Hero() {
  const heroImages = [
    {
      img: pastor1,
      caption: "Pastor E.H James",
      subcaption: "Mon May 17 2025",
    },
    {
      img: pastor2,
      caption: "Pastor Y.T Micheal",
      subcaption: "Sat Jan 25 2025 ",
    },
    { img: pastor3, caption: "Sunday Worship", subcaption: "Tue Mar 20 2025" },
    { img: pastor4, caption: "Music Festival", subcaption: "Wed 13 Feb 2025" },
  ];

  return (
    <section className="text-center py-12 bg-white">
      <motion.h1
        className="text-5xl font-playfair font-light text-gray-800 mb-8 mt-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        WELCOME TO THE RISEN <br /> CHRIST CHRISTIAN <br /> CENTRE
      </motion.h1>

      {/* <h1 className="text-5xl  font-playfair font-light text-gray-800 mb-8 mt-8">
        WELCOME TO THE RISEN CHRIST CHRISTIAN <br /> CENTRE
      </h1> */}

      {/* <h1 className="text-5xl md:text-5xl font-bold font-play text-gray-800 mb-8 mt-8">
        WELCOME TO THE RISEN CHRIST CHRISTIAN CENTRE
      </h1> */}
      <div className="flex justify-center">
        <button className="flex items-center gap-2 bg-pink-600 text-white p-4 rounded hover:bg-pink-700 transition mt-6 mb-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M10 16.5V7.5L16 12L10 16.5Z" />
          </svg>
          <span>Watch Messages</span>
        </button>
      </div>

      {/* <button className="bg-pink-600 text-white px-6 py-3 rounded hover:bg-pink-700 transition mt-6 mb-10">
        🎥 Watch Messages
      </button> */}

      {/* Swiper Carousel */}
      <div className="w-full">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView="auto"
          loop={true}
          speed={5000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          freeMode={true}
          freeModeMomentum={false}
          grabCursor={true}
        >
          {[...heroImages, ...heroImages].map(
            ({ img, caption, subcaption }, index) => (
              <SwiperSlide key={index} style={{ width: "300px" }}>
                <div className="flex flex-col items-start">
                  <img
                    src={img}
                    alt={`Hero Slide ${index + 1}`}
                    className="w-full h-[420px] rounded-t-full object-cover shadow-lg"
                  />
                  <p className="mt-2 font-semibold text-black-200">{caption}</p>
                  <p className="mt-2 text-black-200">{subcaption}</p>
                </div>
              </SwiperSlide>
            )
          )}
        </Swiper>
      </div>
    </section>
  );
}

export default Hero;
