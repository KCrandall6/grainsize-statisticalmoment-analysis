import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavBarMenu = () => {


  return (
    <>
    <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/">Grainsize Statistical Moment Analysis</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/search">Search</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
          </Nav>
        </Container>

      </Navbar>
    </>
  );
}

export default NavBarMenu;