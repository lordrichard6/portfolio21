import styled from "styled-components";
// import Image from "next/image";

import { skillsAndExperience } from "../../../assets/data";
import { Colors } from "../../../assets/variables";

export default function Left() {
  return (
    <LeftSection>
      <InnerSection>
        <Title>{skillsAndExperience.title}</Title>
        <p>
          {skillsAndExperience.text01}
          <br />
          {skillsAndExperience.text02}
          <br />
          {skillsAndExperience.text03}
        </p>
      </InnerSection>
      {/* <Image src={logo} alt="logo" /> */}
    </LeftSection>
  );
}

const LeftSection = styled.div`
  width: 50%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: flex-start;

  @media screen and (max-width: 764px) {
    width: 100%;
  }
`;

const InnerSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: flex-start;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  p {
    font-size: 1.25rem;
    letter-spacing: 1px;

    @media screen and (min-width: 2024px) {
      font-size: 1.5rem;
    }
  }
`;

const Title = styled.h1`
  margin-top: 0;
  font-size: 4rem;
  font-weight: 400;
  text-shadow: 1px 2px 4px #00000081;
`;
