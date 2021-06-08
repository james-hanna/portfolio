import React from "react";
import Zoom from "react-reveal/Zoom";
import "./home.css"
import darkModeLogo from "../../images/home-logo-dark.png"

const Home = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center", flexDirection:"column", marginTop: "100px" }}>
      <Zoom>
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
      </Zoom>
      <div className="little-space-home">
        <h3> just testing out the background and scroll!</h3>
      </div>
    </div>
  );
};

export default Home;
