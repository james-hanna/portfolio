import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import logo from "../../images/slowerlittlesquid.gif";
import darkLogo from "../../images/slowerlittlesquid-darkv2.gif";
import debounce from "../../utils/debounce";
import colorChangeLogo from "../../images/littlesquid-color-changing.gif";

const Navbar = ({ setColor, darkMode, setDarkMode }) => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [mnmo, setMnmo] = useState(false)
  const [num, setNum] = useState(0);

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
          @media screen and (max-width: 768px) {
            justify-content: space-between;
          }
        `
      : styled.nav`
          position: fixed;
          transition: top 0.6s;
          background: #2c2c2c;
          border-bottom: 5px solid #1f1f1f;
          width: 100%;
          display: flex;
          z-index: 10;
          @media screen and (max-width: 768px) {
            justify-content: space-between;
          }
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
          color: #fff;

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

  const NavMenu = mnmo === false? 
   styled.div`
    position: relative;
    left: -48px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 768px) {
      display: none;
    }
  `:
  styled.div`
    @media screen and (max-width: 768px) {
      margin: auto;
      background-color: #1f1f1f;
      justify-content: center;
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 500px;
      position: absolute;
      top: 65px;
      &.active {
        color: rgba(255, 255, 255, 0.87);
        text-decoration: underline;
      }
    }
  `;

  const colorChangeHandler = () => {
    const colors = ["#DBC9E9", "#C9F4FB", "#C9EFCB", "#FFE7C9", "#FDC9C9"];
    let max = colors.length;
    if(num <= max - 1){
      setNum(num + 1);
    }else{
      setNum(0);
    }
    setColor(colors[num]);
  }


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
        <Bars onClick={() => setMnmo(!mnmo)}/>
        <NavMenu>
          <NavLink to="/intro" activeStyle >
            Intro
          </NavLink>
          <NavLink to="/about" activeStyle >
            Who
          </NavLink>
          <NavLink
            to="/projects"
            activeStyle
          >
            What
          </NavLink>
          <NavLink
            to="/contact"
            activeStyle
          >
            Contact Me
          </NavLink>
        </NavMenu>
        {darkMode === false ? (
          <NavLink to="#">
            <img
              src={colorChangeLogo}
              alt="logo"
              onClick={() => colorChangeHandler()}
            />
          </NavLink>
        ) : null}
      </Nav>
    </>
  );
};
export default Navbar;
