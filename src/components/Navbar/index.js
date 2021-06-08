import React from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
} from "./NavbarElements";
import logo from "../../images/slowerlittlesquid.gif";

const Navbar = ({setColor}) => {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <img src={logo} alt="logo"/>
        </NavLink>
        <Bars />
        <NavMenu style={{position: "relative", left: "-48px" , margin: "auto"}}>
          <NavLink to="/intro" activeStyle onClick={() => setColor("#f0fff0")}>
            Intro
          </NavLink>
          <NavLink to="/about" activeStyle onClick={() => setColor("#fffef0")}>
            Who
          </NavLink>
          <NavLink to="/projects" activeStyle onClick={() => setColor("#f0f8ff")}>
            What
          </NavLink>
          <NavLink to="/contact" activeStyle onClick={() => setColor("#fff0f0")}>
            Contact Me
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
export default Navbar;

