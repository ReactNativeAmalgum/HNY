import React from "react";
import "../exp/exp.css";
import {
  FaArrowRight,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { MdLocalPhone, MdOutlineEmail } from "react-icons/md";
import { SiGooglemaps } from "react-icons/si";
import logo from "../../Assets/wny-logo-.png";
import { Link } from "react-router-dom";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

function Experiment() {
  return (
    <>
      <div className="navbar-cont">
        <div className="container">
          <div className="custom-row row">
            <div className="left-col custom-col col-6">
              <div className="social-i-cont">
                <FaFacebookF />
                <FaTwitter />
                <FaLinkedinIn />
                <FaInstagram />
              </div>
            </div>
            <div className="right-col custom-col col-6">
              <ul>
                <div className="right-col-li-con">
                  <MdOutlineEmail />
                  <li>info@domain.com</li>
                </div>
                <div className="right-col-li-con">
                  <SiGooglemaps />
                  <li>250 Main Street, 2nd Floor. USA</li>
                </div>
                <div className="right-col-li-con">
                  <MdLocalPhone />
                  <li>+89(0) 1256 2156</li>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand as={Link} to={"/home"}>
            <div className="logo-imgg">
              <img src={logo} alt="Logo" />
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav
              className="fontstyle"
              style={{
                display: "flex",
                justifyContent: "space",
                fontSize: "18px",
                fontFamily: "'Open Sans', sans-serif",
              }}
            >
              <Nav.Link href="/"><Link to={'/'}>Home</Link></Nav.Link>
              <Nav.Link href="/aboutpage">About</Nav.Link>
              <Nav.Link href="/weare">Who we are</Nav.Link>
              <NavDropdown title="Service" id="basic-nav-dropdown">
                <NavDropdown.Item href="/servicepage">Service</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Interior Designing
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Modular Kitchen Installation
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  Other Expertise
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  Commercial Interior Design
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/gallery">Gallery</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>
            {/* Decreased the width of the Nav containing the "Book Now" button */}
            <Nav
              style={{
                display: "flex",
                width: "10%",
                justifyContent: "flex-end",
              }}
            >
              <Nav.Link href="/gallery">
                <div className="booknow-circle-cont">
                  <div className="book-now">
                    <span>Book Now</span>
                  </div>
                  <div className="circle">
                    <FaArrowRight />
                  </div>
                </div>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Experiment;
