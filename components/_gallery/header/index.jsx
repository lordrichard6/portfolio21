import styled from "styled-components";
import React from "react";

// import Animation from "./animation";
import TitleComponent from "./title";
import BackgroundComponent from "./background";
import { StarsComponent } from "../../_homepage/Header/stars";

export default function HeaderComponent() {
  return (
    <Container id="top">
      <TitleComponent />
      <BackgroundComponent />
      <StarsComponent />
      {/* <Animation /> */}
    </Container>
  );
}

const Container = styled.header`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  margin: 0;
`;
