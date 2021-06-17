import React from "react";
import Slide from "react-reveal/Slide";
import makeCarousel from "react-reveal/makeCarousel";
import Fade from "react-reveal/Fade";
import logo from "../../images/projects-logo.png";
import darkModeLogo from "../../images/projects-logo-dark-v2.png";
import {
  Para,
  DarkPara,
  Container,
  DarkContainer,
  Children,
  Arrow,
  DarkArrow,
  Dot,
  DarkDot,
  Dots,
} from "./carousel-components.js";
import ok from "../../images/ok.jpg";
import "./projects.css";
import ReservationProjectDisplay from "./reservation_setter/ReservationProjectDisplay.js";

const Projects = ({ darkMode, color }) => {
  const DarkCarouselUI = ({ position, total, handleClick, children }) => (
    <DarkContainer>
      <Children>
        {children}
        <DarkArrow onClick={handleClick} data-position={position - 1}>
          {"<"}
        </DarkArrow>
        <DarkArrow right onClick={handleClick} data-position={position + 1}>
          {">"}
        </DarkArrow>
      </Children>
      <Dots>
        {Array(...Array(total)).map((val, index) => (
          <DarkDot key={index} onClick={handleClick} data-position={index}>
            {index === position ? "● " : "○ "}
          </DarkDot>
        ))}
      </Dots>
    </DarkContainer>
  );

  const CarouselUI = ({ position, total, handleClick, children }) => (
    <Container>
      <Children>
        {children}
        <Arrow color={color} onClick={handleClick} data-position={position - 1}>
          {"<"}
        </Arrow>
        <Arrow
          color={color}
          right
          onClick={handleClick}
          data-position={position + 1}
        >
          {">"}
        </Arrow>
      </Children>
      <Dots>
        {Array(...Array(total)).map((val, index) => (
          <Dot
            color={color}
            key={index}
            onClick={handleClick}
            data-position={index}
          >
            {index === position ? "● " : "○ "}
          </Dot>
        ))}
      </Dots>
    </Container>
  );

  const Carousel = makeCarousel(darkMode ? DarkCarouselUI : CarouselUI);
  const wait = 5000;

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Fade up>
        <div
          style={{
            marginTop: "100px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img
            className="title-logo"
            src={darkMode === true ? darkModeLogo : logo}
            alt="projects pixel"
          ></img>
        </div>
        <Carousel defaultWait={wait} maxTurns={1}>
          <Slide right>
            <div className="project">
              <div className="project-title-container">
                <h1>Reservation Setter</h1>
              </div>
              <ReservationProjectDisplay />
            </div>
          </Slide>
        </Carousel>
        <div className="space-taker">
          {darkMode ? (
            <DarkPara>Wow, you made it all the way down here </DarkPara>
          ) : (
            <Para>Wow, you made it all the way down here</Para>
          )}

          <img className="ok" src={ok} alt="rekt nerd"></img>
        </div>
      </Fade>
    </div>
  );
};

export default Projects;
