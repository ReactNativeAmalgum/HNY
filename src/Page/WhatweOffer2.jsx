import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ServiceData } from "../Assets/Dynamic Data/ServiceData";
import whatwecanoffer from '../Assets/images/homewhatwecanoffer.jpg'
import { Bounce, Fade, Slide } from "react-awesome-reveal";
import { motion } from "framer-motion";

export default function WhatweOffer2() {
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

  const heading = "WHAT WE CAN OFFER".split(" ");
  return (
    <section
      className="elementor-section elementor-top-section elementor-element elementor-element-f935a0f pbmit-col-stretched-none pbmit-bg-color-over-image elementor-section-boxed elementor-section-height-default elementor-section-height-default pbmit-col-stretched-no pbmit-bgimage-no pbmit-bgcolor-yes"
      data-id="f935a0f"
      data-element_type="section"
      style={{
        margin: "5%",
        display: "flow",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        position: "relative",
      }}
    >
      <div className="elementor-container elementor-column-gap-no">
        <div
          className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-4a6dc16 pbmit-bg-color-over-image pbmit-bgimage-no pbmit-bgcolor-yes"
          data-id="4a6dc16"
          data-element_type="column"
        >
          <div className="elementor-widget-wrap elementor-element-populated">
            <div
              className="elementor-element elementor-element-b24cde3 pbmit-ele-header-align-center elementor-widget elementor-widget-pbmit_tabs_element"
              data-id="b24cde3"
              data-element_type="widget"
              data-widget_type="pbmit_tabs_element.default"
            >
              <div className="elementor-widget-container">
                <div className="pbmit-ele-header-area">
                  <div className="pbmit-heading-subheading pbmit-reverse-heading-yes animation-style2">
                    <h4 className="pbmit-element-subtitle" ref={headingRef}>
                      <span></span>
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
                    <h2
                      className="pbmit-element-title"
                      style={{ perspective: 400 }}
                    ><Bounce>
                        <div
                          className="split-line"
                          style={{
                            display: "block",
                            textAlign: "center",
                            position: "relative",
                          }}
                        >
                          <div
                            style={{
                              position: "relative",
                              display: "inline-block",
                            }}
                          >
                            {" "}
                            <div
                              style={{
                                position: "relative",
                                display: "inline-block",
                                transform: "translate(0px, 0px)",
                                opacity: 1,
                              }}
                            >
                              W
                            </div>
                            <div
                              style={{
                                position: "relative",
                                display: "inline-block",
                                transform: "translate(0px, 0px)",
                                opacity: 1,
                              }}
                            >
                              h
                            </div>
                            <div
                              style={{
                                position: "relative",
                                display: "inline-block",
                                transform: "translate(0px, 0px)",
                                opacity: 1,
                              }}
                            >
                              a
                            </div>
                            <div
                              style={{
                                position: "relative",
                                display: "inline-block",
                                transform: "translate(0px, 0px)",
                                opacity: 1,
                              }}
                            >
                              t
                            </div>
                          </div>{" "}
                          <div
                            style={{
                              position: "relative",
                              display: "inline-block",
                            }}
                          >
                            <div
                              style={{
                                position: "relative",
                                display: "inline-block",
                                transform: "translate(0px, 0px)",
                                opacity: 1,
                              }}
                            >
                              C
                            </div>
                            <div
                              style={{
                                position: "relative",
                                display: "inline-block",
                                transform: "translate(0px, 0px)",
                                opacity: 1,
                              }}
                            >
                              a
                            </div>
                            <div
                              style={{
                                position: "relative",
                                display: "inline-block",
                                transform: "translate(0px, 0px)",
                                opacity: 1,
                              }}
                            >
                              n
                            </div>
                          </div>{" "}
                          <div
                            style={{
                              position: "relative",
                              display: "inline-block",
                            }}
                          >
                            <div
                              style={{
                                position: "relative",
                                display: "inline-block",
                                transform: "translate(0px, 0px)",
                                opacity: 1,
                              }}
                            >
                              W
                            </div>
                            <div
                              style={{
                                position: "relative",
                                display: "inline-block",
                                transform: "translate(0px, 0px)",
                                opacity: 1,
                              }}
                            >
                              e
                            </div>
                          </div>{" "}
                          <div
                            style={{
                              position: "relative",
                              display: "inline-block",
                            }}
                          >
                            <div
                              style={{
                                position: "relative",
                                display: "inline-block",
                                transform: "translate(0px, 0px)",
                                opacity: 1,
                              }}
                            >
                              O
                            </div>
                            <div
                              style={{
                                position: "relative",
                                display: "inline-block",
                                transform: "translate(0px, 0px)",
                                opacity: 1,
                              }}
                            >
                              f
                            </div>
                            <div
                              style={{
                                position: "relative",
                                display: "inline-block",
                                transform: "translate(0px, 0px)",
                                opacity: 1,
                              }}
                            >
                              f
                            </div>
                            <div
                              style={{
                                position: "relative",
                                display: "inline-block",
                                transform: "translate(0px, 0px)",
                                opacity: 1,
                              }}
                            >
                              e
                            </div>
                            <div
                              style={{
                                position: "relative",
                                display: "inline-block",
                                transform: "translate(0px, 0px)",
                                opacity: 1,
                              }}
                            >
                              r
                            </div>
                          </div>{" "}
                        </div>
                      </Bounce>
                    </h2>
                  </div>{" "}
                </div>
                <div className="pbmit-tabs">
                  <ul className="what-link-width pbmit-tabs-heading offer-span">
                    {ServiceData.map((s, i) => (
                      <li
                        key={i}
                        className=" pbmit-tab-link pbmit-tab-li-active"
                        data-pbmit-tab={1}
                        onClick={() => window.scrollTo(0, 0)}
                      >
                        <span>
                          <Bounce>
                            <Link
                              onClick={() => window.scrollTo(0, 0)}
                              to={`designplanning/${s.id}`}
                            >
                              {s.title}
                            </Link>
                          </Bounce>
                        </span>
                        <Link
                          onClick={() => window.scrollTo(0, 0)}
                          to={`designplanning/${s.id}`}
                        >
                          <i className="pbmit-base-icon-pbmit-up-arrow" />
                        </Link>

                      </li>
                    ))}
                  </ul>
                  <div className="pbmit-tab-content-wrapper">
                    <div className="pbmit-tab-content pbmit-tab-content-1 pbmit-tab-active">
                      <div
                        className="pbmit-tab-content-title"
                        data-pbmit-tab={1}
                      >
                        Design Consultancy
                        <i className="pbmit-base-icon-pbmit-up-arrow" />
                      </div>
                      <div className="pbmit-tab-content-inner">
                        <div className="pbmit-tab-content-inner">
                          <div className="row g-0">
                            <div className="col-xl-12">
                              <div className="inner-content">
                                <div className="row g-0 tab-content-wrap">
                                  <div className="col-xl-5 pbmit-tab-img">
                                    <Fade >
                                      <img
                                        loading="lazy"
                                        decoding="async"
                                        className="wp-image-17484 size-full"
                                        src={whatwecanoffer}
                                        alt="tab-img-01"
                                        width={647}
                                        height={497}
                                      />
                                    </Fade>
                                  </div>
                                  <div className="col-xl-7 pbmit-tab-list">
                                    <Slide direction="right" >
                                      <h2>Giving your home a new style.</h2>
                                    </Slide>
                                    Transforming your home with a new style can bring fresh energy and elevate its overall aesthetic. Whether you're opting for modern minimalism or a cozy rustic vibe, the right design choices can make your space feel brand new.

                                    <ul>
                                      <li>
                                        Choose a color palette: <span style={{ paddingLeft: 10 }} /> Select colors that reflect your personality and create the ambiance you desire.

                                      </li>
                                      <li> Update furniture and decor: <span style={{ paddingLeft: 10 }} />
                                        Opt for pieces that match your new style, blending functionality with beauty.
                                      </li>
                                      <li> Incorporate texture and layers: <span style={{ paddingLeft: 10 }} />
                                        Use rugs, cushions, and fabrics to add depth and warmth to the space.

                                      </li>
                                      <li>
                                        Add statement pieces: <span style={{ paddingLeft: 10 }} />
                                        Integrate unique artwork, lighting, or accent furniture to create focal points in each room.
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>{" "}
                      </div>
                    </div>
                    <div className="pbmit-tab-content pbmit-tab-content-2 ">
                      <div
                        className="pbmit-tab-content-title"
                        data-pbmit-tab={2}
                      >
                        Architecture Design
                        <i className="pbmit-base-icon-pbmit-up-arrow" />
                      </div>
                      <div className="pbmit-tab-content-inner">
                        <div className="pbmit-tab-content-inner">
                          <div className="row g-0">
                            <div className="col-xl-12">
                              <div className="inner-content">
                                <div className="row g-0 tab-content-wrap">
                                  <div className="col-xl-5 pbmit-tab-img">
                                    {/* <img
                                      loading="lazy"
                                      decoding="async"
                                      className="wp-image-17484 size-full"
                                      src="https://img.freepik.com/free-photo/table-set-dinning-table_1339-3440.jpg?t=st=1723552164~exp=1723555764~hmac=36cd5cae7ba7a16675e17c5471497deb7a98bd499a2a8b7fe48dd6561012ba50&w=996"
                                      alt="tab-img-01"
                                      width={647}
                                      height={497}
                                    /> */}
                                  </div>
                                  <div className="col-xl-7 pbmit-tab-list">
                                    <h2>Giving your home a new style.</h2>
                                    There are many variations of passages of
                                    Lorem Ipsumbut the majority have suffered
                                    alteration in some form, by injected humour,
                                    or words which don't look even.
                                    <ul>
                                      <li>
                                        Experienced, time-served engineers
                                      </li>
                                      <li>Commitment to customer service</li>
                                      <li>
                                        Commitment to taking the stress out of
                                        your project.
                                      </li>
                                      <li>
                                        Flexible with any structure of the
                                        building
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>{" "}
                      </div>
                    </div>
                    <div className="pbmit-tab-content pbmit-tab-content-3 ">
                      <div
                        className="pbmit-tab-content-title"
                        data-pbmit-tab={3}
                      >
                        Corporate Interior
                        <i className="pbmit-base-icon-pbmit-up-arrow" />
                      </div>
                      <div className="pbmit-tab-content-inner">
                        <div className="pbmit-tab-content-inner">
                          <div className="row g-0">
                            <div className="col-xl-12">
                              <div className="inner-content">
                                <div className="row g-0 tab-content-wrap">
                                  <div className="col-xl-5 pbmit-tab-img">
                                    <img
                                      loading="lazy"
                                      decoding="async"
                                      className="wp-image-17484 size-full"
                                      src="https://img.freepik.com/free-photo/table-set-dinning-table_1339-3440.jpg?t=st=1723552164~exp=1723555764~hmac=36cd5cae7ba7a16675e17c5471497deb7a98bd499a2a8b7fe48dd6561012ba50&w=996"
                                      alt="tab-img-03"
                                      width={647}
                                      height={497}
                                    />
                                  </div>
                                  <div className="col-xl-7 pbmit-tab-list">
                                    <h2>Interior Design Transformations.</h2>
                                    There are many variations of passages of
                                    Lorem Ipsumbut the majority have suffered
                                    alteration in some form, by injected humour,
                                    or words which don't look even.
                                    <ul>
                                      <li>
                                        Experienced, time-served engineers
                                      </li>
                                      <li>Commitment to customer service</li>
                                      <li>
                                        Commitment to taking the stress out of
                                        your project.
                                      </li>
                                      <li>
                                        Flexible with any structure of the
                                        building
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>{" "}
                      </div>
                    </div>
                    <div className="pbmit-tab-content pbmit-tab-content-4 ">
                      <div
                        className="pbmit-tab-content-title"
                        data-pbmit-tab={4}
                      >
                        Commercial Interior{" "}
                        <i className="pbmit-base-icon-pbmit-up-arrow" />
                      </div>
                      <div className="pbmit-tab-content-inner">
                        <div className="pbmit-tab-content-inner">
                          <div className="row g-0">
                            <div className="col-xl-12">
                              <div className="inner-content">
                                <div className="row g-0 tab-content-wrap">
                                  <div className="col-xl-5 pbmit-tab-img">
                                    <img
                                      loading="lazy"
                                      decoding="async"
                                      className="wp-image-17484 size-full"
                                      src="https://img.freepik.com/free-photo/table-set-dinning-table_1339-3440.jpg?t=st=1723552164~exp=1723555764~hmac=36cd5cae7ba7a16675e17c5471497deb7a98bd499a2a8b7fe48dd6561012ba50&w=996"
                                      alt="tab-img-04"
                                      width={647}
                                      height={497}
                                    />
                                  </div>
                                  <div className="col-xl-7 pbmit-tab-list">
                                    <h2>
                                      Let's Have A Look At What Creativity
                                    </h2>
                                    There are many variations of passages of
                                    Lorem Ipsumbut the majority have suffered
                                    alteration in some form, by injected humour,
                                    or words which don't look even.
                                    <ul>
                                      <li>
                                        Experienced, time-served engineers
                                      </li>
                                      <li>Commitment to customer service</li>
                                      <li>
                                        Commitment to taking the stress out of
                                        your project.
                                      </li>
                                      <li>
                                        Flexible with any structure of the
                                        building
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>{" "}
                      </div>
                    </div>
                    <div className="pbmit-tab-content pbmit-tab-content-5 ">
                      <div
                        className="pbmit-tab-content-title"
                        data-pbmit-tab={5}
                      >
                        Residential Interior
                        <i className="pbmit-base-icon-pbmit-up-arrow" />
                      </div>
                      <div className="pbmit-tab-content-inner">
                        <div className="pbmit-tab-content-inner">
                          <div className="row g-0">
                            <div className="col-xl-12">
                              <div className="inner-content">
                                <div className="row g-0 tab-content-wrap">
                                  <div className="col-xl-5 pbmit-tab-img">
                                    <img
                                      loading="lazy"
                                      decoding="async"
                                      className="wp-image-17484 size-full"
                                      src="https://img.freepik.com/free-photo/dinner-party-with-delicious-food-table_23-2150648829.jpg?t=st=1723552359~exp=1723555959~hmac=5ccf19c59174afa27bf3b9be8dc45e3454c4b7c4cc6190038c8c980f2ebb7a19&w=996"
                                      alt="tab-img-05"
                                      width={647}
                                      height={497}
                                    />
                                  </div>
                                  <div className="col-xl-7 pbmit-tab-list">
                                    <h2>Strategy - 3D Interior Design.</h2>
                                    There are many variations of passages of
                                    Lorem Ipsumbut the majority have suffered
                                    alteration in some form, by injected humour,
                                    or words which don't look even.
                                    <ul>
                                      <li>
                                        Experienced, time-served engineers
                                      </li>
                                      <li>Commitment to customer service</li>
                                      <li>
                                        Commitment to taking the stress out of
                                        your project.
                                      </li>
                                      <li>
                                        Flexible with any structure of the
                                        building
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
