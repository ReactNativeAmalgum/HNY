import React, { useState, useEffect, useRef } from "react";
import "../../index.css";
import logo from "../../Assets/images/logo.png";
import { ServiceData } from "../../Assets/Dynamic Data/ServiceData";
import { Link } from "react-router-dom";
import "./navii.css";
import { FaSortDown, FaYoutube } from "react-icons/fa";

export default function NavBar() {
  const [toggle, setToggle] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleSubMenu = () => {
    setIsSubMenuOpen(!isSubMenuOpen);
  };

  const handleOutsideClick = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setToggle(false);
      setIsSubMenuOpen(false);
    }
  };

  const handleLinkClick = () => {
    setToggle(false);
    setIsSubMenuOpen(false);
  };

  useEffect(() => {
    if (toggle || isSubMenuOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [toggle, isSubMenuOpen]);

  return (
    <header
      id="masthead"
      className="site-header pbmit-header-style-4 pbmit-sticky-logo-no"
    >
      <div className="pbmit-sticky-header " />
      <div className="pbmit-header-overlay">
        <div className="pbmit-pre-header-wrapper pbmit-bg-color-transparent pbmit-color-blackish">
          <div className="container">
            <div className="d-flex justify-content-between">
              <div className="pbmit-pre-header-left">
                <ul className="pbmit-social-links">
                  <li className="pbmit-social-li pbmit-social-facebook">
                    <a title="Facebook" href="https://www.facebook.com/HNYInteriorDesigner" target="_blank">
                      <span>
                        <i className="pbmit-base-icon-facebook-f" />
                      </span>
                    </a>
                  </li>

                  <li className="pbmit-social-li pbmit-social-linkedin">
                    <a title="youtube" href="https://www.youtube.com/@hnyinteriors" target="_blank">
                      <span>
                        <FaYoutube style={{ color: '#403226' }} />
                      </span>
                    </a>
                  </li>
                  <li className="pbmit-social-li pbmit-social-instagram">
                    <a title="Instagram" href="https://www.instagram.com/hnyinteriors/" target="_blank">
                      <span>
                        <i className="pbmit-base-icon-instagram" />
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="pbmit-pre-header-right">
                <ul className="pbmit-contact-info">
                  <li>
                    <i className="pbmit-base-icon-mail-alt" /> hnymumbai@gmail.com
                  </li>
                  <li>
                    <i className="pbmit-base-icon-location-dot-solid" />
                    220, LODHA SIGNET A, Thane West, Maharashtra

                  </li>
                  <li>
                    <i className="pbmit-base-icon-phone-volume-solid-1" />
                    +91 90824 89772
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="pbmit-header-height-wrapper" style={{ minHeight: 85 }}>
          <div className="pbmit-main-header-area pbmit-sticky-logo-no pbmit-responsive-logo-no pbmit-header-wrapper pbmit-bg-color-transparent">
            <div className="container">
              <div className="pbmit-header-content d-flex justify-content-between align-items-center">
                <div className="pbmit-logo">
                  <div className="site-branding pbmit-logo-area">
                    <div className="wrap">
                      <a href="/" rel="home">
                        <img
                          className="pbmit-main-logo"
                          src={logo}
                          alt="Xinterio Demo3"
                          title="Xinterio Demo3"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="pbmit-menuarea">
                  <div className="navigation-top">
                    <div className="wrap">
                      <nav
                        id="site-navigation"
                        className="main-navigation pbmit-navbar pbmit-main-active-color-globalcolor pbmit-dropdown-active-color-globalcolor"
                        aria-label="Top Menu"
                        ref={menuRef}
                      >
                        <div
                          className={`menu-main-menu-container ${toggle ? "active" : ""
                            }`}
                        >
                          <ul
                            style={{ color: "black" }}
                            id="pbmit-top-menu"
                            className="menu"
                          >
                            <li className="menu-item">
                              <a href="/">Home</a>
                              <span className="sub-menu-toggle">
                                <i className="pbmit-base-icon-angle-right" />
                              </span>
                            </li>
                            <li className="menu-item">
                              <a href="/interior-designers-decorators-thane">About</a>
                              <span className="sub-menu-toggle">
                                <i className="pbmit-base-icon-angle-right" />
                              </span>
                            </li>
                            <li

                              className={`menu-item ${isSubMenuOpen ? "open" : ""
                                }`}
                            >
                              <a href="#" onClick={toggleSubMenu}>
                                Services <FaSortDown style={{ marginBottom: 10 }} />
                              </a>
                              <ul className={`sub-menu ${isSubMenuOpen ? "open" : ""}`}>
                                {ServiceData.map((p, i) => (
                                  <li className="menu-item" key={i}>
                                    <Link to={`/${p.slug}`} onClick={handleLinkClick}>
                                      <span className="pbmit-span-wrapper">{p.title}</span>
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                              <span
                                className="sub-menu-toggle"
                                onClick={toggleSubMenu}
                              >
                                <i className="pbmit-base-icon-angle-right" />
                              </span>
                            </li>
                            <li className="menu-item">
                              <a href="/gallery">Gallery</a>
                            </li>
                            <li className="menu-item">
                              <a href="/interior-designer-near-thane">Contact Us</a>
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
                        </div>
                      </nav>
                    </div>
                  </div>
                </div>
                <div className="pbmit-right-box d-flex align-items-center">
                  <div className="pbmit-header-button2">
                    <Link style={{ textDecoration: 'none' }} to="./contact" clLinkssName="pbmit-header-button">
                      <span className="pbmit-header-button-wrapper">
                        <span className="pbmit-header-button2-text">
                          Contact Now
                        </span>
                      </span>
                    </Link>
                  </div>
                  <div className="pbmit-burger-menu-wrapper">
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
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
