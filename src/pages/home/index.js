import React from "react";
import Zoom from "react-reveal/Zoom";
import "./home.css"

const Home = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center", flexDirection:"column", marginTop: "100px" }}>
      <Zoom>
        <h1> Home </h1>
      </Zoom>
      <div className="little-space-home">
        <h3> just testing out the background and scroll!</h3>
      </div>
    </div>
  );
};

export default Home;
