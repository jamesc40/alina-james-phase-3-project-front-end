import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

function HomeHeader() {
  return (
    <Navbar bg="transparent">
      <Container className="home-nav">
        <LinkContainer to="/" exact>
          <Navbar.Brand href="#home">MyFitnessPal</Navbar.Brand>
        </LinkContainer>
        <LinkContainer to="/login" exact>
          <Nav className="justify-content-end">
            <Nav.Link href="#home" className="log-in-link">
              Log In
            </Nav.Link>
          </Nav>
        </LinkContainer>

        <LinkContainer to="/workouts" exact>
          <Nav className="me-auto justify-content-end">
            <Nav.Link href="#home">Workouts</Nav.Link>
          </Nav>
        </LinkContainer>
      </Container>
    </Navbar>
  );
}

export default HomeHeader;
