import styled from "styled-components";
// import Image from "next/image";

import { Colors } from "../../../assets/variables";
import Right from './right'
import Left from './left'

export default function SkillsExp() {

  return (
    <SectionContainer>
      <InnerContainer>
        <Left />
        <Right />
      </InnerContainer>
    </SectionContainer>
  );
}

const SectionContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4rem 0;
  background: url("/clouds.svg");
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: cover;

  @media screen and (max-width: 390px) {
    flex-direction: column;
  }
`;

const InnerContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: ${Colors.dark};

  @media screen and (max-width: 390px) {
    flex-direction: column;
  }
`;
