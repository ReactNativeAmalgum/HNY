import React from 'react'
import '../App.css'
import { Bounce } from "react-awesome-reveal";
export default function Page404() {
  return (
    <div className="site-content-contain  pbmit-bg-color-custom pbmit-bg-image-yes pbmit-text-color-white">
      <div className="site-content-wrap">
        <div id="content" className="site-content container">
          <div className="row multi-columns-row">
            <div className="pbmit-header-search-form-wrapper">
              <div className="pbmit-search-close">
                <svg
                  className="qodef-svg--close qodef-m"
                  xmlns="http://www.w3.org/2000/svg"
                  width="28.163"
                  height="28.163"
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
              </div>

            </div>
            <div className="wrap">
              <div id="primary" className="content-area">
                <main id="main" className="site-main">
                  <section className="error-404 not-found clearfix">
                    <div className="page-content">
                      <h2 className="page-title title404">404</h2>
                      <h5 className="footer-message">
                        Whoops! Whatever you are looking for cannot be found.
                      </h5>

  <Bounce>
  <a
                        href="https://xinterio-demo.pbminfotech.com/demo3/"
                        className="pbmit-home-back"
                      >
                        Back To Home Page
                      </a>
                      </Bounce>
                    </div>
                    {/* .page-content */}
                  </section>
                  {/* .error-404 */}
                </main>
                {/* #main */}
              </div>
              {/* #primary */}
            </div>
            {/* .wrap */}
          </div>
          {/* .row */}
        </div>
        {/* #content */}
      </div>
      {/* .site-content-wrap */}

      {/* #colophon */}
    </div>

  )
}
