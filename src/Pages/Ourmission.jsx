// import crxsImg from "../assets/crxs-img.jpg";
// import bibleImg from "../assets/bible-img.jpg";
// import togetherImg from "../assets/together-img.jpg";

// function OurMission() {
//   const missionItems = [
//     {
//       icon: crxsImg,
//       text: "Lead People Into An Intimate Relationship With Jesus",
//     },
//     {
//       icon: bibleImg,
//       text: "Preach The Word Of God With Power And Clarity",
//     },
//     {
//       icon: togetherImg,
//       text: "Foster A Community Of Faith, Love, And Service",
//     },
//   ];

//   return (
//     <section className="py-20 bg-white text-center">
//       {/* Heading */}
//       <h2 className="text-5xl font-serif font-semibold mb-16 text-gray-900">
//         OUR MISSION
//       </h2>

//       {/* Cards */}
//       <div className="grid grid-cols-1  md:grid-cols-3 gap-10 px-6 md:px-20">
//         {missionItems.map((item, index) => (
//           <div key={index} className="flex flex-col items-center">
//             {/* Arch Card */}
//             <div className="w-full max-w-sm bg-pink-100 rounded-t-[150px] pt-16 hover:bg-[#ff0e40] pb-24 flex justify-center">
//               <img src={missionItems.icon} alt="Icon" className="w-20 h-20" />
//             </div>

//             {/* Description */}
//             <p className="mt-6 text-sm font-medium text-gray-800 max-w-[80%]">
//               {item.text}
//             </p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// export default OurMission;

import crxsImg from "../assets/crxs-img.jpg";
import bibleImg from "../assets/bible-img.jpg";
import togetherImg from "../assets/together-img.jpg";

function OurMission() {
  const missionItems = [
    {
      icon: crxsImg,
      text: "Lead People Into An Intimate Relationship With Jesus",
    },
    {
      icon: bibleImg,
      text: "Preach The Word Of God With Power And Clarity",
    },
    {
      icon: togetherImg,
      text: "Foster A Community Of Faith, Love, And Service",
    },
  ];

  return (
    <section className="py-20 bg-white text-center">
      <h2 className="text-5xl font-serif font-semibold mb-16 text-gray-900">
        OUR MISSION
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-6 md:px-20">
        {missionItems.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            {/* Arch Container */}
            <div className="w-full max-w-lg h-[400px] bg-pink-100 rounded-t-[200px] flex items-center justify-center transition-all hover:bg-[#ff0e40]">
              <img
                src={item.icon}
                alt="Icon"
                className="w-28 h-28 object-contain"
              />
            </div>

            {/* Description */}
            <p className="mt-6 text-base font-medium text-gray-800 max-w-xs leading-relaxed">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default OurMission;
