import React from "react";
import "./about.css";
import darkModeLogo from "../../images/about-logo-dark.png";
import logo from "../../images/about-logo-light.png"
import workInProg from "../../images/work-in-progress.png"

const About = ({ darkMode }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          marginTop: "100px",
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
      <div className="work-in-progress-box">
        <img src={workInProg} alt="Work in Progress" className="wipImg"/>
        </div>
      <div className="little-space-about">
        <h3> just testing out the background and scroll!</h3>
      </div>
    </div>
  );
};

export default About;
