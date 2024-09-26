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
import { MetaTags } from "react-meta-tags";
import Page404 from "../Page404";

export default function Design_planning() {
  const { slug } = useParams();
  const [serviceDetail] = useState(ServiceData);
  const [isInView, setIsInView] = useState(false);
  const headingRef = useRef(null);
  useEffect(() => {
    console.log('Slug from URL:', slug);
    const observer = new IntersectionObserver(
      ([entry]) => {
        console.log(entry.isIntersecting);
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

  }, [slug]);

  // const service = ServiceData.find((service) => service.slug === `/${slug}`);
  const service = ServiceData.find((service) => service.slug === slug);
  // const service = serviceDetail.find((service) => service.id === parseInt(slug));

  if (!service) {
    return <Page404 />; // Render an error message if the service is not found
  }




  const heading = "WHAT WE CAN OFFER".split(" ");
  // const heading2 = {serviceDetail}.split(" ");

  const altService = () => {
    return (
      console.log('service.alt')
    )
  }
  return (
    <>
      <MetaTags>
        <title>{service.title}</title>
        <meta title={service.title} />
        <meta name="description" content={[ServiceData[0].title, ServiceData[1].title, ServiceData[2].title, ServiceData[3].title,ServiceData[4].title]} />
        <link rel="canonical" href={`https://DEMO.in/${service.slug}`}/>
        <meta http-equiv="cache-control" content="no-cache" />
        <meta http-equiv="expires" content="0" />
        <meta http-equiv="pragma" content="no-cache" />
        <meta property="og:title" content={service.title} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://DEMO.in/" />
        <meta property="og:description" content="Find the leading Interior Designers & Interior Decorators in Thane to elevate your living or workspace. Our experts offer bespoke design solutions." />
        <meta property="og:image" content="https://kinararesort.in/static/media/logo.146c55d2a549f20e2963.png" />
      </MetaTags>
      
      <div>
        <div className="section1-design-body-cont">
          <div className="container">

            <div className="design-cont">
              <div className="row">
                <div className="left-card special-right-card">
                  <Slide direction="down" >
                    <h1
                      style={{
                        marginTop: 50,
                        borderBottomColor: '#e5646e',
                        marginBottom: 30,
                        // borderBottom: "2px solid black", 
                        paddingBottom: 5
                      }}
                      className="specialh1"
                    >
                      {service.h1}
                    </h1>
                  </Slide>
                </div>
                <div className="design-row">
                  <div className="specillay-col-left col-4 order-2  ">
                    <div className="special-display-2" >
                      <div className="left-card special-left-card ">
                        <Slide direction="down" >
                          <div className="heading-card">
                            <h1
                              style={{
                                marginTop: 30,
                                borderBottomColor: '#e5646e',
                                marginBottom: 50,
                                fontWeight: 500,
                                borderBottom: "2px solid ", // Custom underline styling
                                paddingBottom: 5 // Optional padding for spacing
                              }}
                              className="specialh1"
                            >
                              {service.h1}
                            </h1>
                          </div>
                        </Slide>
                        <Slide direction="up">
                          <div className="left-card-img-cont">

                            <div className="img-overlay"></div>
                            <div className="text-overlay">
                              <h4>Ready to start learning?</h4>
                              <h3>Sign up now!</h3>
                              <span>
                                <MdAddCall /> +91 90824 89772
                              </span>
                              <div className="register-btn">
                                <a style={{ textDecoration: 'none' }} href='tel:+919082489772'><p>Call Now</p></a>
                              </div>
                            </div>
                          </div>
                        </Slide>
                      </div>
                    </div>
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
                                        to={`/designplanning/${service.slug}`} // Make sure to include the correct base path
                                        className={
                                          window.location.pathname === `/designplanning/${service.slug}` // Compare with the full path
                                            ? "active"
                                            : ""
                                        }
                                      >
                                        + {service.title}
                                      </Link>
                                    </div>
                                  </li>
                                ))}
                              </ul>

                            </div>
                          </Slide>
                        </div>
                        <Slide direction="up">
                          <div className="left-card-img-cont">

                            <div className="img-overlay"></div>
                            <div className="text-overlay">
                              <h4>Ready to start learning?</h4>
                              <h3>Sign up now!</h3>
                              <span>
                                <MdAddCall /> +91 90824 89772
                              </span>
                              <div className="register-btn">
                                <a style={{ textDecoration: 'none' }} href='tel:+919082489772'><p>Call Now</p></a>
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
                          <img src={service.img[2]} alt={service.alt} />

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
                              <img style={{ height: '100%', width: '100%' }} src={service.img[1]} alt={service.alt} />
                            </Slide>
                          </div>
                          <div className="service-gallery">
                            <Slide style={{ heigh: '100%', width: '100%' }} direction="right">

                              <img src={service.img[2]} alt={service.alt} />
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
