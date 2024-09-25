import React, { useEffect, useRef, useState } from "react";
import "./WhyChoos2.css";
import { Link } from "react-router-dom";
import homeabout from '../../Assets/images/homeabout.jpg';
import { Bounce, Slide } from "react-awesome-reveal";
import { motion } from "framer-motion";
import imageIndex from "../../Assets/images/imgaeIndex";

export default function WhyChoos2() {
  const [showMore, setShowMore] = useState(false);
  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

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

  const heading = "WHAT WE DO".split(" ");

  return (
    <div style={{ paddingTop: '3%' }} className={"section-whychoose-cont"}>
      <div className={"container"}>
        <div className="row">
          <div className="whychoose2-row">
            <div className="special-col col-6">
              <div className="whychoose2-col">
                <div
                  className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-197babe pbmit-bg-color-over-image pbmit-bgimage-no pbmit-bgcolor-yes"
                  data-id="197babe"
                  data-element_type="column"
                >
                  <div className="elementor-widget-wrap elementor-element-populated">
                    <div
                      className="elementor-element elementor-element-469e977 elementor-widget elementor-widget-pbmit_heading"
                      data-id="469e977"
                      data-element_type="widget"
                      data-widget_type="pbmit_heading.default"
                    >
                      <div className="elementor-widget-container">
                        <div className="pbmit-heading-subheading pbmit-reverse-heading-yes animation-style2">
                          <h4 className="pbmit-element-subtitle" ref={headingRef}>
                            <span></span>
                            {heading.map((el, i) => (
                              <motion.span
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5, delay: i * 0.3 }}
                              >
                                {el}{" "}
                              </motion.span>
                            ))}
                          </h4>
                          <Bounce>
                            <h2
                              className="pbmit-element-title"
                              style={{ perspective: 400 }}
                            >
                              About
                            </h2>
                          </Bounce>
                          <div className="pbmit-heading-desc">
                            Welcome to Hny Studio, Thane's leading destination
                            for high-quality interior design services. We are a
                            team of passionate and creative interior designers
                            and decorators in Thane, Maharashtra, who work in
                            the bustling Waghbil-Thane West area. Our goal is to
                            make your spaces aesthetically pleasing and
                            functional, reflecting your personality and
                            lifestyle.
                            {showMore && (
                              <>
                                <div className="pbmit-heading-desc">
                                  Hny Studio takes pride in its ability to
                                  provide great interior design solutions that
                                  are suited to each client's specific needs.
                                  Our Thane interior designers and decorators
                                  have successfully developed and implemented a
                                  wide range of projects, including residential,
                                  commercial, and architectural designs. Each
                                  project is tackled from a new angle,
                                  guaranteeing that the end product is not only
                                  physically appealing but also highly useful
                                  and comfortable.
                                </div>
                                <div className="pbmit-heading-desc">
                                  We think that great design is a collaborative
                                  effort, therefore we work closely with our
                                  clients to understand their vision,
                                  preferences, and needs. This collaborative
                                  approach enables us to build rooms that
                                  authentically reflect the client's personality
                                  and lifestyle. Our Interior Designers &
                                  Interior Decorators in Thane are experts at
                                  integrating creativity and pragmatism,
                                  ensuring that each design element has a
                                  function and contributes to the overall
                                  beauty.
                                </div>
                              </>
                            )}
                            <span
                              className={"NewAboutUs-ReadMore"}
                              onClick={toggleShowMore}
                            >
                              {showMore ? "read less" : " read more..."}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      className="elementor-element elementor-element-15a44be pbmit-btn-style-text pbmit-btn-color-globalcolor pbmit-btn-hover-color-blackish pbmit-btn-shape-outline elementor-widget elementor-widget-button"
                      data-id="15a44be"
                      data-element_type="widget"
                      data-widget_type="button.default"
                    >
                      <Slide direction="up" >

                        <div className="elementor-widget-container">
                          <div className="elementor-button-wrapper">
                            <Link
                             style={{textDecoration:'none'}}
                              className="elementor-button elementor-button-link elementor-size-sm"
                              to="/aboutpage"
                            >
                              <span className="elementor-button-content-wrapper">

                                <span className="elementor-button-text">
                                  More About
                                </span>
                              </span>
                            </Link>
                          </div>
                        </div>
                      </Slide>

                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="special-col-2 col-6">
              <div className="card-alignment">
                <div className="whychose-card-cont">
                  <div className="whychoose2-card">
                    <img src={homeabout} alt="About Hny Studio" />
                  </div>
                  <div className="card2">
                    <img src={imageIndex.HOMEABT} alt="Meeting" />
                  </div>
                  <div className="year-card">
                    <p className="started-txt">STARTED IN</p>
                    <p className="year-txt">1995</p>
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
