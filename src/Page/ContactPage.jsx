import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Footer from "../Components/Footer/Footer";
function ContactPage() {
  return (
    <>
      <section>
        <div className="contact-banner">
          <div className="contact-p">
            <h1>Contact us</h1>
          </div>
        </div>
      </section>
      <section className="mt-5">
        <div className="container">
          <div className="section section-padding">
            <div className="container">
              <div className="row">
                <div className="col-lg-5 col-md-6">
                  <div className="contact-info-wrap">
                    <div className="single-contact-info-wrap">
                      <div className="info-icon">
                        <i className="dlicon ui-1_home-51" />
                      </div>
                      <div className="info-content">
                        <h3 className="title">Address</h3>
                        <p className="width">
                          A220, Business complex, LODHA AMARA, Kolshet Rd,
                          Thane, Maharashtra 400607
                        </p>
                      </div>
                    </div>
                    <div className="single-contact-info-wrap">
                      <div className="info-icon">
                        <i className="dlicon ui-2_phone" />
                      </div>
                      <div className="info-content">
                        <h3 className="title">Phone</h3>
                        <p>
                          {" "}
                          Mobile: <span>(+91)90824 89772</span>
                        </p>
                        <p> {/* Hotline: <span>1802550 - 1102456</span> */}</p>
                      </div>
                    </div>
                    <div className="single-contact-info-wrap">
                      <div className="info-icon">
                        <i className="dlicon ui-1_email-85" />
                      </div>
                      <div className="info-content">
                        <h3 className="title">Email</h3>
                        <p>hnymumbai@gmail.com</p>
                        {/* <p>info@example.com</p> */}
                      </div>
                    </div>
                    <div className="single-contact-info-wrap">
                      <div className="info-icon">
                        <i className="dlicon ui-2_share" />
                      </div>
                      <div className="info-content">
                        <h3 className="title">Follow us</h3>
                        <div className="social-icon-style mt-4">
                          <a className="facebook" href="#">
                            <i className="fa fa-facebook">
                              <FaFacebookF />
                            </i>
                          </a>
                          <a className="twitter" href="#">
                            <i className="fa fa-twitter">
                              <FaTwitter />
                            </i>
                          </a>
                          <a className="google-plus" href="#">
                            <i className="fa fa-google-plus">
                              <FaInstagram />
                            </i>
                          </a>
                          {/* <a className="behance" href="#">
                  <i className="fa fa-behance" />
                </a> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-7 col-md-6 mt-5 mb-5">
                  <div className="contact-from-wrap">
                    <form
                      id="contact-form"
                      action="https://whizthemes.com/mail-php/tasnim/mail.php"
                      method="post"
                    >
                      <input name="name" type="text" placeholder="Name" />
                      <input name="email" type="email" placeholder="Email" />
                      <input name="subject" type="text" placeholder="Subject" />
                      <textarea
                        name="message"
                        placeholder="Your message"
                        defaultValue={""}
                      />
                      <input
                        className="submit"
                        type="submit"
                        defaultValue="Send Message"
                      />
                    </form>
                    <p className="form-messege" />
                  </div>
                </div>
              </div>
              <div className="map  mt-md-12">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.118463597735!2d72.98579167537065!3d19.233668247003607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7bba9415f195b%3A0x70d05119001851eb!2sHNY%20Interior%20Studios!5e0!3m2!1sen!2sin!4v1721479398765!5m2!1sen!2sin"
                  width={600}
                  height={450}
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default ContactPage;
