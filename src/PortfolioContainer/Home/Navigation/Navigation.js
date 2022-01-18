import React from "react";
import "./Navigation.css";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

export default function Navigation() {
  return (
    <div>
      <Navbar>
        <Container>
          <Nav className="me-auto nav-links">
            <Nav.Link className="home-link" href="#home">Home</Nav.Link>
            <Nav.Link className="projects-link" href="#projects">Projects</Nav.Link>
            <Nav.Link className="contact-link" href="#contact">Contact</Nav.Link>
            <Nav.Link className="resume-link" href="#resume">Resume</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}
