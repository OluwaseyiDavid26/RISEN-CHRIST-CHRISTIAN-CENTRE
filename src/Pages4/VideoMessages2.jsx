import React, { useState } from "react";
import { Download, Search } from "lucide-react";

// Import your images here
// import image1 from '../assets/video1.jpg';
// import image2 from '../assets/video2.jpg';
// etc.

const VideoMessages2 = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // Sample video messages data - replace with your actual data and imported images
  const videoMessages = [
    {
      id: 1,
      title: "Glorious King",
      speaker: "The Risen Christ Choir",
      thumbnail:
        "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&h=600&fit=crop",
      videoUrl: "/path-to-video1.mp4",
    },
    {
      id: 2,
      title: "Glorious King",
      speaker: "The Risen Christ Choir",
      thumbnail:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
      videoUrl: "/path-to-video2.mp4",
    },
    {
      id: 3,
      title: "Glorious King",
      speaker: "The Risen Christ Choir",
      thumbnail:
        "https://images.unsplash.com/photo-1511884642898-4c92249e20b6?w=800&h=600&fit=crop",
      videoUrl: "/path-to-video3.mp4",
    },
    {
      id: 4,
      title: "Faith Over Fear",
      speaker: "Pastor David Adebayo",
      thumbnail:
        "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&h=600&fit=crop",
      videoUrl: "/path-to-video4.mp4",
    },
    {
      id: 5,
      title: "The Power of Prayer",
      speaker: "Rev. Grace Okonkwo",
      thumbnail:
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop",
      videoUrl: "/path-to-video5.mp4",
    },
    {
      id: 6,
      title: "Walking in Victory",
      speaker: "Apostle Samuel Okechukwu",
      thumbnail:
        "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=600&fit=crop",
      videoUrl: "/path-to-video6.mp4",
    },
  ];

  const handleDownload = (videoUrl, title) => {
    const link = document.createElement("a");
    link.href = videoUrl;
    link.download = `${title}.mp4`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const filteredVideos = videoMessages.filter(
    (video) =>
      video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      video.speaker.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-5">
      {/* Header */}
      <header className="text-center max-w-4xl mx-auto mb-10">
        <h1 className="text-4xl md:text-5xl font-light tracking-[0.3em] text-gray-800 mb-6">
          VIDEO MESSAGES
        </h1>
        <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-8">
          Experience powerful messages that will uplift
          <br className="hidden md:block" />
          and transform your life.
        </p>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-none focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
          />
        </div>
      </header>

      {/* Video Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {filteredVideos.map((video) => (
          <div key={video.id} className="bg-white overflow-hidden shadow-md">
            {/* Video Thumbnail */}
            <div className="relative h-80 bg-gray-200 cursor-pointer group">
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-full object-cover"
              />

              {/* Play Button Overlay - appears on hover */}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg
                    className="w-20 h-20 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Card Content */}
            <div className="p-5 bg-white">
              <h3 className="text-lg font-semibold text-gray-800 mb-1 leading-tight">
                {video.title}
              </h3>
              <p className="text-sm text-gray-600 mb-4">{video.speaker}</p>

              {/* Download Button - Small and aligned to right */}
              <div className="flex justify-end">
                <button
                  onClick={() => handleDownload(video.videoUrl, video.title)}
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

export default VideoMessages2;
