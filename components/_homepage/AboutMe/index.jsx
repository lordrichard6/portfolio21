import styled from "styled-components";

import { Colors } from "../../../assets/variables";
import AboutTextComponent from './text'
import AboutPictureComponent from './picture'

export default function AboutMe() {

  return (
    <SectionContainer className="background">
      <BackgroundGradient></BackgroundGradient>
      <InnerContainer>
        <AboutTextComponent />
        <AboutPictureComponent />
      </InnerContainer>
    </SectionContainer>
  );
}

const SectionContainer = styled.div`
  position: relative;
  width: 100%;
  padding: 8rem 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  /* background: ${Colors.primary}; */
  /* background: url("/pattern.png"), ${Colors.primary}; */
  background: linear-gradient(to right, #20303c, #478995, #b2d6bc);

  @media screen and (max-width: 764px) {
    padding: 4rem 0;
  }
`;

const BackgroundGradient = styled.div`
  position: absolute;

  width: 100%;
  height: 100%;
  background: linear-gradient(
    180deg,
    #000000 0%,
    rgba(0, 0, 0, 0.2) 38.54%,
    rgba(0, 0, 0, 0) 100%
  );
`;

const InnerContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 992px) {
    flex-direction: column;
  }
  @media screen and (min-width: 1280px) {
    width: 80%;
  }
  @media screen and (min-width: 2560px) {
    width: 60%;
  }
`;