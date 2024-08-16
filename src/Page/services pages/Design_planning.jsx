import React from "react";
import "./Design.css";
import { FaArrowCircleRight, FaCheckCircle } from "react-icons/fa";
import { MdAddCall, MdDownloading } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { GrDocumentPdf } from "react-icons/gr";
import { TfiDownload } from "react-icons/tfi";

export default function Design_planning() {
  return (
    <div className="section1-design-body-cont">
      <div className="container">
        <div className="design-cont">
          <div className="row">
            <div className="design-row">
              <div className="col-4">
                <div className="design-col">
                  <div className="left-col-cont">
                    <div className="left-card">
                      <div className="left-card-first-cont">
                        <h2>Our Service</h2>
                        <ul className="list-cont">
                          <li>
                            <div className="a-arrow-cont">
                              <a href="#" data-index-left="">
                                TRANSFORMING ROOMS{" "}
                              </a>
                              <FaArrowCircleRight className="right-arrow" />
                            </div>
                          </li>
                          <li>
                            <div className="a-arrow-cont">
                              <a href="#" data-index-left="">
                                WEAVING DREAMS{" "}
                              </a>
                              <FaArrowCircleRight className="right-arrow" />
                            </div>
                          </li>
                          <li>
                            <div className="a-arrow-cont">
                              <a href="#" data-index-left="">
                                INTERIOR DECORATOR{" "}
                              </a>
                              <FaArrowCircleRight className="right-arrow" />
                            </div>
                          </li>
                          <li>
                            <div className="a-arrow-cont">
                              <a href="#" data-index-left="">
                                PROFESSIONAL INTERIOR{" "}
                              </a>
                              <FaArrowCircleRight className="right-arrow" />
                            </div>
                          </li>
                          <li>
                            <div className="a-arrow-cont">
                              <a href="#" data-index-left="">
                                INTERIOR WORK PLAN{" "}
                              </a>
                              <FaArrowCircleRight className="right-arrow" />
                            </div>
                          </li>
                          <li>
                            <div className="a-arrow-cont">
                              <a href="#" data-index-left="">
                                2D/3D LAYOUTS{" "}
                              </a>
                              <FaArrowCircleRight className="right-arrow" />
                            </div>
                          </li>
                          {/* Add more items as needed */}
                        </ul>
                      </div>
                    </div>
                    <div className="left-card-img-cont">
                      <img
                        src="https://img.freepik.com/free-photo/retro-couch-living-room_23-2150711898.jpg?t=st=1723629736~exp=1723633336~hmac=3f22c5a22781deae0c97ac4858a721c8a02fd16650f244da5a95fcaf0d27ae79&w=900"
                        alt="couch"
                      />
                      <div className="img-overlay"></div>
                      <div className="text-overlay">
                        <h4>Ready to start learning?</h4>
                        <h3>Sign up now!</h3>
                        <span>
                          <MdAddCall /> +91 123456789
                        </span>
                        <div className="register-btn">
                          <p>Register Now</p>
                        </div>
                      </div>
                    </div>
                    <div className="left-third-card left-card">
                      <h2>Company Profile</h2>
                      <div className="file-cont">
                        <div className="file">
                          <div className="file-iiner-cont">
                            <GrDocumentPdf />
                            <span>DOWNLOAD PDF FILE</span>
                          </div>
                          <div className="download-circle">
                            <TfiDownload className="download" />
                          </div>
                        </div>
                        <div className="second-file file">
                          <div className="file-iiner-cont">
                            <GrDocumentPdf />
                            <span>DOWNLOAD WORD FILE</span>
                          </div>
                          <div className="download-circle">
                            <TfiDownload className="download" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-8">
                <div className="design-col">
                  <div className="right-col-cont">
                    <div className="right-card-1 right-card">
                      <img
                        src="https://xinterio-demo.pbminfotech.com/demo3/wp-content/uploads/sites/4/2024/05/service-09-1000x615.jpg"
                        alt={"banner-img"}
                      />
                    </div>
                    <div className="right-card2">
                      <div className="right-card-2-cont">
                        <div className="right-card-2-first-div">
                          <h4>
                            Our Goal is to Create Incredible Custom Interior
                            Design
                          </h4>
                        </div>
                        <div className="right-card-2-second-div">
                          <p>
                            <span style={{fontSize:52,fontWeight:700, color:'#BB9A65' ,fontFamily:'Space Grotesk'}}>M</span> onsidering the physical, mental, and emotional
                            needs of people, interior designers use
                            human-centered approaches to address how we live
                            today. Creating novel approaches to promoting
                            health, safety, and welfare, contemporary interiors
                            are increasingly inspired by biophilia as a holistic
                            approach to promoting health, safety, and welfare,
                            contemporary interiors are increasingly inspired by
                            biophilia as a holistic approach to design. By
                            definition, interior design encompasses diverse
                            aspects of our environment. The discipline extends
                            to building materials and finishes; casework,
                            furniture.
                          </p>
                        </div>
                        <div className="container">
                          <div className="right-card2-cont">
                            <div className="row">
                              <div className="right-card2-row">
                                <div className="col-6">
                                  <div className="right-card2-col-cont">
                                    <div className="right-card2-col">
                                      <span>
                                        {" "}
                                        <FaCheckCircle /> Experienced,
                                        time-served engineers{" "}
                                      </span>
                                    </div>
                                    <div className="right-card2-col">
                                      <span>
                                        {" "}
                                        <FaCheckCircle /> Experienced,
                                        time-served engineers{" "}
                                      </span>
                                    </div>
                                    <div className="right-card2-col">
                                      <span>
                                        {" "}
                                        <FaCheckCircle /> Experienced,
                                        time-served engineers{" "}
                                      </span>
                                    </div>
                                    <div className="right-card2-col">
                                      <span>
                                        {" "}
                                        <FaCheckCircle /> Experienced,
                                        time-served engineers{" "}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-6">
                                  <div className="right-card2-col-cont">
                                    <div className="right-card2-col">
                                      <span>
                                        {" "}
                                        <FaCheckCircle /> Experienced,
                                        time-served engineers{" "}
                                      </span>
                                    </div>
                                    <div className="right-card2-col">
                                      <span>
                                        {" "}
                                        <FaCheckCircle /> Experienced,
                                        time-served engineers{" "}
                                      </span>
                                    </div>
                                    <div className="right-card2-col">
                                      <span>
                                        {" "}
                                        <FaCheckCircle /> Experienced,
                                        time-served engineers{" "}
                                      </span>
                                    </div>
                                    <div className="right-card2-col">
                                      <span>
                                        {" "}
                                        <FaCheckCircle /> Experienced,
                                        time-served engineers{" "}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="right-card">
                      <div className="right-card-inner-cont container">
                        <div className="right-card-inner-row row">
                          <div className="right-card-3-row-cont">
                            <div className="col-6">
                              <div className="right-card-3-col">
                                <div className="right-card-3-card">
                                  <img
                                    src="https://xinterio-demo.pbminfotech.com/demo3/wp-content/uploads/sites/4/2024/05/service-details-02.jpg"
                                    alt={"right-car-1img"}
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="col-6">
                              <div className="right-card-3-col">
                                <div className="right-card-3-card">
                                  <img
                                    src="https://xinterio-demo.pbminfotech.com/demo3/wp-content/uploads/sites/4/2024/05/service-details-01.jpg"
                                    alt="right-car-2img"
                                  />
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
  );
}
