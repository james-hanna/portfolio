import React from "react";
import "./contact.css";
import darkModeLogo from "../../images/contact-logo-dark.png";
import logo from "../../images/contact-logo-light.png";

const Contact = ({ darkMode }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        marginTop: "100px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img
          className="title-logo"
          src={darkMode ? darkModeLogo : logo}
          alt="projects pixel"
        ></img>
      </div>
      <div className="little-space-contact">
        <h3> just testing out the background and scroll!</h3>
      </div>
    </div>
  );
};

export default Contact;
