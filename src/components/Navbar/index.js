import React, { useState, useEffect } from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
} from "./NavbarElements";
import logo from "../../images/slowerlittlesquid.gif";
import darkLogo from "../../images/slowerlittlesquid-darkv2.gif"
import debounce from "../../utils/debounce"

const Navbar = ({setColor, darkMode, setDarkMode}) => {

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = debounce(() => { 
    const currentScrollPos = window.pageYOffset;
    setVisible((prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 70) || currentScrollPos < 10);
    setPrevScrollPos(currentScrollPos);
  }, 100);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos, visible, handleScroll]);




  return (
    <>
      <Nav style={{top: visible ? '0' : '-60px'}}>
        <NavLink to="#">
          <img src={darkMode === false ? logo : darkLogo} alt="logo" onClick={() => setDarkMode(!darkMode)}/>
        </NavLink>
        <Bars />
        <NavMenu >
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

