import React from "react";
import "./Specality.css";
import Marquee from "react-fast-marquee";

function Specality() {
  return (
    <>
      <section className=" marg-t">
        <div className="container">
          <div className="col-lg-12">
            <div
              className="cat_section_headings wow zoom dj-bottom"
              style={{ visibility: "visible", animationName: "zoom" }}
            >

              <h4>Our Services</h4>
              <div className="cat_border" />
            </div>
          </div>
          <Marquee>
            <ul className="markuee-ul">
              <li>
                <div className="pmg-gapp">
                  <img
                    src="https://xinterio-demo.pbminfotech.com/demo3/wp-content/uploads/sites/4/2024/05/client-global-08.png"
                    alt=""
                  />
                </div>
              </li>
              <li>
                <div className="pmg-gapp">
                  <img
                    src="https://xinterio-demo.pbminfotech.com/demo3/wp-content/uploads/sites/4/2024/05/client-global-05.png"
                    alt=""
                  />
                </div>
              </li>
              <li>
                <div className="pmg-gapp">
                  <img
                    src="https://xinterio-demo.pbminfotech.com/demo3/wp-content/uploads/sites/4/2024/05/client-global-02.png"
                    alt=""
                  />
                </div>
              </li>
              <li>
                <img
                  src="https://xinterio-demo.pbminfotech.com/demo3/wp-content/uploads/sites/4/2024/05/client-global-03.png"
                  alt=""
                />
              </li>

              <li>
                <div className="pmg-gapp">
                  <img
                    src="https://xinterio-demo.pbminfotech.com/demo3/wp-content/uploads/sites/4/2024/05/client-global-01.png"
                    alt=""
                  />
                </div>
              </li>
              <li>
                <div className="pmg-gapp">
                  <img
                    src="https://xinterio-demo.pbminfotech.com/demo3/wp-content/uploads/sites/4/2024/05/client-global-04.png"
                    alt=""
                  />
                </div>
              </li>

              <li>
                <div className="pmg-gapp">
                  <img
                    src="https://xinterio-demo.pbminfotech.com/demo3/wp-content/uploads/sites/4/2024/05/client-global-06.png"
                    alt=""
                  />
                </div>
              </li>
              <li>
                <div className="pmg-gapp">
                  <img
                    src="https://xinterio-demo.pbminfotech.com/demo3/wp-content/uploads/sites/4/2024/05/client-global-07.png"
                    alt=""
                  />
                </div>
              </li>
            </ul>
          </Marquee>
        </div>
      </section>
    </>
  );
}

export default Specality;
