import styled from "styled-components";
import Image from "next/image";
import ReactTypingEffect from "react-typing-effect";

import background from "../../../assets/images/homepage/sky_01.jpg";
import { Variables } from '../../../assets/variables'
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
      <SloganContainer>
        <Title>
          <ReactTypingEffect text="Developer" speed={120} eraseDelay={700} />
          <ReactTypingEffect text="Designer" speed={140} eraseDelay={700} />
          <ReactTypingEffect
            text="UI and UX Expert"
            speed={100}
            eraseDelay={700}
          />
        </Title>
        {/* <Animation /> */}
        <SubTitle>
        Solutions don`t come easy
        </SubTitle>
      </SloganContainer>
    </SectionContainer>
  );
}

const SectionContainer = styled.div`
  position: relative;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  padding-left: 8rem;
  padding-right: 8rem;
`;

const SloganContainer = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 1;
`;

const Title = styled.div`
  font-size: 4rem;
  font-weight: 400;
  /* color: ${Variables.primary}; */
  color: #eee;
  display: flex;
  flex-direction: column;
`;

const SubTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: normal;
  color: #eee;
  letter-spacing: 0.2em;
`;

const Background = styled(Image)`
  z-index: 0;
`;
