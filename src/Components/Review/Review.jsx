import React, { useEffect, useRef, useState } from "react";
import "./Review.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";
import alfa from '../../Assets/images/Alfa Sawant.png'
import tejas from '../../Assets/images/tejas.png'
import women from '../../Assets/images/women.png'
import { Bounce, Fade, Slide } from "react-awesome-reveal";
import { motion } from "framer-motion";

export default function Review() {
  const [isInView, setIsInView] = useState(false);
  const headingRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        console.log(entry.isIntersecting); // Check if it is in view
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (headingRef.current) {
      observer.observe(headingRef.current);
    }

    return () => {
      if (headingRef.current) {
        observer.unobserve(headingRef.current);
      }
    };
  }, []);

  const heading = "CLIENT'S FEEDBACK".split(" ");
  return (
    <div className="review-body-cont">
      <div className="container">
        <div className="review-cont">
          <div className="row">
            <div className="review-row-cont">
              <div className="custom-review-col col-6">
                <div className="review-col-cont">
                  <div className="review-main-img-cont">
                    <Fade duration={1200}>
                      <img
                        src={women}
                        alt={"woman on chair"}
                      />
                    </Fade>
                  </div>
                </div>
              </div>
              <div className="custom-review-col col-6">
                <div className=" review-col-cont">
                  <div className="review-right-col-cont pbmit-heading-subheading pbmit-reverse-heading-yes animation-style4">
                    <h4 className="h4-cont pbmit-element-subtitle" ref={headingRef}>
                    {heading.map((el, i) => (
                        <motion.span
                          key={i}
                          initial={{ opacity: 0, y: 20 }}
                          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} // fallback
                          transition={{ duration: 0.5, delay: i * 0.3 }}
                        >
                          {el}{" "}
                        </motion.span>
                      ))}
                    </h4>
                    <Slide direction="right">
                    <h2 className="pbmit-element-title">
                      What our clients have to say
                    </h2>
                    </Slide>
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
                        1440: { slidesPerView: 2 }
                      }}
                      pagination={{ clickable: true }}
                      modules={[FreeMode, Pagination]}
                      className="reviewswiper"
                    >
                      <SwiperSlide className="review-slider-img-cont">
                        <div className="review-slider-card">
                          <div className="review-slider-card-top">
                            <p>HNY Interior Studio, the premier commercial interior designer in Thane, transforms spaces with innovative designs and impeccable craftsmanship. Highly recommended!</p>
                            <div className="review-slider-card-bottom">
                              <div className="prof">
                                <img
                                  src={alfa}
                                  alt="Akhil Sakariya"
                                />
                              </div>
                              <div className="prof-detail">
                                <Bounce>
                                <h4>ALFA SAWANT</h4>
                                <p>EDITOR</p>
                                </Bounce>
                              </div>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide className="review-slider-img-cont">
                        <div className="review-slider-card">
                          <div className="review-slider-card-top">
                            <p>HNY Interior Studio offers the best interior service in Thane, providing innovative designs and exceptional customer satisfaction. Highly recommended!</p>
                            <div className="review-slider-card-bottom">
                              <div className="prof">
                                <img
                                  style={{ width: '100%', height: '100%' }}
                                  src="https://lh3.googleusercontent.com/a/ACg8ocJoHBcxzbFBnDNzyoZR0bjxVSpO6dahv31IUBrK9LnctWIVp4YC=s40-c-rp-mo-ba2-br100"
                                  alt="Akhil Sakariya"
                                />
                              </div>
                              <div className="prof-detail">
                                <Bounce>
                                <h4>Sakshi Mirgal</h4>
                                <p>Local Guide</p>
                                </Bounce>
                              </div>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide className="review-slider-img-cont">
                        <div className="review-slider-card">
                          <div className="review-slider-card-top">
                            <p>Your company is just marvellous 😊. Reasonable , affordable and excellent service everyone can get . Best interior service    . Highly recommended 😊😊</p>
                            <div className="review-slider-card-bottom">
                              <div className="prof">
                                <img
                                  src={tejas}
                                  alt="Akhil Sakariya"
                                />
                              </div>
                              <div className="prof-detail">
                               <Bounce>
                               <h4>Tejas Katrajkar</h4>
                               <p>Software Engineers</p>
                               </Bounce>
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
