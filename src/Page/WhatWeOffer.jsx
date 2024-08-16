import React from "react";
import { LuTriangleRight } from "react-icons/lu";
import { FaPaintRoller } from "react-icons/fa6";
import { FaRegFolderClosed } from "react-icons/fa6";
import { SlEnergy } from "react-icons/sl";
import { FaShoppingBag } from "react-icons/fa";
import { PiTelevision } from "react-icons/pi";
import Service from "../Components/Services/Service";
import WhyChoos from "../Components/WhyChoos/WhyChoos";
import Whynchoos2 from "../Components/Whynchoos2/Whynchoos2";
import Portable from "../Components/Portable/Portable";
import Footer from "../Components/Footer/Footer";
import ProgressBarr from "../Components/ProgressBarr/ProgressBarr";
import Specality from "../Components/Specality/Specality";

function WhatWeOffer() {
  return (
    <>
      <section>
        <div className="what-we-banner">
          <div
            className="edgtf-custom-font-holder"
            style={{
              fontFamily: "Montserrat",
              fontSize: 98,
              lineHeight: "1.2em",
              fontWeight: 600,
              color: "rgb(0, 0, 0)",
            }}
            data-font-size={80}
            data-line-height={90}
          >
            What We Offer{" "}
            <div
              className="edgtf-custom-font-holder"
              style={{
                fontSize: 22,
                lineHeight: 40,
                fontWeight: 100,
                color: "#ffffff",
              }}
              data-font-size={22}
              data-line-height={40}
            ></div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="box-item">
                <i>
                  <LuTriangleRight />
                </i>
                <div className="about-box">
                  <h3>Predesigned Pages</h3>
                  <p>
                    {" "}
                    Lorem ipsum dolor, sit amet consectetur adipisicing amet
                    consectetur adipisicing.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="box-item">
                <i>
                  <FaPaintRoller />
                </i>
                <div className="about-box">
                  <h3>Customizable Colors</h3>
                  <p>
                    {" "}
                    Lorem ipsum dolor, sit amet consectetur adipisicing amet
                    consectetur adipisicing.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="box-item">
                <i>
                  <FaRegFolderClosed />
                </i>
                <div className="about-box">
                  <h3>One Click Import</h3>
                  <p>
                    {" "}
                    Lorem ipsum dolor, sit amet consectetur adipisicing amet
                    consectetur adipisicing.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row marg-t">
            <div className="col-lg-4">
              <div className="box-item">
                <i>
                  <FaShoppingBag />
                </i>
                <div className="about-box">
                  <h3>WooCommerce</h3>
                  <p>
                    {" "}
                    Lorem ipsum dolor, sit amet consectetur adipisicing amet
                    consectetur adipisicing.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="box-item">
                <i>
                  <PiTelevision />
                </i>
                <div className="about-box">
                  <h3>Predesigned Pages</h3>
                  <p>
                    {" "}
                    Lorem ipsum dolor, sit amet consectetur adipisicing amet
                    consectetur adipisicing.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="box-item">
                <i>
                  <SlEnergy />
                </i>
                <div className="about-box">
                  <h3>Predesigned Pages</h3>
                  <p>
                    {" "}
                    Lorem ipsum dolor, sit amet consectetur adipisicing amet
                    consectetur adipisicing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <WhyChoos />
      <Portable />
      <Whynchoos2 />
      <ProgressBarr />
      <Specality />
      <Footer></Footer>
    </>
  );
}

export default WhatWeOffer;
