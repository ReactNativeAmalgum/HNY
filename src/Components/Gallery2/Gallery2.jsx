import React, { Children, useState } from "react";
import "./Gallery2.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { Autoplay, FreeMode, Pagination } from "swiper/modules";
import { Image } from "antd";
import { Bounce, Slide } from "react-awesome-reveal";
import { ServiceData } from "../../Assets/Dynamic Data/ServiceData";

function Gallery2() {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };
  return (
    <section className="gallery-cont">
      <div className="abt-slider-cont">
        <div className="gallery-custom-cont container">
          <div className="gallery-custom-row row">
            <div className="gallery-custom-col col-3">
              <div className="gallery-card">
                <h3 className="gallery-card-title"> <Slide direction="left">
                  Our Services
                </Slide> </h3>
                <p className="gallery-card-text">
                  Our services are designed to meet your unique needs, offering personalized solutions that enhance your space and lifestyle.
                </p>

                {showMore && (
                  <p className="gallery-card-text">
                    From concept to execution, we ensure quality, creativity, and excellence in every project
                  </p>
                )}
                <touchableHilight
                  className={"NewAboutUs-ReadMore"}
                  onClick={toggleShowMore}
                >
                  {showMore ? "read less" : "read more..."}
                </touchableHilight>
              </div>
            </div>
            <div className="cont-col9 gallery-custom-col col-9">
              <Swiper
                slidesPerView={1}
                spaceBetween={30}
                freeMode={true}
                modules={[FreeMode, Autoplay]}
                className="mySwiper"
                speed={1000}
                autoplay={{
                  delay: 1000,
                  disableOnInteraction: true,
                }}
                breakpoints={{
                  200: {
                    slidesPerView: 1,
                  },
                  320: {
                    slidesPerView: 1
                  },
                  425: {
                    slidesPerView: 1
                  },
                  // For screens larger than or equal to 768px
                  768: {
                    slidesPerView: 2, // Show 2 slides per view
                  },
                  // For screens larger than or equal to 1024px
                  1024: {
                    slidesPerView: 3, // Show 3 slides per view
                  },
                  // You can add more breakpoints if needed
                }}
              >
                <SwiperSlide className="slider-img-cont">
                  <img src={ServiceData[0].img[0]} />

                  <a style={{ textDecoration: 'none' }} href="/designplanning/1"> <Bounce >Design Planning </Bounce></a>

                </SwiperSlide>
                <SwiperSlide className="slider-img-cont">
                <img src={ServiceData[1].img[0]} />

                  <a style={{ textDecoration: 'none' }} href="/designplanning/2" >  <Bounce >Kitchen Installation </Bounce></a>

                </SwiperSlide>
                <SwiperSlide className="slider-img-cont">
                <img src={ServiceData[2].img[0]} />

                  <a style={{ textDecoration: 'none' }} href="/designplanning/3">          <Bounce >Furniture & Home Decor </Bounce></a>
                </SwiperSlide>
                <SwiperSlide className="slider-img-cont">
                <img src={ServiceData[3].img[0]} />

                  <a style={{ textDecoration: 'none' }} href="/designplanning/4">             <Bounce >Other Expertise </Bounce></a>

                </SwiperSlide>
                <SwiperSlide className="slider-img-cont">
               <img src={ServiceData[4].img[0]} />

                  <a style={{ textDecoration: 'none' }} href="/designplanning/5"><Bounce >Commercial Interior Design </Bounce></a>

                </SwiperSlide>
 
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Gallery2;
