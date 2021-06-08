import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import logo from "../../images/slowerlittlesquid.gif";
import darkLogo from "../../images/slowerlittlesquid-darkv2.gif";
import debounce from "../../utils/debounce";

const Navbar = ({ setColor, darkMode, setDarkMode }) => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = debounce(() => {
    const currentScrollPos = window.pageYOffset;
    setVisible(
      (prevScrollPos > currentScrollPos &&
        prevScrollPos - currentScrollPos > 70) ||
        currentScrollPos < 10
    );
    setPrevScrollPos(currentScrollPos);
  }, 100);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible, handleScroll]);

  /* NAV STYLING */

  const Nav =
    darkMode === false
      ? styled.nav`
          position: fixed;
          transition: top 0.6s;
          background: white;
          width: 100%;
          display: flex;
          z-index: 10;
        `
      : styled.nav`
          position: fixed;
          transition: top 0.6s;
          background: #2c2c2c;
          border-bottom: 5px solid #1f1f1f;
          width: 100%;
          display: flex;
          z-index: 10;
        `;

  const NavLink =
    darkMode === false
      ? styled(Link)`
          color: #000;
          display: flex;
          align-items: center;
          text-decoration: none;
          padding: 0 1rem;
          height: 100%;
          cursor: pointer;

          &.active {
            color: #000;
            text-decoration: underline;
          }
        `
      : styled(Link)`
          color: rgba(255, 255, 255, 0.6);
          display: flex;
          align-items: center;
          text-decoration: none;
          padding: 0 1rem;
          height: 100%;
          cursor: pointer;

          &.active {
            color: rgba(255, 255, 255, 0.87);
            text-decoration: underline;
          }
        `;

  const Bars =
    darkMode === false
      ? styled(FaBars)`
          display: none;
          color: rgba(255, 255, 255, 0.6);

          @media screen and (max-width: 768px) {
            display: block;
            position: absolute;
            top: 0;
            right: 0;
            transform: translate(-100%, 75%);
            font-size: 1.8rem;
            cursor: pointer;
          }
        `
      : styled(FaBars)`
          display: none;
          color: rgba(255, 255, 255, 0.6);

          @media screen and (max-width: 768px) {
            display: block;
            position: absolute;
            top: 0;
            right: 0;
            transform: translate(-100%, 75%);
            font-size: 1.8rem;
            cursor: pointer;
          }
        `;

  const NavMenu = styled.div`
    position: relative;
    left: -48px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 768px) {
      display: none;
    }
  `;

  return (
    <>
      <Nav style={{ top: visible ? "0" : "-65px" }}>
        <NavLink to="#">
          <img
            src={darkMode === false ? logo : darkLogo}
            alt="logo"
            onClick={() => setDarkMode(!darkMode)}
          />
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/intro" activeStyle onClick={() => setColor("#f0fff0")}>
            Intro
          </NavLink>
          <NavLink to="/about" activeStyle onClick={() => setColor("#fffef0")}>
            Who
          </NavLink>
          <NavLink
            to="/projects"
            activeStyle
            onClick={() => setColor("#f0f8ff")}
          >
            What
          </NavLink>
          <NavLink
            to="/contact"
            activeStyle
            onClick={() => setColor("#fff0f0")}
          >
            Contact Me
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
export default Navbar;
