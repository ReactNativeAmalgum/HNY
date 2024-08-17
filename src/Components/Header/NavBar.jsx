import React, { useState } from "react";
import "../../index.css";
import logo from "../../Assets/wny-logo-.png";
import { ServiceData } from "../../Assets/Dynamic Data/ServiceData";
import { Link } from "react-router-dom";
export default function NavBar() {
  const [toggle, setToggle] = useState(false);

  console.log(toggle);
  return (
    <header
      id="masthead"
      className="site-header pbmit-header-style-4 pbmit-sticky-logo-no"
    >
      <div className="pbmit-sticky-header " />
      <div className="pbmit-header-overlay">
        <div className="pbmit-pre-header-wrapper  pbmit-bg-color-transparent pbmit-color-blackish">
          <div className="container">
            <div className="d-flex justify-content-between">
              <div className="pbmit-pre-header-left">
                <ul className=" pbmit-social-links">
                  <li className="pbmit-social-li pbmit-social-facebook ">
                    <a title="Facebook" href="#" target="_blank">
                      <span>
                        <i className="pbmit-base-icon-facebook-f" />
                      </span>
                    </a>
                  </li>
                  <li className="pbmit-social-li pbmit-social-twitter ">
                    <a title="Twitter" href="#" target="_blank">
                      <span>
                        <i className="pbmit-base-icon-twitter-2" />
                      </span>
                    </a>
                  </li>
                  <li className="pbmit-social-li pbmit-social-linkedin ">
                    <a title="LinkedIn" href="#" target="_blank">
                      <span>
                        <i className="pbmit-base-icon-linkedin-in" />
                      </span>
                    </a>
                  </li>
                  <li className="pbmit-social-li pbmit-social-instagram ">
                    <a title="Instagram" href="#" target="_blank">
                      <span>
                        <i className="pbmit-base-icon-instagram" />
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
              {/* .pbmit-pre-header-left */}
              <div className="pbmit-pre-header-right">
                <ul className="pbmit-contact-info">
                  <li>
                    <i className="pbmit-base-icon-mail-alt" /> info@domain.com
                  </li>
                  <li>
                    <i className=" pbmit-base-icon-location-dot-solid" />
                    250 Main Street, 2nd Floor. USA
                  </li>
                  <li>
                    <i className=" pbmit-base-icon-phone-volume-solid-1" />
                    +89(0) 1256 2156
                  </li>
                </ul>{" "}
              </div>
              {/* .pbmit-pre-header-right */}
            </div>
            {/* .justify-content-between */}
          </div>
          {/* .container */}
        </div>
        {/* .pbmit-pre-header-wrapper */}
        <div className="pbmit-header-height-wrapper" style={{ minHeight: 85 }}>
          <div className="pbmit-main-header-area pbmit-sticky-logo-no pbmit-responsive-logo-no pbmit-header-wrapper pbmit-bg-color-transparent">
            <div className="container">
              <div className="pbmit-header-content d-flex justify-content-between align-items-center">
                <div className="pbmit-logo">
                  <div className="site-branding pbmit-logo-area">
                    <div className="wrap">
                      <a
                        href="https://xinterio-demo.pbminfotech.com/demo3/"
                        rel="home"
                      >
                        <img
                          className="pbmit-main-logo"
                          src={logo}
                          alt="Xinterio Demo3"
                          title="Xinterio Demo3"
                        />
                      </a>
                    </div>
                    {/* .wrap */}
                  </div>
                  {/* .site-branding */}
                </div>
                <div className="pbmit-menuarea">
                  {/* Top Navigation Menu */}
                  <div className="navigation-top">
                    <div className="wrap">
                      <nav
                        id="site-navigation"
                        className="main-navigation pbmit-navbar  pbmit-main-active-color-globalcolor pbmit-dropdown-active-color-globalcolor"
                        aria-label="Top Menu"
                      >
                        <div
                          className={`menu-main-menu-container ${
                            toggle ? "active" : ""
                          }`}
                        >
                          <ul
                            style={{ color: "black" }}
                            id="pbmit-top-menu"
                            className="menu"
                          >
                            <li
                              id="menu-item-5671"
                              className="menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children menu-item-5671"
                            >
                              <a href="/">Home</a>

                              <span className="sub-menu-toggle">
                                <i className="pbmit-base-icon-angle-right" />
                              </span>
                            </li>
                            <li
                              id="menu-item-5672"
                              className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-5672"
                            >
                              <a href="#">Pages</a>
                              <ul className="sub-menu">
                                <li
                                  id="menu-item-5730"
                                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5730"
                                >
                                  <a href="/aboutpage">
                                    <span className="pbmit-span-wrapper">
                                      About Us
                                    </span>
                                  </a>
                                </li>
                                <li
                                  id="menu-item-5730"
                                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5730"
                                >
                                  <a href="/weare">
                                    <span className="pbmit-span-wrapper">
                                      What We Offer
                                    </span>
                                  </a>
                                </li>

                              </ul>
                              <span className="sub-menu-toggle">
                                <i className="pbmit-base-icon-angle-right" />
                              </span>
                            </li>
                            <li
                              id="menu-item-5677"
                              className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-5677"
                            >
                              <a href="#">Services</a>
                              <ul className="sub-menu">
                                {ServiceData.map((p) => {
                                  return (
                                    <li
                                      id="menu-item-5701"
                                      className="menu-item menu-item-type-post_type menu-item-object-pbmit-service menu-item-5701"
                                    >
                                      <Link to={`/designplanning/${p.id}`}>
                                        <span className="pbmit-span-wrapper">
                                          {p.title}
                                        </span>
                                      </Link>
                                    </li>
                                  );
                                })}
                              </ul>
                              <span className="sub-menu-toggle">
                                <i className="pbmit-base-icon-angle-right" />
                              </span>
                            </li>

                            <li
                              id="menu-item-5662"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5662"
                            >
                              <a href="/contact">Contact Us</a>
                            </li>
                          </ul>
                          <span
                            className="closepanel"
                            onClick={() => setToggle(false)}
                          >
                            <svg
                              className="qodef-svg--close qodef-m"
                              xmlns="http://www.w3.org/2000/svg"
                              width="20.163"
                              height="20.163"
                              viewBox="0 0 26.163 26.163"
                            >
                              <rect
                                width={36}
                                height={1}
                                transform="translate(0.707) rotate(45)"
                              />
                              <rect
                                width={36}
                                height={1}
                                transform="translate(0 25.456) rotate(-45)"
                              />
                            </svg>
                          </span>
                        </div>{" "}
                      </nav>
                      {/* #site-navigation */}
                    </div>
                    {/* .wrap */}
                  </div>
                  {/* .navigation-top */}
                </div>
                <div className="pbmit-right-box d-flex align-items-center">
                  <div className="pbmit-button-box-second">
                    <div className="pbmit-header-button2">
                      <a
                        href="https://xinterio-demo.pbminfotech.com/demo3/contact-us/"
                        className="pbmit-header-button"
                      >
                        <span className="pbmit-header-button-wrapper">
                          <span className="pbmit-header-button2-text">
                            Book Consult
                          </span>
                        </span>{" "}
                      </a>
                    </div>
                  </div>
                  <div className="pbmit-burger-menu-wrapper">
                    <div className="pbmit-mobile-menu-bg" />
                    <button
                      id="menu-toggle"
                      className="nav-menu-toggle"
                      onClick={() => setToggle(true)}
                    >
                      <i className="pbmit-base-icon-menu-1" />
                    </button>
                  </div>
                </div>
              </div>
              {/* pbmit-header-content-end */}
            </div>
            {/* pbmit-header-inner-end */}
          </div>
          {/* container-end */}
        </div>
        {/* pbmit-header-height-wrapper-end */}
      </div>
      {/* pbmit-header-overlay-end */}{" "}
    </header>
  );
}
