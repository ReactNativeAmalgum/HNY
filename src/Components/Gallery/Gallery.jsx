import React, { useEffect, useRef, useState } from "react";
import "./Gallery.css";
import { Bounce, Slide } from "react-awesome-reveal";
import { motion } from "framer-motion";
import { ServiceData } from "../../Assets/Dynamic Data/ServiceData";

function Gallery() {

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

  const heading = "Elegant designs enhancing your living spaces beautifully.".split(" ");

  return (
    <>
      <section className="marg-t">
        <div className="row">
          <div className="col-lg-12">
            <div
              className="cat_section_headings wow zoom"
              style={{ visibility: "visible", animationName: "zoom" }}
            >
              <span className="cat_subheading" ref={headingRef}>
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
              </span>
              <Bounce >
                <h4>Our Gallery</h4>
              </Bounce>
              <div className="cat_border" />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="gallery-image">
                <img
                  src={ServiceData[0].img[0]}
                  alt="Interior Designer in Thane"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="gallery-image">
                <img
                  src={ServiceData[1].img[1]}
                  alt="Interior Designer in Thane"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="gallery-image">
                <img
                  src={ServiceData[2].img[1]}
                  alt="Interior Designer in Thane"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
          <div />
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="gallery-image">
                <img
                  src={ServiceData[3].img[1]}
                  alt="Interior Designer in Thane"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="gallery-image">
                <img
                  src={ServiceData[4].img[1]}
                  alt="Interior Designer in Thane"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="gallery-image">
                <img
                  src={ServiceData[1].img[2]}
                  alt="Interior Designer in Thane"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Gallery;
