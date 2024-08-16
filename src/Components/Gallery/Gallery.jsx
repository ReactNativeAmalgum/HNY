import React from "react";
import "./Gallery.css";

function Gallery() {
  return (
    <>
      <section className="marg-t">
        <div className="row">
          <div className="col-lg-12">
            <div
              className="cat_section_headings wow zoom"
              style={{ visibility: "visible", animationName: "zoom" }}
            >
              <span className="cat_subheading">
                Elegant designs enhancing your living spaces beautifully.
              </span>
              <h4>Our Gallery</h4>
              <div className="cat_border" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-12 col-sm-12 dgg ">
            <div className="gallery-image">
              <img
                src="https://foyr.com/learn/wp-content/uploads/2021/10/rules-for-interior-designers-1024x656.png"
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-3 col-md-12 col-sm-12  dgg ">
            <div className="gallery-image">
              <img
                src="https://hips.hearstapps.com/hmg-prod/images/hbx110123cortneybishop-009-6638f5a4a7c67.jpg?crop=1xw:0.84375xh;center,top&resize=1200:*"
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-3 col-md-12 col-sm-12 dgg ">
            <div className="gallery-image">
              <img
                src="https://asset.skoiy.com/9b80a6f781ff336f/yrwwqpnyb7ys.jpg?w=970&q=90"
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-3 col-md-12 col-sm-12 dgg ">
            <div className="gallery-image">
              <img
                src="https://hips.hearstapps.com/hmg-prod/images/hbx110123cortneybishop-009-6638f5a4a7c67.jpg?crop=1xw:0.84375xh;center,top&resize=1200:*"
                alt=""
              />
            </div>
          </div>

          <div className="row">
            <div className="col-lg-3  col-md-12 col-sm-12 dgg ">
              <div className="gallery-image">
                <img
                  src="https://hips.hearstapps.com/hmg-prod/images/hbx110123cortneybishop-009-6638f5a4a7c67.jpg?crop=1xw:0.84375xh;center,top&resize=1200:*"
                  alt=""
                />
              </div>
            </div>
            <div className="col-lg-3 col-md-12 col-sm-12  dgg ">
              <div className="gallery-image">
                <img
                  src="https://hips.hearstapps.com/hmg-prod/images/hbx110123cortneybishop-009-6638f5a4a7c67.jpg?crop=1xw:0.84375xh;center,top&resize=1200:*"
                  alt=""
                />
              </div>
            </div>
            <div className="col-lg-3  col-md-12 col-sm-12 dgg ">
              <div className="gallery-image">
                <img
                  src="https://hips.hearstapps.com/hmg-prod/images/hbx110123cortneybishop-009-6638f5a4a7c67.jpg?crop=1xw:0.84375xh;center,top&resize=1200:*"
                  alt=""
                />
              </div>
            </div>
            <div className="col-lg-3 col-md-12 col-sm-12 dgg ">
              <div className="gallery-image">
                <img
                  src="https://hips.hearstapps.com/hmg-prod/images/hbx110123cortneybishop-009-6638f5a4a7c67.jpg?crop=1xw:0.84375xh;center,top&resize=1200:*"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Gallery;
