import styled from "styled-components";
import React from "react";

import TitleComponent from "./title";
import BackgroundComponent from "./background";
import { StarsComponent } from "../../_shared";

export default function AboutHeader() {
  return (
    <Container id="top">
      <TitleComponent />
      <BackgroundComponent />
      <StarsComponent />
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
