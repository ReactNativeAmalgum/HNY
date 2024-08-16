import React from "react";
import "../../index.css";
import logo from "../../Assets/wny-logo-.png";
import { ServiceData } from "../../Assets/Dynamic Data/ServiceData";
import { Link } from "react-router-dom";
export default function NavBar() {
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
                        <div className="menu-main-menu-container">
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
                              {/* <ul className="sub-menu">
                                <li
                                  id="menu-item-5961"
                                  className="menu-item menu-item-type-custom menu-item-object-custom menu-item-5961"
                                >
                                  <a href="http://xinterio-demo.pbminfotech.com/demo1/">
                                    <span className="pbmit-span-wrapper">
                                      Homepage 01
                                    </span>
                                  </a>
                                </li>
                                <li
                                  id="menu-item-5960"
                                  className="menu-item menu-item-type-custom menu-item-object-custom menu-item-5960"
                                >
                                  <a href="http://xinterio-demo.pbminfotech.com/demo2/">
                                    <span className="pbmit-span-wrapper">
                                      Homepage 02
                                    </span>
                                  </a>
                                </li>
                                <li
                                  id="menu-item-5692"
                                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-1785 current_page_item menu-item-5692"
                                >
                                  <a
                                    href="https://xinterio-demo.pbminfotech.com/demo3/"
                                    aria-current="page"
                                  >
                                    <span className="pbmit-span-wrapper">
                                      Homepage 03
                                    </span>
                                  </a>
                                </li>
                              </ul> */}
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
                                  id="menu-item-5729"
                                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5729"
                                >
                                  <a href="https://xinterio-demo.pbminfotech.com/demo3/our-history/">
                                    <span className="pbmit-span-wrapper">
                                      Our History
                                    </span>
                                  </a>
                                </li>
                                <li
                                  id="menu-item-5728"
                                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5728"
                                >
                                  <a href="https://xinterio-demo.pbminfotech.com/demo3/our-team/">
                                    <span className="pbmit-span-wrapper">
                                      Our Team
                                    </span>
                                  </a>
                                </li>
                                <li
                                  id="menu-item-5703"
                                  className="menu-item menu-item-type-post_type menu-item-object-pbmit-team-member menu-item-5703"
                                >
                                  <a href="https://xinterio-demo.pbminfotech.com/demo3/team-member/lewis-martin/">
                                    <span className="pbmit-span-wrapper">
                                      Team Single Details
                                    </span>
                                  </a>
                                </li>
                                <li
                                  id="menu-item-5727"
                                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5727"
                                >
                                  <a href="https://xinterio-demo.pbminfotech.com/demo3/faq/">
                                    <span className="pbmit-span-wrapper">
                                      FAQ
                                    </span>
                                  </a>
                                </li>
                                <li
                                  id="menu-item-5959"
                                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5959"
                                >
                                  <a href="https://xinterio-demo.pbminfotech.com/demo3/shop/">
                                    <span className="pbmit-span-wrapper">
                                      Shop
                                    </span>
                                  </a>
                                </li>
                                <li
                                  id="menu-item-5715"
                                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5715"
                                >
                                  <a href="https://xinterio-demo.pbminfotech.com/demo3/element/">
                                    <span className="pbmit-span-wrapper">
                                      Element
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
                                      <Link to={p.slug}>{p.title}</Link>
                                    </li>
                                  );
                                })}
                              </ul>
                              <span className="sub-menu-toggle">
                                <i className="pbmit-base-icon-angle-right" />
                              </span>
                            </li>
                            <li
                              id="menu-item-5673"
                              className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-5673"
                            >
                              <a href="#">Portfolio</a>
                              <ul className="sub-menu">
                                <li
                                  id="menu-item-5674"
                                  className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-5674"
                                >
                                  <a href="#">
                                    <span className="pbmit-span-wrapper">
                                      Masonry View
                                    </span>
                                  </a>
                                  <ul className="sub-menu">
                                    <li
                                      id="menu-item-5707"
                                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5707"
                                    >
                                      <a href="https://xinterio-demo.pbminfotech.com/demo3/m-grid-col-2/">
                                        <span className="pbmit-span-wrapper">
                                          Grid Col 2
                                        </span>
                                      </a>
                                    </li>
                                    <li
                                      id="menu-item-5706"
                                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5706"
                                    >
                                      <a href="https://xinterio-demo.pbminfotech.com/demo3/m-grid-col-3/">
                                        <span className="pbmit-span-wrapper">
                                          Grid Col 3
                                        </span>
                                      </a>
                                    </li>
                                    <li
                                      id="menu-item-5705"
                                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5705"
                                    >
                                      <a href="https://xinterio-demo.pbminfotech.com/demo3/m-grid-col-4/">
                                        <span className="pbmit-span-wrapper">
                                          Grid Col 4
                                        </span>
                                      </a>
                                    </li>
                                    <li
                                      id="menu-item-5704"
                                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5704"
                                    >
                                      <a href="https://xinterio-demo.pbminfotech.com/demo3/m-grid-col-wide/">
                                        <span className="pbmit-span-wrapper">
                                          Grid Wide
                                        </span>
                                      </a>
                                    </li>
                                  </ul>
                                  <span className="sub-menu-toggle">
                                    <i className="pbmit-base-icon-angle-right" />
                                  </span>
                                </li>
                                <li
                                  id="menu-item-5675"
                                  className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-5675"
                                >
                                  <a href="#">
                                    <span className="pbmit-span-wrapper">
                                      Grid View
                                    </span>
                                  </a>
                                  <ul className="sub-menu">
                                    <li
                                      id="menu-item-5711"
                                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5711"
                                    >
                                      <a href="https://xinterio-demo.pbminfotech.com/demo3/grid-col-2/">
                                        <span className="pbmit-span-wrapper">
                                          Grid Col 2
                                        </span>
                                      </a>
                                    </li>
                                    <li
                                      id="menu-item-5710"
                                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5710"
                                    >
                                      <a href="https://xinterio-demo.pbminfotech.com/demo3/grid-col-3/">
                                        <span className="pbmit-span-wrapper">
                                          Grid Col 3
                                        </span>
                                      </a>
                                    </li>
                                    <li
                                      id="menu-item-5709"
                                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5709"
                                    >
                                      <a href="https://xinterio-demo.pbminfotech.com/demo3/grid-col-4/">
                                        <span className="pbmit-span-wrapper">
                                          Grid Col 4
                                        </span>
                                      </a>
                                    </li>
                                    <li
                                      id="menu-item-5708"
                                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5708"
                                    >
                                      <a href="https://xinterio-demo.pbminfotech.com/demo3/grid-no-gap/">
                                        <span className="pbmit-span-wrapper">
                                          Grid No Gap
                                        </span>
                                      </a>
                                    </li>
                                  </ul>
                                  <span className="sub-menu-toggle">
                                    <i className="pbmit-base-icon-angle-right" />
                                  </span>
                                </li>
                                <li
                                  id="menu-item-5676"
                                  className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-5676"
                                >
                                  <a href="#">
                                    <span className="pbmit-span-wrapper">
                                      Infinite Scroll View
                                    </span>
                                  </a>
                                  <ul className="sub-menu">
                                    <li
                                      id="menu-item-5714"
                                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5714"
                                    >
                                      <a href="https://xinterio-demo.pbminfotech.com/demo3/infinite-grid-col-2/">
                                        <span className="pbmit-span-wrapper">
                                          Grid Col 2
                                        </span>
                                      </a>
                                    </li>
                                    <li
                                      id="menu-item-5713"
                                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5713"
                                    >
                                      <a href="https://xinterio-demo.pbminfotech.com/demo3/infinite-grid-col-3/">
                                        <span className="pbmit-span-wrapper">
                                          Grid Col 3
                                        </span>
                                      </a>
                                    </li>
                                    <li
                                      id="menu-item-5712"
                                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5712"
                                    >
                                      <a href="https://xinterio-demo.pbminfotech.com/demo3/infinite-grid-col-4/">
                                        <span className="pbmit-span-wrapper">
                                          Grid Col 4
                                        </span>
                                      </a>
                                    </li>
                                    <li
                                      id="menu-item-5719"
                                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5719"
                                    >
                                      <a href="https://xinterio-demo.pbminfotech.com/demo3/infinite-grid-button/">
                                        <span className="pbmit-span-wrapper">
                                          Grid Load Button
                                        </span>
                                      </a>
                                    </li>
                                  </ul>
                                  <span className="sub-menu-toggle">
                                    <i className="pbmit-base-icon-angle-right" />
                                  </span>
                                </li>
                                <li
                                  id="menu-item-5688"
                                  className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-5688"
                                >
                                  <a href="#">
                                    <span className="pbmit-span-wrapper">
                                      Sortable View
                                    </span>
                                  </a>
                                  <ul className="sub-menu">
                                    <li
                                      id="menu-item-5722"
                                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5722"
                                    >
                                      <a href="https://xinterio-demo.pbminfotech.com/demo3/sortable-grid-col-2/">
                                        <span className="pbmit-span-wrapper">
                                          Grid Col 2
                                        </span>
                                      </a>
                                    </li>
                                    <li
                                      id="menu-item-5721"
                                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5721"
                                    >
                                      <a href="https://xinterio-demo.pbminfotech.com/demo3/sortable-grid-col-3/">
                                        <span className="pbmit-span-wrapper">
                                          Grid Col 3
                                        </span>
                                      </a>
                                    </li>
                                    <li
                                      id="menu-item-5720"
                                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5720"
                                    >
                                      <a href="https://xinterio-demo.pbminfotech.com/demo3/sortable-grid-col-4/">
                                        <span className="pbmit-span-wrapper">
                                          Grid Col 4
                                        </span>
                                      </a>
                                    </li>
                                  </ul>
                                  <span className="sub-menu-toggle">
                                    <i className="pbmit-base-icon-angle-right" />
                                  </span>
                                </li>
                                <li
                                  id="menu-item-5689"
                                  className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-5689"
                                >
                                  <a href="#">
                                    <span className="pbmit-span-wrapper">
                                      Single Detail Style
                                    </span>
                                  </a>
                                  <ul className="sub-menu">
                                    <li
                                      id="menu-item-5718"
                                      className="menu-item menu-item-type-post_type menu-item-object-pbmit-portfolio menu-item-5718"
                                    >
                                      <a href="https://xinterio-demo.pbminfotech.com/demo3/portfolio/minimalism/">
                                        <span className="pbmit-span-wrapper">
                                          Portfolio Detail Style 1
                                        </span>
                                      </a>
                                    </li>
                                    <li
                                      id="menu-item-5735"
                                      className="menu-item menu-item-type-post_type menu-item-object-pbmit-portfolio menu-item-5735"
                                    >
                                      <a href="https://xinterio-demo.pbminfotech.com/demo3/portfolio/terracotta/">
                                        <span className="pbmit-span-wrapper">
                                          Portfolio Detail Style 2
                                        </span>
                                      </a>
                                    </li>
                                  </ul>
                                  <span className="sub-menu-toggle">
                                    <i className="pbmit-base-icon-angle-right" />
                                  </span>
                                </li>
                              </ul>
                              <span className="sub-menu-toggle">
                                <i className="pbmit-base-icon-angle-right" />
                              </span>
                            </li>
                            <li
                              id="menu-item-5566"
                              className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-5566"
                            >
                              <a href="#">Blogs</a>
                              <ul className="sub-menu">
                                <li
                                  id="menu-item-5567"
                                  className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-5567"
                                >
                                  <a href="#">
                                    <span className="pbmit-span-wrapper">
                                      Blog Masonry View
                                    </span>
                                  </a>
                                  <ul className="sub-menu">
                                    <li
                                      id="menu-item-5656"
                                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5656"
                                    >
                                      <a href="https://xinterio-demo.pbminfotech.com/demo3/blog-m-grid-col-2/">
                                        <span className="pbmit-span-wrapper">
                                          Grid Col 2
                                        </span>
                                      </a>
                                    </li>
                                    <li
                                      id="menu-item-5655"
                                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5655"
                                    >
                                      <a href="https://xinterio-demo.pbminfotech.com/demo3/blog-m-grid-col-3/">
                                        <span className="pbmit-span-wrapper">
                                          Grid Col 3
                                        </span>
                                      </a>
                                    </li>
                                    <li
                                      id="menu-item-5654"
                                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5654"
                                    >
                                      <a href="https://xinterio-demo.pbminfotech.com/demo3/blog-m-grid-col-4/">
                                        <span className="pbmit-span-wrapper">
                                          Grid Col 4
                                        </span>
                                      </a>
                                    </li>
                                    <li
                                      id="menu-item-5653"
                                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5653"
                                    >
                                      <a href="https://xinterio-demo.pbminfotech.com/demo3/blog-masonry-wide/">
                                        <span className="pbmit-span-wrapper">
                                          Masonry Wide
                                        </span>
                                      </a>
                                    </li>
                                  </ul>
                                  <span className="sub-menu-toggle">
                                    <i className="pbmit-base-icon-angle-right" />
                                  </span>
                                </li>
                                <li
                                  id="menu-item-5568"
                                  className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-5568"
                                >
                                  <a href="#">
                                    <span className="pbmit-span-wrapper">
                                      Blog Grid View
                                    </span>
                                  </a>
                                  <ul className="sub-menu">
                                    <li
                                      id="menu-item-5660"
                                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5660"
                                    >
                                      <a href="https://xinterio-demo.pbminfotech.com/demo3/blog-grid-col-2/">
                                        <span className="pbmit-span-wrapper">
                                          Grid Col 2
                                        </span>
                                      </a>
                                    </li>
                                    <li
                                      id="menu-item-5659"
                                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5659"
                                    >
                                      <a href="https://xinterio-demo.pbminfotech.com/demo3/blog-grid-col-3/">
                                        <span className="pbmit-span-wrapper">
                                          Grid Col 3
                                        </span>
                                      </a>
                                    </li>
                                    <li
                                      id="menu-item-5658"
                                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5658"
                                    >
                                      <a href="https://xinterio-demo.pbminfotech.com/demo3/blog-grid-col-4/">
                                        <span className="pbmit-span-wrapper">
                                          Grid Col 4
                                        </span>
                                      </a>
                                    </li>
                                    <li
                                      id="menu-item-5657"
                                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5657"
                                    >
                                      <a href="https://xinterio-demo.pbminfotech.com/demo3/blog-sortable-grid-view/">
                                        <span className="pbmit-span-wrapper">
                                          Sortable Grid View
                                        </span>
                                      </a>
                                    </li>
                                  </ul>
                                  <span className="sub-menu-toggle">
                                    <i className="pbmit-base-icon-angle-right" />
                                  </span>
                                </li>
                                <li
                                  id="menu-item-5633"
                                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5633"
                                >
                                  <a href="https://xinterio-demo.pbminfotech.com/demo3/blog-classic/">
                                    <span className="pbmit-span-wrapper">
                                      Blog Classic
                                    </span>
                                  </a>
                                </li>
                                <li
                                  id="menu-item-5634"
                                  className="menu-item menu-item-type-post_type menu-item-object-post menu-item-5634"
                                >
                                  <a href="https://xinterio-demo.pbminfotech.com/demo3/2024/05/09/frequently-utilized-metal-welding-system/">
                                    <span className="pbmit-span-wrapper">
                                      Blog Single Details
                                    </span>
                                  </a>
                                </li>
                              </ul>
                              <span className="sub-menu-toggle">
                                <i className="pbmit-base-icon-angle-right" />
                              </span>
                            </li>
                            <li
                              id="menu-item-5662"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5662"
                            >
                              <a href="https://xinterio-demo.pbminfotech.com/demo3/contact-us/">
                                Contact Us
                              </a>
                            </li>
                          </ul>
                          <span className="closepanel">
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
                    <button id="menu-toggle" className="nav-menu-toggle">
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
