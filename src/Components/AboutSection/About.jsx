import React, { useState } from "react";
import "./About.css";

function About() {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <section className="NewAbout-Section-1">
      <div className="container">
        <div className="NewAbout_Section-Con">
          <div className="row">
            <div className="col-md-6">
              <div className="NewAboutUS-Image-Main-con">
                <div className="row">
                  <div className="col-md-6">
                    <div className="NewAboutUS-Image-con">
                      <img
                        src="https://image3.jdomni.in/banner/16092019/E7/A2/0C/5E2B3C73DAA487D7586E285F62_1568624111212.jpg?output-format=webp"
                        alt="Event"
                      />
                    </div>
                  </div>
                  <div className="col-md-6 displaynone">
                    <div className="NewAboutUS-Image-Second-con">
                      <div className="NewAboutUS-Image-Second">
                        <img
                          src="https://image3.jdomni.in/banner/16092019/47/8D/FD/1DDD5C17415352B380D4B4E2D0_1568624143368.jpg?output-format=webp"
                          alt="Event"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 displaynone">
                    <div className="NewAboutUS-Image-Third-con">
                      <div className="NewAboutUS-Image-Third">
                        <img
                          src="https://image2.jdomni.in/banner/16092019/89/F4/CF/FF90B87528F21CB233147D42DF_1568624207940.jpg?output-format=webp"
                          alt="Event"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 displaynone">
                    <div className="NewAboutUS-Image-Forth-con">
                      <img
                        src="https://image3.jdomni.in/banner/03102019/39/23/E2/C940BAEC5776C3FDB0970C3E79_1570097108765.jpg?output-format=webp"
                        alt="Event"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="NewAbout-Section-con-details-Info">
                <div className="NewAbout-Section-con-details-con">
                  <div className="NewAbout-Section-con-details-Info-con">
                    <h2 className="NewAboutUs-tagLlines paddingtopr">
                      About Us
                    </h2>
                    <h3 className="textcent">Welcome to HNY Interiors</h3>
                    <p style={{ textAlign: "justify" }}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Corrupti, laboriosam sunt. Delectus quibusdam ea
                    </p>
                    <p style={{ textAlign: "justify" }}>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Ut consectetur laudantium enim illum quia quos obcaecati
                      molestiae, illo optio aliquam dolor odio ea, sint non
                      blanditiis iure nobis consequatur vitae? Lorem ipsum dolor
                      sit amet consectetur adipisicing elit. Eligendi maiores
                      aut impedit dolorem itaque ratione, quas perferendis,
                      fugiat, nobis inventore nemo? Nihil obcaecati earum, esse
                      necessitatibus quibusdam consectetur voluptatem! Atque?
                    </p>

                    <touchableHilight
                      className={"NewAboutUs-ReadMore"}
                      onClick={toggleShowMore}
                    >
                      {showMore ? "read less" : "...read more"}
                    </touchableHilight>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
