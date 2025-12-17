// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/autoplay";
// import { motion } from "framer-motion";

// import pastor1 from "../assets/pastor-1.png";
// import pastor2 from "../assets/pastor-2.png";
// import pastor3 from "../assets/pastor-3.png";
// import pastor4 from "../assets/pastor-4.png";
// function Hero() {
//   const heroImages = [
//     {
//       img: pastor1,
//       caption: "Pastor E.H James",
//       subcaption: "Mon May 17 2025",
//     },
//     {
//       img: pastor2,
//       caption: "Pastor Y.T Micheal",
//       subcaption: "Sat Jan 25 2025 ",
//     },
//     { img: pastor3, caption: "Sunday Worship", subcaption: "Tue Mar 20 2025" },
//     { img: pastor4, caption: "Music Festival", subcaption: "Wed 13 Feb 2025" },
//   ];

//   return (
//     <section className="text-center py-12 bg-white">
//       <motion.h1
//         className="text-5xl font-playfair font-light text-gray-800 mb-8 mt-8"
//         initial={{ opacity: 0, y: -50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//       >
//         WELCOME TO THE RISEN <br /> CHRIST CHRISTIAN <br /> CENTRE
//       </motion.h1>

//       {/* <h1 className="text-5xl  font-playfair font-light text-gray-800 mb-8 mt-8">
//         WELCOME TO THE RISEN CHRIST CHRISTIAN <br /> CENTRE
//       </h1> */}

//       {/* <h1 className="text-5xl md:text-5xl font-bold font-play text-gray-800 mb-8 mt-8">
//         WELCOME TO THE RISEN CHRIST CHRISTIAN CENTRE
//       </h1> */}
//       <div className="flex justify-center">
//         <button className="flex items-center gap-2 bg-pink-600 text-white p-4 rounded hover:bg-pink-700 transition mt-6 mb-10">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="w-5 h-5"
//             fill="currentColor"
//             viewBox="0 0 24 24"
//           >
//             <path d="M10 16.5V7.5L16 12L10 16.5Z" />
//           </svg>
//           <span>Watch Messages</span>
//         </button>
//       </div>

//       {/* <button className="bg-pink-600 text-white px-6 py-3 rounded hover:bg-pink-700 transition mt-6 mb-10">
//         🎥 Watch Messages
//       </button> */}

//       {/* Swiper Carousel */}
//       <div className="w-full">
//         <Swiper
//           modules={[Autoplay]}
//           spaceBetween={30}
//           slidesPerView="auto"
//           loop={true}
//           speed={5000}
//           autoplay={{
//             delay: 0,
//             disableOnInteraction: false,
//           }}
//           freeMode={true}
//           freeModeMomentum={false}
//           grabCursor={true}
//         >
//           {[...heroImages, ...heroImages].map(
//             ({ img, caption, subcaption }, index) => (
//               <SwiperSlide key={index} style={{ width: "300px" }}>
//                 <div className="flex flex-col items-start">
//                   <img
//                     src={img}
//                     alt={`Hero Slide ${index + 1}`}
//                     className="w-full h-[420px] rounded-t-full object-cover shadow-lg"
//                   />
//                   <p className="mt-2 font-semibold text-black-200">{caption}</p>
//                   <p className="mt-2 text-black-200">{subcaption}</p>
//                 </div>
//               </SwiperSlide>
//             )
//           )}
//         </Swiper>
//       </div>
//     </section>
//   );
// }

// export default Hero;
import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Base URL for Google Drive images (using thumbnail format)
const DRIVE_BASE_URL = "https://drive.google.com/thumbnail?id=";
const DRIVE_SIZE = "&sz=w2000"; // High resolution

const imageUrls = {
  impartation1: `${DRIVE_BASE_URL}1Bs5Fjbllklq4QEioqs1yyWuty7-xB_Gu${DRIVE_SIZE}`,
  impartation2: `${DRIVE_BASE_URL}1skyMpIbImkxiL1oI0GiVTAxrqq_L2tUx${DRIVE_SIZE}`,
  impartation3: `${DRIVE_BASE_URL}1UJdmr6qV8WUA9IsbRT545muMTGRDPNWJ${DRIVE_SIZE}`,
  impartation4: `${DRIVE_BASE_URL}1r_q1cI94diPa78tcuKeeaoxL3yNT4XSC${DRIVE_SIZE}`,
  impartation5: `${DRIVE_BASE_URL}1DM7Mxbu0Upk8NzJNpmU1s7xoP2TKyb3S${DRIVE_SIZE}`,
  impartation6: `${DRIVE_BASE_URL}1s2WrKFju1SfVSURfkSvWeIrEA8_DevYQ${DRIVE_SIZE}`,
};

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: imageUrls.impartation1,
      title: "Impartation Service",
      description:
        "Experience the power of God's presence and receive fresh anointing",
      date: "Every First Sunday",
    },
    {
      image: imageUrls.impartation2,
      title: "Impartation Service",
      description: "A time of spiritual renewal and divine encounter",
      date: "Every First Sunday",
    },
    {
      image: imageUrls.impartation3,
      title: "Dress Down Service",
      description: "Come as you are and worship in comfort and community",
      date: "Every Last Sunday",
    },
    {
      image: imageUrls.impartation4,
      title: "Dress Down Service",
      description: "Casual worship with the same powerful presence",
      date: "Every Last Sunday",
    },
    {
      image: imageUrls.impartation5,
      title: "Communion Sunday",
      description: "Remember His sacrifice and celebrate His love together",
      date: "Second Sunday Monthly",
    },
    {
      image: imageUrls.impartation6,
      title: "Communion Sunday",
      description: "Partake in the body and blood of our Lord Jesus Christ",
      date: "Second Sunday Monthly",
    },
  ];

  // Auto-slide effect - slower timing for 6 slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000); // 7 seconds per slide

    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            {/* Dark Overlay - FIXED */}
            <div className="absolute inset-0 bg-black/50"></div>
          </div>

          {/* Content */}
          <div className="relative h-full flex flex-col items-center justify-center text-center px-4 text-white">
            <h1 className="text-5xl md:text-7xl font-playfair font-bold mb-4 animate-fadeIn">
              WELCOME TO THE RISEN CHRIST CHRISTIAN CENTRE
            </h1>

            <div className="mt-8 space-y-4">
              <h2 className="text-3xl md:text-5xl font-semibold">
                {slide.title}
              </h2>
              <p className="text-xl md:text-2xl max-w-2xl mx-auto">
                {slide.description}
              </p>
              <p className="text-lg md:text-xl text-pink-300">{slide.date}</p>
            </div>

            <button className="mt-10 flex items-center gap-2 bg-pink-600 text-white px-8 py-4 rounded-lg hover:bg-pink-700 transition-all transform hover:scale-105">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M10 16.5V7.5L16 12L10 16.5Z" />
              </svg>
              <span className="text-lg font-semibold">Watch Messages</span>
            </button>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 p-2 bg-black/30 text-white rounded-full hover:bg-black/50 transition z-10"
      >
        <ChevronLeft size={32} />
      </button>

      <button
        onClick={goToNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 p-2 bg-black/30 text-white rounded-full hover:bg-black/50 transition z-10"
      >
        <ChevronRight size={32} />
      </button>

      {/* Slide Indicators (Dots) */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              index === currentSlide
                ? "bg-pink-600"
                : "bg-white/50 hover:bg-white"
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
}

export default Hero;
