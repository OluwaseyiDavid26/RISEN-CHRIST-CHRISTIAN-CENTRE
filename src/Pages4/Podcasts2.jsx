// import React, { useState, useRef } from "react";
// import { Download, Play, Pause, Search } from "lucide-react";

// // Google Drive Image URLs
// const DRIVE_BASE_URL = "https://lh3.googleusercontent.com/d/";

// const imageUrls = {
//   image1: `${DRIVE_BASE_URL}1Bs5Fjbllklq4QEioqs1yyWuty7-xB_Gu`,
//   image2: `${DRIVE_BASE_URL}1Bs5Fjbllklq4QEioqs1yyWuty7-xB_Gu`,
//   image3: `${DRIVE_BASE_URL}1Bs5Fjbllklq4QEioqs1yyWuty7-xB_Gu`,
//   image4: `${DRIVE_BASE_URL}1Bs5Fjbllklq4QEioqs1yyWuty7-xB_Gu`,
//   image5: `${DRIVE_BASE_URL}1Bs5Fjbllklq4QEioqs1yyWuty7-xB_Gu`,
//   image6: `${DRIVE_BASE_URL}1Bs5Fjbllklq4QEioqs1yyWuty7-xB_Gu`,
// };

// // Placeholder audio URL for testing
// const placeholderAudio =
//   "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3";

// const Podcasts2 = () => {
//   const [playingIndex, setPlayingIndex] = useState(null);
//   const [currentTime, setCurrentTime] = useState({});
//   const [duration, setDuration] = useState({});
//   const [searchQuery, setSearchQuery] = useState("");
//   const audioRefs = useRef([]);

//   // Podcasts data
//   const podcasts = [
//     {
//       id: 1,
//       title: "Faith In Action: Living Out What You Believe",
//       host: "Hosted By Pastor David Adebayo",
//       image: imageUrls.image1,
//       audioUrl: placeholderAudio,
//     },
//     {
//       id: 2,
//       title: "Spiritual Growth: How To Mature As A Christian",
//       host: "With Rev. Grace Okonkwo",
//       image: imageUrls.image2,
//       audioUrl: placeholderAudio,
//     },
//     {
//       id: 3,
//       title: "Understanding God's Will For Your Life",
//       host: "Featuring Apostle Samuel Okechukwu",
//       image: imageUrls.image3,
//       audioUrl: placeholderAudio,
//     },
//     {
//       id: 4,
//       title: "Prayer And Fasting: Keys To Breakthrough",
//       host: "Hosted By Pastor David Adebayo",
//       image: imageUrls.image4,
//       audioUrl: placeholderAudio,
//     },
//     {
//       id: 5,
//       title: "The Power Of Worship In Daily Life",
//       host: "With Rev. Grace Okonkwo",
//       image: imageUrls.image5,
//       audioUrl: placeholderAudio,
//     },
//     {
//       id: 6,
//       title: "Building Strong Christian Foundations",
//       host: "Featuring Apostle Samuel Okechukwu",
//       image: imageUrls.image6,
//       audioUrl: placeholderAudio,
//     },
//   ];

//   const handlePlayPause = (index) => {
//     const audioElement = audioRefs.current[index];

//     if (!audioElement) return;

//     if (playingIndex === index) {
//       audioElement.pause();
//       setPlayingIndex(null);
//     } else {
//       if (playingIndex !== null && audioRefs.current[playingIndex]) {
//         audioRefs.current[playingIndex].pause();
//       }
//       audioElement.play();
//       setPlayingIndex(index);
//     }
//   };

//   const handleTimeUpdate = (index) => {
//     const audioElement = audioRefs.current[index];
//     if (audioElement) {
//       setCurrentTime((prev) => ({
//         ...prev,
//         [index]: audioElement.currentTime,
//       }));
//     }
//   };

//   const handleLoadedMetadata = (index) => {
//     const audioElement = audioRefs.current[index];
//     if (audioElement) {
//       setDuration((prev) => ({
//         ...prev,
//         [index]: audioElement.duration,
//       }));
//     }
//   };

//   const handleSeek = (index, e) => {
//     const audioElement = audioRefs.current[index];
//     if (!audioElement) return;

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
//     link.target = "_blank";
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   const filteredPodcasts = podcasts.filter(
//     (podcast) =>
//       podcast.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       podcast.host.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   return (
//     <div className="min-h-screen bg-gray-50 py-12 px-5">
//       {/* Header */}
//       <header className="text-center max-w-4xl mx-auto mb-10">
//         <h1 className="text-4xl md:text-5xl font-light tracking-[0.3em] text-gray-800 mb-6">
//           PODCASTS
//         </h1>
//         <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-8">
//           Join us as we dive deep into biblical truths, personal testimonies,
//           <br className="hidden md:block" />
//           and practical Christian living.
//         </p>

//         {/* Search Bar */}
//         <div className="max-w-2xl mx-auto relative">
//           <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
//           <input
//             type="text"
//             placeholder="Search"
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
//           />
//         </div>
//       </header>

//       {/* Podcast Cards Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
//         {filteredPodcasts.map((podcast, index) => (
//           <div key={podcast.id} className="bg-white overflow-hidden shadow-md">
//             {/* Image with Audio Player Overlay at Bottom */}
//             <div className="relative h-96 bg-gray-200">
//               <img
//                 src={podcast.image}
//                 alt={podcast.title}
//                 className="w-full h-full object-cover"
//                 onError={(e) => {
//                   e.target.src =
//                     "https://via.placeholder.com/400x400?text=Podcast+Image";
//                 }}
//               />

//               {/* Play Button in Center */}
//               <div className="absolute inset-0 flex items-center justify-center">
//                 <button
//                   onClick={() => handlePlayPause(index)}
//                   className="bg-white/90 text-gray-800 w-20 h-20 flex items-center justify-center hover:bg-white transition-colors border-4 border-white"
//                 >
//                   {playingIndex === index ? (
//                     <Pause className="w-10 h-10" />
//                   ) : (
//                     <Play className="w-10 h-10 ml-1" />
//                   )}
//                 </button>
//               </div>

//               {/* Audio Player Bar at Bottom - Overlaying the Image */}
//               <div className="absolute bottom-0 left-0 right-0 bg-white/95 px-4 py-3">
//                 <audio
//                   ref={(el) => (audioRefs.current[index] = el)}
//                   src={podcast.audioUrl}
//                   onTimeUpdate={() => handleTimeUpdate(index)}
//                   onLoadedMetadata={() => handleLoadedMetadata(index)}
//                   onEnded={() => setPlayingIndex(null)}
//                   preload="metadata"
//                 />

//                 <div className="flex items-center gap-3">
//                   <button
//                     onClick={() => handlePlayPause(index)}
//                     className="text-gray-800 flex-shrink-0"
//                   >
//                     {playingIndex === index ? (
//                       <Pause className="w-6 h-6" />
//                     ) : (
//                       <Play className="w-6 h-6" />
//                     )}
//                   </button>

//                   <div className="flex-1">
//                     <div className="text-xs text-gray-600 mb-1 font-medium">
//                       {formatTime(currentTime[index] || 0)} /{" "}
//                       {formatTime(duration[index] || 0)}
//                     </div>
//                     <div
//                       onClick={(e) => handleSeek(index, e)}
//                       className="w-full h-1.5 bg-gray-300 cursor-pointer rounded-full overflow-hidden"
//                     >
//                       <div
//                         className="h-full bg-gray-800 transition-all duration-100"
//                         style={{
//                           width: `${
//                             ((currentTime[index] || 0) /
//                               (duration[index] || 1)) *
//                             100
//                           }%`,
//                         }}
//                       />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Card Content Below Image */}
//             <div className="p-5 bg-white">
//               <h3 className="text-lg font-semibold text-gray-800 mb-2 leading-tight">
//                 {podcast.title}
//               </h3>
//               <p className="text-sm text-gray-600 mb-5">{podcast.host}</p>

//               {/* Download Button */}
//               <button
//                 onClick={() => handleDownload(podcast.audioUrl, podcast.title)}
//                 className="flex items-center justify-center gap-2 w-full border border-gray-800 text-gray-800 py-3 text-sm font-medium hover:bg-gray-800 hover:text-white transition-colors"
//               >
//                 Download
//                 <Download className="w-4 h-4" />
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Podcasts2;

import React, { useState, useRef } from "react";
import { Download, Play, Pause, Search } from "lucide-react";

// Google Drive Image URLs
const DRIVE_BASE_URL = "https://lh3.googleusercontent.com/d/";
const imageUrls = {
  image1: `${DRIVE_BASE_URL}1dqmdt0ZN6aDPaFVfj5I0pM6Wu9JaGuxv`,
  image2: `${DRIVE_BASE_URL}1bzNGLf-_DYoPLkQ2UI3FJVN29XNBtRA5`,
  image3: `${DRIVE_BASE_URL}1Rvvl6PvVd1Ysbp2Z4H9bcvNtaaXTi_sI`,
  image4: `${DRIVE_BASE_URL}1yMTEtR1kLrzO66KNJFQrySmw-7nYag49`,
  image5: `${DRIVE_BASE_URL}13sF9xFB-vplUH7CyaADrR2ipfG7hbcmS`,
  image6: `${DRIVE_BASE_URL}1bzNGLf-_DYoPLkQ2UI3FJVN29XNBtRA5`, // Using image2 as placeholder - replace with actual image6 ID
};

// Placeholder audio URL for testing
const placeholderAudio =
  "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3";

const Podcasts2 = () => {
  const [playingIndex, setPlayingIndex] = useState(null);
  const [currentTime, setCurrentTime] = useState({});
  const [duration, setDuration] = useState({});
  const [searchQuery, setSearchQuery] = useState("");
  const audioRefs = useRef([]);

  // Podcasts data
  const podcasts = [
    {
      id: 1,
      title: "Faith In Action: Living Out What You Believe",
      host: "Hosted By Pastor David Adebayo",
      image: imageUrls.image1,
      audioUrl: placeholderAudio,
    },
    {
      id: 2,
      title: "Spiritual Growth: How To Mature As A Christian",
      host: "With Rev. Grace Okonkwo",
      image: imageUrls.image2,
      audioUrl: placeholderAudio,
    },
    {
      id: 3,
      title: "Understanding God's Will For Your Life",
      host: "Featuring Apostle Samuel Okechukwu",
      image: imageUrls.image3,
      audioUrl: placeholderAudio,
    },
    {
      id: 4,
      title: "Prayer And Fasting: Keys To Breakthrough",
      host: "Hosted By Pastor David Adebayo",
      image: imageUrls.image4,
      audioUrl: placeholderAudio,
    },
    {
      id: 5,
      title: "The Power Of Worship In Daily Life",
      host: "With Rev. Grace Okonkwo",
      image: imageUrls.image5,
      audioUrl: placeholderAudio,
    },
    {
      id: 6,
      title: "Building Strong Christian Foundations",
      host: "Featuring Apostle Samuel Okechukwu",
      image: imageUrls.image6,
      audioUrl: placeholderAudio,
    },
  ];

  const handlePlayPause = (index) => {
    const audioElement = audioRefs.current[index];
    if (!audioElement) return;

    if (playingIndex === index) {
      audioElement.pause();
      setPlayingIndex(null);
    } else {
      if (playingIndex !== null && audioRefs.current[playingIndex]) {
        audioRefs.current[playingIndex].pause();
      }
      audioElement.play();
      setPlayingIndex(index);
    }
  };

  const handleTimeUpdate = (index) => {
    const audioElement = audioRefs.current[index];
    if (audioElement) {
      setCurrentTime((prev) => ({
        ...prev,
        [index]: audioElement.currentTime,
      }));
    }
  };

  const handleLoadedMetadata = (index) => {
    const audioElement = audioRefs.current[index];
    if (audioElement) {
      setDuration((prev) => ({
        ...prev,
        [index]: audioElement.duration,
      }));
    }
  };

  const handleSeek = (index, e) => {
    const audioElement = audioRefs.current[index];
    if (!audioElement) return;

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
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const filteredPodcasts = podcasts.filter(
    (podcast) =>
      podcast.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      podcast.host.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-5">
      {/* Header */}
      <header className="text-center max-w-4xl mx-auto mb-10">
        <h1 className="text-4xl md:text-5xl font-light tracking-[0.3em] text-gray-800 mb-6">
          PODCASTS
        </h1>
        <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-8">
          Join us as we dive deep into biblical truths, personal testimonies,
          <br className="hidden md:block" />
          and practical Christian living.
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

      {/* Podcast Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {filteredPodcasts.map((podcast, index) => (
          <div key={podcast.id} className="bg-white overflow-hidden shadow-md">
            {/* Image with Audio Player Overlay at Bottom */}
            <div className="relative h-96 bg-gray-200">
              <img
                src={podcast.image}
                alt={podcast.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src =
                    "https://via.placeholder.com/400x400?text=Podcast+Image";
                }}
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
                  src={podcast.audioUrl}
                  onTimeUpdate={() => handleTimeUpdate(index)}
                  onLoadedMetadata={() => handleLoadedMetadata(index)}
                  onEnded={() => setPlayingIndex(null)}
                  preload="metadata"
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
                {podcast.title}
              </h3>
              <p className="text-sm text-gray-600 mb-5">{podcast.host}</p>

              {/* Download Button */}
              <button
                onClick={() => handleDownload(podcast.audioUrl, podcast.title)}
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

export default Podcasts2;
