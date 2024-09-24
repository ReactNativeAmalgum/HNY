import React, { useEffect, useRef, useState } from "react";
import "./Design.css";
import { FaArrowCircleRight, FaCheckCircle } from "react-icons/fa";
import { MdAddCall, MdDownloading } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";
import { Link, useLocation, useParams } from "react-router-dom";
import { GrDocumentPdf } from "react-icons/gr";
import { TfiDownload } from "react-icons/tfi";
import { ServiceData } from "../../Assets/Dynamic Data/ServiceData";
import Footer from "../../Components/Footer/Footer";
import { Bounce, Slide } from "react-awesome-reveal";
import { motion } from "framer-motion";

export default function Design_planning() {
  const { id } = useParams(); // Extracting id from the URL
  const [serviceDetail] = useState(ServiceData); // Using ServiceData directly
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
  // Finding the service that matches the id from the URL
  const service = serviceDetail.find((service) => service.id === parseInt(id));

  if (!service) {
    return <div>Service Page not found</div>; // Render an error message if the service is not found
  }




  const heading = "WHAT WE CAN OFFER".split(" ");

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
                          <Slide direction="down" >
                            <div className="left-card-first-cont">
                              <h2>Our Service</h2>
                              <ul className="list-cont">
                                {ServiceData.map((service) => (
                                  <li key={service.id}>
                                    <div className="a-arrow-cont">
                                      <Link
                                        onClick={() => window.scroll(0, 0)}
                                        to={`/designplanning/${service.id}`}
                                        className={
                                          window.location.pathname ===
                                            `/designplanning/${service.id}`
                                            ? "active"
                                            : ""
                                        }
                                      >
                                        + {service.title}
                                      </Link>
                                      {/* <FaArrowCircleRight className="right-arrow" /> */}
                                    </div>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </Slide>
                        </div>
                        <Slide direction="up">
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
                                <MdAddCall /> +91 90824 89772
                              </span>
                              <div className="register-btn">
                                <a href='tel:+919082489772'><p>Call Now</p></a>
                              </div>
                            </div>
                          </div>
                        </Slide>
                      </div>
                    </div>
                  </div>
                  <div className="specifically-right-col col-8 order-1  ">
                    {/* <div className="design-col"> */}
                    <div className="right-col-cont">
                      <div className="right-card-1 right-card">
                        <Slide direction="left" >
                          <img src={service.img[0]} alt={"banner-img"} />

                        </Slide>
                      </div>
                      <div className="right-card2">
                        <div className="right-card-2-cont">
                          <div className="right-card-2-first-div">
                            <Bounce>
                              <h4>{service.title}</h4>{" "}
                            </Bounce>
                          </div>
                          <div className="right-card-2-second-div">
                            <div dangerouslySetInnerHTML={{ __html: service.descp }} />
                            {[...Array(14)].map((_, index) => {
                              const key = `descp${index + 1}`;
                              return service[key] ? (
                                <div key={index}>
                                  <div dangerouslySetInnerHTML={{ __html: service[key] }} />
                                </div>
                              ) : null;
                            })}
                            {/* </div> */}
                          </div>
                          <div className="container">
                            <div className="right-card2-cont">
                              <div className="row">
                                <div className="right-card2-row">
                                  <div className="col-6">
                                    <div className="right-card2-col-cont"></div>
                                  </div>
                                  <div className="col-6">
                                    <div className="right-card2-col-cont"></div>
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
                            <Slide style={{ heigh: '100%', width: '100%' }} direction="left">
                              <img style={{ height: '100%', width: '100%' }} src={service.img[1]} />
                            </Slide>
                          </div>
                          <div className="service-gallery">
                            <Slide style={{ heigh: '100%', width: '100%' }} direction="right">

                              <img src={service.img[2]} />
                            </Slide>

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
      </div >
      <Footer />
    </>
  );
}
