import React from "react";
import { Navbar, Container, Offcanvas, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

function Header({ loggedIn, setLoggedIn }) {
  function handleClick() {
    setLoggedIn(false);
    console.log(loggedIn);
  }
  return (
    <>
      {[false].map((expand) => (
        <Navbar key={expand} bg="light" expand={expand} className="mb-3">
          <Container fluid>
            <Navbar.Brand>MyFitnessPal</Navbar.Brand>

            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Menu
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <LinkContainer to="/" exact>
                    <Nav.Link href="#action1">Workouts</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/" exact>
                    <Nav.Link href="#action2">Manage account</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/" exact>
                    <Nav.Link href="#action3" onClick={handleClick}>
                      Log out
                    </Nav.Link>
                  </LinkContainer>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Header;
