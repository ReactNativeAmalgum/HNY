import "./Footer.css";
import { FaFacebookF, FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import logo from "../../Assets/wny-logo-.png";
import { Link } from "react-router-dom";
import { Bounce, Fade, Slide } from "react-awesome-reveal";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function Footer() {
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

  const heading = "Usefull Links".split(" ");
  const heading2 = "Contact Us".split(" ")
  const heading3 = "Social Media".split(" ")
  return (
    <>
      <div className="footer-color">
        <footer className="section  footer-color">
          <div className="footer-top section-padding">
            <div className="container">
              <div className="row row-cols-lg-4 row-cols-md-2 row-cols-sm-2 row-cols-1 mb-n8">
                <div className="col mb-8">
                  <div className="footer-widget footer-about">
                    <div className="footer-logo">
                      <Link to="/">
                        <img src={logo} alt="logo" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col mb-8">
                  <div className="footer-widget footer-list">
                    <h3 className="footer-title" ref={headingRef}>
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
                    </h3>
                    <ul>
                      <li onClick={() => window.scrollTo(0, 0)}>
                        <Link to="/">Home</Link>
                      </li>

                      <li onClick={() => window.scrollTo(0, 0)}>
                        <Link to={`/aboutpage`}>About</Link>
                      </li>
                      <li onClick={() => window.scrollTo(0, 0)}>
                        <Link to={`/designplanning/1`}>Service</Link>
                      </li>
                      <li onClick={() => window.scrollTo(0, 0)}>
                        <Link to="/contact">Contact Us </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col mb-8">
                  <div className="footer-widget footer-list">
                    <h3 className="footer-title" ref={headingRef}>
                      {heading2.map((el, i) => (
                        <motion.span
                          key={i}
                          initial={{ opacity: 0, y: 20 }}
                          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} // fallback
                          transition={{ duration: 0.5, delay: i * 0.3 }}
                        >
                          {el}{" "}
                        </motion.span>
                      ))}
                    </h3>
                    <ul>
                      <li>
                        <span className="titl">T:</span>
                        <span className="desc">90824 89772</span>
                      </li>
                      <li>
                        <span className="titl">E:</span>
                        <span className="desc">
                          hnymumbai@gmail.com <br />
                        </span>
                      </li>
                      <li>
                        <span className="titl">A:</span>
                        <span className="desc">
                          A220, Business complex, LODHA AMARA, Kolshet Rd,
                          Thane, Maharashtra 400607
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col mb-8">
                  <div className="footer-widget footer-list">
                    <h3 className="footer-title" ref={headingRef}>
                      {heading3.map((el, i) => (
                        <motion.span
                          key={i}
                          initial={{ opacity: 0, y: 20 }}
                          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} // fallback
                          transition={{ duration: 0.5, delay: i * 0.3 }}
                        >
                          {el}{" "}
                        </motion.span>
                      ))}
                    </h3>
                    <ul style={{display:'flex', flexDirection:'row'}}>
                      <a className="google-plus" href="https://www.instagram.com/hnyinteriors/">
                        <Bounce delay={100}>

                          <i className="fa fa-google-plus">

                            <FaInstagram />
                          </i>
                        </Bounce>

                      </a>
                      <a className="google-plus" href="https://www.facebook.com/HNYInteriorDesigner">
                        <Bounce delay={200}>
                          <i className="fa fa-facebook">
                            <FaFacebookF />
                          </i>
                        </Bounce>

                      </a>
                      <a className="google-plus" href="https://www.youtube.com/@hnyinteriors">
                        <Bounce delay={300}>

                          <i className="fa fa-facebook">
                            <FaYoutube />
                          </i>
                        </Bounce>

                      </a>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="container">
              <div className="copyright text-center">
                <p>
                  Copyright ©2024 All rights reserved | HNY Interiors{" "}
                  <i className="fa fa-heart" /> by{" "}
                  <a href="https://skdm.in/contact-us-digital-marketing">
                    {" "}
                    shree krishns digital marketing{" "}
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Footer;
