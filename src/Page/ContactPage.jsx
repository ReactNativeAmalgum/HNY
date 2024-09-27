import { FaFacebookF, FaYoutube, FaTwitter, FaInstagram } from "react-icons/fa";
import Footer from "../Components/Footer/Footer";
import './Contact.css';
import { Bounce, Fade, Slide } from "react-awesome-reveal";
import { MdAddCall } from "react-icons/md";
import { MetaTags } from "react-meta-tags";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [submitBtn, setSubmitBtn] = useState(false);
  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\.,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,})$/i;
    return re.test(String(email).toLowerCase());
  };

  const handleValidation = () => {
    let tempErrors = {};
    let isValid = true;

    if (!name || name.trim() === "") {
      tempErrors["name"] = "Name is required";
      isValid = false;
    }
    if (!email || email.trim() === "") {
      tempErrors["email"] = "Email is required";
      isValid = false;
    } else if (!validateEmail(email)) {
      tempErrors["email"] = "Invalid email format";
      isValid = false;
    }
    if (!subject || subject.trim() === "") {
      tempErrors["subject"] = "Subject is required";
      isValid = false;
    }
    if (!message || message.trim() === "") {
      tempErrors["message"] = "Message is required";
      isValid = false;
    }

    setErrors(tempErrors);
    setSubmitBtn(isValid);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (handleValidation()) {
      // Assuming you have a function to send this data somewhere
      console.log("Form submitted", { name, email, subject, message });
      toast.success("Form submitted successfully!");
      // Reset form fields
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    } else {
      // Display specific error messages
      for (const [key, value] of Object.entries(errors)) {
        toast.error(`${value}`);
      }
    }
  };

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
        <Slide direction="down">
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
                            220, LODHA SIGNET A, Beside Lodha AMARA, Kolhshet Rd, Thane West, Maharashtra 400607
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
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-7 col-md-6 mt-5 mb-5">
                  <div className="contact-form-wrap">
                    <ToastContainer />
                    <form className="needs-validation" onSubmit={handleSubmit} noValidate>
                      <div className="form-row">
                        <div className="col-md-12 mb-3">
                          <label htmlFor="name">Name *</label>
                          <input
                            type="text"
                            className="form-control"
                            id="name"
                            placeholder="Your Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                          />
                        </div>
                        <div className="col-md-12 mb-3">
                          <label htmlFor="email">Email *</label>
                          <input
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder="Your Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                          />
                        </div>
                        <div className="col-md-12 mb-3">
                          <label htmlFor="subject">Subject *</label>
                          <input
                            type="text"
                            className="form-control"
                            id="subject"
                            placeholder="Your Subject"
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                            required
                          />
                        </div>
                        <div className="col-md-12 mb-3">
                          <label htmlFor="message">Message *</label>
                          <textarea
                            className="form-control"
                            id="message"
                            placeholder="Your Message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                          />
                        </div>
                      </div>
                      <button className="btn btn-primary" type="submit">Send Message</button>
                    </form>
                  </div>
                </div>
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
