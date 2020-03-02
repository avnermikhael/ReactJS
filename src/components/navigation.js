import React, { useState } from "react";
import { NavLink as RRNavLink } from "react-router-dom";
import {
  Collapse,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const token = localStorage.getItem("jwtToken");
  const role = localStorage.getItem("jwtRole");

  if (!token) {
    return (
      <nav className="navbar navbar-expand-xl fixed-top navbar-dark bg-dark">
        <NavbarBrand>Travel Time</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink to="/signin" tag={RRNavLink}>
                Sign In
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink to="/register" tag={RRNavLink}>
                Register
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink to="/axios" tag={RRNavLink}>
                Articles
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </nav>
    );
  } else if (token && role === "true") {
    return (
      <nav className="navbar navbar-expand-xl fixed-top navbar-dark bg-dark">
        <NavbarBrand href={"/"}>Travel Time</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink to="/home" tag={RRNavLink}>
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/profile" tag={RRNavLink}>
                Profile
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/about" tag={RRNavLink}>
                About
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink to="/axios" tag={RRNavLink}>
                Review Article
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink to="/showalluser" tag={RRNavLink}>
                User List
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink to="/logout" tag={RRNavLink}>
                Sign Out
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </nav>
    );
  } else {
    return (
      <nav className="navbar navbar-expand-xl fixed-top navbar-dark bg-dark">
        <NavbarBrand href={"/"}>Travel Time</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink to="/home" tag={RRNavLink}>
                Home
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink to="/profile" tag={RRNavLink}>
                Profile
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink to="/axios" tag={RRNavLink}>
                Your Article
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink to="/postarticle" tag={RRNavLink}>
                Create Article
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink to="/showorder" tag={RRNavLink}>
                Your Order
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink to="/logout" tag={RRNavLink}>
                Sign Out
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </nav>
    );
  }
};

export default Navigation;
