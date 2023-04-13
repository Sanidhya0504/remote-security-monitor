import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import HomeHeader from "../headers/home.header";
function HomeNav(args) {
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">RSMon</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/sign-in">Sign-in</Nav.Link>
              <Nav.Link href="/sign-up">Sign-up</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default HomeNav;
