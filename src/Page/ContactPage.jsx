import { FaFacebookF, FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Footer from "../Components/Footer/Footer";
// import "../App.css";
import './Contact.css'
import { Bounce, Fade, Slide } from "react-awesome-reveal";
import { MdAddCall } from "react-icons/md";
import { MetaTags } from "react-meta-tags";
function ContactPage() {
  return (
    <>
      <MetaTags>
        <title>Interior Designer near Thane | HNY Studios</title>
        <meta title="Interior Designer near Thane | HNY Studios" />
        <meta name="description" content="Interior Designer in Thane, Interior Designers & Interior Decorators in Thane,  Interior Design & Planning Services in Thane, Modular Kitchen Designer in Thane, Interior Designing, Commercial Interior Designer in Thane, Interior Designer near Thane, Best Interior Decorator in Thane" />
        <link rel="canonical" href="https://DEMO.in/interior-designer-near-thane" />
        <meta http-equiv="cache-control" content="no-cache" />
        <meta http-equiv="expires" content="0" />
        <meta http-equiv="pragma" content="no-cache" />
        <meta property="og:title" content="Interior Designer near Thane | HNY Studios" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://DEMO.in/" />
        <meta property="og:description" content="Find the leading Interior Designers & Interior Decorators in Thane to elevate your living or workspace. Our experts offer bespoke design solutions." />
        <meta property="og:image" content="https://kinararesort.in/static/media/logo.146c55d2a549f20e2963.png" />
      </MetaTags>
      <section>
        <div className="contact-banner">
          <Fade delay={700} duration={900} >
            <h2>Contact Us</h2>
          </Fade>
        </div>
      </section>
      <div style={{ textAlign: 'center' }} className="left-card special-left-card ">
        <Slide direction="down" >
          <h1
            style={{
              display: 'inline-block', // Ensures underline matches the text width
              marginTop: 30,
              borderBottomColor: '#e5646e',
              fontWeight: 700,
            }}
            className="specialh1"
          >
            Interior Designer near Thane
          </h1>

        </Slide>
      </div>
      <div className="card-md">
        Finding the perfect interior designer near Thane can make all the
        difference when it comes to transforming your living or working space
        into a haven of style and comfort. At Hny Studio, we understand that a
        well-designed space is essential for both functionality and aesthetics.
        Our team of skilled interior designers is dedicated to delivering
        exceptional design services tailored to your unique needs and
        preferences.
      </div>
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
                        <Bounce>
                          <h3 className="title">Address</h3>

                        </Bounce>
                        <Slide direction="left">

                          <p className="width">
                            220, LODHA SIGNET A, Beside Lodha AMARA, Kolhshet Rd, Thane West, Maharashtra 400607
                          </p>
                        </Slide>

                      </div>
                    </div>
                    <div className="single-contact-info-wrap">
                      <div className="info-icon">
                        <i className="dlicon ui-2_phone" />
                      </div>
                      <div className="info-content">
                        <Bounce>
                          <h3 className="title">Phone</h3>

                        </Bounce>
                        <Slide direction="left">

                          <p>
                            Mobile: <span>(+91)90824 89772</span>
                          </p>
                        </Slide>
                      </div>
                    </div>
                    <div className="single-contact-info-wrap">
                      <div className="info-icon">
                        <i className="dlicon ui-1_email-85" />
                      </div>
                      <div className="info-content">
                        <Bounce>
                          <h3 className="title">Email</h3>
                        </Bounce>
                        <Slide direction="left">

                          <p>hnymumbai@gmail.com</p>
                        </Slide>
                        {/* <p>info@example.com</p> */}
                      </div>
                    </div>
                    <div className="single-contact-info-wrap">
                      <div className="info-icon">
                        <i className="dlicon ui-2_share" />
                      </div>
                      <div className="info-content">
                        <Bounce>
                          <h3 className="title">Follow us</h3>

                        </Bounce>
                        <div className="social-icon-style">
                          <a className="facebook" href="https://www.facebook.com/HNYInteriorDesigner">
                            <i className="fa fa-facebook">
                              <Bounce>
                                <FaFacebookF />
                              </Bounce>
                            </i>
                          </a>
                          <a title="youtube" className="twitter" href="https://www.youtube.com/@hnyinteriors" target="_blank">
                            <i className="fa fa-facebook">
                              <Bounce delay={200}>
                                <FaYoutube />
                              </Bounce>
                            </i>

                          </a>
                          <a className="google-plus" href="https://www.instagram.com/hnyinteriors/">
                            <i className="fa fa-google-plus">
                              <Bounce delay={300}>
                                <FaInstagram />
                              </Bounce>
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
                      <Fade delay={500} >
                        <input
                          className="submit"
                          type="submit"
                          defaultValue="Send Message"
                        />
                      </Fade>
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
