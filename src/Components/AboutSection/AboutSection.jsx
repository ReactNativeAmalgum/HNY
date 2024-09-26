import React, { useEffect, useRef, useState } from "react";
import "./AboutSection.css";
import Marquee from "react-fast-marquee";
import Footer from "../Footer/Footer";
import About from "./About";
import { Bounce, Fade, Slide } from "react-awesome-reveal";

function AboutSection() {

  return (
    <>
      <Slide direction="right">
        <section>
          <div className="about-banner">
            <Fade delay={500} duration={500} >

              <h1 className="specialh1">About Us</h1>
            </Fade>

          </div>
        </section>
      </Slide>
      <About />
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <Bounce>

                <div className="tittle-card">
                  <div className="count">01</div>
                  <h3>Our Design Philosophy</h3>
                </div>
                <p>
                  Hny Studio's design philosophy is based on the concept that
                  rooms should be a balanced blend of beauty and usefulness. We
                  seek to create places that inspire and uplift our clients,
                  reflecting their own likes and lives. Our approach blends
                  creative thought with great attention to detail, ensuring that
                  every component of the design contributes to a cohesive and
                  visually appealing whole. We are committed to pushing the
                  boundaries of creativity while remaining practical, resulting in
                  environments that are both beautiful and functional.
                </p>
              </Bounce>

            </div>
            <div className="col-lg-4">
              <Bounce>

                <div className="tittle-card">
                  <div className="count">02</div>
                  <h3>Client-Centric Approach</h3>
                </div>
                <p>
                  At Hny Studio, we put our clients first in all we do. We think
                  that good design requires close collaboration and transparent
                  communication with our clients. Understanding their goals,
                  tastes, and vision allows us to produce bespoke design solutions
                  that exceed expectations. Our staff is committed to offering
                  great service, making our clients feel appreciated and engaged
                  throughout the design process. We focus our clients'
                  satisfaction, making their aims our own and strive to make their
                  aspirations a reality.
                </p>
              </Bounce>

            </div>
            <div className="col-lg-4">
              <Bounce>

                <div className="tittle-card">
                  <div className="count">03</div>
                  <h3>Innovative and Sustainable Designs</h3>
                </div>
                <p>
                  At Hny Studio, innovation and sustainability are fundamental
                  components of our design philosophy. In order to create
                  environments that are both aesthetically pleasing and
                  environmentally conscious, we are always investigating new
                  materials, technologies, and design approaches. As part of our
                  commitment to sustainability, we minimize our environmental
                  impact by utilizing eco-friendly procedures and supplies
                  whenever feasible. By welcoming innovation, we make sure that
                  our designs are cutting edge and able to satisfy our clients'
                  changing needs while also making the earth a healthier place.
                </p>
              </Bounce>

            </div>

          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <img
            src="https://cozy.qodeinteractive.com/wp-content/uploads/2016/11/about-simple-img-3.png"
            alt="Interior Designers & Interior Decorators in Thane"
          />
        </div>
      </section>

      <section className="marg-t">
        <div className="container">
          <Marquee>
            <ul className="markuee-ul">

              <li>
                <div className="pmg-gapp">
                  <img
                    src="https://cozy.qodeinteractive.com/wp-content/uploads/2016/12/client-3.png"
                    alt="Interior Designers & Interior Decorators in Thane"
                  />
                </div>
              </li>
              <li>
                <img
                  src="https://cozy.qodeinteractive.com/wp-content/uploads/2016/12/client-2.png"
                  alt="Interior Designers & Interior Decorators in Thane"
                />
              </li>
              <li>
                <div className="pmg-gapp">
                  <img
                    src="https://cozy.qodeinteractive.com/wp-content/uploads/2016/12/client-5.png"
                    alt="Interior Designers & Interior Decorators in Thane"
                  />
                </div>
              </li>
              <li>
                <div className="pmg-gapp">
                  <img
                    src="https://cozy.qodeinteractive.com/wp-content/uploads/2016/12/client-2.png"
                    alt="Interior Designers & Interior Decorators in Thane"
                  />
                </div>
              </li>
              <li>
                <div className="pmg-gapp">
                  <img
                    src="https://cozy.qodeinteractive.com/wp-content/uploads/2016/12/client-1.png"
                    alt="Interior Designers & Interior Decorators in Thane"
                  />
                </div>
              </li>
              <li>
                <div className="pmg-gapp">
                  <img
                    src="https://cozy.qodeinteractive.com/wp-content/uploads/2016/12/client-2.png"
                    alt="Interior Designers & Interior Decorators in Thane"
                  />
                </div>
              </li>
              <li>
                <div className="pmg-gapp">
                  <img
                    src="https://cozy.qodeinteractive.com/wp-content/uploads/2016/12/client-4.png"
                    alt="Interior Designers & Interior Decorators in Thane"
                  />
                </div>
              </li>
              <li>
                <div className="pmg-gapp">
                  <img
                    src="https://cozy.qodeinteractive.com/wp-content/uploads/2016/12/client-5.png"
                    alt="Interior Designers & Interior Decorators in Thane"
                  />
                </div>
              </li>
              <li>
                <div className="pmg-gapp">
                  <img
                    src="https://cozy.qodeinteractive.com/wp-content/uploads/2016/12/client-6.png"
                    alt="Interior Designers & Interior Decorators in Thane"
                  />
                </div>
              </li>

            </ul>
          </Marquee>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default AboutSection;
