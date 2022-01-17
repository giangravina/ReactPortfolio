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
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Projects</Nav.Link>
            <Nav.Link href="#pricing">Contact</Nav.Link>
            <Nav.Link href="#pricing">Resume</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}
