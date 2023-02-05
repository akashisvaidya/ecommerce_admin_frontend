import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import Login from "../login/Login";

const Header = () => {
  return (
    <div>
      <Navbar bg="light" expand="md">
        <Container>
          <Link to="/" className="navbar-brand">
            Admin CMS
          </Link>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Link to="/" className="nav-link">
                <i class="fa-solid fa-door-open"></i> Login
              </Link>
              <Link to="/register" className="nav-link">
                <i class="fa-solid fa-people-pulling"></i> Register
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
