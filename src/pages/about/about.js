import React from "react";
import "./about.css"
import darkModeLogo from "../../images/about-logo-dark.png"

const About = ({darkMode}) => {
  return (
    <div style={{ display: "flex", justifyContent: "center", flexDirection:"column", marginTop: "100px" }}>
              <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "100px",
          }}
        >
          <img
            className="title-logo"
            src={darkModeLogo}
            alt="projects pixel"
          ></img>
        </div>
      <div className="little-space-about">
        <h3> just testing out the background and scroll!</h3>
      </div>
    </div>
  );
};

export default About;
