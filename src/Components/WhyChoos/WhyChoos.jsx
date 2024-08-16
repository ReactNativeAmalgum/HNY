import "./WhyChoos.css";
import { Link } from "react-router-dom";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

function WhyChoos() {
  return (
    <>
      <section className=" marg-t">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12 dgg gj-gg">
              <div className="details">
                <div className="beautih1">
                <h3>Beautiful on All Screen Sizes</h3>
                </div>
                <div className="praa">
                  <p>
                    Lorem, ipsum dolor sit amet consec <br /> tetur adipisicing
                    elit. Unde porro voluptatum facere <br /> quaerat aliquid a
                    eius dolor vero quidem vitae <br /> sit repellendus
                    architecto <br /> facilis optio, incidunt, error perferendis
                    cumque{" "}
                  </p>
                </div>
              <div className="linkkingg-btn">
                <Link>read more</Link>
              </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12 col-sm-12 dgg mySwiperv">
              <div className="card-top">
              <Swiper className="mySwiper">
                <SwiperSlide>
                  <div className="swip-img">
                    <img
                      src="https://cozy.qodeinteractive.com/wp-content/uploads/2016/11/img3.jpg"
                      alt=""
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swip-img">
                    <img
                      src="https://cozy.qodeinteractive.com/wp-content/uploads/2016/11/img3.jpg"
                      alt=""
                    />
                  </div>
                </SwiperSlide>
              </Swiper>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default WhyChoos;
