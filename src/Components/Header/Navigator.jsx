import React from "react";
import "./navii.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../../Assets/wny-logo-.png";
import Button from "react-bootstrap/esm/Button";
function Navigator() {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            <div className="logo-imgg">
              <img src={logo} alt="" />
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/aboutpage">About</Nav.Link>
              <Nav.Link href="/weare">Who we are</Nav.Link>
              <NavDropdown title="Service" id="basic-nav-dropdown">
                <NavDropdown.Item href="/servicepage">Service</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Interior Designing
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  {" "}
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
            <Nav>
              <Nav.Link>
                <Button className="btn-enq" variant="dark">
                  Enquiry now
                </Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigator;
