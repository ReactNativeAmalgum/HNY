import React, { useLayoutEffect, useState } from "react";
import Footer from "../Components/Footer/Footer";
import WorkTab from "./WorkTab";
import { Link } from "react-router-dom";
import { Image } from "antd";
import './gallerypage.css'
import { Bounce, Fade, Slide } from "react-awesome-reveal";
import { MetaTags } from "react-meta-tags";
function GalleryPage() {
  const [items, setItems] = useState([]);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
    setItems(WorkTab);
  }, []);

  const filterItems = (category) => {
    if (category === "All") {
      setItems(WorkTab);
    } else {
      const updatedItems = WorkTab.filter((item) => item.category === category);
      setItems(updatedItems);
    }
  };

  const interiorWorkContent = [
    {
      descp1:
        "Transforming your space into a masterpiece requires expert attention to detail and a deep understanding of your vision. At Hny Studio, we excel in delivering top-notch interior work tailored specifically to the needs of clients in Thane. Our team of skilled interior designers is dedicated to enhancing the functionality and aesthetics of your environment, whether it's a residential, commercial, or architectural project.",
    },
    {
      descp1:
        "Interior work involves much more than just choosing colors and furniture; it encompasses a holistic approach to designing spaces that reflect your personality while ensuring maximum functionality. Our interior work services in Thane focus on every aspect of design, from space planning and layout optimization to the selection of materials and finishes. We believe that effective interior work should blend creativity with practicality, providing solutions that not only look great but also serve your everyday needs.",
    },
    {
      descp1:
        "Our process begins with a thorough consultation to understand your style, preferences, and requirements. This collaborative approach allows us to craft customized design plans that align with your vision. We pay close attention to detail throughout the design process, ensuring that every element of your interior work is thoughtfully considered and expertly executed.",
    },
    {
      descp1:
        "In Thane, where space can be at a premium, efficient interior work is essential. We specialize in maximizing the potential of your space through innovative design solutions that make the most of every square foot. Our commitment to using high-quality materials and the latest design techniques ensures that your interior work not only meets but exceeds your expectations.",
    },
    {
      descp1:
        "By choosing Hny Studio for your interior work needs in Thane, you are partnering with a team that is dedicated to delivering excellence. Our focus on client satisfaction and our ability to adapt to the latest trends and technologies in interior design set us apart. We are passionate about creating spaces that are both beautiful and functional, providing a seamless experience from concept to completion.",
    },
    {
      descp1:
        "Explore our portfolio to see examples of our exceptional interior work and discover how we can help transform your space into something extraordinary.",
    },
  ];

  return (
    <>
      <MetaTags>
        <title>Interior Designer in Thane | HNY Studios</title>
        <meta title="Interior Designer in Thane | HNY Studios" />
        <meta name="description" content="Interior Work, Interior Designer in Thane, Interior Designers & Interior Decorators in Thane,  Interior Design & Planning Services in Thane, Modular Kitchen Designer in Thane, Interior Designing, Commercial Interior Designer in Thane, Interior Designer near Thane, Best Interior Decorator in Thane" />
        <link rel="canonical" href="https://hnyspaces.com/interior-work" />
        <meta http-equiv="cache-control" content="no-cache" />
        <meta http-equiv="expires" content="0" />
        <meta http-equiv="pragma" content="no-cache" />
        <meta property="og:title" content="INTERIOR WORK | HNY Studios" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://hnyspaces.com/" />
        <meta property="og:description" content="Discover top-notch Interior Work to transform your space. Our professional designers offer creative and functional solutions for homes and offices." />
        <meta property="og:image" content="https://kinararesort.in/static/media/logo.146c55d2a549f20e2963.png" />
      </MetaTags>
      <Slide direction="right">
        <section>
          <div className="gall-banner">
            <Fade delay={500} duration={500} >
              <h2 >Gallery</h2>
            </Fade>
          </div>
        </section>
      </Slide>

      <div className="interior-work-container">
        {interiorWorkContent.map((item, index) => (
          <p key={index} className="interior-work-paragraph">
            {item.descp1}
          </p>
        ))}
      </div>
      <section id="project-version-one">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="cat_section_headings wow zoom"
                style={{ visibility: "visible", animationName: "zoom" }}
              >
                <Bounce>
                  <span className="cat_subheading">Our Gallery</span>

                </Bounce>
                {/* <h4>Banquet & Events</h4> */}
                <div className="cat_border" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <ul className="gallery-filter">
                <li
                  data-filter="all"
                  onClick={() => filterItems("All")}
                  className="filter active"
                >
                  <span>All</span>
                </li>
                <li
                  data-filter=".meeting"
                  onClick={() => filterItems("interior")}
                  className="filter"
                >
                  <span>DESIGN PLANNING</span>
                </li>
                <li
                  data-filter=".talking"
                  onClick={() => filterItems("trunkey")}
                  className="filter"
                >
                  <span>KITCHEN INSTALLATION</span>
                </li>
                <li
                  data-filter=".conference"
                  onClick={() => filterItems("civil")}
                  className="filter"
                >
                  <span>FURNITURE & HOME DECOR </span>
                </li>
                <li
                  data-filter=".events"
                  onClick={() => filterItems("modularkitchen")}
                  className="filter"
                >
                  <span>OTHER EXPERTISE</span>
                </li>
                <li
                  data-filter=".party"
                  onClick={() => filterItems("furniture")}
                  className="filter"
                >
                  <span>COMMERCIAL INTERIOR DESIGN</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="row nor4al-gallery" id="image-gallery-mix">
            {items.map((v, i) => {
              return (
                <>
                  <div
                    className="col-lg-4 col-sm-6 col-xs-12 concert party mix"
                    style={{ display: "inline-block" }}
                  >
                    <div
                      style={{ width: "100%", height: "100%" }}
                      className="img-wrap"
                    >
                      <Slide style={{ height: '100%' }} direction="up">
                        <Image
                          width={"100%"}
                          height={"100%"}
                          // style={{ width: "100%", height: "100%" }}
                          src={v.imageUr1}
                          alt=""
                        />
                      </Slide>
                      {/* <a className="fancybox">
                        <div className="content-wrap hvr-rectangle-out">
                          <div className="border">
                            <div className="content">
                              <h4>Awesome Image Really Awesome</h4>
                              <span>This is Our Gallery image</span>
                            </div>
                          </div>
                        </div>
                      </a> */}
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default GalleryPage;

/**
 href="images/project-v1/1.jpg"
 */
