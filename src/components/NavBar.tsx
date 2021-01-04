import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";

function NaviBar() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>RaDrIgIs blog</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link>
              <Link to="/">Home</Link>
              <Link to="/users">Users</Link>
              <Link to="/about">About</Link>
            </Nav.Link>
          </Nav>
          <Nav>
            <Button variant="primary">Log in</Button>
            <Button variant="primary">Sign out</Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default NaviBar;
