import styled from "styled-components";

export const Wrapper = styled.div`
  background: #222;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.section`
  background: #777;
  width: 90vw;
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Svg = styled.svg`
  /* height: 90%;
  width: 100%; */
  background: white;
  overflow: visible;
`;

export const Path = styled.path`
  stroke: red;
  fill: none;
`;
