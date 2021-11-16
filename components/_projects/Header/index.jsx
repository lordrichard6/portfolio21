import styled from "styled-components";
import Image from "next/image";
import ReactTypingEffect from "react-typing-effect";

import background from "../../../assets/images/projects/header_02.jpg";
import { Variables } from "../../../assets/variables";
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
        <ReactTypingEffect text="myProjects" speed={120} eraseDelay={700} />
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
  align-items: flex-start;
  width: 100%;
  min-height: 100vh;
  padding-left: 8rem;
  @media screen and (max-width: 390px) {
    padding: 0;
    align-items: center;
  }
  @media screen and (min-width: 2560px) {
    padding-left: 20rem;
  }
`;

const Title = styled.div`
  z-index: 1;
  font-size: 4rem;
  font-weight: 400;
  color: ${Variables.primary};
  /* color: #eee; */
  /* flex-direction: column; */
  @media screen and (min-width: 2560px) {
    font-size: 5rem;
  }
`;

const Background = styled(Image)`
  z-index: 0;
`;
