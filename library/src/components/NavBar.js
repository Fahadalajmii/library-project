import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

const NavBar = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" className="cntnr">
        <Container>
          <Navbar.Brand href="/">Library</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/books">Books</Nav.Link>
            <Nav.Link href="/Members">Members</Nav.Link>
          </Nav>
        </Container>
        <Container>
          <blockquote className="quote">
            a library opens a window into the soul and a door into the world
          </blockquote>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
