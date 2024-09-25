import "./App.css";
import Navigator from "./Components/Header/Navigator";
import AboutSection from "./Components/AboutSection/AboutSection";
import Service from "./Components/Services/Service";
import ContactPage from "./Page/ContactPage";
import WhatWeOffer from "./Page/WhatWeOffer";
import Home from "./Components/Home/Home";
import { Route, Routes } from "react-router-dom";
import GalleryPage from "./Page/GalleryPage";
import Gallery2 from "./Components/Gallery2/Gallery2.jsx";
import NavBar from "./Components/Header/NavBar.jsx";
import WhyChoos2 from "./Components/WhyChoos/WhyChoos2.jsx";
import Review from "./Components/Review/Review.jsx";
import Design_planning from "./Page/services pages/Design_planning.jsx";
import { ServiceData } from "./Assets/Dynamic Data/ServiceData.js";
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  const NotFound = () => {
    return (
      <div
  style={{
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    display: 'flex',
    height: '100vh', // Ensures it takes the full viewport height
  }}
  className="not-found"
>
  <div>
    <h1>404 - Page Not Found</h1>
    <p>Sorry, the page you are looking for does not exist.</p>
  </div>
</div>

    );
  };
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutpage" element={<AboutSection />} />
        <Route path="/weare" element={<WhatWeOffer />} />
        <Route path="/servicepage" element={<Service />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path='/gallery' element={<GalleryPage/>}/>
        <Route path="/whychoose2" element={<WhyChoos2 />} />
        <Route path="/review" element={<Review />} />
        <Route path='/designplanning/:id' element={<Design_planning />} />
        {ServiceData.map((p, i) => (
          <Route key={i} exact path={p.slug} element={<Design_planning />} />
        ))}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
