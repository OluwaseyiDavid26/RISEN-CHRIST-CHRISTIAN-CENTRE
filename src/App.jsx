// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Navbar from "./Components/Navbar.jsx";
// import Footer from "./Components/Footer.jsx";

// import Home from "./Components/Home.jsx";
// import WhoPage from "./Pages/WhoPage.jsx";
// import Empire from "./Pages2/Empires.jsx";
// import Events from "./Pages3/Events.jsx";
// import Resources from "./Pages4/Resources.jsx";
// import Sinner from "./Pages5/Sinner.jsx";
// import Giving from "./Pages6/Giving.jsx";
// function App() {
//   return (
//     <BrowserRouter>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/who-we-are" element={<WhoPage />} />
//         <Route path="/empire" element={<Empire />} />
//         <Route path="/events" element={<Events />} />
//         <Route path="/resources" element={<Resources />} />
//         <Route path="/sinners" element={<Sinner />} />
//         <Route path="/giving" element={<Giving />} />
//       </Routes>
//       <Footer />
//     </BrowserRouter>
//   );
// }

// export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar.jsx";
import Footer from "./Components/Footer.jsx";

import Home from "./Components/Home.jsx";
import WhoPage from "./Pages/WhoPage.jsx";
import Empire from "./Pages2/Empires.jsx";
import Events from "./Pages3/Events.jsx";
import Resources from "./Pages4/Resources.jsx";
import Sinner from "./Pages5/Sinner.jsx";
import Giving from "./Pages6/Giving.jsx";

// ✅ Add these imports for individual resource pages
import VideoMessages from "./Pages4/VideoMessages.jsx";
import PhotoGallery from "./Pages4/PhotoGallery.jsx";
import Podcast from "./Pages4/Podcast.jsx";
import Music from "./Pages4/Music.jsx";
import Articles from "./Pages4/Articles.jsx";

//
import Articles2 from "./Pages4/Articles2.jsx";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/who-we-are" element={<WhoPage />} />
        <Route path="/empire" element={<Empire />} />
        <Route path="/events" element={<Events />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/sinners" element={<Sinner />} />
        <Route path="/giving" element={<Giving />} />
        {/* ✅ Add these new routes */}
        <Route path="/video-messages" element={<VideoMessages />} />
        <Route path="/photo-gallery" element={<PhotoGallery />} />
        <Route path="/podcast" element={<Podcast />} />
        <Route path="/music" element={<Music />} />
        <Route path="/articles" element={<Articles />} />
        //
        <Route path="/articles2" element={<Articles2 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
