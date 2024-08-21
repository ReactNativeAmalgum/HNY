import React, { useState } from "react";
import "./Design.css";
import { FaArrowCircleRight, FaCheckCircle } from "react-icons/fa";
import { MdAddCall, MdDownloading } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";
import { Link, useLocation, useParams } from "react-router-dom";
import { GrDocumentPdf } from "react-icons/gr";
import { TfiDownload } from "react-icons/tfi";
import { ServiceData } from "../../Assets/Dynamic Data/ServiceData";
import Footer from "../../Components/Footer/Footer";

export default function Design_planning() {
  const { id } = useParams(); // Extracting id from the URL
  const [serviceDetail] = useState(ServiceData); // Using ServiceData directly

  // Finding the service that matches the id from the URL
  const service = serviceDetail.find((service) => service.id === parseInt(id));

  if (!service) {
    return <div>Service Page not found</div>; // Render an error message if the service is not found
  }
  return (
    <>
    <div>
      <div className="section1-design-body-cont">
        <div className="container">
          <div className="design-cont">
            <div className="row">
              <div className="design-row">
                <div className="specillay-col-left col-4 order-2  ">
                  <div className="left-design-cont design-col ">
                    <div className="left-col-cont">
                      <div className="left-card">
                        <div className="left-card-first-cont">
                          <h2>Our Service</h2>
                          <ul className="list-cont">
                            {ServiceData.map((service) => (
                              <li key={service.id}>
                                <div className="a-arrow-cont">
                                  <Link
                                    to={`/designplanning/${service.id}`}
                                    data-index-left=""
                                  >
                                    {service.title}
                                  </Link>
                                  <FaArrowCircleRight className="right-arrow" />
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <div className="left-card-img-cont">
                        {/* <img
                          src="https://img.freepik.com/free-photo/retro-couch-living-room_23-2150711898.jpg?t=st=1723629736~exp=1723633336~hmac=3f22c5a22781deae0c97ac4858a721c8a02fd16650f244da5a95fcaf0d27ae79&w=900"
                          alt="couch"
                        /> */}
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
                    </div>
                  </div>
                </div>
                <div className="specifically-right-col col-8 order-1  ">
                  {/* <div className="design-col"> */}
                  <div className="right-col-cont">
                    <div className="right-card-1 right-card">
                      <img src={service.img[0]} alt={"banner-img"} />
                    </div>
                    <div className="right-card2">
                      <div className="right-card-2-cont">
                        <div className="right-card-2-first-div">
                          <h4>
                            <h4>{service.title}</h4>{" "}
                          </h4>
                        </div>
                        <div className="right-card-2-second-div">
                          <p>
                            <span
                              style={{
                                fontSize: 52,
                                fontWeight: 700,
                                color: "#BB9A65",
                                fontFamily: "Space Grotesk",
                              }}
                            >
                              M
                            </span>
                            {service.description1}
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
                      <div className="service-gallery-cont">
                        <div className="service-gallery">
                          <img src={service.img[1]} />
                        </div>
                        <div className="service-gallery">
                          <img src={service.img[2]} />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
}
