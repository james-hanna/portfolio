import React from "react";
import Fade from "react-reveal/Fade";
import darkModeLogo from "../../images/intro-logo-dark.png";
import logo from "../../images/intro-logo-light.png";
import picture from "../../images/james_hanna.jpg"
import "./intro.css";

const Intro = ({ darkMode }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        marginTop: "100px",
      }}
    >
      <Fade down>
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
      </Fade>

      <div className="intro-section-container">
      <Fade left>
      <div className="profile-picture-container">
        <img src={picture} alt="james hanna" className={darkMode? `profile-picture-dark` : `profile-picture`} />
      </div>
      </Fade>

      <Fade right>
      <div className="intro-first-para-container">
        <p className={darkMode?`intro-first-para-dark`:`intro-first-para`}>This is my intro paragraph</p>
      </div>
      </Fade>
      </div>

      <div className="little-space-intro">
        <h3> just testing out the background and scroll!</h3>
      </div>
    </div>
  );
};

export default Intro;
