import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from '../assets/golflogo.jpg'

const NavBar = () => {
 return (
    <Navbar bg="light" expand="lg">
     <Container>
      <Navbar.Brand>
       <img src={logo} alt="logo" height="45" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
       <Nav className="ml-auto text-right">
        <Nav.Link>
        <i class="fa-solid fa-golf-ball-tee"></i>Golf World
        </Nav.Link>
        <Nav.Link>
        <i class="fa-solid fa-right-to-bracket"></i>Sign in
        </Nav.Link>
        <Nav.Link>
        <i class="fa-solid fa-user-plus"></i>Sign up
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
   </Container>
  </Navbar>
 );
};

export default NavBar;
