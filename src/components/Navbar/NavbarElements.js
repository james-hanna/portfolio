import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

export const Nav = styled.nav`
  position: fixed;
  transition: top 0.6s;
  background: white;
  width: 100%;
  display: flex;
  z-index: 10;
  }
`;

export const NavLink = styled(Link)`
  color: #949dd4;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    color: #0b21a3;
    text-decoration: underline;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #949dd4;

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

export const NavMenu = styled.div`
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
