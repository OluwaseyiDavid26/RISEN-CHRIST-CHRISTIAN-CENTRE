// import React, { useState, useRef } from 'react';
// import { Download, Play, Pause, Search } from 'lucide-react';

// // Import your images here
// // import image1 from '../assets/music1.jpg';
// // import image2 from '../assets/music2.jpg';
// // etc.

// const Music2 = () => {
//   const [playingIndex, setPlayingIndex] = useState(null);
//   const [currentTime, setCurrentTime] = useState({});
//   const [duration, setDuration] = useState({});
//   const [searchQuery, setSearchQuery] = useState('');
//   const audioRefs = useRef([]);

//   // Sample music data - replace with your actual data and imported images
//   const musicTracks = [
//     {
//       id: 1,
//       title: "Glorious King",
//       artist: "The Risen Christ Choir",
//       image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop",
//       audioUrl: "/path-to-audio1.mp3"
//     },
//     {
//       id: 2,
//       title: "You Are Holy",
//       artist: "Minister Joshua Adeyemi",
//       image: "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=800&h=600&fit=crop",
//       audioUrl: "/path-to-audio2.mp3"
//     },
//     {
//       id: 3,
//       title: "The Blood Still Speaks",
//       artist: "Pastor David Adebayo",
//       image: "https://images.unsplash.com/photo-1519834785169-98be25ec3f84?w=800&h=600&fit=crop",
//       audioUrl: "/path-to-audio3.mp3"
//     },
//     {
//       id: 4,
//       title: "Songs of Praise",
//       artist: "The Risen Christ Choir",
//       image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&h=600&fit=crop",
//       audioUrl: "/path-to-audio4.mp3"
//     },
//     {
//       id: 5,
//       title: "Amazing Grace",
//       artist: "Minister Joshua Adeyemi",
//       image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&h=600&fit=crop",
//       audioUrl: "/path-to-audio5.mp3"
//     },
//     {
//       id: 6,
//       title: "Victory Song",
//       artist: "Pastor David Adebayo",
//       image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&h=600&fit=crop",
//       audioUrl: "/path-to-audio6.mp3"
//     }
//   ];

//   const handlePlayPause = (index) => {
//     const audioElement = audioRefs.current[index];

//     if (playingIndex === index) {
//       audioElement.pause();
//       setPlayingIndex(null);
//     } else {
//       if (playingIndex !== null) {
//         audioRefs.current[playingIndex].pause();
//       }
//       audioElement.play();
//       setPlayingIndex(index);
//     }
//   };

//   const handleTimeUpdate = (index) => {
//     const audioElement = audioRefs.current[index];
//     setCurrentTime(prev => ({
//       ...prev,
//       [index]: audioElement.currentTime
//     }));
//   };

//   const handleLoadedMetadata = (index) => {
//     const audioElement = audioRefs.current[index];
//     setDuration(prev => ({
//       ...prev,
//       [index]: audioElement.duration
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
//     if (isNaN(time)) return '0:00';
//     const minutes = Math.floor(time / 60);
//     const seconds = Math.floor(time % 60);
//     return `${minutes}:${seconds.toString().padStart(2, '0')}`;
//   };

//   const handleDownload = (audioUrl, title) => {
//     const link = document.createElement('a');
//     link.href = audioUrl;
//     link.download = `${title}.mp3`;
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   const filteredMusic = musicTracks.filter(track =>
//     track.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
//     track.artist.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   return (
//     <div className="min-h-screen bg-gray-50 py-12 px-5">
//       {/* Header */}
//       <header className="text-center max-w-4xl mx-auto mb-10">
//         <h1 className="text-4xl md:text-5xl font-light tracking-[0.3em] text-gray-800 mb-6">
//           MUSIC
//         </h1>
//         <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-8">
//           Enjoy soul-stirring gospel music that draws you closer to God.
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

//       {/* Music Cards Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
//         {filteredMusic.map((track, index) => (
//           <div
//             key={track.id}
//             className="bg-white overflow-hidden shadow-md"
//           >
//             {/* Image with Audio Player Overlay at Bottom */}
//             <div className="relative h-96 bg-gray-200">
//               <img
//                 src={track.image}
//                 alt={track.title}
//                 className="w-full h-full object-cover"
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
//                   ref={el => audioRefs.current[index] = el}
//                   src={track.audioUrl}
//                   onTimeUpdate={() => handleTimeUpdate(index)}
//                   onLoadedMetadata={() => handleLoadedMetadata(index)}
//                   onEnded={() => setPlayingIndex(null)}
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
//                       {formatTime(currentTime[index] || 0)} / {formatTime(duration[index] || 0)}
//                     </div>
//                     <div
//                       onClick={(e) => handleSeek(index, e)}
//                       className="w-full h-1.5 bg-gray-300 cursor-pointer rounded-full overflow-hidden"
//                     >
//                       <div
//                         className="h-full bg-gray-800 transition-all duration-100"
//                         style={{
//                           width: `${((currentTime[index] || 0) / (duration[index] || 1)) * 100}%`
//                         }}
//                       />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Card Content Below Image */}
//             <div className="p-5 bg-white">
//               <h3 className="text-lg font-semibold text-gray-800 mb-1 leading-tight">
//                 {track.title}
//               </h3>
//               <p className="text-sm text-gray-600 mb-4">
//                 {track.artist}
//               </p>

//               {/* Download Button - Small and aligned to right */}
//               <div className="flex justify-end">
//                 <button
//                   onClick={() => handleDownload(track.audioUrl, track.title)}
//                   className="flex items-center gap-2 border border-gray-800 text-gray-800 px-4 py-2 text-sm font-medium hover:bg-gray-800 hover:text-white transition-colors"
//                 >
//                   Download
//                   <Download className="w-4 h-4" />
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Music2;

import React, { useState, useRef } from "react";
import { Download, Play, Pause, Search } from "lucide-react";

// Google Drive Image URLs
const music1 =
  "https://drive.google.com/thumbnail?id=17c7Zc4Om_zq615i363gqmoHbhBD6rDfR&sz=w1000";
const music2 =
  "https://drive.google.com/thumbnail?id=1G5l3JsdTpHJzuGsUnCIwvR5J3bGYbapG&sz=w1000";
const music3 =
  "https://drive.google.com/thumbnail?id=1SA8DWTwITrCg_t5XgWajl1kk5V9lrIq6&sz=w1000";
const music4 =
  "https://drive.google.com/thumbnail?id=1bQxeF2CvpbqUQP3xZn01yUDyehVC6Jru&sz=w1000";
const music5 =
  "https://drive.google.com/thumbnail?id=1jOtM8do4-31iq7KAOZj2X_ebFwr1aXYC&sz=w1000";
const music6 =
  "https://drive.google.com/thumbnail?id=1BOuJa2Yysa78GfEJ72f-KJm8dSijP06I&sz=w1000";

const Music2 = () => {
  const [playingIndex, setPlayingIndex] = useState(null);
  const [currentTime, setCurrentTime] = useState({});
  const [duration, setDuration] = useState({});
  const [searchQuery, setSearchQuery] = useState("");
  const audioRefs = useRef([]);

  // Music tracks data with Google Drive images
  const musicTracks = [
    {
      id: 1,
      title: "Glorious King",
      artist: "The Risen Christ Choir",
      image: music1,
      audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    },
    {
      id: 2,
      title: "You Are Holy",
      artist: "Minister Joshua Adeyemi",
      image: music2,
      audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    },
    {
      id: 3,
      title: "The Blood Still Speaks",
      artist: "Pastor David Adebayo",
      image: music3,
      audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
    },
    {
      id: 4,
      title: "Songs of Praise",
      artist: "The Risen Christ Choir",
      image: music4,
      audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
    },
    {
      id: 5,
      title: "Amazing Grace",
      artist: "Minister Joshua Adeyemi",
      image: music5,
      audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3",
    },
    {
      id: 6,
      title: "Victory Song",
      artist: "Pastor David Adebayo",
      image: music6,
      audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3",
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
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const filteredMusic = musicTracks.filter(
    (track) =>
      track.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      track.artist.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-5">
      {/* Header */}
      <header className="text-center max-w-4xl mx-auto mb-10">
        <h1 className="text-4xl md:text-5xl font-light tracking-[0.3em] text-gray-800 mb-6">
          MUSIC
        </h1>
        <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-8">
          Enjoy soul-stirring gospel music that draws you closer to God.
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

      {/* Music Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {filteredMusic.map((track, index) => (
          <div key={track.id} className="bg-white overflow-hidden shadow-md">
            {/* Image with Audio Player Overlay at Bottom */}
            <div className="relative h-96 bg-gray-200">
              <img
                src={track.image}
                alt={track.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src =
                    "https://via.placeholder.com/400x400?text=Music+Image";
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
                  src={track.audioUrl}
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
              <h3 className="text-lg font-semibold text-gray-800 mb-1 leading-tight">
                {track.title}
              </h3>
              <p className="text-sm text-gray-600 mb-4">{track.artist}</p>

              {/* Download Button - Small and aligned to right */}
              <div className="flex justify-end">
                <button
                  onClick={() => handleDownload(track.audioUrl, track.title)}
                  className="flex items-center gap-2 border border-gray-800 text-gray-800 px-4 py-2 text-sm font-medium hover:bg-gray-800 hover:text-white transition-colors"
                >
                  Download
                  <Download className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Music2;
