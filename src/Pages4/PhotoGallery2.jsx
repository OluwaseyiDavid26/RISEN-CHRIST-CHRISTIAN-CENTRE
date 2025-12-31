// import React, { useState } from "react";
// import { X } from "lucide-react";

// // Import your images here
// // import image1 from '../assets/gallery1.jpg';
// // import image2 from '../assets/gallery2.jpg';
// // etc.

// const PhotoGallery2 = () => {
//   const [selectedImage, setSelectedImage] = useState(null);

//   // Sample gallery images - replace with your actual imported images
//   const galleryImages = [
//     {
//       id: 1,
//       src: "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=800&h=600&fit=crop",
//       alt: "Church community gathering",
//       size: "large", // tall, wide, or large
//     },
//     {
//       id: 2,
//       src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop",
//       alt: "Worship service",
//       size: "wide",
//     },
//     {
//       id: 3,
//       src: "https://images.unsplash.com/photo-1519834785169-98be25ec3f84?w=800&h=600&fit=crop",
//       alt: "Recording studio",
//       size: "regular",
//     },
//     {
//       id: 4,
//       src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&h=600&fit=crop",
//       alt: "Praise and worship",
//       size: "large",
//     },
//     {
//       id: 5,
//       src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&h=600&fit=crop",
//       alt: "Church leadership",
//       size: "regular",
//     },
//     {
//       id: 6,
//       src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&h=600&fit=crop",
//       alt: "Pastor preaching",
//       size: "regular",
//     },
//     {
//       id: 7,
//       src: "https://images.unsplash.com/photo-1511884642898-4c92249e20b6?w=800&h=600&fit=crop",
//       alt: "Congregation gathering",
//       size: "wide",
//     },
//     {
//       id: 8,
//       src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&h=600&fit=crop",
//       alt: "Worship band",
//       size: "regular",
//     },
//     {
//       id: 9,
//       src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop",
//       alt: "Pastor ministering",
//       size: "tall",
//     },
//   ];

//   const openLightbox = (image) => {
//     setSelectedImage(image);
//     document.body.style.overflow = "hidden";
//   };

//   const closeLightbox = () => {
//     setSelectedImage(null);
//     document.body.style.overflow = "auto";
//   };

//   return (
//     <div className="min-h-screen bg-white py-12 px-5">
//       {/* Header */}
//       <header className="text-center max-w-4xl mx-auto mb-12">
//         <h1 className="text-4xl md:text-5xl font-light tracking-[0.3em] text-gray-800 mb-4">
//           PHOTO GALLERY
//         </h1>
//         <p className="text-base md:text-lg text-gray-600">
//           Relive powerful moments in pictures
//         </p>
//       </header>

//       {/* Masonry Grid Layout */}
//       <div className="max-w-7xl mx-auto">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-auto">
//           {galleryImages.map((image) => (
//             <div
//               key={image.id}
//               onClick={() => openLightbox(image)}
//               className={`
//                 relative overflow-hidden cursor-pointer group
//                 ${image.size === "tall" ? "row-span-2" : ""}
//                 ${image.size === "wide" ? "col-span-2" : ""}
//                 ${image.size === "large" ? "row-span-2 col-span-2" : ""}
//               `}
//             >
//               <img
//                 src={image.src}
//                 alt={image.alt}
//                 className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
//               />
//               {/* Overlay on hover */}
//               <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300" />
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Lightbox Modal */}
//       {selectedImage && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
//           onClick={closeLightbox}
//         >
//           {/* Close Button */}
//           <button
//             onClick={closeLightbox}
//             className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-50"
//           >
//             <X className="w-10 h-10" />
//           </button>

//           {/* Image */}
//           <img
//             src={selectedImage.src}
//             alt={selectedImage.alt}
//             className="max-w-full max-h-[90vh] object-contain"
//             onClick={(e) => e.stopPropagation()}
//           />
//         </div>
//       )}
//     </div>
//   );
// };

// export default PhotoGallery2;

import React, { useState } from "react";
import { X } from "lucide-react";

// Google Drive Image URLs
const image1 =
  "https://drive.google.com/thumbnail?id=1MC5qzdUIDBTAf9wI6tgqeYd3m8lxjGw5&sz=w1000";
const image2 =
  "https://drive.google.com/thumbnail?id=1idYiMZ0uDUOqGpv1_XLlLn_mO5xcR2lh&sz=w1000";
const image3 =
  "https://drive.google.com/thumbnail?id=1mK6HapjjsHYYoDlQaKFZ21OX8wX0BZn1&sz=w1000";
const image4 =
  "https://drive.google.com/thumbnail?id=1GpzLE8eZ5gJny66XGQ2iaP2PVyNTtzfG&sz=w1000";
const image5 =
  "https://drive.google.com/thumbnail?id=1Y6di7UqxGZsn1g5nfYsoubOtuWZLBM-l&sz=w1000";
const image6 =
  "https://drive.google.com/thumbnail?id=1DVvultf_adWf75I5d_OSsmySl-ZnElno&sz=w1000";
const image7 =
  "https://drive.google.com/thumbnail?id=1fC_FIwtS80lFl1FfJxfPpVZg93vL859F&sz=w1000";
const image8 =
  "https://drive.google.com/thumbnail?id=15yTIokew8ScKMteAlJShU8IvrCE78EBG&sz=w1000";

const PhotoGallery2 = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Gallery images with Google Drive URLs
  const galleryImages = [
    {
      id: 1,
      src: image1,
      alt: "Church community gathering",
      size: "large",
    },
    {
      id: 2,
      src: image2,
      alt: "Worship service",
      size: "wide",
    },
    {
      id: 3,
      src: image3,
      alt: "Recording studio",
      size: "regular",
    },
    {
      id: 4,
      src: image4,
      alt: "Praise and worship",
      size: "regular",
    },
    {
      id: 5,
      src: image5,
      alt: "Church leadership",
      size: "tall",
    },
    {
      id: 6,
      src: image6,
      alt: "Pastor preaching",
      size: "regular",
    },
    {
      id: 7,
      src: image7,
      alt: "Congregation gathering",
      size: "wide",
    },
    {
      id: 8,
      src: image8,
      alt: "Worship band",
      size: "regular",
    },
  ];

  const openLightbox = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto";
  };

  return (
    <div className="min-h-screen bg-white py-12 px-5">
      {/* Header */}
      <header className="text-center max-w-4xl mx-auto mb-12">
        <h1 className="text-4xl md:text-5xl font-light tracking-[0.3em] text-gray-800 mb-4">
          PHOTO GALLERY
        </h1>
        <p className="text-base md:text-lg text-gray-600">
          Relive powerful moments in pictures
        </p>
      </header>

      {/* Masonry Grid Layout */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-auto">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              onClick={() => openLightbox(image)}
              className={`
                relative overflow-hidden cursor-pointer group
                ${image.size === "tall" ? "row-span-2" : ""}
                ${image.size === "wide" ? "col-span-2" : ""}
                ${image.size === "large" ? "row-span-2 col-span-2" : ""}
              `}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                onError={(e) => {
                  e.target.src =
                    "https://via.placeholder.com/600x400?text=Gallery+Image";
                }}
              />
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-50"
          >
            <X className="w-10 h-10" />
          </button>

          {/* Image */}
          <img
            src={selectedImage.src}
            alt={selectedImage.alt}
            className="max-w-full max-h-[90vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

export default PhotoGallery2;
