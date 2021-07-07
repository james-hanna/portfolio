import React, { useState } from "react";
import Zoom from "react-reveal/Zoom";
import { useHistory } from "react-router-dom";
import leftArrow from "../../images/red-arrow-left-top.png";
import rightArrow from "../../images/red-arrow-right-top.png";
import "./home.css";

const Home = ({ darkMode }) => {
  const [gotIt, setGotIt] = useState(false);
  const history = useHistory();

  const gotItHandler = () => {
    setGotIt(!gotIt);
    history.push("./intro");
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <div className="welcome-layover">
        <Zoom>
          <div
            style={{
              display: "flex",
              marginTop: "100px",
            }}
          >
            <div className="welcome-images-container">
              <div className="welcome-arrow-left-container">
                <img
                  src={leftArrow}
                  alt="left top arrow"
                  className="leftArrow"
                />
                <div className="left-arrow-description-box">
                  <p>Dark/Light Mode</p>
                </div>
              </div>

              <div className="welcome-arrow-right-container">
                <div className="right-arrow-description-box">
                  <p>Other Color Options</p>
                </div>
                <img
                  src={rightArrow}
                  alt="right top arrow"
                  className="rightArrow"
                />
              </div>

              <button onClick={() => gotItHandler()} className="got-it-button">
                <br />
                continue
              </button>
            </div>
          </div>
        </Zoom>
        <div className="little-space-home"></div>
      </div>
    </div>
  );
};

export default Home;
