import styled, { css } from "styled-components";

export const Para = styled.p`
  color: #000;
`;
export const DarkPara = styled.p`
  color: #fff;
`;

export const Container = styled.div`
  background-color: rgba(255,255,255,0.87);
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
  color: rgba(0,0,0,0.87);
  box-shadow: 0px 0px 0px 10px rgba(0,0,0,0.3);
  border-radius: 25px;
`;

export const DarkContainer = styled.div`
  background-color: #2c2c2c;
  justify-content: center;
  display: flex;
  flex-direction: column;
  border: 15px solid #1f1f1f;
  position: relative;
  overflow: hidden;
  width: 85%;
  max-width: 1280px;
  margin: auto;
  margin-top: 100px;
  color: rgba(255, 255, 255, 0.87);
  border-radius: 25px;
`;
export const Children = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  height: 550px;
`;

export const Arrow = styled.div`
  text-shadow: 1px 1px 1px #fff;
  color: ${(props) => props.color? props.color : `rgba(0,0,0,0.3)`};
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
export const DarkArrow = styled.div`
  text-shadow: 1px 1px 1px #fff;
  color: #b0bec5;
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

export const Dot = styled.span`
  font-size: 1.5em;
  cursor: pointer;
  color: ${(props) => props.color? props.color : `rgba(0,0,0,0.3)`};
  text-shadow: 1px 1px 1px #fff;
  user-select: none;
`;
export const DarkDot = styled.span`
  font-size: 1.5em;
  cursor: pointer;
  color: #b0bec5;
  text-shadow: 1px 1px 1px #fff;
  user-select: none;
`;

export const Dots = styled.span`
  justify-self: center;
  text-align: center;
  width: 100%;
  z-index: 100;
`;
