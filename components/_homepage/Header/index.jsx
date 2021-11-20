import styled from "styled-components";
import Image from "next/image";
import ReactTypingEffect from "react-typing-effect";

import { homeHeader } from "../../../assets/data";
import { Colors } from "../../../assets/variables";
// import Animation from './animation'

export default function Header() {
  return (
    <SectionContainer>
      <Background
        src={homeHeader.backgroundImage}
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        alt="paulo reizinho header"
      />
      <InnerContainer>
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
          <SubTitle>{homeHeader.subTitle}</SubTitle>
        </SloganContainer>
        <ImageContainer>
          <Image src={homeHeader.logo} alt="paulo reizinho logo" />
        </ImageContainer>
      </InnerContainer>
    </SectionContainer>
  );
}

const SectionContainer = styled.section`
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6rem 0;
  @media screen and (max-width: 500px) {
    height: 100%;
  }
`;

const InnerContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1024px) {
    flex-direction: column-reverse;
    text-align: center;
  }
  @media screen and (min-width: 1080px) {
    width: 70%;
  }
`;

const SloganContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  z-index: 1;

  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`;

const ImageContainer = styled.div`
  width: 50%;
  height: auto;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Title = styled.div`
  font-size: 4rem;
  font-weight: 400;
  text-shadow: 1px 1px 1px #000, 3px 3px 5px ${Colors.primary};
  color: #eee;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    font-size: 2.8rem;
  }
  @media screen and (min-width: 2560px) {
    font-size: 5rem;
  }
`;

const SubTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: normal;
  color: #eee;
  letter-spacing: 0.2em;

  @media screen and (max-width: 768px) {
    text-align: center;
  }
  @media screen and (min-width: 2560px) {
    font-size: 3rem;
  }
`;

const Background = styled(Image)`
  z-index: 0;
`;
