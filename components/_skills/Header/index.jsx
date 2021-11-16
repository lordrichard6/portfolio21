import styled from "styled-components";
import Image from "next/image";
import ReactTypingEffect from "react-typing-effect";

import background from "../../../assets/images/skills/header_03.jpg";
import { Colors } from "../../../assets/variables";
// import Animation from './animation'

export default function Header() {
  return (
    <SectionContainer>
      <Background
        src={background}
        layout="fill"
        objectFit="cover"
        objectPosition="center"
      />
      <Title>
        <ReactTypingEffect text="mySkills" speed={120} eraseDelay={700} />
      </Title>
      {/* <Animation /> */}
    </SectionContainer>
  );
}

const SectionContainer = styled.div`
  position: relative;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  padding-left: 8rem;
  padding-right: 8rem;
`;

const Title = styled.div`
  z-index: 1;
  font-size: 4rem;
  font-weight: 400;
  color: ${Colors.primary};
  text-shadow: 1px 1px 1px #000, 3px 3px 5px ${Colors.secondary};
  /* color: #eee; */
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    font-size: 2.8rem;
  }
  @media screen and (min-width: 2560px) {
    font-size: 5rem;
  }
`;

const Background = styled(Image)`
  z-index: 0;
`;
