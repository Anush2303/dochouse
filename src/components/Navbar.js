import React from "react";
import "./Navbar.css";
import Nav from "react-bootstrap/Nav";

const Navbar = () => {
  return (
    <Nav fill className="justify-content-center navbar" activeKey="/home">
      <Nav.Item>
        <Nav.Link href="/home" className="nav-links">
          Home
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1" className="nav-links">
          Sell Notes
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2" className="nav-links">
          My Notes
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2" className="nav-links">
          FAQ's
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2" className="nav-links">
          Login
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2" className="nav-links">
          Signup
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default Navbar;
