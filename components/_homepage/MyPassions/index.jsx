import styled from "styled-components";
import useTranslation from "next-translate/useTranslation";

import { Colors } from "../../../assets/variables";
import HobbiesComponent from "./hobbies";
import HexagonComponent from "./hexagon";
import EvolutionComponent from "./evolution";
import HobbiesTitleComponent from './title'
// import PoligonsAnimationComponent from './poligons_animation'

export default function MyPassions() {
  let { t } = useTranslation();

  return (
    <SectionContainer>
      <BackgroundGradient></BackgroundGradient>
      <HobbiesTitleComponent />

        <HexagonComponent />
        <HobbiesComponent />
        <EvolutionComponent />
      {/* <PoligonsAnimationComponent /> */}
    </SectionContainer>
  );
}

const SectionContainer = styled.section`
  position: relative;
  width: 100%;
  min-height: 120vh;
  /* padding: 5rem 0; */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  color: ${Colors.white};
  overflow-x: hidden;
  /* background: url("/pattern.png"), ${Colors.primary}; */
  background: linear-gradient(to right, #20303c, #478995, #b2d6bc);

  @media screen and (max-width: 764px) {
    min-height: 1200px;
  }
`;

const BackgroundGradient = styled.div`
  position: absolute;

  z-index: 1;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    0deg,
    #0f2027 0%,
    rgba(15, 32, 39, 0.2) 38.54%,
    rgba(15, 32, 39, 0) 100%
  );
`;