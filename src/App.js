import "./App.css";
import Navigator from "./Components/Header/Navigator";
import AboutSection from "./Components/AboutSection/AboutSection";
import Service from "./Components/Services/Service";
import ContactPage from "./Page/ContactPage";
import WhatWeOffer from "./Page/WhatWeOffer";
import Home from "./Components/Home/Home";
import { Route, Routes } from "react-router-dom";
import GalleryPage from "./Page/GalleryPage";
import Experiment from "../src/Page/exp/Experiment.jsx";
import Gallery2 from "./Components/Gallery2/Gallery2.jsx";
import NavBar from "./Components/Header/NavBar.jsx";
import WhyChoos2 from "./Components/WhyChoos/WhyChoos2.jsx";
import Review from "./Components/Review/Review.jsx";
import Design_planning from "./Page/services pages/Design_planning.jsx";
import { ServiceData } from "./Assets/Dynamic Data/ServiceData.js";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutpage" element={<AboutSection />} />
        <Route path="/weare" element={<WhatWeOffer />} />
        <Route path="/servicepage" element={<Service />} />
        <Route path="/contact" element={<ContactPage />} />
        {/* <Route path='/gallery' element={<GalleryPage/>}/> */}
        <Route path="/gallery2" element={<Gallery2 />} />
        <Route path="/whychoose2" element={<WhyChoos2 />} />
        <Route path="/review" element={<Review />} />
        {/* <Route path='/exp' element={<Experiment />} /> */}
        {/* <Route path='/designplanning' element={<Design_planning />} /> */}
        {ServiceData.map((p, i) => (
          <Route key={i} exact path={p.slug} element={<Design_planning />} />
        ))}
        <Route path="/navbar" element={<NavBar />} />
      </Routes>
    </>
  );
}

export default App;
