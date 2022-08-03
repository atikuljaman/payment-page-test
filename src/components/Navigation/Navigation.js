import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../assets/images/logo.png";
import { BsSearch, BsCart3 } from "react-icons/bs";
import { BiUser } from "react-icons/bi";
import "./Navigation.css";

const Navigation = () => {
  return (
    <div>
      {" "}
      <Navbar className="border-bottom" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img className="logo" src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto">
              <Nav.Link className="nav-link" href="#home">
                Men
              </Nav.Link>
              <Nav.Link className="nav-link" href="#link">
                Women
              </Nav.Link>
              <Nav.Link className="nav-link" href="#link">
                Kids
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <div className="d-flex align-items-center">
            <div>
              <BsSearch className="icon" />
            </div>
            <div className="mx-4">
              <BsCart3 className="icon" />
            </div>
            <div>
              <BiUser className="user-icon" />
            </div>
          </div>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
