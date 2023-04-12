import styled from "styled-components";

import { Colors } from "../../../assets/variables";
import EvolutionComponent from "./evolution";

export default function BottomSection() {

  return (
    <SectionContainer className="mt-24 h-[60vh] md:h-[40vh]">
      <EvolutionComponent />
      <BackgroundGradient />
    </SectionContainer>
  );
}

const SectionContainer = styled.section`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  color: ${Colors.white};
  /* overflow-x: hidden; */
`;

const BackgroundGradient = styled.div`
  position: absolute;
  z-index: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    0deg,
    #0f2027 0%,
    rgba(15, 32, 39, 0.2) 38.54%,
    rgba(15, 32, 39, 0) 100%
  );
`;
