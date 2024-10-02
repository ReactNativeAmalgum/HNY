import "./App.css";
import Navigator from "./Components/Header/Navigator";
import AboutSection from "./Components/AboutSection/AboutSection";
import Service from "./Components/Services/Service";
import ContactPage from "./Page/ContactPage";
import WhatWeOffer from "./Page/WhatWeOffer";
import Home from "./Components/Home/Home";
import { Route, Routes, useParams } from "react-router-dom";
import GalleryPage from "./Page/GalleryPage";
import Gallery2 from "./Components/Gallery2/Gallery2.jsx";
import NavBar from "./Components/Header/NavBar.jsx";
import WhyChoos2 from "./Components/WhyChoos/WhyChoos2.jsx";
import Review from "./Components/Review/Review.jsx";
import Design_planning from "./Page/services pages/Design_planning.jsx";
import { ServiceData } from "./Assets/Dynamic Data/ServiceData.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import Page404 from "./Page/Page404.jsx";
function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/interior-designers-decorators-thane" element={<AboutSection />} />
        <Route path="/servicepage" element={<Service />} />
        <Route path="/interior-designer-near-thane" element={<ContactPage />} />
        <Route path='/interior-work' element={<GalleryPage />} />
        <Route path='/designplanning/:slug' element={<Design_planning />} />
        {/* {ServiceData.map((p, i) => (
          <Route key={p} exact path={p.slug} element={<Design_planning />}
          />
        ))} */}
        {/* {ServiceData.map((p) => (
          <Route key={p.slug} path={`${p.slug}/:slug`} element={<Design_planning />} />
        ))} */}
        <Route path="/:slug" element={<Design_planning />} />

        <Route path="*" element={<Page404 />} />
      </Routes>
    </>
  );
}

export default App;
