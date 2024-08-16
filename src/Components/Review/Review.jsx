import React, { useState } from "react";
import "./Review.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";
import { Rating } from "@smastrom/react-rating";

export default function Review() {
  const [rating, setRating] = useState(0);
  // const reviewData = [
  //   {
  //     id: 1,
  //     rating: 0,
  //     descripion: "aaa",
  //     name: "Jorje",
  //   },
  //   {
  //     id: 2,
  //     rating: 3,
  //     descripion: "aaa",
  //     name: "Jorje",
  //   },
  //   {
  //     id: 3,
  //     rating: 5,
  //     descripion: "aaa",
  //     name: "Jorje",
  //   },
  // ];
  return (
    <div className="review-body-cont">
      <div className="container">
        <div className="review-cont">
          <div className="row">
            <div className="review-row-cont">
              <div className="col-6">
                <div className="review-col-cont">
                  <img
                    src="https://img.freepik.com/free-photo/portrait-beautiful-young-business-woman_158595-4751.jpg?t=st=1723542889~exp=1723546489~hmac=9e2aaff288cfe3d55f49b98be6530704b8f949de3de4cd49d2ebe75ca10641ac&w=360"
                    alt={"women on chair"}
                  />
                </div>
              </div>
              <div className="col-6">
                <div className=" review-col-cont">
                  <div class="review-right-col-cont pbmit-heading-subheading pbmit-reverse-heading-yes animation-style4">
                    <h4 class="h4-cont pbmit-element-subtitle">
                      <span></span>
                      Clients feedback
                    </h4>
                    <h2 class="pbmit-element-title">
                      What our client's have to say
                    </h2>
                  </div>
                  <div className="review-swiper-cont">
                    {/* {reviewData.map((r, i) =>( */}
                    <Swiper
                      slidesPerView={3}
                      spaceBetween={30}
                      freeMode={true}
                      breakpoints={{
                        320: {
                          slidesPerView: 1,
                        },
                        425: {
                          slidesPerView: 1,
                        },
                        // For screens larger than or equal to 768px
                        768: {
                          slidesPerView: 2, // Show 2 slides per view
                        },
                        // For screens larger than or equal to 1024px
                        1024: {
                          slidesPerView: 2, // Show 3 slides per view
                        },
                        // You can add more breakpoints if needed
                      }}
                      pagination={{
                        clickable: true,
                      }}
                      modules={[FreeMode, Pagination]}
                      className="reviewswiper"
                    >
                      <SwiperSlide className="review-slider-img-cont">
                        <div className="review-descp">
                          <p>Very nice!</p>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide className="review-slider-img-cont">
                        <div className="review-descp">
                          <p>Very nice!</p>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide className="review-slider-img-cont">
                        <div className="review-descp">
                          <p>Very nice!</p>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide className="review-slider-img-cont">
                        <div className="review-descp">
                          <p>Very nice!</p>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide className="review-slider-img-cont">
                        <div className="review-descp">
                          <p>Very nice!</p>
                        </div>
                      </SwiperSlide>
                    </Swiper>
                    {/* ))} */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/*
                  <div className="review-col-cont">
                    <div class="pbmit-heading-subheading pbmit-reverse-heading-yes animation-style4">
                      <h4 class="pbmit-element-subtitle">
                        <span></span>
                        Clients feedback
                      </h4>
                      <h2 class="pbmit-element-title">
                        What our client's have to say
                      </h2>
                    </div>
                    <div
                      className="swiper-wrapper"
                      id="swiper-wrapper-fd3b1c429c7a6ec5"
                      aria-live="polite"
                      style={{ transform: "translate3d(0px, 0px, 0px)" }}
                    >
                      <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        freeMode={true}
                        pagination={{
                          clickable: true,
                        }}
                        modules={[FreeMode, Pagination]}
                        className="mySwiper"
                      >
                        <SwiperSlide>
                        return <Rating className="my-rating-class" value={rating} onChange={setRating} />
                        </SwiperSlide>
                      </Swiper>
                    </div>
                  </div>
*/
