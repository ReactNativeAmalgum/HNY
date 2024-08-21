import React, { useState } from "react";
import "./Review.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";

export default function Review() {
  return (
    <div className="review-body-cont">
      <div className="container">
        <div className="review-cont">
          <div className="row">
            <div className="review-row-cont">
              <div className="custom-review-col col-6">
                <div className="review-col-cont">
                  <div className="review-main-img-cont">
                  <img
                    src="https://img.freepik.com/free-photo/portrait-beautiful-young-business-woman_158595-4751.jpg?t=st=1723542889~exp=1723546489~hmac=9e2aaff288cfe3d55f49b98be6530704b8f949de3de4cd49d2ebe75ca10641ac&w=360"
                    alt={"woman on chair"}
                  />
                  </div>
                </div>
              </div>
              <div className="custom-review-col col-6">
                <div className=" review-col-cont">
                  <div className="review-right-col-cont pbmit-heading-subheading pbmit-reverse-heading-yes animation-style4">
                    <h4 className="h4-cont pbmit-element-subtitle">
                      Clients feedback
                    </h4>
                    <h2 className="pbmit-element-title">
                      What our clients have to say
                    </h2>
                  </div>
                  <div className="review-swiper-cont">
                    <Swiper
                      slidesPerView={1}
                      spaceBetween={30}
                      freeMode={true}

                      breakpoints={{
                        320: { slidesPerView: 1 },
                        425: { slidesPerView: 1 },
                        768: { slidesPerView: 1 },
                        1024: { slidesPerView: 1 },
                        1440:{slidesPerView:2}
                      }}
                      pagination={{ clickable: true }}
                      modules={[FreeMode, Pagination]}
                      className="reviewswiper"
                    >
                      <SwiperSlide className="review-slider-img-cont">
                        <div className="review-slider-card">
                          <div className="review-slider-card-top">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</p>
                            <div className="review-slider-card-bottom">
                              <div className="prof">
                                <img
                                  src="https://img.freepik.com/free-photo/pleasant-looking-serious-man-stands-profile-has-confident-expression-wears-casual-white-t-shirt_273609-16959.jpg?size=626&ext=jpg"
                                  alt="Akhil Sakariya"
                                />
                              </div>
                              <div className="prof-detail">
                                <h4>Akhil Sakariya</h4>
                                <p>Lorem ipsum dolor</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide className="review-slider-img-cont">
                        <div className="review-slider-card">
                          <div className="review-slider-card-top">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</p>
                            <div className="review-slider-card-bottom">
                              <div className="prof">
                                <img
                                  src="https://img.freepik.com/free-photo/pleasant-looking-serious-man-stands-profile-has-confident-expression-wears-casual-white-t-shirt_273609-16959.jpg?size=626&ext=jpg"
                                  alt="Akhil Sakariya"
                                />
                              </div>
                              <div className="prof-detail">
                                <h4>Akhil Sakariya</h4>
                                <p>Lorem ipsum dolor</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide className="review-slider-img-cont">
                        <div className="review-slider-card">
                          <div className="review-slider-card-top">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</p>
                            <div className="review-slider-card-bottom">
                              <div className="prof">
                                <img
                                  src="https://img.freepik.com/free-photo/pleasant-looking-serious-man-stands-profile-has-confident-expression-wears-casual-white-t-shirt_273609-16959.jpg?size=626&ext=jpg"
                                  alt="Akhil Sakariya"
                                />
                              </div>
                              <div className="prof-detail">
                                <h4>Akhil Sakariya</h4>
                                <p>Lorem ipsum dolor</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                      {/* Add more SwiperSlides if needed */}
                    </Swiper>
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
