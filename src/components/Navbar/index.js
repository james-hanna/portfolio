import React, { useState, useEffect } from "react";
import { Nav, NavLink, Buttonz, Bars, NavMenu } from "./navbar-components.js";
import logo from "../../images/slowerlittlesquid.gif";
import darkLogo from "../../images/slowerlittlesquid-darkv2.gif";
import debounce from "../../utils/debounce";
import colorChangeLogo from "../../images/littlesquid-color-changing.gif";

const Navbar = ({ setColor, color, darkMode, setDarkMode }) => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [mnmo, setMnmo] = useState(false);
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

  const colorChangeHandler = () => {
    const colors = ["#DBC9E9", "#C9F4FB", "#C9EFCB", "#FFE7C9", "#FDC9C9"];
    let max = colors.length;
    if (num < max - 1) {
      setNum(num + 1);
    } else {
      setNum(0);
    }
    setColor(colors[num]);
  };

  return (
    <>
      <Nav visible={visible} darkmode={darkMode}>
        <Buttonz to="#">
          <img
            src={darkMode ? darkLogo : logo}
            alt="logo"
            onClick={() => setDarkMode(!darkMode)}
          />
        </Buttonz>
        <Bars onClick={() => setMnmo(!mnmo)} darkmode={darkMode} />
        <NavMenu mnmo={mnmo} darkmode={darkMode}>
          <NavLink
            to="/intro"
            darkmode={darkMode}
            color={color}
            onClick={() => setMnmo(false)}
          >
            Who
          </NavLink>
          <NavLink
            to="/about"
            darkmode={darkMode}
            color={color}
            onClick={() => setMnmo(false)}
          >
            Why
          </NavLink>
          <NavLink
            to="/projects"
            darkmode={darkMode}
            color={color}
            onClick={() => setMnmo(false)}
          >
            What
          </NavLink>
          <NavLink
            to="/contact"
            darkmode={darkMode}
            color={color}
            onClick={() => setMnmo(false)}
          >
            How
          </NavLink>
        </NavMenu>
        {darkMode ? null : (
          <Buttonz to="#">
            <img
              src={colorChangeLogo}
              alt="logo"
              onClick={() => colorChangeHandler()}
            />
          </Buttonz>
        )}
      </Nav>
    </>
  );
};
export default Navbar;
