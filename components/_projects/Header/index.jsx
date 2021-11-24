import styled from "styled-components";
import Image from "next/image";
import ReactTypingEffect from "react-typing-effect";

import { projectsHeader } from "../../../assets/data";
import { Colors } from "../../../assets/variables";
// import Animation from './animation'

export default function Header() {
  return (
    <SectionContainer>
      <Title>
        <ReactTypingEffect text="myProjects" speed={120} eraseDelay={700} />
      </Title>
      <h1>A man`s worth is what he can do with the weapons at hand.</h1>
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
  height: 40rem;
  background: url("/header_projects.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  @media screen and (max-width: 764px) {
    padding: 0;
    align-items: center;
  }
  @media screen and (min-width: 2560px) {
    height: 50rem;
  }

  h1 {
    font-weight: 400;
    color: ${Colors.white};
    width: 80%;
    text-align: center;
    text-shadow: 1px 1px 1px #000, 3px 3px 5px ${Colors.primary};

    @media screen and (max-width: 764px) {
      font-size: 1.8rem;
    }
  }
`;

const Title = styled.div`
  width: 100%;
  text-align: center;
  z-index: 1;
  font-size: 4rem;
  font-weight: 400;
  color: ${Colors.white};
  text-shadow: 1px 1px 1px #000, 3px 3px 5px ${Colors.primary};

  @media screen and (min-width: 2560px) {
    font-size: 5rem;
  }
`;
