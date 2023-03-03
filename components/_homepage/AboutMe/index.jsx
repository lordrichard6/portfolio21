import styled from "styled-components";

import { Colors } from "../../../assets/variables";

import AboutTextComponent from "./text";
import AboutPictureComponent from "./picture";

export default function AboutMe() {
  return (
    <SectionContainer className="relative w-screen flex flex-row justify-center items-center py-24 md:py-32">
      <BackgroundGradient className="absolute w-full h-full" />
      <div className="w-4/5 2xl:w-3/5 flex flex-col xl:flex-row justify-center items-center">
        <AboutTextComponent />
        <AboutPictureComponent />
      </div>
    </SectionContainer>
  );
}

const SectionContainer = styled.section`
  /* background: url("/pattern.png"), ${Colors.primary}; */
  background: ${Colors.primary_background};
`;

const BackgroundGradient = styled.div`
  background: linear-gradient(
    180deg,
    #000000 0%,
    rgba(0, 0, 0, 0.2) 38.54%,
    rgba(0, 0, 0, 0) 100%
  );
`;