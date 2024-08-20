import React from "react";
import "./AboutSection.css";
import Marquee from "react-fast-marquee";
import Footer from "../Footer/Footer";
import About from "./About";

function AboutSection() {
  return (
    <>
      <section>
        <div className="about-banner">
          <h1>About Us</h1>
        </div>
      </section>
      <About />
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="tittle-card">
                <div className="count">01</div>
                <h3>Perfect Design</h3>
              </div>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur vitae vero reiciendis quasi nisi aspernatur.
                Accusamus voluptate, error commodi assumenda natus consectetur
                consequuntur optio veritatis susc.
              </p>
            </div>
            <div className="col-lg-4">
              <div className="tittle-card">
                <div className="count">02</div>
                <h3>Perfect Design</h3>
              </div>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur vitae vero reiciendis quasi nisi aspernatur.
                Accusamus voluptate, error commodi assumenda natus consectetur
                consequuntur optio veritatis su
              </p>

              <p></p>
            </div>
            <div className="col-lg-4">
              <div className="tittle-card">
                <div className="count">03</div>
                <h3>Perfect Design</h3>
              </div>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur vitae vero reiciendis quasi nisi aspernatur.
                Accusamus voluptate, error commodi assumenda natus consectetur
                consequuntur optio veritatis su
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <img
            src="https://cozy.qodeinteractive.com/wp-content/uploads/2016/11/about-simple-img-3.png"
            alt=""
          />
        </div>
      </section>

      <section className="marg-t">
        <div className="container">
          <Marquee>
            <ul className="markuee-ul">
              {/* <li>
                                      <div className="pmg-gapp">
                                        <img
                                          src={adsidas}
                                          alt=""
                                        />
                                      </div>
                                    </li>
                                    <li>
                                      <div className="pmg-gapp">
                                        <img
                                          src={kip}
                                          alt=""
                                        />
                                      </div>
                                    </li>
                                    <li>
                                      <div className="pmg-gapp">
                                        <img
                                          src={lee}
                                          alt=""
                                        />
                                      </div>
                                    </li>
                                    <li>
                                      <div className="pmg-gapp">
                                        <img
                                          src={Peter}
                                          alt=""
                                        />
                                      </div>
                                    </li> */}
              <li>
                <div className="pmg-gapp">
                  <img
                    src="https://cozy.qodeinteractive.com/wp-content/uploads/2016/12/client-3.png"
                    alt=""
                  />
                </div>
              </li>
              <li>
                <img
                  src="https://cozy.qodeinteractive.com/wp-content/uploads/2016/12/client-2.png"
                  alt=""
                />
              </li>
              <li>
                <div className="pmg-gapp">
                  <img
                    src="https://cozy.qodeinteractive.com/wp-content/uploads/2016/12/client-5.png"
                    alt=""
                  />
                </div>
              </li>
              <li>
                <div className="pmg-gapp">
                  <img
                    src="https://cozy.qodeinteractive.com/wp-content/uploads/2016/12/client-2.png"
                    alt=""
                  />
                </div>
              </li>
              <li>
                <div className="pmg-gapp">
                  <img
                    src="https://cozy.qodeinteractive.com/wp-content/uploads/2016/12/client-1.png"
                    alt=""
                  />
                </div>
              </li>
              <li>
                <div className="pmg-gapp">
                  <img
                    src="https://cozy.qodeinteractive.com/wp-content/uploads/2016/12/client-2.png"
                    alt=""
                  />
                </div>
              </li>
              <li>
                <div className="pmg-gapp">
                  <img
                    src="https://cozy.qodeinteractive.com/wp-content/uploads/2016/12/client-4.png"
                    alt=""
                  />
                </div>
              </li>
              <li>
                <div className="pmg-gapp">
                  <img
                    src="https://cozy.qodeinteractive.com/wp-content/uploads/2016/12/client-5.png"
                    alt=""
                  />
                </div>
              </li>
              <li>
                <div className="pmg-gapp">
                  <img
                    src="https://cozy.qodeinteractive.com/wp-content/uploads/2016/12/client-6.png"
                    alt=""
                  />
                </div>
              </li>
              {/* <li>
                                      <div className="pmg-gapp">
                                        <img
                                          src={tommy}
                                          alt=""
                                        />
                                      </div>
                                    </li>
                                    <li>
                                      <div className="pmg-gapp">
                                        <img
                                          src={van}
                                          alt=""
                                        />
                                      </div>
                                    </li>
                                    <li>
                                      <div className="pmg-gapp">
                                        <img
                                          src={USPoloAssn}
                                          alt=""
                                        />
                                      </div>
                                    </li> */}
            </ul>
          </Marquee>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default AboutSection;
