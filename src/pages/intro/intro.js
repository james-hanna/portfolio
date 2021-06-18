import React from "react";
import Fade from "react-reveal/Fade";
import darkModeLogo from "../../images/intro-logo-dark.png";
import logo from "../../images/intro-logo-light.png";
import picture from "../../images/james_hanna.jpg";
import "./intro.css";

const Intro = ({ darkMode }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Fade top>
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
      </Fade>

      <div className="intro-section-container">
        <Fade left>
          <div className="profile-picture-container">
            <img
              src={picture}
              alt="james hanna"
              className={darkMode ? `profile-picture-dark` : `profile-picture`}
            />
          </div>
        </Fade>

        <Fade right>
          <div className="intro-first-para-container">
            <div
              className={
                darkMode ? `intro-first-para-dark` : `intro-first-para`
              }
            >
              <p>
                Hi! I'm James, and I'm a Full-Stack Web Developer living in
                Denver, Colorado. For most of the last decade, I've worked in
                multiple casinos as a pit manager and table games dealer, where
                I've learned to excel in any pace environment, and built a
                foundation on team work and communication. When covid came, and
                I lost my job, I decided to make the change I've always wanted.
                And started my journey as a Web Developer.
              </p>
            </div>
          </div>
        </Fade>
      </div>

      <div className="little-space-intro">
      </div>
    </div>
  );
};

export default Intro;
