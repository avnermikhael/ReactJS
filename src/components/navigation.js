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
  return (
    <nav class="navbar navbar-expand-xl fixed-top navbar-dark bg-dark">
      <NavbarBrand href={"/"}>Taylor Swift</NavbarBrand>
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
            <NavLink to="/register" tag={RRNavLink}>
              Register
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/axios" tag={RRNavLink}>
              List
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/registerbook" tag={RRNavLink}>
              Book Register
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </nav>
  );
};

export default Navigation;
