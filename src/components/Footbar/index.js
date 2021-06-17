import React, { useState, useEffect } from "react";
import { Nav } from "./footbar-components.js";
import debounce from "../../utils/debounce";


const Footbar = ({ color, darkMode }) => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(false);

  const handleScroll = debounce(() => {
    const currentScrollPos = window.pageYOffset;

    setVisible(
      (prevScrollPos < currentScrollPos &&
        currentScrollPos - prevScrollPos > 70 &&
        currentScrollPos >= 300)
    );
    setPrevScrollPos(currentScrollPos);
  }, 100);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible, handleScroll]);


  return (
    <>
      <Nav visible={visible} darkMode={darkMode}>
       
      </Nav>
    </>
  );
};
export default Footbar;
