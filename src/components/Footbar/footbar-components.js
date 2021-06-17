import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

/* NAV STYLING */

export const Nav = styled.nav`
  position: fixed;
  bottom: ${(props) => (props.visible ? "0px" : "-265px")};
  background-color: ${(props) => (props.darkMode ? `#2c2c2c` : `white`)};
  transition: bottom 0.5s;
  width: 100%;
  height: 200px;
  display: flex;
  z-index: 10;
  border-top: ${(props) =>
    props.darkMode ? `5px solid #1f1f1f` : `5px solid grey`};
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
    background-color: ${(props) => (props.darkMode ? `#1f1f1f` : `rgba(255,255,255,0.6)`)};
    justify-content: center;
  }
`;


export const NavMenu = styled.div`
  margin: auto;
  left: ${(props) => props.darkMode ? `-48px` : `auto`};
  display: flex;
  position: relative;
`;
