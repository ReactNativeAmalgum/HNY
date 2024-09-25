import React, { useEffect, useRef, useState } from "react";
import "./About.css";
import { motion } from "framer-motion";
import { Slide } from "react-awesome-reveal";
import imageIndex from "../../Assets/images/imgaeIndex";

function About() {
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

  const heading = "ABOUT US".split(" ");

  return (
    <section className="NewAbout-Section-1">
      <div className="container">
        <div className="NewAbout_Section-Con">
          <div className="row">
            <div className="col-md-6">
              <div className="NewAboutUS-Image-Main-con">
                <div className="row">
                  <div className="col-md-6">
                    <div className="NewAboutUS-Image-con">
                      <img
                        src= {imageIndex.ABOUT1}
                        alt="Event"
                      />
                    </div>
                  </div>
                  <div className="col-md-6 displaynone">
                    <div className="NewAboutUS-Image-Second-con">
                      <div className="NewAboutUS-Image-Second">
                        <img
                          src={imageIndex.ABOUT2}
                          alt="Event"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 displaynone">
                    <div className="NewAboutUS-Image-Third-con">
                      <div className="NewAboutUS-Image-Third">
                        <img
                          src="https://image2.jdomni.in/banner/16092019/89/F4/CF/FF90B87528F21CB233147D42DF_1568624207940.jpg?output-format=webp"
                          alt="Event"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 displaynone">
                    <div className="NewAboutUS-Image-Forth-con">
                      <img
                        src="https://image3.jdomni.in/banner/03102019/39/23/E2/C940BAEC5776C3FDB0970C3E79_1570097108765.jpg?output-format=webp"
                        alt="Event"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="NewAbout-Section-con-details-Info">
                <div className="NewAbout-Section-con-details-con">
                  <div className="NewAbout-Section-con-details-Info-con">
                    <h2 className="NewAboutUs-tagLlines paddingtopr " ref={headingRef}>
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
                    </h2>
                    <Slide direction="right">
                    <h3 className="textcent">Welcome to HNY Interiors</h3>
                    </Slide>
                    <p style={{ textAlign: "justify" }}>
                      Welcome to Hny Studio, Thane's leading destination for
                      high-quality interior design services. We are a team of
                      passionate and creative interior designers and decorators
                      in Thane, Maharashtra, who work in the bustling
                      Waghbil-Thane West area.Our goal is to make your spaces
                      aesthetically pleasing and functional, reflecting your
                      personality and lifestyle.
                    </p>
                    <p style={{ textAlign: "justify" }}>
                      Hny Studio takes pride in its ability to provide great
                      interior design solutions that are suited to each client's
                      specific needs. Our Thane interior designers and
                      decorators have successfully developed and implemented a
                      wide range of projects, including residential, commercial,
                      and architectural designs. Each project is tackled from a
                      new angle, guaranteeing that the end product is not only
                      physically appealing but also highly useful and
                      comfortable.
                    </p>
                    <p style={{ textAlign: "justify" }}>
                      We think that great design is a collaborative effort,
                      therefore we work closely with our clients to understand
                      their vision, preferences, and needs. This collaborative
                      approach enables us to build rooms that authentically
                      reflect the client's personality and lifestyle. Our
                      Interior Designers & Interior Decorators in Thane are
                      experts at integrating creativity and pragmatism, ensuring
                      that each design element has a function and contributes to
                      the overall beauty.
                    </p>
                    {showMore && (
                      <>
                        <p style={{ textAlign: "justify" }}>
                          Our portfolio showcases some of the finest designs we
                          have completed, thanks to our renowned designers'
                          expertise and dedication. From modern apartments to
                          elegant office spaces, our projects demonstrate our
                          versatility and commitment to excellence. We
                          understand that every project is unique, and we strive
                          to exceed our clients' expectations by delivering
                          designs that are innovative, functional, and timeless.
                        </p>
                        <p style={{ textAlign: "justify" }}>
                          As leading Interior Designers & Interior Decorators in
                          Thane, we stay up to current on industry trends and
                          innovations. This enables us to include cutting-edge
                          design aspects and environmental methods into our
                          projects, guaranteeing that our clients receive the
                          most effective solutions. Our team's attention to
                          detail, rigorous preparation, and unique approach
                          distinguish us from the competition.
                        </p>
                        <p style={{ textAlign: "justify" }}>
                          At Hny Studio, we are enthusiastic about designing
                          places that inspire and delight. Whether you want to
                          redecorate your house, office, or any other location,
                          our Thane interior designers and decorators will help
                          you realize your vision. We urge you to look through
                          our portfolio and see the difference that outstanding
                          design can create.
                        </p>
                        <p style={{ textAlign: "justify" }}>
                          Thank you for looking into Hny Studio for your
                          interior design needs. We look forward to working with
                          you and developing settings that you will enjoy for
                          many years to come. Contact us immediately to set up a
                          consultation and start renovating your space with
                          Thane's best interior designers and decorators.
                        </p>
                      </>
                    )}
                    <touchableHilight
                      className={"NewAboutUs-ReadMore"}
                      onClick={toggleShowMore}
                    >
                      {showMore ? "read less" : "...read more"}
                    </touchableHilight>
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

export default About;
