import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from '../assets/golflogo.jpg'
import styles from "../styles/NavBar.module.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar className={styles.NavBar} expand="md" fixed="top">
      <Container>
        <NavLink to="/">
          <Navbar.Brand>
            <img src={logo} alt="logo" height="45" />
          </Navbar.Brand>
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto text-left">
            <NavLink
              exact
              className={styles.NavLink}
              activeClassName={styles.Active}
              to="/"
            >
             <i className="fa-solid fa-golf-ball-tee"></i>Golf Home
            </NavLink>
            <NavLink
              className={styles.NavLink}
              activeClassName={styles.Active}
              to="/about us"
            >
             <i className="fa-solid fa-address-card"></i>About us
            </NavLink>
            <NavLink
              to="/contact us"
              className={styles.NavLink}
              activeClassName={styles.Active}
            >
              <i className="fa-solid fa-envelope"></i>Contact us 
            </NavLink>
            <NavLink
              to="/signin"
              className={styles.NavLink}
              activeClassName={styles.Active}
            >
              <i className="fa-solid fa-right-to-bracket"></i>Sign in
            </NavLink>
            <NavLink
              to="/signup"
              className={styles.NavLink}
              activeClassName={styles.Active}
            >
              <i className="fas fa-user-plus"></i>Sign up
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;