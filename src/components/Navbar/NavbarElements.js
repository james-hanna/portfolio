import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

export const Nav = styled.nav`
  background: white;
  filter: alpha(opacity=0.6)
  height: 40px;
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
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
