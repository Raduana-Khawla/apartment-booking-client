import React from "react";
import "./Menubar.css";
import { Link } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";
import useAuth from "../../../hooks/useAuth";
import logo from "../../../images/logo-removebg-preview.png";

const Menubar = () => {
  const { user, logout } = useAuth();
  console.log(user);

  return (
    <div>
      <Navbar
        className="p-3 bg-primary"
        variant="dark"
        sticky="top"
        collapseOnSelect
        expand="lg"
      >
        <Container>
          <Navbar.Brand href="#home">
            <div className="d-flex">
              <img
                className="d-inline-block align-top rounded-circle"
                src={logo}
                alt="First slide"
                width="100"
                height="60"
              />{" "}
              <div>
                <span className="design">Noor Construction</span>
              </div>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav.Link as={HashLink} to="/home">
              <span id="color">Home</span>
            </Nav.Link>
            <Nav.Link as={HashLink} to="/serviceItems">
              <span id="color">Services</span>
            </Nav.Link>
            <Nav.Link as={HashLink} to="/services">
              <span id="color">Property</span>
            </Nav.Link>
            <Nav.Link as={HashLink} to="/contact">
              <span id="color">Contact</span>
            </Nav.Link>

            <Nav.Link as={HashLink} to="/dashboard">
              <span id="color">
                <button className="items btn btn-danger p-1 ">Deshboard</button>
              </span>
            </Nav.Link>
            {user?.email ? (
              <button onClick={logout} variant="light">
                Logout
              </button>
            ) : (
              <Nav.Link as={Link} to="/login">
                <span id="color">Login</span>
              </Nav.Link>
            )}
            <Nav.Link as={HashLink} to="/notFound">
              <span id="color">NotFound</span>
            </Nav.Link>
            <Navbar.Text>
              <span id="color">Signed in as:</span>{" "}
              <a className="text-dark" href="#login">
                {user?.displayName}
              </a>{" "}
              <br />
              <a className="text-dark" href="#login">
                {user?.email}
              </a>{" "}
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Menubar;
