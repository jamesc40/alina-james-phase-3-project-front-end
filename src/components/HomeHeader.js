import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

function HomeHeader() {
  return (
    <Navbar bg="light" variant="light">
      <Container className="home-nav">
        <LinkContainer to="/" exact>
          <Navbar.Brand href="#home">MyFitnessPal</Navbar.Brand>
        </LinkContainer>

        <LinkContainer to="/login" exact>
          <Nav className="me-auto log-in-link">
            <Nav.Link href="#home">Log In</Nav.Link>
          </Nav>
        </LinkContainer>
      </Container>
    </Navbar>
  );
}

export default HomeHeader;
