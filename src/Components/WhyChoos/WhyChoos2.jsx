import React, { useState } from "react";
import "./WhyChoos2.css";
import { Link } from "react-router-dom";
export default function WhyChoos2() {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };
  return (
    <div className={"section-whychoose-cont"}>
      <div className={" container"}>
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
                          <h4 className="pbmit-element-subtitle">
                            <span></span>
                            What we do
                          </h4>
                          <h2
                            className="pbmit-element-title"
                            style={{ perspective: 400 }}
                          >
                            About
                          </h2>
                          <div className="pbmit-heading-desc">
                            Welcome to Hny Studio, Thane's leading destination
                            for high-quality interior design services. We are a
                            team of passionate and creative interior designers
                            and decorators in Thane, Maharashtra, who work in
                            the bustling Waghbil-Thane West area.Our goal is to
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
                            <touchableHilight
                              className={"NewAboutUs-ReadMore"}
                              onClick={toggleShowMore}
                            >
                              {showMore ? "read less" : " read more..."}
                            </touchableHilight>
                          </div>
                        </div>{" "}
                      </div>
                    </div>

                    <div
                      className="elementor-element elementor-element-15a44be pbmit-btn-style-text pbmit-btn-color-globalcolor pbmit-btn-hover-color-blackish pbmit-btn-shape-outline elementor-widget elementor-widget-button"
                      data-id="15a44be"
                      data-element_type="widget"
                      data-widget_type="button.default"
                    >
                      <div className="elementor-widget-container">
                        <div className="elementor-button-wrapper">
                          <Link
                            className="elementor-button elementor-button-link elementor-size-sm"
                            to='/aboutpage'
                          >
                            <span className="elementor-button-content-wrapper">
                              <span className="elementor-button-text">
                                More About
                              </span>
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="special-col-2 col-6">
              <div className="card-alingment">
                <div className="whychose-card-cont">
                  <div className="card">
                    <img src="https://img.freepik.com/free-photo/3d-rendering-cinema-director-chair_23-2151169469.jpg?t=st=1723535046~exp=1723538646~hmac=48ed31a4763c98c6ed4b63d8ca280ebdadb72ee5c9d51993ae65481d270d3948&w=1060" />
                  </div>
                  <div className="card2">
                    <img src="https://img.freepik.com/free-photo/young-happy-couple-meeting-with-financial-advisor-office-woman-is-handshaking-with-agent_637285-3904.jpg?t=st=1723534595~exp=1723538195~hmac=eae58722805c45c0a532489aff8e790bb6f965c6b1794a66504a3f9d4fcf43af&w=1060" />
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
