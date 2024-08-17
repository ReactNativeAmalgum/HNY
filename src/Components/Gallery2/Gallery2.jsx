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
                <h3 className="gallery-card-title">Our Services</h3>
                <p className="gallery-card-text">
                  This is some sample text for the card content. You can place
                  more details here.
                </p>
                <p className="gallery-card-text">
                  This is some sample text for the card content. You can place
                  more details here.
                </p>
                {showMore && (
                  <p className="gallery-card-text">
                    This is some sample text for the card content. You can place
                    more details here.
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
                slidesPerView={3}
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
                  320:{
                    slidesPerView:1
                  },
                  425:{
                    slidesPerView:1
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
                  <Image src="https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&w=600" />
                  <a>Transforming Rooms</a>
                </SwiperSlide>
                <SwiperSlide className="slider-img-cont">
                  <Image src="https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&w=600" />
                  <a>Weaving Dream</a>
                </SwiperSlide>
                <SwiperSlide className="slider-img-cont">
                  <Image src="https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&w=600" />
                  <a>Interior Decorator</a>
                </SwiperSlide>
                <SwiperSlide className="slider-img-cont">
                  <Image src="https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&w=600" />
                  <a>Professional Interior</a>
                </SwiperSlide>
                <SwiperSlide className="slider-img-cont">
                  <Image src="https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&w=600" />
                  <a>Interior Work Plan</a>
                </SwiperSlide>
                <SwiperSlide className="slider-img-cont">
                  <Image src="https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&w=600" />
                  <a>2D/2D Layouts</a>
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
