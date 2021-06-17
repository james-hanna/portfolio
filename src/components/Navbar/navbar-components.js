import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

/* NAV STYLING */

export const Nav = styled.nav`
  position: fixed;
  top: ${(props) => (props.visible ? "0" : "-65px")};
  background-color: ${(props) => (props.darkMode ? `#2c2c2c` : `white`)};
  transition: top 0.6s;
  width: 100%;
  display: flex;
  z-index: 10;
  border-bottom: ${(props) =>
    props.darkMode ? `5px solid #1f1f1f` : `5px solid grey`};
  @media screen and (max-width: 768px) {
    justify-content: space-between;
  }
`;

export const NavLink = styled(Link)`
  color: ${(props) => (props.darkMode ? `rgba(255, 255, 255, 0.6)` : `#000`)};
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    color: ${(props) =>
      props.darkMode ? `rgba(255, 255, 255, 0.87)` : `#000`};
    text-decoration: underline;
  }
  @media screen and (max-width: 768px) {
    background-color: ${(props) => (props.darkMode ? `#1f1f1f` : `white`)};
    border-bottom: ${(props) =>
      props.darkMode
        ? `2px solid rgba(255, 255, 255, 0.6)`
        : `2px solid #1f1f1f`};
    justify-content: center;
  }
`;

export const Buttonz = styled(Link)`
  color: ${(props) => (props.darkMode ? `rgba(255, 255, 255, 0.6)` : `#000`)};
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
`;

export const Bars = styled(FaBars)`
  display: none;


  @media screen and (max-width: 768px) {
    color: ${(props) => (props.darkMode ? `rgba(255, 255, 255, 0.6)` : `#000`)};
    display: block;
    position: absolute;
    top: 0;
    right: ${(props) => (props.darkMode ? `0` : `64px`)};
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  margin: auto;
  display: flex;
  position: relative;
  @media screen and (max-width: 768px) {
    ${(props) =>
      props.mnmo
        ? `
      flex-direction: column;
      width: 100%;
      height: 500px;
      position: absolute;
      top: 70px;
      &.active{
          color: ${(props) =>
            props.darkMode ? `rgba(255, 255, 255, 0.87)` : `#000`};
          text-decoration: underline;
      }
    `
        : `display: none;`}
  }
`;
