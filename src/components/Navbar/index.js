import React from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
} from "./NavbarElements";
import logo from "../../images/slowerlittlesquid.gif";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <img src={logo} alt="logo"/>
        </NavLink>
        <Bars />
        <NavMenu style={{position: "relative", left: "-48px" , margin: "auto"}}>
          <NavLink to="/intro" activeStyle>
            Intro
          </NavLink>
          <NavLink to="/about" activeStyle>
            Who
          </NavLink>
          <NavLink to="/projects" activeStyle>
            What
          </NavLink>
          <NavLink to="/contact" activeStyle>
            Contact Me
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
export default Navbar;

