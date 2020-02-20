import React, { useState } from "react";
import { NavLink as RRNavLink } from "react-router-dom";
import {
  Collapse,
  Navbar,
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
    <Navbar color="light" light expand="md">
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
            <NavLink to="/multiinputform" tag={RRNavLink}>
              Multi Input Form
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/register" tag={RRNavLink}>
              Register
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/axios" tag={RRNavLink}>
              Axios
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Navigation;
