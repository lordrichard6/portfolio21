import styled from "styled-components";
import useTranslation from "next-translate/useTranslation";

import { Colors } from "../../../assets/variables";
import HobbiesComponent from "./hobbie-elements/hobbies";
import CenterHexagonComponent from "./hobbie-elements/centerHexagon";
import { TitlePrimary } from "../../_shared";

export default function HobbiesSection() {
  let { t } = useTranslation();

  return (
    <SectionContainer className="my-24">
      <TitlePrimary title="Hobbies build character" />
      <CenterHexagonComponent />
      <HobbiesComponent />
    </SectionContainer>
  );
}

const SectionContainer = styled.section`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  color: ${Colors.white};
  /* overflow-x: hidden; */
`;
