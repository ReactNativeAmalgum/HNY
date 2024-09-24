import React from "react";
import CarouselBanner from "../Banner/CarouselBanner";
import Specality from "../Specality/Specality";
import WhyChoos from "../WhyChoos/WhyChoos";
import Gallery from "../Gallery/Gallery";
import Whynchoos2 from "../Whynchoos2/Whynchoos2";
import ProgressBarr from "../ProgressBarr/ProgressBarr";
import Footer from "../Footer/Footer";
import Gallery2 from "../Gallery2/Gallery2";
import WhyChoose2 from "../WhyChoos/WhyChoos2";
import Review from "../Review/Review";
import WhatWeOffer from "../../Page/WhatWeOffer";
import WhatweOffer2 from "../../Page/WhatweOffer2";

function Home() {
  return (
    <>
      <CarouselBanner />
      {/* <Specality /> */}
      <WhyChoose2 />
      {/* <Whynchoos2 /> */}
      <WhatweOffer2 />
      <Gallery2 />
      <Gallery />
      <Review />
      <ProgressBarr />
      <Footer />
    </>
  );
}

export default Home;
