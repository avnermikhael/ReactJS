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
    <nav className="navbar navbar-expand-xl fixed-top navbar-dark bg-dark">
      <NavbarBrand href={"/home"}>BSP</NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar>
          {/* <NavItem>
            <NavLink to="/signin" tag={RRNavLink}>
              Sign In
            </NavLink>
          </NavItem> */}

          <NavItem>
            <NavLink to="/allactivities" tag={RRNavLink}>
              Kegiatan
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink to="/charts" tag={RRNavLink}>
              Grafik Info
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink to="/addactivity" tag={RRNavLink}>
              Tambahkan Kegiatan
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </nav>
  );
};

export default Navigation;
