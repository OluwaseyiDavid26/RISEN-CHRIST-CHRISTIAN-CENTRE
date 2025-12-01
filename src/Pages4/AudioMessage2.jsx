// import React, { useState, useRef } from "react";
// import { Download, Play, Pause } from "lucide-react";

// // Import your images here
// import image1 from "../assets/article-img1.avif";
// import image2 from "../assets/article-img1.avif";
// import image3 from "../assets/article-img1.avif";
// import image4 from "../assets/article-img1.avif";
// import image5 from "../assets/article-img1.avif";
// import image6 from "../assets/article-img1.avif";

// const AudioMessage2 = () => {
//   const [playingIndex, setPlayingIndex] = useState(null);
//   const [currentTime, setCurrentTime] = useState({});
//   const [duration, setDuration] = useState({});
//   const audioRefs = useRef([]);

//   // Sample audio messages data - replace with your actual data and imported images
//   const audioMessages = [
//     {
//       id: 1,
//       title: "Walking In Divine Purpose",
//       speaker: "Pastor John Emmanuel",
//       date: "November 10th, 2023",
//       image: image1,
//       audioUrl: "/path-to-audio1.mp3",
//     },
//     {
//       id: 2,
//       title: "The Joy of Salvation",
//       speaker: "Rev. Grace Okonkwo",
//       date: "November 3rd, 2023",
//       image: image2, // Replace with your imported image
//       audioUrl: "/path-to-audio2.mp3",
//     },
//     {
//       id: 3,
//       title: "Living by Faith",
//       speaker: "Apostle Samuel Okechukwu",
//       date: "October 27th, 2023",
//       image: image3, // Replace with your imported image
//       audioUrl: "/path-to-audio3.mp3",
//     },
//     {
//       id: 4,
//       title: "The Power of Prayer",
//       speaker: "Pastor David Adebayo",
//       date: "October 20th, 2023",
//       image: image4, // Replace with your imported image
//       audioUrl: "/path-to-audio4.mp3",
//     },
//     {
//       id: 5,
//       title: "God's Unfailing Love",
//       speaker: "Rev. Grace Okonkwo",
//       date: "October 13th, 2023",
//       image: image5, // Replace with your imported image
//       audioUrl: "/path-to-audio5.mp3",
//     },
//     {
//       id: 6,
//       title: "Victory Through Christ",
//       speaker: "Apostle Samuel Okechukwu",
//       date: "October 6th, 2023",
//       image: image6, // Replace with your imported image
//       audioUrl: "/path-to-audio6.mp3",
//     },
//   ];

//   const handlePlayPause = (index) => {
//     const audioElement = audioRefs.current[index];

//     if (playingIndex === index) {
//       audioElement.pause();
//       setPlayingIndex(null);
//     } else {
//       // Pause any currently playing audio
//       if (playingIndex !== null) {
//         audioRefs.current[playingIndex].pause();
//       }
//       audioElement.play();
//       setPlayingIndex(index);
//     }
//   };

//   const handleTimeUpdate = (index) => {
//     const audioElement = audioRefs.current[index];
//     setCurrentTime((prev) => ({
//       ...prev,
//       [index]: audioElement.currentTime,
//     }));
//   };

//   const handleLoadedMetadata = (index) => {
//     const audioElement = audioRefs.current[index];
//     setDuration((prev) => ({
//       ...prev,
//       [index]: audioElement.duration,
//     }));
//   };

//   const handleSeek = (index, e) => {
//     const audioElement = audioRefs.current[index];
//     const progressBar = e.currentTarget;
//     const rect = progressBar.getBoundingClientRect();
//     const clickPosition = e.clientX - rect.left;
//     const progressBarWidth = progressBar.offsetWidth;
//     const newTime = (clickPosition / progressBarWidth) * duration[index];
//     audioElement.currentTime = newTime;
//   };

//   const formatTime = (time) => {
//     if (isNaN(time)) return "0:00";
//     const minutes = Math.floor(time / 60);
//     const seconds = Math.floor(time % 60);
//     return `${minutes}:${seconds.toString().padStart(2, "0")}`;
//   };

//   const handleDownload = (audioUrl, title) => {
//     const link = document.createElement("a");
//     link.href = audioUrl;
//     link.download = `${title}.mp3`;
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 py-16 px-5">
//       {/* Header */}
//       <header className="text-center max-w-4xl mx-auto mb-16">
//         <h1 className="text-5xl font-light tracking-widest text-gray-800 mb-5">
//           AUDIO MESSAGES
//         </h1>
//         <p className="text-lg text-gray-600 leading-relaxed">
//           Listen to inspiring sermons and spirit-filled messages from our lead
//           pastor and guest ministers.
//         </p>
//       </header>

//       {/* Audio Cards Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-5">
//         {audioMessages.map((message, index) => (
//           <div
//             key={message.id}
//             className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
//           >
//             {/* Image with Overlay */}
//             <div className="relative h-64 overflow-hidden bg-gradient-to-br from-purple-600 to-indigo-600 group">
//               <img
//                 src={message.image}
//                 alt={message.title}
//                 className="w-full h-full object-cover"
//               />
//               <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                 <button
//                   onClick={() => handlePlayPause(index)}
//                   className="bg-white text-purple-600 w-20 h-20 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200 shadow-lg"
//                 >
//                   {playingIndex === index ? (
//                     <Pause className="w-8 h-8" />
//                   ) : (
//                     <Play className="w-8 h-8 ml-1" />
//                   )}
//                 </button>
//               </div>
//             </div>

//             {/* Content */}
//             <div className="p-6">
//               <h3 className="text-xl font-semibold text-gray-800 mb-2 leading-tight">
//                 {message.title}
//               </h3>
//               <p className="text-purple-600 font-medium mb-1">
//                 {message.speaker}
//               </p>
//               <p className="text-sm text-gray-500 mb-5">{message.date}</p>

//               {/* Audio Player */}
//               <div className="space-y-4">
//                 <audio
//                   ref={(el) => (audioRefs.current[index] = el)}
//                   src={message.audioUrl}
//                   onTimeUpdate={() => handleTimeUpdate(index)}
//                   onLoadedMetadata={() => handleLoadedMetadata(index)}
//                   onEnded={() => setPlayingIndex(null)}
//                 />

//                 {/* Progress Bar */}
//                 <div
//                   onClick={(e) => handleSeek(index, e)}
//                   className="w-full h-2 bg-gray-200 rounded-full cursor-pointer overflow-hidden"
//                 >
//                   <div
//                     className="h-full bg-gradient-to-r from-purple-600 to-indigo-600 transition-all duration-100"
//                     style={{
//                       width: `${
//                         ((currentTime[index] || 0) / (duration[index] || 1)) *
//                         100
//                       }%`,
//                     }}
//                   />
//                 </div>

//                 {/* Controls */}
//                 <div className="flex justify-between items-center">
//                   <span className="text-sm text-gray-600 font-medium">
//                     {formatTime(currentTime[index] || 0)} /{" "}
//                     {formatTime(duration[index] || 0)}
//                   </span>

//                   <button
//                     onClick={() =>
//                       handleDownload(message.audioUrl, message.title)
//                     }
//                     className="flex items-center gap-2 border border-purple-600 text-purple-600 px-4 py-2 rounded-lg text-sm font-medium hover:bg-purple-600 hover:text-white transition-all duration-300"
//                   >
//                     <Download className="w-5 h-5" />
//                     Download
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AudioMessage2;

import React, { useState, useRef } from "react";
import { Download, Play, Pause, Search } from "lucide-react";

// Import your images here
import image1 from "../assets/article-img1.avif";
import image2 from "../assets/article-img1.avif";
import image3 from "../assets/article-img1.avif";
import image4 from "../assets/article-img1.avif";
import image5 from "../assets/article-img1.avif";
import image6 from "../assets/article-img1.avif";

const AudioMessage2 = () => {
  const [playingIndex, setPlayingIndex] = useState(null);
  const [currentTime, setCurrentTime] = useState({});
  const [duration, setDuration] = useState({});
  const [searchQuery, setSearchQuery] = useState("");
  const audioRefs = useRef([]);

  // Sample audio messages data - replace with your actual data and imported images
  const audioMessages = [
    {
      id: 1,
      title: "Faith Over Fear: Trusting God In Every Season",
      speaker: "David Adebayo",
      image: image1,
      audioUrl: "/path-to-audio1.mp3",
    },
    {
      id: 2,
      title: "The Power Of The Holy Spirit In Daily Life",
      speaker: "Rev. Grace Okonkwo",
      image: image2,
      audioUrl: "/path-to-audio2.mp3",
    },
    {
      id: 3,
      title: "Breaking Strongholds Through Prayer And Fasting",
      speaker: "Apostle Samuel Okechukwu",
      image: image3,
      audioUrl: "/path-to-audio3.mp3",
    },
    {
      id: 4,
      title: "Walking In Divine Purpose",
      speaker: "Pastor John Emmanuel",
      image: image4,
      audioUrl: "/path-to-audio4.mp3",
    },
    {
      id: 5,
      title: "The Joy of Salvation",
      speaker: "Rev. Grace Okonkwo",
      image: image5,
      audioUrl: "/path-to-audio5.mp3",
    },
    {
      id: 6,
      title: "Victory Through Christ",
      speaker: "Apostle Samuel Okechukwu",
      image: image6,
      audioUrl: "/path-to-audio6.mp3",
    },
  ];

  const handlePlayPause = (index) => {
    const audioElement = audioRefs.current[index];

    if (playingIndex === index) {
      audioElement.pause();
      setPlayingIndex(null);
    } else {
      if (playingIndex !== null) {
        audioRefs.current[playingIndex].pause();
      }
      audioElement.play();
      setPlayingIndex(index);
    }
  };

  const handleTimeUpdate = (index) => {
    const audioElement = audioRefs.current[index];
    setCurrentTime((prev) => ({
      ...prev,
      [index]: audioElement.currentTime,
    }));
  };

  const handleLoadedMetadata = (index) => {
    const audioElement = audioRefs.current[index];
    setDuration((prev) => ({
      ...prev,
      [index]: audioElement.duration,
    }));
  };

  const handleSeek = (index, e) => {
    const audioElement = audioRefs.current[index];
    const progressBar = e.currentTarget;
    const rect = progressBar.getBoundingClientRect();
    const clickPosition = e.clientX - rect.left;
    const progressBarWidth = progressBar.offsetWidth;
    const newTime = (clickPosition / progressBarWidth) * duration[index];
    audioElement.currentTime = newTime;
  };

  const formatTime = (time) => {
    if (isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  const handleDownload = (audioUrl, title) => {
    const link = document.createElement("a");
    link.href = audioUrl;
    link.download = `${title}.mp3`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const filteredMessages = audioMessages.filter(
    (message) =>
      message.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      message.speaker.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-5">
      {/* Header */}
      <header className="text-center max-w-4xl mx-auto mb-10">
        <h1 className="text-4xl md:text-5xl font-light tracking-[0.3em] text-gray-800 mb-6">
          AUDIO MESSAGES
        </h1>
        <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-8">
          Listen to inspiring sermons and spirit-filled messages from our
          <br className="hidden md:block" />
          lead pastor and guest ministers.
        </p>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
          />
        </div>
      </header>

      {/* Audio Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {filteredMessages.map((message, index) => (
          <div key={message.id} className="bg-white overflow-hidden shadow-md">
            {/* Image with Audio Player Overlay at Bottom */}
            <div className="relative h-96 bg-gray-200">
              <img
                src={message.image}
                alt={message.title}
                className="w-full h-full object-cover"
              />

              {/* Play Button in Center */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  onClick={() => handlePlayPause(index)}
                  className="bg-white/90 text-gray-800 w-20 h-20 flex items-center justify-center hover:bg-white transition-colors border-4 border-white"
                >
                  {playingIndex === index ? (
                    <Pause className="w-10 h-10" />
                  ) : (
                    <Play className="w-10 h-10 ml-1" />
                  )}
                </button>
              </div>

              {/* Audio Player Bar at Bottom - Overlaying the Image */}
              <div className="absolute bottom-0 left-0 right-0 bg-white/95 px-4 py-3">
                <audio
                  ref={(el) => (audioRefs.current[index] = el)}
                  src={message.audioUrl}
                  onTimeUpdate={() => handleTimeUpdate(index)}
                  onLoadedMetadata={() => handleLoadedMetadata(index)}
                  onEnded={() => setPlayingIndex(null)}
                />

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => handlePlayPause(index)}
                    className="text-gray-800 flex-shrink-0"
                  >
                    {playingIndex === index ? (
                      <Pause className="w-6 h-6" />
                    ) : (
                      <Play className="w-6 h-6" />
                    )}
                  </button>

                  <div className="flex-1">
                    <div className="text-xs text-gray-600 mb-1 font-medium">
                      {formatTime(currentTime[index] || 0)} /{" "}
                      {formatTime(duration[index] || 0)}
                    </div>
                    <div
                      onClick={(e) => handleSeek(index, e)}
                      className="w-full h-1.5 bg-gray-300 cursor-pointer rounded-full overflow-hidden"
                    >
                      <div
                        className="h-full bg-gray-800 transition-all duration-100"
                        style={{
                          width: `${
                            ((currentTime[index] || 0) /
                              (duration[index] || 1)) *
                            100
                          }%`,
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card Content Below Image */}
            <div className="p-5 bg-white">
              <h3 className="text-lg font-semibold text-gray-800 mb-2 leading-tight">
                {message.title}
              </h3>
              <p className="text-sm text-gray-600 mb-5">{message.speaker}</p>

              {/* Download Button */}
              <button
                onClick={() => handleDownload(message.audioUrl, message.title)}
                className="flex items-center justify-center gap-2 w-full border border-gray-800 text-gray-800 py-3 text-sm font-medium hover:bg-gray-800 hover:text-white transition-colors"
              >
                Download
                <Download className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AudioMessage2;
