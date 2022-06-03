import React from "react";
import { Navbar, Container, Offcanvas, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

function Header({ dispatch, user }) {
  const handleClick = () => dispatch({ type: "logout" });
  return (
    <>
      {[false].map((expand) => (
        <Navbar key={expand} bg="light" expand={expand} className="mb-3">
          <Container fluid className="nav-bar-main">
            <LinkContainer to="/" exact>
              <Navbar.Brand className="nav-l-main">MyFitnessPal</Navbar.Brand>
            </LinkContainer>

            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header className="navigation" closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Menu
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className="navigation">
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  {Object.keys(user).length !== 0 ? (
                    <LinkContainer to={"/user/" + user.id} exact>
                      <Nav.Link href="#action1">Home</Nav.Link>
                    </LinkContainer>
                  ) : null}
                  <LinkContainer to="/workouts" exact>
                    <Nav.Link href="#action1">Workouts</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/update" exact>
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
