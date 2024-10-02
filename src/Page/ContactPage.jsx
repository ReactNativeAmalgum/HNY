import { FaFacebookF, FaYoutube, FaTwitter, FaInstagram } from "react-icons/fa";
import Footer from "../Components/Footer/Footer";
import './Contact.css';
import { Bounce, Fade, Slide } from "react-awesome-reveal";
import { MetaTags } from "react-meta-tags";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ContactPage() {
  const [custName, setCustName] = useState("");
  const [custEmail, setCustEmail] = useState("");
  const [custContact, setCustContact] = useState("");
  const [custSubject, setCustSubject] = useState("");
  const [custMessage, setCustMessage] = useState("");

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!custName || !custContact || !custEmail || !custSubject || !custMessage) {
      toast.error("Please fill in all fields");
      return;
    }

    if (!validateEmail(custEmail)) {
      toast.error("Invalid email address");
      return;
    }

    Appoinment();
  };

  const Appoinment = () => {
    const body = `
            <!DOCTYPE html>
            <html>
              <head>
                <title>Hny Studios</title>
                <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
                <meta name="viewport" content="width=device-width,initial-scale=1">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
              </head>
              <body style="margin:0!important;padding:0!important;background-color:#eee" bgcolor="#eeeeee">
                <div style="display:none;font-size:1px;color:#fefefe;line-height:1px;font-family:Open Sans,Helvetica,Arial,sans-serif;max-height:0;max-width:0;opacity:0;overflow:hidden"></div>
                <table border="0" cellpadding="0" cellspacing="0" width="100%" bgcolor="#fff">
                  <tr>
                    <td align="center" style="background-color:#eee" bgcolor="#eeeeee">
                      <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px">
                        <tr>
                          <td align="center" valign="top" style="font-size:0;padding:10px" bgcolor="#FFD44C">
                            <div style="display:inline-block;max-width:100%;min-width:100px;vertical-align:top;width:100%">
                              <table align="left" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:100%">
                                <tr>
                                  <td align="left" valign="top" style="font-family:Open Sans,Helvetica,Arial,sans-serif;font-size:6px;font-weight:800;line-height:10px" class="mobile-center">
                                    <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px">
                                      <tr>
                                        <td width="100%" align="center" style="font-family:Open Sans,Helvetica,Arial,sans-serif;font-size:16px;font-weight:800;line-height:24px;padding:10px">
                                          <a href="tel:+91 986745454" style="text-decoration:none;color:#000;font-family:serif;font-size:16px">HNY Studios</a>
                                        </td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                              </table>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td align="center" valign="top" style="font-size:0;padding:15px" bgcolor="#fff">
                            <div style="display:inline-block;max-width:100%;min-width:100px;vertical-align:top;display:fle;justify-content:center;align-items:center;width:100%">
                              <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:100%">
                                <tr>
                                  <td align="center" valign="top" style="font-family:Open Sans,Helvetica,Arial,sans-serif;font-size:36px;font-weight:800;line-height:48px" class="mobile-center">
                                    <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px">
                                      <tr>
                                        <td width="100%" align="center" style="font-family:Open Sans,Helvetica,Arial,sans-serif;font-weight:800">
                                          <img style="width:100%;height:120px" src="https://hny-steel.vercel.app/static/media/logo.cde712f83f26c82fe284.png" alt="">
                                        </td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                              </table>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td align="center" valign="top" style="font-size:0;padding:0" bgcolor="#FFD44C">
                            <div style="display:inline-block;max-width:100%;min-width:100px;vertical-align:top;display:fle;justify-content:center;align-items:center;width:100%">
                              <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:100%">
                                <tr>
                                  <td width="100%" align="center" valign="top" style="font-family:Open Sans,Helvetica,Arial,sans-serif;font-size:16px;font-weight:800;padding:10px 0" class="mobile-center">
                                    <h1 style="text-transform:capitalize;font-size:14px;font-weight:500;margin:0;text-align:center;color:#000">Client Enquiry Details</h1>
                                  </td>
                                </tr>
                              </table>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td align="center" height="100%" valign="top" width="100%" style="padding:0 35px 35px 35px;background-color:#fff" bgcolor="#eee">
                            <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:660px">
                              <tr>
                                <td width="100%" align="center" valign="top" style="font-size:0">
                                  <div style="display:inline-block;max-width:50%;min-width:240px;vertical-align:top;text-align:center;width:100%">
                                    <table width="100%" align="center" border="0" cellpadding="0" cellspacing="0" style="max-width:300px">
                                      <tr>
                                        <td width="100%" align="left" valign="top" style="font-family:Open Sans,Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;line-height:24px">
                                          <p style="font-size:16px;font-weight:600;color:#0074be">Customer Name:</p>
                                          <p style="font-size:14px;font-weight:500;color:#111">${custName}</p>
                                        </td>
                                      </tr>
                                    </table>
                                  </div>
                                  <div style="display:inline-block;max-width:50%;min-width:240px;vertical-align:top;width:100%">
                                    <table align="left" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:300px">
                                      <tr>
                                        <td align="left" valign="top" style="font-family:Open Sans,Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;line-height:24px">
                                          <p style="font-size:16px;font-weight:600;color:#0074be">Customer Email:</p>
                                          <p style="font-size:14px;font-weight:500;color:#111">${custEmail}</p>
                                        </td>
                                      </tr>
                                    </table>
                                  </div>
                                  <div style="display:inline-block;max-width:50%;min-width:240px;vertical-align:top;width:100%">
                                    <table align="left" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:300px">
                                      <tr>
                                        <td align="left" valign="top" style="font-family:Open Sans,Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;line-height:24px">
                                          <p style="font-size:16px;font-weight:600;color:#0074be">Customer contact:</p>
                                          <p style="font-size:14px;font-weight:500;color:#111">${custContact}</p>
                                        </td>
                                      </tr>
                                    </table>
                                  </div>
                                  <div style="display:inline-block;max-width:50%;min-width:240px;vertical-align:top;width:100%">
                                    <table align="left" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:300px">
                                      <tr>
                                        <td align="left" valign="top" style="font-family:Open Sans,Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;line-height:24px">
                                          <p style="font-size:16px;font-weight:600;color:#0074be">Customer Message:</p>
                                          <p style="font-size:14px;font-weight:500;color:#111">${custMessage}</p>
                                        </td>
                                      </tr>
                                    </table>
                                  </div>
                                  <div style="display:inline-block;max-width:50%;min-width:240px;vertical-align:top;width:100%">
                                    <table align="left" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:300px">
                                      <tr>
                                        <td align="left" valign="top" style="font-family:Open Sans,Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;line-height:24px">
                                          <p style="font-size:16px;font-weight:600;color:#0074be">Customer Subject:</p>
                                          <p style="font-size:14px;font-weight:500;color:#111">${custSubject}</p>
                                        </td>
                                      </tr>
                                    </table>
                                  </div>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                        <tr>
                          <td width="100%" align="center" bgcolor="#FFD44C" style="padding:10px 0">
                            <p style="color:#000;font-weight:500;font-size:1rem;padding:0;margin:0">Hny Studio</p>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </body>
            </html> 
    `;

    fetch("https://skdm.in/server/v1/send_lead_mail.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        toEmail: "hnymumbai@gmail.com",
        fromEmail: "skdmlead@gmail.com",
        bccMail: "skdmlead@gmail.com",
        mailSubject: "New Customer Lead",
        mailBody: body,
        accountName: "hny",
        accountLeadSource: "https://hnyspaces.com/",
        accountLeadName: custName,
      }),
    })
      .then(response => response.text())
      .then(data => console.log(data))
      .catch(error => console.error('Error:', error));

    alert("Your Form has Submitted. Our team will contact you soon.");
  };

  return (
    <>
      <MetaTags>
        <title>Interior Designer near Thane | HNY Studios</title>
        <meta title="Interior Designer near Thane | HNY Studios" />
        <meta name="description" content="Interior Work, Interior Designer in Thane, Interior Designers & Interior Decorators in Thane,  Interior Design & Planning Services in Thane, Modular Kitchen Designer in Thane, Interior Designing, Commercial Interior Designer in Thane, Interior Designer near Thane, Best Interior Decorator in Thane" />
        <link rel="canonical" href="https://hnyspaces.com/interior-designer-near-thane" />
        <meta http-equiv="cache-control" content="no-cache" />
        <meta http-equiv="expires" content="0" />
        <meta http-equiv="pragma" content="no-cache" />
        <meta property="og:title" content="Interior Designer near Thane | HNY Studios" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://hnyspaces.com/" />
        <meta property="og:description" content="Find the leading Interior Designers & Interior Decorators in Thane to elevate your living or workspace. Our experts offer bespoke design solutions." />
        <meta property="og:image" content="https://kinararesort.in/static/media/logo.146c55d2a549f20e2963.png" />
      </MetaTags>
      <section>
        <div className="contact-banner">
          <Fade delay={700} duration={900}>
            <h2>Contact Us</h2>
          </Fade>
        </div>
      </section>
      <div style={{ textAlign: 'center' }} className="left-card special-left-card ">
        <Slide direction="down">
          <h1
            style={{
              display: 'inline-block',
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
        difference when it comes to transforming your living or working space...
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
                            220, LODHA SIGNET A, Beside Lodha AMARA, Kolhshet Rd...
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
                          <a href="https://www.facebook.com/HNYInteriorDesigner">
                            <FaFacebookF />
                          </a>
                          <a href="https://www.youtube.com/@hnyinteriors" target="_blank">
                            <FaYoutube />
                          </a>
                          <a href="https://www.instagram.com/hnyinteriors/">
                            <FaInstagram />
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
                          <label htmlFor="custName">Name *</label>
                          <input
                            type="text"
                            className="form-control"
                            id="custName"
                            placeholder="Your Name"
                            value={custName}
                            onChange={(e) => setCustName(e.target.value)}
                            required
                          />
                        </div>
                        <div className="col-md-12 mb-3">
                          <label htmlFor="custEmail">Email *</label>
                          <input
                            type="email"
                            className="form-control"
                            id="custEmail"
                            placeholder="Your Email"
                            value={custEmail}
                            onChange={(e) => setCustEmail(e.target.value)}
                            required
                          />
                        </div>
                        <div className="col-md-12 mb-3">
                          <label htmlFor="custEmail">Phone no *</label>
                          <input
                            type="number"
                            className="form-control"
                            id="custEmail"
                            placeholder="Your Phone no"
                            value={custContact}
                            onChange={(e) => setCustContact(e.target.value)}
                            required
                          />
                        </div>
                        <div className="col-md-12 mb-3">
                          <label htmlFor="custSubject">Subject *</label>
                          <input
                            type="text"
                            className="form-control"
                            id="custSubject"
                            placeholder="Your Subject"
                            value={custSubject}
                            onChange={(e) => setCustSubject(e.target.value)}
                            required
                          />
                        </div>
                        <div className="col-md-12 mb-3">
                          <label htmlFor="custMessage">Message *</label>
                          <textarea
                            className="form-control"
                            id="custMessage"
                            placeholder="Your Message"
                            value={custMessage}
                            onChange={(e) => setCustMessage(e.target.value)}
                            required
                          />
                        </div>
                      </div>
                      <button className="btn btn-primary btn-primary-contact" type="submit">Send Message</button>
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
