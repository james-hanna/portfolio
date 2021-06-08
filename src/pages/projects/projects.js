import React, {useState} from "react";
import styled, { css } from "styled-components";
import Slide from "react-reveal/Slide";
import makeCarousel from "react-reveal/makeCarousel";
import Fade from "react-reveal/Fade";
import logo from "../../images/projects-logo.png";
import darkModeLogo from "../../images/projects-logo-dark.png";
import useInterval from "../../utils/useIntervals"
import ok from "../../images/ok.jpg";
import "./projects.css";

const Projects = ({ darkMode }) => {
  const Container = styled.div`
    background-color: white;
    justify-content: center;
    display: flex;
    flex-direction: column;
    border: 1px solid #949dd4;
    position: relative;
    overflow: hidden;
    width: 85%;
    max-width: 1280px;
    margin: auto;
    margin-top: 100px;
  `;
  const Children = styled.div`
    display: flex;
    width: 100%;
    position: relative;
    height: 550px;
  `;
  const Arrow = styled.div`
    text-shadow: 1px 1px 1px #fff;
    color: #949dd4;
    z-index: 100;
    line-height: 550px;
    text-align: center;
    position: absolute;
    top: 0;
    width: 5%;
    font-size: 2em;
    cursor: pointer;
    user-select: none;
    ${(props) =>
      props.right
        ? css`
            left: 95%;
          `
        : css`
            left: 0%;
          `}
  `;
  const Dot = styled.span`
    font-size: 1.5em;
    cursor: pointer;
    color: #949dd4;
    text-shadow: 1px 1px 1px #fff;
    user-select: none;
  `;
  const Dots = styled.span`
    justify-self: center;
    text-align: center;
    width: 100%;
    z-index: 100;
  `;
  const CarouselUI = ({ position, total, handleClick, children }) => (
    <Container>
      <Children>
        {children}
        <Arrow onClick={handleClick} data-position={position - 1}>
          {"<"}
        </Arrow>
        <Arrow right onClick={handleClick} data-position={position + 1}>
          {">"}
        </Arrow>
      </Children>
      <Dots>
        {Array(...Array(total)).map((val, index) => (
          <Dot key={index} onClick={handleClick} data-position={index}>
            {index === position ? "● " : "○ "}
          </Dot>
        ))}
      </Dots>
    </Container>
  );
  const Carousel = makeCarousel(CarouselUI);
  const wait = 150000;
  const [count, setCount ] = useState(0)
  const [ isPlaying, setIsPlaying ] = useState(false)

 useInterval(
   () => {
     setCount(count + 1)
   },
   isPlaying ? 1000 : null,
   )
  function clearHandler(){
    setIsPlaying(false);
    setCount(0);
  }
  return (
    <div className="test">
      <Fade up>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "100px",
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
              <div style={{margin: "auto"}}>
                <h2 style={{marginTop: "50px"}}> Current Leader: AAA Time: 36</h2>
                <h3 style={{marginTop: "25px"}}> Second Place:   AAA Time: 39</h3>
                <h3 style={{marginTop: "25px"}}> Third Place:    AAA Time: 43</h3>
              </div>
              <h3 style={{marginTop: "100px"}}>Scroll Races!</h3>
              <p>
                See just how fast you can scroll to the bottom. Can you make the High Scores? Press Start! and start Scrolling!
              </p>
              
              <p>
                {count}
              </p>
              <button onClick={() => setIsPlaying(true)} style={{width: "50px", margin: "auto"}}>Start!</button>
              <button onClick={() => clearHandler()} style={{width: "50px", margin: "auto"}}>Clear!</button>
            </div>
          </Slide>
          <Slide right>
            <div className="project">
              <a className="project-img" href="/">
                <img
                  src="https://via.placeholder.com/400"
                  alt="project 2 placeholder"
                />
              </a>
              <h3>Project 2!</h3>
              <p>
                Really Wish I had some completed projects I could write about
                here!
              </p>
              <p>
                <a href="/">Link to Project</a>
              </p>
              <p>
                <a href="/">Link to Repository</a>
              </p>
            </div>
          </Slide>
          <Slide right>
            <div className="project">
              <a className="project-img" href="/">
                <img
                  src="https://via.placeholder.com/400"
                  alt="project 3 placeholder"
                />
              </a>
              <h3>Project 3!</h3>
              <p>
                I bet some actual project text would make this area look a lot
                better!
              </p>
              <p>
                <a href="/">Link to Project</a>
              </p>
              <p>
                <a href="/">Link to Repository</a>
              </p>
            </div>
          </Slide>
          <Slide right>
            <div className="project">
              <a className="project-img" href="/">
                <img
                  src="https://via.placeholder.com/400"
                  alt="project 4 placeholder"
                />
              </a>
              <h3>Project 4!</h3>
              <p>
                I bet some actual project text would make this area look a lot
                better!
              </p>
              <p>
                <a href="/">Link to Project</a>
              </p>
              <p>
                <a href="/">Link to Repository</a>
              </p>
            </div>
          </Slide>
        </Carousel>
        <div className="little-space">
          <h3> just testing out the background and scroll!</h3>
        </div>
        <div className="space-taker">
          <p>Wow, you made it all the way down here</p>
          <img className="ok" src={ok} alt="rekt nerd"></img>
        </div>
      </Fade>
    </div>
  );
};

export default Projects;
