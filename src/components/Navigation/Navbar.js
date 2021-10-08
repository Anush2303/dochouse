import React from "react";
import "./Navbar.css";
import Nav from "react-bootstrap/Nav";

const Navbar = () => {
  return (
    <Nav fill className="justify-content-center navbar" activeKey="/home">
      <Nav.Item>
        <Nav.Link href="/" className="nav-links">
          Home
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1" className="nav-links" href="sell">
          Sell Notes
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2" className="nav-links" href="/mynotes">
          My Notes
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2" className="nav-links" href="/faq">
          FAQ's
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2" className="nav-links" href="/login">
          Login
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2" className="nav-links" href="/signup">
          Signup
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default Navbar;
