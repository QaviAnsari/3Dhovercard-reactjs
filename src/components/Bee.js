import React from "react";
import depr from "../images/depr.jpg";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";

const Container = styled(animated.div)`
  margin: 60px;
  display: inline-block;
  padding: 3em;
  background: #c7d2fe66;
  border-radius: 20px;
  z-index: 1;
  position: relative;
  backdrop-filer: blur(10px);
  border: 10px solid black;
  background-clip: border-box;
  cursor: pointer;
`;

const StyledImg = styled.img`
  margin: 23px;
  shadow-bottom: 1px;
  width: 230px;
  height: auto;
  border: 2px solid black;
  border-radius: 20%;
`;

const StyledH1 = styled.h1`
  line-height: 1, 5;
  letter-spacing: 1px;
  font-family: "monospace";
  font: "bold";
`;

const StyledH3 = styled.h3`
  line-height: 1;
  letter-spacing: 1px;
`;

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1.1,
];
const trans = (x, y, s) =>
  `perspective(700px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const Bee = () => {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 10, tension: 200, friction: 50 },
  }));
  return (
    <Container
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{ transform: props.xys.interpolate(trans) }}
    >
      <StyledImg src={depr} />
      <StyledH1> Simple </StyledH1>
      <StyledH3>Have coffee script</StyledH3>
    </Container>
  );
};
export default Bee;
