import React from 'react';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Styles = styled.div`
  a,
  .navbar-brand,
  navbar-nav .nav-link {
    color: #adb1d8;
    &:hove {
      color: white;
    }
  }
`;

function NaviBar() {
  return (
    <>
      <Styles>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand>RaDrIgIs blog</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link>
                  <Link to="/">Home</Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/users">Users</Link>
                </Nav.Link>
                <Nav.Link>
                  {' '}
                  <Link to="/about">About</Link>
                </Nav.Link>
              </Nav>
              <Nav>
                <Button variant="primary">Log in</Button>
                <Button variant="primary">Sign out</Button>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Styles>
    </>
  );
}

export default NaviBar;
