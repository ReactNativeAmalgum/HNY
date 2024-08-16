import { Link } from "react-router-dom";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "./Whynchoos2.css";
// Import Swiper styles
import "swiper/css";
function Whynchoos2() {
  return (
    <>
      <section className="">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12 dgg mySwiperv"></div>
            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-md-12 col-sm-12  mySwiperv">
                  <div className="card-toop">
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

                <div className="col-lg-6 col-md-12 col-sm-12  gj-gg">
                  <div className="detai">
                    <div className="beautih1">
                      <h3>Fully Responsive & Retina Ready</h3>
                    </div>
                    <div className="praa">
                      <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. <br /> Incidunt aut minus vel deleniti.
                        Recusandae!
                      </p>
                    </div>
                    <div className="linkkingg-btn">
                      <Link>read more</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Whynchoos2;
