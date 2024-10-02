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
import { MetaTags } from 'react-meta-tags';

function Home() {
  return (
    <>
      <MetaTags>
        <title>Interior Designer in Thane | HNY Studios</title>
        <meta title="Interior Designer in Thane | HNY Studios" />
        <meta name="description" content="Interior Designer in Thane, Interior Designers & Interior Decorators in Thane,  Interior Design & Planning Services in Thane, Modular Kitchen Designer in Thane, Interior Designing, Commercial Interior Designer in Thane, Interior Designer near Thane, Best Interior Decorator in Thane" />
        <link rel="canonical" href="https://hnyspaces.com/" />
        <meta http-equiv="cache-control" content="no-cache" />
        <meta http-equiv="expires" content="0" />
        <meta http-equiv="pragma" content="no-cache" />
        <meta property="og:title" content="Interior Designer in Thane | HNY Studios" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://hnyspaces.com/" />
        <meta property="og:description" content="Find the leading Interior Designers & Interior Decorators in Thane to elevate your living or workspace. Our experts offer bespoke design solutions." />
        <meta property="og:image" content="https://kinararesort.in/static/media/logo.146c55d2a549f20e2963.png" />
      </MetaTags>
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
